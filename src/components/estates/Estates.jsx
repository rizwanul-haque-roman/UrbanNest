import { useEffect, useState } from "react";
import EstatesCard from "../estatesCard/EstatesCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  return (
    <div className="w-11/12 lg:container mx-auto mt-6 lg:mt-24">
      <h1
        className="text-4xl lg:text-5xl font-heading font-bold text-center my-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Explore Our Diverse{" "}
        <span className="text-[#ff671b]">Commercial Real Estate</span> Offerings
      </h1>
      <div className="col-span-1" data-aos="fade-up" data-aos-duration="1500">
        <p className="text-xl font-medium font-para my-6">
          Explore a diverse array of office buildings, retail spaces,
          warehouses, industrial facilities, restaurants, and entertainment
          venues. Each estate is meticulously selected to offer prime locations
          and modern amenities. Find your perfect business space today.
        </p>
      </div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {estates.map((estate) => (
          <EstatesCard key={estate.id} estate={estate} />
        ))}
      </div>
    </div>
  );
};

export default Estates;
