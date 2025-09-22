import { Switch, Route } from "wouter"
import { queryClient } from "./lib/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/contexts/theme-context"
import Home from "@/pages/home"
import NotFound from "@/pages/not-found"
import WhatsAppChat from "./components/whatsapp-chat"
import BackgroundCircles from "@/components/background-circles"

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="infosense-theme">
        <TooltipProvider>
          <BackgroundCircles />

          {/* Foreground app content */}
          <div className="relative z-10">
            <Toaster />
            <Router />
            <WhatsAppChat />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
