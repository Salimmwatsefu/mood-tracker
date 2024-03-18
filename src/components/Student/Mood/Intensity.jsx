import React from 'react';

const Intensity = (props) => {
  // Destructure the selectedMoods prop from props with default value of an empty array
  const { selectedMoods = [] } = props;

  const handleSubmit = () => {
    console.log({selectedMoods});
  };

  return (
    <div>
      <h2>Intensity</h2>
      
      <div>
        <p>Selected Moods:</p>
        {/* Check if selectedMoods is not an empty array before mapping */}
        {selectedMoods.length > 0 ? (
          <ul>
            {/* Map through selectedMoods to display each mood */}
            {selectedMoods.map((mood, index) => (
              <li key={index}>{mood}</li>
            ))}
          </ul>
        ) : (
          <p>No moods selected</p>
        )}
      </div>
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}

export default Intensity;
