import Banner from "../banner/Banner";
import Estates from "../estates/Estates";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="font-para">
        <Estates />
      </div>
    </div>
  );
};

export default Home;
