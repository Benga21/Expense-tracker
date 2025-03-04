import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-5">Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
        <Dashboard expenses={expenses} />
      </div>
    </div>
  );
};

export default App;

