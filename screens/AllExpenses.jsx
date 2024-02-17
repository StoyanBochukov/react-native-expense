import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = (expensesPeriod) => {
  return (
    <ExpensesOutput expensesPeriod='Total' expenses='' />
  )
}

export default AllExpenses