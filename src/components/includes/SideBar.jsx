import React from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";
function SideBar({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: {
                    xs: "auto",
                    md: "95%",
                },
                flexDirection: {
                    md: "column",
                },
            }}
        >
            {categories.map((category, i) => (
                <Button
                    selectedCategory={selectedCategory}
                    onClick={() => setSelectedCategory(category.name)}
                    key={i}
                    style={{
                        backgroundColor:
                            selectedCategory === category.name
                                ? "#fc1509"
                                : "transparent",
                        marginRight: "15px",
                    }}
                >
                    <span
                        style={{
                            color:
                                selectedCategory === category.name
                                    ? "#fff"
                                    : "red",
                            marginRight: "15px",
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{
                            color: "#fff",
                            opacity:
                                selectedCategory === category.name
                                    ? "1"
                                    : "0.8",
                        }}
                    >
                        {category.name}
                    </span>
                </Button>
            ))}
        </Stack>
    );
}
const Button = styled.button`
    font-weight: bold;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 7px 15px;
    margin: 10px 0px;
    border-radius: 20px;
    transition: all 0.3s ease;
    &:hover {
        background-color: #fc1503;
        color: white;
        & span {
            color: #fff !important;
        }
    }
    @media screen and (max-width: 900px) {
        margin: 10px;
    }
`;
export default SideBar;
