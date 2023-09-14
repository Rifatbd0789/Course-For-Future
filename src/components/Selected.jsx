import PropTypes from "prop-types";

const Selected = ({ click }) => {
  const { courseName } = click;
  console.log(click);
  return (
    <div className="text-sm rounded-lg">
      <ul>
        <li>{courseName}</li>
      </ul>
    </div>
  );
};

Selected.propTypes = {
  click: PropTypes.array,
};
export default Selected;
