import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Certifications />
        <Contact />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}
