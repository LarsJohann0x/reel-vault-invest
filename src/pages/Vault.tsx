import { useState } from "react";
import { Shield, Lock, Eye, EyeOff, Wallet, TrendingUp, Clock, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vault = () => {
  const [encryptionEnabled, setEncryptionEnabled] = useState(true);
  const [showReturns, setShowReturns] = useState(false);

  const vaultData = [
    {
      id: "1",
      filmTitle: "Neon Nights", 
      investmentAmount: 25000,
      currentValue: encryptionEnabled ? "██████" : "34,750",
      roi: encryptionEnabled ? "██%" : "+39%",
      status: "Active",
      releaseDate: "Q2 2025",
      lockPeriod: "18 months",
      encryptedUntil: "Film Release"
    },
    {
      id: "2",
      filmTitle: "The Last Canvas",
      investmentAmount: 15000, 
      currentValue: encryptionEnabled ? "██████" : "21,600",
      roi: encryptionEnabled ? "██%" : "+44%",
      status: "Active", 
      releaseDate: "Q4 2024",
      lockPeriod: "12 months",
      encryptedUntil: "Film Release"
    },
    {
      id: "3",
      filmTitle: "Midnight Express",
      investmentAmount: 50000,
      currentValue: encryptionEnabled ? "██████" : "89,500", 
      roi: encryptionEnabled ? "██%" : "+79%",
      status: "Released",
      releaseDate: "Released",
      lockPeriod: "Completed",
      encryptedUntil: "Unlocked"
    }
  ];

  const totalInvestment = vaultData.reduce((sum, item) => sum + item.investmentAmount, 0);
  const estimatedValue = encryptionEnabled ? "███████" : "145,850";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Encrypted Vault
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your investment returns remain encrypted and protected until film release
            </p>
          </div>

          {/* Vault Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="card-film">
              <CardContent className="p-6 text-center">
                <Wallet className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">
                  ${totalInvestment.toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground">Total Invested</p>
              </CardContent>
            </Card>
            <Card className="card-film">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {encryptionEnabled ? <Lock className="w-6 h-6 text-accent" /> : <TrendingUp className="w-6 h-6 text-accent" />}
                </div>
                <div className="text-2xl font-bold text-accent">
                  ${estimatedValue}
                </div>
                <p className="text-sm text-muted-foreground">Current Value</p>
              </CardContent>
            </Card>
            <Card className="card-film">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">3</div>
                <p className="text-sm text-muted-foreground">Protected Investments</p>
              </CardContent>
            </Card>
          </div>

          {/* Encryption Controls */}
          <Card className="card-film mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Control the visibility of your investment returns and performance data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium">Encryption Mode</label>
                  <p className="text-sm text-muted-foreground">
                    Hide returns until film release for enhanced privacy
                  </p>
                </div>
                <Switch 
                  checked={encryptionEnabled}
                  onCheckedChange={setEncryptionEnabled}
                />
              </div>
              {!encryptionEnabled && (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-sm text-yellow-400">
                    ⚠️ Encryption disabled. Your returns are now visible.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Investment Tabs */}
          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              {vaultData.filter(item => item.status === "Active").map((investment) => (
                <Card key={investment.id} className="card-film">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{investment.filmTitle}</h3>
                        <Badge variant="secondary">{investment.status}</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Investment Amount</p>
                        <p className="text-lg font-semibold">${investment.investmentAmount.toLocaleString()}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-muted-foreground">Current Value</p>
                          {encryptionEnabled && <Lock className="w-3 h-3 text-muted-foreground" />}
                        </div>
                        <p className="text-lg font-semibold text-accent">
                          {typeof investment.currentValue === 'string' && investment.currentValue.includes('█') 
                            ? investment.currentValue 
                            : `$${investment.currentValue}`}
                        </p>
                        <p className="text-sm text-accent">{investment.roi}</p>
                      </div>
                      
                      <div className="space-y-2 text-right">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Release: {investment.releaseDate}</p>
                          <p className="text-sm text-muted-foreground">Encrypted until: {investment.encryptedUntil}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              {vaultData.filter(item => item.status === "Released").map((investment) => (
                <Card key={investment.id} className="card-film">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{investment.filmTitle}</h3>
                        <Badge className="bg-green-500/20 text-green-400">Released</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Investment Amount</p>
                        <p className="text-lg font-semibold">${investment.investmentAmount.toLocaleString()}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Final Value</p>
                        <p className="text-lg font-semibold text-green-400">
                          ${investment.currentValue}
                        </p>
                        <p className="text-sm text-green-400">{investment.roi}</p>
                      </div>
                      
                      <div className="space-y-2 text-right">
                        <Button className="btn-film" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card className="card-film">
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>
                    Complete record of your investment activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: "2024-01-15", action: "Investment", film: "Neon Nights", amount: "$25,000", type: "deposit" },
                      { date: "2024-02-01", action: "Investment", film: "The Last Canvas", amount: "$15,000", type: "deposit" },
                      { date: "2024-03-10", action: "Return", film: "Midnight Express", amount: "$89,500", type: "return" },
                      { date: "2024-03-12", action: "Withdrawal", film: "Midnight Express", amount: "$89,500", type: "withdrawal" }
                    ].map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                        <div>
                          <p className="font-medium">{transaction.action} - {transaction.film}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                        <div className={`font-semibold ${
                          transaction.type === 'return' ? 'text-green-400' : 
                          transaction.type === 'withdrawal' ? 'text-blue-400' : 'text-foreground'
                        }`}>
                          {transaction.type === 'deposit' ? '-' : '+'}
                          {transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vault;