import { useEffect } from "react";
import Banner from "../banner/Banner";
import Estates from "../estates/Estates";
import Realtor from "../realtor/Realtor";
import Stat from "../stat/Stat";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>Urban Nest | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner />
      <Estates className="font-para" />
      <Realtor />
      <Stat />
    </div>
  );
};

export default Home;
