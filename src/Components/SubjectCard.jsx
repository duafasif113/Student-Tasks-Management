


import React from "react";
import { FaBookOpen } from "react-icons/fa";

const SubjectCard = ({ title, tasks, progress,onDelete }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-[320px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
            <FaBookOpen className="text-purple-600 text-xl" />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800 text-lg">
              {title}
            </h2>

            <p className="text-sm text-gray-500">
              {tasks} Tasks
            </p>
          </div>
        </div>

        <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
          {progress}%
        </span>
      </div>

      {/* Progress Section */}
      <div className="mt-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">
            Completion
          </span>

          <span className="font-medium text-gray-700">
            {progress}%
          </span>
        </div>

        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
        

        <span className="font-semibold text-purple-600">
          {progress >= 100
            ? "Completed"
            : progress >= 50
            ? "In Progress"
            : "Getting Started"}
        </span>
        <button
  onClick={onDelete}
  className="text-red-500 hover:text-red-700"
>
  Delete
</button>
      </div>
    </div>
  );
};

export default SubjectCard;
