import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);


  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    console.log(action);
    dispatch(action);
  };


  const handleDecreaseClick = () => {
    const action = decrease(); // action creator
    console.log(action);
    dispatch(action);
  };


  return (
    <div>
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
      </div>
      
      counter:{count}
      
      <div>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
