import Hero from "@/components/Hero";
import FeaturePrograms from "@/components/FeaturePrograms";
import AboutSplit from "@/components/AboutSplit";
import Pricing from "@/components/Pricing";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutSplit />
      <FeaturePrograms />
      <Pricing />
      <Hours />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
