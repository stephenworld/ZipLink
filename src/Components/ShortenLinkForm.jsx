import { useEffect, useState } from "react";
import desktopImage from "../assets/images/bg-shorten-desktop.svg";
import mobileImage from "../assets/images/bg-shorten-mobile.svg";
console.log(desktopImage);
export default function ShortenLinkForm({ input, setInput, handleSubmit }) {
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
    <div
      style={{ backgroundImage: `url("${bgImage}")` }}
      className="bg-violet-950/70 px-[5%] py-12 rounded-md bg-no-repeat bg-cover bg-center"
    >
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="bg-white md:w-8/10 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            value={input}
            onChange={setInput}
          />
          <button
            type="submit"
            className="bg-cyan-300/80 hover:bg-cyan-300 text-gray-50 p-3 md:w-2/10 w-full rounded-md cursor-pointer"
          >
            Shorten It!
          </button>
        </div>
      </form>
    </div>
  );
}
