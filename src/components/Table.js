import React from 'react';
import TableRow from './TableRow';

const Table = ({ expenses, setExpenses }) => {
  const handleDelete = (expenseId) => {
    setExpenses(expenses.filter((expense) => expenseId !== expense.id));
  };

  return (
    <table class='table table-bordered table-hover'>
      <thead className='thead'>
        <th>Date</th>
        <th>Location</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <TableRow expenses={expenses} handleDeleteClick={handleDelete} />
      </tbody>
    </table>
  );
};

export default Table;
