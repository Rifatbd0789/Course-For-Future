import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Card Showing
  const [infos, setinfo] = useState([]);
  // Course Name Add
  const [clicked, setclicked] = useState([]);
  // Total Credit Hour
  const [prev, set] = useState(0);
  // Credit Hour Remaining
  const [remaining, setremaining] = useState(20);
  // Total Price
  const [PrevPrice, setPrice] = useState(0);
  const selectedBtn = (selected, creditValue, priceValue) => {
    const newValue = prev + creditValue;
    const newRemaining = remaining - creditValue;
    const newPrice = PrevPrice + priceValue;
    const newClicked = [...clicked, selected];
    const dublicate = [...clicked].find((p) => p === selected);
    if (dublicate) {
      toast("You Have Already Selected This Course! Please Choose Another One");
    } else {
      if (newValue > 20) {
        toast(
          "Sorry!  You Have Reached Maximum Credit Hours! Please Check Your Total and Remaining Credit Hours!"
        );
      } else {
        setclicked(newClicked);
        setPrice(newPrice);
        setremaining(newRemaining);
        set(newValue);
      }
    }
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
      <div className="flex flex-col-reverse md:flex-col lg:flex-row     md:justify-center lg:justify-between mx-6 mt-10">
        <div className="flex md:grid lg:grid md:grid-cols-2 flex-col lg:grid-cols-3  gap-8 mb-16 justify-center w-full lg:max-w-4xl">
          {infos.map((info, idx) => (
            <Card key={idx} info={info} selectedBtn={selectedBtn}></Card>
          ))}
        </div>
        <div className="text-4xl  mb-5">
          <Cart
            clicked={clicked}
            prev={prev}
            remaining={remaining}
            PrevPrice={PrevPrice}
          ></Cart>
          <div className="text-xl">
            <ToastContainer className={"font-bold"}></ToastContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
