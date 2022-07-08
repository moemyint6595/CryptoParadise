import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import { Line } from 'react-chartjs-2';

const LineChart = ({ coinHistory }) => {

const coinPrice = [];
const coinTimestamp = [];

for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
coinPrice.push(coinHistory?.data?.history[i].price);
}

for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
}

const data = {
labels: coinTimestamp,
datasets: [
    {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
        },
  ],
};

const options = {
// scales: {
// yAxes: [
//     {
//         ticks: {
//                  beginAtZero: true,
//                },
//     }
//   ],
//  },
};
ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

return (
<>

      <Line data={data} options={options} />
</>
);
};

export default LineChart;