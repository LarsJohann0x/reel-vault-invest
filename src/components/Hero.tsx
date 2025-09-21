import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Film, TrendingUp, Shield, Play } from "lucide-react";
import heroImage from "@/assets/hero-film-investment.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Film Investment Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 blockchain-mesh opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <Film className="w-12 h-12 text-primary film-reel" />
            <div className="w-px h-12 bg-border"></div>
            <Shield className="w-12 h-12 text-encrypted encrypted-text" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Film Financing,
            </span>
            <br />
            <span className="encrypted-text text-5xl md:text-7xl">
              Privately Tokenized
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Invest in the future of cinema through encrypted contributions and confidential ROI tracking. 
            Your investments remain private until film release.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button className="btn-film text-lg px-8 py-4">
            <Play className="w-5 h-5 mr-2" />
            Start Investing
          </Button>
          
          <Button className="btn-encrypted text-lg px-8 py-4">
            <Shield className="w-5 h-5 mr-2" />
            View Encrypted Portfolio
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-card/50 backdrop-blur-lg border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$<span className="encrypted-blur">█████</span>M</div>
              <p className="text-muted-foreground">Total Investments</p>
              <p className="text-xs text-encrypted mt-1">🔒 Encrypted until release</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-lg border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2"><span className="encrypted-blur">██</span> Films</div>
              <p className="text-muted-foreground">Active Projects</p>
              <p className="text-xs text-encrypted mt-1">🔒 Details confidential</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-lg border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-encrypted mb-2"><span className="encrypted-blur">███</span>%</div>
              <p className="text-muted-foreground">Average ROI</p>
              <p className="text-xs text-encrypted mt-1">🔒 Revealed at premiere</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Floating Film Reels */}
      <div className="absolute top-1/4 left-10 opacity-20">
        <Film className="w-24 h-24 text-primary film-reel-slow" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20">
        <Film className="w-32 h-32 text-accent film-reel" />
      </div>
    </section>
  );
};

export default Hero;