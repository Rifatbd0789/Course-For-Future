/* eslint-disable no-global-assign */
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  // console.log(info.length);
  const [infos, setinfo] = useState([]);

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
      <div className="flex gap-10 justify-center mt-10 mx-12">
        <div className="grid grid-cols-3 gap-10 mb-16">
          {infos.map((info) => (
            <Card key={info.creditValue} info={info}></Card>
          ))}
        </div>
        <div className="text-4xl">
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
