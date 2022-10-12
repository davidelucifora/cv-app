import React from "react";
export default (function helpers() {
  const unid = () => {
    return (
      Math.floor(Math.random() * Date.now())
        .toString(Math.floor(Math.random() * (36 - 12) + 12))
        .substring(1, 8) +
      "-" +
      Math.floor(Math.random() * Date.now())
        .toString(Math.floor(Math.random() * (36 - 12) + 12))
        .substring(1, 8)
    );
  };
  return { unid };
})();
