import PropTypes from "prop-types";
import { MdArrowOutward } from "react-icons/md";
const EstatesCard = ({ estate }) => {
  const { img } = estate;
  console.log(img);
  return (
    <div className="relative">
      <img src={img} alt="" className="rounded-lg" />
      <div className="backdrop-blur-sm bg-[#27dec016] rounded-b-lg absolute bottom-0 w-full p-4">
        <div className="flex gap-6">
          <p className="btn btn-sm bg-[#39ddcd83] border-0">{estate.price}</p>
          <p className="btn btn-sm bg-[#39ddcd83] border-0">{estate.status}</p>
        </div>
        <div>
          <h3 className="text-2xl font-medium my-3 text-white">
            {estate.title}
          </h3>
        </div>
        <div className="text-white flex gap-2 justify-center items-center btn btn-outline hover:bg-[#39ddcd83]">
          <MdArrowOutward />
          <p>See Details</p>
        </div>
      </div>
    </div>
  );
};

export default EstatesCard;
EstatesCard.propTypes = {
  estate: PropTypes.object,
};
