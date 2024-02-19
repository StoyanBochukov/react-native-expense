import { View, Text } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {

  const expensesCtx = useContext(ExpensesContext);

  const recentExpense = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DasyAgo = getDateMinusDays(today, 7);

    return expense.date > date7DasyAgo;
  })

  return (
    <ExpensesOutput expensesPeriod='Last 7 Days' expenses={recentExpense} fallbackText='No recent expenses' />
  )
}

export default RecentExpenses