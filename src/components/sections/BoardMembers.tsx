import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import directorImage from "@/assets/director.jpg";
import ceoImage from "@/assets/ceo.jpg";
import chiefPatronImage from "@/assets/chief-patron.jpg";

const BoardMembers = () => {
  const members = [
    {
      name: "Dr. Sr. A. Vijaya Rani",
      designation: "Chief Patron",
      bio: "Visionary leader guiding SAIF's mission to empower student entrepreneurs.",
      image: chiefPatronImage,
      linkedin: "#",
    },
    {
      name: "Dr. Naveen Vade",
      designation: "CEO",
      bio: "Leading SAIF's strategic vision and operational excellence.",
      image: ceoImage,
      linkedin: "#",
    },
    {
      name: "Dr. N. Suma Reddy",
      designation: "Director",
      bio: "Driving innovation and academic excellence in entrepreneurship education.",
      image: directorImage,
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="board">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Board <span className="gradient-text">Members</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders guiding SAIF's mission to empower student entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 text-center hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-display font-bold mb-1 text-card-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.designation}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                <Button variant="ghost" size="sm" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
