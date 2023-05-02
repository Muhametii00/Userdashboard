import "./App.css";
import { Routes } from "./Navigation/Routes";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F1F5F9",
        gap: "5%",
      }}
    >
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "74%",
        }}
      >
        <Topbar />
        <Routes />
      </div>
    </div>
  );
}

export default App;
