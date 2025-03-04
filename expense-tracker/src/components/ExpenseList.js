import React from "react";
import { memo } from "react";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <ul className="p-4 bg-white rounded shadow-md">
      {expenses.length === 0 && (
        <p className="text-gray-500 text-center py-4">No expenses added yet.</p>
      )}
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between items-center border-b last:border-b-0 p-2"
        >
          <span>{expense.category}: ${expense.amount.toFixed(2)}</span>
          <button
            onClick={() => onDeleteExpense(expense.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
            aria-label={`Delete expense ${expense.category}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default memo(ExpenseList);
