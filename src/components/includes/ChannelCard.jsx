import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../../utils/constants";
function ChannelCard({ channelDetail, marginTop }) {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                width: {
                    md: "300px",
                    xs: "100%",
                },
                display: "grid",
                placeItems: "center",
                marginTop, //marginTop: marginTop,
                height: "100%",
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    <CardMedia
                        image={
                            channelDetail?.snippet?.thumbnails?.high?.url ||
                            demoProfilePicture
                        }
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: "50%",
                            width: "150px",
                            height: "150px",
                            mb: 2,
                            border: "1px solid #e3e3e3",
                        }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle
                            sx={{ fontSize: 14, color: "gray", ml: "5px" }}
                        />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(
                                channelDetail?.statistics?.subscriberCount
                            ).toLocaleString()}{" "}
                            Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
}

export default ChannelCard;
