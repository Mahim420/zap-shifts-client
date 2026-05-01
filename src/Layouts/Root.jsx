import { Outlet } from "react-router";
import Navbar from "../SharedLayout/Navbar";
import Footer from "../SharedLayout/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <section className="mt-24">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Root;
