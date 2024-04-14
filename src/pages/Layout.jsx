import { Outlet } from "react-router-dom";

import Header from "../UI/Header";
import Footer from "../components/Footer";
function Layout() {
  return (
    <div className={`h-lvh bg-cyan-600`}>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
