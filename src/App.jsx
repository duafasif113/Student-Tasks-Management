



import "./App.css";

import { lazy, Suspense } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Layout
import Layout from "./Layout";

// Lazy Loaded Pages
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Tasks = lazy(() => import("./Pages/Tasks"));
const Calender = lazy(() => import("./Pages/Calender"));
const Subjects = lazy(() => import("./Pages/Subjects"));
const Stats = lazy(() => import("./Pages/stat"));

const Settings = lazy(() => import("./Pages/Settings"));
const NotFound = lazy(() => import("./Components/NotFound"));


function App() {
  return (
    <BrowserRouter>

      {/* React Router */}
      <Suspense fallback={<h2>Loading...</h2>}>

        <Routes>

          {/* Common Layout */}
          <Route path="/" element={<Layout />}>

            {/* Home Page */}
            <Route index element={<Dashboard />} />

            {/* Tasks Page */}
            <Route path="tasks" element={<Tasks />} />

            {/* About Page */}
            <Route path="calender" element={<Calender />} />

            {/* Contact Page */}
            <Route path="subjects" element={<Subjects/>} />
            <Route path="Statistics" element={<Stats/>} />
            <Route path="Settings" element={<Settings/>} />

            {/* 404 Handling */}
            <Route path="*" element={<NotFound />} />

          </Route>

        </Routes>

      </Suspense>


    </BrowserRouter>
  );
}

export default App;