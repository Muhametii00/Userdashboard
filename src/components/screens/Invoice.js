import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Invoice.css";

export const Invoice = () => {
  return (
    <div
      style={{
        width: "70%",
        marginTop: "5%",
      }}
    >
      <WhiteCard height="75%" size="100%">
        <div style={{ padding: "0px 15px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#1C2434",
                }}
              >
                From
              </p>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22px",
                  lineHeight: "30px",
                  color: "#1C2434",
                }}
              >
                Roger Culhane
              </h2>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#64748B",
                }}
              >
                Email: conctact@example.com
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#64748B",
                }}
              >
                Address: 2972 Westheimer Rd. Santa.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#1C2434",
                }}
              >
                To
              </p>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22px",
                  lineHeight: "30px",
                  color: "#1C2434",
                }}
              >
                Cristofer Levin
              </h2>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#64748B",
                }}
              >
                Email: conctact@example.com
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#64748B",
                }}
              >
                Address: New York, USA 2707 Davis Anenue
              </p>
            </div>
            <div>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22px",
                  lineHeight: "30px",
                  color: "#1C2434",
                }}
              >
                Order #15478
              </h2>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
      </WhiteCard>
    </div>
  );
};
