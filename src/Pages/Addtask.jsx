import React, { useState } from "react";
import { useContext ,useEffect} from "react";
import { DataContext } from "../context/UserContext";
import {
  FaPlus,
  FaRegCalendarAlt,
  FaFlag,
  FaBook,
  FaAlignLeft,
} from "react-icons/fa";





import Tasks from "./Tasks";
const AddTask = () => {

const{addTask,editingTask, setEditingTask,updateTask }=useContext(DataContext);


        const [showAddTask, setShowAddTask] = useState(false);
    
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");



  useEffect(() => {
  if (editingTask) {
    setTitle(editingTask.title);
    setDescription(editingTask.description);
    setPriority(editingTask.priority);
    setDueDate(editingTask.dueDate);
  }
}, [editingTask]);




  const handleSubmit = (e) => {
    e.preventDefault();

    

    if (editingTask) {
  updateTask({
    ...editingTask,
    title,
    description,
    subject,
    priority,
    dueDate,
  });

  setEditingTask(null);
} else {
  addTask({
    title,
    description,
    subject,
    priority,
    dueDate,
    status: "Pending",
  });
}
    setShowAddTask(true);
    setTitle("");
    setSubject("");
    setDescription("");
    setPriority("");
    setDueDate("");
      setShowAddTask(true); 
  };


 


  return (

    <>
    {showAddTask ? (
    <Tasks  />) : (
    <div className="min-h-full">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Add New Task
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Create a new task and keep your studies organized.
        </p>
      </div>

 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-4xl">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Title
            </label>

            <div className="relative">
              <FaPlus className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="e.g. React Assignment"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          {/* Subject + Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>

              <div className="relative">
                <FaBook className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Database">
                    Database
                  </option>
                  <option value="Data Structures">
                    Data Structures
                  </option>
                  <option value="Operating System">
                    Operating System
                  </option>
                </select>
              </div>
            </div>

            {/* Priority */}
            <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Priority
  </label>

  <div className="relative">
    <FaFlag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

    <select
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 bg-white"
    >
      <option value="">Select Priority</option>
      <option value="High">🔴 High</option>
      <option value="Medium">🟡 Medium</option>
      <option value="Low">🟢 Low</option>
    </select>
  </div>
</div>

          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due Date
            </label>

            <div className="relative">
              <FaRegCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>

            <div className="relative">
              <FaAlignLeft className="absolute left-4 top-4 text-gray-400" />

              <textarea
                rows="5"
                placeholder="Write some details about this task..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-100">

            <button
              type="button"
              className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"

              onClick={() => setShowAddTask(true)}>
  
            
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition flex items-center justify-center gap-2"
            >
              <FaPlus />
              Add Task
            </button>

          </div>

        </form>
      </div>


      {/* Form Card */}
     
    </div>)}
    </>
  );
};

export default AddTask;
