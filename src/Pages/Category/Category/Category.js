import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const course = useLoaderData();
  return (
    <div>
      <h2>this is category{course.length}</h2>
    </div>
  );
};

export default Category;
