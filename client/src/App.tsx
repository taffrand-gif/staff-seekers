import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider } from "./contexts/SiteContext";
import OptimizedHome from "./pages/OptimizedHome";
import Servicos from "./pages/Servicos";
// Temporarily disabled city pages to debug
// import VilaReal from "./pages/cidades/VilaReal";
// import Braganca from "./pages/cidades/Braganca";
// import Chaves from "./pages/cidades/Chaves";
// import Mirandela from "./pages/cidades/Mirandela";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={OptimizedHome} />
      <Route path={"/servicos"} component={Servicos} />
      {/* Temporarily disabled city pages to debug */}
      {/* <Route path={"/eletricista-vila-real"} component={VilaReal} /> */}
      {/* <Route path={"/eletricista-braganca"} component={Braganca} /> */}
      {/* <Route path={"/eletricista-chaves"} component={Chaves} /> */}
      {/* <Route path={"/eletricista-mirandela"} component={Mirandela} /> */}
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
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
