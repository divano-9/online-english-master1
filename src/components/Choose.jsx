import { useContext } from "react";
import { Link } from "react-router-dom";
import chooseBg from "../assets/site-bg.svg";
import data from "../static-data/data.js";
import { FaCheck } from "react-icons/fa6";
import { Context } from "../states/GlobalContext.jsx";
import ChooseEng from "./mini-components/ChooseEng.jsx";
import ChooseViet from "./mini-components/ChooseViet.jsx";
import ChooseSrb from "./mini-components/ChooseSrb.jsx";

const Choose = () => {
  const { language } = useContext(Context);
  return (
    <section className="choose purple-bg">
      {/* <img className="bg" src={chooseBg} /> */}
      <div className="container">
        <div className="title">
          {language === "eng" ? (
            <h2>Why Choose Master 1?</h2>
          ) : language === "srb" ? (
            <h2>Zašto Izabrati Master 1?</h2>
          ) : (
            <h2>Tại Sao Chọn Master 1?</h2>
          )}
          <hr />
        </div>

        {language === "eng" ? (
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
        ) : language === "srb" ? (
          <div className="choose-list srb">
            {data.srb.choose.map((single, index) => {
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
        {language === "eng" ? (
          <ChooseEng />
        ) : language === "srb" ? (
          <ChooseSrb />
        ) : (
          <ChooseViet />
        )}
        <div className="btn-container">
          <button className="contact-btn">
            <Link to="/#contact">Sign Up</Link>
          </button>
        </div>
        <h3>Check out what our students say about us!</h3>
        <div className="video-container shadows" id="shadow">
          <iframe
            src="https://player.vimeo.com/video/975430941?h=51d152e994"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Choose;
