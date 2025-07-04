import { GiHamburgerMenu } from "react-icons/gi";
export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-[5%] py-8">
      <div className="flex items-center gap-8">
        <img src="/logo.svg" alt="logo" className="w-auto" />
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
      <button className="flex md:hidden">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}
