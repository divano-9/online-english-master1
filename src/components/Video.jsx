import videoBg from "../assets/site-bg.svg";
const Video = () => {
  return (
    <section className="video">
      <img className="bg" src={videoBg} />
      {/*  <video
        width="40%"
        height="auto"
        src=""
        controls
      ></video> */}
      <div className="container">
        <h2>Promo Video</h2>
        <div className="video-container shadows" id="shadow">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/OApKNxd5oz4?si=StbN1BQ_PPAi83Va"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
