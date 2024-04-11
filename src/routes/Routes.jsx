import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Contact from "../components/contact/Contact";
import Details from "../components/details/Details";
import Private from "../components/private/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details />
          </Private>
        ),
        loader: () => fetch("/estate.json"),
      },
    ],
  },
]);

export default router;
