import { ArrowDropDown, Notifications, Search, CloseSharp } from "@material-ui/icons";
import { useState, useRef, useEffect } from "react";
import "./navbar copy.scss";

import { Link } from "react-router-dom";

import ListNotifications from "../notifications/ListNotifications"

const NavbarCopy = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isIntputChange, setIsInputChange] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const inputRef = useRef("");

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [isSearchClicked]);


  const handleSearchClick = () => {
    setIsSearchClicked(true);
  }

  const handleSearchBlur = () => {
    setIsSearchClicked(false);
    inputRef.current.value = "";
  }

  const handleCloseClick = () => {
    inputRef.current.value = "";
    setIsSearchClicked(false);
    setIsInputChange(false);
  }

  const handleInputChange = () => {
    setIsInputChange(true);
  }

  const handleHoverNotifications = () => {
    setIsHovered(true);
  }

  const handleLeaveNotifications = () => {
    setIsHovered(false);
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/home" className="link">
            <span>Trang chủ</span>
          </Link>
          <Link to="/series" className="link">
            <span>Phim T.hình</span>
          </Link>
          <Link to="movies" className="link">
            <span>Phim</span>
          </Link>
          <span>Mới & Phổ biến</span>
          <span>Upload phim</span>
          <span>Báo cáo</span>
        </div>
        <div className="right">
          <div className="search" style={{
            border: (isSearchClicked && `1px solid white`),
            backgroundColor: (isSearchClicked && `rgba(0, 0, 0, .75)`)
          }}>
            <Search className="icon" onClick={handleSearchClick} />
            <div className={`input-wrapper ${isSearchClicked ? "active" : "non-active"} `} >
              <input type="text" placeholder="Phim, diễn viên, thể loại..." ref={inputRef} onChange={handleInputChange} onBlur={handleSearchBlur} />
              <CloseSharp className="icon" onClick={handleCloseClick} style={{ visibility: isIntputChange ? "visible" : "hidden" }} />
            </div>
          </div>
          <div className="notifications-wrapper" onMouseLeave={handleLeaveNotifications} >
            <Notifications className="icon notifications-wrapper" onMouseOver={handleHoverNotifications} />
            {isHovered && <ListNotifications />}
          </div>
          <div className="profile-wrapper">
            <img
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <div className="profile">
              <ArrowDropDown className="icon" style={{ marginLeft: 5 }} />
              <div className="options">
                <Link to="/manage" className="changeColor">
                  <span>Settings</span>
                </Link>
                <Link to="/login" className="changeColor">
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default NavbarCopy;
