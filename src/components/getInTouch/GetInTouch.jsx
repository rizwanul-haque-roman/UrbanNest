import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const GetInTouch = () => {
  const position = [23.75654, 90.3748];
  return (
    <div>
      <div>
        <h1 className="text-5xl font-heading font-bold text-center">
          Have any Inquary?
          <br />
          <span className="text-[#ff671b]">Get in Touch</span> with us. You Will
          Hear From Us Soon
        </h1>
      </div>
      <div className="container mx-auto my-24 relative">
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={false}
          className="z-0 rounded-2xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              27 Shaptak Square <br /> 8th floor
            </Popup>
          </Marker>
        </MapContainer>
        <div className="w-1/3 border rounded-2xl p-6 bg-white absolute top-16 right-12 z-10">
          <h3 className="text-center font-heading text-3xl font-semibold py-4">
            Get In <span className="text-[#ff671b]">Touch</span>
          </h3>
          <form className="grid gap-6 font-para">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" placeholder="Your Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" placeholder="Email" />
            </label>
            <label className="form-control">
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Your message"
              ></textarea>
            </label>
            <button className="btn bg-[#ff671b] hover:bg-[#ff671b] border-0 text-2xl text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
