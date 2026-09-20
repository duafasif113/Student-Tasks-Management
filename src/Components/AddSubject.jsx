import React, { useState } from "react";
import { useSubjects } from "../context/SubjectsContext";
import { FaBookOpen, FaPlus } from "react-icons/fa";

const AddSubject = () => {
  const [subjectName, setSubjectName] = useState("");

  const { addSubject } = useSubjects();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subjectName.trim()) return;

    addSubject(subjectName);

    setSubjectName("");
  };

  return (
    <div className="min-h-full">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Add New Subject
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Create subjects to organize your tasks efficiently.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-3xl">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Subject Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject Name
            </label>

            <div className="relative">
              <FaBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="e.g. Data Structures & Algorithms"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          {/* Preview */}
          {subjectName && (
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-2">
                Preview
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <FaBookOpen className="text-purple-600" />
                </div>

                <span className="font-medium text-gray-800">
                  {subjectName}
                </span>
              </div>
            </div>
          )}

          {/* Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
              <FaPlus />
              Add Subject
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddSubject;