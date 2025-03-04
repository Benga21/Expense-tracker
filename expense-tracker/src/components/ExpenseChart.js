import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    try {
      const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
      if (Array.isArray(storedExpenses)) {
        setExpenses(storedExpenses);
      } else {
        console.error("Invalid data format in localStorage");
        setExpenses([]);
      }
    } catch (error) {
      console.error("Error retrieving expenses from localStorage", error);
      setExpenses([]);
    }
  }, []);

  const expenseData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toISOString().split("T")[0];
    acc[date] = (acc[date] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  const labels = Object.keys(expenseData);
  const values = Object.values(expenseData);

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Expenses ($)",
        data: values,
        backgroundColor: "rgba(76, 175, 80, 0.6)",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Daily Expense Chart",
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {labels.length > 0 ? <Bar data={data} options={options} /> : <p style={{ textAlign: "center" }}>No expense data available.</p>}
    </div>
  );
};

export default ExpenseChart;
