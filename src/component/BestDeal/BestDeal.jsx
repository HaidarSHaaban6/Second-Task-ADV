import { useState } from "react";
import "./BestDeal.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

let buttonData = [
  {
    id: 1,
    buttonInfo: "Appartment",
    active: true,
    totalFlatSpace: "185 m2",
    floorNumber: "26th",
    numberOfRooms: 4,
    parkingAvailable: "yes",
    paymentProcess: "Bank",
    img: "/public/images/images/deal-01.jpg",
    p1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, adipisci voluptatum, commodi tenetur ad cum ratione repudiandae rerum amet necessitatibus sunt tempora.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
  },
  {
    id: 2,
    buttonInfo: "Villa House",
    active: false,
    totalFlatSpace: "320 m2",
    floorNumber: "44th",
    numberOfRooms: 6,
    parkingAvailable: "Yes",
    paymentProcess: "Bank",
    img: "/public/images/images/deal-02.jpg",
    p1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto veritatis odio eos asperiores tempore vel beatae non quidem magnam dignissimos libero natus perspiciatis excepturi recusandae.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
  },
  {
    id: 3,
    buttonInfo: "Penthouse",
    active: false,
    totalFlatSpace: "250 m2",
    floorNumber: "26th",
    numberOfRooms: 5,
    parkingAvailable: "yes",
    paymentProcess: "Bank",
    img: "/public/images/images/deal-03.jpg",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui ipsam natus quibusdam sint earum quidem velit.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
  },
];

const BestDeal = () => {
  const [activeState, setActiveState] = useState(buttonData);

  const handleActiveState = (index) => {
    const newState = activeState.map((state, i) => {
      return { ...state, active: i === index };
    });
    setActiveState(newState);
  };

  return (
    <div className="container best-deal-section display-flex justify-content-center flex-direction-column padding-top-100 padding-bottom-100">
      <div className="display-flex align-item-center justify-content-space-between flex-wrap justify-content-md-center-best-deal">
        <div className="text-align-md-center-best-deal justify-content-md-center-best-deal-header">
          <h5 className="before-line-best-deal color-orange font-weight-700 margin-bottom-30">
            BEST DEAL
          </h5>
          <h1 className="width-60-percent font-weight-800">
            Find Your Best Deal Right Now!
          </h1>
        </div>
        <div className="display-flex justify-content-center align-item-center">
          {activeState.map((btn, index) => (
            <button
              key={btn.id}
              className={
                btn.active
                  ? "color-white style-best-deal-btn background-color-orange"
                  : "color-white background-color-black style-best-deal-btn"
              }
              onClick={() => handleActiveState(index)}
            >
              {btn.buttonInfo}
            </button>
          ))}
        </div>
      </div>
      <div className="display-flex justify-content-space-between padding-top-100 flex-wrap gap-30 justify-content-md-center-best-deal">
        <div className="info-section width-23-percent border-radius-circle">
          {activeState.map(
            (btnActivated) =>
              btnActivated.active && (
                <div key={btnActivated.id}>
                  <div className="border-bottom">
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Total Flat Space
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.totalFlatSpace}
                      </span>
                    </p>
                  </div>
                  <div className="border-bottom">
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Floor Number
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.floorNumber}
                      </span>
                    </p>
                  </div>
                  <div className="border-bottom">
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Number Of Rooms
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.numberOfRooms}
                      </span>
                    </p>
                  </div>
                  <div className="border-bottom">
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Parking Available
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.parkingAvailable}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Payment Process
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.paymentProcess}
                      </span>
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
        <div>
          {activeState.map(
            (imgActivated) =>
              imgActivated.active && (
                <img
                  key={imgActivated.id}
                  className="width-md-100-info-section-img"
                  src={imgActivated.img}
                  alt={imgActivated.buttonInfo}
                />
              )
          )}
        </div>
        <div className="width-25-percent width-md-100-best-deal">
          <h5 className="margin-bottom-30">Extra Info About Property</h5>
          {activeState.map(
            (textActivated) =>
              textActivated.active && (
                <div key={textActivated.id}>
                  <p className="margin-bottom-30 color-gray font-size-18">
                    {textActivated.p1}
                  </p>
                  <p className="margin-bottom-30 color-gray font-size-18">
                    {textActivated.p2}
                  </p>
                  <ButtonComponent text={"Schedual a Visit"} active={true} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
