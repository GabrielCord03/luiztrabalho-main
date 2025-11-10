import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Conhecendo from "./pages/Conhecendo";
import Cidades from "./pages/Cidades";
import Curiosidades from "./pages/Curiosidades";
import Historia from "./pages/Historia";
import Falas from "./pages/Falas";
import Feitos from "./pages/Feitos";
import Dicas from "./pages/Dicas";
import Mitologia from "./pages/Mitologia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conhecendo" element={<Conhecendo />} />
          <Route path="/cidades" element={<Cidades />} />
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/falas" element={<Falas />} />
          <Route path="/feitos" element={<Feitos />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="/mitologia" element={<Mitologia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
