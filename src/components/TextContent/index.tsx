import { useYearContext } from "../../providers/YearProvider";
import "./TextContent.css";

export default () => {
  const [year, { increment, decrement }] = useYearContext();
  return (
    <section class="TextContent">
      <div class="title-container">
        <button
          class="decrement"
          onClick={() => {
            if (year() > 1970) {
              decrement();
            }
          }}
        >
          {"<"}
        </button>
        <h1>{year()} Calendar</h1>
        <button
          class="increment"
          onClick={() => {
            increment();
          }}
        >
          {">"}
        </button>
      </div>
      <div class="content">
        <p>
          Heavily inspired by this{" "}
          <a
            href="https://medium.com/starts-with-a-bang/the-one-page-calendar-that-changes-how-you-view-the-year-e10b37af2af6"
            target="_blank"
            rel="noopener noreferrer"
          >
            article
          </a>
          !
        </p>
      </div>
    </section>
  );
};
