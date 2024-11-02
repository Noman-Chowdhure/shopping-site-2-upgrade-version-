import { useState } from "react";
import { Outlet } from "react-router-dom";
import PreLoading from "../component/shread/PreLoading";
import Navbar from "./navitems/Navbar";
const Layout = () => {
  const [loading, setLoading] = useState(true);
  const preload = () => {
    setLoading(false);
  };

  return (
    <div className=" z-50">
      {loading ? (
        <PreLoading onLoading={preload}></PreLoading>
      ) : (
        <div id="layoutt">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default Layout;
