import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
    Feed,
    VideoDetail,
    ChannelDetail,
    SearchFeed,
} from "../components/Index";

function AppRouter() {
    const location = useLocation();
    const Navigate = useNavigate();
    return (
        // <Routes key={location.pathname} location={location}>
        //     <Route
        //         path="/"
        //         element={<Navigate to="/youtube-clone" replace />}
        //     />
        //     <Route path="/youtube-clone" element={<Feed />} />
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id/" element={<VideoDetail />} />
            <Route path="/channel/:id/" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm/" element={<SearchFeed />} />
        </Routes>
    );
}

export default AppRouter;
