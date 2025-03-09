import React, { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import img1 from '../assets/img/bg-1.jpg'
import CarouselPage from './HeaderSection';
// import './HeaderSection.css'
import Stats from './ZooSafariStats';
import VisitHours from './Visitingshouers/Visit';

import Duplicatelist from './Categeory/Duplicatelist';
import New from './Animal/New';
import Services from './Animal/Services';
import ZooEvents from './ZooEvents';
import DummyPost from './DummyData/DummyPost';



export default function LandingPage() {
  ;
  return (
    <>
  <CarouselPage />
 
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="6.1s">
            <p>
              <span className="text-primary me-2">#</span>Welcome To ZooSafari
            </p>
            <h1 className="display-5 mb-4">
              Why You Should Visit <span className="text-primary">ZooSafari</span> Park!
            </h1>
            <p className="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
            </p>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>  <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-3" />Free Car Parking
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>  <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-3" />Natural Environment
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>  <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-3" />Professional Guide & Security
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>  <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-3" />World Best Animals
            </h5>
            <a className="btn btn-primary py-3 px-5 mt-3" href="#">Read More</a>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="9.5s">
            <div className="img-border">
              <img className="img-fluid" src={img1} alt="Zoofari Park" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
 <Stats />
 <h2 className='text-center tex '><span className='text-success' > Popular Blogs </span></h2>
 <DummyPost />
 <New />
 <ZooEvents />
 <Services />
 <VisitHours />


 {/* <Duplicatelist /> */}
    </>
  )
}
