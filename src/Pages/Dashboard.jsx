import React from 'react'
import UpdateCards from '../Components/updateCards'
import { SiGoogletasks } from "react-icons/si";
import { GrTasks } from "react-icons/gr";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";




import { DataContext } from '../context/UserContext';
import { useContext } from 'react';



import { Link } from 'react-router-dom';

import { FaCheckSquare } from "react-icons/fa";









import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



import {
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";



// prirprty cart





const COLORS = ["#EF4444", "#F59E0B", "#10B981"];










const Dashboard = () => {

  const{tasks}=useContext(DataContext);





const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const linechartdata = weekDays.map((day) => ({
  day,
  tasks: 0,
}));

tasks.forEach((task) => {
  const dayIndex = new Date(task.dueDate).getDay();

  linechartdata[dayIndex].tasks += 1;
});







const priorities = ["High", "Medium", "Low"];

const data = priorities.map((name) => ({
  name,
  value: 0,
}));

tasks.forEach((task) => {
  const index = priorities.indexOf(task.priority);

  if (index !== -1) {
    data[index].value += 1;
  }
});

console.log(data);





   const getTaskStatus = (task) => {
    if (task.status === "Completed") {
      return "Completed";
    }


    

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);

    if (dueDate < today) {
      return "Overdue";
    }

    return "Pending";
  };

  const totalTasks = tasks.length;

  const completedTask = tasks.filter(
    (task) => getTaskStatus(task) === "Completed"
  ).length;


  const completionPercentage =
  totalTasks === 0
    ? 0
    : Math.round((completedTask / totalTasks) * 100);

  const pendingTasks = tasks.filter(
    (task) => getTaskStatus(task) === "Pending"
  ).length;


  const pendingPercentage =
  totalTasks === 0
    ? 0
    : Math.round((pendingTasks / totalTasks) * 100);


  const overdueTasks = tasks.filter(
    (task) => getTaskStatus(task) === "Overdue"
  ).length;


  const overduePercentage =
  totalTasks === 0
    ? 0
    : Math.round((overdueTasks / totalTasks) * 100);

  return (

    <>

    
    < div className=' flex flex-col gap-4 '>
    <div className='flex gap-2'>
      <UpdateCards title="Total Tasks" count={totalTasks} per={completionPercentage}  color="bg-purple-600" icon={<GrTasks/>}/>
      <UpdateCards title="Completed" count={completedTask} per={completionPercentage}  color="bg-green-400" icon={<SiGoogletasks/>}/>
      <UpdateCards title="Pending" count={pendingTasks} per={pendingPercentage}  color="bg-yellow-400" icon={<MdOutlinePendingActions/>}/>
      <UpdateCards title="Overdue" count={overdueTasks} per={overduePercentage}  color="bg-red-600" icon={<FaRegClock/>}/>
    </div>
    <div className='  flex gap-10 items-center justify-center'>
        
        
        {/* linechart */}
        
        
        <div className="bg-white p-6 rounded-xl shadow w-full h-[300px]">
              <h2 className="text-xl font-semibold mb-4">
                Task Overview
              </h2>
              <div className="w-full h-[220px]">
        
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={linechartdata}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="tasks"
                    stroke="#6D5DFC"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
        
              </div>
            </div>



        {/* Priority Chart */}

 <div className="bg-white p-5 rounded-xl shadow-md w-full h-[300px]">
      <h2 className="text-lg font-semibold mb-4">
        Tasks by Priority
      </h2>

      <div className=" flex w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

             

      </div>
    </div>




    </div>
    <div className="flex flex-col lg:flex-row gap-6">

  {/* <UpcomingTasks  /> */}
<div className="bg-white rounded-xl border border-gray-200 p-5 flex-1">

      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Upcoming Tasks
      </h2>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4"
          >

            {/* Task Name */}
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`w-1 h-10 rounded-full ${
                  task.priority === "High"
                    ? "bg-red-500"
                    : task.priority === "Medium"
                    ? "bg-yellow-400"
                    : "bg-green-400"
                }`}
              />

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {task.title}
                </h3>

                <p className="text-xs text-gray-500">
                  {task.subject}
                </p>
              </div>
            </div>

            {/* Priority */}
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                task.priority === "High"
                  ? "bg-red-100 text-red-500"
                  : task.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {task.priority}
            </span>

            {/* Date */}
            <p className="text-xs text-gray-500 w-24 text-right">
              {task.date}
            </p>

          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-right mt-5">
        <Link to="/tasks?filter=Pending"
                  className="text-sm font-medium text-purple-600 hover:underline"

        >View All</Link>
        
      </div>

    </div>


  {/* <RecentCompleted /> */}


  <div className="bg-white rounded-xl border border-gray-200 p-5 flex-1">

      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Recent Completed
      </h2>

      <div className="space-y-5">

        {tasks
        .filter((task) => task.status == "Completed")
        .map((task,index)=>(

          <div
            key={index}
            className="flex items-center justify-between gap-4"
          >

            {/* Icon + Task */}
            <div className="flex items-center gap-3 flex-1">
              <FaCheckSquare className="text-green-500 text-sm" />

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {task.title}
                </h3>

                <p className="text-xs text-gray-500">
                  {task.subject}
                </p>
              </div>
            </div>

            {/* Date */}
            <p className="text-xs text-gray-500">
              {task.date}
            </p>

          </div>
        ))}

      </div>

      {/* View All */}
      <div className="text-right mt-5">
        <Link
          to="/tasks?filter=Completed"
          className="text-sm font-medium text-purple-600 hover:underline"
        >
          View All
        </Link>
      </div>

    </div>

</div>
    </div>
    </>
  )
}

export default Dashboard
