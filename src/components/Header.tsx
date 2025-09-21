import { Wallet, Lock, Film, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from "@/assets/logo-clapperboard.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img src={logo} alt="Film Investment Logo" className="w-12 h-12 film-reel" />
            <div className="absolute inset-0 blockchain-mesh opacity-30 rounded-lg"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Reel Vault Invest
            </h1>
            <p className="text-sm text-muted-foreground">Privacy-Preserving Film Investment Platform</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/investments" className="text-foreground/80 hover:text-primary transition-colors flex items-center space-x-1">
            <TrendingUp className="w-4 h-4" />
            <span>Investments</span>
          </a>
          <a href="/projects" className="text-foreground/80 hover:text-primary transition-colors flex items-center space-x-1">
            <Film className="w-4 h-4" />
            <span>Film Projects</span>
          </a>
          <a href="/vault" className="text-foreground/80 hover:text-primary transition-colors flex items-center space-x-1">
            <Wallet className="w-4 h-4" />
            <span>Vault</span>
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex items-center space-x-2">
            <Lock className="w-4 h-4" />
            <span>FHE Encrypted</span>
          </Button>
          
          <ConnectButton 
            chainStatus="icon"
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;