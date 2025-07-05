export default function Feature({ imgSrc, title, description, className }) {
  return (
    <article className={`bg-white rounded-lg p-8 ${className}`}>
      <div className="p-4 w-16 h-16 bg-purple-900 rounded-full m-auto md:m-0 -mt-16 md:-mt-16">
        <img src={imgSrc} alt={title} className="w-full" />
      </div>
      <header className="text-center md:text-left">
        <h3 className="my-4 text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </header>
    </article>
  );
}
