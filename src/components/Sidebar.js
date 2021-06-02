import React from "react";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SendIcon from "@material-ui/icons/Send";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch } from 'react-redux';
import {openSendMessage} from "../features/mailSlice";

const Sidebar = () => {
  const dispatch= useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" color="blue" />}
        className="sidebar__compose"
        onClick={()=>dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={3} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={3} />
      <SidebarOption Icon={SendIcon} title="Sent" number={3} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={3} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={3} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
