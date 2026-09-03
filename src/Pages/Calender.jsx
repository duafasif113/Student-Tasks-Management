import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { DataContext } from "../context/UserContext";

const CalendarPage = () => {
  const { tasks } = useContext(DataContext);

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Selected date ko YYYY-MM-DD format me convert karna
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // Selected date ke tasks
  const selectedTasks = tasks.filter(
    (task) => task.dueDate === formatDate(selectedDate)
  );

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-gray-800">
        Calendar
      </h1>

      <p className="text-sm text-gray-500 mt-1 mb-6">
        View your tasks by due date
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Calendar */}
<div className="bg-white p-6 rounded-xl border border-gray-200 w-full max-w-lg">
              <Calendar
  onChange={setSelectedDate}
  value={selectedDate}
  tileContent={({ date, view }) => {
    if (view !== "month") return null;

    const dateString = formatDate(date);

    const hasTask = tasks.some(
      (task) => task.dueDate === dateString
    );

    if (!hasTask) return null;

    return (
      <div className="flex justify-center mt-1">
        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
      </div>
    );
  }}
/>
        </div>

        {/* Tasks */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">

          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Tasks for {selectedDate.toLocaleDateString()}
          </h2>

          {selectedTasks.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No tasks for this date.
            </p>
          ) : (
            <div className="space-y-3">

              {selectedTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <h3 className="font-semibold text-gray-800">
                    {task.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {task.subject}
                  </p>

                  <span className="text-xs text-purple-600">
                    {task.priority}
                  </span>
                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default CalendarPage;