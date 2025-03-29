import React, { useState } from "react";
import "./workoutform.css"; // Import CSS

const WorkoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    goal: "",
    experience: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="workout-form-container">
      <div className="workout-form">
        <h3>Generate Your Workout Plan</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="goal">Goal</label>
            <select id="goal" name="goal" value={formData.goal} onChange={handleChange}>
              <option value="">Select your goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="endurance">Endurance</option>
            </select>
          </div>

          <div>
            <label htmlFor="experience">Experience Level</label>
            <select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label htmlFor="duration">Workout Duration (weeks)</label>
            <input id="duration" name="duration" type="number" min="1" value={formData.duration} onChange={handleChange} />
          </div>

          <button type="submit">Generate Plan</button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
