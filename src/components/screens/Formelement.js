import React, { useState } from "react";
import "../styles/Formelement.css";
import WhiteCard from "../Cards.js/WhiteCard";
import Switch from "@mui/material/Switch";
import { Colors } from "../../assets/helpers/Colors";
import { useLocation } from "react-router-dom";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Formelement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedItems = location.state.selectedItems;
  const initialValues = {
    selectedItems,
    breakfast: "",
    lunch: "",
    menu: [],
    startdate: "",
    enddate: "",
    resume: "",
    cv: "",
    summer: "",
    winter: "",
    languages: [],
    gender: "",
    location: "",
    degree: "",
  };
  const [inputValue, setInputValue] = useState(initialValues);

  const isEnabled = () => {
    if (
      inputValue.breakfast &&
      inputValue.lunch &&
      inputValue.menu &&
      inputValue.startdate &&
      inputValue.enddate &&
      inputValue.resume &&
      inputValue.cv &&
      inputValue.summer &&
      inputValue.winter &&
      inputValue.languages &&
      inputValue.gender &&
      inputValue.location &&
      inputValue.degree
    )
      return false;
    return true;
  };

  const handleInputValue = (key, value) => {
    setInputValue({ ...inputValue, [key]: value });
  };

  const handleClick = () => {
    navigate("/form-layout", { state: { inputValue } });
  };
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
                Meals
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
                Breakfast
              </p>
              <input
                value={inputValue.breakfast}
                onChange={(e) => handleInputValue("breakfast", e.target.value)}
                placeholder="What are you going to eating?"
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
                Lunch
              </p>
              <input
                value={inputValue.lunch}
                onChange={(e) => handleInputValue("lunch", e.target.value)}
                placeholder="What are you going to eating?"
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
                Disabled
              </p>
              <input
                disabled
                placeholder="Disabled"
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
                Menu for today
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <div
                style={{
                  marginBottom: "3%",
                  marginLeft: "3%",
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      value="Beef"
                      onChange={(e) =>
                        handleInputValue(inputValue.menu.push(e.target.value))
                      }
                    />
                  }
                  label="Beef"
                />
              </div>

              <div
                style={{
                  marginBottom: "3%",
                  marginLeft: "3%",
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      value="Steak"
                      onChange={(e) =>
                        handleInputValue(inputValue.menu.push(e.target.value))
                      }
                    />
                  }
                  label="Steak"
                />
              </div>

              <div
                style={{
                  marginBottom: "3%",
                  marginLeft: "3%",
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      value="Chicken"
                      onChange={(e) =>
                        handleInputValue(inputValue.menu.push(e.target.value))
                      }
                    />
                  }
                  label="Chicken"
                />
              </div>
              <div
                style={{
                  marginBottom: "3%",
                  marginLeft: "3%",
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      value="Pork"
                      onChange={(e) =>
                        handleInputValue(inputValue.menu.push(e.target.value))
                      }
                    />
                  }
                  label="Pork"
                />
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
                Start-end date
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
                Start date
              </p>

              <input
                placeholder="dd/mm/yyyy"
                type="date"
                onChange={(e) => handleInputValue("startdate", e.target.value)}
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
                End date
              </p>
              <input
                placeholder="dd/mm/yyyy"
                type="date"
                onChange={(e) => handleInputValue("enddate", e.target.value)}
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
                Attach your CV
              </p>
              <div class="container1">
                <input
                  type="file"
                  onChange={(e) => handleInputValue("resume", e.target.value)}
                />
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
                Attach cover letter
              </p>
              <div class="container2">
                <input
                  type="file"
                  onChange={(e) => handleInputValue("cv", e.target.value)}
                />
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
                Vacation
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
                Summer
              </p>
              <input
                value={inputValue.summer}
                onChange={(e) => handleInputValue("summer", e.target.value)}
                placeholder="Description for Summer vacation"
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
                Winter
              </p>
              <input
                value={inputValue.winter}
                onChange={(e) => handleInputValue("winter", e.target.value)}
                placeholder="Description for Winter vacation"
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
                Disabled
              </p>
              <input
                disabled
                placeholder="Disabled"
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
              width: "100%",
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
                Programming Language
              </p>
            </div>
            <div style={{ padding: "20px 20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "21%",
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
                  <input
                    value="Java"
                    type="checkbox"
                    name="languages"
                    onChange={(e) =>
                      handleInputValue(
                        inputValue.languages.push(e.target.value)
                      )
                    }
                  />
                  Java
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
                  <input
                    value=".Net"
                    type="checkbox"
                    name="languages"
                    onChange={(e) =>
                      handleInputValue(
                        inputValue.languages.push(e.target.value)
                      )
                    }
                  />
                  .NET
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "12%",
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
                  <input
                    value="Javascript"
                    type="checkbox"
                    name="languages"
                    onChange={(e) =>
                      handleInputValue(
                        inputValue.languages.push(e.target.value)
                      )
                    }
                  />
                  JavaScript
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
                  <input
                    value="PHP"
                    type="checkbox"
                    name="languages"
                    onChange={(e) =>
                      handleInputValue(
                        inputValue.languages.push(e.target.value)
                      )
                    }
                  />
                  PHP
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "16%",
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
                  <input
                    value="ReactJS"
                    type="checkbox"
                    name="languages"
                    onChange={(e) =>
                      handleInputValue(
                        inputValue.languages.push(e.target.value)
                      )
                    }
                  />
                  ReactJS
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
                  <input
                    value="VueJS"
                    type="checkbox"
                    onChange={(e) =>
                      handleInputValue(
                        inputValue.languages.push(e.target.value)
                      )
                    }
                  />
                  VueJS
                </label>
              </div>
            </div>
          </div>
        </WhiteCard>
        <WhiteCard>
          <div>
            <p
              style={{
                padding: "15px 20px",
                borderBottom: `1px solid ${Colors.stroke}`,
                margin: "0px",
              }}
            >
              Gender
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              padding: "20px 20px",
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
              <input
                type="radio"
                value="male"
                onChange={(e) => handleInputValue("gender", e.target.value)}
                checked={inputValue.gender === "male"}
              />
              Male
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
              <input
                type="radio"
                value="female"
                onChange={(e) => handleInputValue("gender", e.target.value)}
                checked={inputValue.gender === "female"}
              />
              Female
            </label>
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
                Univeristy
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
                Univeristy Location
              </p>
              <select
                value={inputValue.location}
                onChange={(e) => handleInputValue("location", e.target.value)}
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  fontSize: "16px",
                  lineHeight: "24px",
                  width: "97%",
                  padding: "15px",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
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
                Bachelor Degree
              </p>
              <select
                value={inputValue.degree}
                onChange={(e) => handleInputValue("degree", e.target.value)}
                style={{
                  border: `1px solid ${Colors.stroke}`,
                  borderRadius: "4px",
                  color: Colors.lightgrey,
                  fontSize: "16px",
                  lineHeight: "24px",
                  width: "97%",
                  padding: "15px",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <option value="Design">Design</option>
                <option value="Computer Science">CS</option>
                <option value="Mathematics">MATH</option>
                <option value="Medicine">Medicine</option>
                <option value="Architecture">Architecture</option>
                <option value="design">Justice</option>
              </select>
            </div>
          </div>
        </WhiteCard>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1%",
          }}
        >
          <Button
            disabled={isEnabled()}
            onClick={handleClick}
            padding="15px"
            border="0"
            radius="4px"
            width="25%"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
