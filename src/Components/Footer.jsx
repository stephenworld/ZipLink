import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center md:text-left text-white bg-gray-900/95 p-16 px-[5%] md:px-[10%] text-[1rem]">
      <div className="col-span-1 md:col-span-2 m-auto md:m-0">
        <p className="text-3xl font-bold text-gray-50">LinkSlice</p>
      </div>
      <div>
        <h4 className="mb-4 font-bold text-xl">Features</h4>
        <ul>
          <li className="hover:text-cyan-300/80 cursor-pointer">
            Link Shortening
          </li>
          <li className="hover:text-cyan-300/80 cursor-pointer">
            Branded Links
          </li>
          <li className="hover:text-cyan-300/80 cursor-pointer">Analytics</li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-bold text-xl">Resources</h4>
        <ul>
          <li className="hover:text-cyan-300/80 cursor-pointer">Blog</li>
          <li className="hover:text-cyan-300/80 cursor-pointer">Developers</li>
          <li className="hover:text-cyan-300/80 cursor-pointer">Support</li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-bold text-xl">Company</h4>
        <ul>
          <li className="hover:text-cyan-300/80 cursor-pointer">About</li>
          <li className="hover:text-cyan-300/80 cursor-pointer">Our Team</li>
          <li className="hover:text-cyan-300/80 cursor-pointer">Careers</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4 justify-center md:justify-normal">
          <li className="cursor-pointer hover:invert-50">
            <img src={facebook} alt="facebook" />
          </li>
          <li className="cursor-pointer hover:invert-50">
            <img src={twitter} alt="twitter" />
          </li>
          <li className="cursor-pointer hover:invert-50">
            <img src={pinterest} alt="pinterest" />
          </li>
          <li className="cursor-pointer hover:invert-50">
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
