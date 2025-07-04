import illustration from "../assets/images/illustration-working.svg";
export default function Header() {
  return (
    <section className="text-center md:text-left px-[5%] py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
      <header className="w-full md:w-[40%]">
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
          More than just shorter links
        </h1>
        <p className="my-3 md:my-4">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="cursor-pointer bg-cyan-300/80 hover:bg-cyan-300 text-gray-50 p-3 w-44 rounded-full">
          Get Started
        </button>
      </header>
      <div className="w-full md:w-1/2">
        <img src={illustration} alt="working illustration" className="w-full" />
      </div>
    </section>
  );
}
