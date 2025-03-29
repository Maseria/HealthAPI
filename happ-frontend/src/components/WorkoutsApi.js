import React, { useState } from "react";
import WorkoutForm from "./WorkoutsForm";
import Results from "./Results";
import './styles.css';

const WorkoutsApi = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const fetchWorkoutPlan = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/workouts/generate-plan/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setWorkoutPlan(data); //Update state with the fetched plan
      } else {
        alert("Error generating plan. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check your connection.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <WorkoutForm onSubmit={fetchWorkoutPlan} />
      </div>
      {workoutPlan && (
        <div className="results-container">
          <Results workoutPlan={workoutPlan} />
        </div>
      )}
    </div>
  );
};

export default WorkoutsApi;