import vision from "../assets/vision-img.png";
import mission from "../assets/mission-img.png";
import rightArrow from "../assets/right-arrow.svg";
import aboutImg1 from "../assets/about-us-1.jpeg";
import aboutImg2 from "../assets/about-us-2.jpeg";
import aboutImg3 from "../assets/about-us-3.jpeg";

const Aboutus = () => {
  return (
    <div id="aboutus" className=" px-6 sm:px-10 md:px-20 py-20 ">
      <div className="mb-20 text-center">
        <div className="opacity-70 text-2xl">About us</div>
        <div className="text-3xl font-bold">Why we are best</div>
      </div>
      <div className="grid grid-flow-col gap-10">
        <div className="md:flex gap-4 lg:*:w-1/2 *:w-full *:*:w-full *:*:object-cover hidden ">
          <div className="lg:flex flex-col gap-4 hidden">
            <img
              className="h-2/3 grayscale hover:grayscale-0 transform hover:scale-105 transition-transform duration-500 ease-in-out"
              src={aboutImg1}
            />
            <img
              className="h-1/3 grayscale hover:grayscale-0 transform hover:scale-105 transition-transform duration-500 ease-in-out"
              src={aboutImg2}
            />
          </div>
          <div className="">
            <img
              className="h-full grayscale hover:grayscale-0 transform hover:scale-105 transition-transform duration-500 ease-in-out"
              src={aboutImg3}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 text-base md:text-lg lg:text-xl">
          <div className="">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing. Bibendum cras fringilla amet suspendisse.
            Duis mattis hac urna fames in ante.
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <img className="object-contain" src={vision} alt="Vision" />
              <div>
                <div className="text-3xl font-bold mb-2">Our Vision</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget
                  at. Id et at dui arcu risus.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <img className="object-contain" src={mission} alt="Mission" />
              <div>
                <div className="text-3xl font-bold mb-2">Our Mission</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur. Quam arcu habitasse
                  fusce pharetra.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="bg-navy-blue text-white text-2xl rounded-xl py-4 px-12 flex gap-4 items-center">
              Read more <img src={rightArrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
