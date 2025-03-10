import React from "react";
import IconCar from "../../assets/img/icon/icon-2.png";
import Photo from "../../assets/img/icon/icon-3.png";
import Guid from "../../assets/img/icon/icon-4.png";
import Food from "../../assets/img/icon/icon-5.png";
import "./Servises.css"; // Import CSS

export default function Services() {
  return (
    <div className="services-container">
      <div className="container">
        {/* Header Section */}
        <div className="row g-5 mb-5 text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-12">
            <p className="section-tagline">
              <span className="text-primary">#</span> Our Services
            </p>
            <h1 className="section-title">
              Special Services For ZooSafari Visitors
            </h1>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row gy-4 gx-4 justify-content-center">
          {[
            { img: IconCar, title: "Car Parking", delay: "0.1s" },
            { img: Photo, title: "Animal Photos", delay: "0.3s" },
            { img: Guid, title: "Guide Services", delay: "0.5s" },
            { img: Food, title: "Food & Beverages", delay: "0.7s" },
          ].map((service, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={service.delay} key={index}>
              <div className="service-card">
                <img className="service-icon" src={service.img} alt={service.title} />
                <h5 className="service-title">{service.title}</h5>
                <p className="service-description">
                  Experience premium services tailored for your adventure. Enjoy convenience and fun!
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="contact-box">
          <i className="fa fa-mobile-alt contact-icon"></i>
          <div>
            <p className="text-white mb-0">Call for more info</p>
            <h2 className="text-white mb-0">+012 345 6789</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
