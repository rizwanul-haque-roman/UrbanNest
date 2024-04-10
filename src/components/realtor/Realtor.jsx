import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

const Realtor = () => {
  return (
    <div>
      <div className="text-center my-12">
        <h3 className="font-heading text-5xl font-bold">
          Get Services from{" "}
          <span className="text-[#ff671b]">Experienced Realtor</span>
        </h3>
        <p className="font-para text-xl font-medium">
          For a smooth and successful real estate transaction, consider
          partnering with an experienced realtor who can guide you through the
          process.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <img src={icon1} alt="" />
          <h4>Buy A Property</h4>
          <p>
            Negotiating the complexities of buying a house can be smoother
            sailing with the guidance of an experienced realtor.
          </p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h4>Sell A Property</h4>
          <p>
            Listing your house can be complex, so consider partnering with an
            experienced realtor to ensure a smooth and successful sale.
          </p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h4>Rent A Property</h4>
          <p>
            Negotiating the rental market can be tricky, so consider partnering
            with an experienced realtor to find your dream house with
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Realtor;
