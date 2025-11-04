import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { system } from "./lib/theme";

function App() {
  return (
    <ChakraProvider value={system}>
      <Box pt={13} px={13}>
        <Navbar />
      </Box>
      <Box mx={28} pt={8}>
        <Outlet /> {/* Render nested routes here */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
