import {useState, useRef, useEffect} from "react";

export function useHover<T extends HTMLElement = HTMLDivElement>() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current != null) {
      const elementRef = ref.current;

      const onMouseEnter = () => {
        setHovered(true);
      };
      const onMouseLeave = () => {
        setHovered(false);
      };

      elementRef.addEventListener("mouseenter", onMouseEnter);
      elementRef.addEventListener("mouseleave", onMouseLeave);

      return () => {
        elementRef.removeEventListener("mouseenter", onMouseEnter);
        elementRef.removeEventListener("mouseleave", onMouseLeave);
      };
    }

    return undefined;
  }, []);

  return [ref, hovered] as const;
}
