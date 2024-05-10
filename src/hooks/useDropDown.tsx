import { useState } from "react";

const useDropDown = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const isOpen = (selected: number | null, index: number) => {
    return selected === index;
  };
  return {
    selected,
    toggle,
    isOpen,
  };
};

export default useDropDown;
