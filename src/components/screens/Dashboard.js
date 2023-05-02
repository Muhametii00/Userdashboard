import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";

export const Dashboard = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      <WhiteCard height="90%" size="100%">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>Dashboard</p>
          <p>Dashboard</p>
        </div>
      </WhiteCard>
    </div>
  );
};
