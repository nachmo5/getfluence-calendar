import React from "react";
import c from "./CalendarPage.module.css";
import Calendar from "../../organisms/Calendar/Calendar";

function CalendarPage() {
  return (
    <div className={c.CalendarPage}>
      <Calendar />
    </div>
  );
}

export default CalendarPage;
