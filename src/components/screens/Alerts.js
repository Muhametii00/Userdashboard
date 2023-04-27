import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import Attention from "../../assets/icons/Attention.png";
import Success from "../../assets/icons/Success.png";
import Errorr from "../../assets/icons/Errorr.png";

export const Alerts = () => {
  return (
    <div
      style={{
        width: "70%",
        marginTop: "5%",
      }}
    >
      <WhiteCard height="80%" size="100%">
        <div
          style={{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "#FEF5DE",
              padding: "20px",
              width: "80%",
              display: "flex",
              flexDirection: "row",
              gap: "2%",
              marginBottom: "3%",
              borderLeft: "5px solid #FFB800",
            }}
          >
            <img
              style={{ marginTop: "2%" }}
              width="35px"
              height="35px"
              src={Attention}
              alt="Attention"
            />
            <span>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#9D5425",
                }}
              >
                Attention needed
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#D0915C",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been <br /> the industry's standard
                dummy text ever since the 1500s, when
              </p>
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#E1F9F0",
              padding: "20px",
              width: "80%",
              display: "flex",
              flexDirection: "row",
              gap: "2%",
              marginBottom: "3%",
              borderLeft: "5px solid #34D399",
            }}
          >
            <img
              style={{ marginTop: "2%" }}
              width="32px"
              height="32px"
              src={Success}
              alt="Success"
            />
            <span>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#004434",
                }}
              >
                Message Sent Successfully
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#637381",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#FEEAEA",
              padding: "20px",
              width: "80%",
              display: "flex",
              flexDirection: "row",
              gap: "2%",
              marginBottom: "3%",
              borderLeft: "5px solid #F87171",
            }}
          >
            <img
              style={{ marginTop: "2%" }}
              width="32px"
              height="32px"
              src={Errorr}
              alt="Errorr"
            />
            <span>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "#BC1C21",
                }}
              >
                There were 1 errors with your submission
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#CD5D5D",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </span>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
