import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
// MODIFICAR IMÁGENES: Reemplazar estas imágenes con fotos de la carrera de Educación Primaria
import carreraImg1 from "@/assets/carrera-1.jpg";
import carreraImg2 from "@/assets/carrera-2.jpg";
import carreraImg3 from "@/assets/carrera-3.jpg";

const Primaria = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-4">
              Profesorado
            </span>
           
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
  Profesorado de Educación Primaria
</h1>

<p className="text-xl text-gray-200 mb-6">
  Resolución N° 1229/19 – Duración: 4 años
</p>

<div className="text-lg text-gray-100 leading-relaxed space-y-1">
  <p><strong>Denominación de la carrera:</strong> Profesorado de Educación Primaria</p>
  <p><strong>Título a otorgar:</strong> Profesor/a de Educación Primaria</p>
  <p><strong>Carga horaria total:</strong> 2616 horas reloj – 3488 horas cátedra</p>
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
                  El Profesorado de Educación Primaria forma docentes capacitados para desempeñarse 
                  en el nivel primario del sistema educativo, con una sólida formación pedagógica y 
                  didáctica orientada a la enseñanza de niños de 6 a 12 años.
                </p>
                <p className="text-muted-foreground">
                  La carrera integra conocimientos teóricos y prácticos sobre el desarrollo infantil, 
                  las áreas curriculares y las estrategias de enseñanza, formando profesionales 
                  comprometidos con una educación inclusiva y de calidad.
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
                    Planificación y desarrollo de propuestas de enseñanza
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Atención a la diversidad y promoción de la inclusión
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Evaluación de aprendizajes y trayectorias escolares
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Trabajo colaborativo con familias y comunidad educativa
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Actualización permanente y reflexión sobre la práctica
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campo Laboral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Los egresados están habilitados para desempeñarse como maestros de nivel primario 
                  en instituciones educativas públicas y privadas en todo el territorio nacional.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Maestro de grado en escuelas primarias
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Docente en proyectos de apoyo escolar
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Coordinador de programas educativos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Capacitador en instituciones educativas
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
                      <li>• 1.01 - Pedagogía</li>
                      <li>• 1.02 - Lectura y Escritura Académica</li>
                      <li>• 1.03 - Didáctica General</li>
                      <li>• 1.04 - Psicología Educacional</li>
                      <li>• 1.05 - Matemática y su Didáctica I</li>
                      <li>• 1.06 - Lengua y su Didáctica I</li>
                      <li>• 1.07 - Ciencias Naturales y su Didáctica I</li>
                      <li>• 1.08 - Ciencias Sociales y su Didáctica I</li>
                      <li>• 1.09 - Práctica Docente I</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Segundo Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 2.10 - Historia Argentina y Latinoamericana</li>
                      <li>• 2.11 - Tecnología de la Información y de la Comunicación </li>
                      <li>• 2.12 - Sociología de la Educación</li>
                      <li>• 2.13 - Sujetos de la Educación Primaria</li>
                      <li>• 2.14 - Matemática y su Didáctica II</li>
                      <li>• 2.15 - Lengua y Literatura y su Didáctica II</li>
                      <li>• 2.16 - Ciencias Naturales y su Didáctica II</li>
                      <li>• 2.17 - Ciencias Sociales y su Didáctica II</li>
                      <li>• 2.18 - Práctica Docente II</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Tercer Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 3.19 - Historia y Política de la Educación Argentina</li>
                      <li>• 3.20 - Educación Sexual Integral</li>
                      <li>• 3.21 - Alfabetización Inicial</li>
                      <li>• 3.22 - Ed. Artística (Artes Visuales)</li>
                      <li>• 3.23 - Ed. Artística (Lenguaje Musical)</li>
                      <li>• 3.24 - Educación Tecnológica y su Didáctica</li>
                      <li>• 3.25 - Literatura para Nivel Primario</li>
                      <li>• 3.26 - Expresión Corporal</li>
                      <li>• 3.27 - EDI</li>
                      <li>• 3.28 - Práctica Docente III</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Cuarto Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 4.29 - Filosofía</li>
                      <li>• 4.30 - Ética y Deontología de la Profesión Docente</li>
                      <li>• 4.31 - Problemática Contemporánea del Nivel Primario</li>
                      <li>• 4.32 - Edcación Rural</li>
                      <li>• 4.33 - Inclusión Educativa</li>
                      <li>• 4.34 - Formación Ética y Ciudadana y su Didáctica</li>
                      <li>• 4.35 - Práctica Docente IV</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ENLACE A RESOLUCIÓN MINISTERIAL - Modificar el href con el link de Drive cuando esté disponible */}
            <div className="flex justify-center pt-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/1DIdTizTzh2bRpovxtwE_s9tVGIaUMoLn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Ver Resolución Ministerial N° 1229/19
                </a>
              </Button>
            </div>

            {/* Galería de Imágenes */}
            {/* MODIFICAR IMÁGENES: Reemplazar con fotos reales de la carrera */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg1} 
                  alt="Estudiantes de Educación Primaria" 
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

export default Primaria;
