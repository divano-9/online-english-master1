import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import { Link } from "react-router-dom";
import promoBg from "../assets/site-bg.svg";
import PromoEng from "./mini-components/PromoEng";
import PromoViet from "./mini-components/PromoViet";

const Promo = () => {
  const { isEnglish } = useContext(Context);

  return (
    <section className="promo purple-bg" id="about">
      <div className="promo-container container">
        <div className="title">
          {isEnglish ? <h2>Promo Video</h2> : <h2>Promo Video</h2>}
          <hr />
        </div>

        {isEnglish ? (
          <div className="video-container shadows eng" id="shadow">
            <iframe
              loading="lazy"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xoSfZqBXM7s?si=ob6S1p_5dVAOLHGg?wmode=opaque"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="video-container shadows viet" id="shadow">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iTHje6amhCo?si=agj7uFUTyX6C3EBF?wmode=opaque"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        )}
        {isEnglish ? <PromoEng /> : <PromoViet />}
        <button className="contact-btn">
          <Link to="/#contact">Sign Up</Link>
        </button>
      </div>
    </section>
  );
};

export default Promo;
