import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import DrawingPanelLayout from "../layouts/DrawingPanelLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import SearchLayout from "../layouts/SearchLayout";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "/home",
      element: <HomeLayout />,
   },
   {
      path: "/profile",
      element: <ProfileLayout />,
   },
   {
      path: "/drawingpanel",
      element: <DrawingPanelLayout />,
   },
   {
      path: "/search",
      element: <SearchLayout />,
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);