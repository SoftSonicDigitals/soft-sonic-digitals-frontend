"use client";
import { FilterCategoryTypes } from "@/constants/admin";
import { ValueOf } from "next/dist/shared/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

type Tag = {
  id: ValueOf<typeof FilterCategoryTypes>;
  label: string;
};

type FilterTagsProps = {
  tags: Array<Tag>;
  category: ValueOf<typeof FilterCategoryTypes>;
  closeFilterMenu: () => void;
};

const SubFilterTags = ({
  tags,
  category,
  closeFilterMenu,
}: FilterTagsProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // for the ones which are selected already and added in the url
  const activeSelectedTags = searchParams.get(category)?.split(",") || [];

  const [selectedTags, setSelectedTags] =
    useState<Array<ValueOf<typeof FilterCategoryTypes>>>(activeSelectedTags);

  const onFilterNow = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set(category, selectedTags.join(","));
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
    closeFilterMenu();
  };

  const handleMonthFilter = (tag: Tag) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags[0] === tag.id) {
        return [];
      } else {
        return [tag.id];
      }
    });
  };

  const handleTagSelect = (tag: Tag) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag.id)) {
        return prevSelectedTags.filter(
          (selectedTagId: string) => selectedTagId !== tag.id
        );
      } else {
        return [...prevSelectedTags, tag.id];
      }
    });
  };

  const handler = useCallback(
    (tag: Tag) => {
      if (category === FilterCategoryTypes.MONTH) {
        handleMonthFilter(tag);
      } else {
        handleTagSelect(tag);
      }
    },
    [category] // The function is only redefined if 'category' changes
  );

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
            onClick={() => handler(tag)}
          >
            {tag.label}
          </button>
        ))}
      </div>
      <button
        className="mt-6  py-2 px-4 bg-black-200 text-white rounded-md  w-full"
        onClick={() => onFilterNow()}
      >
        Filter Now
      </button>
    </>
  );
};

export default SubFilterTags;
