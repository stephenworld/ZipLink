import Feature from "./Feature";
import brandRecognitionImg from "../assets/images/icon-brand-recognition.svg";
import detailedRecordsImg from "../assets/images/icon-detailed-records.svg";
import fullyCustomizableImg from "../assets/images/icon-fully-customizable.svg";
export default function Features() {
  return (
    <section className="px-[5%] md:px-[10%] my-16">
      <header className="md:w-1/2 text-center mx-auto my-16 md:mb-0">
        <h2 className="font-bold text-gray-900 text-3xl md:text-5xl leading-0">
          Advanced Statistics
        </h2>
        <p className="md:mt-10 mt-6">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>
      <section className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between items-center relative">
        <div className="absolute p-0.75 bg-cyan-400 h-full md:h-auto md:w-full m-auto -z-1"></div>
        <Feature
          imgSrc={brandRecognitionImg}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          className="md:mt-0"
        />
        <Feature
          imgSrc={detailedRecordsImg}
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          className="md:mt-16"
        />
        <Feature
          imgSrc={fullyCustomizableImg}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          className="md:mt-32"
        />
      </section>
    </section>
  );
}
