import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navigation() {
  const [mobileNav, setMobileNav] = useState(null);
  return (
    <nav className="relative flex items-center justify-between px-[5%] md:px-[10%] py-8">
      <div className="flex items-center gap-8">
        <p className="text-3xl font-bold text-gray-800">LinkSlice</p>
        <ul className="hidden md:flex gap-8">
          <li className="hover:text-gray-800 cursor-pointer">Features</li>
          <li className="hover:text-gray-800 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-800 cursor-pointer">Resources</li>
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <button>Login</button>
        <button className="cursor-pointer bg-cyan-300/80 hover:bg-cyan-300 text-gray-50 p-2 w-36 rounded-full">
          Sign Up
        </button>
      </div>
      <button
        onClick={() => setMobileNav(!mobileNav)}
        className="flex md:hidden"
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={`${
          mobileNav ? "inline transition-all " : "hidden"
        } absolute top-20 bg-violet-950 py-8 p-4 w-[90%] md:hidden rounded-lg text-center font-bold text-white`}
      >
        <ul className="flex gap-4 flex-col w-full justify-center">
          <li className="hover:text-gray-800 cursor-pointer">Features</li>
          <li className="hover:text-gray-800 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-800 cursor-pointer">Resources</li>
        </ul>
        <hr className="my-4 border-gray-500" />
        <div className="flex flex-col gap-4">
          <button className="w-full p-2">Login</button>
          <button className="cursor-pointer bg-cyan-300/80 hover:bg-cyan-300 text-gray-50 p-3 w-full rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
