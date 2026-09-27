import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group relative p-8 rounded-2xl bg-card border border-border/50 hover-lift overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To nurture socially responsible innovators and entrepreneurs who create sustainable solutions for real-world challenges, empowering women to lead change through innovation, technology, and purpose-driven enterprise.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          </div>

          {/* Mission Card */}
          <div className="group relative p-8 rounded-2xl bg-card border border-border/50 hover-lift overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a supportive incubation ecosystem that fosters creativity, skill development, mentorship, and startup growth among students and young innovators, transforming ideas into impactful ventures that benefit society.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
