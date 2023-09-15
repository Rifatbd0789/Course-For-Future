import PropTypes from "prop-types";

const Selected = ({ click }) => {
  const { courseName } = click;
  //   console.log(courseName);
  return (
    <div className="text-sm rounded-lg">
      <ol style={{ listStyleType: "upper-roman" }}>
        <li>{courseName}</li>
      </ol>
    </div>
  );
};

Selected.propTypes = {
  click: PropTypes.object,
};
export default Selected;
