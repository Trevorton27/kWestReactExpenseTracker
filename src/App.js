import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('expenses')) {
      setExpenses(JSON.parse(localStorage.getItem('expenses')));
    }
  }, []);

  useEffect(() => {
    if (expenses) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses]);

  return (
    <div className='container text-center'>
      <h1>Expense Tracker</h1>
      <br></br>
      <h3> Add an Expense</h3>
      <Form expenses={expenses} setExpenses={setExpenses} />
      <Table expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default App;
