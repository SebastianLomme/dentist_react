import React from "react";

const format_time = (time) => (time < 10 ? `0${time}:00u` : `${time}:00u`);

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ time, patient, isSick }) => (
  <div className= {isSick ? "appointment sick" : "appointment"}>
    <span className="time">{format_time(time)}</span>
    <span className="patient">{patient}</span>
  </div>
);
