import React from "react";

const Error = ({ message }) => {
  return (
    <div className="alert alert-error shadow-lg">
      <div>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Error;
