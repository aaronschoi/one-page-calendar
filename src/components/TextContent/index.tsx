import "./TextContent.css";

interface TextContentProps {
  year: number;
  setYear: (year: number) => void;
}

export default (props: TextContentProps) => {
  return (
    <section class="TextContent">
      <div class="title-container">
        <button
          class="decrement"
          onClick={() => {
            if (props.year > 1970) {
              props.setYear(props.year - 1);
            }
          }}
        >
          {"<"}
        </button>
        <h1>{props.year} Calendar</h1>
        <button
          class="increment"
          onClick={() => {
            props.setYear(props.year + 1);
          }}
        >
          {">"}
        </button>
      </div>
    </section>
  );
};
