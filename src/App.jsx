import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";


import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Tasks from './pages/Tasks';
import About from './pages/About';

import DashboardLayout from './layouts/DashboardLayout';


function App() 
{
  const [tasks,setTasks]= useState([
    {title: "Learn Js",completed:false} ,
    {title: "Learn React",completed:false} ,
    {title: "Build Todo App",completed:false} 
  ]);
  const [newTask, setNewTask] = useState("");

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task,i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

   

  return ( 
      <div>
          <Header /> 
          
          <Router>
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </DashboardLayout>
            
        </Router>

          
          <Footer />
      </div>
  );
}

export default App
