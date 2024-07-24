import AboutMe from "@/components/aboutMe/aboutMe";
import Content from "@/components/header/content";
import Header from "@/components/header/header";

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
    </div>
  );
}
