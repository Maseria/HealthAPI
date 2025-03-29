import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HealthScoreForm from './HealthScoreForm';
import CaloriesApi from './CaloriesApi';
import WorkoutsApi from './WorkoutsApi';

// import './App.css';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="" element= {<HealthScoreForm />} />
            <Route path="/food-calories" element = { <CaloriesApi/>}/>
            <Route path="/workouts" element = { <WorkoutsApi/> }/>
        </Routes>
      </Router>
  );
}

export default App;
