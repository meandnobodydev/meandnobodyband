import React, { useState } from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import Live from "./Live";
import Contact from "./Contact";

function Loading() {

    return (
        <div>
            <YouTubeEmbed embedId="K-_hIiy0k2c" />
            <Live />
            <Blog />
            <Contact />
        </div>
    )
}

export default Loading;