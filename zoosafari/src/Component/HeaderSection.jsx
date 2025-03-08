import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel3";
import imag1 from'../assets/img/carousel-1.jpg'
import imag2 from'../assets/img/carousel-2.jpg'
import imag3 from '../assets/img/carousel-3.jpg'
import './HeaderSection.css'
const HeaderCarousel = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const openVideoModal = (src) => {
    setVideoSrc(src);
  };

  const closeVideoModal = () => {
    setVideoSrc("");
  };
  const images=[
    {
    img:imag1
  },
    {
    img:imag2
  },
    {
    img:imag3
  }
]

  return (
    <div className="container-fluid bg-dark p-0 mb-5 header-section">
      <div className="row g-0 flex-column-reverse flex-lg-row">
        <div className="col-lg-6 p-0 img2">
          <div className="header-bg h-100 d-flex flex-column justify-content-center p-5 overlay">
            <h1 className="display-4 text-light mb-5">
              Enjoy Wonderful Day With Your Family
            </h1>
            <div className="d-flex align-items-center pt-4">
              <a href="#" className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5">
                Read More
              </a>
              <button
                type="button"
                className="btn-play"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                onClick={() => openVideoModal("https://www.youtube.com/embed/DWRcNpR6Kdc")}
              >
                <span></span>
              </button>
              <h6 className="text-white m-0 ms-4 d-none d-sm-block">Watch Video</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
         
           
          <OwlCarousel className="owl-theme" loop margin={10} nav={false} items={1} autoplay>
  {images.map((imge, index) => (
    <div key={index} className="item">
      <img className="img-fluid" src={imge.img} alt="" />
    </div>
  ))}
</OwlCarousel>

            
   
        </div>
      </div>
      
      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="videoModalLabel">Youtube Video</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeVideoModal}></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src={videoSrc}
                  allowFullScreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
