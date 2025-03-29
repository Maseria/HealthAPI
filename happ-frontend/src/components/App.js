import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HealthScoreForm from './HealthScoreForm';
import CaloriesApi from './CaloriesApi';
import WorkoutsApi from './WorkoutsApi';
import './App.css';

function App() {
   return (
     <Router>
       <div className="app-container">
         <nav className="navbar">
           <h1 className="title">Health Tracker</h1>
           <div className="dropdown">
             <button className="dropbtn">Services ▾</button>
             <div className="dropdown-content">
                <Link to="/health-score">Health Score</Link>
                <Link to="/food-calories">Food Nutrition</Link>
                <Link to="/workouts">Workout Plans</Link>
             </div>
           </div>
         </nav>
         <div className="content">
           <Routes>
              <Route path="/" element={<HealthScoreForm />} />
              <Route path="/health-score" element={<HealthScoreForm />} />
              <Route path="/food-calories" element={<CaloriesApi />} />
              <Route path="/workouts" element={<WorkoutsApi />} />
           </Routes>
         </div>
       </div>
     </Router>
   );
}

export default App;
