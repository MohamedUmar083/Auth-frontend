import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container home">
        <section className="homeSection" id="homeSection">
          <div className="container">
            <div className="row align-items-center py-4 g-5">
              <div className="col-12 col-md-6">
                <div className="text-center text-md-start">
                  <h1 className="display-md-2 display-4 fw-bold textdark pb-2">
                    Welcome to <br />
                    <span className="nlm">New Lucky Medicals</span>
                  </h1>
                  <p className="lead">
                    Explore the Variety of Medicines from different Vendors
                    around the District !..
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    src="https://gooloc.com/wp-content/uploads/2016/09/32lz1rnqqha4m45.jpg"
                    alt="newluckymedicals"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
