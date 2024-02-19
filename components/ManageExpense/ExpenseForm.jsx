import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormatedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/style";

const ExpenseForm = ({ onCancel, isEditing, onSubmit, defaultValues }) => {


  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },

    date: {
      value: defaultValues ? getFormatedDate(defaultValues.date) : '',
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true
    }
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: enteredValue, isValid: true }
      }
    })
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values')
      setInputValues((currInputs) => {
        return {
          amount: {
            value: currInputs.amount.value,
            isValid: amountIsValid
          },
          date: {
            value: currInputs.date.value,
            isValid: dateIsValid
          },
          description: {
            value: currInputs.description.value,
            isValid: descriptionIsValid
          }
        }
      })
      return;
    }
    onSubmit(expenseData)
  };

  const formIsInvalid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid;

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input style={styles.rowInputs}
         invalid={!inputValues.amount.isValid}
         label='Amount'
         textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangeHandler.bind(this, 'amount'),
          value: inputValues.amount.value
        }} />

        <Input style={styles.rowInputs} 
          invalid={!inputValues.date.isValid}
          label='Date' 
          textInputConfig={{
          keyboardType: 'default',
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, 'date'),
          value: inputValues.date.value
        }} />
      </View>

      <Input 
        invalid={!inputValues.description.isValid}
        label='Description' 
        textInputConfig={{
        keyboardType: 'default',
        multiline: true,
        // autoCorrect: false //Default is true
        // autoCapitalize: 'sentences' //Default value
        onChangeText: inputChangeHandler.bind(this, 'description'),
        value: inputValues.description.value
      }} />

      {formIsInvalid && (<Text style={styles.errorText}>Invalid input values - Please check your entered data!</Text>)}

      <View style={styles.buttonsContainer}>
        <Button style={styles.buttonStyle} mode='flat' onPress={onCancel}>Cancel</Button>
        <Button style={styles.buttonStyle} onPress={submitHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
    </View>
  )
}

export default ExpenseForm


const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInputs: {
    flex: 1
  },
  formStyle: {
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 24,
    textAlign: 'center'
  }, buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8
  }
})