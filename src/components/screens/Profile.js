import React, { useState } from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Profile.css";
import ProfileCover from "../../assets/photos/profileCover.png";
import Profilepic from "../../assets/photos/ProfilePicture.png";
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { TwitterIcon } from "../../assets/icons/TwitterIcon";
import { LinkedInIcon } from "../../assets/icons/LinkedInIcon";
import { DribbleIcon } from "../../assets/icons/DribbleIcon";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import camera from "../../assets/icons/camera.png";
import { Colors } from "../../assets/helpers/Colors";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [facebook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [linkedIn, setLinkedIn] = useState(false);
  const [dribble, setDribble] = useState(false);
  const [github, setGithub] = useState(false);
  const navigate = useNavigate();
  const handlefacebook = () => {
    setFacebook(!facebook);
  };
  const handletwitter = () => {
    setTwitter(!twitter);
  };
  const handlelinkedIn = () => {
    setLinkedIn(!linkedIn);
  };
  const handledribble = () => {
    setDribble(!dribble);
  };
  const handlegithub = () => {
    setGithub(!github);
  };

  const handleClick = () => {
    navigate("/form-element");
  };
  return (
    <div
      style={{
        width: "100%",
        marginTop: "10%",
        marginBottom: "7%",
      }}
    >
      <WhiteCard height="95%" size="100%">
        <div className="profile-container">
          <div className="cover-photo">
            <img src={ProfileCover} alt="Profile Cover" />
            <button style={{ backgroundColor: Colors.primary }}>
              <img src={camera} alt="Camera" />
              <p>Edit</p>
            </button>
          </div>
          <div className="ellipse">
            <img
              className="profile-pic"
              width="160px"
              src={Profilepic}
              alt="Profile"
            />
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: Colors.primary,
                borderRadius: "50%",
                position: "absolute",
                textAlign: "center",
                zIndex: "1",
                right: "10%",
                bottom: "10%",
                border: "0",
                cursor: "pointer",
              }}
            >
              <img
                style={{ marginTop: "10%" }}
                width="15px"
                src={camera}
                alt="Camera"
              />
            </button>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <h1
              style={{
                margin: "0",
                fontStyle: "normal",
                fontSize: "24px",
                fontWeight: "500",
                color: "#1C2434",
              }}
            >
              Danish Heilium
            </h1>
            <p
              style={{
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: "500",
                color: "#64748B",
                marginBottom: "3%",
              }}
            >
              Ui/Ux Designer
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                border: "0.8px solid #E2E8F0",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.08)",
                borderRadius: "5px",
                padding: "1% 5%",
                gap: "15%",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <p
                  style={{
                    fontStyle: "normal",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1C2434",
                    margin: "0",
                  }}
                >
                  259
                </p>
                <p
                  style={{
                    borderRight: "1px solid #E2E8F0",
                    paddingRight: "25%",
                    fontStyle: "normal",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#64748B",
                    margin: "0",
                  }}
                >
                  Posts
                </p>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <p
                  style={{
                    fontStyle: "normal",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1C2434",
                    margin: "0",
                  }}
                >
                  129K
                </p>
                <p
                  style={{
                    borderRight: "1px solid #E2E8F0",
                    paddingRight: "17%",
                    fontStyle: "normal",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#64748B",
                    margin: "0",
                  }}
                >
                  Followers
                </p>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <p
                  style={{
                    fontStyle: "normal",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1C2434",
                    margin: "0",
                  }}
                >
                  2K
                </p>
                <p
                  style={{
                    fontStyle: "normal",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#64748B",
                    margin: "0",
                  }}
                >
                  Following
                </p>
              </span>
            </div>
            <p
              style={{
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: "500",
                color: "#1C2434",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            >
              About me
            </p>
            <p
              style={{
                fontStyle: "normal",
                fontSize: "14px",
                fontWeight: "500",
                color: "#64748B",
                margin: "0",
                textAlign: "center",
                width: "65%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere fermentum urna, eu condimentum mauris tempus
              ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
              ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
              pharetra ligula sed, aliquam lacus.
            </p>
            <p
              style={{
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: "500",
                color: "#1C2434",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            >
              Follow me on
            </p>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "15%",
              }}
            >
              <div onClick={handlefacebook}>
                <FacebookIcon
                  id="Facebook"
                  color={facebook ? Colors.primary : Colors.grey}
                />
              </div>
              <div onClick={handletwitter}>
                <TwitterIcon color={twitter ? Colors.primary : Colors.grey} />
              </div>
              <div onClick={handlelinkedIn}>
                <LinkedInIcon color={linkedIn ? Colors.primary : Colors.grey} />
              </div>
              <div onClick={handledribble}>
                <DribbleIcon color={dribble ? Colors.primary : Colors.grey} />
              </div>
              <div onClick={handlegithub}>
                <GithubIcon color={github ? Colors.primary : Colors.grey} />
              </div>
            </span>
          </div>
        </div>
      </WhiteCard>
      <div style={{ float: "right", marginTop: "3%", marginRight: "3%" }}>
        <Button
          onClick={handleClick}
          background={Colors.primary}
          padding="15px"
          border="0"
          radius="4px"
          width="160%"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
