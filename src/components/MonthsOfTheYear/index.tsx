import { createSignal, For } from "solid-js";
import "./MonthsOfTheYear.css";
import { effect } from "solid-js/web";
import Box from "../Box";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface MonthsOfTheYearProps {
  year: number;
}

export default (props: MonthsOfTheYearProps) => {
  const [monthsOfTheYear, setMonthsOfTheYear] = createSignal<string[][]>([[], [], [], [], [], [], []]);

  effect(() => {
    const newMonthsOfTheYear: string[][] = [[], [], [], [], [], [], []];
    months.forEach((month, index) => {
      const firstDayOfTheMonth = new Date(props.year, index, 1).getDay();
      newMonthsOfTheYear[firstDayOfTheMonth].push(month);
    });
    setMonthsOfTheYear(newMonthsOfTheYear);
  })

  return (
    <section class="MonthsOfTheYear">
      <For each={monthsOfTheYear()}>
        {(dayOfTheWeek) => (
          <div class="column">
            <For each={dayOfTheWeek}>{(month) => <Box area="monthOfTheYear">{month}</Box>}</For>
          </div>
        )}
      </For>
    </section>
  );
};
