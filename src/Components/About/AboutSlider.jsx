import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Testimonials } from "../../Utils/Constant";

const AboutSlider = () => {
  return (
    <div className="flex flex-col max-w-6xl w-full p-6 gap-4 mb-8 mt-5">
      <h1 className="text-orange-500 text-center font-serif lg:text-[50px] md:text-[45px] text-[45px] font-bold leading-tight my-4">
        Testimonials
      </h1>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full flex justify-center"
      >
        {Testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex justify-center flex-col bg-slate-100 p-4 rounded-xl shadow-xl md:items-start items-center hover:scale-105 transition"
            >
              <img
                className="h-[50px] w-[50px] rounded-full shadow-sm border-2"
                src={testimonial?.image}
                alt={testimonial?.name}
              />
              <h1 className="font-semibold text-gray-900 text-[22px] md:text-left text-center">
                {testimonial?.name}
              </h1>
              <p className="font-normal text-gray-800 text-[14px] md:text-left text-center">
                {testimonial?.feedback}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AboutSlider;
