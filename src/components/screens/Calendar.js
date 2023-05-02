import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import Calendar from "react-calendar";
import "../styles/Timetable.css";
import { formatWeekday } from "react-calendar/dist/cjs/shared/dateFormatter";

export const Timetable = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "10%",
      }}
    >
      <WhiteCard height="75%" size="100%">
        <div>
          <Calendar formatShortWeekday={formatWeekday} />
        </div>
      </WhiteCard>
    </div>
  );
};
