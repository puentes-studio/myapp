import React from "react";
import "./PhoneLink.css";

function PhoneLink() {
  return (
    <div>
      <h3 className="phone-title">Click to Call</h3>
      <div className="phone-container">
        <a href="tel:+34658608216">+34 658 608 216</a>
        <a href="tel:+447515482792">+44 7515 482 792</a>
      </div>
    </div>
  );
}

export default PhoneLink;
