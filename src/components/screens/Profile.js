import React from "react";
import WhiteCard from "../Cards.js/WhiteCard";
import "../styles/Profile.css";
import ProfileCover from "../../assets/photos/profileCover.png";
import Profilepic from "../../assets/photos/ProfilePicture.png";
import FacebookIcon from "../../assets/icons/FacebookIcon.png";
import TwitterIcon from "../../assets/icons/TwitterIcon.png";
import LinkedinIcon from "../../assets/icons/LinkedinIcon.png";
import DribbleIcon from "../../assets/icons/DribbleIcon.png";
import GithubIcon from "../../assets/icons/GithubIcon.png";
import camera from "../../assets/icons/camera.png";

export const Profile = () => {
  return (
    <div
      style={{
        width: "74%",
        marginTop: "3%",
        marginBottom: "5%",
      }}
    >
      <WhiteCard height="100%" size="100%">
        <div className="profile-container">
          <div className="cover-photo">
            <img src={ProfileCover} alt="Profile Cover" />
            <button>
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
                backgroundColor: "#3C50E0",
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
                gap: "25%",
                marginBottom: "3%",
              }}
            >
              <img src={FacebookIcon} alt="Facebook" />
              <img src={TwitterIcon} alt="Twitter" />
              <img src={LinkedinIcon} alt="Linkedin" />
              <img src={DribbleIcon} alt="Dribble" />
              <img src={GithubIcon} alt="Github" />
            </span>
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};
