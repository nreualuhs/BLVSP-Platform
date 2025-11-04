import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { Box } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <Box pt={13} px={13}>
        <Navbar />
      </Box>
      <Box mx={28} pt={8}>
        <Outlet /> {/* Render nested routes here */}
      </Box>
    </Provider>
  );
}

export default App;
