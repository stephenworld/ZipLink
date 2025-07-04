export default function ShortenedLink() {
  return (
    <article className="text-base flex w-full flex-col md:flex-row gap-4 justify-between md:items-center bg-white p-2 md:p-4 rounded-md shadow-md">
      <p className="border-b md:border-none pb-3 md:pb-0">
        https://example.com/shortened-link
      </p>
      <div className="w-full md:w-auto flex md:items-center flex-col md:flex-row justify-between gap-2 md:gap-4">
        <p className="text-cyan-300">https://example.com/shortened-link</p>
        <button className="bg-cyan-300 hover:bg-cyan-400 text-white px-8 py-2 rounded-md w-full md:w-auto">
          Copy
        </button>
      </div>
    </article>
  );
}
