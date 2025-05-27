import { useContext, type ParentProps } from "solid-js";
import { createStore } from "solid-js/store";
import { BoxContext, boxStoreArea, INITIAL_STORE, INITIAL_STORE_SETTERS, type BoxStore } from "./BoxContext";

export default (props: ParentProps) => {
    const [boxStore, setBoxStore] = createStore(INITIAL_STORE)

    const setArea = (area: keyof BoxStore, value: string | null) => {
        setBoxStore(area, () => value)
    };

    const reset = () => {
        setBoxStore(boxStoreArea.dayOfTheMonth, () => null);
        setBoxStore(boxStoreArea.dayOfTheWeek, () => null);
        setBoxStore(boxStoreArea.monthOfTheYear, () => null);
    };

    return (
        <BoxContext.Provider value={[boxStore, { setArea, reset }]}>
            {props.children}
        </BoxContext.Provider>
    );
};

export const useBoxContext = () => {
  const context = useContext(BoxContext);

  if (!context) {
    throw new Error("useBoxContext must be used within a BoxProvider");
  }

  return context as [ BoxStore, typeof INITIAL_STORE_SETTERS ];
}