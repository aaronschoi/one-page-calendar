import "./App.css";
import MonthsOfTheYear from "./components/MonthsOfTheYear";
import DayOfTheMonth from "./components/DayOfTheMonth";
import DayOfTheWeek from "./components/DayOfTheWeek";
import TextContent from "./components/TextContent";
import BoxProvider from "./providers/BoxProvider";
import YearProvider from "./providers/YearProvider";

function App() {
  return (
    <main>
      <YearProvider>
        <BoxProvider>
          <TextContent />
          <MonthsOfTheYear />
          <DayOfTheMonth />
          <DayOfTheWeek />
        </BoxProvider>
      </YearProvider>
    </main>
  );
}

export default App;
