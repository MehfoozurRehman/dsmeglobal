import React from "react";
import loader from "../assets/loader.gif";

export default function Loader({ style }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <img src={loader} alt="loader" style={{ width: 300 }} />
    </div>
  );
}
