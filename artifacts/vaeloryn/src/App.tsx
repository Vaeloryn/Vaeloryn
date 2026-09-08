import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Redirect, Route, Switch, Router as WouterRouter } from 'wouter';
import { AppLayout } from '@/components/layout/AppLayout';
import { Home } from '@/pages/Home';
import { HelpBuild } from '@/pages/HelpBuild';
import { SubmitIdea } from '@/pages/SubmitIdea';
import { Contact } from '@/pages/Contact';
import { Vaelo } from '@/pages/Vaelo';
import { Whitepaper } from '@/pages/Whitepaper';
import { Transparency } from '@/pages/Transparency';
import { Roadmap } from '@/pages/Roadmap';
import { Risks } from '@/pages/Risks';
import { Status } from '@/pages/Status';
import { Verify } from '@/pages/Verify';
import { Wallet } from '@/pages/Wallet';
import WalletApp from '../../vaeloryn-wallet/src/App';

const queryClient = new QueryClient();

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/vaelo" component={Vaelo} />
        <Route path="/whitepaper" component={Whitepaper} />
        <Route path="/transparency" component={Transparency} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/risks" component={Risks} />
        <Route path="/status" component={Status} />
        <Route path="/verify" component={Verify} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/sale">
          <Redirect to="/wallet" />
        </Route>
        <Route path="/help-build" component={HelpBuild} />
        <Route path="/submit-idea" component={SubmitIdea} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function WalletEntry() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/vaeloryn-wallet') {
    window.history.replaceState(null, '', '/app');
  }

  return <WalletApp base="/app" />;
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isWalletPath = pathname === '/app' || pathname.startsWith('/app/');
  const isLegacyWalletPath = pathname === '/vaeloryn-wallet';

  if (isWalletPath || isLegacyWalletPath) {
    return <WalletEntry />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
