import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import marketingHeadImage from "@/assets/marketing-head.jpeg";
import webHeadImage from "@/assets/web-head.png";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team4 from "@/assets/team-4.png";
import team5 from "@/assets/team-5.png";
import team6 from "@/assets/team-6.png";
import team7 from "@/assets/team-7.png";
import team9 from "@/assets/team-9.png";
import team10 from "@/assets/team-10.png";
import team11 from "@/assets/team-11.png";
import team12 from "@/assets/team-12.png";
import team13 from "@/assets/team-13.png";
import team14 from "@/assets/team-14.png";
import team16 from "@/assets/team-16.png";
import team17 from "@/assets/team-17.png";
import team18 from "@/assets/team-18.png";
import team19 from "@/assets/team-19.png";

interface TeamHead {
  name?: string;
  role: string;
  image: string;
  linkedin?: string;
  imageClass?: string;
}

const Teams = () => {
  const teamHeads: TeamHead[] = [
    { name: "Vishnu Priya", role: "Marketing Team Head", image: marketingHeadImage, linkedin: "#" },
    {
      name: "Laxmi Shravani",
      role: "Web Design Team Head",
      image: webHeadImage,
      imageClass: "object-[center_20%]",
    },
    { name: "Janani Arikatla", role: "Student Ambassador - Project Mitra", image: team1 },
    { name: "Aashitha Mallela", role: "Pixel Head - Chitra Lehri", image: team2 },
    { name: "Jahanara Ghori", role: "Project Ambassador - Vishwakarma", image: team4 },
    { name: "Krithika Kiran", role: "Head of Public Relations", image: team5 },
    { name: "Haifa Siddique", role: "Student Ambassador - Chercha", image: team6 },
    { name: "K. Poojitha Reddy", role: "Media Head - Project Mitra", image: team7 },
    { name: "B. Sirisha", role: "Documentation Head", image: team9 },
    { name: "M. Pragna", role: "Public Relations", image: team10 },
    { name: "Soha Khan", role: "Finance Head", image: team11 },
    { name: "Kamaleshwari", role: "Documentation", image: team12 },
    { name: "Zeba Naaz", role: "Organising Head", image: team13 },
    { name: "Saeeha", role: "Project Ambassador - Charcha", image: team14 },
    { name: "K. Sravya Reddy", role: "Student Ambassador - Palle Baata", image: team16 },
    { name: "K. Shivani", role: "Organising Head", image: team17 },
    { name: "k.Vinya Sri", role: "Organising Head", image: team18 },
    { name: "Dipti Rani Dalai", role: "LinkedIn head", image: team19 },
  ];

  return (
    <section className="py-20" id="teams">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Team Heads</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the leaders who make SAIF's vision a reality
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {teamHeads.map((member) => (
            <div key={member.role + (member.name ?? "")} className="group text-center hover-lift">
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name ?? member.role}
                  loading="lazy"
                  className={`w-full h-full object-cover rounded-full border-4 border-border group-hover:border-primary transition-colors ${
                    member.imageClass ?? ""
                  }`}
                />
                {member.linkedin && (
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-card border border-border opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                  </Button>
                )}
              </div>
              {member.name && <h4 className="font-semibold text-card-foreground">{member.name}</h4>}
              <p className="text-sm text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
