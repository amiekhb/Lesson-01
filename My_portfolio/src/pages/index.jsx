// import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../../components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
