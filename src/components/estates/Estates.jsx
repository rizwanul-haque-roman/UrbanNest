import { useEffect, useState } from "react";
import EstatesCard from "../estatesCard/EstatesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  //   console.log(estates);
  return (
    <div>
      <h1 className="text-4xl font-bold my-3 text-center">
        Explore Our Diverse Commercial Real Estate Offerings
      </h1>
      <div className="grid grid-cols-4 justify-center items-center gap-6">
        <div className="col-span-1">
          <p className="text-lg">
            Explore a diverse array of office buildings, retail spaces,
            warehouses, industrial facilities, restaurants, and entertainment
            venues. Each estate is meticulously selected to offer prime
            locations and modern amenities. Find your perfect business space
            today.
          </p>
        </div>
        <div className="col-span-3">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            speed={2000}
            className="mySwiper h-[75vh] my-12 rounded-3xl font-para"
          >
            {estates.map((estate, idx) => (
              <SwiperSlide key={idx}>
                <EstatesCard key={estate.id} estate={estate} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Estates;
