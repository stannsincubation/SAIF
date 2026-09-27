import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Clock } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Summer Internship Program",
      description: "Gain hands-on experience working with startups and learning entrepreneurship skills.",
      duration: "8 Weeks",
      positions: "50+",
      teams: ["Media", "Organizing", "Finance", "Marketing", "Web Design"],
      featured: true,
    },
    {
      title: "Startup Acceleration",
      description: "Intensive program to accelerate your startup from idea to market-ready product.",
      duration: "12 Weeks",
      positions: "20",
      teams: ["Mentorship", "Funding", "Tech Support"],
      featured: false,
    },
    {
      title: "Leadership Development",
      description: "Develop essential leadership skills needed to build and manage successful teams.",
      duration: "6 Weeks",
      positions: "30",
      teams: ["Workshop", "Mentoring", "Networking"],
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our programs designed to transform aspiring entrepreneurs into successful founders
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`group relative overflow-hidden hover-lift ${
                program.featured ? "border-primary/50 bg-gradient-to-b from-primary/5 to-card" : ""
              }`}
            >
              {program.featured && (
                <Badge className="absolute top-4 right-4 gradient-bg">Featured</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-display">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm">{program.positions} Positions</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {program.teams.map((team) => (
                    <Badge key={team} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {team}
                    </Badge>
                  ))}
                </div>
                <Button 
                  className="w-full group/btn" 
                  variant={program.featured ? "default" : "outline"}
                  asChild
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSedigJ1Dtq0tFTt50hyFM652LGmjzjFB4nPjKbQATr2kLgORg/viewform" target="_blank" rel="noopener noreferrer">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
