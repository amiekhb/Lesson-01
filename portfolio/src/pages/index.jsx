import AboutMe from "@/components/aboutMe/aboutMe";
import Experience from "@/components/experience/experience";
import Content from "@/components/header/content";
import Header from "@/components/header/header";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <div>
      <section1 className=" h-96 bg-white">
        {""}
        <Header />
        <Content />
      </section1>
      <section2 className="bg-gray-50 h-screen">
        <AboutMe />
      </section2>
      <section3 className="  bg-white h-96">
        <Skills />
      </section3>

      <Experience title="Sr. Frontend Developer" companyLogo="./logo.png" />
    </div>
  );
}
