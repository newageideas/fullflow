import React, { useState, useEffect } from 'react';
import { Language } from '../data/content';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { InspectionSection } from '../components/InspectionSection';
import { LeadForm } from '../components/LeadForm';
import { ServicesSection } from '../components/ServicesSection';
import { DiagnosticTool } from '../components/DiagnosticTool';
import { PricesSection } from '../components/PricesSection';
import { FaqSection } from '../components/FaqSection';
import { PlumberSection } from '../components/PlumberSection';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { RealtorsSection } from '../components/RealtorsSection';
import { Footer } from '../components/Footer';
import { StickyActions } from '../components/StickyActions';
import { AiChatbot } from '../components/AiChatbot';

export const HomePage: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ff-lang');
    if (saved === 'en' || saved === 'es' || saved === 'pa') return saved;
    const navLang = typeof navigator !== 'undefined' ? (navigator.language || '').toLowerCase() : '';
    if (navLang.startsWith('pa')) return 'pa';
    if (navLang.startsWith('es')) return 'es';
    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('ff-lang', newLang);
  };

  return (
    <>
      <Header lang={lang} onSetLang={handleSetLang} />
      <main id="main">
        <Hero lang={lang} />
        <InspectionSection lang={lang} />
        <LeadForm lang={lang} />
        <ServicesSection lang={lang} />
        <DiagnosticTool lang={lang} />
        <PricesSection lang={lang} />
        <FaqSection lang={lang} />
        <PlumberSection lang={lang} />
        <ServiceAreaSection lang={lang} />
        <RealtorsSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <StickyActions lang={lang} />
      {/* Movable circle chatbot powered by Gemini 3.8 Flash */}
      <AiChatbot lang={lang} />
    </>
  );
};
