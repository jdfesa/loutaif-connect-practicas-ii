import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
// MODIFICAR IMÁGENES: Reemplazar estas imágenes con fotos de la carrera de Educación Especial
import carreraImg1 from "@/assets/carrera-1.jpg";
import carreraImg2 from "@/assets/carrera-2.jpg";
import carreraImg3 from "@/assets/carrera-3.jpg";

const EducacionEspecial = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-4">
              Profesorado
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
  Profesorado de Educación Especial con Orientación en Discapacidad Intelectual
</h1>

<p className="text-xl text-gray-200 mb-6">
  Resolución N° 4273/19 – Duración: 4 años
</p>

<div className="text-lg text-gray-100 leading-relaxed space-y-1">
  <p><strong>Denominación:</strong> Profesorado de Educación Especial con Orientación en Discapacidad Intelectual</p>
  <p><strong>Título a otorgar:</strong> Profesor/a de Educación Especial con Orientación en Discapacidad Intelectual</p>
  <p><strong>Carga horaria total:</strong> 2808 horas reloj – 3704 horas cátedra</p>
  <p><strong>Modalidad:</strong> Presencial</p>
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
                  El Profesorado de Educación Especial forma docentes especializados en la atención 
                  educativa de personas con discapacidad, preparando profesionales comprometidos con 
                  la educación inclusiva y la promoción de los derechos de todas las personas.
                </p>
                <p className="text-muted-foreground">
                  La formación aborda los fundamentos teóricos y metodológicos de la educación especial, 
                  desarrollando competencias para el trabajo con la diversidad y la implementación de 
                  propuestas pedagógicas adaptadas a diferentes necesidades educativas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Perfil del Egresado</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Diseño e implementación de propuestas pedagógicas inclusivas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Evaluación y seguimiento de trayectorias educativas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Trabajo interdisciplinario con equipos de salud y sociales
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Orientación y apoyo a familias y comunidad educativa
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Promoción de ambientes inclusivos y accesibles
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campo Laboral</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Docente en escuelas de educación especial
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Maestro integrador en instituciones de nivel inicial, primario y secundario
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Coordinador de proyectos de inclusión educativa
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Docente en centros de formación laboral
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Asesor en equipos interdisciplinarios de orientación
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
                      <li>• 1.01 - Psicología Educacional</li>
                      <li>• 1.02 - Lectura y Escritura Académica</li>
                      <li>• 1.03 - Didáctica General</li>
                      <li>• 1.04 - Historia Argentina y Latinoamericana</li>
                      <li>• 1.05 - Educación Especial: Perspectivas y Estado Actual</li>
                      <li>• 1.06 - Bases Neuropsicobiológicas del Desarrollo</li>
                      <li>• 1.07 - Sujeto de la Educación Especial</li>
                      <li>• 1.08 - Comunicación y Lenguaje</li>
                      <li>• 1.09 - Expresión Dramática y Comunicación</li>
                      <li>• 1.10 - Práctica Docente I</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Segundo Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 2.11 - Pedagogía</li>
                      <li>• 2.12 - TIC</li>
                      <li>• 2.13 - Historia y Política de la Educación Argentina</li>
                      <li>• 2.14 - Lengua y Literatura y su Didáctica</li>
                      <li>• 2.15 - Matemática y su Didáctica</li>
                      <li>• 2.16 - Abordaje Pedagógico en Sujetos con Discapacidad Intelectual I</li>
                      <li>• 2.17 - Educación Artística y su Didáctica: Lenguaje Plástico Visual</li>
                      <li>• 2.18 - Práctica Docente II</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Tercer Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 3.19 - Sociología de la Educación</li>
                      <li>• 3.20 - Educación Sexual Integral</li>
                      <li>• 3.21 - Ciencias Naturales y su Didáctica</li>
                      <li>• 3.22 - Ciencias Sociales y su Didáctica</li>
                      <li>• 3.23 - Abordaje Pedagógico en Sujetos con Discapacidad Intelectual II</li>
                      <li>• 3.24 - Inclusión Educativa</li>
                      <li>• 3.25 - Educación Temprana</li>
                      <li>• 3.26 - Alfabetización Inicial</li>
                      <li>• 3.27 - Práctica Docente III</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Cuarto Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 4.28 - Filosofía</li>
                      <li>• 4.29 - Ética y Deontología de la Profesión Docente</li>
                      <li>• 4.30 - Educación Artística y su Didáctica: Lenguaje Musical</li>
                      <li>• 4.31 - Talleres Rotativos de Educación Artística y su Didáctica</li>
                      <li>• 4.32 - Abordaje Pedagógico en Sujetos con Discapacidad Múltiple</li>
                      <li>• 4.35 - EDI</li>
                      <li>• 4.36 - Práctica Docente IV</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ENLACE A RESOLUCIÓN MINISTERIAL - Modificar el href con el link de Drive cuando esté disponible */}
            <div className="flex justify-center pt-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/1SsIfdL5ktCQDudfchwRcbFFUW5mNfy08/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Ver Resolución Ministerial N° 4273/19
                </a>
              </Button>
            </div>

            {/* Galería de Imágenes */}
            {/* MODIFICAR IMÁGENES: Reemplazar con fotos reales de la carrera */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg1} 
                  alt="Estudiantes de Educación Especial" 
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

export default EducacionEspecial;
