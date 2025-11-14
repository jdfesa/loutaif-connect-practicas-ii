import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CareerCard from "@/components/CareerCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from "lucide-react";

const Index = () => {
  const featuredCareers = [
    {
      title: "Profesorado de Danzas Folklóricas",
      description: "Formación integral en danza tradicional argentina",
      link: "/folklore",
      type: "profesorado" as const,
    },
    {
      title: "Profesorado de Educación Primaria",
      description: "Formación docente para nivel primario",
      link: "/primaria",
      type: "profesorado" as const,
    },
    {
      title: "Tecnicatura en Análisis de Sistemas",
      description: "Desarrollo de software y sistemas informáticos",
      link: "/sistemas",
      type: "tecnicatura" as const,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instituto de Enseñanza Superior
              <br />
              Dr. Alfredo Loutaif N°6023
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Formando profesionales comprometidos con la educación y el desarrollo de nuestra comunidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/carreras">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Ver Todas las Carreras
                </Button>
              </Link>
              <Link to="/contacto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-primary-foreground/10">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excelencia Académica</h3>
              <p className="text-muted-foreground">
                Planes de estudio actualizados y orientados a las demandas del mercado laboral
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Equipo Docente Calificado</h3>
              <p className="text-muted-foreground">
                Profesores comprometidos con la formación integral de nuestros estudiantes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trayectoria Institucional</h3>
              <p className="text-muted-foreground">
                Años de experiencia formando profesionales en Orán y la región
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Careers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Carreras</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos carreras de Profesorado y Tecnicaturas con títulos oficiales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCareers.map((career) => (
              <CareerCard key={career.link} {...career} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/carreras">
              <Button size="lg">Ver Todas las Carreras</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tenés dudas?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Estamos para ayudarte. Comunicate con nosotros para recibir información sobre inscripciones y carreras
          </p>
          <Link to="/contacto">
            <Button size="lg" variant="secondary">
              Contactanos
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
