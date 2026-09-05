import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { DataContext } from "../context/UserContext";

const CalendarPage = () => {
  const { tasks } = useContext(DataContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const todayTasks = tasks.filter(
    (task) => task.dueDate === formatDate(new Date())
  );

  const selectedTasks = tasks.filter(
    (task) => task.dueDate === formatDate(selectedDate)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Calendar
          </h1>

          <p className="text-gray-500 mt-2">
            Manage and track tasks by due date
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Total Tasks</p>
            <h2 className="text-3xl font-bold mt-2">
              {tasks.length}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Today's Tasks</p>
            <h2 className="text-3xl font-bold mt-2">
              {todayTasks.length}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Selected Date</p>
            <h2 className="text-3xl font-bold mt-2">
              {selectedTasks.length}
            </h2>
          </div>

        </div>

        {/* Calendar + Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Calendar Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="w-full border-none"
              tileContent={({ date, view }) => {
                if (view !== "month") return null;

                const count = tasks.filter(
                  (task) => task.dueDate === formatDate(date)
                ).length;

                if (!count) return null;

                return (
                  <div className="flex justify-center mt-1">
                    <span className="text-[10px] font-bold text-purple-600">
                      {count}
                    </span>
                  </div>
                );
              }}
            />

          </div>

          {/* Tasks Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tasks for {selectedDate.toLocaleDateString()}
            </h2>

            {selectedTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">

                <div className="text-5xl">📅</div>

                <h3 className="mt-4 text-lg font-semibold">
                  No Tasks Found
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  No tasks scheduled for this day.
                </p>

              </div>
            ) : (
              <div className="space-y-4">

                {selectedTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition"
                  >

                    <h3 className="font-semibold text-gray-800">
                      {task.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {task.subject}
                    </p>

                    <div className="mt-3 flex justify-between items-center">

                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          task.priority === "High"
                            ? "bg-red-100 text-red-600"
                            : task.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {task.priority}
                      </span>

                      <span className="text-xs text-gray-500">
                        {task.dueDate}
                      </span>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default CalendarPage;