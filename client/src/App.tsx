import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import FloatingCTA from "./components/FloatingCTA";
import OptimizedHome from "./pages/OptimizedHome";
import Servicos from "./pages/Servicos";
import VilaReal from "./pages/cidades/VilaReal";
import Braganca from "./pages/cidades/Braganca";
import Chaves from "./pages/cidades/Chaves";
import Mirandela from "./pages/cidades/Mirandela";
import BlogIndex from "./pages/blog/BlogIndex";
import ComoInstalarCandeeiroTeto from "./pages/blog/ComoInstalarCandeeiroTeto";
import PouparEnergiaEletricaDicas from "./pages/blog/PouparEnergiaEletricaDicas";
import QuandoTrocarInstalacaoEletrica from "./pages/blog/QuandoTrocarInstalacaoEletrica";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={OptimizedHome} />
      <Route path={"/servicos"} component={Servicos} />
      <Route path={"/eletricista-vila-real"} component={VilaReal} />
      <Route path={"/eletricista-braganca"} component={Braganca} />
      <Route path={"/eletricista-chaves"} component={Chaves} />
      <Route path={"/eletricista-mirandela"} component={Mirandela} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/como-instalar-candeeiro-teto-seguranca"} component={ComoInstalarCandeeiroTeto} />
      <Route path={"/blog/poupar-energia-eletrica-dicas"} component={PouparEnergiaEletricaDicas} />
      <Route path={"/blog/quando-trocar-instalacao-eletrica"} component={QuandoTrocarInstalacaoEletrica} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <SiteProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <FloatingCTA />
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
