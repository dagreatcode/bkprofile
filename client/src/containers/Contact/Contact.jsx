import React from "react";

export default function Contact() {
  return (
    <>
      <h1 style={{ color: "#FAEA48" }}>Contact</h1>
      <div className="container">
        <div className="row">
          <div className="col-12-sm">
            <form>
              <div className="mb-3">
                <label
                  style={{ color: "#FAEA48", backgroundColor: "#3330E4" }}
                  htmlFor="exampleInputName1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                />
              </div>
              <div className="mb-3">
                <label
                  style={{ color: "#FAEA48", backgroundColor: "#3330E4" }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div
                  style={{ color: "#FAEA48", backgroundColor: "#3330E4" }}
                  id="emailHelp"
                  className="form-text"
                >
                  We'll never share your email with anyone else.
                </div>
              </div>
              <label
                style={{ color: "#FAEA48", backgroundColor: "#3330E4" }}
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Message
              </label>
              <div className="input-group">
                <span className="input-group-text">Message Here</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  style={{ color: "#FAEA48", backgroundColor: "#3330E4" }}
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                >
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                style={{ color: "#FAEA48", backgroundColor: "#F637EC" }}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
