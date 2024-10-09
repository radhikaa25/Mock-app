import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import HowItWorks from "./_components/HowItWorks";


function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>
      <Footer/>
    </div>
  );
}

export default DashboardLayout;
