import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import promoBg from "../assets/site-bg.svg";
import PromoEng from "./mini-components/PromoEng";
import PromoViet from "./mini-components/PromoViet";

const Promo = () => {
  const { isEnglish } = useContext(Context);

  return (
    <section className="promo" id="about">
      <img className="bg" src={promoBg} />
      <div className="promo-container container">
        <div className="title">
          {isEnglish ? <h2>Promo Video</h2> : <h2>Promo Video</h2>}
          <hr />
        </div>

        <div className="video-container shadows" id="shadow">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/OApKNxd5oz4?si=StbN1BQ_PPAi83Va?wmode=opaque"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        {isEnglish ? <PromoEng /> : <PromoViet />}
      </div>
    </section>
  );
};

export default Promo;
