import { Card } from "react-bootstrap";
import "../styles/Project.css";
import { work_list } from "../images/assets";

const WorkProject = () => {
  return (
    <>
      <h1
        id="workedproject"
        className="project-head"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        Worked Projects
      </h1>
      <p
        className="project-para mb-4"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        {" "}
        Things I’ve built in my work{" "}
      </p>
      <div className="container">
        <div className="row">
          {work_list.map((movie) => (
            <div className="col-lg-4 col-sm-12 mt-3 mb-3">
              <Card
                className="body-card w-100 w-sm-100"
                data-aos="zoom-in"
                data-aos-duration="900"
              >
                <Card.Body className="card-common-bg">
                  <Card.Title className="card-title card-common-bg">
                    {movie.pro_name}
                  </Card.Title>

                  <Card.Text className="text card-common-bg fs-6">
                    <b className="card-common-bg">-</b>
                    {movie.desc1}
                  </Card.Text>
                  <Card.Text className="text card-common-bg fs-6">
                    <b className="card-common-bg">-</b>
                    {movie.desc2}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkProject;
