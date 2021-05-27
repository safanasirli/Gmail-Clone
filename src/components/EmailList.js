import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from "./Section";
import EmailRow from "./EmailRow";
import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__setting">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__section">
        <Section Icon={InboxIcon} title="Primary " color="red" selected />
        <Section Icon={PeopleIcon} title="Social " color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions " color="green" />
      </div>
      <div className="emailList__list">
      <EmailRow
      title="Indeed"
      subject="Test"
      description= "This is a test"
      time="1a.m"
      />
      <EmailRow
      title="Indeed"
      subject="Test"
      description= "This is a test"
      time="1a.m"
      />
      </div>
    </div>
  );
};

export default EmailList;
