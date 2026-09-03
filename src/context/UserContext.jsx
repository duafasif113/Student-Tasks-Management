import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {


  const [editingTask, setEditingTask] = useState(null);



  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });



  


  // Save tasks in localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Update Task
  const updateTask = (updatedTask) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );
};


//mark as done
const markAsDone = (id) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? { ...task, status: "Completed" }
        : task
    )
  );
};


  return (
    <DataContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        editingTask,
      setEditingTask
      
      ,markAsDone
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;