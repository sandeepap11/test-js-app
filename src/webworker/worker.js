/// <reference lib="webworker" />
// declare const self: DedicatedWorkerGlobalScope;

export const add = (a, b) => a + b;

//type Callback = typeof import('./main').callback;

export async function executeCallback(callback) {
  callback("A string from a worker");
}
