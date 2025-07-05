import { useState } from "react";
import ShortenedLink from "./ShortenedLink";
import ShortenLinkForm from "./ShortenLinkForm";

export default function Main() {
  const [input, setInput] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [lastInput, setLastInput] = useState(""); // NEW

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setLastInput("");
    if (!input) {
      setError("Please enter a URL.");
      return;
    }
    setLastInput(input); // Save the input before clearing
    try {
      const res = await fetch(
        "https://corsproxy.io/?url=https://cleanuri.com/api/v1/shorten",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ url: input }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.result_url) {
        setShortUrl(data.result_url);
        setInput(""); // Clear input after successful shortening
      } else {
        setError("Failed to shorten URL.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="px-[5%] md:px-[10%] py-8 flex flex-col gap-8">
      <ShortenLinkForm
        input={input}
        setInput={(e) => setInput(e.target.value)}
        handleSubmit={handleSubmit}
      />
      <section className="flex flex-col gap-8">
        <ShortenedLink inputUrl={lastInput} shortUrl={shortUrl} error={error} />
      </section>
    </main>
  );
}
