import React, { useState, useRef, useEffect } from "react";

const Random = () => {
  const prevValue = useRef("");
  const [rand, setRand] = useState(0);

  useEffect(() => {
    prevValue.current = rand;
  }, [rand]);

  return (
    <div>
      <div>Random</div>
      <div>{rand}</div>

      <div ref={prevValue}>
        store: {prevValue === "" ? 0 : prevValue.current}
      </div>

      <br />
      <button
        onClick={() => {
          console.log("Click Me");
          setRand(Math.floor(Math.random() * 100));
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Random;
