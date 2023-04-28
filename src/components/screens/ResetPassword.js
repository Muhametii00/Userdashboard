import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import DarkLogo from "../../assets/icons/DarkLogo.png";
import UserPhone from "../../assets/icons/UserPhone.png";

export const ResetPassword = () => {
  return (
    <div style={{ width: "70%", marginTop: "3%", marginBottom: "3%" }}>
      <WhiteCard height="100%" size="100%">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10% 8%",
              borderRight: "2px solid #E2E8F0",
            }}
          >
            <img style={{ marginBottom: "3%" }} src={DarkLogo} alt="DarkLogo" />
            <p
              style={{
                textAlign: "center",
                marginBottom: "10%",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                color: "#64748B",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
              suspendisse.
            </p>
            <img src={UserPhone} alt="UserPhone" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "17% 10% 7% 7%",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#212B36",
                  marginTop: "0",
                }}
              >
                Reset Password
              </p>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#64748B",
                  marginTop: "1%",
                }}
              >
                Enter your email address to receive a password reset link.
              </h2>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Email
              </p>
              <input
                placeholder="Enter your email"
                style={{
                  border: "1.5px solid #3056D3",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "100%",
                  padding: "20px",
                  marginBottom: "5%",
                }}
              ></input>

              <button
                style={{
                  width: "112%",
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#3056D3",
                  border: "0",
                  color: "#ffff",
                }}
              >
                Send Password Reset Link
              </button>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
