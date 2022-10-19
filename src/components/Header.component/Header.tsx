import { MdOutlineMinimize, MdClose } from "react-icons/md";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-start-part">
          <div>cySync</div>
        </div>
        <div className="header-end-part">
          <span>
            <MdOutlineMinimize />
          </span>
          <span>
            <BsBoxArrowInDownLeft />
          </span>
          <span>
            <MdClose />
          </span>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};
