import React from 'react';

const TableRow = ({ expenses, handleDeleteClick }) => {
  return expenses.map((expense) => (
    <tr key={expense.id}>
      <td>{expense.date}</td>
      <td>{expense.location}</td>
      <td>{expense.description}</td>
      <td>{expense.amount}</td>
      <td>
        <button type='button' onClick={() => handleDeleteClick(expense.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
};

export default TableRow;
