import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Auth/AuthProvider";
import profile from "../../assets/profile-circle.svg";
import { auth } from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Update = () => {
  const { user, setReload } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const [url, setUrl] = useState(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, url);

    setReload(false);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        Swal.fire("Changes saved successfully");
        setReload(true);
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire(error.message);
      });
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>Urban Nest | Update Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-11/12 lg:container mx-auto flex flex-col-reverse lg:flex-row gap-12 justify-center items-center">
        <div className="flex-1">
          <h2 className="font-heading text-center lg:text-left text-5xl font-bold lg:my-8">
            Update your <span className="text-[#ff671b]">information</span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-auto p-6 border border-[#ff671b] rounded-xl mr-10 font-para my-12 lg:mb-24"
          >
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Your name</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={
                    user.displayName ? user.displayName : "Update Your Name"
                  }
                  onChange={handleName}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Your email</span>
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={user.email ? user.email : "Update Your Email"}
                />
              </label>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue={
                  user.photoURL ? user.photoURL : "Update Your PhotoURL"
                }
                onChange={handleUrl}
              />
            </label>
            <button
              type="submit"
              className="btn bg-[#ff671b] text-white w-full border-[#ff671b] text-xl mt-6"
            >
              Save Changes
            </button>
          </form>
        </div>
        <div className="avatar w-1/2 lg:w-1/5 border border-[#ff671b] p-6 rounded-full ">
          <div className="w-full rounded-full mx-auto">
            <img src={user.photoURL ? user.photoURL : profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
