import { useEffect, useState } from "react";
import desktopImage from "../assets/images/bg-boost-desktop.svg";
import mobileImage from "../assets/images/bg-boost-mobile.svg";
export default function Boost() {
  const [bgImage, setBgImage] = useState(desktopImage);

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth < 768) {
        setBgImage(mobileImage);
      } else {
        setBgImage(desktopImage);
      }
    };
    updateBg();
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <section
      style={{ backgroundImage: `url("${bgImage}")` }}
      className="bg-violet-950/70 bg-no-repeat bg-cover bg-center p-16 px-[5%] md:px-[10%] text-white"
    >
      <header className="text-center">
        <h2 className="text-3xl md:text-4xl leading-0 font-bold mb-10 md:mb-12">
          Boost your links today
        </h2>
        <button className="cursor-pointer bg-cyan-300/80 hover:bg-cyan-300 text-gray-50 p-3 w-44 rounded-full">
          Get Started
        </button>
      </header>
    </section>
  );
}
