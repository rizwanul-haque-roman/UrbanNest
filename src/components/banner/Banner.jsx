import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-11/12 lg:container mx-auto">
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
          delay: 3000,
        }}
        speed={1800}
        className="mySwiper h-[75vh] my-6 lg:my-12 rounded-3xl font-heading"
      >
        <SwiperSlide>
          <div className="flex lg:justify-end items-end lg:items-center h-[75vh] bg-slide-1 bg-center bg-cover bg-no-repeat p-12">
            <div className="lg:w-1/2 text-center p-4 lg:p-10 rounded-xl backdrop-blur-lg bg-[#ff671b7b]">
              <h1 className="text-2xl lg:text-4xl font-bold text-black">
                Elevate Your Business Presence in State-of-the-Art Office Spaces
                Tailored for Success
              </h1>
              <button className="btn bg-[#ff671b] hover:bg-[#de5009] border-none  text-white lg:text-xl mt-3 lg:mt-6">
                Explore Our estates
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:justify-end items-end lg:items-center h-[75vh] bg-slide-2 bg-center bg-cover bg-no-repeat p-12">
            <div className="lg:w-1/2 text-center p-4 lg:p-10 rounded-xl backdrop-blur-lg bg-[#ff671b7b]">
              <h1 className="text-2xl lg:text-4xl font-bold text-black">
                Discover Vibrant Retail Spaces Designed to Showcase Your
                Products and Captivate Your Customers
              </h1>
              <button className="btn bg-[#ff671b] hover:bg-[#de5009] border-none  text-white text-xl mt-6">
                Explore Our estates
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:justify-end items-end lg:items-center h-[75vh] bg-slide-3 bg-center bg-cover bg-no-repeat p-12">
            <div className="lg:w-1/2 text-center p-4 lg:p-10 rounded-xl backdrop-blur-lg bg-[#ff671b7b]">
              <h1 className="text-2xl lg:text-4xl font-bold text-black">
                Efficient Warehousing Solutions to Streamline Operations and
                Optimize Storage for Your Business
              </h1>
              <button className="btn bg-[#ff671b] hover:bg-[#de5009] border-none  text-white text-xl mt-6">
                Explore Our estates
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:justify-end items-end lg:items-center h-[75vh] bg-slide-4 bg-center bg-cover bg-no-repeat p-12">
            <div className="lg:w-1/2 text-center p-4 lg:p-10 rounded-xl backdrop-blur-lg bg-[#ff671b7b]">
              <h1 className="text-2xl lg:text-4xl font-bold text-black">
                Empower Your Industrial Operations with Cutting-Edge Facilities
                Built for Innovation and Growth
              </h1>
              <button className="btn bg-[#ff671b] hover:bg-[#de5009] border-none  text-white text-xl mt-6">
                Explore Our estates
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:justify-end items-end lg:items-center h-[75vh] bg-slide-5 bg-center bg-cover bg-no-repeat p-12">
            <div className="lg:w-1/2 text-center p-4 lg:p-10 rounded-xl backdrop-blur-lg bg-[#ff671b7b]">
              <h1 className="text-2xl lg:text-4xl font-bold text-black">
                Savor Unforgettable Dining Experiences in Our Diverse and
                Flavorful Restaurant Spaces
              </h1>
              <button className="btn bg-[#ff671b] hover:bg-[#de5009] border-none  text-white text-xl mt-6">
                Explore Our estates
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
