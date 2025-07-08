import { useState } from "react";

export default function ShortenedLink({ shortUrl, error, inputUrl }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };
  return (
    <article className="text-base flex w-full flex-col md:flex-row gap-4 justify-between md:items-center bg-white p-2 md:p-4 rounded-md shadow-md">
      <p className="border-b md:border-none pb-3 md:pb-0 w-full overflow-x-scroll">
        {inputUrl}
      </p>
      <div className="w-full md:w-auto flex md:items-center flex-col md:flex-row justify-between gap-2 md:gap-4">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <p className="text-cyan-300">
              {shortUrl ? shortUrl : "linkslice.io/uniqueID"}
            </p>
            <button
              value={shortUrl}
              onClick={handleCopy}
              className={`${
                copied
                  ? "cursor-not-allowed bg-violet-700"
                  : "cursor-pointer bg-cyan-300 hover:bg-cyan-400"
              } text-white px-8 py-2 rounded-md w-full md:w-auto transition-colors`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </>
        )}
      </div>
    </article>
  );
}
