
import React from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout: () => void;
}

const Navigation = ({ activeSection, setActiveSection, onLogout }: NavigationProps) => {
  const navItems = [
    {
      id: 'clases',
      label: 'Clases',
      subitems: [
        { id: 'diplomado', label: 'Diplomado' },
        { id: 'seminarios', label: 'Seminarios' }
      ]
    },
    {
      id: 'alumnos',
      label: 'Alumnos'
    },
    {
      id: 'estatus',
      label: 'Estatus',
      subitems: [
        { id: 'mensualidades', label: 'Mensualidades' },
        { id: 'asistencias', label: 'Asistencias' }
      ]
    },
    {
      id: 'maestros',
      label: 'Maestros',
      subitems: [
        { id: 'lista-maestros', label: 'Lista maestros' },
        { id: 'avisos', label: 'Avisos' }
      ]
    },
    {
      id: 'perfil',
      label: 'Perfil',
      subitems: [
        { id: 'ver-perfil', label: 'Ver perfil' },
        { id: 'cerrar-sesion', label: 'Cerrar sesión', action: onLogout }
      ]
    }
  ];

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="bg-white text-blue-600 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">SDV</h1>
          </div>
          <div className="text-white text-sm">
            <span className="opacity-75">(Entras como admin)</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white text-blue-600 hover:bg-blue-50 border-white"
          >
            EDITAR PERFIL
          </Button>
        </div>
      </div>
      
      <div className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-0">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  className={`px-6 py-3 text-white font-medium hover:bg-blue-400 transition-colors ${
                    activeSection.startsWith(item.id) ? 'bg-blue-400' : ''
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                  {item.subitems && (
                    <svg className="inline-block w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {item.subitems && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.subitems.map((subitem) => (
                      <button
                        key={subitem.id}
                        className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => {
                          if (subitem.action) {
                            subitem.action();
                          } else {
                            setActiveSection(subitem.id);
                          }
                        }}
                      >
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
