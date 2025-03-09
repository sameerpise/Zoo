import React from "react";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome for icons
 // Custom styling

const Stats = () => {
  const statsData = [
    { icon: "fa-paw", value: 12345, label: "Total Animals", delay: "0.1s" },
    { icon: "fa-users", value: 67890, label: "Daily Visitors", delay: "0.3s" },
    { icon: "fa-certificate", value: 3456, label: "Total Memberships", delay: "0.5s" },
    { icon: "fa-shield-alt", value: 789, label: "Wildlife Rescued", delay: "0.7s" },
  ];

  return (
    <div className="container-xxl bg-primary facts my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-4">
          {statsData.map((stat, index) => (
            <div key={index} className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay={stat.delay}>
              <i className={`fa ${stat.icon} fa-3x text-warning mb-3`}></i>
              <h1 className="text-white mb-2">
                <CountUp start={0} end={stat.value} duration={5} separator="," />
              </h1>
              <p className="text-white mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
