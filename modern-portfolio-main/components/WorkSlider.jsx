import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Meta Ads Screenshot",
          path: "/thumb1.jpeg?v=1",
          link: "http://example.com",
        },
        {
          title: "Lead Generation Data",
          path: "/thumb2.jpeg?v=1",
          link: "http://example.com",
        },
        {
          title: "Campaign Results",
          path: "/thumb3.jpeg?v=1",
          link: "http://example.com",
        },
        {
          title: "Performance Metrics",
          path: "/thumb4.jpeg?v=1",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "Performance Metrics",
          path: "/thumb4.jpeg?v=1",
          link: "http://example.com",
        },
        {
          title: "Meta Ads Screenshot",
          path: "/thumb1.jpeg?v=1",
          link: "http://example.com",
        },
        {
          title: "Lead Generation Data",
          path: "/thumb2.jpeg?v=1",
          link: "http://example.com",
        },
        {
          title: "Campaign Results",
          path: "/thumb3.jpeg?v=1",
          link: "http://example.com",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    priority={false}
                    unoptimized
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-8 sm:group-hover:-translate-y-10 lg:group-hover:-translate-y-12 xl:group-hover:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[11px] sm:text-[12px] xl:text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
