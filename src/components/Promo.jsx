import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";
import promoBg from "../assets/site-bg.svg";
import PromoEng from "./mini-components/PromoEng";
import PromoViet from "./mini-components/PromoViet";
import PromoSrb from "./mini-components/PromoSrb";

const Promo = () => {
  const { language } = useContext(Context);

  return (
    <section className="promo purple-bg" id="about">
      <div className="promo-container container">
        <div className="title">
          {language === "eng" || language === "srb" ? (
            <h2>Promo Video</h2>
          ) : (
            <h2>Promo Video</h2>
          )}
          <hr />
        </div>

        {language === "eng" || language === "srb" ? (
          <div className="video-container shadows eng" id="shadow">
            <iframe
              src="https://player.vimeo.com/video/975419435?h=8826bd41da"
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        ) : (
          <div className="video-container shadows viet" id="shadow">
            <iframe
              src="https://player.vimeo.com/video/975424732?h=02f316d6da"
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        )}
        {language === "eng" ? (
          <PromoEng />
        ) : language === "srb" ? (
          <PromoSrb />
        ) : (
          <PromoViet />
        )}
        <button className="contact-btn">
          <Link to="/#contact">Sign Up</Link>
        </button>
      </div>
    </section>
  );
};

export default Promo;
