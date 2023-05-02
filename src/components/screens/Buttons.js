import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Buttons.css";
import Envelope from "../../assets/icons/Envelope.png";
import BlueEnvelope from "../../assets/icons/BlueEnvelope.png";
import Cart from "../../assets/icons/Cart.png";
import BlueCart from "../../assets/icons/BlueCart.png";
import UserLove from "../../assets/icons/UserLove.png";
import BlueUserLove from "../../assets/icons/BlueUserLove.png";
import { Button } from "../shared/Button";

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
            <h2 className="card-title">Normal Button</h2>
          </div>
          <div style={{ padding: "20px " }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "6%",
                marginBottom: "3%",
              }}
            >
              <Button
                width="10%"
                padding="10px"
                background="#3C50E0"
                border="0"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="#3C50E0"
                border="0"
                radius="5px"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="#3C50E0"
                border="0"
                radius="30px"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="transparent"
                border="1px solid #3C50E0"
                color="#3C50E0"
                radius="5px"
              >
                Button
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "6%",
                marginBottom: "3%",
              }}
            >
              <Button
                width="10%"
                padding="10px"
                background="#10B981"
                border="0"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="#10B981"
                border="0"
                radius="5px"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="#10B981"
                border="0"
                radius="30px"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="transparent"
                border="1px solid #10B981"
                color="#10B981"
                radius="5px"
              >
                Button
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "6%",
              }}
            >
              <Button
                width="10%"
                padding="10px"
                background="#1C2434"
                border="0"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="#1C2434"
                border="0"
                radius="5px"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="#1C2434"
                border="0"
                radius="30px"
              >
                Button
              </Button>
              <Button
                width="10%"
                padding="10px"
                background="transparent"
                border="1px solid #1C2434"
                color="#1C2434"
                radius="5px"
              >
                Button
              </Button>
            </div>
          </div>
        </div>
      </WhiteCard>
      <WhiteCard height="55%" size="95%">
        <div>
          <div>
            <h2 className="card-title">Button With Icon</h2>
          </div>
          <div style={{ padding: "20px " }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2%",
                marginBottom: "3%",
              }}
            >
              <Button
                width="20%"
                padding="10px"
                background="#3C50E0"
                border="0"
              >
                <p>
                  <img src={Envelope} alt="Envelope" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="#10B981"
                border="0"
                radius="5px"
              >
                <p>
                  <img src={Envelope} alt="Envelope" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="#1C2434"
                border="0"
                radius="30px"
              >
                <p>
                  <img src={Envelope} alt="Envelope" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="transparent"
                border="1px solid #3C50E0"
                color="#3C50E0"
                radius="5px"
              >
                <p>
                  <img src={BlueEnvelope} alt="Envelope" /> Button With Icon
                </p>
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2%",
                marginBottom: "3%",
              }}
            >
              <Button
                width="20%"
                padding="10px"
                background="#3C50E0"
                border="0"
              >
                <p>
                  <img src={Cart} alt="Cart" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="#10B981"
                border="0"
                radius="5px"
              >
                <p>
                  <img src={Cart} alt="Cart" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="#1C2434"
                border="0"
                radius="30px"
              >
                <p>
                  <img src={Cart} alt="Cart" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="transparent"
                border="1px solid #3C50E0"
                color="#3C50E0"
                radius="5px"
              >
                <p>
                  <img src={BlueCart} alt="BlueCart" /> Button With Icon
                </p>
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2%",
              }}
            >
              <Button
                width="20%"
                padding="10px"
                background="#3C50E0"
                border="0"
              >
                <p>
                  <img src={UserLove} alt="UserLove" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="#10B981"
                border="0"
                radius="5px"
              >
                <p>
                  <img src={UserLove} alt="UserLove" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="#1C2434"
                border="0"
                radius="30px"
              >
                <p>
                  <img src={UserLove} alt="UserLove" /> Button With Icon
                </p>
              </Button>
              <Button
                width="20%"
                padding="10px"
                background="transparent"
                border="1px solid #3C50E0"
                color="#3C50E0"
                radius="5px"
              >
                <p>
                  <img src={BlueUserLove} alt="BlueUserLove" /> Button With Icon
                </p>
              </Button>
            </div>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
