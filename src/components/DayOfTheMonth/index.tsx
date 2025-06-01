import { For } from "solid-js";
import "./DayOfTheMonth.css";
import Box from "../Box";

interface DayProps {
  day: number;
}

const Day = (props: DayProps) => {
  const dateArray = [
    props.day,
    props.day + 7,
    props.day + 14,
    props.day + 21,
    props.day + 28,
  ];
  return (
    <For each={dateArray}>
      {(date) => {
        if (date < 32) {
          return (
            <Box
              area="dayOfTheMonth"
              value={date.toString()}
            >
              {date}
            </Box>
          );
        }
      }}
    </For>
  );
};

export default () => {
  return (
    <section class="DayOfTheMonth">
      <Day day={1} />
      <Day day={2} />
      <Day day={3} />
      <Day day={4} />
      <Day day={5} />
      <Day day={6} />
      <Day day={7} />
      <div class="spacer" />
    </section>
  );
};
