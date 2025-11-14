import Layout from "@/components/Layout";
import CareerCard from "@/components/CareerCard";

const Carreras = () => {
  const profesorados = [
    {
      title: "Profesorado de Danzas Folklóricas",
      description: "Formación integral en danza tradicional argentina con enfoque pedagógico",
      link: "/folklore",
    },
    {
      title: "Profesorado de Educación Primaria",
      description: "Formación docente para el nivel primario con enfoque inclusivo",
      link: "/primaria",
    },
    {
      title: "Profesorado de Educación Especial",
      description: "Especialización en educación inclusiva y atención a la diversidad",
      link: "/educacion-especial",
    },
    {
      title: "Profesorado de Lengua y Literatura",
      description: "Formación en didáctica de la lengua y análisis literario",
      link: "/lengua",
    },
  ];

  const tecnicaturas = [
    {
      title: "Tecnicatura en Análisis de Sistemas",
      description: "Desarrollo de software, bases de datos y sistemas informáticos",
      link: "/sistemas",
    },
    {
      title: "Tecnicatura en Turismo",
      description: "Gestión turística, planificación y desarrollo de destinos",
      link: "/turismo",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Carreras</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ofrecemos una variedad de carreras de formación docente y técnica con títulos oficiales reconocidos
          </p>
        </div>
      </section>

      {/* Profesorados Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Profesorados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profesorados.map((career) => (
              <CareerCard key={career.link} {...career} type="profesorado" />
            ))}
          </div>
        </div>
      </section>

      {/* Tecnicaturas Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tecnicaturas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tecnicaturas.map((career) => (
              <CareerCard key={career.link} {...career} type="tecnicatura" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Carreras;
