import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // After defining the attributes inside app.js file, then one arguement is provided to this function which acts as an object on which we can use key:value pairs to access those arguements. It is made so in react that this said function will only and can have one single parameter as arguement which is an object

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        {/* Here props.date comes from the attribute defined in App.js in <ExpenseItem /> which in return is passed as the attribute to <ExpenseDate /> where this date is again accessed as {props.date} */}
        {/* #39 */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
