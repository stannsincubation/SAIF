import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Youtube, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - will be connected to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", inquiryType: "", message: "" });
    setIsSubmitting(false);
  };

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/saif.incubationfoundation?igsh=NW1kbXV5eXd1Y2Q0", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/saif-st-anns-incubation-foundation/", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">2-2-823, A/45, St Anns Rd, Santosh Nagar,<br />Mehdipatnam, Hyderabad, Telangana 500028, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+919010090959" className="text-muted-foreground hover:text-primary transition-colors">+91 90100 90959</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:info@stannscollegehyd.com" className="text-muted-foreground hover:text-primary transition-colors block">info@stannscollegehyd.com</a>
                  <a href="mailto:saif.ceo@st.annscollegehyd.com" className="text-muted-foreground hover:text-primary transition-colors block">saif.ceo@st.annscollegehyd.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border/50">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <Select value={formData.inquiryType} onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
              <SelectTrigger><SelectValue placeholder="Inquiry Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="incubation">Incubation Program</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
            <Button type="submit" className="w-full gradient-bg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
