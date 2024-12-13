import "./menubar.css";
const MenuBar = () => {
  return (
    <div className="menubar-main-container">
      {/* <img className="menubar-item item1" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dyoutube%2Blogo&psig=AOvVaw3G7I_P30PvwbW0amT6H0FC&ust=1733762770983000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMihnuXPmIoDFQAAAAAdAAAAABAE"></img> */}
      <div className="menu-item-container">
        <div className="menubar-item item1">Home</div>
      </div>
      {/* <div className="menubar-item item1">Home</div> */}
      <div className="menubar-item">Videos</div>
      
      <div className="menubar-item">Shorts</div>
      <div className="menubar-item">Live</div>
      <div className="menubar-item">Playlists</div>
      <div className="menubar-item">Posts</div>
    </div>
  );
};
export default MenuBar;
