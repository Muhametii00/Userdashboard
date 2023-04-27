import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Buttons.css";

export const Buttons = () => {
  return (
    <div
      style={{
        width: "76%",
        rowGap: "5%",
        display: "flex",
        flexDirection: "column",
        marginTop: "5%",
        marginBottom: "10%",
      }}
    >
      <WhiteCard height="55%" size="95%">
        <div>
          <div>
            <p
              style={{
                padding: "15px 20px",
                borderBottom: "1px solid #E2E8F0",
                margin: "0px",
                color: "#1C2434",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Normal Button
            </p>
          </div>
          <div style={{ padding: "20px " }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-1"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-2"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-3"
              >
                Button
              </button>
              <button className="button-4">Button</button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
              }}
            >
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-1"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-2"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-3"
              >
                Button
              </button>
              <button
                style={{ border: "1px solid #10B981", color: "#10B981" }}
                className="button-4"
              >
                Button
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
              }}
            >
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-1"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-2"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-3"
              >
                Button
              </button>
              <button
                style={{ border: "1px solid #1C2434", color: "#1C2434" }}
                className="button-4"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </WhiteCard>
      <WhiteCard height="100%" size="95%">
        <div>
          <div>
            <p
              style={{
                padding: "15px 20px",
                borderBottom: "1px solid #E2E8F0",
                margin: "0px",
                color: "#1C2434",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Button With Icon
            </p>
          </div>
          <div style={{ padding: "20px " }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-1"
              >
                Button With Icon
              </button>
              <button
                style={{ backgroundColor: "#10B981", borderRadius: "0" }}
                className="button-2"
              >
                Button With Icon
              </button>
              <button
                style={{ backgroundColor: "#1C2434", borderRadius: "0" }}
                className="button-3"
              >
                Button With Icon
              </button>
              <button style={{ borderRadius: "0" }} className="button-4">
                Button With Icon
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-2"
              >
                Button With Icon
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-2"
              >
                Button With Icon
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-2"
              >
                Button With Icon
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #3C50E0",
                  color: "#3C50E0",
                }}
                className="button-2"
              >
                Button With Icon
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-3"
              >
                Button With Icon
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-3"
              >
                Button With Icon
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-3"
              >
                Button With Icon
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #3C50E0",
                  color: "#3C50E0",
                }}
                className="button-3"
              >
                Button With Icon
              </button>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
