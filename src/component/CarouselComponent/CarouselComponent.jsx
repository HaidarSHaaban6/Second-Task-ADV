import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.css";

let villaData = [
  {
    key: 0,
    img: "/public/images/images/banner-01.jpg",
    city: "Toronto",
    country: "Canada",
    paragraph: "Hurry!! Get The Best Villa For You",
  },
  {
    key: 1,
    img: "/public/images/images/banner-02.jpg",
    city: "Dubai",
    country: "Emirates",
    paragraph: "Hurry!! Get The Best Villa For You",
  },
  {
    key: 2,
    img: "/public/images/images/banner-03.jpg",
    city: "Sao Paulo",
    country: "Brazil",
    paragraph: "Hurry!! Get The Best Villa For You",
  },
];

const CarouselComponent = () => {
  return (
    <div className="my-container position-relative">
      <Carousel fade>
        {villaData.map((villa) => (
          <Carousel.Item key={villa.key} className="carousel-item">
            <img
              className="style-img-for-carousel height-100vh"
              src={villa.img}
              alt={`Slide ${villa.key}`}
            />
            <Carousel.Caption className="carousel-caption">
              <h5 className="carousel-caption-header">
                {villa.city}, <span>{villa.country}</span>
              </h5>
              <p className="carousel-caption-paragraph">{villa.paragraph}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
