import AccordionComponent from "../AccordionComponent/AccordionComponent";
import VillaInfo from "../VillaInfo/VillaInfo";
import "./PropertiesDetailSection.css";

let villaInfoArray = [
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

const PropertiesDetailSection = () => {
  return (
    <div className="display-flex gap-30 justify-content-space-between justify-content-properties-detail-md-center container padding-top-100 flex-wrap">
      <div className="width-70-properties-detail order-md-properties-detail-one">
        <img
          src="/public/images/images/banner-01.jpg"
          className="width-100"
          alt=""
        />
        <p className="width-fit-content background-color-light-orange font-weight-700 add-style-properties-detail font-size-20 border-radius-circle">
          Appartment
        </p>
        <h1 className="font-weight-800">24 New Street Miami, OR 24569</h1>
      </div>

      <VillaInfo villaInfoArray={villaInfoArray} />

      <div className="properties-detail-section-border"></div>

      <div className="color-gray width-70-properties-detail order-md-properties-detail-two">
        <p className="style-properties-detail-section-p">
          Lorem{" "}
          <span className="font-weight-700">
            ipsum dolor, sit amet consectetur
          </span>{" "}
          adipisicing elit. Explicabo temporibus, nobis quasi, quis optio maxime
          voluptatibus exercitationem illum veritatis repudiandae fugiat unde
          hic labore. Nostrum beatae, aspernatur hic voluptates quidem deleniti
          vero corporis quisquam magni,{" "}
          <span className="color-blue">incidunt cum sit delectus ex rerum</span>{" "}
          excepturi ullam magnam eveniet? Perspiciatis officia rem itaque odit
          eveniet soluta dignissimos praesentium error suscipit et pariatur, id
          consequuntur sit, cumque asperiores omnis facere. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolorum libero veritatis
          accusamus, quo fugiat blanditiis, mollitia nihil
        </p>
        <p className="style-properties-detail-section-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          libero veritatis accusamus, quo fugiat blanditiis, mollitia nihil
          soluta reprehenderit recusandae nemo praesentium odit ipsa voluptatem!
          Eligendi quia ea, accusantium aspernatur aliquam amet tempora. Ab vero
          beatae quia quisquam quam dolores.
        </p>

        <AccordionComponent accordionData={accordionData} />
      </div>
    </div>
  );
};

export default PropertiesDetailSection;
