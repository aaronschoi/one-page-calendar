import { For } from "solid-js";
import "./DayOfTheWeek.css";
import Box from "../Box";

const daysOfTheWeek = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
] as const;

const OffsetWeek = (props: { offset: number }) => {
  let formattedDaysOfTheWeek;

  if (props.offset > 0) {
    const newDaysOfTheWeek: string[] = new Array(7).fill("");
    for (let i = 0; i < 7; i++) {
      newDaysOfTheWeek[i] = daysOfTheWeek.at(((i + props.offset) % 7) - 7) ?? '';
    }
    formattedDaysOfTheWeek = newDaysOfTheWeek;
  } else {
    formattedDaysOfTheWeek = daysOfTheWeek;
  }

  return <For each={formattedDaysOfTheWeek}>{(day) => <Box area="dayOfTheWeek" className={day}>{day}</Box>}</For>;
};

export default () => {
  return (
    <section class="DayOfTheWeek">
      <OffsetWeek offset={0} />
      <OffsetWeek offset={1} />
      <OffsetWeek offset={2} />
      <OffsetWeek offset={3} />
      <OffsetWeek offset={4} />
      <OffsetWeek offset={5} />
      <OffsetWeek offset={6} />
    </section>
  );
};
