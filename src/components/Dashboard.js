import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);

  const pieData = {
    labels: expenses.map((expense) => expense.description),
    datasets: [
      {
        data: expenses.map((expense) => expense.amount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
      },
    ],
  };

  const barData = {
    labels: expenses.map((expense) => expense.description),
    datasets: [
      {
        label: 'Amount',
        data: expenses.map((expense) => expense.amount),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  // Chart options to resize the charts
  const chartOptions = {
    maintainAspectRatio: false,  // Prevent aspect ratio constraints
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Optional: Position the legend at the top
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <h2 className="text-2xl font-bold">Expense Dashboard</h2>
      <p className="text-xl my-2">Total Expenses: ${total}</p>
      <div className="grid grid-cols-2 gap-4">
        <div style={{ position: 'relative', height: '250px' }}>
          <h3 className="text-xl font-semibold mb-2">Expense Distribution (Pie Chart)</h3>
          <Pie data={pieData} options={chartOptions} />
        </div>
        <div style={{ position: 'relative', height: '250px' }}>
          <h3 className="text-xl font-semibold mb-2">Expense Comparison (Bar Chart)</h3>
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
