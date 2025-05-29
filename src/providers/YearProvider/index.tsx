import { createSignal, useContext, type ParentProps } from "solid-js";
import { YearContext } from "./YearContext";

export default (props: ParentProps) => {
  const [year, setYear] = createSignal(new Date().getFullYear());

  const increment = () => setYear(year() + 1);
  const decrement = () => setYear(year() - 1);
  const setters = {
    increment,
    decrement,
  };

  return (
    <YearContext.Provider value={[year, setters]}>
      {props.children}
    </YearContext.Provider>
  );
};

export const useYearContext = () => {
  const context = useContext(YearContext);

  if (!context) {
    throw new Error("useYearContext must be used within a YearProvider");
  }

  return context;
};
