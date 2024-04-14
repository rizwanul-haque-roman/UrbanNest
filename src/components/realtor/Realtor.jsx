import Aos from "aos";
import "aos/dist/aos.css";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import { MdArrowOutward } from "react-icons/md";
import { useEffect } from "react";

const Realtor = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="w-11/12 lg:container mx-auto"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="text-center mb-12">
        <h3 className="font-heading text-4xl lg:text-5xl font-bold my-4">
          Get Services from{" "}
          <span className="text-[#ff671b]">Experienced Realtor</span>
        </h3>
        <p className="font-para text-xl font-medium lg:w-2/3 mx-auto">
          For a smooth and successful real estate transaction, consider
          partnering with an experienced realtor who can guide you through the
          process.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between my-6">
        <div
          className="text-center lg:w-1/4 hover:border rounded-xl hover:shadow-lg p-6"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src={icon1} alt="" className="mx-auto" />
          <h4 className="font-heading text-2xl font-semibold">
            <span className="text-[#ff671b]">Buy</span> A Property
          </h4>
          <p className="font-para text-lg">
            Negotiating the complexities of buying a house can be smoother and
            easier sailing with the guidance of an experienced realtor.
          </p>
          <div className="text-xl font-para flex gap-2 justify-center items-center btn btn-outline text-[#ff671b] my-3">
            <MdArrowOutward />
            <p>Buy Property</p>
          </div>
        </div>
        <div
          className="text-center lg:w-1/4 hover:border rounded-xl hover:shadow-lg p-6"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src={icon2} alt="" className="mx-auto" />
          <h4 className="font-heading text-2xl font-semibold">
            <span className="text-[#ff671b]">Find</span> A Property
          </h4>
          <p className="font-para text-lg">
            Listing your house can be complex, so consider partnering with an
            experienced realtor to ensure a smooth and successful sale.
          </p>
          <div className="text-xl font-para flex gap-2 justify-center items-center btn btn-outline text-[#ff671b] my-3">
            <MdArrowOutward />
            <p>Place an ad</p>
          </div>
        </div>
        <div
          className="text-center md:col-span-2 lg:w-1/4 hover:border rounded-xl hover:shadow-lg p-6"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src={icon3} alt="" className="mx-auto" />
          <h4 className="font-heading text-2xl font-semibold">
            <span className="text-[#ff671b]">Rent</span> A Property
          </h4>
          <p className="font-para text-lg">
            Negotiating the rental market can be tricky, so consider partnering
            with an experienced realtor to find your dream house with
            confidence.
          </p>
          <div className="text-xl font-para flex gap-2 justify-center items-center btn btn-outline text-[#ff671b] my-3">
            <MdArrowOutward />
            <p>Find a Rental</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtor;
