import Aside from "../components/aside";
import Navbar from "../components/navbar";
import MenuBar from "../components/menubar";
import Cards from "../components/cards";
import "./homepage.css";
const HomePage = () => {
  return (
    <div className="homepage-main-container">
      <Aside />
      <Navbar />
      <img src="https://yt3.googleusercontent.com/M61UD7JKf1Ri97Bfhg_p5eW05SzoFdJZBCZ4ZCfMuZx53DbbWmGbsyiPXAka2hIkt2Hzyf2bqw=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
      style={{
        width:"100%",
        height:"172px"
      }}></img>
      <MenuBar />
      <Cards />
    </div>
  );
};
export default HomePage;
