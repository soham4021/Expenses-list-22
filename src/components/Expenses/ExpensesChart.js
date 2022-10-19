import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //Now we'll be going through filteredExpenses to figure out the expenses of a particular year and from it, we'll be going through each expense and adding the amount to the corresponding months datapoint

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //Starting at 0 => January = 0, February = 1, etc.
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  //We're going to have a look at every expense , get the month of that expense and update the value of the appropiate datapoint by the exact amount of the expense #71

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
