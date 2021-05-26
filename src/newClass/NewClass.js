import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuid } from "uuid";

const NewClass = () => {
  const [text, setText] = useState("");
  const [stack, setStack] = useState("");

  const [viewText, setViewText] = useState([
    // { id: 1, name: "Peter", stack: "FrontEnd", time: Date.now() },
    // { id: 2, name: "Ubani", stack: "BackEnd", time: Date.now() },
    // { id: 3, name: "Bukky", stack: "UI/UX", time: Date.now() },
    // { id: 4, name: "Ndidi", stack: "FullStack", time: Date.now() },
  ]);

  const addNewName = () => {
    const id = viewText.length + 1;
    // const id = uuid();
    const add = { id, name: text, stack, time: Date.now() };
    setViewText([...viewText, add]);
    setText("");
    setStack(" ");
  };

  const removeData = (id) => {
    const removeNow = viewText.filter((remove) => {
      return remove.id !== id;
    });
    setViewText(removeNow);
  };

  useEffect(() => {
    const viewJSON = JSON.parse(localStorage.getItem("LocalStore"));
    setViewText(viewJSON);
  }, []);

  useEffect(() => {
    localStorage.setItem("LocalStore", JSON.stringify(viewText));
  }, [viewText]);

  return (
    <div
      style={{
        width: "300px",
      }}
    >
      <div>My New Class</div>

      <div>
        <TextArea
          placeholder="Enter your best Name"
          style={{
            resize: "none",
            // height: "200px",
            marginBottom: "10px",
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <Input
          placeholder="Enter your Stack"
          style={{
            resize: "none",
            // height: "200px",
          }}
          value={stack}
          onChange={(e) => {
            setStack(e.target.value);
          }}
        />

        <Button
          type="primary"
          danger
          style={{
            width: "100%",
            marginTop: "10px",
          }}
          onClick={() => {
            console.log(text, stack);
            addNewName();
          }}
        >
          Add my Quote
        </Button>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <div>
            {viewText.map(({ time, id, name, stack }) => (
              <div
                key={id}
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  margin: "5px",
                }}
              >
                <div> {id}</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    {name}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-around",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    <div> {stack} </div>
                    <div> {moment(time).fromNow()} </div>
                  </div>
                </div>
                <div>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      removeData(id);
                      console.log(id, name);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClass;
