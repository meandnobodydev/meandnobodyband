import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import video from "./SITETVS.mp4";
import logo from "./logo_transblack.png"
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";
import { SiLinktree } from "react-icons/si";

// THINGS TO LOOK INTO -
    // - SUBSCRIBE TO EMAILS
    // - OVERALL LAYOUT
    // - BLOG LAYOUT, MODAL??
    // - SHOPIFY

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Main/>} />
    //     <Route path="/test" element={<Test/>} />
    //   </Routes>
    // </Router>
    <>
    <div id="nav-logo-div">
      <img id="logo" src={logo}></img>
    </div>
    <div id="TV-div">
      <a id="TV-link1" className="TVlinks" href="https://shop.meandnobody.com/" target="_blank">SHOP</a>
      <div id="TV-link2" className="TVlinks">LIVE</div>
      {/* <video id="header-vid" src={video} autoPlay loop muted></video>
      <video id="header-vid" src={video} autoPlay loop muted></video>
    <video id="header-vid" src={video} autoPlay loop muted></video> */}
    <video id="header-vid" src={video} type="video/mp4" loop={true} muted={true} autoPlay={true} playsInline={true}></video>
    </div>
    <div id="social-links-div">
      <a href="https://www.instagram.com/meandnobodyband/" className="social-icons" target="_blank"><BsInstagram /></a>
      <a href="https://www.tiktok.com/@meandnobodyband" className="social-icons" target="_blank"><FaTiktok /></a>
      <a href="https://www.facebook.com/people/Me-Nobody/100086959931142/" className="social-icons" target="_blank"><BsFacebook /></a>
      <a href="https://www.youtube.com/channel/UCyRf47aAJI8wIy1AA6-kViQ" className="social-icons" target="_blank"><BsYoutube /></a>
      <a href="https://twitter.com/MeAndNobodyBand" className="social-icons" target="_blank"><BsTwitter /></a>
      <a href="https://linktr.ee/meandnobody" className="social-icons" target="_blank"><SiLinktree /></a>
    </div>
    {/* <NavBar />
    <Main /> */}
    </>
  );
}

export default App;

