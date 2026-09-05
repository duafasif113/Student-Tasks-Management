


import React from "react";
import { FaSearch, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import AddTask from "./Addtask";
import { useState } from "react";

import { useContext,useEffect } from "react";
import { DataContext } from "../context/UserContext";

import { useNavigate } from "react-router-dom";
import { SiElsevier } from "react-icons/si";


import { useSearchParams } from "react-router-dom";


//update task


const Tasks = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
const [selectedStatus, setSelectedStatus] = useState("All Tasks");
const [selectedPriority, setSelectedPriority] = useState("All Priorities");

    const navigate=useNavigate();
const{ tasks,
        addTask,
        deleteTask,
        updateTask,setEditingTask,markAsDone}=useContext(DataContext);

const EditTask = (task) => {
  setEditingTask(task);
  setShowAddTask(true);
};


    const[filterpriority,setfilterPriority]=useState(tasks);

  useEffect(() => {
  setfilterPriority(tasks);
}, [tasks]);
        

 const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-600";

    case "Medium":
      return "bg-yellow-100 text-yellow-600";

    case "Low":
      return "bg-green-100 text-green-600";

    default:
      return "bg-gray-100 text-gray-600";
  }
};


const getTaskStatus = (task) => {
  if (task.status === "Completed") {
    return "Completed";
  }

  const today = new Date();
  const dueDate = new Date(task.dueDate);

  if (dueDate < today) {
    return "Overdue";
  }

  return "Pending";
};

//status color
const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-600";

    case "Overdue":
      return "bg-red-100 text-red-600";

    default:
      return "bg-yellow-100 text-yellow-600";
  }
};
const [searchParams] = useSearchParams();

const filter = searchParams.get("filter");

const filteredTasks = tasks.filter((task) => {
  const status = getTaskStatus(task);

  const matchesSearch =
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.subject.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesPriority =
    selectedPriority === "All Priorities" ||
    task.priority === selectedPriority;

  const matchesStatus =
    selectedStatus === "All Tasks" ||
    status === selectedStatus;



     const matchesDashboardFilter =
    !filter || status === filter;

    
  return (
    matchesSearch &&
    matchesPriority &&
    matchesStatus&&
    matchesDashboardFilter
  );
});

//task status





          

  return (

<>

{showAddTask ? (
<AddTask  />) : (
       <div className="p-6">


      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            My Tasks
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage and track all your tasks
          </p>
        </div>

        <button 

        

         onClick={() => {
    setEditingTask(null);
    setShowAddTask(true);
  }}
        
        className="bg-purple-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition">
          <FaPlus />
          Add Task
        </button>
      </div>

      {/* Search + Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">

        <div className="flex flex-col lg:flex-row gap-4">

          {/* Search */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"

              placeholder="Search tasks..."
              value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Status */}
         <select
  value={selectedStatus}
  onChange={(e) => setSelectedStatus(e.target.value)}
  className="px-4 py-3 border border-gray-200 rounded-xl outline-none bg-white"
>
  <option>All Tasks</option>
  <option>Pending</option>
  <option>Completed</option>
  <option>Overdue</option>
</select>

          {/* Priority */}
          <select className="px-4 py-3 border border-gray-200 rounded-xl outline-none bg-white"
         value={selectedPriority}
         
         onChange={(e)=>setSelectedPriority(e.target.value)}>
            <option >All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-600">
          <div className="col-span-4">Task</div>
          <div className="col-span-2">Subject</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Action</div>
        </div>

        {/* Task 1 */}

        {[...filteredTasks].reverse().map((task)=>{
return(
        
        <div key={task.id}   className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 border-b border-gray-100 items-center">

          <div className="md:col-span-4">
            <h3 className="font-semibold text-gray-800">
              {task.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {task.description}
            </p>
          </div>

          <div className="md:col-span-2 text-sm text-gray-600">
            {task.subject}
          </div>

          <div className="md:col-span-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium  ${getPriorityColor(
    task.priority
  )}`}>
              {task.priority}
            </span>
          </div>

          <div className="md:col-span-2 text-sm text-gray-600">
  {new Date(task.dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}
</div>


<span
  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
    getTaskStatus(task)
  )}`}
>
   {getTaskStatus(task)}
</span>

          <div className="md:col-span-1 flex gap-3">
            <button className="text-blue-500 hover:text-blue-700">
              <FaEdit  onClick={()=>EditTask(task)}/>
            </button>


{task.status !== "Completed" ? (
  <button
    onClick={() => markAsDone(task.id)}
    className="text-green-500 hover:text-green-700 text-xs font-medium"
>
   Done
  </button>
) : (
  <span className="text-green-500 text-lg">
    ✅
  </span>
)}
            <button className="text-red-500 hover:text-red-700">
              <FaTrash   onClick={()=>{
                deleteTask(task.id),
                alert("Task is deleted")
              }} />
            </button>
          </div>

        </div>
        )})}

        

      </div>

      
    </div> )}
    </>
  );
};

export default Tasks;