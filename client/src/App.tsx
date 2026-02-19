import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import FloatingCTA from "./components/FloatingCTA";
import StructuredData from "./components/StructuredData";
import OptimizedHome from "./pages/OptimizedHome";

// Lazy load all pages except homepage for better LCP
const Servicos = lazy(() => import("@/pages/Servicos"));
const QuadrosEletricos = lazy(() => import("@/pages/QuadrosEletricos"));
const CertificacaoEletrica = lazy(() => import("@/pages/CertificacaoEletrica"));
const InstalacaoEletrica = lazy(() => import("@/pages/InstalacaoEletrica"));
const PaineisSolares = lazy(() => import("@/pages/PaineisSolares"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const FAQPage = lazy(() => import("@/pages/FAQ"));
const VilaReal = lazy(() => import("@/pages/cidades/VilaReal"));
const Braganca = lazy(() => import("@/pages/cidades/Braganca"));
const Chaves = lazy(() => import("@/pages/cidades/Chaves"));
const Mirandela = lazy(() => import("@/pages/cidades/Mirandela"));
const MacedoCavaleiros = lazy(() => import("@/pages/cidades/MacedoCavaleiros"));
const Vinhais = lazy(() => import("@/pages/cidades/Vinhais"));
const MirandaDouro = lazy(() => import("@/pages/cidades/MirandaDouro"));
const Mogadouro = lazy(() => import("@/pages/cidades/Mogadouro"));
const TorreMoncorvo = lazy(() => import("@/pages/cidades/TorreMoncorvo"));
const FreixoEspadaCinta = lazy(() => import("@/pages/cidades/FreixoEspadaCinta"));
const Valpacos = lazy(() => import("@/pages/cidades/Valpacos"));
const AlfandegaDaFe = lazy(() => import("@/pages/cidades/AlfandegaDaFe"));
const VilaFlor = lazy(() => import("@/pages/cidades/VilaFlor"));
const CarrazedaDeAnsiaes = lazy(() => import("@/pages/cidades/CarrazedaDeAnsiaes"));
const Vimioso = lazy(() => import("@/pages/cidades/Vimioso"));
const Montalegre = lazy(() => import("@/pages/cidades/Montalegre"));
const Boticas = lazy(() => import("@/pages/cidades/Boticas"));
const Murca = lazy(() => import("@/pages/cidades/Murca"));
const Alijo = lazy(() => import("@/pages/cidades/Alijo"));
const Sabrosa = lazy(() => import("@/pages/cidades/Sabrosa"));
const VilaPoucaDeAguiar = lazy(() => import("@/pages/cidades/VilaRealCity"));
const RibeiraDePena = lazy(() => import("@/pages/cidades/RibeiraDePena"));
const MondimDeBasto = lazy(() => import("@/pages/cidades/MondimDeBasto"));
const PesoDaRegua = lazy(() => import("@/pages/cidades/PesoDaRegua"));
const Lamego = lazy(() => import("@/pages/cidades/Lamego"));
const MoimentaDaBeira = lazy(() => import("@/pages/cidades/MoimentaDaBeira"));
const VilaNovaFozCoa = lazy(() => import("@/pages/cidades/VilaNovaFozCoa"));
const Sernancelhe = lazy(() => import("@/pages/cidades/Sernancelhe"));
const Penedono = lazy(() => import("@/pages/cidades/Penedono"));
const SaoJoaoDaPesqueira = lazy(() => import("@/pages/cidades/SaoJoaoDaPesqueira"));
const Tabuaco = lazy(() => import("@/pages/cidades/Tabuaco"));
const Armamar = lazy(() => import("@/pages/cidades/Armamar"));
const SantaMartaDePenaguiao = lazy(() => import("@/pages/cidades/SantaMartaDePenaguiao"));
const MesaoFrio = lazy(() => import("@/pages/cidades/MesaoFrio"));
const BlogIndex = lazy(() => import("@/pages/blog/BlogIndex"));
const ComoInstalarCandeeiroTeto = lazy(() => import("@/pages/blog/ComoInstalarCandeeiroTeto"));
const PouparEnergiaEletricaDicas = lazy(() => import("@/pages/blog/PouparEnergiaEletricaDicas"));
const QuandoTrocarInstalacaoEletrica = lazy(() => import("@/pages/blog/QuandoTrocarInstalacaoEletrica"));
const SinaisProblemasEletricos = lazy(() => import("@/pages/blog/SinaisProblemasEletricos"));
const QuadroEletricoAntigo = lazy(() => import("@/pages/blog/QuadroEletricoAntigo"));
const CertificacaoEletricaCertiel = lazy(() => import("@/pages/blog/CertificacaoEletricaCertiel"));
const ComoEscolherElectricistaCertificado = lazy(() => import("@/pages/blog/ComoEscolherElectricistaCertificado"));
const CustoElectricistaTrasOsMontesPrecos = lazy(() => import("@/pages/blog/CustoElectricistaTrasOsMontesPrecos"));
const PaineisSolaresTrasOsMontesGuia = lazy(() => import("@/pages/blog/PaineisSolaresTrasOsMontesGuia"));
const Zonas = lazy(() => import("@/pages/Zonas"));

// Simple loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35]"></div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path={"/"} component={OptimizedHome} />
        <Route path={"/servicos"} component={Servicos} />
        <Route path={"/quadros-eletricos"} component={QuadrosEletricos} />
        <Route path={"/certificacao-eletrica"} component={CertificacaoEletrica} />
        <Route path={"/instalacao-eletrica"} component={InstalacaoEletrica} />
        <Route path={"/paineis-solares"} component={PaineisSolares} />
        <Route path={"/electricista-vila-real"} component={VilaReal} />
        <Route path={"/electricista-braganca"} component={Braganca} />
        <Route path={"/electricista-chaves"} component={Chaves} />
        <Route path={"/electricista-mirandela"} component={Mirandela} />
        <Route path={"/electricista-macedo-cavaleiros"} component={MacedoCavaleiros} />
        <Route path={"/electricista-vinhais"} component={Vinhais} />
        <Route path={"/electricista-miranda-douro"} component={MirandaDouro} />
        <Route path={"/electricista-mogadouro"} component={Mogadouro} />
        <Route path={"/electricista-torre-moncorvo"} component={TorreMoncorvo} />
        <Route path={"/electricista-freixo-espada-cinta"} component={FreixoEspadaCinta} />
        <Route path={"/electricista-valpacos"} component={Valpacos} />
        <Route path={"/electricista-alfandega-da-fe"} component={AlfandegaDaFe} />
        <Route path={"/electricista-vila-flor"} component={VilaFlor} />
        <Route path={"/electricista-carrazeda-de-ansiaes"} component={CarrazedaDeAnsiaes} />
        <Route path={"/electricista-vimioso"} component={Vimioso} />
        <Route path={"/electricista-montalegre"} component={Montalegre} />
        <Route path={"/electricista-boticas"} component={Boticas} />
        <Route path={"/electricista-murca"} component={Murca} />
        <Route path={"/electricista-alijo"} component={Alijo} />
        <Route path={"/electricista-sabrosa"} component={Sabrosa} />
        <Route path={"/electricista-vila-pouca-de-aguiar"} component={VilaPoucaDeAguiar} />
        <Route path={"/electricista-ribeira-de-pena"} component={RibeiraDePena} />
        <Route path={"/electricista-mondim-de-basto"} component={MondimDeBasto} />
        <Route path={"/electricista-peso-da-regua"} component={PesoDaRegua} />
        <Route path={"/electricista-lamego"} component={Lamego} />
        <Route path={"/electricista-moimenta-da-beira"} component={MoimentaDaBeira} />
        <Route path={"/electricista-vila-nova-foz-coa"} component={VilaNovaFozCoa} />
        <Route path={"/electricista-sernancelhe"} component={Sernancelhe} />
        <Route path={"/electricista-penedono"} component={Penedono} />
        <Route path={"/electricista-sao-joao-da-pesqueira"} component={SaoJoaoDaPesqueira} />
        <Route path={"/electricista-tabuaco"} component={Tabuaco} />
        <Route path={"/electricista-armamar"} component={Armamar} />
        <Route path={"/electricista-santa-marta-de-penaguiao"} component={SantaMartaDePenaguiao} />
        <Route path={"/electricista-mesao-frio"} component={MesaoFrio} />
        <Route path={"/blog"} component={BlogIndex} />
        <Route path={"/blog/como-instalar-candeeiro-teto-seguranca"} component={ComoInstalarCandeeiroTeto} />
        <Route path={"/blog/poupar-energia-eletrica-dicas"} component={PouparEnergiaEletricaDicas} />
        <Route path={"/blog/quando-trocar-instalacao-eletrica"} component={QuandoTrocarInstalacaoEletrica} />
        <Route path={"/blog/sinais-problemas-eletricos-casa"} component={SinaisProblemasEletricos} />
        <Route path={"/blog/quadro-eletrico-antigo-fusiveis-trocar"} component={QuadroEletricoAntigo} />
        <Route path={"/blog/certificacao-eletrica-certiel-guia"} component={CertificacaoEletricaCertiel} />
        <Route path={"/blog/como-escolher-electricista-certificado"} component={ComoEscolherElectricistaCertificado} />
        <Route path={"/blog/custo-electricista-tras-os-montes-precos"} component={CustoElectricistaTrasOsMontesPrecos} />
        <Route path={"/blog/paineis-solares-tras-os-montes-guia"} component={PaineisSolaresTrasOsMontesGuia} />
        <Route path={"/faq"} component={FAQPage} />
        <Route path={"/zonas"} component={Zonas} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
            <StructuredData />
            <Router />
            <FloatingCTA />
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
