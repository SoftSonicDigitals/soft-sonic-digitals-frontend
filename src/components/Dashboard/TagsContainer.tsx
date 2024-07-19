import React from "react";
import EditTagMenu from "./EditTagMenu";
import { Tags as TagsType } from "@/models/dashboard";
import Tag from "./Tag";
import {
  PRIORITY_TAGS_COLORS,
  STATUS_TAGS_COLORS,
} from "@/prototypes/dashboard";

const TagsContainer = ({ priority, status, id }: TagsType) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div>
        <Tag
          tagName={PRIORITY_TAGS_COLORS[`${priority}`].tagName}
          color={PRIORITY_TAGS_COLORS[`${priority}`].color}
        />
        <Tag
          tagName={STATUS_TAGS_COLORS[`${status}`].tagName}
          color={STATUS_TAGS_COLORS[`${status}`].color}
        />
      </div>
      <EditTagMenu priority={priority} status={status} id={id} />
    </div>
  );
};

export default TagsContainer;
