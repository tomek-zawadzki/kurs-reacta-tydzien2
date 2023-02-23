import React from "react";

function ProgressBar({ className = "", percent = 33 }) {
  return (
    <div className={"progress " + className}>
      <div className="progress__bar" style={{ width: `${percent}%` }}></div>
    </div>
  );
}

export default ProgressBar;
