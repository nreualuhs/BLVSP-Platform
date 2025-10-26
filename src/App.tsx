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
      <Box mx={28} pt={8}>
        <Outlet /> {/* Render nested routes here */}
      </Box>
    </>
  );
}

export default App;
