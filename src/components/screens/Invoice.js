import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Invoice.css";
import Product from "../../assets/icons/Product.png";

export const Invoice = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "10%",
      }}
    >
      <WhiteCard height="98%" size="100%">
        <div style={{ padding: "5px 25px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#1C2434",
                }}
              >
                From
              </p>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#1C2434",
                }}
              >
                Roger Culhane
              </h2>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#64748B",
                }}
              >
                Email: conctact@example.com
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#64748B",
                }}
              >
                Address: 2972 Westheimer Rd. Santa.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#1C2434",
                }}
              >
                To
              </p>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#1C2434",
                }}
              >
                Cristofer Levin
              </h2>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#64748B",
                }}
              >
                Email: conctact@example.com
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#64748B",
                }}
              >
                Address: New York, USA 2707 Davis Anenue
              </p>
            </div>
            <div>
              <h2
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "22px",
                  color: "#1C2434",
                }}
              >
                Order #15478
              </h2>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #E2E8F0",
              padding: "15px ",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "3% 0%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "3%",
                width: "50%",
              }}
            >
              <img width="80px" height="80px" src={Product} alt="Product" />
              <div
                style={{
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#1C2434",
                    marginBottom: "0",
                  }}
                >
                  Mist Black Triblend
                </p>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "5%",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#64748B",
                  }}
                >
                  <p>Color: White</p>
                  <p>Size: Medium</p>
                </span>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "15%",
                marginRight: "3%",
              }}
            >
              <h4
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#1C2434",
                }}
              >
                Qty: 01
              </h4>
              <h4
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#1C2434",
                }}
              >
                $120.00
              </h4>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "40%" }}>
                <h2
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "22px",
                    color: "#1C2434",
                  }}
                >
                  Shipping Method
                </h2>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "25px",
                    color: "#64748B",
                  }}
                >
                  FedEx - Take up to 3 <br /> working days.
                </p>
              </div>
              <div style={{ width: "60%" }}>
                <h2
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "22px",
                    color: "#1C2434",
                  }}
                >
                  Payment Method
                </h2>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#64748B",
                  }}
                >
                  Apply Pay Mastercard
                </p>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#64748B",
                  }}
                >
                  **** **** **** 5874
                </p>
              </div>
            </div>
            <div
              style={{
                width: "33%",
                marginRight: "5%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #E2E8F0",
                  paddingBottom: "7%",
                }}
              >
                <div>
                  <p
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#1C2434",
                    }}
                  >
                    Subtotal
                  </p>
                  <p
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#1C2434",
                    }}
                  >
                    Shipping Cost (+)
                  </p>
                </div>
                <div>
                  <p>$120.00</p>
                  <p>$10.00</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: "5%",
                }}
              >
                <p>Total</p>
                <p>$130.00</p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "1%",
              marginRight: "3%",
              marginTop: "2%",
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "1px solid #3C50E0",
                borderRadius: "4px",
                color: "#3C50E0",
                padding: "10px 25px",
                margin: "0",
              }}
            >
              Download Invoice
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
              Send Invoice
            </button>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
