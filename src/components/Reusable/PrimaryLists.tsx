import React from "react";
type PrimaryListsPropsType = {
  listArray: string[];
  ulStyles?: string;
  liStyles?: string;
};
const PrimaryLists = ({
  listArray,
  ulStyles,
  liStyles,
}: PrimaryListsPropsType) => {
  return (
    <ul
      className={`text-lg text-gray-400 mb-2 font-[500] list-disc list-outside pl-6 marker:text-orange marker:text-3xl  ${ulStyles}`}
    >
      {listArray.map((bullet, index) => (
        <li key={index} className={`mb-1 last:mb-0  ${liStyles}`}>
          {bullet}
        </li>
      ))}
    </ul>
  );
};

export default PrimaryLists;
