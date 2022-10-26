import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummeryCart from "../../Shared/courseSummeryCart/courseSummeryCart";

const Home = () => {
  const allCourse = useLoaderData();
  return (
    <div>
      <h2>this is home component{allCourse.length}</h2>
      {allCourse.map((course) => (
        <CourseSummeryCart key={course._id} course={course}></CourseSummeryCart>
      ))}
    </div>
  );
};

export default Home;
