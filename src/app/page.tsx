import Hero from "@/components/Hero";
import AboutSplit from "@/components/AboutSplit";
import EquipmentTeam from "@/components/EquipmentTeam";
import Community from "@/components/Community";
import Pricing from "@/components/Pricing";
import Firmenfitness from "@/components/Firmenfitness";
import FreeTrial from "@/components/FreeTrial";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutSplit />
      <EquipmentTeam />
      <Community />
      <Pricing />
      <Firmenfitness />
      <FreeTrial />
      <Hours />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
