import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import main from "./main";

const Breakout = () => {
  useEffect(() => {
    main();
  }, []);

  return (
    <div>
      <canvas className="breakout" width="600" height="600"></canvas>
    </div>
  );
};

export default Breakout;
