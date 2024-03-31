import promoBg from "../assets/site-bg.svg";

const Promo = () => {
  return (
    <section className="promo" id="about">
      <img className="bg" src={promoBg} />
      {/*  <video
        width="40%"
        height="auto"
        src=""
        controls
      ></video> */}
      <div className="promo-container container">
        <div className="title">
          <h2>Promo Video</h2>
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

        {/* <div className="promo-txt">
          <p>Overcome fear of speaking English!</p>
          <p>Gain confidence!</p>
          <p>
            Learn <u>what</u> <strong>YOU</strong> want!
          </p>
          <p>
            Learn <u>when</u> <strong>YOU</strong> want!
          </p>
          <p>Stop wasting your time on group classes!</p>
          <p>Stop wasting your time in traffic! </p>
          <p>
            Learn <strong>FROM HOME!</strong>
          </p>
          <p>
            Learn with <strong>foreign teachers!</strong>
          </p>
          <p>
            Learn with <strong>MASTER 1!</strong>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Promo;
