import React from 'react';
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

function InsBarGraph({ moods }) {
  const isMobile = window.innerWidth <= 768; // Assuming mobile devices have a max width of 768px
  
  // Determine the number of days to display based on device type
  const numDaysToShow = isMobile ? 2 : 5;

  // Extracting dates and mood counts from the moods object
  const chartData = Object.entries(moods).slice(-numDaysToShow).map(([date, moodCounts]) => ({
    name: date,
    ...moodCounts
  }));

  // Extracting unique mood names from the mood counts
  const moodNames = [...new Set(Object.values(moods).flatMap(mood => Object.keys(mood)))];

  return (
    <div className='pb-5'>
      <Card className="mx-auto my-5 sm:my-0 sm:mb-5">
        <Title>Feelings Last ({numDaysToShow} Days)</Title>
        <Subtitle>
          This bar graph shows the mood counts for each day over the past {numDaysToShow} days.
        </Subtitle>
        
        <BarChart
          className="mt-6 h-[420px]"
          data={chartData}
          index="name"
          categories={moodNames}
          colors={["rose", "cyan", "amber", "violet", "fuchsia"]}
          yAxisWidth={20}
          showYAxis={true}
          showAnimation={true}
        />
      </Card>
    </div>
  )
}

export default InsBarGraph;
