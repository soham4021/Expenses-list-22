// import logo from "./logo.svg";
// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //#65, We are adding this new expense item to the expenses array and for that we need the previous state of the expense array, not we will not update the array by setExpenses([...expenses, newExpense]) but we will update the array by setExpenses(prevExpenses => [...prevExpenses, newExpense]). So we pass a function as an arguement to the state updating function and that function will automatically recieve the latest state snapshot and so we will get our previous expenses automatically by react and we will return this new array with the new expense item added to it.

  /* #42, A closer look at JSX signifies onto which code does this JSX code gets transformed under the hood like for example 
  return(
    React.createElement('div', {}, React.createElement('h2', {}, 'Lets get started'),
    React.createElement(Expenses, {items : expenses}))
  )
  Since we created a 'div' so first arguement inside createElement will be 'div', the second arguement is an object that specifies all the attributes to that div but since here we have no attribute it is an empty object, the third(now no. of arguements depend on number of elements inside that div, can be many many) is an h2 which is defined in the same way and the last one(here this is the last one) is an Expenses item and since it has no content inside it's opening and closing tag, it is given only 2 arguements
  */
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> {/* #59 */}
      {/* Below line we are defining attributes which then can be accessed via the props(or you can name it anything) object which is provided as the arguement to the function which we are returning in ExpenseItem.js */}
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
