import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import AgendaPage from '@/pages/AgendaPage';
import DistancesPage from '@/pages/DistancesPage';
import DocumentsPage from '@/pages/DocumentsPage';
import '@/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/agenda" replace />} />
            <Route path="agenda" element={<AgendaPage />} />
            <Route path="distances" element={<DistancesPage />} />
            <Route path="documents" element={<DocumentsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;