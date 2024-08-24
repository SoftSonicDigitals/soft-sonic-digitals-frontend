"use client";
import React, { useState } from "react";

type FilterTagsProps = {
  tags: {
    id: string;
    label: string;
  }[];
};

const SubFilterTags = ({ tags }: FilterTagsProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: any) => {
    setSelectedTags((prevSelectedTags: any) => {
      if (prevSelectedTags.includes(tag.id)) {
        return prevSelectedTags.filter(
          (selectedTagId: any) => selectedTagId !== tag.id
        );
      } else {
        return [...prevSelectedTags, tag.id];
      }
    });
  };

  return (
    <>
      <div className="flex-wrap gap-2 flex">
        {tags.map((tag) => (
          <button
            className={`px-3.5 py-1 border-2   text-sm font-[500] rounded-full ${
              selectedTags.includes(tag.id)
                ? "bg-orange text-white border-orange"
                : "bg-white text-black border-gray-700"
            }
          `}
            key={tag.id}
            onClick={() => handleTagSelect(tag)}
          >
            {tag.label}
          </button>
        ))}
      </div>
      <button className="mt-6  py-2 px-4 bg-black-200 text-white rounded-md  w-full">
        Filter Now
      </button>
    </>
  );
};

export default SubFilterTags;
