-- Tabla para las carreras disponibles
CREATE TABLE public.carreras (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  codigo TEXT,
  activa BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security en carreras
ALTER TABLE public.carreras ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede ver las carreras activas (público)
CREATE POLICY "Carreras son visibles públicamente" 
ON public.carreras 
FOR SELECT 
USING (activa = true);

-- Tabla para las preinscripciones de alumnos
CREATE TABLE public.preinscripciones (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  apellido TEXT NOT NULL,
  dni TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  carrera_id UUID NOT NULL REFERENCES public.carreras(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security en preinscripciones
ALTER TABLE public.preinscripciones ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede insertar una preinscripción (público)
CREATE POLICY "Cualquiera puede crear preinscripciones" 
ON public.preinscripciones 
FOR INSERT 
WITH CHECK (true);

-- Insertar algunas carreras de ejemplo
INSERT INTO public.carreras (nombre, codigo, activa) VALUES
  ('Profesorado de Educación Primaria', 'PEP', true),
  ('Profesorado de Educación Especial', 'PEE', true),
  ('Profesorado en Lengua y Literatura', 'PLL', true),
  ('Profesorado en Folklore', 'PF', true),
  ('Tecnicatura Superior en Análisis de Sistemas', 'TSAS', true),
  ('Tecnicatura Superior en Gestión de Empresas Turísticas', 'TSGET', true);