import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function ProgressBar({
  className = "",
  percent = 33,
  big = false,
  color = null,
}) {
  let progressClassName = classNames("progress", className, {
    "progress--big": big,
    "progress--color-red": color === "red",
  });

  return (
    <div className={progressClassName}>
      <div className="progress__bar" style={{ width: `${percent}%` }}></div>
    </div>
  );
}

function validatePercentValue(props, propName, componentName) {
  if (props[propName] < 0 || props[propName] > 100)
    return new Error(
      `Error in prop: ${propName}, component: ${componentName}. Value has to be greater then 0 and lower than 100`
    );
}

ProgressBar.propTypes = {
  percent: validatePercentValue,
  big: PropTypes.bool.isRequired,
};

export default ProgressBar;
