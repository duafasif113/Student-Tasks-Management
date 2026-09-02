import React from 'react'
import UpdateCards from '../Components/updateCards'
import { SiGoogletasks } from "react-icons/si";
import { GrTasks } from "react-icons/gr";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";








import { Link } from 'react-router-dom';

import { FaCheckSquare } from "react-icons/fa";


  const completedTasks = [
    {
      title: "HTML Assignment",
      subject: "Web Development",
      date: "May 18, 2024",
    },
    {
      title: "JavaScript Quiz",
      subject: "Web Development",
      date: "May 16, 2024",
    },
    {
      title: "Data Structures HW",
      subject: "Computer Science",
      date: "May 14, 2024",
    },
  ];





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



const data = [
  { name: "High", value: 40 },
  { name: "Medium", value: 35 },
  { name: "Low", value: 25 },
];

const COLORS = ["#EF4444", "#F59E0B", "#10B981"];




const tasks = [
    {
      title: "React Assignment",
      subject: "Web Development",
      priority: "High",
      date: "May 25, 2024",
    },
    {
      title: "Database Quiz",
      subject: "Database Systems",
      priority: "Medium",
      date: "May 28, 2024",
    },
    {
      title: "UI/UX Case Study",
      subject: "UI/UX Design",
      priority: "Low",
      date: "May 30, 2024",
    },
    {
      title: "Project Presentation",
      subject: "Software Engineering",
      priority: "High",
      date: "Jun 02, 2024",
    },
  ];


const linechartdata = [
  { day: "Mon", tasks: 12 },
  { day: "Tue", tasks: 18 },
  { day: "Wed", tasks: 15 },
  { day: "Thu", tasks: 25 },
  { day: "Fri", tasks: 20 },
  { day: "Sat", tasks: 30 },
  { day: "Sun", tasks: 28 },
];



const Dashboard = () => {
  return (
    < div className=' flex flex-col gap-4 '>
    <div className='flex gap-2'>
      <UpdateCards title="Total Tasks" count="24" per="+12"  color="bg-purple-600" icon={<GrTasks/>}/>
      <UpdateCards title="Completed" count="12" per="+8"  color="bg-green-400" icon={<SiGoogletasks/>}/>
      <UpdateCards title="Pending" count="8" per="+15"  color="bg-yellow-400" icon={<MdOutlinePendingActions/>}/>
      <UpdateCards title="Overdue" count="4" per="-5"  color="bg-red-600" icon={<FaRegClock/>}/>
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

              <div className="flex flex-col gap-2">
                <span className="text-gray-400">40%{"("}10{")"}</span>
                <span className="text-gray-400">35%{"("}6{")"}</span>
                <span className="text-gray-400">25%{"("}6{")"}</span>
                
                
                </div>

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
        <Link
          to="/tasks"
          className="text-sm font-medium text-purple-600 hover:underline"
        >
          View All
        </Link>
      </div>

    </div>


  {/* <RecentCompleted /> */}


  <div className="bg-white rounded-xl border border-gray-200 p-5 flex-1">

      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Recent Completed
      </h2>

      <div className="space-y-5">

        {completedTasks.map((task, index) => (
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
          to="/tasks/completed"
          className="text-sm font-medium text-purple-600 hover:underline"
        >
          View All
        </Link>
      </div>

    </div>

</div>
    </div>
  )
}

export default Dashboard
