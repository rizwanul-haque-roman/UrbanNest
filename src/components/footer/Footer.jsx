import brand from "/brandkit.png";
const Footer = () => {
  return (
    <div className="bg-base-200">
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
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
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
    </div>
  );
};

export default Footer;
