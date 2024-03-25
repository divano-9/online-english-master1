import bg from "../assets/site-bg.svg";
import data from "../static data/data.js";

const Courses = () => {
  return (
    <section className="courses">
      <img src={bg} className="bg" />
      <div className="container">
        <div className="title">
          <h2>Courses</h2>
          <hr />
        </div>
        <div>
          {data.eng.course.map((dat) => {
            const { id, title, txt, img } = dat;
            return (
              <div className="course" key={id} id={`course${id}`}>
                <div className="row">
                  <div className="col-10 col-md-5">
                    <img alt="img" src={img} />
                  </div>
                  <div className="col-10 col-md-5">
                    <h3>{title}</h3>
                    <p>{txt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
