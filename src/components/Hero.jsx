import heroImg from "../assets/hero-img.jpeg";
import phone from "../assets/phone.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 text-primary flex bg-secondary py-16  justify-around">
      <motion.div
        viewport={{ once: true, amount: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        initial={{ opacity: 0, x: -30 }}
        className="w-full lg:w-3/6 flex flex-col gap-8 justify-center"
      >
        <div className="text-wrap">
          <div className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            #1 Worldwide Digital Solution Agency
          </div>
          <div className="text-sm sm:text-base md:text-lg">
            Revolutionize your global digital strategy with the #1 Worldwide
            Digital Solution Agency, pioneering innovative solutions for
            unparalleled success.
          </div>
        </div>
        <div className="flex justify-center">
          <a href="tel:+01 23456789">
            <button className="flex gap-3 px-16 py-5 text-xl items-center rounded-2xl bg-navy-blue">
              <img className="h-5" src={phone} alt="Book a call" />
              <span>Book a call</span>
            </button>
          </a>
        </div>
        <div className="*:bg-gradient-border *:rounded-2xl *:px-[2px]  *:py-[1px] *:*:bg-[#1A202D] *:*:px-8 *:*:py-3 *:*:rounded-2xl flex  gap-y-5 justify-evenly flex-wrap  text-center">
          <div>
            <div>
              <div className="text-3xl font-semibold">75K+</div>
              <span className="opacity-65">Project Completed</span>
            </div>
          </div>
          <div>
            <div>
              <div className="text-3xl font-semibold">20+</div>
              <span className="opacity-65">Years of Experience</span>
            </div>
          </div>
          <div>
            <div>
              <div className="text-3xl font-semibold">400+</div>
              <span className="opacity-65">Clients Worldwide</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        initial={{ opacity: 0, x: 30 }}
        className="w-2/6 hidden lg:block"
      >
        <img
          className=" h-[500px] object-cover rounded-tl-[30%] rounded-br-[30%]"
          src={heroImg}
          alt="A man working in his laptop"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
