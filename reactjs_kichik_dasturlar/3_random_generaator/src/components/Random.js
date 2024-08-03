import { useState } from "react";

const Random = () => {
  const [max, setMax] = useState(100000);
  const [random, setRandom] = useState(null);

  const randomGen = () => {
    const maxV = parseInt(max);

    const r = Math.floor(Math.random() * maxV);
    setRandom(r);
  };

  return (
    <div className="random">
      <h1>Random number generator</h1>
      <button onClick={randomGen}>Number random</button>
      {random !== null && <h1>Random number {random}</h1>}
    </div>
  );
};

export default Random;
