import { createSignal, createUniqueId, type ParentProps } from "solid-js";
import {
  boxStoreArea,
  type BoxStore,
} from "../../providers/BoxProvider/BoxContext";
import { useBoxContext } from "../../providers/BoxProvider";
import "./Box.css";
import { getClasses } from "../../util/getClasses";
import { effect } from "solid-js/web";
import { useYearContext } from "../../providers/YearProvider";
import { getLastDayOfMonth } from "../../util/getLastDayOfMonth";

interface BoxProps extends ParentProps {
  area: keyof BoxStore;
  value: string | null;
  className?: string;
}

export default ({ children, area, className, value }: BoxProps) => {
  const [boxStore, { setValue }] = useBoxContext();
  const [year] = useYearContext();
  const id = createUniqueId();
  const [disabled, setDisabled] = createSignal(false);
  const [classes, setClasses] = createSignal(
    getClasses("Box", area, disabled() && "disabled", className)
  );

  effect(() => {
    setClasses(getClasses("Box", area, disabled() && "disabled", className));
    if (area === boxStoreArea.dayOfTheMonth) {
      const date = value !== null && parseInt(value);
      const month =
        boxStore.monthOfTheYear.value !== null &&
        parseInt(boxStore.monthOfTheYear.value);
      const isDisabled =
        typeof date === "number" &&
        date > 27 &&
        typeof month === "number" &&
        date > getLastDayOfMonth(year(), month);
      setDisabled(isDisabled);
      if (isDisabled) {
        const checkCurrentValue = boxStore[area].value
          ? parseInt(boxStore[area].value)
          : null;
        if (checkCurrentValue === date) {
          setValue(area, null, null);
        }
      }
    }
  });

  effect(() => {
    year()
    if (
      area === boxStoreArea.monthOfTheYear &&
      boxStore.monthOfTheYear.value !== null &&
      value === boxStore.monthOfTheYear.value
    ) {
      setValue(boxStoreArea.monthOfTheYear, id, boxStore.monthOfTheYear.value);
    }
  });

  return (
    <div
      class={classes()}
      onClick={() => {
        if (!disabled()) {
          if (id === boxStore[area].location) {
            setValue(area, null, null);
          } else {
            setValue(area, id, value);
          }
        }
      }}
      data-selected={id === boxStore[area].location}
    >
      {children}
    </div>
  );
};
