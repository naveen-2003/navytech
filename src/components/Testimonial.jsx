import { testimonials } from "../assets/data/data";
import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

const Testimonial = () => {
  return (
    <div id="testimonial" className="px-6 sm:px-10 md:px-20 bg-[#F0F5FF] py-20">
      <div className="mb-20 text-center">
        <div className="opacity-70 text-2xl">Testimonial</div>
        <div className="text-3xl font-bold">What our clients say</div>
      </div>
      <div>
        <div className="flex justify-center sm:px-10 md:px-16">
          <Swiper
            className="pb-10"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-custom-pagination",
            }}
          >
            {testimonials.map((client, index) => {
              return (
                <SwiperSlide key={index}>
                  <Review key={index} client={client} />
                </SwiperSlide>
              );
            })}
            <div className="swiper-custom-pagination" />
          </Swiper>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonial;
