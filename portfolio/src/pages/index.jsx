import AboutMe from "@/components/aboutMe/aboutMe";
import ExperienceCard from "@/components/experience/experience";
import Content from "@/components/header/content";
import Header from "@/components/header/header";
import Skills from "@/components/skills/skills";
import Work from "@/components/work/work";
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
const works = [
  {
    zurag: "./zurag/Picture.png",
    project_name: "UBCab",
    project:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tools: "",
  },
  {
    zurag: "./zurag/Picture2.png",
    project_name: "Mentorhub",
    project:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tools: "",
  },
  {
    zurag: "./zurag/Picture1.png",
    project_name: "iToim",
    project:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tools: "2",
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

      <section6>
        <div className="flex flex-col items-center gap-5 mt-24">
          <p className="text-gray-600 bg-gray-200 rounded-xl text-center h-[28px] w-[105px]">
            Work
          </p>
          <p className="text-gray-600">
            Some of the noteworthy projects I have built:{" "}
          </p>
        </div>
        {works.map(({ zurag, project_name, project, tools }) => (
          <Work
            zurag={zurag}
            project_name={project_name}
            project={project}
            tools={tools}
          />
        ))}
      </section6>
    </div>
  );
}
