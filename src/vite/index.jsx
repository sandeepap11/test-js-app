import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import "./index.css";

function ViteApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="vite-main">
      <div>
        <a
          className="vite-link"
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          className="vite-link"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="vite-heading">Vite + React</h1>
      <div className="card">
        <button
          className="vite-button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default ViteApp;
