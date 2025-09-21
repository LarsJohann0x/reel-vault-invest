import { Film, Shield, Lock, Vault } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-card/50 py-16 overflow-hidden">
      {/* Animated Film Reels */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Film className="w-32 h-32 text-primary film-reel-slow" />
        </div>
        <div className="absolute top-20 right-20">
          <Film className="w-24 h-24 text-accent film-reel" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Film className="w-28 h-28 text-primary film-reel-slow" />
        </div>
        <div className="absolute bottom-10 right-1/3">
          <Film className="w-20 h-20 text-accent film-reel" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          {/* Vault Animation */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              {/* Film reels spinning into vault */}
              <div className="flex space-x-8 items-center">
                <Film className="w-16 h-16 text-primary film-reel opacity-80" />
                <Film className="w-12 h-12 text-accent film-reel-slow opacity-60" />
                
                {/* Arrow pointing to vault */}
                <div className="flex items-center space-x-2 px-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-encrypted"></div>
                  <div className="w-0 h-0 border-l-4 border-l-encrypted border-y-4 border-y-transparent"></div>
                </div>
                
                {/* Vault */}
                <div className="vault-door p-6 rounded-2xl">
                  <Vault className="w-20 h-20 text-encrypted" />
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-encrypted bg-clip-text text-transparent">
              Secure. Private. Profitable.
            </span>
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your film investments are protected by military-grade encryption until the moment of release. 
            When the credits roll, your returns are revealed.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-encrypted/20 rounded-full mb-4">
              <Shield className="w-8 h-8 text-encrypted encrypted-text" />
            </div>
            <h4 className="text-lg font-semibold mb-2">End-to-End Encryption</h4>
            <p className="text-muted-foreground text-sm">All investment data protected with AES-256 encryption</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <Film className="w-8 h-8 text-primary film-reel" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Blockchain Verified</h4>
            <p className="text-muted-foreground text-sm">Smart contracts ensure transparent fund management</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Lock className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Time-Locked Returns</h4>
            <p className="text-muted-foreground text-sm">ROI automatically revealed on release date</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative">
                <Film className="w-8 h-8 text-primary film-reel" />
                <div className="absolute inset-0 blockchain-mesh opacity-40 rounded"></div>
              </div>
              <span className="text-lg font-semibold">CinemaVault</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>© 2024 CinemaVault. All investments encrypted. All returns guaranteed by smart contract.</p>
            <p className="mt-1 encrypted-text text-xs">🔒 Your financial privacy is our priority</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;