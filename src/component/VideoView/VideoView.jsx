import "./VideoView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const videoViewData = [
  {
    key: 0,
    number: 34,
    text: "Buildings Finished Now",
  },
  {
    key: 1,
    number: 12,
    text: "Years Experience",
  },
  {
    key: 3,
    number: 24,
    text: "Awards Won 2023",
  },
];

const VideoView = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="my-container view-video-section position-relative padding-bottom-100">
      <div className="display-flex justify-content-center align-item-center flex-direction-column">
        <div className="position-for-view-video-text display-flex flex-direction-column align-item-center font-weight-500">
          <h5 className="color-orange before-line font-weight-700 width-fit-content margin-bottom-view-video">
            VIDEO VIEW
          </h5>
          <h1 className="width-50 text-align-center color-white font-weight-800 line-height-view-video font-size-md-video-view-header">
            Get Closer View & Different Feeling
          </h1>
        </div>
        <img
          className="width-100 height-90vh style-height-by-haidar"
          src="./../../../public/images/images/contact-bg.jpg"
          alt="contact-bg"
        />
        <img
          className="center-video-frame-photo border-radius-circle width-70 position-absolute"
          src="./../../../public/images/images/video-frame.jpg"
          alt=""
        />
        <span className="video-icon position-absolute-video-icon video-icon-width-100">
          <a href="#" className="video-icon video-icon-width-50">
            <FontAwesomeIcon
              className="color-orange video-icon-font-size"
              icon={faPlay}
            />
          </a>
        </span>
      </div>
      <div className="container">
        <div className="countUp-margin-top display-flex justify-content-space-between gap-30 flex-wrap countUp-space-evenly-md">
          {videoViewData.map((v) => {
            return (
              <>
                <ScrollTrigger
                  onEnter={() => {
                    setCounterOn(true);
                  }}
                  onExit={() => {
                    setCounterOn(false);
                  }}
                >
                  <div
                    key={v.key}
                    className="display-flex justify-content-space-between align-item-center background-color-light-orange styling-counter position-relative"
                  >
                    <span className="position-absolute-orange-circle"></span>
                    {counterOn && (
                      <CountUp
                        className="color-orange font-weight-800 font-size-counter"
                        start={0}
                        end={v.number}
                        duration={2}
                      />
                    )}
                    <p className="margin-zero font-weight-500 style-counter-paragraph">
                      {v.text}
                    </p>
                  </div>
                </ScrollTrigger>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoView;
