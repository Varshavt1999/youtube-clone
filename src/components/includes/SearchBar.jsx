import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";

function SearchBar() {
    return (
        <Paper
            component="form"
            onSubmit={() => {}}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 3,
                boxShadow: "none",
                mr: { sm: 5 },
            }}
        >
            <Input placeholder="Search..." onChange={() => {}} />
            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                <Search />
            </IconButton>
        </Paper>
    );
}
const Input = styled.input`
    width: 350px;
`;
export default SearchBar;
