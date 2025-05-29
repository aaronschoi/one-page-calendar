import { useContext, type ParentProps } from "solid-js";
import { createStore } from "solid-js/store";
import {
  BoxContext,
  boxStoreArea,
  INITIAL_BOX_STORE_AREA_VALUE,
  INITIAL_STORE,
  INITIAL_STORE_SETTERS,
  type BoxStore,
} from "./BoxContext";

export default (props: ParentProps) => {
  const [boxStore, setBoxStore] = createStore(INITIAL_STORE);

  const setValue = (
    area: keyof BoxStore,
    location: string | null,
    value: string | null
  ) => {
    setBoxStore(area, () => {
      return {
        location,
        value,
      };
    });
  };

  const reset = () => {
    setBoxStore(boxStoreArea.dayOfTheMonth, () => structuredClone(INITIAL_BOX_STORE_AREA_VALUE));
    setBoxStore(boxStoreArea.dayOfTheWeek, () => structuredClone(INITIAL_BOX_STORE_AREA_VALUE));
    setBoxStore(boxStoreArea.monthOfTheYear, () => structuredClone(INITIAL_BOX_STORE_AREA_VALUE));
  };

  return (
    <BoxContext.Provider value={[boxStore, { setValue, reset }]}>
      {props.children}
    </BoxContext.Provider>
  );
};

export const useBoxContext = () => {
  const context = useContext(BoxContext);

  if (!context) {
    throw new Error("useBoxContext must be used within a BoxProvider");
  }

  return context as [BoxStore, typeof INITIAL_STORE_SETTERS];
};
