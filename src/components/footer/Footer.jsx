import brand from "/brandkit.png";
import footer from "../../assets/footer.jpg";
const Footer = () => {
  return (
    <div className="bg-base-200 font-para">
      <footer className="container mx-auto grid grid-cols-4 py-10 bg-base-200 text-base-content">
        <aside className="">
          <img className="w-1/2 pb-6" src={brand} alt="" />
          <p>
            Urban Nest Ltd.
            <br />
            Providing reliable services since 1992
          </p>
        </aside>
        <nav className="grid">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Mortgage Lending</a>
          <a className="link link-hover">Home Inspection</a>
          <a className="link link-hover">Real Estate Development</a>
          <a className="link link-hover">Buying & Selling Estates</a>
        </nav>
        <nav className="grid">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="grid">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <img src={footer} alt="" className="w-full" />
    </div>
  );
};

export default Footer;
