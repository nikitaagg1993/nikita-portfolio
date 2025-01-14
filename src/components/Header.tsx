import React from "react";
import { TypeAnimation } from "react-type-animation";
import { basic_info } from "../data/basic_info";

export const Header = () => {
  console.log({
    basic_info,
  });
  return (
    <header id="home" style={{ height: window.innerHeight, display: "block" }}>
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <h1 className="iconify header-icon mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
              </svg>
            </h1>
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
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  fontWeight: 400,
                  fontFamily: "'Raleway', sans-serif",
                }}
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
