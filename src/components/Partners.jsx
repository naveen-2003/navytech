import google from "../assets/google-logo.png";
import canva from "../assets/canva-logo.png";
import amazon from "../assets/amazon-logo.png";
import sketch from "../assets/sketch-logo.png";

const Partners = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 bg-navy-blue items-center text-center xl:text-left xl:flex justify-between py-4  text-primary">
      <div>
        <div className="opacity-65">Trusted by</div>
        <div className="text-2xl font-semibold">Top Companies</div>
      </div>
      <div className="flex flex-wrap *:flex *:items-center *:h-20 *:w-32 *:px-3 gap-x-16 justify-center ">
        <div className="">
          <img src={google} alt="Google" />
        </div>
        <div className="">
          <img src={canva} alt="Canva" />
        </div>
        <div className="">
          <img src={amazon} alt="Amazon" />
        </div>
        <div className="">
          <img src={sketch} alt="Sketch" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
