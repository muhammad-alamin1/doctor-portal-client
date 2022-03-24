import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const infoData = [
    {
      id: 1,
      title: "Opening Hours",
      description: "We are open 7 days",
      icon: faClock,
      background: "primary",
    },
    {
      id: 2,
      title: "Visit Our location",
      description: "North Khulshi NY 203, Chittagong, Bangladesh",
      icon: faMapMarkerAlt,
      background: "dark",
    },
    {
      id: 3,
      title: "Call us now",
      description: "+1235438193",
      icon: faPhone,
      background: "primary",
    },
  ];
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {infoData.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
