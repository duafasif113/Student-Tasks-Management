import { createContext, useContext, useEffect, useState } from "react";

const SubjectsContext = createContext();

export const SubjectsProvider = ({ children }) => {
  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem("subjects");

    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "DSA" },
          { id: 2, title: "Computer Networks" },
          { id: 3, title: "Probability & Statistics" },
          { id: 4, title: "COAL" },
          { id: 5, title: "Information Security" },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "subjects",
      JSON.stringify(subjects)
    );
  }, [subjects]);

  const addSubject = (title) => {
    const newSubject = {
      id: Date.now(),
      title: title.trim(),
    };

    setSubjects((prev) => [...prev, newSubject]);
  };

  const deleteSubject = (id) => {
    setSubjects((prev) =>
      prev.filter((subject) => subject.id !== id)
    );
  };

  return (
    <SubjectsContext.Provider
      value={{
        subjects,
        addSubject,
        deleteSubject,
      }}
    >
      {children}
    </SubjectsContext.Provider>
  );
};

export const useSubjects = () => useContext(SubjectsContext);