import { createContext } from "solid-js";

export const boxStoreArea = {
  dayOfTheMonth: "dayOfTheMonth",
  dayOfTheWeek: "dayOfTheWeek",
  monthOfTheYear: "monthOfTheYear",
} as const;

interface BoxStoreAreaValue {
  location: string | null;
  value: string | null;
}

export type BoxStore = Record<keyof typeof boxStoreArea, BoxStoreAreaValue>;

export const INITIAL_BOX_STORE_AREA_VALUE: BoxStoreAreaValue = {
  location: null,
  value: null,
};

export const INITIAL_STORE: BoxStore = {
  dayOfTheMonth: structuredClone(INITIAL_BOX_STORE_AREA_VALUE),
  dayOfTheWeek: structuredClone(INITIAL_BOX_STORE_AREA_VALUE),
  monthOfTheYear: structuredClone(INITIAL_BOX_STORE_AREA_VALUE),
};

const setValue = (
  area: keyof BoxStore,
  location: string | null,
  value: string | null
) => {
  console.warn(
    `BoxContext: setArea is not implemented. Attempting to set area "${area}" with location "${location}" and value "${value}".`
  );
};

const reset = () => {
  console.warn("BoxContext: reset is not implemented. Resetting box store.");
};

export const INITIAL_STORE_SETTERS = {
  setValue,
  reset,
};

export const BoxContext = createContext([INITIAL_STORE, INITIAL_STORE_SETTERS]);
