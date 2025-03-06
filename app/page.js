// import Image from "next/image";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutSection";
// import ProjectSection from "./components/ProjectSection";
// import Contact from "./components/Contact";
// export default function Home() {
//   return (
//       <main className="flex min-h-screen flex-col container mx-auto px-12 py-6 ">
//         <Navbar/>
//         <div className="container mx-auto px-12 py-4 mt-20">
//         <HeroSection/>
//         <AboutSection/>
//         <ProjectSection/>
//         <Contact/>
//         </div>
//       </main>
      
//   );
// }






import Image from "next/image"; 
import HeroSection from "./components/HeroSection"; 
import Navbar from "./components/Navbar"; 
import AboutSection from "./components/AboutSection"; 
import ProjectSection from "./components/ProjectSection"; 
import Contact from "./components/Contact"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-6">
      <Navbar/>
      <div className="container mx-auto px-12 py-4 mt-20">
        <section id="home">
          <HeroSection/>
        </section>
        <section id="about">
          <AboutSection/>
        </section>
        <section id="projects">
          <ProjectSection/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </main>
  ); 
}