import PropTypes from "prop-types";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
const EstatesCard = ({ estate }) => {
  const { img } = estate;
  return (
    <div className="font-para">
      <div className="card w-auto glass">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <div className="flex gap-6">
            <p className="btn btn-sm bg-[#ff671b] border-0 text-white hover:bg-[#ff671bcb]">
              {estate.price}
            </p>
            <p className="btn btn-sm bg-[#ff671b] border-0 text-white hover:bg-[#ff671bcb]">
              {estate.status}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium my-3 text-black">
              {estate.title}
            </h3>
            <p>{estate.location}</p>
          </div>
          <Link to={`/details/${estate.id}`}>
            <div className="text-white text-xl font-semibold border-none flex gap-2 justify-center items-center btn bg-[#ff671b] hover:bg-[#ff671bcb]">
              <MdArrowOutward />
              <p>View Property</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstatesCard;
EstatesCard.propTypes = {
  estate: PropTypes.object,
};
