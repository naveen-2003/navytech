import rightArrow from "../assets/right-arrow.svg";
import { portfolio } from "../assets/data/data";
import { motion,useAnimation } from "framer-motion";

const Portfolio = () => {
  
  const controls = useAnimation();
  return (
    <div
      id="portfolio"
      className="px-6 sm:px-10 md:px-20  bg-secondary flex flex-col items-center text-white  text-center gap-12 py-12"
    >
      <div>
        <div className="opacity-70 text-xl">Portfolio</div>
        <div className="text-3xl font-bold">Our previous works</div>
      </div>
      <div className="grid grid-flow-row gap-8 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 *:h-72 *:*:w-full *:*:h-full *:*:object-cover *:*:object-center">
        {portfolio.map(({ image }, index) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                rotate: -5,
                transformOrigin: "bottom" && "left",
              }}

            animate={controls}
              viewport={{ once: true, amount: 0.6 }}
              whileInView={"visible"}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={{
                hidden: {
                  opacity: 0,
                  rotate: -5,
                  transformOrigin: "bottom" && "left",
                },
                visible: { opacity: 1, rotate: 0 },
              }}
              key={index}
            >
              <img className="grayscale hover:grayscale-0 hover:scale-105 transform duration-[0.4s] hover:shadow-[0px_0px_8px] hover:rounded-xl shadow-white ease-in-out" src={image} />
            </motion.div>
          );
        })}
      </div>
      <div>
        <button className="bg-navy-blue text-2xl rounded-xl py-4 px-12 flex gap-4 items-center">
          View more <img src={rightArrow} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
