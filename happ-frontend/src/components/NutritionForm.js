import {useState} from 'react';

function NutritionForm(){
    const [foodInput, setFoodInput] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [error, setError] = useState(null);

  const fetchNutrition = async (e) => {
    e.preventDefault();

    if (!foodInput.trim()) {
      setError("Please enter a food item.");
      return;
    }

    const apiUrl = `https://api.edamam.com/api/nutrition-data?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92&ingr=${encodeURIComponent(foodInput)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.calories) {
        setNutritionData(data);
        setError(null);
        setFoodInput(""); // Clear input after successful fetch
      } else {
        setError("No nutrition data found. Try different input.");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h3 className="text-center">Food Nutrition Checker</h3>
            <form onSubmit={fetchNutrition}>
              <div className="mb-3">
                <label className="form-label">Enter Food Details</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="e.g. 1 cup rice"
                  value={foodInput}
                  onChange={(e) => setFoodInput(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Get Nutrition Info</button>
            </form>

            {error && <div className="alert alert-danger mt-3">{error}</div>}

            {nutritionData && (
              <div className="mt-4">
                <h5 className="text-center">Nutrition Data</h5>
                <ul className="list-group">
                  <li className="list-group-item">Calories: {nutritionData.calories} kcal</li>
                  <li className="list-group-item">Protein: {nutritionData.totalNutrients.PROCNT?.quantity.toFixed(2) || 0} g</li>
                  <li className="list-group-item">Fat: {nutritionData.totalNutrients.FAT?.quantity.toFixed(2) || 0} g</li>
                  <li className="list-group-item">Carbs: {nutritionData.totalNutrients.CHOCDF?.quantity.toFixed(2) || 0} g</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionForm;