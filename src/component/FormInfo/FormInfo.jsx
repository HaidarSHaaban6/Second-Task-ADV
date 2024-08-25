import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./FormInfo.css";

const FormInfo = ({ inputArrayInfo, textareaObjInfo }) => {
  return (
    <form className="style-form" action="">
      {inputArrayInfo.map((inputArrayInfo, index) => {
        return (
          <>
            <label
              htmlFor={inputArrayInfo.id}
              className={
                index === 0
                  ? "display-block first-input-label"
                  : "display-block"
              }
            >
              {inputArrayInfo.label}
            </label>
            <input
              placeholder={inputArrayInfo.placeholder}
              type={inputArrayInfo.type}
              name=""
              id={inputArrayInfo.id}
            />
          </>
        );
      })}
      <label htmlFor={textareaObjInfo.id} className="display-block">
        {textareaObjInfo.label}
      </label>
      <textarea
        placeholder={textareaObjInfo.placeholder}
        name=""
        id={textareaObjInfo.id}
      ></textarea>
      <div className="input-btn-margin-top">
        <ButtonComponent text={"Schedual a Vist"} active={false} />
      </div>
    </form>
  );
};

export default FormInfo;
