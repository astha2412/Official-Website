import React from "react";
import Navsm from "../Navbar/Navsm";
import AlumniData from "../../data/alumniData";
import Alumnus from "./Alumnus";
import Footer from "../utils/Footer";
import "../../style/alumni.css";

const Alumni = () => {
  return (
    <>
      <Navsm />

      <div className="container-fluid">
        <div className="about ms-3 ms-md-5 ms-lg-5" id="alumn_title">
          Prominent Alumni
        </div>
        <div className="borderpromalumni ms-3 ms-md-5 ms-lg-5"></div>

        <div className="row-container d-flex flex-row text-center mx-auto">
          <div className="row text-center mx-auto">
            {AlumniData.map((element) => {
              return <Alumnus key={element.id} data={element} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Alumni;
