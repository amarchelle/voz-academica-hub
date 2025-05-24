
import React, { useState } from 'react';
import LoginScreen from '@/components/LoginScreen';
import Navigation from '@/components/Navigation';
import AlumnosSection from '@/components/AlumnosSection';
import MensualidadesSection from '@/components/MensualidadesSection';
import SeminariosSection from '@/components/SeminariosSection';
import DiplomadosSection from '@/components/DiplomadosSection';
import PerfilSection from '@/components/PerfilSection';
import AsistenciasSection from '@/components/AsistenciasSection';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('alumnos');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('alumnos');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'alumnos':
        return <AlumnosSection />;
      case 'mensualidades':
        return <MensualidadesSection />;
      case 'seminarios':
        return <SeminariosSection />;
      case 'diplomado':
        return <DiplomadosSection />;
      case 'ver-perfil':
        return <PerfilSection />;
      case 'asistencias':
        return <AsistenciasSection />;
      case 'lista-maestros':
        return (
          <div className="p-4 sm:p-6 lg:p-8 text-center min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Lista de Maestros</h2>
              <p className="text-sm sm:text-base text-gray-600">Sección en desarrollo...</p>
            </div>
          </div>
        );
      case 'avisos':
        return (
          <div className="p-4 sm:p-6 lg:p-8 text-center min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Avisos</h2>
              <p className="text-sm sm:text-base text-gray-600">Sección en desarrollo...</p>
            </div>
          </div>
        );
      default:
        return <AlumnosSection />;
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onLogout={handleLogout}
      />
      <main className="min-h-screen">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
