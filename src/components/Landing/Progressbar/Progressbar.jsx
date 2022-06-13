import React from "react";

const Progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "#D9D9D933",
    borderRadius: 40,
    marginTop: 7,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "center",
  };

  const progresstext = {
    padding: 10,
    color: "#000000cc",
    fontWeight: 500,
    fontSize: "14px",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}% Filled`}</span>
      </div>
    </div>
  );
};

export default Progress_bar;
