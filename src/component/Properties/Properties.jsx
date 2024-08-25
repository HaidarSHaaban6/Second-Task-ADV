import CardComponent from "../CardComponent/CardComponent";
import "./Properties.css";

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
];

const Properties = () => {
  return (
    <div className="container preperties-section padding-top-100 padding-bottom-100">
      <div className=" display-flex align-item-center flex-direction-column">
        <h5 className="before-line color-orange font-weight-700 margin-bottom-30">
          PROPERTIES
        </h5>
        <h1 className="width-25-percent width-md-50-for-cards-header font-weight-800 text-align-center">
          We Provide The Best Property You Like
        </h1>
      </div>
      <div className="display-flex justify-content-space-between justify-content-md-center-for-cards flex-wrap padding-top-100 padding-top-md-50-by-haidar">
        {propertiesData.map((prop, index) => {
          return <CardComponent key={index} propertiesData={prop} />;
        })}
      </div>
    </div>
  );
};

export default Properties;
