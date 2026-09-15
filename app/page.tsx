import { Header } from "@/src/components/navigation/Header/Header";
import { Approach } from "@/src/components/sections/Approach/Approach";
import { ClientMarquee } from "@/src/components/sections/ClientMarquee/ClientMarquee";
import { Clients } from "@/src/components/sections/Clients/Clients";
import { FinalCTA } from "@/src/components/sections/FinalCTA/FinalCTA";
import { Footer } from "@/src/components/sections/Footer/Footer";
import { Hero } from "@/src/components/sections/Hero/Hero";
import { Intro } from "@/src/components/sections/Intro/Intro";
import { SelectedWorks } from "@/src/components/sections/SelectedWorks/SelectedWorks";
import { Services } from "@/src/components/sections/Services/Services";
import { Team } from "@/src/components/sections/Team/Team";
import { WhyLight } from "@/src/components/sections/WhyLight/WhyLight";
import { CustomCursor } from "@/src/components/ui/CustomCursor/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <ClientMarquee />
        <Clients />
        <Intro />
        <Services />
        <SelectedWorks />
        <Approach />
        <WhyLight />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
