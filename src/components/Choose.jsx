import { useContext } from "react";
import chooseBg from "../assets/site-bg.svg";
import data from "../static-data/data.js";
import { FaCheck } from "react-icons/fa6";
import { Context } from "../states/GlobalContext.jsx";
import ChooseEng from "./mini-components/ChooseEng.jsx";
import ChooseViet from "./mini-components/ChooseViet.jsx";

const Choose = () => {
  const { isEnglish } = useContext(Context);
  return (
    <section className="choose">
      <img className="bg" src={chooseBg} />
      <div className="container">
        <div className="title">
          {isEnglish ? (
            <h2>Why Choose Master 1?</h2>
          ) : (
            <h2>Tại Sao Chọn Master 1?</h2>
          )}
          <hr />
        </div>

        {isEnglish ? (
          <div className="choose-list eng">
            {data.eng.choose.map((single, index) => {
              return (
                <div key={index}>
                  <FaCheck className="choose-icon" />
                  <p>{single}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="choose-list viet">
            {data.viet.choose.map((single, index) => {
              return (
                <div key={index}>
                  <FaCheck className="choose-icon" />
                  <p>{single}</p>
                </div>
              );
            })}
          </div>
        )}
        {isEnglish ? <ChooseEng /> : <ChooseViet />}
      </div>
    </section>
  );
};

export default Choose;
