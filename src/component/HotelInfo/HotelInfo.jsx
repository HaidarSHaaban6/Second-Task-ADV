import AccordionComponent from "../AccordionComponent/AccordionComponent";
import VillaInfo from "../VillaInfo/VillaInfo";
import "./HotelInfo.css";

const villaInfoArray = [
  {
    img: "./../../../public/images/images/info-icon-01.png",
    paragraphUnderImg: "",
    header: "250 m2",
    mainParagraph: "Total Flat Space",
  },
  {
    img: "/../../../public/images/images/info-icon-02.png",
    paragraphUnderImg: "",
    header: "Contract",
    mainParagraph: "Contract Ready",
  },
  {
    img: "./../../../public/images/images/info-icon-03.png",
    paragraphUnderImg: "Process",
    header: "Payment",
    mainParagraph: "Payment",
  },
  {
    img: "./../../../public/images/images/info-icon-04.png",
    paragraphUnderImg: "Control",
    header: "Safety",
    mainParagraph: "24//7 Under",
  },
];

const accordionData = [
  {
    header: "Best useful links ?",
    text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem similique nostrum tenetur impedit magni, unde temporibus deleniti. Utitaque corporis aut, doloremquesi timpedit, odit architecto cumque nisi veniam consequuntur",
  },
  {
    header: "How does this work ?",
    text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem similique nostrum tenetur impedit",
  },
  {
    header: "Why is Villa Agency the best ?",
    text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. magni, unde temporibus deleniti. Utitaque corporis aut, doloremquesi timpedit, odit architecto cumque nisi veniam consequuntur Voluptatem similique nostrum tenetur impedit magni, unde temporibus deleniti. Utitaque corporis aut, doloremquesi timpedit, odit architecto cumque nisi veniam consequuntur",
  },
];

const HotelInfo = () => {
  return (
    <div className="container hotel-info display-flex padding-top-200 padding-bottom-100 justify-content-space-around flex-wrap gap-30">
      <div className="img-section">
        <img
          className="feature-img-hotel-info"
          src="./../../../public/images/images/featured.jpg"
          alt="featured"
        />
        <span className="display-flex justify-content-center align-item-center background-color-orange featured-icon">
          <img
            className="width-feature-icon-img-md-40"
            src="./../../../public/images/images/featured-icon.png"
            alt="featured-icon"
          />
        </span>
      </div>
      <div className="link-section width-38-hotel-info order-md-1-by-haidar">
        <h5 className="color-orange before-line margin-bottom-50 margin-bottom-md-35-by-haidar  font-weight-700">
          FEATURED
        </h5>
        <h1 className="margin-bottom-80 margin-bottom-md-55-by-haidar font-weight-800 width-50 width-md-100-by-haidar">
          Best Appartment & Sea View
        </h1>
        <AccordionComponent accordionData={accordionData} />
      </div>
      <VillaInfo villaInfoArray={villaInfoArray} />
    </div>
  );
};

export default HotelInfo;
