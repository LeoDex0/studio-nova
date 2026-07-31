import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedWorks />
        <Philosophy />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
