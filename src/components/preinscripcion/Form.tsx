/**
 * FORMULARIO DE PREINSCRIPCIÓN
 * 
 * Este componente maneja todo el proceso de preinscripción de un alumno.
 * Incluye:
 * - Validación de campos
 * - Carga de carreras desde Supabase
 * - Envío de datos a Supabase
 * - Manejo de estados de carga y errores
 * - Mensajes de éxito/error
 */

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

/**
 * TIPO: Carrera
 * Define la estructura de una carrera en la base de datos
 */
type Carrera = {
  id: string;
  nombre: string;
  codigo: string | null;
  activa: boolean;
};

/**
 * TIPO: DatosFormulario
 * Define la estructura de los datos que recolectamos del alumno
 */
type DatosFormulario = {
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  telefono: string;
  carrera_id: string;
};

export default function PreinscripcionForm() {
  /**
   * TOAST: Sistema de notificaciones
   * Usamos este hook para mostrar mensajes de éxito o error al usuario
   */
  const { toast } = useToast();

  /**
   * ESTADO: isLoading
   * Controla si el formulario está enviando datos
   * - true: muestra spinner y deshabilita el botón
   * - false: formulario normal, usuario puede enviar
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * ESTADO: carreras
   * Almacena la lista de carreras cargadas desde Supabase
   * - Empieza como array vacío []
   * - Se llena cuando se cargan las carreras en useEffect
   */
  const [carreras, setCarreras] = useState<Carrera[]>([]);

  /**
   * ESTADO: isLoadingCarreras
   * Controla si estamos cargando las carreras desde Supabase
   * - true: muestra "Cargando..." en el select
   * - false: muestra las carreras o mensaje de error
   */
  const [isLoadingCarreras, setIsLoadingCarreras] = useState(true);

  /**
   * ESTADO: formData
   * Almacena todos los valores del formulario
   * Se actualiza cada vez que el usuario escribe en un campo
   */
  const [formData, setFormData] = useState<DatosFormulario>({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
    carrera_id: "",
  });

  /**
   * EFECTO: Cargar carreras al montar el componente
   * 
   * Este useEffect se ejecuta UNA SOLA VEZ cuando el componente se monta
   * (por eso tiene [] como dependencias vacías)
   * 
   * Pasos:
   * 1. Consulta la tabla "carreras" en Supabase
   * 2. Filtra solo las carreras activas
   * 3. Las ordena alfabéticamente por nombre
   * 4. Si hay error, muestra un toast de error
   * 5. Si todo sale bien, guarda las carreras en el estado
   */
  useEffect(() => {
    const cargarCarreras = async () => {
      try {
        // Consulta a Supabase: SELECT * FROM carreras WHERE activa = true ORDER BY nombre
        const { data, error } = await supabase
          .from("carreras")
          .select("*")
          .eq("activa", true)
          .order("nombre", { ascending: true });

        // Si hay error en la consulta, lo lanzamos para que lo atrape el catch
        if (error) throw error;

        // Si todo salió bien, guardamos las carreras en el estado
        setCarreras(data || []);
      } catch (error) {
        // Si algo falló, mostramos un mensaje de error al usuario
        console.error("Error al cargar carreras:", error);
        toast({
          title: "Error",
          description: "No se pudieron cargar las carreras. Intenta recargar la página.",
          variant: "destructive",
        });
      } finally {
        // Siempre (haya error o no) indicamos que terminamos de cargar
        setIsLoadingCarreras(false);
      }
    };

    // Ejecutar la función
    cargarCarreras();
  }, []); // Array vacío = solo se ejecuta una vez al montar

  /**
   * FUNCIÓN: handleInputChange
   * 
   * Se ejecuta cada vez que el usuario escribe en un campo de texto
   * Actualiza el estado formData con el nuevo valor
   * 
   * @param e - Evento del input que cambió
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Actualiza solo el campo que cambió, manteniendo los demás valores
    setFormData((prev) => ({
      ...prev, // Copia todos los valores anteriores
      [name]: value, // Actualiza solo el campo que cambió
    }));
  };

  /**
   * FUNCIÓN: handleCarreraChange
   * 
   * Se ejecuta cuando el usuario selecciona una carrera en el select
   * Actualiza el carrera_id en formData
   * 
   * @param value - ID de la carrera seleccionada
   */
  const handleCarreraChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      carrera_id: value,
    }));
  };

  /**
   * FUNCIÓN: validarFormulario
   * 
   * Valida que todos los campos estén completos antes de enviar
   * 
   * @returns true si todo está completo, false si falta algo
   */
  const validarFormulario = (): boolean => {
    // Verificar que ningún campo esté vacío
    if (
      !formData.nombre.trim() ||
      !formData.apellido.trim() ||
      !formData.dni.trim() ||
      !formData.email.trim() ||
      !formData.telefono.trim() ||
      !formData.carrera_id
    ) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos del formulario.",
        variant: "destructive",
      });
      return false;
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      return false;
    }

    // Validar que el DNI solo contenga números
    if (!/^\d+$/.test(formData.dni)) {
      toast({
        title: "DNI inválido",
        description: "El DNI debe contener solo números.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  /**
   * FUNCIÓN: handleSubmit
   * 
   * Se ejecuta cuando el usuario presiona el botón "Enviar preinscripción"
   * 
   * Pasos:
   * 1. Previene el comportamiento por defecto del form (que recarga la página)
   * 2. Valida que todos los campos estén completos
   * 3. Muestra el spinner de carga
   * 4. Inserta el registro en la tabla "preinscripciones" de Supabase
   * 5. Si hay error, muestra mensaje de error
   * 6. Si todo sale bien:
   *    - Muestra mensaje de éxito
   *    - Limpia el formulario para que quede listo para otra preinscripción
   * 
   * @param e - Evento del formulario
   */
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevenir que el formulario recargue la página
    e.preventDefault();

    // Validar campos antes de enviar
    if (!validarFormulario()) {
      return;
    }

    // Activar estado de carga (muestra spinner, deshabilita botón)
    setIsLoading(true);

    try {
      /**
       * INSERCIÓN EN SUPABASE
       * 
       * Esta línea inserta un nuevo registro en la tabla "preinscripciones"
       * 
       * .from("preinscripciones"): especifica la tabla
       * .insert([formData]): inserta los datos del formulario
       * .select(): retorna el registro insertado
       * 
       * Supabase automáticamente:
       * - Genera un ID único (UUID)
       * - Asigna la fecha/hora actual en created_at
       */
      const { error } = await supabase
        .from("preinscripciones")
        .insert([formData])
        .select();

      // Si hubo error en la inserción, lo lanzamos
      if (error) throw error;

      // ¡Éxito! Mostramos mensaje positivo al usuario
      toast({
        title: "¡Preinscripción exitosa!",
        description: "Tu preinscripción ha sido registrada correctamente. Te contactaremos pronto.",
      });

      /**
       * RESETEAR FORMULARIO
       * 
       * Limpiamos todos los campos para que el formulario quede
       * listo para una nueva preinscripción
       */
      setFormData({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        telefono: "",
        carrera_id: "",
      });
    } catch (error) {
      // Si algo falló, mostramos error al usuario
      console.error("Error al enviar preinscripción:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al registrar tu preinscripción. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      // Siempre desactivamos el spinner de carga al terminar
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-lg border border-border">
      <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
        Formulario de Preinscripción
      </h2>
      
      <p className="text-muted-foreground mb-6 text-center">
        Completa tus datos para iniciar el proceso de preinscripción
      </p>

      {/* FORMULARIO - onSubmit se ejecuta cuando se presiona el botón de enviar */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* CAMPO: Nombre */}
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre *</Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
        </div>

        {/* CAMPO: Apellido */}
        <div className="space-y-2">
          <Label htmlFor="apellido">Apellido *</Label>
          <Input
            id="apellido"
            name="apellido"
            type="text"
            placeholder="Ingresa tu apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
        </div>

        {/* CAMPO: DNI */}
        <div className="space-y-2">
          <Label htmlFor="dni">DNI *</Label>
          <Input
            id="dni"
            name="dni"
            type="text"
            placeholder="Ingresa tu DNI sin puntos"
            value={formData.dni}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
        </div>

        {/* CAMPO: Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
        </div>

        {/* CAMPO: Teléfono */}
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="Ingresa tu teléfono"
            value={formData.telefono}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
        </div>

        {/* CAMPO: Carrera (Select) - Los datos vienen de Supabase */}
        <div className="space-y-2">
          <Label htmlFor="carrera">Carrera *</Label>
          <Select
            value={formData.carrera_id}
            onValueChange={handleCarreraChange}
            disabled={isLoading || isLoadingCarreras}
          >
            <SelectTrigger>
              <SelectValue 
                placeholder={
                  isLoadingCarreras 
                    ? "Cargando carreras..." 
                    : "Selecciona una carrera"
                } 
              />
            </SelectTrigger>
            <SelectContent>
              {/* Mapear cada carrera a un SelectItem */}
              {carreras.map((carrera) => (
                <SelectItem key={carrera.id} value={carrera.id}>
                  {carrera.nombre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* BOTÓN DE ENVÍO */}
        <Button
          type="submit"
          className="w-full mt-6"
          disabled={isLoading || isLoadingCarreras}
        >
          {/* 
            Si isLoading es true, muestra el spinner
            Si no, muestra el texto normal
          */}
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar preinscripción"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          * Todos los campos son obligatorios
        </p>
      </form>
    </div>
  );
}
