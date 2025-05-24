
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AlumnosSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const alumnos = [
    {
      id: 1,
      nombre: 'Sarah Alicia Gutiérrez Hernández',
      curso: 'Diplomado N6',
      fechaNac: '20-08-2024',
      telefono: '52 6647443607',
      email: 'sarahly2008@gmail.com',
      procedencia: 'Hermosillo, Son. MX'
    },
    {
      id: 2,
      nombre: 'Ian Karim Villalba Romero',
      curso: 'Seminario',
      fechaNac: '27-07-2004',
      telefono: '52 6622335646',
      email: 'iankarimromero@gmail.com',
      procedencia: 'Hermosillo, Son. MX'
    },
    {
      id: 3,
      nombre: 'Cristian Jair Alcantar Cienfuegos',
      curso: 'Seminario',
      fechaNac: '07-07-2004',
      telefono: '52 6624622545',
      email: 'cristron2014@gmail.com',
      procedencia: 'Hermosillo, Son. MX'
    },
    {
      id: 4,
      nombre: 'Emmanuel Mizques Martínez',
      curso: 'Diplomado N5',
      fechaNac: '12-05-2007',
      telefono: '52 6625458796',
      email: 'emmanuelmizq@gmail.com',
      procedencia: 'Hermosillo, Son. MX'
    },
    {
      id: 5,
      nombre: 'Aaron Jesús Ramos García',
      curso: 'Diplomado N5',
      fechaNac: '24-12-2002',
      telefono: '52 6425487965',
      email: 'aaronplayer2@gmail.com',
      procedencia: 'Navojoa, Son. MX'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Lizzy Hernández</h2>
          <span className="text-lg text-gray-600">Alumnos</span>
        </div>
        <p className="text-gray-600">Coordinadora</p>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardTitle className="flex items-center justify-between">
            <span>Gestión de Alumnos</span>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                AGREGAR
              </Button>
              <Button size="sm" variant="secondary">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                EDITAR
              </Button>
              <Button size="sm" variant="destructive">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                ELIMINAR
              </Button>
              <Button size="sm" variant="outline" className="text-blue-600 border-blue-600">
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
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
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
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Fecha nac.</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Teléfono</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Correo</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Procedencia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {alumnos.map((alumno) => (
                  <tr key={alumno.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {alumno.nombre}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <Badge variant={alumno.curso.includes('Diplomado') ? 'default' : 'secondary'}>
                        {alumno.curso}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{alumno.fechaNac}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{alumno.telefono}</td>
                    <td className="px-4 py-3 text-sm text-blue-600 hover:text-blue-800">
                      <a href={`mailto:${alumno.email}`}>{alumno.email}</a>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{alumno.procedencia}</td>
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

export default AlumnosSection;
