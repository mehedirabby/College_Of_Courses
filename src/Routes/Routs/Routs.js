import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course/Course";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/course/:id",
        element: <Course></Course>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <h2>404 Error</h2>,
  },
]);
