import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import ShortenedLink from "./Components/ShortenedLink";
import ShortenLinkForm from "./Components/ShortenLinkForm";

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main className="px-[5%] py-8 flex flex-col gap-8">
        <ShortenLinkForm />
        <section className="flex flex-col gap-8">
          <ShortenedLink />
        </section>
      </main>
    </>
  );
}
