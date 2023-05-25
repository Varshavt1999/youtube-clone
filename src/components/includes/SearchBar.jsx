import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); //usually when we submit a form we reload the page.in react js we dont want to do that. and since that is a difault behaviour of browser we have to use e.preventDefault()
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    };
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 3,
                boxShadow: "none",
                mr: { sm: 5 },
            }}
        >
            <input
                placeholder="Search..."
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                value={searchTerm}
                style={{ width: "350px" }}
            />
            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
