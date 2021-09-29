import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(({ time, patient, isSick }, index) => (
    <AppointmentInMonth time={time} patient={patient} isSick={isSick} key={index} />
  ));
  return <div className="day">{appointmentsJSX}</div>;
};
