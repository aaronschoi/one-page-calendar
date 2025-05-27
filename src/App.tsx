import { createSignal } from "solid-js";
import "./App.css";
import MonthsOfTheYear from "./components/MonthsOfTheYear";
import DayOfTheMonth from "./components/DayOfTheMonth";
import DayOfTheWeek from "./components/DayOfTheWeek";
import TextContent from "./components/TextContent";
import BoxProvider from "./providers/BoxProvider";

function App() {
  const [currentYear, setCurrentYear] = createSignal(new Date().getFullYear());

  return (
    <main>
      <BoxProvider>
        <TextContent year={currentYear()} setYear={setCurrentYear} />
        <MonthsOfTheYear year={currentYear()} />
        <DayOfTheMonth />
        <DayOfTheWeek />
      </BoxProvider>
    </main>
  );
}

export default App;
