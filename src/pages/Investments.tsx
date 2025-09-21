import { useState } from "react";
import { ArrowRight, TrendingUp, Shield, DollarSign, Clock, Film } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Investments = () => {
  const [selectedInvestment, setSelectedInvestment] = useState<string | null>(null);

  const investments = [
    {
      id: "1",
      title: "Neon Nights",
      genre: "Sci-Fi Thriller",
      targetAmount: 2500000,
      raised: 1875000,
      investors: 847,
      expectedROI: "180-220%",
      duration: "18 months",
      status: "Active",
      riskLevel: "Medium"
    },
    {
      id: "2", 
      title: "The Last Canvas",
      genre: "Drama",
      targetAmount: 1200000,
      raised: 950000,
      investors: 423,
      expectedROI: "150-180%",
      duration: "12 months",
      status: "Active",
      riskLevel: "Low"
    },
    {
      id: "3",
      title: "Quantum Heist",
      genre: "Action",
      targetAmount: 5000000,
      raised: 3200000,
      investors: 1264,
      expectedROI: "200-250%",
      duration: "24 months", 
      status: "Active",
      riskLevel: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Investment Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exclusive film investment opportunities with encrypted returns and blockchain security
            </p>
          </div>

          {/* Investment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="card-film">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">$12.4M</div>
                <p className="text-sm text-muted-foreground">Total Invested</p>
              </CardContent>
            </Card>
            <Card className="card-film">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">187%</div>
                <p className="text-sm text-muted-foreground">Avg ROI</p>
              </CardContent>
            </Card>
            <Card className="card-film">
              <CardContent className="p-6 text-center">
                <Film className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">23</div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </CardContent>
            </Card>
            <Card className="card-film">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">2,534</div>
                <p className="text-sm text-muted-foreground">Protected Investors</p>
              </CardContent>
            </Card>
          </div>

          {/* Investment Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {investments.map((investment) => (
              <Card 
                key={investment.id} 
                className={`card-film cursor-pointer transition-all duration-300 ${
                  selectedInvestment === investment.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedInvestment(investment.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{investment.genre}</Badge>
                    <Badge 
                      variant={investment.riskLevel === 'Low' ? 'secondary' : 
                               investment.riskLevel === 'Medium' ? 'default' : 'destructive'}
                    >
                      {investment.riskLevel} Risk
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{investment.title}</CardTitle>
                  <CardDescription>
                    Target: ${investment.targetAmount.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{Math.round((investment.raised / investment.targetAmount) * 100)}%</span>
                    </div>
                    <Progress 
                      value={(investment.raised / investment.targetAmount) * 100} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>${investment.raised.toLocaleString()}</span>
                      <span>{investment.investors} investors</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Expected ROI</span>
                      <span className="font-semibold text-accent">{investment.expectedROI}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <span className="font-semibold">{investment.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full btn-film group">
                    Invest Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Investment Process */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Investment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Connect Wallet</h3>
                <p className="text-muted-foreground">
                  Securely connect your crypto wallet to access investment opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Choose Investment</h3>
                <p className="text-muted-foreground">
                  Browse projects and select based on your risk tolerance and expected returns
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Track Returns</h3>
                <p className="text-muted-foreground">
                  Monitor your encrypted investment performance until film release
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Investments;