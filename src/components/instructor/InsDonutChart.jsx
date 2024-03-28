import { DonutChart, Legend, Card, Flex, Title, List, ListItem } from '@tremor/react';
import { useState, useEffect } from 'react';

export function InsDonutChart({ moods, colors, onDominantMoodChange, onDominantColorChange }) {
  const [dominantMood, setDominantMood] = useState(null);
  const [dominantMoodColor, setDominantMoodColor] = useState(null);

  useEffect(() => {
    if (moods.length > 0 && Object.keys(colors).length > 0) {
      // Calculate dominant mood
      const dominant = moods.reduce((prev, current) => (prev.count > current.count ? prev : current));
      setDominantMood(dominant.mood);
      onDominantMoodChange(dominant.mood);

      console.log("Dominant Mood:", dominant.mood);
    console.log("Available colors:", colors);
      
    const dominantIndex = moods.findIndex(mood => mood.mood === dominant.mood);
    console.log("Position of Dominant Mood:", dominantIndex);

    // Find corresponding color for dominant mood
    const dominantColor = Object.keys(colors)[dominantIndex];
    console.log("Color Key for Dominant Mood:", dominantColor);

    const dominantColorCode = colors[dominantColor];
    console.log("Color Code for Dominant Mood:", dominantColorCode);

    onDominantColorChange(dominantColorCode);
    }
  }, [moods, onDominantMoodChange, onDominantColorChange, colors]);

  return (
    <div className="py-5">
      <Card className="md:mx-2 mx-auto">
        <Flex className="space-x-8" justifyContent="start" alignItems="center">
          <Title>Feelings</Title>
        </Flex>

        <Legend
          categories={moods.map((mood) => mood.mood)}
          colors={Object.keys(colors)} // Pass the keys (color names) for the chart elements
          className="mt-10"
        />
        <DonutChart
          data={moods}
          variant="pie"
          category="count"
          index="mood"
          colors={Object.keys(colors)} // Pass the keys (color names) for the chart elements
          className="w-40 mt-10 mx-auto"
          showAnimation={true}
        />

        <List className="mt-6">
          {moods.map((mood) => (
            <ListItem key={mood.mood}>
              <span>{mood.mood}</span>
              <span>{mood.count}</span>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}
