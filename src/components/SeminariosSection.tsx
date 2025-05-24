
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SeminariosSection = () => {
  const horarios = [
    {
      dia: 'LUNES',
      clases: [
        {
          horario: '3:00 a 5:00 p.m Online A3',
          director: 'Dir. Armando LeBlohic',
          alumnos: ['Alumno 1', 'Alumno 2', 'Alumno 3', 'Alumno 4'],
          destacados: [3]
        },
        {
          horario: '5:30 a 7:30 p.m Presenc. A3',
          director: 'Dir. Armando LeBlohic',
          alumnos: ['Alumno 1', 'Alumno 2'],
          destacados: []
        }
      ]
    },
    {
      dia: 'MARTES',
      clases: [
        {
          horario: '3:00 a 5:00 p.m Presenc. A3',
          director: 'Dir. Armando LeBlohic',
          alumnos: ['Alumno 1', 'Alumno 2', 'Alumno 3', 'Alumno 4'],
          destacados: [9]
        }
      ]
    },
    {
      dia: 'MIÉRCOLES',
      clases: [
        {
          horario: '8:00 a 10:00 p.m Presenc. A3',
          director: 'Dir. Armando LeBlohic',
          alumnos: ['Alumno 1', 'Alumno 2', 'Alumno 3', 'Alumno 4'],
          destacados: []
        }
      ]
    },
    {
      dia: 'JUEVES',
      clases: [
        {
          horario: '3:00 a 5:00 p.m Online A3',
          director: 'Dir. Armando LeBlohic',
          alumnos: ['Alumno 1', 'Alumno 2', 'Alumno 3', 'Alumno 4'],
          destacados: [1]
        },
        {
          horario: '5:30 a 7:30 p.m Online A3',
          director: 'Dir. Armando LeBlohic',
          alumnos: ['Alumno 1'],
          destacados: []
        }
      ]
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Armando Le Blohic</h2>
        <p className="text-gray-600">Director de doblaje</p>
        <Badge variant="outline" className="mt-2 text-xs text-gray-500">
          (SEMINARIOS)
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {horarios.map((dia) => (
          <Card key={dia.dia} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-center text-lg font-semibold">
                {dia.dia}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {dia.clases.map((clase, index) => (
                <div key={index} className="p-4 border-b last:border-b-0">
                  <div className="mb-3">
                    <Badge className="bg-blue-100 text-blue-800 text-xs font-medium mb-2">
                      {clase.horario}
                    </Badge>
                    <p className="text-sm text-gray-600 font-medium">
                      {clase.director}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    {clase.alumnos.map((alumno, alumnoIndex) => (
                      <div
                        key={alumnoIndex}
                        className={`px-3 py-2 text-sm rounded ${
                          clase.destacados.includes(alumnoIndex) 
                            ? 'bg-yellow-200 text-yellow-800 font-medium' 
                            : 'bg-gray-50 text-gray-700'
                        }`}
                      >
                        {alumno}
                      </div>
                    ))}
                    
                    {clase.alumnos.length > 4 && (
                      <div className="px-3 py-2 text-sm text-gray-500 bg-gray-50 rounded">
                        ...
                      </div>
                    )}
                    
                    {clase.alumnos.length >= 10 && (
                      <div className="px-3 py-2 text-sm text-gray-700 bg-gray-50 rounded">
                        Alumno 10
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardTitle className="text-center">Navegación Rápida</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50 px-4 py-2">
                Clases
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50 px-4 py-2">
                Asistencias
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50 px-4 py-2">
                Avisos
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-50 px-4 py-2">
                Perfil
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SeminariosSection;
