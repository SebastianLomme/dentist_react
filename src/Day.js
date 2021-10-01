import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay"; 





/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant, isSick, treatment}, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
        isSick={isSick}
        treatment={treatment}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
