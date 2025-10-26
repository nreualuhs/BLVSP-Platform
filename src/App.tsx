// App.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Render nested routes here */}
    </>
  );
}

export default App;
