import React from "react";

import "./interest.css";

function Interest() {
  return (
    <section className="interest--container">
      <div className="interest--heading">
        <p>
          Always
          <span className="highlight">{" remember \n"}</span>
          your most important dates
        </p>
      </div>
      <p className="interest--subtext">
        {
          "Remember remember is coming soon! Save and collect the dates most important to you and your loved ones. Setup date reminders so you’ll never miss a special day again."
        }
      </p>
      <form name="remember-early" method="POST" data-netlify="true">
        <p className="form--input">
          <label>Your Email </label>
          <input type="email" name="email" />
        </p>
        <p>
          <button type="submit">Get early access</button>
        </p>
      </form>
    </section>
  );
}

export default Interest;
