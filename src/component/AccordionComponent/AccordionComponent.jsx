import { useRef, useEffect } from "react";
import "./AccordionComponent.css";

const AccordionComponent = ({ accordionData }) => {
  const refs = useRef([]);
  const headerRefs = useRef([]);

  useEffect(() => {
    if (refs.current[0]) {
      refs.current[0].style.display = "block";
    }
    if (headerRefs.current[0]) {
      headerRefs.current[0].classList.add("color-orange");
    }
  }, []);

  const handleToggle = (index) => {
    refs.current.forEach((ref, refIndex) => {
      if (refIndex !== index) {
        ref.style.display = "none";
        headerRefs.current[refIndex].classList.remove("color-orange");
      }
    });

    if (refs.current[index].style.display === "block") {
      refs.current[index].style.display = "none";
      headerRefs.current[index].classList.remove("color-orange");
    } else {
      refs.current[index].style.display = "block";
      headerRefs.current[index].classList.add("color-orange");
    }
  };

  return (
    <div className="background-color-light-gray padding-10">
      {accordionData.map((data, index) => (
        <div key={index}>
          <h5
            className={
              index === accordionData.length - 1
                ? "accordion-component-header"
                : "border-bottom accordion-component-header"
            }
            onClick={() => handleToggle(index)}
            ref={(el) => (headerRefs.current[index] = el)}
          >
            {data.header}
          </h5>

          <p
            className="margin-bottom-30"
            ref={(el) => (refs.current[index] = el)}
            style={{ display: "none" }}
          >
            {data.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
