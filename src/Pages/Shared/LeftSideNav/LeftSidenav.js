import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./left.css";

const LeftSidenav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://college-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mt-2 ms-2">
      {categories.map((category) => (
        <p key={category.id}>
          <Button variant="outline-danger">
            <Link className="btn text-info" to={`/category/${category.id}`}>
              {category.name}
            </Link>
          </Button>
        </p>
      ))}
    </div>
  );
};

export default LeftSidenav;
