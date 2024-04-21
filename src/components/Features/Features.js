import React from "react";

import "./features.css";

function Features() {
  return (
    <section className="features--container">
      <h3>
        A simple app to keep sake all of your most important days, clutter and
        hassel free.
      </h3>
      <ul>
        <li>
          <div className="single--feature">
            <h4>Save your dates</h4>
            <p>
              Birthdays, anniversaries, graduations. Never forget an important
              date again.
            </p>
          </div>
        </li>
        <li>
          <div className="single--feature">
            <h4>Simple, straightforward UI</h4>
            <p>
              Avoid the clutter of traditional calendars, with a simple app to
              allow you to see your dates clearly
            </p>
          </div>
        </li>
        <li>
          <div className="single--feature">
            <h4>Get notified</h4>
            <p>Setup email reminders ahead of your important dates</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="single--feature">
            <h4>Share your dates</h4>
            <p>
              Youngest sibling always forgets your dads birthday? Share it with
              them.
            </p>
          </div>
        </li>
        <li>
          <div className="single--feature">
            <h4>Delete fb</h4>
            <p>
              Keeping fb around to remember all your friends' birthdays? Now you
              can delete it (if you want, don't come for me boomers)
            </p>
          </div>
        </li>
        <li>
          <div className="single--feature">
            <h4>Free tier</h4>
            <p>
              Free to use. Pay only a small fee for notification features if
              required.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Features;
