import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { useLayoutEffect } from "react";
import IconButton from '../components/UI/IconButton';
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/style";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if(isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    }else{
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler}
      isEditing={isEditing}
      onSubmit={confirmHandler}
      defaultValues={selectedExpense} />
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton icon='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
          </View>
        )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
})