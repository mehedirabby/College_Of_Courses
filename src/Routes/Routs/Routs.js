import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course/Course";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import SignIn from "../../Pages/Shared/SignIn/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://college-server.vercel.app/course"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://college-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <Course></Course>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://college-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <h2>404 Error</h2>,
  },
]);
