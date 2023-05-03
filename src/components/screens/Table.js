import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Table.css";
import Google from "../../assets/icons/Google.png";
import Twitter from "../../assets/icons/Twitter.png";
import Github from "../../assets/icons/Github.png";
import Vimeo from "../../assets/icons/Vimeo.png";
import Facebook from "../../assets/icons/Facebook.png";
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

export const Table = () => {
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
            <th className="top-channels">Top Channels</th>

            <tr
              style={{
                backgroundColor: "#F7F9FC",
                borderRadius: "3px",
                color: "#64748B",
              }}
            >
              <th>Source</th>
              <td>Visitors</td>
              <td>Revenues</td>
              <td>Sales</td>
              <td>Conversion</td>
            </tr>
            <tr>
              <th>
                <img src={Google} alt="Google" />
                Google
              </th>
              <td>3.5K</td>
              <td style={{ color: Colors.green }}>$5,768</td>
              <td>590</td>
              <td style={{ color: Colors.lightblue }}>4.8%</td>
            </tr>
            <tr>
              <th>
                <img src={Twitter} alt="Twitter" />
                Twitter
              </th>
              <td>2.2K</td>
              <td style={{ color: Colors.green }}>$4,635</td>
              <td>467</td>
              <td style={{ color: Colors.lightblue }}>4.3%</td>
            </tr>
            <tr>
              <th>
                <img src={Github} alt="Github" />
                Github
              </th>
              <td>2.1K</td>
              <td style={{ color: Colors.green }}>$4,290</td>
              <td>420</td>
              <td style={{ color: Colors.lightblue }}>3.7%</td>
            </tr>
            <tr>
              <th>
                <img src={Vimeo} alt="Vimeo" />
                Vimeo
              </th>
              <td>1.5K</td>
              <td style={{ color: Colors.green }}>$3,580</td>
              <td>389</td>
              <td style={{ color: Colors.lightblue }}>2.5%</td>
            </tr>
            <tr>
              <th>
                <img src={Facebook} alt="Facebook" />
                Facebook
              </th>
              <td>1.2K</td>
              <td style={{ color: Colors.green }}>$2,740</td>
              <td>230</td>
              <td style={{ color: Colors.lightblue }}>1.9%</td>
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
