import React from "react";
import { TypeAnimation } from "react-type-animation";
import { basic_info } from "../data/basic_info";

export const Header = () => {
  console.log({
    basic_info,
  });
  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">{basic_info.name}</h1>
            <h1 className="mb-0">
              <TypeAnimation
                sequence={[
                  ...basic_info.titles, // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={6}
                style={{ fontSize: "1em", display: "inline-block" }}
              />
            </h1>
            {/* <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
