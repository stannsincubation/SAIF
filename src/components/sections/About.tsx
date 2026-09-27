import { TrendingUp, Users, FileSignature, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    { icon: TrendingUp, value: "5+", label: "Startups Incubated" },
    { icon: Users, value: "200+", label: "Students Mentored" },
    { icon: FileSignature, value: "5+", label: "MOU Signed" },
    { icon: Calendar, value: "100+", label: "Workshops Hosted" },
  ];

  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            About <span className="gradient-text">SAIF</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SAIF Incubation Foundation is a student-led initiative dedicated to nurturing entrepreneurial talent and transforming innovative ideas into successful business ventures. Founded with the vision of creating a supportive ecosystem for aspiring entrepreneurs, we provide the guidance, resources, and network necessary to turn dreams into reality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 text-center hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-3xl font-display font-bold mb-1 text-card-foreground group-hover:text-primary-foreground transition-colors">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
