import React from "react";
import { Element } from "react-scroll";

import "./history.css";

export const History = ({ name }) => {
  return (
    <Element name={name} className="history">
      <section className="history">
        <h2>Work History</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        <div>
          <div>
            <div>
              <h3>University of Toronto</h3>
              <p>Student</p>
              <p>Jan 1016 - Dec 2021</p>
            </div>
            <div>
              <h3>Certificate of web training</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                fusce tempus etiam et pellentesque. Molestie risus enim neque
                eget dui.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>University of Toronto</h3>
              <p>Student</p>
              <p>Jan 1016 - Dec 2021</p>
            </div>
            <div>
              <h3>Certificate of web training</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                fusce tempus etiam et pellentesque. Molestie risus enim neque
                eget dui.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>University of Toronto</h3>
              <p>Student</p>
              <p>Jan 1016 - Dec 2021</p>
            </div>
            <div>
              <h3>Certificate of web training</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                fusce tempus etiam et pellentesque. Molestie risus enim neque
                eget dui.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
