import React from 'react'
import ele from '../../assets/img/animal-md-3.jpg'
import tiger from '../../assets/img/bg-1.jpg'
import Lion from '../../assets/img/about.jpg'
import honeyBejar from '../../assets/img/animal-lg-1.jpg'
import zebra from '../../assets/img/animal-md-2.jpg'
import Animal from '../../assets/img/animal-md-3.jpg'
export default function New() {
  return (
    <>
        <div className="container-xxl py-5">
      <div className="container">
        <div
          className="row g-5 mb-5 align-items-end wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="col-lg-6">
            <p><span className="text-primary me-2">#</span>Our Animals</p>
            <h1 className="display-5 mb-0">
              Let`s See Our <span className="text-primary">Zoofari</span> Awsome
              Animals
            </h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary py-3 px-5" href=""
              >Explore More Animals</a
            >
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4">
              <div className="col-12">
                <a
                  className="animal-item"
                  href="img/animal-md-1.jpg"
                  data-lightbox="animal"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src={ele } alt="" />
                    <div className="animal-text p-4">
                      <p className="text-white small text-uppercase mb-0">Animal</p>
                      <h5 className="text-white mb-0">Elephant</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12">
                <a
                  className="animal-item"
                  href="img/animal-lg-1.jpg"
                  data-lightbox="animal"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src={honeyBejar } alt="" />
                    <div className="animal-text p-4">
                      <p className="text-white small text-uppercase mb-0">Animal</p>
                      <h5 className="text-white mb-0">honeyBejar </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="row g-4">
              <div className="col-12">
                <a
                  className="animal-item"
                  href="img/animal-lg-2.jpg"
                  data-lightbox="animal"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src={tiger } alt="" />
                    <div className="animal-text p-4">
                      <p className="text-white small text-uppercase mb-0">Animal</p>
                      <h5 className="text-white mb-0">Tiger</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12">
                <a
                  className="animal-item"
                  href="img/animal-md-2.jpg"
                  data-lightbox="animal"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src={zebra}alt="" />
                    <div className="animal-text p-4">
                      <p className="text-white small text-uppercase mb-0">Animal</p>
                      <h5 className="text-white mb-0">zebra</h5>
                    </div>
                  </div>
                </a>
                <a
                  className="animal-item mt-4"
                  href="img/animal-md-2.jpg"
                  data-lightbox="animal"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src={zebra}alt="" />
                    <div className="animal-text p-4">
                      <p className="text-white small text-uppercase mb-0">Animal</p>
                      <h5 className="text-white mb-0">zebra</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-4">
              <div className="col-12">
                <a
                  className="animal-item"
                  href="img/animal-md-3.jpg"
                  data-lightbox="animal"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src={Lion} alt="" />
                    <div className="animal-text p-4">
                      <p className="text-white small text-uppercase mb-0">Animal</p>
                      <h5 className="text-white mb-0">Lion</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12">
                <a
                  className="animal-item"
                  href="img/animal-lg-3.jpg"
                  data-lightbox="animal"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src={Animal} alt="" />
                    <div className="animal-text p-4">
                      <p className="text-white small text-uppercase mb-0">Animal</p>
                      <h5 className="text-white mb-0">Animal</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}
