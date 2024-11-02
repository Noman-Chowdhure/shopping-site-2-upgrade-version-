import React, { useEffect } from "react";

const PreLoading = ({ onLoading }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onLoading();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [onLoading]);
  return (
    <div>
      <h1>hello fucking world...</h1>
    </div>
  );
};

export default PreLoading;
