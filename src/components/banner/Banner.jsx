import slide1 from "../../assets/slides/slide1.webp";
import slide2 from "../../assets/slides/slide2.webp";
import slide3 from "../../assets/slides/slide3.webp";
import slide4 from "../../assets/slides/slide4.webp";
import slide5 from "../../assets/slides/slide5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        speed={2000}
        className="mySwiper h-[75vh] my-12 rounded-3xl font-heading"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#ff671b25] p-12">
              <h1 className="text-5xl font-bold text-[#ff671b]">
                Find Your Dream <br /> Home Today!
              </h1>
            </div>
            <img src={slide1} alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#ff671b25] p-12">
              <h1 className="text-5xl font-bold text-[#ff671b]">
                Unlock the Door <br /> to Your Future Home
              </h1>
            </div>
            <img src={slide2} alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#ff671b25] p-12">
              <h1 className="text-5xl font-bold text-[#ff671b]">
                Where Every House <br /> Becomes a Home
              </h1>
            </div>
            <img src={slide3} alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#ff671b25] p-12">
              <h1 className="text-5xl font-bold text-[#ff671b]">
                Find Your Sanctuary <br /> in the Heart <br />
                of the City
              </h1>
            </div>
            <img src={slide4} alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#ff671b25] p-12">
              <h1 className="text-5xl font-bold text-[#ff671b]">
                Building Dreams,
                <br /> One Home at a Time
              </h1>
            </div>
            <img src={slide5} alt="" className="w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
