//Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QuizIcon from "@mui/icons-material/Quiz";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const SideBar = () => {
  return (
    <div className="sidebar" >
      {/* <div className="logo">Anime Fandom</div> */}
      <ul className="sidebar-items">
        <li>
          <Link to="/">
            <HomeRoundedIcon style={{ color: "white", fontSize: "60px" }} />
          </Link>
        </li>
        <li>
          <Link to="/quiz">
          <Tooltip
              title="quiz"
              arrow
              placement="right"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              followCursor
              style={{ fontSize: "60px" }}>
            <QuizIcon style={{ color: "white", fontSize: "60px" }} />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to="/merchs">
          <Tooltip
              title="merchs"
              arrow
              placement="right"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              followCursor
              style={{ fontSize: "60px" }}
            >
            <StorefrontRoundedIcon
              style={{ color: "white", fontSize: "60px" }}
            />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to="/Bucket">
            <Tooltip
              title="Bucket"
              arrow
              placement="right"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              followCursor
              style={{ fontSize: "60px" }}
            >
              <SmartDisplayRoundedIcon
                style={{ color: "white", fontSize: "60px" }}
              />
            </Tooltip>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
