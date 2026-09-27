import { Lightbulb, Network, BookOpen, Rocket } from "lucide-react";

const WhySAIF = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Expert Mentorship",
      description: "Connect with industry experts and successful entrepreneurs who guide you through every step of your journey.",
    },
    {
      icon: Network,
      title: "Strong Network",
      description: "Access our extensive network of investors, partners, and fellow entrepreneurs to accelerate your growth.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Benefit from workshops, training programs, and resources designed to build essential entrepreneurial skills.",
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "Get hands-on support in launching your startup with funding assistance and market access.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Choose <span className="gradient-text">SAIF?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes SAIF the ideal launchpad for your entrepreneurial dreams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group relative p-8 rounded-2xl border border-border/50 hover-lift overflow-hidden ${
                index % 2 === 0 ? "bg-card" : "bg-primary/5"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2 text-card-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySAIF;
