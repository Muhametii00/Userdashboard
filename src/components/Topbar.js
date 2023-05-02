import "./styles/topbar.css";
import Search from "../assets/icons/Search.png";
import Bell from "../assets/icons/Bell.png";
import Notification from "../assets/icons/Notification.png";
import topbar from "../assets/icons/topbar.png";
import Switch from "@mui/material/Switch";
import arrowDown from "../assets/icons/arrowDown.png";

export const Topbar = () => {
  return (
    <div>
      <div className="topbar-container">
        <div className="search-engine">
          <img src={Search} alt="Search" />
          <input type="text" placeholder="Type to search..." />
        </div>
        <div className="right-side">
          <div className="notifications">
            <Switch size="large" />
            <img src={Bell} alt="Bell" />
            <img src={Notification} alt="Notification" />
          </div>
          <div className="profile-name">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <p>Thomas Anree</p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#637381",
                }}
              >
                UX Designer
              </p>
            </div>
            <div className="profile">
              <img src={topbar} alt="Topbar" />
              <img src={arrowDown} alt="ArrowDown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
