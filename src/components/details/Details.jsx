import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const [estate, setEstate] = useState({});
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    const estate = estates.find((item) => item.id == id);

    setEstate(estate);
    setFacilities(estate.facilities);
  }, [id, estates]);
  console.log(estates);
  console.log("facilities: ", facilities);
  return (
    <div className="font-para">
      <h2 className="text-black text-6xl font-bold pb-3 text-center font-heading">
        <span className="text-[#ff671b]">{estate.title}</span> {estate.segment}{" "}
        area <br />
        for <span className="text-[#ff671b]">{estate.status}</span>
      </h2>
      <div className="grid lg:grid-cols-2 container mx-auto w-11/12 lg:w-full gap-6 space-y-6 my-10">
        <div className="flex justify-center items-center rounded-2xl">
          <img src={estate.img} alt="" className="w-1/2 rounded-2xl " />
        </div>
        <div>
          <p className="  font-medium text-[#131313CC] text-xl">
            Price starting from{" "}
            <span className="text-[#ff671b] text-3xl font-bold">
              {estate.price}
            </span>{" "}
            having an area of{" "}
            <span className="text-[#ff671b] text-3xl font-bold">
              {estate.area}
            </span>
          </p>
          <p className=" font-medium text-[#131313CC] text-xl"></p>
          <p className="my-6 leading-[26px] text-xl">
            <span className="font-bold">Details: </span>
            {estate.description}
          </p>
          <div className="flex gap-6 my-6 items-center text-xl">
            <p>
              <span className="font-bold">Location:</span> {estate.location}
            </p>
          </div>
          <div className="my-6">
            <h3 className="text-xl font-bold">Facilities:</h3>
            {facilities.map((item, idx) => (
              <li className="text-xl" key={idx}>
                {item}
              </li>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button className="btn btn-outline px-7 text-lg text-[#ff671b]">
              Book Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;