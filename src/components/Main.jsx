import Aboutus from "./Aboutus";
import Blogs from "./Blogs";
import Hero from "./Hero";
import Partners from "./Partners";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Main = () => {
  return (
    <>
      {/* <div className="*:px-6 *:sm:px-10 *:md:px-20"> */}
        <Hero />
        <Partners />
        <Services />
        <Portfolio />
        <Aboutus />
        <Testimonial />
        <Blogs />
      {/* </div> */}
    </>
  );
};

export default Main;
