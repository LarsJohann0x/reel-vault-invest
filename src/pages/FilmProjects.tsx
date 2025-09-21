import { useState } from "react";
import { Play, Star, Calendar, MapPin, Users, DollarSign, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FilmProjects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "1",
      title: "Neon Nights",
      genre: "Sci-Fi Thriller",
      director: "Sarah Chen",
      status: "Pre-Production",
      budget: 2500000,
      raised: 1875000,
      releaseDate: "Q2 2025",
      location: "Los Angeles, CA",
      cast: ["Emma Stone", "Ryan Gosling", "Oscar Isaac"],
      synopsis: "In a dystopian future where memories can be extracted and sold, a detective must navigate the neon-lit streets to uncover a conspiracy that threatens the fabric of reality itself.",
      investors: 847,
      expectedROI: "180-220%"
    },
    {
      id: "2",
      title: "The Last Canvas", 
      genre: "Drama",
      director: "Marcus Thompson",
      status: "Filming",
      budget: 1200000,
      raised: 950000,
      releaseDate: "Q4 2024",
      location: "Paris, France",
      cast: ["Saoirse Ronan", "Timothée Chalamet"],
      synopsis: "An aging painter struggles to complete his final masterpiece while confronting the ghosts of his past and the changing world around him.",
      investors: 423,
      expectedROI: "150-180%"
    },
    {
      id: "3",
      title: "Quantum Heist",
      genre: "Action",
      director: "Alex Rodriguez",
      status: "Development",
      budget: 5000000,
      raised: 3200000,
      releaseDate: "Q1 2026", 
      location: "Tokyo, Japan",
      cast: ["John Cho", "Gemma Chan", "Dev Patel"],
      synopsis: "A team of quantum physicists turned thieves attempt the impossible: stealing from multiple parallel universes simultaneously.",
      investors: 1264,
      expectedROI: "200-250%"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Development": return "bg-blue-500/20 text-blue-400";
      case "Pre-Production": return "bg-yellow-500/20 text-yellow-400";
      case "Filming": return "bg-green-500/20 text-green-400";
      case "Post-Production": return "bg-purple-500/20 text-purple-400";
      case "Complete": return "bg-accent/20 text-accent";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Film Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our carefully curated portfolio of film projects from development to release
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="pre-production">Pre-Production</TabsTrigger>
              <TabsTrigger value="filming">Filming</TabsTrigger>
              <TabsTrigger value="complete">Complete</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {projects.map((project) => (
                <Card 
                  key={project.id}
                  className={`card-film cursor-pointer transition-all duration-300 ${
                    selectedProject === project.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <Badge variant="outline">{project.genre}</Badge>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>Director: {project.director}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Release: {project.releaseDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span>{project.investors} investors</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.synopsis}
                      </p>

                      {selectedProject === project.id && (
                        <div className="space-y-4 pt-4 border-t border-border">
                          <div>
                            <h4 className="font-semibold mb-2">Cast</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.cast.map((actor, index) => (
                                <Badge key={index} variant="secondary">{actor}</Badge>
                              ))}
                            </div>
                          </div>
                          <Button className="btn-film">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Trailer
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Investment Info */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Funding Progress</span>
                          <span>{Math.round((project.raised / project.budget) * 100)}%</span>
                        </div>
                        <Progress 
                          value={(project.raised / project.budget) * 100} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>${project.raised.toLocaleString()}</span>
                          <span>${project.budget.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Expected ROI</span>
                          <span className="font-semibold text-accent">{project.expectedROI}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Min Investment</span>
                          <span className="font-semibold">$1,000</span>
                        </div>
                      </div>

                      <Button className="w-full btn-film">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Invest in Project
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Project Pipeline */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Production Pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { stage: "Development", count: 12, color: "bg-blue-500" },
                { stage: "Pre-Production", count: 8, color: "bg-yellow-500" },
                { stage: "Filming", count: 3, color: "bg-green-500" },
                { stage: "Post-Production", count: 5, color: "bg-purple-500" },
                { stage: "Release", count: 2, color: "bg-accent" }
              ].map((stage, index) => (
                <Card key={index} className="card-film text-center">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold">{stage.count}</span>
                    </div>
                    <h3 className="font-semibold">{stage.stage}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FilmProjects;