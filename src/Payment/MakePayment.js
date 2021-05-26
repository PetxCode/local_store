import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { app } from "../base";
import firebase from "firebase";
import ViewPayment from "./ViewPayment";

const Payment = () => {
  const [amount, setAmount] = useState("");

  const uploadData = async () => {
    await app
      .firestore()
      .collection("paymentData")
      .doc()
      .set({
        amount: amount / 100,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  const config = {
    reference: new Date().getTime(),
    email: "user@example.com",
    amount: amount,
    publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    uploadData();
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <div>You've entered #{amount / 100}</div>
      <Input
        placeholder="How much would you Love to Give"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        style={{
          marginBottom: "10px",
        }}
      />

      <Button
        type="primary"
        danger
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Donate
      </Button>
    </div>
  );
};

function MakePayment() {
  return (
    <div>
      <Payment />
      <ViewPayment />
    </div>
  );
}

export default MakePayment;
