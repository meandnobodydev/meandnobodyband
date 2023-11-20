import './App.css';
import { useState } from 'react';
import video from "./SITETVS.mp4";
import logo from "./logo_transblack.png"
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter, BsSpotify } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Reviews from './Reviews';
import Live from "./Live.js";
import Contact from './Contact';

function App() {

  const [toggle, setToggle] = useState(false);
  const [comp, setComp] = useState([]);

  function bringBackTVs() {
    setToggle(false);
  }

  function chooseComp(e) {
    if (e.target.id === "TV-link2") {
      setComp(<Live />)
    } else if (e.target.id === "TV-link3") {
      setComp(<Reviews />)
    } else if (e.target.id === "TV-link4") {
      setComp(<Contact />)
    }
    setToggle(true);
  }

  return (
    <>
    <div id="nav-logo-div">
      <img id="logo" src={logo} onClick={bringBackTVs}></img>
    </div>
    <div id="TV-div">
      {toggle ? 
      comp
      :  
      <>      
      <a id="TV-link1" className="TVlinks" href="https://shop.meandnobody.com/" target="_blank">SHOP</a>
      <div id="TV-link2" className="TVlinks" onClick={chooseComp}>LIVE</div>
      <div id="TV-link3" className="TVlinks" onClick={chooseComp}>WATCH</div>
      <div id="TV-link4" className="TVlinks" onClick={chooseComp}>CONTACT</div>
      <a id="TV-link5" className="TVlinks" href="https://hyperfollow.com/meandnobody?_gl=1*1vp28wc*_ga*MjUyNTU3Njk1LjE2NTc1ODAzNTI.*_ga_PQXYYERT25*MTY4NDYwNDc1OC4xLjEuMTY4NDYwNTc3Mi42MC4wLjA.&_ga=2.165198649.769881128.1684602740-252557695.1657580352&_gac=1.162613838.1684602745.CjwKCAjw36GjBhAkEiwAKwIWyQS9WRAA9coTg8HphCxk58RHx-lTg2RkCXKTkkjkSBJnwK8VH20g3BoC86gQAvD_BwE" target="_blank">LISTEN</a>
      <video id="header-vid" src={video} type="video/mp4" loop={true} muted={true} autoPlay={true} playsInline={true}></video>
    </>
    }
    </div>
    <div id="social-links-div">
      <a href="https://www.instagram.com/meandnobodyband/" className="social-icons" target="_blank"><BsInstagram /></a>
      <a href="https://www.tiktok.com/@meandnobodyband" className="social-icons" target="_blank"><FaTiktok /></a>
      <a href="https://www.facebook.com/people/Me-Nobody/100086959931142/" className="social-icons" target="_blank"><BsFacebook /></a>
      <a href="https://www.youtube.com/channel/UCyRf47aAJI8wIy1AA6-kViQ" className="social-icons" target="_blank"><BsYoutube /></a>
      <a href="https://twitter.com/MeAndNobodyBand" className="social-icons" target="_blank"><BsTwitter /></a>
    </div>
    </>
  );
}

export default App;

