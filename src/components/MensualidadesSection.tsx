
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MensualidadesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mensualidades = [
    {
      id: 1,
      nombre: 'Sarah Alicia Gutiérrez Hernández',
      curso: 'Diplomado N6',
      mensualidad: '$900',
      pagos: {
        AGO: 'PAGADO',
        SEP: 'PAGADO', 
        OCT: 'PAGADO',
        NOV: 'PAGADO',
        DIC: null,
        ENE: null,
        FEB: null
      }
    },
    {
      id: 2,
      nombre: 'Ian Karim Villalba Romero',
      curso: 'Seminario',
      mensualidad: '$1000',
      pagos: {
        AGO: 'PAGADO',
        SEP: 'PAGADO', 
        OCT: 'PAGADO',
        NOV: 'PAGADO',
        DIC: null,
        ENE: null,
        FEB: null
      }
    },
    {
      id: 3,
      nombre: 'Cristian Jair Alcantar Cienfuegos',
      curso: 'Seminario',
      mensualidad: '$1000',
      pagos: {
        AGO: 'PAGADO',
        SEP: 'PAGADO', 
        OCT: 'PAGADO',
        NOV: 'PENDIENTE',
        DIC: null,
        ENE: null,
        FEB: null
      }
    },
    {
      id: 4,
      nombre: 'Emmanuel Mizques Martínez',
      curso: 'Diplomado N5',
      mensualidad: '$900',
      pagos: {
        AGO: 'PAGADO',
        SEP: 'PAGADO', 
        OCT: 'PAGADO',
        NOV: null,
        DIC: null,
        ENE: null,
        FEB: null
      }
    },
    {
      id: 5,
      nombre: 'Bruno Sebastián Rojas Hurtado',
      curso: 'Diplomado N4',
      mensualidad: '$1500',
      pagos: {
        AGO: 'PAGADO',
        SEP: 'PAGADO', 
        OCT: 'PENDIENTE',
        NOV: 'PENDIENTE',
        DIC: null,
        ENE: null,
        FEB: null
      }
    }
  ];

  const meses = ['AGO', 'SEP', 'OCT', 'NOV', 'DIC', 'ENE', 'FEB'];

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Lizzy Hernández</h2>
          <span className="text-lg text-gray-600">Mensualidades</span>
        </div>
        <p className="text-gray-600">Coordinadora</p>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardTitle className="flex items-center justify-between">
            <span>Control de Mensualidades</span>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-green-700 hover:bg-green-800">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                REGISTRAR
              </Button>
              <Button size="sm" variant="secondary">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                EDITAR
              </Button>
              <Button size="sm" variant="outline" className="text-green-600 border-green-600">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                FILTRAR
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-4 bg-gray-50 border-b">
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Buscar alumno..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nombre completo</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Curso</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Mensualidad</th>
                  {meses.map(mes => (
                    <th key={mes} className="px-3 py-3 text-center text-sm font-medium text-gray-700">{mes}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mensualidades.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {item.nombre}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <Badge variant={item.curso.includes('Diplomado') ? 'default' : 'secondary'}>
                        {item.curso}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">{item.mensualidad}</td>
                    {meses.map(mes => (
                      <td key={mes} className="px-3 py-3 text-center">
                        {item.pagos[mes] === 'PAGADO' && (
                          <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                            PAGADO
                          </Badge>
                        )}
                        {item.pagos[mes] === 'PENDIENTE' && (
                          <Badge variant="destructive" className="text-xs">
                            PENDIENTE
                          </Badge>
                        )}
                        {item.pagos[mes] === null && (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MensualidadesSection;
