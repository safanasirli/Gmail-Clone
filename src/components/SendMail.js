import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {useDispatch } from "react-redux";
import {closeSendMessage } from "../features/mailSlice";

const SendMail = () => {
  const dispatch=useDispatch();

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={()=>dispatch(closeSendMessage())} />
      </div>
      <form onsubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />

        <input
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          type="text"
          {...register("message", { required: true })}
        />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="container"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
