import { createContext, type Accessor } from "solid-js";

const increment = () => {
  console.warn(
    `YearContext: increment is not implemented. Attempting to increment year.`
  );
};

const decrement = () => {
  console.warn(
    `YearContext: decrement is not implemented. Attempting to decrement year.`
  );
};

export const INITIAL_YEAR_SETTERS = {
  increment,
  decrement,
};

type YearValue = [Accessor<number>, typeof INITIAL_YEAR_SETTERS];

export const YearContext = createContext<YearValue>([
  () => new Date().getFullYear(),
  INITIAL_YEAR_SETTERS,
]);
