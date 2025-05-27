import { createUniqueId, type ParentProps } from "solid-js";
import { type BoxStore } from "../../providers/BoxProvider/BoxContext";
import { useBoxContext } from "../../providers/BoxProvider";
import "./Box.css";

interface BoxProps extends ParentProps {
  area: keyof BoxStore;
  className?: string;
}

export default ({ children, area, className }: BoxProps) => {
  const [boxStore, { setArea }] = useBoxContext();
  const id = createUniqueId();

  return (
    <div
      class={`Box ${area} ${className ?? ""}`}
      onClick={() => {
        setArea(area, boxStore[area] === id ? null : id);
      }}
      data-selected={id === boxStore[area]}
    >
      {children}
    </div>
  );
};
