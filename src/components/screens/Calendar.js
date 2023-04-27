import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import Calendar from "react-calendar";
import "../styles/Timetable.css";

export const Timetable = () => {
  return (
    <div
      style={{
        width: "70%",
        marginTop: "3%",
      }}
    >
      <WhiteCard height="75%" size="100%">
        <div>
          <Calendar />
        </div>
      </WhiteCard>
    </div>
  );
};
