import { Card } from "react-bootstrap";

const Experience = () => {
  return (
    <>
      <h1
        id="experience"
        className="project-head"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        Work Experience
      </h1>
      <p
        className="project-para mb-4"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        {" "}
        My Work Experience{" "}
      </p>
      <div className="mb-5 mt-5 container d-flex justify-content-center">
        <Card
          className="body-card w-lg-50"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <Card.Body className="card-common-bg">
            <Card.Title className="card-title card-common-bg">
              Experience
            </Card.Title>

            <Card.Text className="text card-common-bg fs-6">
              Firstline Infotech Pvt Ltd, T.Nagar ,Chennai (Sep 2024 - Present)
            </Card.Text>
            <Card.Text className="text card-common-bg fs-6">
              <b className="card-common-bg">-</b>
              Design and develop an ERP system tailored for educational
              institutions and healthcare facilities
            </Card.Text>
            <Card.Text className="text card-common-bg fs-6">
              <b className="card-common-bg">-</b>
              Implemented data storage using PostgreSQL with normalization
              techniques to eliminate redundancy and optimize space usage.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Experience;
