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
import MacedoCavaleiros from "./pages/cidades/MacedoCavaleiros";
import Vinhais from "./pages/cidades/Vinhais";
import MirandaDouro from "./pages/cidades/MirandaDouro";
import Mogadouro from "./pages/cidades/Mogadouro";
import TorreMoncorvo from "./pages/cidades/TorreMoncorvo";
import FreixoEspadaCinta from "./pages/cidades/FreixoEspadaCinta";
import BlogIndex from "./pages/blog/BlogIndex";
import ComoInstalarCandeeiroTeto from "./pages/blog/ComoInstalarCandeeiroTeto";
import PouparEnergiaEletricaDicas from "./pages/blog/PouparEnergiaEletricaDicas";
import QuandoTrocarInstalacaoEletrica from "./pages/blog/QuandoTrocarInstalacaoEletrica";
import SinaisProblemasEletricos from "./pages/blog/SinaisProblemasEletricos";
import QuadroEletricoAntigo from "./pages/blog/QuadroEletricoAntigo";
import CertificacaoEletricaCertiel from "./pages/blog/CertificacaoEletricaCertiel";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={OptimizedHome} />
      <Route path={"/servicos"} component={Servicos} />
      <Route path={"/eletricista-vila-real"} component={VilaReal} />
      <Route path={"/eletricista-braganca"} component={Braganca} />
      <Route path={"/eletricista-chaves"} component={Chaves} />
      <Route path={"/eletricista-mirandela"} component={Mirandela} />
      <Route path={"/eletricista-macedo-cavaleiros"} component={MacedoCavaleiros} />
      <Route path={"/eletricista-vinhais"} component={Vinhais} />
      <Route path={"/eletricista-miranda-douro"} component={MirandaDouro} />
      <Route path={"/eletricista-mogadouro"} component={Mogadouro} />
      <Route path={"/eletricista-torre-moncorvo"} component={TorreMoncorvo} />
      <Route path={"/eletricista-freixo-espada-cinta"} component={FreixoEspadaCinta} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/como-instalar-candeeiro-teto-seguranca"} component={ComoInstalarCandeeiroTeto} />
      <Route path={"/blog/poupar-energia-eletrica-dicas"} component={PouparEnergiaEletricaDicas} />
      <Route path={"/blog/quando-trocar-instalacao-eletrica"} component={QuandoTrocarInstalacaoEletrica} />
      <Route path={"/blog/sinais-problemas-eletricos-casa"} component={SinaisProblemasEletricos} />
      <Route path={"/blog/quadro-eletrico-antigo-fusiveis-trocar"} component={QuadroEletricoAntigo} />
      <Route path={"/blog/certificacao-eletrica-certiel-guia"} component={CertificacaoEletricaCertiel} />
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
