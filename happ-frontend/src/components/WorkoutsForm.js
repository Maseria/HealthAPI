import React, { useState } from "react";

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
    onSubmit(formData); // Pass the formData to the parent component
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Generate Your Workout Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Goal</label>
          <select
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select your goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="endurance">Endurance</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience Level</label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select your experience level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Workout Duration (weeks)</label>
          <input
            id="duration"
            name="duration"
            type="number"
            min="1"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Generate Plan
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;