

import Image from "next/image"; 
import HeroSection from "./components/HeroSection"; 
import Navbar from "./components/Navbar"; 
import AboutSection from "./components/AboutSection"; 
import ProjectSection from "./components/ProjectSection"; 
import Contact from "./components/Contact"; 

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar/>
      <div className="w-full max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 mt-16 sm:mt-18 md:mt-20">
        <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
          <section id="home" className="w-full scroll-mt-20">
            <div className="w-full max-w-full overflow-hidden">
              <HeroSection/>
            </div>
          </section>
          
          <section id="about" className="w-full scroll-mt-20">
            <div className="w-full max-w-full overflow-hidden">
              <AboutSection/>
            </div>
          </section>
          
          <section id="projects" className="w-full scroll-mt-20">
            <div className="w-full max-w-full overflow-hidden">
              <ProjectSection/>
            </div>
          </section>
          
          <section id="contact" className="w-full scroll-mt-20">
            <div className="w-full max-w-full overflow-hidden">
              <Contact/>
            </div>
          </section>
        </div>
      </div>
    </main>
  ); 
}