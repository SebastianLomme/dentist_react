import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay"; 





/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant, isSick }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
        isSick={isSick}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
