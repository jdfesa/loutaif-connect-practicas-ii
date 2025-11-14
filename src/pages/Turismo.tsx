import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
// MODIFICAR IMÁGENES: Reemplazar estas imágenes con fotos de la Tecnicatura en Turismo
import carreraImg1 from "@/assets/carrera-1.jpg";
import carreraImg2 from "@/assets/carrera-2.jpg";
import carreraImg3 from "@/assets/carrera-3.jpg";

const Turismo = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-4">
              Tecnicatura
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
  Tecnicatura Superior en Turismo
</h1>

<p className="text-xl text-gray-200 mb-6">
  Resolución N° 091/24 – Duración: 3 años
</p>

<div className="text-lg text-gray-100 leading-relaxed space-y-1">
  <p><strong>Nivel:</strong> Superior</p>
  <p><strong>Título a otorgar:</strong> Técnico Superior en Turismo</p>
  <p><strong>Modalidad:</strong> Presencial</p>
  <p><strong>Carga horaria:</strong> horas reloj: 1968 – horas cátedra: 2624</p>
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
                  La Tecnicatura en Turismo forma profesionales capacitados para la gestión, 
                  planificación y desarrollo de actividades turísticas, con conocimientos sobre 
                  patrimonio cultural, servicios turísticos y desarrollo sostenible de destinos.
                </p>
                <p className="text-muted-foreground">
                  La carrera integra aspectos económicos, culturales y ambientales del turismo, 
                  preparando técnicos capaces de contribuir al desarrollo de la actividad turística 
                  en sus diferentes modalidades y contextos.
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
                    Gestión de servicios y empresas turísticas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Planificación y desarrollo de productos turísticos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Diseño de circuitos y paquetes turísticos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Atención al turista y manejo de múltiples idiomas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Promoción y marketing de destinos turísticos
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
                    Agencias de viajes y turismo
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Hoteles y establecimientos de alojamiento
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Organismos públicos de turismo (municipales, provinciales, nacionales)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Centros de información turística
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Empresas de transporte turístico y guía de turismo
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Consultorías y emprendimientos turísticos propios
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
                      <li>• 1.01 - Desarrollos comunicacionales para el turismo</li>
                      <li>• 1.02 - Desarrollos profesionales para el turismo</li>
                      <li>• 1.03 - Inglés para el turismo I</li>
                      <li>• 1.04 - Gestión de riesgos y primeros auxilios</li>
                      <li>• 1.05 - Introducción a la teoría del turismo</li>
                      <li>• 1.06 - Interpretación del patrimonio natural I</li>
                      <li>• 1.07 - Interpretación del patrimonio cultural</li>
                      <li>• 1.08 - Gastronomía y enología</li>
                      <li>• 1.09 - Prácticas Profesionalizantes I</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Segundo Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 2.10 - Diversidad ética, social y cultural</li>
                      <li>• 2.11 - Inglés para el turismo II</li>
                      <li>• 2.12 - Fundamentos de investigación y de estadísticas</li>
                      <li>• 2.13 - Higiene, seguridad y desarrollo sostenible</li>
                      <li>• 2.14 - Interpretación del patrimonio natural II</li>
                      <li>• 2.15 - Técnicas de guiado</li>
                      <li>• 2.16 - Alojamientos turísticos</li>
                      <li>• 2.17 - Formulación y planificación de circuitos turísticos</li>
                      <li>• 2.18 - Educación financiera para el turismo</li>
                      <li>• 2.19 - Marketing turísticos</li>
                      <li>• 2.20 - Practicas Profesionalizantes II</li>

                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">Tercer Año</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• 3.21 - Educación sexual integral</li>
                      <li>• 3.22 - Inglés para el turismo III</li>
                      <li>• 3.23 - Saberes digitales aplicados a la actividad turística</li>
                      <li>• 3.24 - Desarrollo local y gobernanza</li>
                      <li>• 3.25 - Formulación y desarrollo de emprendimientos turísticos</li>
                      <li>• 3.26 - Relaciones públicas y organización de eventos</li>
                      <li>• 3.27 - Interpretación del patrimonio cultural II</li>
                      <li>• 3.28 - Normas, derecho y legislación turísticos</li>
                      <li>• 3.29 - Gestión de agencias de viajes y transporte turístico</li>
                      <li>• 3.29 - Prácticas Profesionalizantes III</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> La carrera incluye prácticas profesionalizantes en 
                    organismos públicos y empresas del sector turístico, permitiendo a los estudiantes 
                    adquirir experiencia real en el campo laboral antes de graduarse.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* ENLACE A RESOLUCIÓN MINISTERIAL - Modificar el href con el link de Drive cuando esté disponible */}
            <div className="flex justify-center pt-4">
              <Button variant="outline" className="gap-2" asChild>
  <a
    href="https://drive.google.com/file/d/1PLYYcX_b0xCPa9zzGDtGcz4R3oMoZfEO/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FileText className="h-4 w-4" />
    Ver Resolución Ministerial N° 091/24
  </a>
</Button>

            </div>

            {/* Galería de Imágenes */}
            {/* MODIFICAR IMÁGENES: Reemplazar con fotos reales de la carrera */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={carreraImg1} 
                  alt="Estudiantes de Turismo" 
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

export default Turismo;
