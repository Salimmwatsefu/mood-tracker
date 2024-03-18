import React, { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const StudentPage = () => {
  // Dummy student names
  const studentData = {
    "John Doe": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 3 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ],
    "Jane Smith": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "Emily Johnson": [
      { day: 'Monday', mood: '😃', value: 4 },
      { day: 'Tuesday', mood: '😊', value: 5 },
      { day: 'Wednesday', mood: '😐', value: 6 },
      { day: 'Thursday', mood: '😞', value: 7 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 9 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "Michael Williams": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 7 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 9 },
      { day: 'Saturday', mood: '😴', value: 10 },
      { day: 'Sunday', mood: '🙂', value: 4 }
    ],
    // Add more students as needed
    "Emma Brown": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 8 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 10 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 5 }
    ],
    // Add more students as needed
    "William Jones": [
      { day: 'Monday', mood: '😃', value: 7 },
      { day: 'Tuesday', mood: '😊', value: 8 },
      { day: 'Wednesday', mood: '😐', value: 9 },
      { day: 'Thursday', mood: '😞', value: 10 },
      { day: 'Friday', mood: '😔', value: 4 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 6 }
    ],
    // Add more students as needed
    "Olivia Taylor": [
      { day: 'Monday', mood: '😃', value: 8 },
      { day: 'Tuesday', mood: '😊', value: 9 },
      { day: 'Wednesday', mood: '😐', value: 10 },
      { day: 'Thursday', mood: '😞', value: 4 },
      { day: 'Friday', mood: '😔', value: 5 },
      { day: 'Saturday', mood: '😴', value: 6 },
      { day: 'Sunday', mood: '🙂', value: 7 }
    ],
    // Add more students as needed
    "Daniel Martinez": [
      { day: 'Monday', mood: '😃', value: 9 },
      { day: 'Tuesday', mood: '😊', value: 10 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 5 },
      { day: 'Friday', mood: '😔', value: 6 },
      { day: 'Saturday', mood: '😴', value: 7 },
      { day: 'Sunday', mood: '🙂', value: 8 }
    ],
    // Add more students as needed
    "Sophia Garcia": [
      { day: 'Monday', mood: '😃', value: 10 },
      { day: 'Tuesday', mood: '😊', value: 4 },
      { day: 'Wednesday', mood: '😐', value: 5 },
      { day: 'Thursday', mood: '😞', value: 6 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 8 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ],
    // Add more students as needed
    "Logan Rodriguez": [
      { day: 'Monday', mood: '😃', value: 4 },
      { day: 'Tuesday', mood: '😊', value: 5 },
      { day: 'Wednesday', mood: '😐', value: 6 },
      { day: 'Thursday', mood: '😞', value: 7 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 9 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "Elijah Wilson": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 7 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 9 },
      { day: 'Saturday', mood: '😴', value: 10 },
      { day: 'Sunday', mood: '🙂', value: 4 }
    ],
    // Add more students as needed
    "Ava Martinez": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 8 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 10 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 5 }
    ],
    // Add more students as needed
    "Noah Brown": [
      { day: 'Monday', mood: '😃', value: 7 },
      { day: 'Tuesday', mood: '😊', value: 8 },
      { day: 'Wednesday', mood: '😐', value: 9 },
      { day: 'Thursday', mood: '😞', value: 10 },
      { day: 'Friday', mood: '😔', value: 4 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 6 }
    ],
    // Add more students as needed
    "Isabella Taylor": [
      { day: 'Monday', mood: '😃', value: 8 },
      { day: 'Tuesday', mood: '😊', value: 9 },
      { day: 'Wednesday', mood: '😐', value: 10 },
      { day: 'Thursday', mood: '😞', value: 4 },
      { day: 'Friday', mood: '😔', value: 5 },
      { day: 'Saturday', mood: '😴', value: 6 },
      { day: 'Sunday', mood: '🙂', value: 7 }
    ],
    // Add more students as needed
    "Ethan Johnson": [
      { day: 'Monday', mood: '😃', value: 9 },
      { day: 'Tuesday', mood: '😊', value: 10 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 5 },
      { day: 'Friday', mood: '😔', value: 6 },
      { day: 'Saturday', mood: '😴', value: 7 },
      { day: 'Sunday', mood: '🙂', value: 8 }
    ],
    // Add more students as needed
    "Mia Martinez": [
      { day: 'Monday', mood: '😃', value: 10 },
      { day: 'Tuesday', mood: '😊', value: 4 },
      { day: 'Wednesday', mood: '😐', value: 5 },
      { day: 'Thursday', mood: '😞', value: 6 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 8 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ],
    // Add more students as needed
    "Benjamin Garcia": [
      { day: 'Monday', mood: '😃', value: 4 },
      { day: 'Tuesday', mood: '😊', value: 5 },
      { day: 'Wednesday', mood: '😐', value: 6 },
      { day: 'Thursday', mood: '😞', value: 7 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 9 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "James Wilson": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 7 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 9 },
      { day: 'Saturday', mood: '😴', value: 10 },
      { day: 'Sunday', mood: '🙂', value: 4 }
    ],
    // Add more students as needed
    "Amelia Rodriguez": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 8 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 10 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 5 }
    ],
    // Add more students as needed
    "Henry Thompson": [
      { day: 'Monday', mood: '😃', value: 7 },
      { day: 'Tuesday', mood: '😊', value: 8 },
      { day: 'Wednesday', mood: '😐', value: 9 },
      { day: 'Thursday', mood: '😞', value: 10 },
      { day: 'Friday', mood: '😔', value: 4 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 6 }
    ],
    // Add more students as needed
    "Scarlett Lee": [
      { day: 'Monday', mood: '😃', value: 8 },
      { day: 'Tuesday', mood: '😊', value: 9 },
      { day: 'Wednesday', mood: '😐', value: 10 },
      { day: 'Thursday', mood: '😞', value: 4 },
      { day: 'Friday', mood: '😔', value: 5 },
      { day: 'Saturday', mood: '😴', value: 6 },
      { day: 'Sunday', mood: '🙂', value: 7 }
    ],
    // Add more students as needed
    "David Kim": [
      { day: 'Monday', mood: '😃', value: 9 },
      { day: 'Tuesday', mood: '😊', value: 10 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 5 },
      { day: 'Friday', mood: '😔', value: 6 },
      { day: 'Saturday', mood: '😴', value: 7 },
      { day: 'Sunday', mood: '🙂', value: 8 }
    ],
    // Add more students as needed
    "Zoe Hernandez": [
      { day: 'Monday', mood: '😃', value: 10 },
      { day: 'Tuesday', mood: '😊', value: 4 },
      { day: 'Wednesday', mood: '😐', value: 5 },
      { day: 'Thursday', mood: '😞', value: 6 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 8 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ],
    // Add more students as needed
    "Gabriel Nguyen": [
      { day: 'Monday', mood: '😃', value: 4 },
      { day: 'Tuesday', mood: '😊', value: 5 },
      { day: 'Wednesday', mood: '😐', value: 6 },
      { day: 'Thursday', mood: '😞', value: 7 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 9 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "Evelyn Wright": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 7 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 9 },
      { day: 'Saturday', mood: '😴', value: 10 },
      { day: 'Sunday', mood: '🙂', value: 4 }
    ],
    // Add more students as needed
    "Madison Green": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 8 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 10 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 5 }
    ],
    // Add more students as needed
    "Nathan Hall": [
      { day: 'Monday', mood: '😃', value: 7 },
      { day: 'Tuesday', mood: '😊', value: 8 },
      { day: 'Wednesday', mood: '😐', value: 9 },
      { day: 'Thursday', mood: '😞', value: 10 },
      { day: 'Friday', mood: '😔', value: 4 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 6 }
    ],
    // Add more students as needed
    "Ella Young": [
      { day: 'Monday', mood: '😃', value: 8 },
      { day: 'Tuesday', mood: '😊', value: 9 },
      { day: 'Wednesday', mood: '😐', value: 10 },
      { day: 'Thursday', mood: '😞', value: 4 },
      { day: 'Friday', mood: '😔', value: 5 },
      { day: 'Saturday', mood: '😴', value: 6 },
      { day: 'Sunday', mood: '🙂', value: 7 }
    ],
    // Add more students as needed
    "Jack Hill": [
      { day: 'Monday', mood: '😃', value: 9 },
      { day: 'Tuesday', mood: '😊', value: 10 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 5 },
      { day: 'Friday', mood: '😔', value: 6 },
      { day: 'Saturday', mood: '😴', value: 7 },
      { day: 'Sunday', mood: '🙂', value: 8 }
    ],
    // Add more students as needed
    "Avery King": [
      { day: 'Monday', mood: '😃', value: 10 },
      { day: 'Tuesday', mood: '😊', value: 4 },
      { day: 'Wednesday', mood: '😐', value: 5 },
      { day: 'Thursday', mood: '😞', value: 6 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 8 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ],
    // Add more students as needed
    "Mila Scott": [
      { day: 'Monday', mood: '😃', value: 4 },
      { day: 'Tuesday', mood: '😊', value: 5 },
      { day: 'Wednesday', mood: '😐', value: 6 },
      { day: 'Thursday', mood: '😞', value: 7 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 9 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "Sofia Carter": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 7 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 9 },
      { day: 'Saturday', mood: '😴', value: 10 },
      { day: 'Sunday', mood: '🙂', value: 4 }
    ],
    // Add more students as needed
    "Henry Baker": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 8 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 10 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 5 }
    ],
    // Add more students as needed
    "Liam Turner": [
      { day: 'Monday', mood: '😃', value: 7 },
      { day: 'Tuesday', mood: '😊', value: 8 },
      { day: 'Wednesday', mood: '😐', value: 9 },
      { day: 'Thursday', mood: '😞', value: 10 },
      { day: 'Friday', mood: '😔', value: 4 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 6 }
    ],
    // Add more students as needed
    "Luna Evans": [
      { day: 'Monday', mood: '😃', value: 8 },
      { day: 'Tuesday', mood: '😊', value: 9 },
      { day: 'Wednesday', mood: '😐', value: 10 },
      { day: 'Thursday', mood: '😞', value: 4 },
      { day: 'Friday', mood: '😔', value: 5 },
      { day: 'Saturday', mood: '😴', value: 6 },
      { day: 'Sunday', mood: '🙂', value: 7 }
    ],
    // Add more students as needed
    "Harper Collins": [
      { day: 'Monday', mood: '😃', value: 9 },
      { day: 'Tuesday', mood: '😊', value: 10 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 5 },
      { day: 'Friday', mood: '😔', value: 6 },
      { day: 'Saturday', mood: '😴', value: 7 },
      { day: 'Sunday', mood: '🙂', value: 8 }
    ],
    // Add more students as needed
    "Aria Stewart": [
      { day: 'Monday', mood: '😃', value: 10 },
      { day: 'Tuesday', mood: '😊', value: 4 },
      { day: 'Wednesday', mood: '😐', value: 5 },
      { day: 'Thursday', mood: '😞', value: 6 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 8 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ],
    // Add more students as needed
    "Jackson Powell": [
      { day: 'Monday', mood: '😃', value: 4 },
      { day: 'Tuesday', mood: '😊', value: 5 },
      { day: 'Wednesday', mood: '😐', value: 6 },
      { day: 'Thursday', mood: '😞', value: 7 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 9 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "Grace Ward": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 7 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 9 },
      { day: 'Saturday', mood: '😴', value: 10 },
      { day: 'Sunday', mood: '🙂', value: 4 }
    ],
    // Add more students as needed
    "Aiden Burke": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 8 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 10 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 5 }
    ],
    // Add more students as needed
    "Mason Roberts": [
      { day: 'Monday', mood: '😃', value: 7 },
      { day: 'Tuesday', mood: '😊', value: 8 },
      { day: 'Wednesday', mood: '😐', value: 9 },
      { day: 'Thursday', mood: '😞', value: 10 },
      { day: 'Friday', mood: '😔', value: 4 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 6 }
    ],
    // Add more students as needed
    "Victoria Ross": [
      { day: 'Monday', mood: '😃', value: 8 },
      { day: 'Tuesday', mood: '😊', value: 9 },
      { day: 'Wednesday', mood: '😐', value: 10 },
      { day: 'Thursday', mood: '😞', value: 4 },
      { day: 'Friday', mood: '😔', value: 5 },
      { day: 'Saturday', mood: '😴', value: 6 },
      { day: 'Sunday', mood: '🙂', value: 7 }
    ],
    // Add more students as needed
    "David Lee": [
      { day: 'Monday', mood: '😃', value: 9 },
      { day: 'Tuesday', mood: '😊', value: 10 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 5 },
      { day: 'Friday', mood: '😔', value: 6 },
      { day: 'Saturday', mood: '😴', value: 7 },
      { day: 'Sunday', mood: '🙂', value: 8 }
    ],
    // Add more students as needed
    "Abigail Watson": [
      { day: 'Monday', mood: '😃', value: 10 },
      { day: 'Tuesday', mood: '😊', value: 4 },
      { day: 'Wednesday', mood: '😐', value: 5 },
      { day: 'Thursday', mood: '😞', value: 6 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 8 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ],
    // Add more students as needed
    "Emily Brooks": [
      { day: 'Monday', mood: '😃', value: 4 },
      { day: 'Tuesday', mood: '😊', value: 5 },
      { day: 'Wednesday', mood: '😐', value: 6 },
      { day: 'Thursday', mood: '😞', value: 7 },
      { day: 'Friday', mood: '😔', value: 8 },
      { day: 'Saturday', mood: '😴', value: 9 },
      { day: 'Sunday', mood: '🙂', value: 10 }
    ],
    // Add more students as needed
    "Christopher Wright": [
      { day: 'Monday', mood: '😃', value: 5 },
      { day: 'Tuesday', mood: '😊', value: 6 },
      { day: 'Wednesday', mood: '😐', value: 7 },
      { day: 'Thursday', mood: '😞', value: 8 },
      { day: 'Friday', mood: '😔', value: 9 },
      { day: 'Saturday', mood: '😴', value: 10 },
      { day: 'Sunday', mood: '🙂', value: 4 }
    ],
    // Add more students as needed
    "Samantha Murphy": [
      { day: 'Monday', mood: '😃', value: 6 },
      { day: 'Tuesday', mood: '😊', value: 7 },
      { day: 'Wednesday', mood: '😐', value: 8 },
      { day: 'Thursday', mood: '😞', value: 9 },
      { day: 'Friday', mood: '😔', value: 10 },
      { day: 'Saturday', mood: '😴', value: 4 },
      { day: 'Sunday', mood: '🙂', value: 5 }
    ],
    // Add more students as needed
    "John Lee": [
      { day: 'Monday', mood: '😃', value: 7 },
      { day: 'Tuesday', mood: '😊', value: 8 },
      { day: 'Wednesday', mood: '😐', value: 9 },
      { day: 'Thursday', mood: '😞', value: 10 },
      { day: 'Friday', mood: '😔', value: 4 },
      { day: 'Saturday', mood: '😴', value: 5 },
      { day: 'Sunday', mood: '🙂', value: 6 }
    ],
    // Add more students as needed
    "Madelyn Hill": [
      { day: 'Monday', mood: '😃', value: 8 },
      { day: 'Tuesday', mood: '😊', value: 9 },
      { day: 'Wednesday', mood: '😐', value: 10 },
      { day: 'Thursday', mood: '😞', value: 4 },
      { day: 'Friday', mood: '😔', value: 5 },
      { day: 'Saturday', mood: '😴', value: 6 },
      { day: 'Sunday', mood: '🙂', value: 7 }
    ],
    // Add more students as needed
    "Victoria Patel": [
      { day: 'Monday', mood: '😃', value: 9 },
      { day: 'Tuesday', mood: '😊', value: 10 },
      { day: 'Wednesday', mood: '😐', value: 4 },
      { day: 'Thursday', mood: '😞', value: 5 },
      { day: 'Friday', mood: '😔', value: 6 },
      { day: 'Saturday', mood: '😴', value: 7 },
      { day: 'Sunday', mood: '🙂', value: 8 }
    ],
    // Add more students as needed
    "Lily Sanders": [
      { day: 'Monday', mood: '😃', value: 10 },
      { day: 'Tuesday', mood: '😊', value: 4 },
      { day: 'Wednesday', mood: '😐', value: 5 },
      { day: 'Thursday', mood: '😞', value: 6 },
      { day: 'Friday', mood: '😔', value: 7 },
      { day: 'Saturday', mood: '😴', value: 8 },
      { day: 'Sunday', mood: '🙂', value: 9 }
    ]
  }

  // State to keep track of the selected student
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Function to handle checkbox change
  const handleCheckboxChange = (name) => {
    setSelectedStudent(name);
  };

  // Function to generate data for the selected student
  // Function to generate data for the selected student
// Function to generate data for the selected student
const generateDataForStudent = (studentName) => {
  const studentMoodData = studentData[studentName];
  return {
    labels: studentMoodData.map(item => item.day),
    datasets: [{
      label: '', // Set an empty label
      data: studentMoodData.map(item => item.value),
      backgroundColor: studentMoodData.map(item => {
        switch(item.mood) {
          case '😃':
            return 'yellow'; // Set the color for each mood
          case '😊':
            return 'orange';
          case '😐':
            return 'gray';
          case '😞':
            return 'purple';
          case '😔':
            return 'blue';
          case '😴':
            return 'green';
          case '🙂':
            return 'cyan';
          default:
            return 'aqua';
        }
      }),
      borderColor: 'black'
    }]
  };
};



  // Default data when no student is selected
  const defaultData = {
    labels: [],
    datasets: [{
      label: 'Mood',
      data: [],
      backgroundColor: 'aqua',
      borderColor: 'black'
    }]
  };

  // Dynamically select data based on the selected student
  const chartData = selectedStudent ? generateDataForStudent(selectedStudent) : defaultData;

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Define a mapping object for emojis and their names
const emojiNames = {
  '😃': 'Happy',
  '😊': 'Smiling',
  '😐': 'Neutral',
  '😞': 'Disappointed',
  '😔': 'Sad',
  '😴': 'Sleepy',
  '🙂': 'Satisfied'
};

  return (
    <div className="h-screen">
  {/* Navbar */}
  <nav className="bg-gray-800 text-white p-4 fixed w-full z-10">
    <ul className="flex justify-between">
      <li>
        <a href="#students" className="hover:text-gray-300">Students</a>
      </li>
      <li>
        <a href="#chart" className="hover:text-gray-300">Chart</a>
      </li>
    </ul>
  </nav>
  {/* Main content */}
  <div className="flex justify-between h-full pt-16"> {/* Add pt-16 for top padding to avoid content being hidden under the fixed navbar */}
    <div className="w-1/2 p-4 overflow-y-auto" id="students">
      {/* Section for student names with checkboxes */}
      <h2 className="text-lg font-semibold mb-2">Name of the students</h2>
      {Object.keys(studentData).map((name, index) => (
        <div key={index} className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedStudent === name}
              onChange={() => handleCheckboxChange(name)}
              className="mr-2"
            />
            {name}
          </label>
        </div>
      ))}
    </div>
    <div className="w-1/2 p-4" id="chart">
      {/* Mood chart */}
      <h2 className="text-lg font-semibold mb-2">Mood Tracker</h2>
      <div style={{ height: '80%' }}>
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: true,
                labels: {
                  generateLabels: (chart) => {
                    const labels = chart.data.labels.map((day) => {
                      const mood = studentData[selectedStudent].find(item => item.day === day).mood;
                      const moodName = emojiNames[mood] || 'Unknown'; // Get the name from the mapping or set to 'Unknown' if not found
                      let fillStyle = 'aqua'; // Default color
                      // Assign color based on mood
                      switch (mood) {
                        case '😃':
                          fillStyle = 'yellow';
                          break;
                        case '😊':
                          fillStyle = 'orange';
                          break;
                        case '😐':
                          fillStyle = 'gray';
                          break;
                        case '😞':
                          fillStyle = 'purple';
                          break;
                        case '😔':
                          fillStyle = 'blue';
                          break;
                        case '😴':
                          fillStyle = 'green';
                          break;
                        case '🙂':
                          fillStyle = 'cyan';
                          break;
                        default:
                          fillStyle = 'aqua';
                      }
                      // Combine emoji and name in label text
                      const labelText = `${mood} - ${moodName}`;
                      return {
                        text: labelText,
                        fillStyle: fillStyle
                      };
                    });
                    return labels;
                  }
                }
              }
            }
          }}
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default StudentPage;
