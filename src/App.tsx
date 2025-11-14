import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Carreras from "./pages/Carreras";
import Contacto from "./pages/Contacto";
import Folklore from "./pages/Folklore";
import Primaria from "./pages/Primaria";
import EducacionEspecial from "./pages/EducacionEspecial";
import Lengua from "./pages/Lengua";
import Sistemas from "./pages/Sistemas";
import Turismo from "./pages/Turismo";
import Autoridades from "./pages/Autoridades";
import Preinscripcion from "./pages/Preinscripcion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/folklore" element={<Folklore />} />
            <Route path="/primaria" element={<Primaria />} />
            <Route path="/educacion-especial" element={<EducacionEspecial />} />
            <Route path="/lengua" element={<Lengua />} />
            <Route path="/sistemas" element={<Sistemas />} />
            <Route path="/turismo" element={<Turismo />} />
            <Route path="/autoridades" element={<Autoridades />} />
            <Route path="/preinscripcion" element={<Preinscripcion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
