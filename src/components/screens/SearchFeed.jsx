import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../Index";
import { fetchFromApi } from "../../utils/fetchFromApi";
function SearchFeed() {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        // search based on search querry
        fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
            console.log(data);
            setVideos(data.items);
        });
    }, [searchTerm]);

    return (
        <Box
            p={4}
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
                textAlign="center"
                mb={4}
                sx={{ fontSize: "20px" }}
            >
                Search Results For :
                <span
                    style={{
                        color: "#f31503",
                        marginLeft: "10px",
                    }}
                >
                    {searchTerm}
                </span>
                Videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
}

export default SearchFeed;
