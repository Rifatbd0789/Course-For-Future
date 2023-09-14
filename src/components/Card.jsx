const Card = ({ info }) => {
  const { courseName, imageLink, courseDetails, priceValue, creditValue } =
    info;
  return (
    <div className="bg-white rounded-xl p-4 space-y-4">
      <img src={imageLink} alt="" />
      <h1 className="text-lg font-semibold	">{courseName}</h1>
      <p className="text-sm font-normal">{courseDetails}</p>
      <div className="flex justify-between mt-4">
        <h3>Price:{priceValue}</h3>
        <h3>Credit:{creditValue}</h3>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-600 w-11/12 text-white hover:bg-black rounded-lg">
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
