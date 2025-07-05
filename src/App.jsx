import Boost from "./Components/Boost";
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
      <Boost />
      <Footer />
    </>
  );
}
