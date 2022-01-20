import React from "react";
import "./styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.time && <fragment>Appointment at {props.time}</fragment>}
      {!props.time && <fragment>No Appointments</fragment>}
    </article>
  );
}