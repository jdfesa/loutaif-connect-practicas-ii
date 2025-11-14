import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
// MODIFICAR IMÁGENES: Reemplazar estas imágenes con fotos de la carrera de Lengua y Literatura
import carreraImg1 from "@/assets/carrera-1.jpg";
import carreraImg2 from "@/assets/carrera-2.jpg";
import carreraImg3 from "@/assets/carrera-3.jpg";

const Lengua = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-4">
              Profesorado
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
  Profesorado de Educación Secundaria en Lengua y Literatura
</h1>

<p className="text-xl text-gray-200 mb-6">
  Resolución N° 3126/14 – Duración: 4 años
</p>

<div className="text-lg text-gray-100 leading-relaxed space-y-1">
  <p><strong>Denominación de la carrera:</strong> Profesorado de Educación Secundaria en Lengua y Literatura</p>
  <p><strong>Título a otorgar:</strong> Profesor de Educación Secundaria en Lengua y Literatura</p>
  <p><strong>Carga horaria total:</strong> 2964 horas reloj – 3952 horas cátedra</p>
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
                  El Profesorado de Lengua y Literatura forma docentes especializados en la enseñanza 
                  de la lengua castellana y la literatura, con una sólida preparación en teoría literaria, 
                  lingüística y didáctica específica del área.
                </p>
                <p className="text-muted-foreground">
                  La carrera desarrolla competencias para la enseñanza de prácticas del lenguaje, 
                  comprensión y producción de textos, análisis literario y promoción de la lectura, 
                  formando profesionales capaces de fomentar el desarrollo comunicativo y cultural 
                  de los estudiantes.
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
                    Sólida formación en teoría lingüística y literaria
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Capacidad para diseñar propuestas de enseñanza innovadoras
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Dominio de estrategias de comprensión y producción textual
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Análisis crítico de textos literarios y no literarios
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Promoción de la lectura y formación de lectores críticos
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
                    Docente de Lengua y Literatura en nivel secundario
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Profesor en institutos de formación docente
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Coordinador de talleres de lectura y escritura
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Asesor pedagógico en editoriales
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gestor cultural en bibliotecas y centros culturales
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
                      <li>• 1.02 - Didactica General</li>
                      <li>• 1.03 - Psicología Educacional</li>
                      <li>• 1.04 - Lectura y Escritura Académica</li>
                      <li>• 1.05 - Introducción a la lingüistica</li>
                      <li>• 1.06 - Introducción a la literatura</li>
                      <li>• 1.07 - Normativa de la Lengua Española</li>
                      <li>• 1.08 - Literatura Española</li>
                      <li>• 1.09 - Literatura Anglosajona</li>
                      <li>• 1.10 - Práctica Docente I</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Segundo Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 2.11 - Sociología de la Educación</li>
                      <li>• 2.12 - Historia Argentina y Latinoamericana</li>
                      <li>• 2.13 - Tecnologías de la Información y la Cominicación</li>
                      <li>• 2.14 - Gramática de la Lengua Española</li>
                      <li>• 2.15 - Lingüistica</li>
                      <li>• 2.16 - Literatura Argentina I</li>
                      <li>• 2.17 - Literatura Hispanoamericana I</li>
                      <li>• 2.18 - Didáctica de la Lengua y la Literatura I</li>
                      <li>• 2.19 - Sujetos de la Educación Secundaria</li>
                      <li>• 2.20 - Práctica Docente II</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Tercer Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 3.21 - Historia y Política de la Educación Argentina</li>
                      <li>• 3.22 - Filosofía</li>
                      <li>• 3.23 - Inclusión Educativa en el nivel secundario</li>
                      <li>• 3.24 - Didáctica Especial de la Lengua y la literatura II</li>
                      <li>• 3.25 - Gramática de la Lengua Española II</li>
                      <li>• 3.26 - Literatura Hispanoamericana II</li>
                      <li>• 3.27 - Literatura Argentina II</li>
                      <li>• 3.28 - Latín</li>
                      <li>• 3.29 - Psicolingïstica</li>
                      <li>• 3.30 - Práctica Docente III</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Cuarto Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 4.31 - Formación Ética y Ciudadana</li>
                      <li>• 4.32 - Educación Sexual Integral</li>
                      <li>• 4.33 - Literatura Románicas</li>
                      <li>• 4.34 - Literatura en Lengua Portuguesa</li>
                      <li>• 4.35 - Taller de Escritura creativa</li>
                      <li>• 4.36 - Teatro</li>
                      <li>• 4.37 - EDI</li>
                      <li>• 4.38 - Lingüística del texto</li>
                      <li>• 4.39 - Problemáticas de la Enseñanza en Lengua y Literatura</li>
                      <li>• 4.40 - Práctica Docente IV</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ENLACE A RESOLUCIÓN MINISTERIAL - Modificar el href con el link de Drive cuando esté disponible */}
            <div className="flex justify-center pt-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/1KYbqn6QSNZqflYHpHWi9dKT-hkBvKpNq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Ver Resolución Ministerial N° 3126/14
                </a>
              </Button>
            </div>

            {/* Galería de Imágenes */}
            {/* MODIFICAR IMÁGENES: Reemplazar con fotos reales de la carrera */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg1} 
                  alt="Estudiantes de Lengua y Literatura" 
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

export default Lengua;
