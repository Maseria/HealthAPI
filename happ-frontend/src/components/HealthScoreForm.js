import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './healthscoreform.css';

function HealthScoreForm() {
  const [data, setData] = useState({ calories: "", hours_slept: "", km_walked: "" });
  const [score, setScore] = useState(null); //storing health score
  const [message, setMessage] = useState(""); //Storing the response message
  const [improvements, setImprovements] = useState(null); // Storing suggested improvements

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://44.205.205.124:8000/api/health/score", data);

      setScore(response.data.health_score);
      setMessage(response.data.message);
      setImprovements(response.data.suggested_improvements);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  return (
    <div className="health-score-form-container">
      <div className="health-score-form">
        <h3 className="text-center mb-4">Health Score Calculator</h3>

        {score !== null && (
          <div className="alert alert-success">
            <strong>Your Health Score:</strong> {score}
          </div>
        )}

        {message && (
          <div className="alert alert-info">
            <strong>Message:</strong> {message}
          </div>
        )}

        {improvements && improvements.length > 0 && (
          <div className="alert alert-warning">
            <strong>Improvements Needed:</strong> {improvements.join(", ")}
          </div>
        )}

        <form onSubmit={handleSubmit} method="post">
          <div className="mb-3">
            <input type="number" name="calories" placeholder="Calories (Kcal)" onChange={handleChange} value={data.calories} required />
          </div>
          <div className="mb-3">
            <input type="number" name="hours_slept" placeholder="Hours Slept" onChange={handleChange} value={data.hours_slept} required />
          </div>
          <div className="mb-3">
            <input type="number" name="km_walked" placeholder="Kilometers Walked" onChange={handleChange} value={data.km_walked} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Check Health Score</button>
        </form>
      </div>
    </div>
  );
}

export default HealthScoreForm;
