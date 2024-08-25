import { useState, useEffect } from "react";
import CardComponent from "../CardComponent/CardComponent";
import "./PropertiesSection.css";
import Pagination from "../Pagination/Pagination";

const propertiesData = [
  {
    img: "/public/images/images/property-01.jpg",
    type: "Luxury Villa",
    price: "$2.264.000",
    location: "18 New Street Miami, OR 97219",
    propertyRoomsInfo: [8, 7, "500 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-02.jpg",
    type: "Luxury Villa",
    price: "$1.180.000",
    location: "54 Mid Street Florida, OR 27001",
    propertyRoomsInfo: [8, 8, "521 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-03.jpg",
    type: "Luxury Villa",
    price: "$1.460.000",
    location: "26 Old Street Miami, OR 38540",
    propertyRoomsInfo: [8, 13, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-04.jpg",
    type: "Apartment",
    price: "$584.500",
    location: "12 New Street Miami, OR 12650",
    propertyRoomsInfo: [8, 8, "700 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-05.jpg",
    type: "Penthouse",
    price: "$925.600",
    location: "34 Beach Street Miami, OR 42680",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-06.jpg",
    type: "Modern Condo",
    price: "$450.000",
    location: "22 New Street Portland, OR 16540",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-01.jpg",
    type: "Luxury Villa",
    price: "$2.264.000",
    location: "18 New Street Miami, OR 97219",
    propertyRoomsInfo: [8, 7, "500 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-02.jpg",
    type: "Luxury Villa",
    price: "$1.180.000",
    location: "54 Mid Street Florida, OR 27001",
    propertyRoomsInfo: [8, 8, "521 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-03.jpg",
    type: "Luxury Villa",
    price: "$1.460.000",
    location: "26 Old Street Miami, OR 38540",
    propertyRoomsInfo: [8, 13, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-04.jpg",
    type: "Apartment",
    price: "$584.500",
    location: "12 New Street Miami, OR 12650",
    propertyRoomsInfo: [8, 8, "700 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-05.jpg",
    type: "Penthouse",
    price: "$925.600",
    location: "34 Beach Street Miami, OR 42680",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-06.jpg",
    type: "Modern Condo",
    price: "$450.000",
    location: "22 New Street Portland, OR 16540",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-04.jpg",
    type: "Apartment",
    price: "$584.500",
    location: "12 New Street Miami, OR 12650",
    propertyRoomsInfo: [8, 8, "700 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-05.jpg",
    type: "Penthouse",
    price: "$925.600",
    location: "34 Beach Street Miami, OR 42680",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-06.jpg",
    type: "Modern Condo",
    price: "$450.000",
    location: "22 New Street Portland, OR 16540",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-01.jpg",
    type: "Luxury Villa",
    price: "$2.264.000",
    location: "18 New Street Miami, OR 97219",
    propertyRoomsInfo: [8, 7, "500 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-02.jpg",
    type: "Luxury Villa",
    price: "$1.180.000",
    location: "54 Mid Street Florida, OR 27001",
    propertyRoomsInfo: [8, 8, "521 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-03.jpg",
    type: "Luxury Villa",
    price: "$1.460.000",
    location: "26 Old Street Miami, OR 38540",
    propertyRoomsInfo: [8, 13, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-04.jpg",
    type: "Apartment",
    price: "$584.500",
    location: "12 New Street Miami, OR 12650",
    propertyRoomsInfo: [8, 8, "700 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-05.jpg",
    type: "Penthouse",
    price: "$925.600",
    location: "34 Beach Street Miami, OR 42680",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
  {
    img: "/public/images/images/property-06.jpg",
    type: "Modern Condo",
    price: "$450.000",
    location: "22 New Street Portland, OR 16540",
    propertyRoomsInfo: [8, 8, "545 m2", 3, "6 spots"],
  },
];

const filterBtnArray = [
  {
    active: true,
    btnText: "Show All",
    type: "",
  },
  {
    active: false,
    btnText: "Appartment",
    type: "Apartment",
  },
  {
    active: false,
    btnText: "Villa House",
    type: "Luxury Villa",
  },
  {
    active: false,
    btnText: "Penthouse",
    type: "Penthouse",
  },
];

const PropertiesSection = () => {
  const [propertiesArray, setPropertiesArray] = useState(propertiesData);
  const [activeState, setActiveState] = useState(filterBtnArray);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  const handleBtnClicked = (index) => {
    const newState = filterBtnArray.map((state, i) => {
      return { ...state, active: i === index };
    });
    setActiveState(newState);

    const activeType = filterBtnArray[index].type;

    const newPropertiesData = activeType
      ? propertiesData.filter((property) => property.type === activeType)
      : propertiesData;

    setPropertiesArray(newPropertiesData);

    // حتى يعرض اول صفحة بعد ما اعمل فلترة لان وقت عم فلتر وكون ضاغط ع صفحة غير الاولى بالباجنيشن عم يعمل مشاكل
    setCurrentPage(1);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = propertiesArray.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  return (
    <div className="container properties-section">
      <div className="display-flex justify-content-center gap-30 gap-md-10-for-properties-btn flex-wrap">
        {activeState.map((btn, index) => {
          return (
            <div
              className={
                btn.active
                  ? "background-color-orange color-white style-properties-section-btn"
                  : "background-color-black color-white style-properties-section-btn"
              }
              key={index}
              onClick={() => {
                handleBtnClicked(index);
              }}
            >
              {btn.btnText}
            </div>
          );
        })}
      </div>
      <div className="display-flex justify-content-space-between justify-content-md-center-for-cards flex-wrap margin-top-50 margin-bottom-50 ">
        {currentProperties.map((propertyData, index) => {
          return <CardComponent key={index} propertiesData={propertyData} />;
        })}
      </div>
      <Pagination
        propertiesArray={propertiesArray}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        propertiesPerPage={propertiesPerPage}
      />
    </div>
  );
};

export default PropertiesSection;
