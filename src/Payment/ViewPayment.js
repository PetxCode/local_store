import React, { useEffect, useState } from "react";
import { app } from "../base";
import moment from "moment";

const ViewPayment = () => {
  const [view, setView] = useState([]);

  const viewAll = async () => {
    await app
      .firestore()
      .collection("paymentData")
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setView(r);
      });
  };

  useEffect(() => {
    viewAll();
  }, []);

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <idv>
        {view.map(({ id, amount, createdAt }) => (
          <div key={id}>
            <div>{amount}</div>
            <div>{moment(createdAt.toDate()).fromNow()}</div>
          </div>
        ))}
      </idv>
    </div>
  );
};

export default ViewPayment;
