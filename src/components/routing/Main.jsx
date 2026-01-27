import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "../../pages/Home";
import About from "../../pages/About"
import Features from "../../pages/Features"
import Pricing from "../../pages/Pricing"
import Contact from "../../pages/Contact"

const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<Layout />}>
      //   <Route index element={<Home />} />
      // </Route>

      <Route path="/" element={<Layout />}>
        <Route path="/#home" element={<Home />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#features" element={<Features />} />
        <Route path="/#pricing" element={<Pricing />} />
        <Route path="/#contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Main;


