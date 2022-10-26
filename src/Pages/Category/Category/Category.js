import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummeryCart from "../../Shared/courseSummeryCart/courseSummeryCart";

const Category = () => {
  const categoryCourse = useLoaderData();
  return (
    <div>
      {categoryCourse.map((course) => (
        <CourseSummeryCart key={course._id} course={course}></CourseSummeryCart>
      ))}
    </div>
  );
};

export default Category;
