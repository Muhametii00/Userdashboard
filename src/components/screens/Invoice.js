import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Invoice.css";
import Product from "../../assets/icons/Product.png";

export const Invoice = () => {
  return (
    <div
      style={{
        width: "70%",
        marginTop: "5%",
      }}
    >
      <WhiteCard height="75%" size="100%">
        <div style={{ padding: "0px 15px" }}>
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
                  lineHeight: "24px",
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
                  lineHeight: "30px",
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
                  lineHeight: "24px",
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
                  lineHeight: "24px",
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
                  lineHeight: "24px",
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
                  lineHeight: "30px",
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
                  lineHeight: "24px",
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
                  lineHeight: "24px",
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
                  lineHeight: "30px",
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
              padding: "5px 15px",
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
                gap: "3%",
                width: "50%",
              }}
            >
              <img width="80px" height="80px" src={Product} alt="Product" />
              <div style={{ width: "100%" }}>
                <p>Mist Black Triblend</p>
                <span
                  style={{ display: "flex", flexDirection: "row", gap: "5%" }}
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
              <h4>Qty: 01</h4>
              <h4>$120.00</h4>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </WhiteCard>
    </div>
  );
};
