import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Main />
      <Features />
      <section className="bg-violet-950 p-16 px-[5%] md:px-[10%] text-white">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl leading-0 font-bold mb-10 md:mb-12">
            Boost your links today
          </h2>
          <button className="cursor-pointer bg-cyan-300/80 hover:bg-cyan-300 text-gray-50 p-3 w-44 rounded-full">
            Get Started
          </button>
        </header>
      </section>
      <Footer />
    </>
  );
}
