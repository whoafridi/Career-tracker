import React, { useEffect, useState } from "react";
import SingleService from "../Home/SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section
      style={{
        background: "#f4f5f7 !important",
      }}
    >
      <div className="container">
        <h3 className="text-center ft-bold">My Coaching Services</h3>
        <div className="row mt-5">
          {services.map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
