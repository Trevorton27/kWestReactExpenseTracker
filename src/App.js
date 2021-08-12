import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { expenseData } from "./expense-data";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);
  const [addFormData, setAddFormData] = useState({
    date: '',
    location: '',
    description: '',
    amount: ''
  })

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      id: nanoid(),
      date: addFormData.date,
      location: addFormData.location,
      description: addFormData.description,
      amount: addFormData.amount,
    };
    
    const newExpenses = [...expenses, newExpense];
    setExpenses(newExpenses)
    resetForm();
  }

  const resetForm = () => { 
    document.getElementById("expense-form").reset();
  }

  const handleDeleteClick = (expenseID) => {
    const newExpenses = [...expenses];

    const index = expenses.findIndex((expense)=> expense.id === expenseID);

    newExpenses.splice(index, 1);

    setExpenses(newExpenses);
  }
  
  return (
    <div className="container text-center">
      <h1>Expense Tracker</h1>
      <br></br>
     <h3> Add an Expense</h3>
     <form id="expense-form" onSubmit={handleAddFormSubmit}>
       <input
       type="date"
       name="date"
       required="required"
       onChange={handleAddFormChange}
       />
       <input
       type="text"
       name="location"
       required="required"
       placeholder="Where was the purchase made?"
       onChange={handleAddFormChange}
       />
       <input
       type="text"
       name="description"
       required="required"
       placeholder="Description of Expense"
       onChange={handleAddFormChange}
       />
       <input
       type="number"
       name="amount"
       required="required"
       placeholder="How Much?"
       min="0" 
       step=".01"
       onChange={handleAddFormChange}
       />
      <button type="submit">Add Expense</button>
     </form>
     <table class="table table-bordered table-hover">
        <thead className="thead">
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Delete</th>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr>
              <td>{expense.date}</td>
              <td>{expense.location}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td><button type="button" onClick={() => handleDeleteClick(expense.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>

      </table> 
    </div>
  );
}

export default App;
