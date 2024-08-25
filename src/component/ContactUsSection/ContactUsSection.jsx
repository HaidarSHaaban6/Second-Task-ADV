import ContactInfo from "../ContactInfo/ContactInfo";
import FormInfo from "../FormInfo/FormInfo";
import "./ContactUsSection.css";

const ContactUsSection = () => {
  const inputArray = [
    {
      label: "Full Name",
      placeholder: "Your Name...",
      type: "text",
      id: "full-name",
    },
    {
      label: "Email Address",
      placeholder: "Your E-mail...",
      type: "email",
      id: "email",
    },
    {
      label: "Subject",
      placeholder: "Subject...",
      type: "text",
      id: "subject",
    },
  ];

  const textareaObj = {
    label: "Message",
    placeholder: "Your Message",
    id: "message",
  };

  return (
    <div className="container margin-bottom-120 margin-top-120">
      <div className="container display-flex justify-content-space-between justify-content-md-center-contact-container gap-30 flex-wrap margin-bottom-80">
        <div className="width-md-100-contact width-50">
          <h5 className="color-orange before-line font-weight-700 width-fit-content margin-bottom-30 style-margin-bottom-md-15">
            Contact Us
          </h5>

          <h1 className="font-weight-800 margin-bottom-50 width-40 width-md-100-contact">
            Get In Touch With Our Agent
          </h1>

          <p className="color-gray">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            tempora nobis unde quis dolorem optio molestias aut sit dolore illo
            atque quas asperiores quam voluptatibus facilis, animi totam ad
            soluta? Maiores maxime quasi nemo quisquam blanditiis sequi officiis
            voluptate hic porro aperiam. Voluptate, aspernatur non!
          </p>

          <div className="display-flex justify-content-space-between flex-wrap justify-content-md-center-contact-container">
            <ContactInfo
              iconSrc="/public/images/images/phone-icon.png"
              label="Phone Number"
              value="010-020-0340"
              href="tel:010-020-0340"
            />
            <ContactInfo
              iconSrc="/public/images/images/email-icon.png"
              label="Business Email"
              value="info@villa.com"
              href="mailto:info@villa.com"
            />
          </div>
        </div>
        <FormInfo inputArrayInfo={inputArray} textareaObjInfo={textareaObj} />
      </div>

      <div>
        <iframe
          className="style-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.39567759774!2d-80.14705671009455!3d25.782538873412975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2z2YXZitin2YXZitiMINmB2YTZiNix2YrYr9in2Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1723966476957!5m2!1sar!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsSection;
