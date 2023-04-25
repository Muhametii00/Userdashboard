import "./styles/topbar.css";
import Search from "../assets/icons/Search.png";
import Bell from "../assets/icons/Bell.png";
import Notification from "../assets/icons/Notification.png";

export const Topbar = () => {
  return (
    <div>
      <div className="topbar-container">
        <div className="search-engine">
          <img src={Search} alt="Search" />
          <input type="text" placeholder="Type to search..." />
        </div>
        <div className="notifications">
          <img src={Bell} alt="Bell" />
          <img src={Notification} alt="Notification" />
        </div>
        <div className="profile-name"></div>
        <div className="profile-pic"></div>
      </div>
    </div>
  );
};
