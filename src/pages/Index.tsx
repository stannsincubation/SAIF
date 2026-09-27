import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/VisionMission";
import About from "@/components/sections/About";
import BoardMembers from "@/components/sections/BoardMembers";
import WhySAIF from "@/components/sections/WhySAIF";
import Teams from "@/components/sections/Teams";
import Workshops from "@/components/sections/Workshops";
import Podcast from "@/components/sections/Podcast";
import Startups from "@/components/sections/Startups";
import { PastEvents as Events } from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <VisionMission />
      <div id="about"><About /></div>
      <BoardMembers />
      <WhySAIF />
      <Teams />
      <div id="workshops"><Workshops /></div>
      <div id="podcast"><Podcast /></div>
      <Startups />
      <div id="events"><Events /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
};

export default Index; 