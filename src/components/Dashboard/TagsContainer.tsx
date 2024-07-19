import React from "react";
import EditTagMenu from "./EditTagMenu";
import { Tags as TagsType } from "@/models/dashboard";
import Tag from "./Tag";
import {
  PRIORITY_TAGS_COLORS,
  STATUS_TAGS_COLORS,
} from "@/prototypes/dashboard";

const TagsContainer = ({ priority, status, id }: TagsType) => {
  const priorityTagInfo = PRIORITY_TAGS_COLORS[`${priority}`];
  const statusTagInfo = STATUS_TAGS_COLORS[`${status}`];
  return (
    <div className="mb-8 flex items-center gap-4">
      {(priorityTagInfo || statusTagInfo) && (
        <div className="flex gap-2">
          <Tag
            tagName={priorityTagInfo?.tagName}
            color={priorityTagInfo?.color}
          />
          <Tag tagName={statusTagInfo?.tagName} color={statusTagInfo?.color} />
        </div>
      )}
      <EditTagMenu priority={priority} status={status} id={id} />
    </div>
  );
};

export default TagsContainer;
