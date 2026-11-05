import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InspectionPage } from './pages/InspectionPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { QrPage } from './pages/QrPage';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inspection" element={<InspectionPage />} />
      <Route path="/inspection.html" element={<InspectionPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/privacy.html" element={<PrivacyPage />} />
      <Route path="/qr" element={<QrPage />} />
      <Route path="/qr.html" element={<QrPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
