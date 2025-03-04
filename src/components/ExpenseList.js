import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold">Expenses</h3>
      <ul className="space-y-2">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between bg-gray-100 p-3 rounded-md">
            <span>{expense.description}</span>
            <span>${expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
