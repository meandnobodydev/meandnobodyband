import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import YouTubeEmbed from "./YouTubeEmbed";
import Live from "./Live";
import Blog from "./Blog";
import Contact from "./Contact";
// import transPurple from "../transpurple.png";
// import transRed from "../transred.png";
// import transOrange from "../transorange.png";
// import transYellow from "../transyellow.png";
// import transGreen from "../transgreen.png";
// import transBlue from "../transblue.png";
// import transPink from "../transpink.png";

// vidembedID => K-_hIiy0k2c
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