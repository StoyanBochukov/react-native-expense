import { View, FlatList, Text, StyleSheet } from "react-native";
import ExpensesItem from "./ExpensesItem";


const renderExpenseItem = ({ item }) => {
    return (
       <ExpensesItem date={item.date} description={item.description} amount={item.amount} id={item.id}  />
    )
}


const  ExpensesList = ({ expenses }) => {
  return (
    <View>
        <FlatList data={expenses} renderItem={renderExpenseItem}
         keyExtractor={(item) => item.id} />
    </View>
  )
} 
export default ExpensesList