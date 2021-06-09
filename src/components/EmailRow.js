import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlineIcon from "@material-ui/icons/StarBorderOutlined";
import { selectMail } from "../features/mailSlice";
import "./EmailRow.css";

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
      </div>
      <div className="emailRow__container">
        <h3 className="emailRow__title">{title}</h3>
        <div className="emailRow__message">
          <h4>
            {subject}
            <span className="emailRow__description">- {description}</span>
          </h4>
        </div>
        <p className="emailRow__time">{time}</p>
      </div>
    </div>
  );
};
export default EmailRow;
