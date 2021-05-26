import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";

const NewHome = () => {
  const [quote, setQute] = useState("");
  const [item, setItem] = useState([
    { id: 1, quote: "I love coding" },
    { id: 2, quote: "I can do all Things" },
    { id: 3, quote: "God is Good" },
    { id: 4, quote: "God is Love" },
    { id: 5, quote: "God is Great" },
  ]);
  //[1,2,4]

  const addElement = () => {
    const id = item.length + 1;
    const add = { id, quote };
    setItem([...item, add]);
    setQute("");
  };

  return (
    <div
      stye={{
        marginTop: "30px",
      }}
    >
      <div>New Home</div>
      <Input
        style={{
          margin: "10px 0px",
        }}
        placeholder="Enter your best Quote"
        value={quote}
        onChange={(e) => {
          setQute(e.target.value);
        }}
      />

      <Button
        style={{
          margin: "10px 0px",
        }}
        onClick={addElement}
      >
        Add this Quote
      </Button>
      <br />
      <div
        style={{
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        {item.map(({ id, quote }) => (
          <div key={id}>
            <div>
              {id} : {quote}{" "}
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHome;

// "{item[item.length - 1]}"
//
