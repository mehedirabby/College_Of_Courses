import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummeryCart from "../../Shared/courseSummeryCart/courseSummeryCart";

const Home = () => {
  const allCourse = useLoaderData();
  console.log(allCourse);
  return (
    <Row>
      {allCourse.map((course) => (
        <CourseSummeryCart key={course._id} course={course}></CourseSummeryCart>
      ))}
    </Row>
  );
};

export default Home;
