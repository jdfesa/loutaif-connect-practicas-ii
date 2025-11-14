import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
// MODIFICAR IMÁGENES: Reemplazar estas imágenes con fotos de la carrera de Danzas Folklóricas
import carreraImg1 from "@/assets/carrera-1.jpg";
import carreraImg2 from "@/assets/carrera-2.jpg";
import carreraImg3 from "@/assets/carrera-3.jpg";

const Folklore = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-4">
              Profesorado
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
  Profesorado de Danza con Orientación en Danzas Folklóricas
</h1>

<p className="text-xl text-gray-200 mb-6">
  Duración: 4 años
</p>

<div className="text-lg text-gray-100 leading-relaxed space-y-1">
  <p><strong>Denominación de la carrera:</strong> Profesorado de Danza con Orientación en Danzas Folklóricas</p>
  <p><strong>Título a otorgar:</strong> Profesor/a de Danza con Orientación en Danzas Folklóricas (implícito por el nombre de la carrera y el alcance docente)</p>
  <p><strong>Nivel:</strong> Superior</p>
  <p><strong>Carga horaria:</strong> No especificada</p>
</div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Descripción de la Carrera</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  El Profesorado de Danzas Folklóricas forma docentes especializados en la enseñanza 
                  de la danza tradicional argentina, capacitando profesionales con sólidos conocimientos 
                  técnicos, pedagógicos y culturales.
                </p>
                <p className="text-muted-foreground">
                  La carrera integra teoría y práctica, abordando la danza folklórica desde sus aspectos 
                  históricos, culturales y técnicos, preparando docentes capaces de transmitir y preservar 
                  el patrimonio cultural argentino a través de la danza.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Habilidades que Desarrollarás</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Dominio técnico de las danzas folklóricas argentinas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Conocimiento profundo de la historia y cultura argentina
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Capacidad pedagógica para la enseñanza de la danza
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Planificación y conducción de actividades artísticas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Dirección de grupos de danza y producciones artísticas
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Professional Field */}
            <Card>
              <CardHeader>
                <CardTitle>Campo Laboral</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Docente en instituciones educativas de nivel inicial, primario y secundario
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Profesor en escuelas de danzas folklóricas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Director de elencos y grupos folklóricos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Coordinador de actividades culturales en centros comunitarios
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Asesor cultural en eventos y festivales
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Plan de Estudios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">Primer Año</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 1.01 - Pedagogía</li>
                      <li>• 1.02 - Didáctica General</li>
                      <li>• 1.03 - Psicología Educacional</li>
                      <li>• 1.04 - Lectura y Escritura Académica</li>
                      <li>• 1.05 - Anatomía y Fisiología aplicada a la Danza</li>
                      <li>• 1.06 - Análisis Musical aplicado a la Danza Folklórica</li>
                      <li>• 1.07 - Danzas Nativas</li>
                      <li>• 1.08 - Zapateo</li>
                      <li>• 1.09 - Práctica Docente I</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Segundo Año</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 2.10 - Sociología de la Educación</li>
                      <li>• 2.11 - Historia Argentina y Latinoamericana</li>
                      <li>• 2.12 - TIC</li>
                      <li>• 2.13 - Folklore Argentino</li>
                      <li>• 2.14 - Danzas Nativas Interdependientes</li>
                      <li>• 2.15 - Zapateo Combinado</li>
                      <li>• 2.16 - Didáctica Especial de la Danza Folklórica</li>
                      <li>• 2.17 - Instrumentos Folklóricos Regionales</li>
                      <li>• 2.18 - Práctica Docente II</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Tercer Año</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 3.19 - Historia y Política de la Educación Argentina</li>
                      <li>• 3.20 - Filosofía</li>
                      <li>• 3.21 - Historia de la Danza y el Atuendo Argentino</li>
                      <li>• 3.22 - Danzas Nativas de Carácter Expresivo</li>
                      <li>• 3.23 - Zapateo de Creación</li>
                      <li>• 3.24 - Didáctica Especial de la Danza Contemporánea</li>
                      <li>• 3.25 - Sujetos de la Educación</li>
                      <li>• 3.26 - Práctica Docente III</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Cuarto Año</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 4.27 - Formación Ética y Ciudadana</li>
                      <li>• 4.28 - Problemática de la Interculturalidad</li>
                      <li>• 4.29 - Folklore Regional</li>
                      <li>• 4.30 - Danzas de Conjunto y de Proyección</li>
                      <li>• 4.31 - Danzas Latinoamericanas</li>
                      <li>• 4.32 - Composición Coreográfica</li>
                      <li>• 4.33 - Producción de Espectáculos</li>
                      <li>• 4.34 - Tango</li>
                      <li>• 4.35 - Educación Sexual Integral</li>
                      <li>• 4.36 - Práctica Docente IV</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ENLACE A RESOLUCIÓN MINISTERIAL - Modificar el href con el link de Drive cuando esté disponible */}
            <div className="flex justify-center pt-4">
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/1Yorr8Wu6HRRHCOBZ49suq7KPBeqTfxyO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Consultar Documento Institucional de la Carrera
                </a>
              </Button>
            </div>

            {/* Galería de Imágenes */}
            {/* MODIFICAR IMÁGENES: Reemplazar con fotos reales de la carrera */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg1} 
                  alt="Estudiantes de Danzas Folklóricas" 
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

export default Folklore;
