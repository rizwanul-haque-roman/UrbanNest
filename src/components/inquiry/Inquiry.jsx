import { useEffect } from "react";
import faq from "../../assets/faq.jpg";
import inquiry from "../../assets/inquiry.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Inquiry = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container mx-auto mb-12">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>Urban Nest | Inquiry</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex gap-6 items-center">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h2 className="font-heading text-5xl font-bold my-8">
            Real Estate <span className="text-[#ff671b]">inquiry</span> form
          </h2>
          <p className="font-para text-xl ">
            Let us guide you to find you the right price for the right property.
            Get help by submiting some information and we will reach out to you
            soon!
          </p>
          <form
            action=""
            className="p-6 border border-[#ff671b] rounded-xl my-6 mr-10 font-para"
          >
            <div className="flex justify-between">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Type of property You&apos;re looking for
                </span>
              </div>
              <input
                type="text"
                placeholder="i.e restaurant / warehouse / industry"
                className="input input-bordered w-full"
              />
            </label>
            <div className="flex justify-between">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Maximum Price</span>
                </div>
                <input
                  type="number"
                  placeholder="$"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Minimum size</span>
                </div>
                <input
                  type="number"
                  placeholder="sq-ft"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your email</span>
              </div>
              <input
                type="email"
                placeholder="example@mail.com"
                className="input input-bordered w-full"
              />
            </label>
            <button
              type="submit"
              className="btn bg-[#ff671b] text-white w-full border-[#ff671b] text-xl mt-6"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="rounded-xl" data-aos="fade-up" data-aos-duration="1500">
          <img src={inquiry} alt="" className="rounded-xl" />
        </div>
      </div>
      <h1
        className="font-heading text-center text-5xl font-bold my-8"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Let&apos;s clear some <span className="text-[#ff671b]">doubts</span>{" "}
        before you <br /> Buy, Sell or Rent
      </h1>
      <div className="flex">
        <div className="w-1/2" data-aos="fade-right" data-aos-duration="1500">
          <img src={faq} alt="" />
        </div>
        <div
          className="join join-vertical w-full "
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="collapse collapse-arrow join-item border border-[#ff671b]">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <h2 className="collapse-title font-heading text-3xl font-medium ">
              1. What are the different types of commercial leases?
            </h2>
            <div className="collapse-content font-para">
              <p className="pl-6">
                There are several types of commercial leases, each with its own
                advantages and disadvantages. Here are some common ones:
              </p>
              <ul className=" list-disc pl-12">
                <li>
                  Gross Lease: Landlord covers property taxes, insurance, and
                  common area maintenance (CAM) costs. Tenant pays a fixed
                  monthly rent.
                </li>
                <li>
                  Modified Gross Lease: Tenant pays a base rent plus a portion
                  of the CAM costs.
                </li>
                <li>
                  Net Lease: Tenant pays rent plus a portion of property taxes
                  and insurance, or all operating expenses (NNN Lease). This
                  gives tenants more control over costs.
                </li>
                <li>
                  Double Net Lease (NN): Tenant pays rent plus property taxes
                  and insurance.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ff671b]">
            <input type="radio" name="my-accordion-4" />
            <h2 className="collapse-title font-heading text-3xl font-medium">
              2. When is the best time to sell?
            </h2>
            <div className="collapse-content font-para">
              <p className="pl-6">
                It depends on your local market. Generally, spring is considered
                a good time due to increased buyer activity. However, a good
                agent can help you determine the optimal time to sell based on
                current market conditions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ff671b]">
            <input type="radio" name="my-accordion-4" />
            <h2 className="collapse-title font-heading text-3xl font-medium">
              3. What factors should I consider when choosing a commercial
              property location?
            </h2>
            <div className="collapse-content font-para">
              <p className="pl-6">
                Location is crucial for success in commercial real estate. Here
                are some key factors:
              </p>
              <ul className=" list-disc pl-12">
                <li>
                  Target Market: Is the location easily accessible to your
                  target customer base?
                </li>
                <li>
                  Visibility: Will your business be visible from a major road or
                  highway?
                </li>
                <li>
                  Traffic Flow: Is there high foot traffic or vehicle traffic in
                  the area?
                </li>
                <li>
                  Accessibility: Is there easy access to public transportation
                  or parking?
                </li>
                <li>
                  Amenities: Are there restaurants, banks, or other amenities
                  nearby that could benefit your business?
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ff671b]">
            <input type="radio" name="my-accordion-4" />
            <h2 className="collapse-title font-heading text-3xl font-medium">
              4. How can a commercial real estate agent help me find the right
              property?
            </h2>
            <div className="collapse-content font-para">
              <p className="pl-6">
                An experienced commercial real estate agent can save you time
                and money by:
              </p>
              <ul className=" list-disc pl-12">
                <li>
                  Understanding your specific needs: They will help you identify
                  the right type and size of property based on your business
                  goals.
                </li>
                <li>
                  Knowing the market: They can provide insights into current
                  market conditions and available properties.
                </li>
                <li>
                  Negotiating the lease: They can advocate on your behalf to
                  secure the best possible terms.
                </li>
                <li>
                  Handling paperwork: They can help you navigate the
                  complexities of commercial leases.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
