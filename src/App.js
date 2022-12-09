import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar';
import video from "./websiteteaservid.mp4";
// import logo from "./logoColors/vintagelogo.png";

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
      {/* <img id="vintage-logo" src={logo}></img> */}
      <video id="header-vid" src={video} autoPlay loop muted></video>
      {/* <video id="header-vid" src={video} autoPlay loop muted></video>
      <video id="header-vid" src={video} autoPlay loop muted></video>
      <video id="header-vid" src={video} autoPlay loop muted></video> */}
    </div>
    <NavBar />
    <Main />
    </>
  );
}

export default App;

