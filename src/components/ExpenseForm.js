import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({ description: '', amount: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.description && expense.amount) {
      addExpense(expense);
      setExpense({ description: '', amount: 0 });
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
          placeholder="Expense description"
          className="px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="px-4 py-2 rounded-md border border-gray-300"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
