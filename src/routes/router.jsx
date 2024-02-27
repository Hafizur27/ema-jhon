import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home";
import Order from "../components/Order/Order";
import ReviewOrder from "../components/ReviewOrder/ReviewOrder";
import SignUp from "../components/Shared/SignUp/SignUp";
import LogIn from "../components/Shared/LogIn/LogIn";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/revieworder",
        element: (
          <PrivateRoute>
            <ReviewOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },
]);
