import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromApi } from "../../utils/fetchFromApi";
// components
import Videos from "../includes/Videos";
import ChannelCard from "../includes/ChannelCard";
function ChannelDetail() {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        // channelDetails
        fetchFromApi(`channels?part=snippet"&id=${id}`).then((data) => {
            setChannelDetail(data.items[0]);
        });
        // channelVideos
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => {
                setVideos(data.items);
            }
        );
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box sx={{ py: "60px" }}>
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,253,217,1) 50%, rgba(252,176,69,1) 100%)",
                        zIndex: 10,
                        height: "300px",
                    }}
                />
                <div style={{ display: "grid", placeItems: "center" }}>
                    <ChannelCard
                        channelDetail={channelDetail}
                        marginTop="-120px"
                    />
                </div>
            </Box>
            <Box display="flex" p="2">
                <Videos videos={videos} />
            </Box>
        </Box>
    );
}

export default ChannelDetail;
