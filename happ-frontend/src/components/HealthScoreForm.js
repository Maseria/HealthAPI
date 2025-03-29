import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

// import './App.css';

function HealthScoreForm() {
  const [data, setData] = useState({ calories: "", hours_slept: "", km_walked: "" });
  const [score, setScore] = useState(null);

  const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post("http://127.0.0.1:8000/api/health/score", data);
      setScore(response.data.health_score);
  };
  return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-lg">
          <h2 className="text-center mb-4">Health Score Calculator</h2>
          {/* {error && <div className="alert alert-danger">{error}</div>} */}
          {score !== null && <div className="alert alert-success">Your Health Score: {score}</div>}
          <form onSubmit={handleSubmit} method='post'>
            <div className="mb-3">
            <input type="number" name="calories" placeholder="Kcal" onChange={handleChange} value={FormData.calories} required/>
            </div>
            <div className="mb-3">
            <input type="number" name="hours_slept" placeholder="Hours Slept" onChange={handleChange} value={FormData.hours_slept} required/>
            </div>
            <div className="mb-3">
            <input type="number" name="km_walked" placeholder="KM Walked" onChange={handleChange} value={FormData.km_walked} required/>
            </div>
            <button type="submit" className="btn btn-primary w-100">Calculate Health Score</button>
          </form>
          <div className="mt-3">
            <Link to="/food-calories" className="btn btn-link">Food Calories</Link>
            <Link to="/workouts" className="btn btn-link">Work outs</Link>
        </div>
        </div> 
      </div>
  );
}

export default HealthScoreForm;
