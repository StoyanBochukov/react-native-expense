import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod='Last 7 Days' expenses='' />
  )
}

export default RecentExpenses