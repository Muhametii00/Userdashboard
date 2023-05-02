import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import DarkLogo from "../../assets/icons/DarkLogo.png";
import UserPhone from "../../assets/icons/UserPhone.png";
import Google from "../../assets/icons/Google.png";

export const SignUp = () => {
  return (
    <div style={{ width: "100%", marginTop: "10%", marginBottom: "5%" }}>
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
              padding: "17% 8%",
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
              padding: "0% 10% 7% 7%",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#64748B",
                  marginTop: "15%",
                }}
              >
                Start for free
              </p>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#212B36",
                  marginTop: "0",
                }}
              >
                Sign Up to TailAdmin
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
                Name
              </p>
              <input
                placeholder="Enter your full name"
                style={{
                  border: "1.5px solid #3056D3",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "100%",
                  padding: "20px",
                }}
              ></input>
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
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "100%",
                  padding: "20px",
                }}
              ></input>
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Password
              </p>
              <input
                placeholder="Enter your password"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "100%",
                  padding: "20px",
                }}
              ></input>
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Re-type Password
              </p>
              <input
                placeholder="Re-type your password"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "100%",
                  padding: "20px",
                  marginBottom: "7%",
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
                  marginBottom: "5%",
                }}
              >
                Create account
              </button>
              <button
                style={{
                  width: "112%",
                  padding: "7px",
                  borderRadius: "8px",
                  backgroundColor: "#EFF4FB",
                  border: "0",
                  color: "#64748B",
                  marginBottom: "2%",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img width="10%" src={Google} alt="Google" />
                  <p>Sign up with Google</p>
                </span>
              </button>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2%",
                }}
              >
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#64748B",
                  }}
                >
                  Already have an account?
                </p>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3056D3",
                  }}
                >
                  Sign in
                </p>
              </span>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
