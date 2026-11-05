import React, { useState, useEffect, useRef } from 'react';
import { Language, CHATBOT_CONFIG } from '../data/content';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time?: string;
}

interface AiChatbotProps {
  lang: Language;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ lang }) => {
  const config = CHATBOT_CONFIG[lang];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Position for draggable floating circle (docked bottom-right by default)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });
  const movedDistance = useRef(0);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Initialize initial bottom-right position once mounted
  useEffect(() => {
    if (typeof window !== 'undefined' && !pos) {
      const defaultX = Math.max(16, window.innerWidth - 84);
      const defaultY = Math.max(16, window.innerHeight - 150);
      setPos({ x: defaultX, y: defaultY });
    }
  }, [pos]);

  // Set greeting on initial open or language change if thread empty
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: config.greeting,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [config.greeting, messages.length]);

  // Auto-scroll on new message
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('.chat-window')) return;
    isDragging.current = true;
    movedDistance.current = 0;
    dragStart.current = { x: e.clientX, y: e.clientY };
    initialPos.current = pos || { x: 0, y: 0 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    movedDistance.current = Math.hypot(dx, dy);

    const newX = Math.min(Math.max(12, initialPos.current.x + dx), window.innerWidth - 76);
    const newY = Math.min(Math.max(12, initialPos.current.y + dy), window.innerHeight - 76);
    setPos({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    // If not dragged significantly, toggle chat
    if (movedDistance.current < 6) {
      setIsOpen((prev) => !prev);
    }
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      content: trimmed,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({ role: m.role, content: m.content })),
          lang
        })
      });

      const data = await response.json();
      const reply = data.reply || config.disclaimer;

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            lang === 'es'
              ? 'Disculpe, hubo un inconveniente al conectar. Envíe un texto 24/7 a Justin Moreno al 209-779-7300.'
              : lang === 'pa'
              ? 'ਮਾਫ਼ ਕਰਨਾ, ਸੰਪਰਕ ਵਿੱਚ ਸਮੱਸਿਆ ਆਈ ਹੈ। ਜਸਟਿਨ ਮੋਰੇਨੋ ਨੂੰ 24/7 209-779-7300 \'ਤੇ ਟੈਕਸਟ ਕਰੋ।'
              : 'Sorry, I had trouble connecting. You can text Justin Moreno directly 24/7 at 209-779-7300!',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage(input);
    }
  };

  const handleBookInspectionClick = () => {
    setIsOpen(false);
    const requestSec = document.getElementById('request');
    if (requestSec) {
      requestSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to render basic markdown bold and bullet lines nicely
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={i} style={{ display: 'block', minHeight: line.trim() ? 'auto' : '8px' }}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Draggable Circle Floating Icon */}
      <div
        className={`chatbot-floater ${isOpen ? 'active-open' : ''}`}
        style={{
          left: pos ? `${pos.x}px` : 'auto',
          top: pos ? `${pos.y}px` : 'auto',
          touchAction: 'none'
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        aria-label="Open AI Plumbing Assistant (Movable)"
        title="Drag anywhere or click to chat with Flowie AI"
      >
        <div className="floater-circle">
          <span className="bot-icon">💧</span>
          <span className="bot-sparkle">✨</span>
          <span className="ping-ring" />
        </div>
        <div className="floater-tag">
          <b>AI Assistant</b>
          <small>{lang === 'es' ? 'Texto 24/7' : lang === 'pa' ? '24/7 ਟੈਕਸਟ' : '24/7 Text'}</small>
        </div>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="chat-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div
            className="chat-window"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Plumbing AI Assistant"
          >
            {/* Space-Saving Header with Integrated Micro Call & Text Buttons */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <span>JM</span>
                  <div className="chat-online-dot" />
                </div>
                <div>
                  <div className="chat-title">{config.name}</div>
                  <div className="chat-sub">24/7 Text & Call · 209-779-7300</div>
                </div>
              </div>

              {/* Compact header actions: small sleek pills saving maximum typing space */}
              <div className="chat-header-actions">
                <a
                  href="sms:+12097797300?&body=Hi%20Justin%2C%20I%20have%20a%20plumbing%20question%20or%20need%20service."
                  className="chat-micro-btn text-pill"
                  title="Text Justin 24/7 at 209-779-7300"
                >
                  💬 {lang === 'es' ? 'Texto' : lang === 'pa' ? 'ਟੈਕਸਟ' : 'Text'}
                </a>
                <a
                  href="tel:+12097797300"
                  className="chat-micro-btn call-pill"
                  title="Call Justin at 209-779-7300"
                >
                  📞 {lang === 'es' ? 'Llamar' : lang === 'pa' ? 'ਕਾਲ' : 'Call'}
                </a>
                <button
                  type="button"
                  className="chat-icon-btn"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Message Thread (now with full vertical room) */}
            <div className="chat-thread" ref={chatScrollRef}>
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`chat-bubble-row ${m.role === 'user' ? 'user-row' : 'bot-row'}`}
                >
                  <div className={`chat-bubble ${m.role}`}>
                    <div className="bubble-text">{formatText(m.content)}</div>
                    {m.time && <div className="bubble-time">{m.time}</div>}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="chat-bubble-row bot-row">
                  <div className="chat-bubble assistant typing">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </div>
              )}
            </div>

            {/* Compact Starter Prompt Chips (including fast free inspection shortcut) */}
            <div className="chat-prompts">
              <div className="prompts-scroll">
                <button
                  type="button"
                  className="prompt-chip inspection-pill"
                  onClick={handleBookInspectionClick}
                >
                  📋 {config.bookLabel}
                </button>
                {config.prompts.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    className="prompt-chip"
                    onClick={() => sendMessage(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Large, Comfortable Input Bar */}
            <div className="chat-input-bar">
              <input
                type="text"
                placeholder={config.placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                autoFocus
              />
              <button
                type="button"
                className="chat-send-btn"
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
              >
                ➤
              </button>
            </div>

            <div className="chat-disclaimer">{config.disclaimer}</div>
          </div>
        </div>
      )}
    </>
  );
};
