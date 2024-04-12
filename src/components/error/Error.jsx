import { Link } from "react-router-dom";
import matalRobot from "../../assets/matal-robot.png";
import Navbar from "../navbar/Navbar";
import { TbSquareRoundedArrowLeft } from "react-icons/tb";
import Footer from "../footer/Footer";

const Error = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="flex justify-between items-center container mx-auto my-24">
        <div>
          <h3 className="text-7xl text-center font-heading font-bold">
            Page not <span className="text-[#ff671b]">found</span>
          </h3>
          <Link to={"/"}>
            <div className="text-3xl font-para font-medium text-center flex justify-center items-center">
              <button className="text-6xl p-6 text-[#ff671b]">
                <TbSquareRoundedArrowLeft />
              </button>
              Go back to home page
            </div>
          </Link>
        </div>
        <div className="">
          <img src={matalRobot} alt="" className="w-3/4 mx-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
