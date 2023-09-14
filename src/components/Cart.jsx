import PropTypes from "prop-types";
import Selected from "./Selected";

const Cart = ({ clicked }) => {
  //   const { courseName } = ;
  //   console.log(clicked);
  return (
    <div className="bg-white w-72 p-4 rounded-lg">
      <h5 className="text-lg font-bold py-4 text-[#2F80ED]">
        Credit Hour Remaining hr
      </h5>
      <hr />
      <h5 className="font-bold text-xl py-2">Course Name</h5>
      <div className="pb-4">
        {clicked.map((click) => (
          <Selected key={click.id} click={click}></Selected>
        ))}
      </div>
      <hr />
      <h5 className="text-base py-4">Total Credit Hour : </h5>
      <hr />
      <h5 className="text-base py-4">Total Price : </h5>
    </div>
  );
};

Cart.propTypes = {
  clicked: PropTypes.array,
};
export default Cart;
