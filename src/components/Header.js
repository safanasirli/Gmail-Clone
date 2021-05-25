import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__input__caret" />
      </div>

      <div className="header__right">
      <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon/>
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar style={{ width:"30px", height:"30px",alignSelf: "center"}}/>
      </div>
    </div>
  );
};

export default Header;
