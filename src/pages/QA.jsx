import data from "../static-data/qa-data.js";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import top from "../assets/nav-background.svg";
import bot from "../assets/hero-background2.svg";
import img1 from "../assets/qa/image8.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../states/GlobalContext";

const QA = () => {
  const { language } = useContext(Context);

  return (
    <div className="qa white-bg">
      <div>
        <img src={top} className="top-img nav-top" />
        <Navigation />
      </div>
      <main>
        <div className="container">
          {language === "eng" ? (
            <h1>QUESTIONS AND ANSWERS</h1>
          ) : language === "srb" ? (
            <h1>PITANJA I ODGOVORI</h1>
          ) : (
            <h1>QUESTIONS AND ANSWERS</h1>
          )}

          {language === "eng"
            ? data.eng.map((single, index) => {
                const { imgR, imgL, title, list, paragraph } = single;
                return (
                  <article key={index}>
                    <div className="imgs">
                      {imgL && (
                        <div className="img-container img-left">
                          <img src={imgL} alt="image8" />
                        </div>
                      )}
                      {imgR && (
                        <div className="img-container img-right">
                          <img src={imgR} alt="image8" />
                        </div>
                      )}
                    </div>
                    <h3>{title}</h3>
                    <ul>
                      {list.map((lis, index) => {
                        return <li key={index}>{lis}</li>;
                      })}
                    </ul>
                    <p>{paragraph}</p>
                  </article>
                );
              })
            : language === "srb"
            ? data.srb.map((single, index) => {
                const { imgR, imgL, title, list, paragraph } = single;
                return (
                  <article key={index}>
                    <div className="imgs">
                      {imgL && (
                        <div className="img-container img-left">
                          <img src={imgL} alt="image8" />
                        </div>
                      )}
                      {imgR && (
                        <div className="img-container img-right">
                          <img src={imgR} alt="image8" />
                        </div>
                      )}
                    </div>
                    <h3>{title}</h3>
                    <ul>
                      {list.map((lis, index) => {
                        return <li key={index}>{lis}</li>;
                      })}
                    </ul>
                    <p>{paragraph}</p>
                  </article>
                );
              })
            : data.viet.map((single, index) => {
                const { imgR, imgL, title, list, paragraph } = single;
                return (
                  <article key={index}>
                    <div className="imgs">
                      {imgL && (
                        <div className="img-container img-left">
                          <img src={imgL} alt="image8" />
                        </div>
                      )}
                      {imgR && (
                        <div className="img-container img-right">
                          <img src={imgR} alt="image8" />
                        </div>
                      )}
                    </div>
                    <h3>{title}</h3>
                    <ul>
                      {list.map((lis, index) => {
                        return <li key={index}>{lis}</li>;
                      })}
                    </ul>
                    <p>{paragraph}</p>
                  </article>
                );
              })}
        </div>
      </main>
      <div>
        <img src={bot} className="bot-img" />
        <Footer />
      </div>
    </div>
  );
};

export default QA;
