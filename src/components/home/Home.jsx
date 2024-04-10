import Banner from "../banner/Banner";
import Estates from "../estates/Estates";
import Realtor from "../realtor/Realtor";

const Home = () => {
  return (
    <div>
      <Banner />
      <Estates className="font-para" />
      <Realtor />
    </div>
  );
};

export default Home;
