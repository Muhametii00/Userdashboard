import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Buttons.css";
import Envelope from "../../assets/icons/Envelope.png";
import BlueEnvelope from "../../assets/icons/BlueEnvelope.png";
import Cart from "../../assets/icons/Cart.png";
import BlueCart from "../../assets/icons/BlueCart.png";
import UserLove from "../../assets/icons/UserLove.png";
import BlueUserLove from "../../assets/icons/BlueUserLove.png";

export const Buttons = () => {
  return (
    <div
      style={{
        width: "100%",
        rowGap: "5%",
        display: "flex",
        flexDirection: "column",
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      <WhiteCard height="55%" size="95%">
        <div>
          <div>
            <p
              style={{
                padding: "15px 20px",
                borderBottom: "1px solid #E2E8F0",
                margin: "0px",
                color: "#1C2434",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Normal Button
            </p>
          </div>
          <div style={{ padding: "20px " }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-1"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-2"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-3"
              >
                Button
              </button>
              <button className="button-4">Button</button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
              }}
            >
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-1"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-2"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-3"
              >
                Button
              </button>
              <button
                style={{ border: "1px solid #10B981", color: "#10B981" }}
                className="button-4"
              >
                Button
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
              }}
            >
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-1"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-2"
              >
                Button
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-3"
              >
                Button
              </button>
              <button
                style={{ border: "1px solid #1C2434", color: "#1C2434" }}
                className="button-4"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </WhiteCard>
      <WhiteCard height="100%" size="95%">
        <div>
          <div>
            <p
              style={{
                padding: "15px 20px",
                borderBottom: "1px solid #E2E8F0",
                margin: "0px",
                color: "#1C2434",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Button With Icon
            </p>
          </div>
          <div style={{ padding: "20px " }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0", padding: "5px 35px" }}
                className="button-1"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={Envelope} alt="Envelope" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{ backgroundColor: "#10B981", borderRadius: "0" }}
                className="button-2"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={Envelope} alt="Envelope" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{ backgroundColor: "#1C2434", borderRadius: "0" }}
                className="button-3"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={Envelope} alt="Envelope" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button style={{ borderRadius: "0" }} className="button-4">
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={BlueEnvelope} alt="Envelope" />
                  <p> Button With Icon</p>
                </div>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-2"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={Cart} alt="Cart" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-2"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={Cart} alt="Cart" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-2"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={Cart} alt="Cart" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #3C50E0",
                  color: "#3C50E0",
                }}
                className="button-2"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={BlueCart} alt="BlueCart" />
                  <p> Button With Icon</p>
                </div>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3%",
              }}
            >
              <button
                style={{ backgroundColor: "#3C50E0" }}
                className="button-3"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={UserLove} alt="UserLove" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{ backgroundColor: "#10B981" }}
                className="button-3"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={UserLove} alt="UserLove" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{ backgroundColor: "#1C2434" }}
                className="button-3"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={UserLove} alt="UserLove" />
                  <p> Button With Icon</p>
                </div>
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #3C50E0",
                  color: "#3C50E0",
                }}
                className="button-3"
              >
                <div
                  style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5%",
                  }}
                >
                  <img src={BlueUserLove} alt="BlueUserLove" />
                  <p> Button With Icon</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
