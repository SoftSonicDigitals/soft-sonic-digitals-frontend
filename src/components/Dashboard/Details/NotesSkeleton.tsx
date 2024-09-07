import React from "react";

const NotesSkeleton = () => {
  return (
    <div className="flex flex-col mb-5 animate-pulse">
      {/* Skeleton for Header and Note Count */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4">
          {/* Skeleton for Heading */}
          <div className="h-8 w-32 bg-gray-300 rounded-md"></div>

          {/* Skeleton for Note Count */}
          <div className="w-9 h-9 bg-gray-300 p-2 text-center rounded-lg flex-center text-gray-400 font-[700]"></div>
        </div>
        <div className="flex-center gap-3 font-[700] text-sm text-gray-400 cursor-not-allowed">
          {/* Skeleton for Add Note Button */}
          <div className="w-8 h-8 bg-gray-300 rounded-full flex-center"></div>
          <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>

      {/* Skeleton for NoteItems */}
      {[1].map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-4 mb-4 p-4 bg-gray-300 rounded-md"
        >
          {/* Skeleton for NoteItem */}
          <div className="w-full h-24 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default NotesSkeleton;
