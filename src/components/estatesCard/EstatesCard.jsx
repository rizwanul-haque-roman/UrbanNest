import PropTypes from "prop-types";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
const EstatesCard = ({ estate }) => {
  const { img } = estate;
  console.log(img);
  return (
    <div className="relative">
      <img src={img} alt="" className="rounded-lg" />
      <div className="backdrop-blur-sm bg-[#ff671b25] rounded-b-lg absolute bottom-0 w-full p-4">
        <div className="flex gap-6">
          <p className="btn btn-sm bg-[#ff671b] border-0 text-white hover:bg-[#ff671bcb]">
            {estate.price}
          </p>
          <p className="btn btn-sm bg-[#ff671b] border-0 text-white hover:bg-[#ff671bcb]">
            {estate.status}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium my-3 text-white">
            {estate.title}
          </h3>
        </div>
        <Link to={`/details/${estate.id}`}>
          <div className="text-white text-xl font-semibold flex gap-2 justify-center items-center btn bg-[#ff671b] hover:bg-[#ff671bcb]">
            <MdArrowOutward />
            <p>View Property</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EstatesCard;
EstatesCard.propTypes = {
  estate: PropTypes.object,
};
