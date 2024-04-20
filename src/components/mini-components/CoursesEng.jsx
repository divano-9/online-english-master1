import { useContext } from "react";
import data from "../../static-data/data.js";
import { Context } from "../../states/GlobalContext";

const CoursesEng = () => {
  const { isEnglish } = useContext(Context);
  return (
    <div className="courese-eng">
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
                <div className="col-9 col-md-5 col-lg-4">
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
  );
};

export default CoursesEng;
