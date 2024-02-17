import { View, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/style"

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'New Headphones',
        amount: 110,
        date: new Date('2024-02-15')
    },
    {
        id: 'e2',
        description: 'Weekly Shopping',
        amount: 140.44,
        date: new Date('2024-02-18')
    },
    {
        id: 'e3',
        description: 'Birthday Party',
        amount: 80.50,
        date: new Date('2024-02-24')
    },
    {
        id: 'e4',
        description: 'Car Fuel',
        amount: 50.55,
        date: new Date('2024-02-18')
    },
    {
        id: 'e5',
        description: 'Car Fuel',
        amount: 50.55,
        date: new Date('2024-02-18')
    },
    {
        id: 'e6',
        description: 'Car Fuel',
        amount: 50.55,
        date: new Date('2024-02-18')
    },
    {
        id: 'e7',
        description: 'Car Fuel',
        amount: 50.55,
        date: new Date('2024-02-18')
    },
    {
        id: 'e8',
        description: 'Car Fuel',
        amount: 50.55,
        date: new Date('2024-02-18')
    },
    {
        id: 'e9',
        description: 'Car Fuel',
        amount: 50.55,
        date: new Date('2024-02-18')
    },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})