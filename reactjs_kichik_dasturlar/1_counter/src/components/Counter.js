import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter + 1);
  };
  const dec = () => {
    setCounter(counter - 1);
  };
  const tozalash = () => {
    setCounter(0);
  };
  return (
    <div className="counter">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "300%",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "-15%",
        }}
      >
        Counter App
        <div
          style={{
            fontSize: "120%",
            position: "relative",
            top: "10vh",
          }}
        >
          {counter}
        </div>
        <div className="buttons">
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginRight: "5px",
              backgroundColor: "green",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={inc}
          >
            qo'shish
          </button>
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginLeft: "5px",
              backgroundColor: "red",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={dec}
          >
            kamaytirish
          </button>
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginLeft: "5px",
              backgroundColor: "cyan",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={tozalash}
          >
            tozalash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
