import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/loader.json";

export default function Loader({ style }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
