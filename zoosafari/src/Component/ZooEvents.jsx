import React from "react";
import "./ZooEvent.css"; // Import CSS file

const ZooEvents = () => {
  const events = [
    {
      date: "10/03",
      day: "10",
      month: "03",
      title: "🌎 Earth Day",
      time: "9:30 AM",
      link: "https://bonko.ancorathemes.com/event/earth-day/",
    },
    {
      date: "05/10",
      day: "05",
      month: "10",
      title: "🎉 Party for the Planet",
      time: "10:00 AM",
      link: "https://bonko.ancorathemes.com/event/party-for-the-planet/",
    },
    {
      date: "13/08",
      day: "13",
      month: "08",
      title: "🌙 Night at the Zoo",
      time: "8:30 PM",
      link: "https://bonko.ancorathemes.com/event/night-at-the-zoo/",
    },
  ];

  return (
    <div className="zoo-events container py-5">
      <div className="row align-items-center">
        {/* Event Image */}
        <div className="col-lg-5 text-center">
          <img
            src="https://bonko.ancorathemes.com/wp-content/uploads/2018/04/image-30-copyright.jpg"
            alt="Zoo Event"
            className="img-fluid rounded event-image"
          />
        </div>

        {/* Event Details */}
        <div className="col-lg-7">
          <h1 className="event-title text-center text-lg-end">🐾 Zoo Events</h1>
          <div className="events-list mt-4">
            {events.map((event, index) => (
              <a
                key={index}
                href={event.link}
                className="event-item d-flex justify-content-between align-items-center border rounded p-3 mb-3 text-decoration-none"
              >
                <div className="event-date text-white text-center">
                  <span className="event-day d-block fw-bold">{event.day}</span>
                  <span className="event-month">/{event.month}</span>
                </div>
                <div className="event-title-text flex-grow-1 text-dark fw-semibold">
                  {event.title}
                </div>
                <div className="event-time text-muted">{event.time}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZooEvents;
