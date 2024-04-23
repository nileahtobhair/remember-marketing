import React from "react";
import { useNavigate } from "react-router-dom";

import "./interest.css";

function Interest({ success = false }) {
  const navigate = useNavigate();
  const handleSubmission = e => {
    e.preventDefault();
    const formElement = document.getElementById("remember-early");
    const formData = new FormData(formElement);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => navigate("/success"))
      .catch(error => {
        alert(error);
      });
  };
  return (
    <section className="interest--container">
      <div className="interest--heading">
        <h1>
          Always
          <span className="highlight">{" remember \n"}</span>
          your most important dates
        </h1>
      </div>
      <div className="interest--subtext">
        <p>
          {
            "Save and collect the dates most important to you and your loved ones. Setup date reminders so you’ll never miss a special day again."
          }
          {!success && (
            <>
              {
                " Remember remember is coming soon! Submit your email below to get notified when we go live."
              }
            </>
          )}
        </p>
      </div>
      {success ? (
        <div className="interest--success">
          {
            "Thanks for submitting your email. We will be in touch when we go live."
          }
        </div>
      ) : (
        <form
          name="remember-early"
          id="remember-early"
          method="POST"
          data-netlify="true"
          action="/success"
          onSubmit={handleSubmission}
        >
          <input type="hidden" name="form-name" value="remember-early" />
          <p className="form--input">
            <label>Your Email </label>
            <input required type="email" name="email" />
          </p>
          <p>
            <button type="submit">Get early access</button>
          </p>
        </form>
      )}
    </section>
  );
}

export default Interest;
