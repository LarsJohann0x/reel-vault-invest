import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Film, Eye, EyeOff, TrendingUp, Calendar, Users } from "lucide-react";

const InvestmentDashboard = () => {
  const projects = [
    {
      id: 1,
      title: "███████ ███████",
      genre: "Action/Thriller", 
      status: "Pre-Production",
      encrypted: true,
      investment: "████,███",
      roi: "██.█%",
      releaseDate: "█████ ████",
      investors: "███"
    },
    {
      id: 2, 
      title: "████ ██ ███ ████",
      genre: "Drama/Romance",
      status: "Production", 
      encrypted: true,
      investment: "███,███",
      roi: "██.█%",
      releaseDate: "███████ ████",
      investors: "██"
    },
    {
      id: 3,
      title: "██████ ███████",
      genre: "Sci-Fi/Adventure",
      status: "Post-Production",
      encrypted: true,
      investment: "█,███,███", 
      roi: "██.█%",
      releaseDate: "████████ ████",
      investors: "███"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Investment Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Your film investments are encrypted and protected until release date
          </p>
          <div className="inline-flex items-center space-x-2 bg-encrypted/10 border border-encrypted/20 rounded-full px-4 py-2">
            <EyeOff className="w-4 h-4 text-encrypted" />
            <span className="text-encrypted text-sm font-medium">All data encrypted</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="relative overflow-hidden vault-door border-border/50">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-encrypted/20 text-encrypted border-encrypted/30">
                  <EyeOff className="w-3 h-3 mr-1" />
                  Encrypted
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Film className="w-6 h-6 text-primary film-reel" />
                  <Badge variant="outline" className="text-xs">{project.genre}</Badge>
                </div>
                <CardTitle className="text-xl">
                  <span className="encrypted-blur">{project.title}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-medium">{project.status}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Investment</p>
                    <p className="font-bold text-primary encrypted-blur">${project.investment}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Projected ROI
                    </p>
                    <p className="font-bold text-encrypted encrypted-blur">{project.roi}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      Investors
                    </p>
                    <p className="font-medium encrypted-blur">{project.investors}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Release Date
                    </span>
                    <span className="encrypted-blur font-medium">{project.releaseDate}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full btn-encrypted">
                    <Eye className="w-4 h-4 mr-2" />
                    View When Unlocked
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-film text-lg px-8 py-4">
            <Film className="w-5 h-5 mr-2" />
            Discover New Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentDashboard;