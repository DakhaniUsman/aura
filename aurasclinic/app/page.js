import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HeroSlider from "@/components/HeroSlider";
import QuickService from "@/components/QuickService";
import TopButton from "@/components/TopButton";



export default function Home() {
  return ( 
    <>
      
        <Navbar />
        <main className="w-full min-h-[100vh] relative mt-5">
            {/* <HeroText/> */}
            <HeroSlider />
            <QuickService />
            <About />
            <Services />
            <Contact />
            <TopButton />
        </main>
        <Footer />
    </>
  );
}
