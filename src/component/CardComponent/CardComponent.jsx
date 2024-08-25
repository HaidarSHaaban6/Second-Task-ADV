import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./CardComponent.css";

const CardComponent = ({ propertiesData }) => {
  const {
    img,
    type,
    price,
    location,
    propertyRoomsInfo: [bedrooms, bathrooms, area, floor, parking],
  } = propertiesData;

  const PropertyInfo = ({ label, value }) => (
    <span className="property-room-info-item">
      {label}: <span className="font-weight-600">{value}</span>
    </span>
  );

  return (
    <div className="property-card padding-40 card-padding-md adding-background-color-for-card position-relative">
      <img
        className="width-100 border-radius-circle-card-img "
        src={img}
        alt={location}
      />

      <div className="display-flex justify-content-space-between margin-y-20">
        <p className="margin-zero background-color-light-orange add-style-for-type">
          {type}
        </p>

        <p className="margin-zero color-orange font-weight-700 add-style-for-price font-size-20">
          {price}
        </p>
      </div>

      <p className="margin-zero font-weight-700 margin-y-20 font-size-20">
        {location}
      </p>

      <div className="property-rooms-info display-flex flex-wrap border-bottom-property-room ">
        <PropertyInfo label="Bedrooms" value={bedrooms} />
        <PropertyInfo label="Bathrooms" value={bathrooms} />
        <PropertyInfo label="Area" value={area} />
        <PropertyInfo label="Floor" value={floor} />
        <PropertyInfo label="Parking" value={parking} />
      </div>

      <div className="center-properties-btn">
        <ButtonComponent text={"Schedual a Vist"} active={false} />
      </div>
    </div>
  );
};

export default CardComponent;
