import React, { PropsWithChildren, useCallback } from "react";

import { EmblaCarouselType } from "embla-carousel";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button bg-gradient-to-r from-orange to-pink p-3.5 rounded-full"
      type="button"
      {...restProps}
    >
      <FaArrowLeftLong className="text-md text-white " />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button bg-gradient-to-r from-orange to-pink p-3.5  rounded-full"
      type="button"
      {...restProps}
    >
      <FaArrowRightLong className="text-md text-white " />
      {children}
    </button>
  );
};
