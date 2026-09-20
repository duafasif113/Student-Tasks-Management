import React, { useContext, useState } from "react";
import SubjectCard from "../Components/SubjectCard";
import { DataContext } from "../context/UserContext";
import { useSubjects } from "../context/SubjectsContext";

const Subjects = () => {
  const { tasks } = useContext(DataContext);

  const [subjectName, setSubjectName] = useState("");

  const { subjects, addSubject, deleteSubject } = useSubjects();

  const getSubjectProgress = (subjectName) => {
    const subjectTasks = tasks.filter(
      (task) => task.subject === subjectName
    );

    const total = subjectTasks.length;

    const completed = subjectTasks.filter(
      (task) => task.status === "Completed"
    ).length;

    return total === 0
      ? 0
      : Math.round((completed / total) * 100);
  };

  const getSubjectTasksCount = (subjectName) => {
    return tasks.filter(
      (task) => task.subject === subjectName
    ).length;
  };

const handleDeleteSubject = (id) => {
  deleteSubject(id);
};
  return (
    <>
      {/* Add Subject */}

      <div className="mb-20">
        <input
          type="text"
          placeholder="Enter Subject"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          onClick={() => {
            if (!subjectName.trim()) return;

            addSubject(subjectName);
            setSubjectName("");
          }}
          className="bg-purple-600 text-white px-4 py-2 ml-2 rounded"
        >
          Add Subject
        </button>
      </div>

      {/* Subject Cards */}

      <div className="flex flex-wrap gap-5">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            title={subject.title}
            tasks={getSubjectTasksCount(subject.title)}
            progress={getSubjectProgress(subject.title)}
              onDelete={() => handleDeleteSubject(subject.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Subjects;