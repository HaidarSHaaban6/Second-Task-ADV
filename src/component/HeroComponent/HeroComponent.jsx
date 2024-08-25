import "./HeroComponent.css";

const HeroComponent = ({ headerOneText, headerFiveText }) => {
  return (
    <>
      <div className="position-relative">
        <img
        className="hero-component-img"
          src="/public/images/images/page-heading-bg.jpg"
          alt="page-heading"
        />
        <div className="hero-caption-container display-flex align-item-center flex-direction-column gap-30">
          <h5>{headerFiveText}</h5>
          <h1 className="color-white font-weight-800">{headerOneText}</h1>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
