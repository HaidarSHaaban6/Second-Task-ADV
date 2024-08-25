import "./ContactInfo.css";

const ContactInfo = ({ iconSrc, label, value, href }) => {
  return (
    <div className="display-flex gap-30 style-get-in-touch-container">
      <img
        className="style-get-in-touch-icon"
        src={iconSrc}
        alt={`${label}-icon`}
      />
      <div>
        <p className="margin-zero font-weight-700 font-size-18">
          <a className="text-decoration-none color-black" href={href}>
            {value}
          </a>
        </p>
        <span className="color-gray font-size-14">{label}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
