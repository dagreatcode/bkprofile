import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
      //   console.log(`Hello: ${projects}`)
    };
    fetchProjects();
  }, [projects]);
  return (
    <>
      <h1 className="text-color">Profile</h1>
      {/* {projects.map((prod) => console.log(prod.title))} */}
      {/* <h1>{projects[0].title}</h1> */}
      <div className="container" style={{}}>
        <div className="row">
          {projects.map((prod) => (
            <div
              key={prod._id}
              className="card"
              style={{
                width: "18rem",
                alignItems: "center;",
                display: "flex;",
                flexDirection: "row;",
                textAlign: "center;",
              }}
            >
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.description}</p>
                <Link to="/" className="btn btn-primary">
                  Check out Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
