import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Table.css";
import FormLayout from "../../assets/icons/FormLayout.png";
import Forms from "../../assets/icons/Forms.png";
import Apple from "../../assets/icons/Apple.png";
import Mac from "../../assets/icons/Mac.jpg";
import Dell from "../../assets/icons/Dell.jpg";
import Hp from "../../assets/icons/Hp.jpg";
import Paid from "../../assets/icons/Paid.png";
import Unpaid from "../../assets/icons/Unpaid.png";
import Pending from "../../assets/icons/Pending.png";
import Eye from "../../assets/icons/Eye.png";
import Bin from "../../assets/icons/Bin.png";
import Download from "../../assets/icons/Download.png";
import { Colors } from "../../assets/helpers/Colors";
import { useLocation } from "react-router-dom";

export const Table = () => {
  const location = useLocation();

  const layoutInputs = location.state.layoutInputs;
  return (
    <div
      style={{
        width: "100%",
        rowGap: "5%",
        display: "flex",
        flexDirection: "column",
        marginTop: "10%",
        marginBottom: "18%",
      }}
    >
      <WhiteCard height="100%" size="95%">
        <div className="table-container">
          <table>
            <th className="top-channels">
              {layoutInputs.inputValue.selectedItems}
            </th>

            <tr
              style={{
                backgroundColor: "#F7F9FC",
                borderRadius: "3px",
                color: "#64748B",
              }}
            >
              <th style={{ color: Colors.green }}>Screen</th>
              <td style={{ color: Colors.lightblue }}>First Name</td>
              <td style={{ color: Colors.lightblue }}>Last Name</td>
              <td style={{ color: Colors.lightblue }}>Email</td>
              <td style={{ color: Colors.lightblue }}>Subject</td>
            </tr>
            <tr>
              <th style={{ color: Colors.green, fontSize: "18px" }}>
                <img src={FormLayout} alt="FormLayout" />
                FormLayout
              </th>
              <td>{layoutInputs.firstName}</td>
              <td>{layoutInputs.lastName}</td>
              <td>{layoutInputs.email}</td>
              <td>{layoutInputs.subject}</td>
            </tr>
            <tr
              style={{
                backgroundColor: "#F7F9FC",
                borderRadius: "3px",
                color: "#64748B",
              }}
            >
              <th style={{ color: Colors.green }}>Screen</th>
              <td style={{ color: Colors.lightblue }}>Breakfast</td>
              <td style={{ color: Colors.lightblue }}>Lunch</td>
              <td style={{ color: Colors.lightblue }}>Menu for today</td>
            </tr>
            <tr>
              <th style={{ color: Colors.green, fontSize: "18px" }}>
                <img src={Forms} alt="FormElement" />
                FormElement
              </th>
              <td>{layoutInputs.inputValue.breakfast}</td>
              <td>{layoutInputs.inputValue.lunch}</td>
              <td>{layoutInputs.inputValue.menu}</td>
            </tr>
            <tr
              style={{
                backgroundColor: "#F7F9FC",
                borderRadius: "3px",
                color: "#64748B",
              }}
            >
              <th style={{ color: Colors.lightblue }}>Summer Vacation</th>
              <td style={{ color: Colors.lightblue }}>Winter Vacation</td>
              <td style={{ color: Colors.lightblue }}>Start Date</td>
              <td style={{ color: Colors.lightblue }}>End Date</td>
              <td style={{ color: Colors.lightblue }}>Gender</td>
            </tr>
            <tr>
              <th style={{ color: Colors.black }}>
                {layoutInputs.inputValue.summer}
              </th>
              <td>{layoutInputs.inputValue.winter}</td>
              <td>{layoutInputs.inputValue.startdate}</td>
              <td>{layoutInputs.inputValue.enddate}</td>
              <td>{layoutInputs.inputValue.gender}</td>
            </tr>
            <tr
              style={{
                backgroundColor: "#F7F9FC",
                borderRadius: "3px",
                color: "#64748B",
              }}
            >
              <th style={{ color: Colors.lightblue }}>Programming Languages</th>
              <td style={{ color: Colors.lightblue }}>Resume </td>
              <td style={{ color: Colors.lightblue }}>Cover Letter</td>
              <td style={{ color: Colors.lightblue }}>University Location</td>
              <td style={{ color: Colors.lightblue }}>Bachelor Degree</td>
            </tr>
            <tr>
              <th style={{ color: Colors.black }}>
                {layoutInputs.inputValue.languages}
              </th>
              <td>{layoutInputs.inputValue.resume}</td>
              <td>{layoutInputs.inputValue.cv}</td>
              <td>{layoutInputs.inputValue.location}</td>
              <td>{layoutInputs.inputValue.degree}</td>
            </tr>
          </table>
        </div>
      </WhiteCard>
      <WhiteCard height="100%" size="95%">
        <div className="table-container">
          <table
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            <tr>
              <th className="top-channels">Top Channels</th>
            </tr>
            <tr style={{ color: "#64748B" }}>
              <th>Product Name</th>
              <td>Category</td>
              <td>Price</td>
              <td>Sold</td>
              <td>Profit</td>
            </tr>
            <tr>
              <th>
                <img src={Apple} alt="Apple" />
                Apple Watch Series 7
              </th>
              <td>Electronics</td>
              <td>$269</td>
              <td>22</td>
              <td style={{ color: Colors.green }}>$45</td>
            </tr>
            <tr>
              <th>
                <img src={Mac} alt="Mac" />
                Macbook Pro M1
              </th>
              <td>Electronics</td>
              <td>$546</td>
              <td>34</td>
              <td style={{ color: Colors.green }}>$125</td>
            </tr>
            <tr>
              <th>
                <img src={Dell} alt="Dell" />
                Dell Inspiron 15
              </th>
              <td>Electronics</td>
              <td>$443</td>
              <td>64</td>
              <td style={{ color: Colors.green }}>$247</td>
            </tr>
            <tr>
              <th>
                <img src={Hp} alt="Hp" />
                HP Probooj 450
              </th>
              <td>Electronics</td>
              <td>$499</td>
              <td>72</td>
              <td style={{ color: Colors.green }}>$103</td>
            </tr>
          </table>
        </div>
      </WhiteCard>
      <WhiteCard height="100%" size="95%">
        <div className="table-container">
          <table>
            <tr
              style={{
                backgroundColor: "#F7F9FC",
                borderRadius: "3px",
                color: "#1C2434",
              }}
            >
              <td style={{ textAlign: "left" }}>Package</td>
              <td>Invoice date</td>
              <td>Status</td>
              <td style={{ textAlign: "right", paddingRight: "40px" }}>
                Actions
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <p>Free Package</p>
                <p style={{ color: "#64748B" }}>$0.00</p>
              </td>
              <td>Jan 13,2023</td>
              <td>
                <img src={Paid} alt="Paid" />
              </td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginTop: "35px",
                  paddingBottom: "50px",
                  marginRight: "20px",
                  gap: "10px",
                }}
              >
                <img src={Eye} alt="Eye" />
                <img src={Bin} alt="Bin" />
                <img src={Download} alt="Download" />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <p>Standard Package</p>
                <p style={{ color: "#64748B" }}>$0.00</p>
              </td>
              <td>Dec 25,2022</td>
              <td>
                <img src={Paid} alt="Paid" />
              </td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginTop: "35px",
                  marginRight: "20px",
                  paddingBottom: "50px",
                  gap: "10px",
                }}
              >
                <img src={Eye} alt="Eye" />
                <img src={Bin} alt="Bin" />
                <img src={Download} alt="Download" />
              </td>
            </tr>
            <tr>
              <td>
                <p>Business Package</p>
                <p style={{ color: "#64748B" }}>$0.00</p>
              </td>
              <td>March 22,2023</td>
              <td>
                <img src={Unpaid} alt="Unpaid" />
              </td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginTop: "35px",
                  marginRight: "20px",
                  paddingBottom: "50px",
                  gap: "10px",
                }}
              >
                <img src={Eye} alt="Eye" />
                <img src={Bin} alt="Bin" />
                <img src={Download} alt="Download" />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <p>Standard Package</p>
                <p style={{ color: "#64748B" }}>$0.00</p>
              </td>
              <td>Feb 22,2022</td>
              <td>
                <img src={Pending} alt="Pending" />
              </td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginTop: "35px",
                  marginRight: "20px",
                  paddingBottom: "50px",
                  gap: "10px",
                }}
              >
                <img src={Eye} alt="Eye" />
                <img src={Bin} alt="Bin" />
                <img src={Download} alt="Download" />
              </td>
            </tr>
          </table>
        </div>
      </WhiteCard>
    </div>
  );
};
