import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Globe } from "lucide-react";

const Contacto = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Estamos para ayudarte. Comunicate con nosotros por cualquiera de estos medios
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Dirección</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Salvador Valeri esquina O’Higgins
                  <br />
                  Orán, Salta
                  <br />
                  Argentina
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  (3878) 785320
                  <br />
                  <span className="text-sm">Llamar en horario de oficina</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground break-all">
                  formacion6023oran@hotmail.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Horario</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lunes a Viernes
                  <br />
                  8:00 - 20:00 hs
                </p>
              </CardContent>
            </Card>

            <Card>
  <CardHeader>
    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-2">
      <Globe className="h-6 w-6" />
    </div>
    <CardTitle>Web oficial</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      URL
      <br />
      <a
  href="https://ies6023-sal.infd.edu.ar/sitio/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline break-all"
>
  Ir al sitio oficial
</a>
    </p>
  </CardContent>
</Card>

          </div>

          {/* Map */}
          <Card>
            <CardHeader>
              <CardTitle>Ubicación</CardTitle>
              <CardDescription>Salvador Valeri esquina O’Higgins, Orán - Salta</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4465.940911071869!2d-64.3280042306337!3d-23.15301761802977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940ff6050db1cf2d%3A0xa1c10a4ee5400a66!2sInstituto%20de%20Ense%C3%B1anza%20Superior%20%22Dr.%20Alfredo%20Loutaif%22%20N%C2%B0%206.023!5e0!3m2!1sen!2sar!4v1762849034066!5m2!1sen!2sar"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Mapa de ubicación del Instituto"
/>

              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Información Adicional</h2>
            <div className="space-y-4 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>Inscripciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Las inscripciones para el ciclo lectivo se realizan generalmente durante los meses de noviembre a febrero.
                    Contactanos para conocer las fechas exactas y requisitos específicos de cada carrera.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Consultas Académicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Para consultas sobre planes de estudio, correlatividades y programas, podés acercarte personalmente 
                    o comunicarte por teléfono durante el horario de atención.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
