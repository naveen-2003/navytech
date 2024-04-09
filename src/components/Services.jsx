import { ourServices } from "../assets/data/data";
import Service from "./Service.jsx";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="px-8 sm:px-20 text-center">
      <div className="py-20">
        <div className="opacity-70 text-2xl">Our services</div>
        <div className="text-3xl font-bold">Growth based services</div>
      </div>
      <div className="pb-20 flex flex-wrap *:py-5 *:flex *:flex-col *:justify-between justify-center">
        {ourServices.map((service, index) => {
          return (
            <motion.div
              key={index}
              viewport={{ once: true, amount: 0.6 }}
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col justify-between gap-6 px-6 max-w-72 [&:nth-child(1)]:bg-[#F0F5FF] [&:nth-child(3)]:bg-[#F0F5FF] min-[736px]:[&:nth-child(3)]:bg-white lg:[&:nth-child(3)]:bg-[#F0F5FF]  min-[736px]:[&:nth-child(4)]:bg-[#F0F5FF] min-[1312px]:[&:nth-child(4)]:bg-white  `}
            >
              <Service service={service} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
