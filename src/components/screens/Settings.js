import React, { useState } from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import Person from "../../assets/icons/Photo.png";
import { FileUploader } from "react-drag-drop-files";
import "../styles/Settings.css";

const fileTypes = ["JPG", "PNG", "GIF"];

export const Settings = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div
      style={{
        width: "76%",
        columnGap: "5%",
        display: "flex",
        flexDirection: "row",
        marginTop: "5%",
        marginBottom: "10%",
      }}
    >
      <WhiteCard height="100%" size="50%">
        <div
          style={{
            color: "#1C2434",
            fontSize: "16px",
            fontWeight: "500",
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
              Personal Information
            </p>
          </div>
          <div style={{ padding: "20px 20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <div style={{ width: "50%" }}>
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
                  Full Name
                </p>
                <input
                  placeholder="Enter your full name"
                  style={{
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "4px",
                    color: "#64748B",
                    width: "80%",
                    padding: "15px",
                    backgroundColor: "#EFF4FB",
                  }}
                ></input>
              </div>
              <div style={{ width: "50%" }}>
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
                  Phone Number
                </p>
                <input
                  placeholder="Enter your phone number"
                  style={{
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "4px",
                    color: "#64748B",
                    width: "80%",
                    padding: "15px",
                    backgroundColor: "#EFF4FB",
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
              Email Address
            </p>
            <input
              placeholder="Enter your email address"
              style={{
                border: "1.5px solid #E2E8F0",
                borderRadius: "4px",
                color: "#64748B",
                width: "90%",
                padding: "15px",
                backgroundColor: "#EFF4FB",
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
              Username
            </p>
            <input
              placeholder="Enter your username"
              style={{
                border: "1.5px solid #E2E8F0",
                borderRadius: "4px",
                color: "#64748B",
                width: "90%",
                padding: "15px",
                backgroundColor: "#EFF4FB",
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
              BIO
            </p>
            <input
              placeholder="Biography"
              style={{
                border: "1.5px solid #E2E8F0",
                borderRadius: "4px",
                color: "#64748B",
                width: "90%",
                padding: "15px",
                paddingBottom: "30%",
                marginBottom: "20px",
                backgroundColor: "#EFF4FB",
              }}
            ></input>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "3%",
                marginRight: "4%",
              }}
            >
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#1C2434",
                  padding: "10px 25px",
                  margin: "0",
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "#3C50E0",
                  border: "1px solid #3C50E0",
                  borderRadius: "4px",
                  color: "#EFF4FB",
                  padding: "10px 25px",
                  margin: "0",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </WhiteCard>
      <WhiteCard height="65%" size="35%">
        <div
          style={{
            color: "#1C2434",
            fontSize: "16px",
            fontWeight: "500",
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
              Your Photo
            </p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "10px 20px",
                gap: "1%",
              }}
            >
              <img width="55px" height="55px" src={Person} alt="Person" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    color: "#1C2434",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    marginLeft: "4%",
                  }}
                >
                  Edit your photo
                </p>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5%",
                    justifyContent: "flex-start",
                    width: "40%",
                    marginLeft: "4%",
                  }}
                >
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#64748B",
                      width: "fit-content",
                      padding: "0 ",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#3C50E0",
                      width: "fit-content",
                      padding: "0 ",
                    }}
                  >
                    Update
                  </button>
                </span>
              </div>
            </div>
            <div style={{ padding: "5%" }}>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "3%",
                marginRight: "4%",
              }}
            >
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #E2E8F0",
                  borderRadius: "4px",
                  color: "#1C2434",
                  padding: "10px 25px",
                  margin: "0",
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "#3C50E0",
                  border: "1px solid #3C50E0",
                  borderRadius: "4px",
                  color: "#EFF4FB",
                  padding: "10px 25px",
                  margin: "0",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
