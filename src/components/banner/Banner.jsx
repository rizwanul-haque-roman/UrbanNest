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
          delay: 2500,
        }}
        speed={1200}
        className="mySwiper h-[75vh] my-12 rounded-3xl font-para"
      >
        <SwiperSlide>
          <div className="relative">
            <h1 className="text-5xl font-bold text-[#FBDE77] absolute top-10 right-10">
              Find Your Dream <br /> Home Today!
            </h1>
            <img src={slide1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="text-5xl font-bold text-[#417F08] absolute top-10 left-10">
              Unlock the Door <br /> to Your Future Home
            </h1>
            <img src={slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="text-5xl font-bold text-[#27321E] absolute top-10 right-10">
              Where Every House <br /> Becomes a Home
            </h1>
            <img src={slide3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="text-5xl font-bold text-[#28310A] absolute top-10 left-10">
              Find Your Sanctuary <br /> in the Heart <br />
              of the City
            </h1>
            <img src={slide4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="text-5xl font-bold text-[#28310A] absolute top-10 left-10">
              Building Dreams,
              <br /> One Home at a Time
            </h1>
            <img src={slide5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
