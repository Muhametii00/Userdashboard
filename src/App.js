import "./App.css";
import { Routes } from "./Navigation/Routes";
import { Sidebar } from "./components/Sidebar";

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
      <Routes />
    </div>
  );
}

export default App;
