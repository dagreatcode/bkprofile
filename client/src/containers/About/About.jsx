import React, { useState, useEffect } from "react";

export default function About() {
  const [useMyState, setMyUseState] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h1 className="text-color">About Me</h1>
    </>
  );
}
