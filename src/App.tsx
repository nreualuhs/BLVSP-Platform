import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box pt={13} px={13}>
        <Navbar />
      </Box>
      <Outlet /> {/* Render nested routes here */}
    </>
  );
}

export default App;
