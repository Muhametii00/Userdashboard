import "../components/styles/sidebar.css";
import Logo from "../assets/icons/Logo.png";
import Grid from "../assets/icons/Grid.png";
import ProfileLogo from "../assets/icons/ProfileLogo.png";
import Forms from "../assets/icons/Forms.png";
import FormLayout from "../assets/icons/FormLayout.png";
import Table from "../assets/icons/Table.png";
import Inboxx from "../assets/icons/Inboxx.png";
import Invoice from "../assets/icons/Invoice.png";
import Auth from "../assets/icons/Auth.png";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="container">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <h2 className="container-home">Home</h2>
      <ul className="nav">
        <li>
          <img src={Grid} alt="Grid" />
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <img src={ProfileLogo} alt="ProfileLogo" />
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <img src={Forms} alt="Forms" />
          <Link to="/form-element">Form Element</Link>
        </li>
        <li>
          <img src={FormLayout} alt="Forms" />
          <Link to="/form-layout">Form Layout</Link>
        </li>
        <li>
          <img src={Table} alt="Forms" />
          <Link to="/table">Table</Link>
        </li>
        <li>
          <img src={Inboxx} alt="Forms" />
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <img src={Invoice} alt="Forms" />
          <Link to="/invoice">Invoice</Link>
        </li>
        <li>
          <Link to="/alerts">Alerts</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li className="container-auth">
          <img src={Auth} alt="Auth" />
          <h2>Authentication</h2>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/reset-password">Reset Password</Link>
        </li>
      </ul>
    </div>
  );
};
