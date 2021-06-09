import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "./firebase";
import "./SendMail.css";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_errors">Subject is required</p>
        )}
        <input
          name="message"
          className="sendMail__message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_errors">Message is required</p>
        )}
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
