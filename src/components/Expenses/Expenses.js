import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //Now as we got this filtered year(which remember is a string), we can use it to filter the expenses that we should display in accordance with the selected year and so we are using this filteredExpenses array below to filter the expenses that we should display in accordance with the selected year
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  //Re-watch assignment-2
  // let expensesContent = <p>No Expenses Found</p>;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Below code logic, if you output an array of JSX elements, react is capable of simply rendering that array of JSX elements */}
        {/* {filteredExpenses.length === 0 && (
          <p style={preferedStyle}>No Expenses Found</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* Assignment 3 too must watch again */}
        {/* {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
};

// props.items was the initial array that we were using, then came the filteredExpenses array which is the array that we are using to filter the expenses that we should display in accordance with the selected year and then too came that expensesContent which displays on accordance with the filteredExpenses array length

export default Expenses;
