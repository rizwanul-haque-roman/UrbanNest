import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

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
  return (
    <div className="w-11/12 lg:container mx-auto font-para">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>Urban Nest | Property Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-black text-3xl lg:text-6xl font-bold pb-3 text-center font-heading">
        <span className="text-[#ff671b]">{estate.title}</span> of{" "}
        {estate.segment} segment <br />
        for <span className="text-[#ff671b]">{estate.status}</span>
      </h2>
      <div className="grid lg:grid-cols-2 justify-center items-center gap-6 space-y-6 my-10">
        <div className="flex justify-center items-center rounded-2xl">
          <img src={estate.img} alt="" className="rounded-2xl " />
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
