import GetInTouch from "../getInTouch/GetInTouch";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>Urban Nest | Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <GetInTouch />
    </div>
  );
};

export default Contact;
