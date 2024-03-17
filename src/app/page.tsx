import About from "@/components/about";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section_divider";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center px-4">
<Introduction/>
<SectionDivider/>
<About/>
<SectionDivider/>
<Projects/>
    </main>
  );
}
