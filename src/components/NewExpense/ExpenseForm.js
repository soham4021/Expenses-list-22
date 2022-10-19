import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  //Above way of implememting does one thing that is it creates an object which has 3 properties and each property has a value which is an empty string. By this we don't have to write the code again and again for each property.But one deformity is that while changing one state,we have to keep track of the other states as well.

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
    // setUserInput({
    //   ...userInput,
    //   // ...userInput is used to spread the existing state so that the new value can be added(basically overvwriting) to the existing state and also the states that are not being changed are not affected, for example here only enteredTitle is being changed but the other two are not being changed but to keep the other two intact we use ...userInput and after that we overwrite the enteredTitle with the new value
    //#55, #56
    //   enteredTitle: event.target.value,
    // });
    //The commented out approach might give some error as it depends on previous states and since react schedules the code to be executed after the previous state is updated, it might not be able to access the exact previous state. Thus it is good to use the below approach(thogh we are always going to use that separate state approach).
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //This is done to prevent the page from reloading when the form is submitted and the default behavior is to reload the page.We want to manually handle this behavior and prevent the page from reloading so that we can work with the data that is being submitted.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    //We could have added onClick={submitHandler} to the button but we can also use onSubmit={submitHandler} to the form as forms has a default behaviour of emitting an event when the form is submitted. This is called a form submit event.
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
