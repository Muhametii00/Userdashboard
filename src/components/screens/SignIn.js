import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import DarkLogo from "../../assets/icons/DarkLogo.png";
import UserPhone from "../../assets/icons/UserPhone.png";
import Google from "../../assets/icons/Google.png";
import { Button } from "../shared/Button";

export const SignIn = () => {
  return (
    <div style={{ width: "100%", marginTop: "10%" }}>
      <WhiteCard height="92%" size="100%">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginBottom: "5%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "5% 8%",
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
                Sign In to TailAdmin
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
                placeholder="6+ Characters, 1 Capital letter"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "100%",
                  padding: "20px",
                  marginBottom: "7%",
                }}
              ></input>

              <Button
                width="110%"
                padding="17px"
                background="#3056D3"
                border="0"
                radius="8px"
                bottom="5%"
              >
                Sign In
              </Button>
              <Button
                width="110%"
                color="#64748B"
                border="0"
                radius="8px"
                padding="5px"
                bottom="5%"
                disabled={null}
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
                  <p>Sign in with Google</p>
                </span>
              </Button>

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
                  Don't have any account?
                </p>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#3056D3",
                  }}
                >
                  Sign up
                </p>
              </span>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
