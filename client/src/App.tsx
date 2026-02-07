import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Dicas from "./pages/Dicas";
import Galeria from "./pages/Galeria";
import CityPage from "./pages/CityPage";
import Servicos from "./pages/Servicos";
import Contactos from "./pages/Contactos";
import Testemunhos from "@/pages/Testemunhos";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/BlogArticle";
import ChatWidget from "@/components/ChatWidget";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/dicas"} component={Dicas} />
      <Route path={"/galeria"} component={Galeria} />
      <Route path={"/servicos"} component={Servicos} />
      <Route path={"/contactos"} component={Contactos} />
       <Route path="/testemunhos" component={Testemunhos} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogArticle} />
      <Route path={"/servicos/:citySlug"} component={CityPage} />
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
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
