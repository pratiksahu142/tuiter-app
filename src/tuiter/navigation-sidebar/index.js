import React from "react";
import { useSelector } from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {
  FaBell,
  FaBookmark,
  FaCompass,
  FaEllipsisH,
  FaEnvelope,
  FaHome,
  FaList, FaLock,
  FaUser, FaPen
} from 'react-icons/fa';

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const { currentUser } = useSelector((state) => state.user);

  return (
      <div className="list-group">
        <Link to={"/tuiter/home"}
              className={`list-group-item ${active === "home" ? "active"
                  : ""}`}>
          <FaHome/> Home
        </Link>
        <Link to={"/tuiter/explore"}
              className={`list-group-item ${active === "explore" ? "active"
                  : ""}`}>
          <FaCompass/> Explore
        </Link>
        <Link to={"/tuiter/notifications"}
              className={`list-group-item ${active === "notifications"
                  ? "active" : ""}`}>
          <FaBell/> Notifications
        </Link>
        <Link to={"/tuiter/messages"}
              className={`list-group-item ${active === "messages" ? "active"
                  : ""}`}>
          <FaEnvelope/> Messages
        </Link>
        <Link to={"/tuiter/bookmarks"}
              className={`list-group-item ${active === "bookmarks" ? "active"
                  : ""}`}>
          <FaBookmark/> Bookmarks
        </Link>
        <Link to={"/tuiter/lists"}
              className={`list-group-item ${active === "lists" ? "active"
                  : ""}`}>
          <FaList/> Lists
        </Link>
        <Link to={"/tuiter/more"}
              className={`list-group-item ${active === "more" ? "active"
                  : ""}`}>
          <FaEllipsisH/> More
        </Link>

        {!currentUser && <Link className={`list-group-item ${active === "login" ? "active"
            : ""}`} to="/tuiter/login"><FaLock/>   Login   </Link>}
        {!currentUser && <Link className={`list-group-item ${active === "register" ? "active"
            : ""}`} to="/tuiter/register"><FaPen/>  Register</Link>}
        { currentUser && <Link className={`list-group-item ${active === "profile" ? "active"
            : ""}`} to="/tuiter/profile"><FaUser/>  Profile </Link>}
      </div>

  );
};
export default NavigationSidebar;