import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import { Button } from "../shared/Button";
import { useLocation } from "react-router-dom";

export const FormLayout = () => {
  const location = useLocation();

  const inputValue = location.state.inputValue;

  return (
    <div
      style={{
        width: "100%",
        columnGap: "10%",
        display: "flex",
        flexDirection: "row",
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          gap: "3%",
        }}
      >
        <WhiteCard height="80%" size="100%">
          <div
            style={{
              color: "#1C2434",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            <div>
              <p
                style={{
                  padding: "15px 20px",
                  borderBottom: "1px solid #E2E8F0",
                  margin: "0px",
                }}
              >
                Contact Form
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10%" }}
              >
                <div>
                  <p
                    style={{
                      color: "#1C2434",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      letterSpacing: "0px",
                      textAlign: "left",
                    }}
                  >
                    First name
                  </p>
                  <input
                    placeholder="Enter your first name"
                    style={{
                      border: "1.5px solid #E2E8F0",
                      borderRadius: "4px",
                      color: "#64748B",
                      width: "100%",
                      padding: "15px",
                    }}
                  ></input>
                </div>
                <div>
                  <p
                    style={{
                      color: "#1C2434",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      letterSpacing: "0px",
                      textAlign: "left",
                    }}
                  >
                    Last name
                  </p>
                  <input
                    placeholder="Enter your last name"
                    style={{
                      border: "1.5px solid #E2E8F0",
                      borderRadius: "4px",
                      color: "#64748B",
                      width: "100%",
                      padding: "15px",
                    }}
                  ></input>
                </div>
              </div>
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Email
              </p>
              <input
                placeholder="Enter your email address"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "90%",
                  padding: "15px",
                }}
              ></input>
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Subject
              </p>
              <input
                placeholder="Select subject"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "90%",
                  padding: "15px",
                }}
              ></input>
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Subject
              </p>
              <select
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  fontSize: "16px",
                  lineHeight: "24px",
                  width: "97%",
                  padding: "15px",
                  background: "transparent",
                }}
              >
                <option>Type your subject</option>
                <option>Mathmatics</option>
                <option>Design Graphic</option>
                <option>Computer Science</option>
                <option>Midicine</option>
                <option>Law</option>
              </select>
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Message
              </p>
              <input
                placeholder="Type your message"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "90%",
                  padding: "15px",
                  paddingBottom: "30%",
                  marginBottom: "20px",
                }}
              ></input>
              <Button
                width="98%"
                background="#3C50E0"
                border="0"
                padding="15px"
                radius="4px"
              >
                Send Message
              </Button>
            </div>
          </div>
        </WhiteCard>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          gap: "3%",
        }}
      >
        <WhiteCard height="45 %" size="100%">
          <div
            style={{
              color: "#1C2434",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            <div>
              <p
                style={{
                  padding: "15px 20px",
                  borderBottom: "1px solid #E2E8F0",
                  margin: "0px",
                }}
              >
                Sign In Form
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <p
                style={{
                  color: "#1C2434",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Email
              </p>
              <input
                placeholder="Default input text!"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "90%",
                  padding: "15px",
                }}
              ></input>

              <p
                style={{
                  color: "#1C2434",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Password
              </p>
              <input
                placeholder="Default input text!"
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "90%",
                  padding: "15px",
                }}
              ></input>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    marginBottom: "25px",
                    marginTop: "25px",
                    cursor: "pointer",
                  }}
                >
                  <input type="checkbox" />
                  Remember me
                </label>
                <p
                  style={{
                    color: "#3C50E0",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    cursor: "pointer",
                  }}
                >
                  Forget password?
                </p>
              </div>
              <Button
                width="98%"
                background="#3C50E0"
                border="0"
                padding="15px"
                radius="4px"
              >
                Sign In
              </Button>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard height="58%" size="100%">
          <div
            style={{
              color: "#1C2434",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            <div>
              <p
                style={{
                  padding: "15px 20px",
                  borderBottom: "1px solid #E2E8F0",
                  margin: "0px",
                }}
              >
                Sign Up Form
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3%",
                }}
              >
                <p
                  style={{
                    color: "#1C2434",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Name
                </p>
                <input
                  placeholder="Enter your full name"
                  style={{
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "4px",
                    color: "#64748B",
                    width: "90%",
                    padding: "15px",
                  }}
                ></input>
                <p
                  style={{
                    color: "#1C2434",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Email
                </p>
                <input
                  placeholder="Enter your email address"
                  style={{
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "4px",
                    color: "#64748B",
                    width: "90%",
                    padding: "15px",
                  }}
                ></input>
                <p
                  style={{
                    color: "#1C2434",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Password
                </p>
                <input
                  placeholder="Enter Password"
                  style={{
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "4px",
                    color: "#64748B",
                    width: "90%",
                    padding: "15px",
                  }}
                ></input>
                <p
                  style={{
                    color: "#1C2434",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "22px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Re-type password
                </p>
                <input
                  placeholder="Re-enter password"
                  style={{
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "4px",
                    color: "#64748B",
                    width: "90%",
                    padding: "15px",
                    marginBottom: "20px",
                  }}
                ></input>
                <Button
                  width="98%"
                  background="#3C50E0"
                  border="0"
                  padding="15px"
                  radius="4px"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};
