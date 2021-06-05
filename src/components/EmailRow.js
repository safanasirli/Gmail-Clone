import React from "react";
import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlineIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlineIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./EmailRow.css";
import { selectMail } from "../features/mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlineIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow__description">{time}</p>
    </div>
  );
};
export default EmailRow;
