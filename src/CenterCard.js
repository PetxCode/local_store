import { Button } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const myStatement = [
  "I am a strong man",
  "The earth is the Load's and the fullnest therefore",
  "One with God is Majority",
  "If God be for me, who can stand against me!",
  "Man know thy self",
  "I am what God says i am!",
  "I am that i am",
  "She likes coding",
  "We love to code, chop and sleep",
];

const myImage = [
  "./asset/1.jpg",
  "./asset/2.jpg",
  "./asset/3.jpg",
  "./asset/4.jpg",
  "./asset/5.jpg",
  "./asset/3.jpg",
];

const myColor = ["lightblue", "pink", "orange", "green", "blue"];

const CenterCard = () => {
  const bgClr = useRef();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.AllItems.item);
  console.log(items[2]);
  const { id, name, title } = items[1];

  const [counter, setCounter] = useState(0);

  const getData = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("err", err));

    console.log(res.data);
    dispatch(res.data);
  };

  // const randNumb = Math.floor(Math.random() * myStatement.length);
  const addCount = () => {
    setCounter(counter + 1);
  };

  const removeCount = () => {
    if (counter === 0) {
      setCounter(myStatement.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCounter((r) => r + 1);
    }, 5000);
  }, [myImage, myStatement]);

  useEffect(() => {
    bgClr.current.style.color =
      myColor[Math.floor(Math.random() * myColor.length)];
  }, [counter]);

  return (
    <div>
      <div
        style={{
          width: "700px",
          height: "400px",
          backgroundColor: "lightgrey",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "700px",
            height: "400px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: " 0 30px  ",
          }}
        >
          <Button onClick={removeCount} type="primary" danger>
            Decrease
          </Button>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "100px",
                color: "red",
              }}
            >
              {counter}
            </div>
            <div
              ref={bgClr}
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {myStatement[counter % myStatement.length]}
            </div>
            <div>
              <img
                src={myImage[counter % myImage.length]}
                alt="image"
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  backgroundColor: "red",
                }}
              />
            </div>
          </div>

          <Button onClick={addCount} type="primary">
            {" "}
            Increase{" "}
          </Button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>{items[2].name}</div>
      <div>{items[2].title}</div>
      <div>{name}</div>
    </div>
  );
};

export default CenterCard;
