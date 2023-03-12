import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routing/AppRouter";
import NavBar from "./components/includes/NavBar";
import { Box } from "@mui/material";
function App() {
    return (
        <Router>
            <Box>
                <NavBar />
                <AppRouter />
            </Box>
        </Router>
    );
}

export default App;
