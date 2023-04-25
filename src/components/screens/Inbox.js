import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Inbox.css";
import Bin from "../../assets/icons/Bin.png";
import Reload from "../../assets/icons/Reload.png";
import Dots from "../../assets/icons/Dots.png";
import Search from "../../assets/icons/Search.png";
import Inboxx from "../../assets/icons/Inboxx.png";
import Star from "../../assets/icons/Star.png";
import Clock from "../../assets/icons/Clock.png";
import Send from "../../assets/icons/Send.png";
import Draft from "../../assets/icons/Draft.png";
import Spam from "../../assets/icons/Spam.png";
import arrowLeft from "../../assets/icons/arrowLeft.png";
import arrowRight from "../../assets/icons/arrowRight.png";
import Sort from "../../assets/icons/Sort.png";

export const Inbox = () => {
  return (
    <div
      style={{
        width: "70%",
        marginTop: "5%",
      }}
    >
      <WhiteCard height="75%" size="100%">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2%",
          }}
        >
          <div className="left-side">
            <div>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0 35px 0 0",
                }}
              >
                <span>
                  <button>Compose</button>
                </span>
                <li
                  style={{
                    color: "#3C50E0",
                    backgroundColor: "rgba(48, 86, 211, 0.04)",
                  }}
                >
                  <img style={{ width: "13%" }} src={Inboxx} alt="Inbox" />
                  Inbox
                </li>
                <li>
                  <img style={{ width: "10%" }} src={Star} alt="Star" />
                  Starred
                </li>
                <li>
                  <img style={{ width: "10%" }} src={Clock} alt="Clock" />
                  Snoozed
                </li>
                <li>
                  <img style={{ width: "10%" }} src={Send} alt="Send" />
                  Sent
                </li>
                <li>
                  <img style={{ width: "10%" }} src={Draft} alt="Draft" />
                  Drafts
                </li>
                <li>
                  <img style={{ width: "10%" }} src={Spam} alt="Spam" />
                  Spam
                </li>
                <li>
                  <img style={{ width: "10%" }} src={Bin} alt="Bin" />
                  Trash
                </li>
              </ul>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <table>
              <tr>
                <th
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "190%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "4%",
                    }}
                  >
                    <input type="checkbox" />
                    <img
                      style={{ width: "50%", height: "35%" }}
                      src={Bin}
                      alt="Bin"
                    />
                    <img
                      style={{ width: "50%", height: "35%" }}
                      src={Reload}
                      alt="Bin"
                    />
                    <img
                      style={{ width: "50%", height: "70%" }}
                      src={Dots}
                      alt="Bin"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50%", height: "50%" }}
                      src={Search}
                      alt="Search"
                    />
                    <input
                      style={{ border: "none" }}
                      type="text"
                      placeholder="Search for user, email address..."
                    />
                    <img
                      style={{ marginLeft: "3%", width: "50%", height: "50%" }}
                      src={Sort}
                      alt="Sort"
                    />
                  </div>
                </th>
              </tr>
              <tr
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "195%",
                  padding: "3% 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <td>
                  <label
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#64748B",
                      marginRight: "2%",
                      display: "flex",
                      flexDirection: "row",
                      gap: "5%",
                    }}
                  >
                    <input type="checkbox" />
                    Sender
                  </label>
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                  }}
                >
                  Subject
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                  }}
                >
                  Date
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2%",
                  }}
                >
                  <input type="checkbox" />{" "}
                  <img style={{ width: "4%" }} src={Star} alt="Star" />
                  Musharof Chowduhry
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  Some note & Lorem Ipsum in some form.
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  17 Oct, 2024
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2%",
                  }}
                >
                  <input type="checkbox" />{" "}
                  <img style={{ width: "4%" }} src={Star} alt="Star" />
                  Musharof Chowduhry
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  Some note & Lorem Ipsum in some form.
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  17 Oct, 2024
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2%",
                  }}
                >
                  <input type="checkbox" />{" "}
                  <img style={{ width: "4%" }} src={Star} alt="Star" />
                  Musharof Chowduhry
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  Some note & Lorem Ipsum in some form.
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  17 Oct, 2024
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2%",
                  }}
                >
                  <input type="checkbox" />
                  <img style={{ width: "4%" }} src={Star} alt="Star" />
                  Musharof Chowduhry
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  Some note & Lorem Ipsum in some form.
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  17 Oct, 2024
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2%",
                  }}
                >
                  <input type="checkbox" />
                  <img style={{ width: "4%" }} src={Star} alt="Star" />
                  Musharof Chowduhry
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  Some note & Lorem Ipsum in some form.
                </td>
                <td
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#64748B",
                    border: "none",
                    padding: "2% 0",
                  }}
                >
                  17 Oct, 2024
                </td>
              </tr>
              <tr
                style={{
                  width: "190%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "5%",
                  marginLeft: "5%",
                }}
              >
                <p>1-5 of 29</p>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10%" }}
                >
                  <img src={arrowLeft} alt="Arrow Left" />
                  <img src={arrowRight} alt="Arrow Right" />
                </div>
              </tr>
            </table>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
