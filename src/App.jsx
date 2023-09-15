/* eslint-disable no-global-assign */
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  // console.log(info.length);
  const [infos, setinfo] = useState([]);
  const [clicked, setclicked] = useState([]);
  const [prev, set] = useState(0);

  const selectedBtn = (selected, creditValue) => {
    const newClicked = [...clicked, selected];
    setclicked(newClicked);
    const newValue = prev + creditValue;
    set(newValue);
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setinfo(data));
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-4xl mt-6">
        Course Registration
      </h1>
      <hr />
      <div className="flex justify-between mx-6 mt-10">
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-4xl">
          {infos.map((info, idx) => (
            <Card key={idx} info={info} selectedBtn={selectedBtn}></Card>
          ))}
        </div>
        <div className="text-4xl">
          <Cart clicked={clicked} prev={prev}></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
