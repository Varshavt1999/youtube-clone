import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// image
import { logo } from "../../utils/constants";
// components
import { SearchBar } from "../Index";
function NavBar() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{
                position: "sticky",
                backgroundColor: "#000",
                top: 0,
                justifyContent: "space-between",
                color: "#fff",
            }}
        >
            <Link
                to="/youtube-clone"
                style={{ display: "flex", alignItems: "center" }}
            >
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    );
}

export default NavBar;
