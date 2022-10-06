import React, { useEffect, useState } from "react";
import axios from "axios";
// import img from "./placeImg.png"
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
      <div className="container">
        <div className="row" style={{}}>
          {projects.map((prod) => (
            <div
              key={prod._id}
              className="card cardProfile"
              style={{

              }}
            >
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.description}</p>
                <Link
                  to="/"
                  className="btn"
                  style={{ color: "#FAEA48", backgroundColor: "#F637EC" }}
                >
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
