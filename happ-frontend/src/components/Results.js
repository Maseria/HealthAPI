import React from 'react';

const Results = ({ workoutPlan }) => {
  return (
    <div>
      <h2>Workout Plan</h2>
      <div>
        {workoutPlan.days.map((day, index) => (
          <div key={index}>
            <h3>{day.name}</h3>
            <p>Workout: {day.workout}</p>
            <p>Duration: {day.duration}</p>
            <p>Intensity: {day.intensity}</p>
          </div>
        ))}
      </div>
      <h2>Nutrition Plan</h2>
      <div>
        <p>Breakfast: {workoutPlan.nutrition.breakfast}</p>
        <p>Lunch: {workoutPlan.nutrition.lunch}</p>
        <p>Dinner: {workoutPlan.nutrition.dinner}</p>
        <p>Snacks: {workoutPlan.nutrition.snacks}</p>
        <p>Hydration: {workoutPlan.nutrition.hydration}</p>
      </div>
      <h2>Tips</h2>
      <ul>
        {workoutPlan.tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;