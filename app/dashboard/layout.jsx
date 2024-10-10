import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      
      <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>
      <Footer/>
    </div>
  );
}

export default DashboardLayout;
