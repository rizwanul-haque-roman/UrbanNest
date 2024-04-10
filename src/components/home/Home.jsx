import Banner from "../banner/Banner";
import Estates from "../estates/Estates";
import Realtor from "../realtor/Realtor";
import Stat from "../stat/Stat";

const Home = () => {
  return (
    <div>
      <Banner />
      <Estates className="font-para" />
      <Realtor />
      <Stat />
    </div>
  );
};

export default Home;
