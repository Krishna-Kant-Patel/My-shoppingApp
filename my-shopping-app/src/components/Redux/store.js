// import {legacy_createStore as createStore} from 'redux';
// import { createContext, useState } from 'react';
// import reducerFunction from './Reducer';
// import { Provider } from 'react-redux';
// const myContext = createContext()
// const myReduxStore = createStore(reducerFunction);

// export default myReduxStore;

// function Customprovider(){
//     const [data, setData] = useState('');
//     <myContext.Provider value ={data} >

//     </myContext.Provider>
// }
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0); // Timer in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Update every 1 second
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
