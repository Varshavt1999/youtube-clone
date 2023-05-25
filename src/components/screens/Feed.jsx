import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../Index";
import { fetchFromApi } from "../../utils/fetchFromApi";
function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        // search based on channel querry
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(
            (data) => {
                console.log(data);
                setVideos(data.items);
            }
        );
    }, [selectedCategory]);

    return (
        <Stack
            sx={{
                flexDirection: {
                    sx: "column",
                    md: "row",
                },
            }}
        >
            <Box
                sx={{
                    height: {
                        sx: "auto",
                        md: "100vh",
                    },
                    backgroundColor: "#000",
                    borderRight: "1px solid #3d3d3d",
                    px: {
                        sx: 0,
                        md: 2,
                    },
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    variant="body2"
                    className="copyright"
                    sx={{ mt: 1.5, color: "#fff" }}
                >
                    Copyright 2023 varshas media
                </Typography>
            </Box>
            <Box
                p={2}
                sx={{
                    overflowY: "auto",
                    height: "90vh",
                    flex: 1,
                    backgroundColor: "#000",
                }}
            >
                <Typography
                    color="#fff"
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ fontSize: "20px" }}
                >
                    {selectedCategory}
                    <span
                        style={{
                            color: "#f31503",
                            marginLeft: "10px",
                        }}
                    >
                        Videos
                    </span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;
