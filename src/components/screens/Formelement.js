import React from "react";
import "../styles/Formelement.css";
import WhiteCard from "../Cards.js/WhiteCard";
import Switch from "@mui/material/Switch";
import { Colors } from "../../assets/helpers/Colors";
import { useLocation } from "react-router-dom";

export const Formelement = () => {
  const location = useLocation();
  const selectedItems = location.state.selectedItems;

  console.log(selectedItems);
  return (
    <div
      style={{
        width: "100%",
        columnGap: "10%",
        display: "flex",
        flexDirection: "row",
        marginTop: "10%",
        marginBottom: "15%",
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
        <WhiteCard height="57%" size="100%">
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
                  borderBottom: `1.5px solid ${Colors.stroke}`,
                  margin: "0px",
                }}
              >
                Input Fields
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
                Default input
              </p>
              <input
                placeholder="Default input text!"
                style={{
                  border: `1.5px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  width: "90%",
                  padding: "15px",
                }}
              ></input>

              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Active input
              </p>
              <input
                placeholder="Active input text!"
                style={{
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  width: "90%",
                  padding: "15px",
                }}
              ></input>

              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Disabled input
              </p>
              <input
                disabled
                placeholder="Disabled input text!"
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  width: "90%",
                  padding: "15px",
                  backgroundColor: Colors.stroke,
                }}
              ></input>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard height="57%" size="100%">
          <div
            style={{
              color: Colors.black,
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
                Toggle switch input
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  marginBottom: "7px",
                }}
              >
                <Switch size="large" />

                <Switch defaultChecked size="large" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  marginBottom: "7px",
                }}
              >
                <Switch size="large" />

                <Switch defaultChecked size="large" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  marginBottom: "7px",
                }}
              >
                <Switch size="large" />

                <Switch defaultChecked size="large" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  marginBottom: "7px",
                }}
              >
                <Switch size="large" color="default" />

                <Switch defaultChecked size="large" />
              </div>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard height="57%" size="100%">
          <div
            style={{
              color: Colors.black,
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
                  borderBottom: `1px solid ${Colors.stroke}`,
                  margin: "0px",
                }}
              >
                Time and date
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Date picker
              </p>

              <input
                placeholder="dd/mm/yyyy"
                type="date"
                name="date"
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  width: "90%",
                  padding: "15px",
                }}
              ></input>

              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Select date
              </p>
              <input
                placeholder="dd/mm/yyyy"
                type="date"
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  width: "90%",
                  padding: "15px",
                }}
              ></input>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard height="57%" size="100%">
          <div
            style={{
              color: Colors.black,
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
                  borderBottom: `1px solid ${Colors.stroke}`,
                  margin: "0px",
                }}
              >
                File upload
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Attach file
              </p>
              <div class="container1">
                <input type="file" />
              </div>

              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Attach file
              </p>
              <div class="container2">
                <input type="file" />
              </div>
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
              color: Colors.black,
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
                  borderBottom: `1px solid ${Colors.stroke}`,
                  margin: "0px",
                }}
              >
                Textarea Fields
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Default textarea
              </p>
              <input
                placeholder="Default input text!"
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  width: "90%",
                  padding: "15px",
                  paddingBottom: "20%",
                }}
              ></input>

              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Active textarea
              </p>
              <input
                placeholder="Active input text!"
                style={{
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: "4px",
                  color: "#64748B",
                  width: "90%",
                  padding: "15px",
                  paddingBottom: "20%",
                }}
              ></input>

              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Disabled textarea
              </p>
              <input
                disabled
                placeholder="Disabled input text!"
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  width: "90%",
                  padding: "15px",
                  paddingBottom: "20%",
                  backgroundColor: Colors.stroke,
                }}
              ></input>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard height="37%" size="100%">
          <div
            style={{
              color: Colors.black,
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
                  borderBottom: `1px solid ${Colors.stroke}`,
                  margin: "0px",
                }}
              >
                Checkbox and radio
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  marginBottom: "15px",
                }}
              >
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input type="checkbox" />
                  Checkbox Text
                </label>
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input checked type="checkbox" />
                  Checkbox Text
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  marginBottom: "15px",
                }}
              >
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input type="checkbox" />
                  Checkbox Text
                </label>
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input checked type="checkbox" />
                  Checkbox Text
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  marginBottom: "15px",
                }}
              >
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input type="checkbox" />
                  Checkbox Text
                </label>
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input checked type="checkbox" />
                  Checkbox Text
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  marginBottom: "15px",
                }}
              >
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input type="radio" />
                  Checkbox Text
                </label>
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input checked type="radio" />
                  Checkbox Text
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  marginBottom: "15px",
                }}
              >
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input type="radio" />
                  Checkbox Text
                </label>
                <label
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: Colors.black,
                  }}
                >
                  <input checked type="radio" />
                  Checkbox Text
                </label>
              </div>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard height="37%" size="100%">
          <div
            style={{
              color: Colors.black,
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
                  borderBottom: `1px solid ${Colors.stroke}`,
                  margin: "0px",
                }}
              >
                Select input
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Select Country
              </p>
              <select
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  fontSize: "16px",
                  lineHeight: "24px",
                  width: "97%",
                  padding: "15px",
                  background: "transparent",
                }}
              >
                <option>Select Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antartica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
              </select>

              <p
                style={{
                  color: Colors.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Multiselect Dropdown
              </p>
              <select
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  fontSize: "16px",
                  lineHeight: "24px",
                  width: "97%",
                  padding: "15px",
                  background: "transparent",
                }}
              >
                <option value="design">Design</option>
                <option value="design">CS</option>
                <option value="design">MATH</option>
                <option value="design">Design</option>
                <option value="design">CS</option>
                <option value="design">MATH</option>
                <option value="design">Design</option>
                <option value="design">CS</option>
                <option value="design">MATH</option>
              </select>
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};
