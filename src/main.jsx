import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import "./index.css";
import * as Comlink from "comlink";

//type WorkerModule = typeof import('./worker');

// Create Worker
const workerInstance = new ComlinkWorker(
  new URL("./webworker/worker", import.meta.url)
);

const result = await workerInstance.add(2, 3);
console.log(result);

export const callback = (string) => console.log(string);

const proxiedCallback = Comlink.proxy(callback);

await workerInstance.executeCallback(proxiedCallback);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
