import { useState } from "react";
import { styled } from "styled-components";
import { Helmet } from "react-helmet-async";

let intervalId = undefined;

const Counter = () => {
  const [count, setCount] = useState(86390);
  const [isRunning, setIsRunning] = useState(false);

  const onReset = (isPause = false) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    if (isPause) {
      setIsRunning(false);
      return;
    }

    setIsRunning(false);
    setCount(0);
  };

  const onStartStop = () => {
    if (isRunning) {
      onReset(true);
      return;
    }
    let newCount = count;
    setIsRunning(true);
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      setCount(++newCount);
    }, 1000);
  };

  const hour = parseInt(count / 3600);
  const minute = parseInt(count / 60) % 60;
  const second = count % 60;
  return (
    <CounterContainer>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>
          BBC Home - Breaking News, World News, US News, Sports, Business,
          Innovation, Climate, Culture, Travel, Video &amp; Audio
        </title>
        <meta
          property="og:title"
          content="Counter for all"
        />
        <meta
          name="twitter:title"
          content="Counter for all"
        />
        <meta
          name="description"
          content="Use this counter for all"
        />
        <meta
          property="og:description"
          content="Use this counter for all"
        />
        <meta
          name="twitter:description"
          content="Use this counter for all"
        />
        {/* <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="NOODP, NOYDIR" /> */}
      </Helmet>
      <button onClick={onStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button className="red" disabled={count === 0} onClick={() => onReset()}>
        Reset
      </button>
      <h1>Counter</h1>
      <p className="display red">{count}</p>
      <hr />
      <h1>Timer</h1>
      <div className="timer">
        <p className="display">
          {hour < 10 ? "0" : ""}
          {hour}:
        </p>
        <p className="display">
          {minute < 10 ? "0" : ""}
          {minute}:
        </p>
        <p className="display">
          {second < 10 ? "0" : ""}
          {second}
        </p>
      </div>
    </CounterContainer>
  );
};

export default Counter;

const CounterContainer = styled.div`
  background: #000;
  padding: 40px 20px;
  color: #fff;
  text-align: center;
  min-height: 100vh;
  button {
    margin: 0 10px;
    padding: 8px 16px;
    height: 48px;
    min-width: 180px;
    font-size: 24px;
    border: none;
    border-radius: 60px;
    color: #fff;
    background: #0473ea;
    cursor: pointer;
    &.red {
      background: #f00;
    }
    &:disabled {
      background: #bababa;
    }
  }
  h1 {
    font-size: 48px;
    line-height: 1.43;
    margin: 20px 0 10px;
  }
  p.display {
    font-family: technology;
    font-size: 156px;
    font-weight: bold;
    margin: 5px 2px;
    &.red {
      color: #f00;
    }
  }
  .timer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  hr {
    margin: 5px 0 20px;
  }
`;
