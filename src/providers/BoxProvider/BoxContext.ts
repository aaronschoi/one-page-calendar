import { createContext } from "solid-js";

export const boxStoreArea = {
    dayOfTheMonth: "dayOfTheMonth",
    dayOfTheWeek: "dayOfTheWeek",
    monthOfTheYear: "monthOfTheYear",
} as const;

export type BoxStore = Record<keyof typeof boxStoreArea, string | null>;

export const INITIAL_STORE: BoxStore = {
  dayOfTheMonth: null,
  dayOfTheWeek: null,
  monthOfTheYear: null,
};

const setArea = (area: keyof BoxStore, value: string | null) => {
  console.warn(
    `BoxContext: setArea is not implemented. Attempted to set ${area} to ${value}.`
  );
};

const reset = () => {
  console.warn("BoxContext: reset is not implemented. Resetting box store.");
};

export const INITIAL_STORE_SETTERS = {
    setArea,
    reset,
}

export const BoxContext = createContext([INITIAL_STORE, INITIAL_STORE_SETTERS]);
