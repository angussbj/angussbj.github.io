import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useHoverAndPress(): {
  ref: React.MutableRefObject<any>;
  hovered: boolean;
  pressed: boolean;
} {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef(null);

  const handleMouseOver = (): void => setHovered(true);
  const handleMouseOut = (): void => {
    setHovered(false);
    setPressed(false);
  };
  const handleMouseDown = (): void => setPressed(true);
  const handleMouseUp = (): void => setPressed(false);

  useEffect((): void | (() => void) => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      node.addEventListener("mousedown", handleMouseDown);
      node.addEventListener("mouseup", handleMouseUp);

      return (): void => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
        node.removeEventListener("mousedown", handleMouseDown);
        node.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  return { ref, hovered, pressed };
}
