import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ time, patient, dentist, assistant, isSick }) => (
  <li className={isSick ? "appointment sick" : "appointment"}>
  <div className="time">{format_time(time)}</div>
  <div className={isSick ? "patient sick" : "patient"}>Patiënt: {patient}</div>
  <div className="dentist">Tandarts: {dentist}</div>
  <div className="assistant">Assistent: {assistant}</div>
</li>
)

;

