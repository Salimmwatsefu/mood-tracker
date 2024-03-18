import { DonutChart, Legend, Card, Flex, Title, List, ListItem } from '@tremor/react';
import { useState, useEffect } from 'react';

export function InsDonutChart({ moods, onMostDominantMoodChange }) {
  const [dominantMoodColor, setDominantMoodColor] = useState('');
  const [prevDominantMood, setPrevDominantMood] = useState(null);

  useEffect(() => {
    if (!moods || moods.length === 0) return;

    const mostDominantMood = moods.reduce((prev, current) => (prev.count > current.count ? prev : current));
    const colorMapping = {
      angry: '#f43f5e',    // Red
      happy: '#06b6d4',    // Blue
      surprised: '#8b5cf6', // Yellow 
      sad: '#f59e0b',      // Purple
      fearful: '#d946ef',  // Magenta
      default: '#999999'   // Fallback color
    };
    
    const dominantColor = colorMapping[mostDominantMood.mood.toLowerCase()] || colorMapping.default;

    if (!prevDominantMood || mostDominantMood.mood !== prevDominantMood.mood) {
      setDominantMoodColor(dominantColor);
      setPrevDominantMood(mostDominantMood);

      onMostDominantMoodChange({
        name: mostDominantMood.mood,
        color: dominantColor,
      });
    }
  }, [moods, onMostDominantMoodChange, prevDominantMood]);

  return (
    <div className="py-5">
      <Card className="sm:w-[470px] w-[370px] md:mx-2 mx-auto bg-tremor-background ">
        <Flex className="space-x-8" justifyContent="start" alignItems="center">
          <Title>Feelings</Title>
        </Flex>

        <Legend
          categories={['Angry', 'Happy', 'Suprised', 'Sad', 'Fearful']}
          colors={['rose', 'cyan', 'amber', 'violet', 'fuchsia']}
          className="mt-10"
        />
        <DonutChart
          data={moods}
          variant="pie"
          category="count"
          index="mood"
          colors={['rose', 'cyan',  'violet', 'amber', 'fuchsia']}
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
