/**
 * PÁGINA DE PREINSCRIPCIÓN
 * 
 * Esta página muestra el formulario de preinscripción
 * Usa el Layout para mantener la navegación y el footer
 */

import Layout from "@/components/Layout";
import PreinscripcionForm from "@/components/preinscripcion/Form";

export default function Preinscripcion() {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        {/* Título de la página */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Preinscripción
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inicia tu proceso de inscripción en el Instituto Superior Dr. Alfredo Loutaif.
            Completa el formulario con tus datos y nos pondremos en contacto contigo.
          </p>
        </div>

        {/* Formulario de preinscripción */}
        <PreinscripcionForm />

        {/* Información adicional */}
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            ¿Qué sigue después de la preinscripción?
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>Tu solicitud ha sido registrada correctamente.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Nuestro equipo revisará la información enviada.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Las novedades del proceso de inscripción se publicarán en los canales oficiales del instituto.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4.</span>
              <span>Allí podrás consultar requisitos, documentación necesaria y fechas importantes.</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
