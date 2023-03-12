import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Feed,
    VideoDetail,
    ChannelDetail,
    SearchFeed,
} from "../components/Index";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id/" element={<VideoDetail />} />
            <Route path="/channel/:id/" element={<ChannelDetail />} />
            <Route path="/video/:searchTerm/" element={<SearchFeed />} />
        </Routes>
    );
}

export default AppRouter;
