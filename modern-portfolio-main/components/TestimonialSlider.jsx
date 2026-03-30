import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png?v=1",
    name: "Rajesh Kumar",
    position: "Real Estate Developer",
    message:
      "Zahid transformed our lead generation strategy completely. Within 3 months, we were getting 150+ quality leads monthly at just ₹2.3 per lead. His expertise is unmatched!",
  },
  {
    image: "/t-avt-2.png?v=1",
    name: "Priya Sharma",
    position: "Property Management Head",
    message:
      "Professional, data-driven, and results-oriented. Zahid managed our ₹1.5L+ ad budget with precision and delivered exceptional ROI. I highly recommend working with him.",
  },
  {
    image: "/t-avt-3.png?v=1",
    name: "Arun Singh",
    position: "Real Estate Entrepreneur",
    message:
      "Best marketing decision we made. Zahid's campaigns are well-researched, optimized, and deliver consistent results. His real estate lead generation expertise is exceptional!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-x-8 h-full px-4 md:px-8 lg:px-12">
            {/* avatar, name, position */}
            <div className="w-full md:w-auto md:max-w-[300px] flex flex-col md:justify-center items-center md:items-start relative mx-auto md:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    priority={false}
                    unoptimized
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] md:before:bg-white/20 md:before:absolute md:before:left-0 md:before:h-[150px] lg:before:h-[200px] relative md:pl-0 lg:pl-12 xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="text-sm sm:text-base md:text-lg xl:text-xl text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
