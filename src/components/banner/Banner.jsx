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
        className="mySwiper h-[75vh] my-12 rounded-3xl font-para"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#27dec016] p-12">
              <h1 className="text-5xl font-bold text-[#fbde77b3]">
                Find Your Dream <br /> Home Today!
              </h1>
            </div>
            <img src={slide1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#27dec016] p-12">
              <h1 className="text-5xl font-bold text-[#0b1c02ba]">
                Unlock the Door <br /> to Your Future Home
              </h1>
            </div>
            <img src={slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#27dec016] p-12">
              <h1 className="text-5xl font-bold text-[#27321ed8]">
                Where Every House <br /> Becomes a Home
              </h1>
            </div>
            <img src={slide3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#27dec016] p-12">
              <h1 className="text-5xl font-bold text-[#28310A]">
                Find Your Sanctuary <br /> in the Heart <br />
                of the City
              </h1>
            </div>
            <img src={slide4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center items-center absolute top-0 right-0 h-[75vh] backdrop-blur-sm bg-[#27dec016] p-12">
              <h1 className="text-5xl font-bold text-[#28310A]">
                Building Dreams,
                <br /> One Home at a Time
              </h1>
            </div>
            <img src={slide5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
