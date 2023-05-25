import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos }) {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
            {videos.map((item, i) => (
                <Box key={i}>
                    {item.id.videoId && <VideoCard videoDetail={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
