import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
// MODIFICAR IMÁGENES: Reemplazar estas imágenes con fotos de la Tecnicatura en Análisis de Sistemas
import carreraImg1 from "@/assets/carrera-1.jpg";
import carreraImg2 from "@/assets/carrera-2.jpg";
import carreraImg3 from "@/assets/carrera-3.jpg";

const Sistemas = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-4">
              Tecnicatura
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
  Tecnicatura Superior en Análisis de Sistemas y Desarrollo de Software
</h1>

<p className="text-xl text-gray-200 mb-6">
  Resolución N° 03/23 – Duración: 3 años
</p>

<div className="text-lg text-gray-100 leading-relaxed space-y-1">
  <p><strong>Nivel:</strong> Superior</p>
  <p><strong>Título a otorgar:</strong> Técnico Superior en Análisis de Sistemas y Desarrollo de Software</p>
  <p><strong>Modalidad:</strong> Presencial</p>
  <p><strong>Carga horaria:</strong> 1944 horas reloj – 2592 horas cátedra</p>
</div>

          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Descripción de la Carrera</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  La Tecnicatura en Análisis de Sistemas forma profesionales capacitados para el 
                  desarrollo, implementación y mantenimiento de sistemas informáticos, con sólidos 
                  conocimientos en programación, bases de datos y arquitectura de software.
                </p>
                <p className="text-muted-foreground">
                  La formación abarca tanto aspectos técnicos como metodológicos del desarrollo de 
                  software, preparando analistas capaces de resolver problemas mediante soluciones 
                  tecnológicas eficientes y escalables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Perfil Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Análisis y diseño de sistemas informáticos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Desarrollo de aplicaciones en diferentes lenguajes de programación
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gestión de bases de datos y modelado de información
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Implementación de soluciones web y aplicaciones móviles
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Trabajo en equipo y aplicación de metodologías ágiles
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ámbitos de Desempeño</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Empresas de desarrollo de software
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Áreas de sistemas de empresas públicas y privadas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Consultorías informáticas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Desarrollo independiente (freelance)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Startups tecnológicas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plan de Estudios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">Primer Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 1.01 - Habilidades Comunicacionales</li>
                      <li>• 1.02 - Matemática</li>
                      <li>• 1.03 - Inglés Técnico I</li>
                      <li>• 1.04 - Innovación y Desarrollo Emprendedor</li>
                      <li>• 1.05 - Psicosociología de las Organizaciones</li>
                      <li>• 1.06 - Sistemas Operativos</li>
                      <li>• 1.07 - Fundamentos de Programación</li>
                      <li>• 1.08 - Programación I</li>
                      <li>• 1.09 - Informática General</li>
                      <li>• 1.10 - PP I: Operador Básico de Computadora</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Segundo Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 2.11 - Ética y Responsabilidad Social</li>
                      <li>• 2.12 - Electrónica Analógica y Digital</li>
                      <li>• 2.13 - Estadística</li>
                      <li>• 2.14 - Programación II</li>
                      <li>• 2.15 - Redes Informáticas y Comunicación</li>
                      <li>• 2.16 - Bases de Datos</li>
                      <li>• 2.17 - Robótica y Automatización</li>
                      <li>• 2.18 - Ingeniería de Software I</li>
                      <li>• 2.19 - Programación Web</li>
                      <li>• 2.20 - PP II: Programador Junior</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Tercer Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 3.21 - Educación Sexual Integral</li>
                      <li>• 3.22 - Formulación y Evaluación de Proyectos de Software</li>
                      <li>• 3.23 - Ingeniería de Software II</li>
                      <li>• 3.24 - Modelado de Software</li>
                      <li>• 3.25 - Programación de Aplicaciones para Dispositivos Móviles</li>
                      <li>• 3.26 - Ingeniería de Software</li>
                      <li>• 3.27 - Programación Orientada a Objetos</li>
                      <li>• 3.28 - PP III: Analista y Desarrollo de Software</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> El plan de estudios incluye una practicas profesionalizantes 
                    que permite a los estudiantes aplicar los conocimientos adquiridos en contextos 
                    reales de trabajo, fortaleciendo su inserción laboral.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* ENLACE A RESOLUCIÓN MINISTERIAL - Modificar el href con el link de Drive cuando esté disponible */}
            <div className="flex justify-center pt-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/1-l12C9ThG6fIB08hZCL3G4x_DHQjkxJY/view" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Ver Resolución Ministerial N° 03/23
                </a>
              </Button>
            </div>

            {/* Galería de Imágenes */}
            {/* MODIFICAR IMÁGENES: Reemplazar con fotos reales de la carrera */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg1} 
                  alt="Estudiantes de Análisis de Sistemas" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg2} 
                  alt="Actividades de la carrera" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg3} 
                  alt="Infraestructura del instituto" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sistemas;
