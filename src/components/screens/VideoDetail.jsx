import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
// constants
import { fetchFromApi } from "../../utils/fetchFromApi";
// components
import Videos from "../includes/Videos";
function VideoDetail() {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);
    useEffect(() => {
        // video details
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data.items[0]);
        });
        // suggested videos
        fetchFromApi(
            `search?part=snippet&relatedToVideoId=${id}&type=video`
        ).then((data) => {
            setRelatedVideos(data.items);
        });
    }, [id]);
    if (!videoDetail?.snippet) return "Loading...";
    const {
        snippet: { title, channelId, channelTitle },
        statistics: { likeCount, viewCount },
    } = videoDetail;
    console.log(videoDetail, "videoDetail");
    return (
        <Box minHeight="95vh">
            <Stack
                direction={{
                    xs: "column",
                    md: "row",
                }}
            >
                <Box flex={1}>
                    <Box
                        sx={{ width: "100%", position: "sticky", top: "86px" }}
                    >
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <Typography
                            variant="h6"
                            color="#fff"
                            fontWeight="bold"
                            pt={2}
                            pb={1}
                            px={2}
                        >
                            {title}
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            px={2}
                            sx={{ color: "#fff" }}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography
                                    variant={{ sm: "subtitle2", md: "h6" }}
                                    color="#fff"
                                    pb={2}
                                >
                                    {channelTitle}
                                    <CheckCircle
                                        sx={{
                                            fontSize: "12px",
                                            color: "gray",
                                            ml: "5px",
                                        }}
                                    />
                                </Typography>
                            </Link>
                            <Stack
                                direction="row"
                                gap="20px"
                                alignItems="center"
                            >
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.7 }}
                                >
                                    {parseInt(viewCount).toLocaleString()} Views
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.7 }}
                                >
                                    {parseInt(likeCount).toLocaleString()} Likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Videos videos={relatedVideos} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
}

export default VideoDetail;
