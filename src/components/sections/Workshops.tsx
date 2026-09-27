import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "Design Thinking",
      description: "Master the art of human-centered design to create innovative solutions.",
      duration: "2 Days",
      participants: "30",
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: "💡",
    },
    {
      title: "Problem Solving",
      description: "Learn structured approaches to tackle complex business challenges.",
      duration: "1 Day",
      participants: "40",
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: "🧩",
    },
    {
      title: "LinkedIn Mastery",
      description: "Build your professional brand and network effectively on LinkedIn.",
      duration: "3 Hours",
      participants: "50",
      gradient: "from-blue-600/20 to-blue-400/20",
      icon: "💼",
    },
    {
      title: "Pitch Perfect",
      description: "Craft compelling pitches that captivate investors and customers.",
      duration: "1 Day",
      participants: "25",
      gradient: "from-orange-500/20 to-yellow-500/20",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="workshops">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Workshops</span> & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skill-building workshops designed to enhance your entrepreneurial capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.title}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover-lift overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${workshop.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{workshop.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2 text-card-foreground">{workshop.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{workshop.description}</p>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    {workshop.participants} seats
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
