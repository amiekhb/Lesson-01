import AboutMe from "@/components/aboutMe/aboutMe";
import ExperienceCard from "@/components/experience/experience";
import Content from "@/components/header/content";
import Header from "@/components/header/header";
import Skills from "@/components/skills/skills";
const experiences = [
  {
    title: "Sr. Frontend Developer",
    companyLogo: "./zurag/logo.png",
    jobRoles: ["1", "2", "3"],
  },
  {
    title: "Team Lead",
    companyLogo: "./zurag/logo.png",
    jobRoles: ["1", "2", "3"],
  },
  {
    title: "Full Stack Developer",
    companyLogo: "./zurag/logo.png",
    jobRoles: ["1", "2", "3"],
  },
];
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
      <section4 className="bg-gray-50">
        {experiences.map(({ title, companyLogo, jobRoles }) => (
          <ExperienceCard
            title={title}
            companyLogo={companyLogo}
            jobRoles={jobRoles}
          />
        ))}
      </section4>
    </div>
  );
}
