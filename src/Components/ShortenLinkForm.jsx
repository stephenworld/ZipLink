export default function ShortenLinkForm({ input, setInput, handleSubmit }) {
  return (
    <form
      action=""
      className="bg-violet-600 px-[5%] py-12 rounded-md bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-cover bg-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="bg-white md:w-8/10 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          value={input}
          onChange={setInput}
        />
        <button
          type="submit"
          className="bg-cyan-300/80 hover:bg-cyan-300 text-gray-50 p-3 md:w-2/10 w-full rounded-md cursor-pointer"
        >
          Shorten It!
        </button>
      </div>
    </form>
  );
}
