import PropTypes from "prop-types";
const Selected = ({ click, idx }) => {
  const { courseName } = click;
  //   console.log(courseName);
  return (
    <div className="text-sm rounded-lg">
      <ol>
        <li>
          {idx + 1}. {courseName}
        </li>
      </ol>
    </div>
  );
};

Selected.propTypes = {
  click: PropTypes.object,
  idx: PropTypes.number,
};
export default Selected;
