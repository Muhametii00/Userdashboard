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
import { NavLink } from "react-router-dom";
import { Colors } from "../assets/helpers/Colors";

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
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <img src={ProfileLogo} alt="ProfileLogo" />
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <img src={Forms} alt="Forms" />
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/form-element"
          >
            Form Element
          </NavLink>
        </li>
        <li>
          <img src={FormLayout} alt="Forms" />
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/form-layout"
          >
            Form Layout
          </NavLink>
        </li>
        <li>
          <img src={Table} alt="Forms" />
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/table"
          >
            Table
          </NavLink>
        </li>
        <li>
          <img src={Inboxx} alt="Forms" />
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/inbox"
          >
            Inbox
          </NavLink>
        </li>
        <li>
          <img src={Invoice} alt="Forms" />
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/invoice"
          >
            Invoice
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/alerts"
          >
            Alerts
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/buttons"
          >
            Buttons
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/calendar"
          >
            Calendar
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
        <li className="container-auth">
          <img src={Auth} alt="Auth" />
          <h2>Authentication</h2>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/sign-in"
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/sign-up"
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: Colors.lightgrey }
            }
            to="/reset-password"
          >
            Reset Password
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
