import { MutableRefObject, useEffect, useRef } from "react";

export const useClickOutside = (handler: () => void) => {
  let domNode: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    let maybeHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};
