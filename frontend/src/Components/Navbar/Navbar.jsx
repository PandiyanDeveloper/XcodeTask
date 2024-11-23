import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navStyle.css";
import LogoName from "../../Assets/Asset.js/logoName.jpg";
import profileicon from "../../Assets/Asset.js/profileimage.jpeg";
import instaReel from "../../Assets/Asset.js/insta_reels.png";
import heart from "../../Assets/Asset.js/heart.png";
import more from "../../Assets/Asset.js/more.png";
import chat from "../../Assets/Asset.js/chat.png";
import hut from "../../Assets/Asset.js/hut.png";
import loupe from "../../Assets/Asset.js/loupe.png";
import compass from "../../Assets/Asset.js/compass.png";
import menu from "../../Assets/Asset.js/menu.png";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    setActiveNav(location.pathname);
  }, [location.pathname]);
  const aNavs = [
    {
      path: "/home",
      icon: <img src={hut} className="nav_icon_image" />,
      label: "Home"
    },
    {
      path: "/search",
      icon: <img src={loupe} className="nav_icon_image" />,
      label: "Search"
    },
    {
      path: "/explore",
      icon: <img src={compass} className="nav_icon_image" />,
      label: "Explore"
    },
    {
      path: "/reels",
      icon: <img src={instaReel} className="nav_icon_image" />,
      label: "Reels"
    },
    {
      path: "/messages",
      icon: <img src={chat} className="nav_icon_image" />,
      label: "Messages"
    },
    {
      path: "/notifications",
      icon: <img src={heart} className="nav_icon_image" />,
      label: "Notifications"
    },
    {
      path: "/create",
      icon: <img src={more} className="nav_icon_image" />,
      label: "Create"
    },
    {
      path: "/profile",
      icon: <img src={profileicon} className="profile-btn_icon" />,
      label: "Profile"
    }
  ];
  return (
    <div className="nav_container">
      <div className="logo_name_container">
        <img src={LogoName} title="Instagram" alt="Instagram"></img>
      </div>
      <div className="nav_link_container">
        {aNavs.map((nav) => {
          return (
            <div
              className={`nav_div ${activeNav === nav.path ? "activ_nav" : ""}`}
              onClick={() => {
                setActiveNav(nav.path);
                navigate(nav.path);
              }}
            >
              <span className="nav_icon">{nav.icon}</span>
              <div className="nav_label">{nav.label}</div>
            </div>
          );
        })}
      </div>
      <div className="nav_menu nav_div">
        <span className="nav_icon">
          <img src={menu} className="nav_icon_image" />
        </span>
        <div className="nav_label">More</div>
      </div>
    </div>
  );
};
export default Navbar;
