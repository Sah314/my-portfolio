import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section_divider";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center">
      <Introduction />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
