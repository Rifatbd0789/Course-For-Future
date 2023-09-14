/* eslint-disable no-global-assign */
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setinfo(data));
  }, []);
  console.log(info.length);

  return (
    <>
      <h1 className="text-center font-bold text-4xl mt-6">
        Course Registration
      </h1>
      <hr />
      <div className="flex gap-10 justify-center mt-10">
        <div className="text-4xl">Card : {info.length}</div>
        <div className="text-4xl">I am Cart</div>
      </div>
    </>
  );
}

export default App;
