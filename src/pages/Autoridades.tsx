import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Wrench, UserCog, Laptop } from "lucide-react";

const Autoridades = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Autoridades
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Conoce al equipo directivo y administrativo del Instituto Alfredo Loutaif
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* DIRECCIÓN - Para modificar, cambiar nombre y título dentro de este Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Dirección
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="font-semibold text-primary">Coordinadora Académica a cargo de Rectoría</p>
                <p className="text-muted-foreground">Prof. Gorena Andrea</p>
              </div>
            </CardContent>
          </Card>

          {/* SECRETARÍA Y ADMINISTRATIVO - Para modificar, cambiar nombres y cargos en esta sección */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Personal de Secretaría y Administrativo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-primary">Secretaría Administrativa</p>
                <p className="text-muted-foreground">Sra. Salinas Alejandra</p>
                <p className="text-muted-foreground">Prof. Villagrán Roman</p>
              </div>
              
              <div>
                <p className="font-semibold text-primary">Preceptoria</p>
                <p className="text-muted-foreground">Prof. Casasola Betiana </p>
                <p className="text-muted-foreground">Prof. Romero Natalia </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCog className="h-5 w-5" />
                Coordinadores de Carrera
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-primary">Profesorado de Lengua</p>
                <p className="text-muted-foreground">Lic. Heredia Maria del Huerto</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Profesorado Educación Especial</p>
                <p className="text-muted-foreground">Lic. Lopez Silvina</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Tecnicatura en Turismo</p>
                <p className="text-muted-foreground">Lic. Manzarás Mercedes</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Tecnicatura en Gestión de Proyectos</p>
                <p className="text-muted-foreground">Prof. Alurralde Constanza</p>
              </div>
                <div>
                <p className="font-semibold text-primary">Tecnicatura en Analisis de Sistemas y Desarrollo de Software</p>
                <p className="text-muted-foreground">Ing. Parada Nallar Mauricio</p>
              </div>
            </CardContent>
          </Card>


          {/* MAESTRANZA - Para modificar, cambiar nombres del personal de limpieza */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Personal de Maestranza
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sr. Mansilla, Claudio - Sra. Segundo, Mirta Elida - Sr. Báez Raúl 
              </p>
            </CardContent>
          </Card>

          {/* COORDINACIONES - Para modificar, cambiar nombres y títulos de coordinadores */}
          
          {/* FACILITADORES TICs - Para agregar o quitar facilitadores, modificar esta sección */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                Facilitadores TICs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {/* Agregar nombres de facilitadores aquí separados por comas */}
                Información pendiente de actualización
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Autoridades;
