import PropTypes from "prop-types";

const Card = ({ info, selectedBtn }) => {
  const { courseName, imageLink, courseDetails, priceValue, creditValue } =
    info;
  return (
    <div className="bg-white w-72 rounded-xl p-4 space-y-4">
      <img src={imageLink} alt="" />
      <h1 className="text-lg font-semibold	">{courseName}</h1>
      <p className="text-sm font-normal text-clip">{courseDetails}</p>
      <div className="flex justify-between mt-4">
        <h3>Price:{priceValue}</h3>
        <h3>Credit:{creditValue} hr</h3>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => selectedBtn(info, creditValue)}
          className="bg-blue-600 w-11/12 text-white hover:bg-black rounded-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  info: PropTypes.object.isRequired,
  selectedBtn: PropTypes.func.isRequired,
};
export default Card;
