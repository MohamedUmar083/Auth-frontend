import React from "react";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="container">
        <section className="ourproduct py-5" id="ourproduct">
          <div className="container product">
            <h2 className="fs-1 fw-bold text-center pt-5 pb-5">Our Products</h2>
            <div className="container containerProduct">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4  g-4">
                <div className="col">
                  <div className="card h-100 px-3 py-4 shadow ">
                    <img
                      src="https://w0.peakpx.com/wallpaper/66/448/HD-wallpaper-pills-drugs-pharma-pharmacy-color-medicine-capsule-rx.jpg"
                      className="card-img-top"
                      alt="Tablets"
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Tablets</h5>
                      <p className="card-text lead ">
                        Neuroscientist uncovers sinister plot in near-future
                        tech-driven dystopia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 px-3 py-4 shadow">
                    <img
                      src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/49f8eea42c24355488d76dd554807d9d.png"
                      className="card-img-top"
                      alt="Tonics"
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Tonics</h5>
                      <p className="card-text lead ">
                        Strangers bond while searching for a legendary elixir in
                        enchanted forest.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 px-3 py-4 shadow">
                    <img
                      src="https://www.chennaionlineflorists.com/images/CSCSUUN451_big.webp"
                      className="card-img-top"
                      alt="Baby Products"
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Baby Products</h5>
                      <p className="card-text lead">
                        Essential items ensuring comfort, safety, and care for
                        your baby.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 px-3 py-4 shadow">
                    <img
                      src="https://relifepharma.com/wp-content/uploads/2021/01/Albozole-Susp.-02.01.21-600x600.jpg"
                      className="card-img-top"
                      alt="Veterinay Products"
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        Veterinary Products
                      </h5>
                      <p className="card-text lead">
                        Advanced care solutions for animal health, well-being,
                        and medical treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="courosel py-5 " id="contactus">
          <div className="container ">
            <h2 className="fs-1 fw-bold text-center pt-5 pb-5">Our Store</h2>
            <div className="row justify-content-center g-5">
              <div className="col-md-6 col-lg-6 align-self-center ">
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://t3.ftcdn.net/jpg/02/46/70/82/360_F_246708269_WzeXfbrGzkX5axOatRwF0kagyBtGjXh5.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://www.credihealth.com/media/ksnry5cs2fsm0huitmx7a357yq3e/things-to-know-while-opening-a-medical-store"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 align-self-center ">
                <div className="map-responsive ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.6360134898396!2d78.82651277485536!3d9.365441383632186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b019807b03c1b1b%3A0xdc48232f3c1ae56b!2sNEW%20LUCKY%20MEDICAL!5e0!3m2!1sen!2sin!4v1713593059699!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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

export default LandingPage;
