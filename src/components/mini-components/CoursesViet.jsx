import data from "../../static-data/data.js";

const CoursesViet = () => {
  return (
    <div className="courese-eng">
      <div className="title">
        <h2>Các khóa học</h2>
        <hr />
      </div>
      <div>
        {data.viet.course.map((dat) => {
          const { id, title, txt, img } = dat;
          return (
            <div className="course" key={id} id={`course${id}`}>
              <div className="row">
                <div className="col-10 col-md-5">
                  <img alt="img" src={img} loading="lazy" />
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

export default CoursesViet;
