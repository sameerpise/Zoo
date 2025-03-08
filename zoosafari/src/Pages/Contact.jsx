import React from "react";

const Contact = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Contact Info Section */}
        {/* <div className="row g-4 mb-5">
          <div className="col-lg-4">
            <div className="h-100 bg-success text-white d-flex align-items-center p-4 shadow rounded">
              <div className="btn-lg-square bg-white text-success flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                <i className="bi bi-geo-alt-fill fs-4"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">📍 Address</p>
                <h5 className="mb-0">123 Safari Street, Wildlife Park, USA</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="h-100 bg-success text-white d-flex align-items-center p-4 shadow rounded">
              <div className="btn-lg-square bg-white text-success flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                <i className="bi bi-telephone-fill fs-4"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">📞 Call Now</p>
                <h5 className="mb-0">+012 345 6789</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="h-100 bg-success text-white d-flex align-items-center p-4 shadow rounded">
              <div className="btn-lg-square bg-white text-success flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                <i className="bi bi-envelope-fill fs-4"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">📧 Mail Now</p>
                <h5 className="mb-0">contact@zoosafari.com</h5>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact Form Section */}
        <div className="row g-5">
          <div className="col-lg-6">
            <p className="text-success"># Contact Us</p>
            <h1 className="display-5 mb-4">Have Any Queries? Contact Us!</h1>
            <p className="mb-4">
              We’d love to hear from you! Whether you have questions about our park, animals, or special events, feel free to reach out.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control bg-light border-0" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control bg-light border-0" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control bg-light border-0" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control bg-light border-0" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-success w-100 py-3" type="submit">
                    <i className="bi bi-send-fill me-2"></i>Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Google Maps Section */}
          <div className="col-lg-6">
            <div className="h-100" style={{ minHeight: "400px" }}>
              <iframe
                className="rounded w-100 h-100"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4885926.13109572!2d77.2227489331711!3d20.593684214398443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d241e3cf7b7cd%3A0x87d1f724a9d07d34!2sIndia!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
