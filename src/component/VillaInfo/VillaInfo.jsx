import "./VillaInfo.css";

const VillaInfo = ({ villaInfoArray }) => {
  return (
    <div className="info-section width-27-percent-villa-info border-radius-circle width-md-30-percent-by-haidar">
      {villaInfoArray.map((villa, index) => (
        <div
          key={index}
          className={
            index === villaInfoArray.length - 1
              ? "display-flex justify-content-center align-item-center info-section-container gap-30"
              : "display-flex justify-content-center align-item-center info-section-container info-section-border gap-30"
          }
        >
          <div>
            <img src={villa.img} alt={`info-icon-${villa.key}`} />
            <p className="margin-zero">{villa.paragraphUnderImg}</p>
          </div>
          <div className="margin-left-25">
            <h3 className="margin-zero">{villa.header}</h3>
            <p className="margin-zero font-size-14 font-size-md-12-by-haidar">
              {villa.mainParagraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VillaInfo;
