import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/style'
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator  screenOptions={({ navigation }) => ({
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: '#fff',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => <IconButton size={24} color={tintColor} icon='add'
      onPress={() => {navigation.navigate('ManageExpense')}} /> 
    })}>
      <Tab.Screen name='Recent Expenses' component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={size} color={color} />
      }} />
      <Tab.Screen name='All Expenses' component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: 'All',
        tabBarIcon: ({ color, size }) => <Ionicons name='calendar' color={color} size={size} />
      }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: '#fff'
        }}>
          <Stack.Screen name='Tab Navigator' component={TabNavigation} options={{
            headerShown: false
          }} />
          <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
            presentation: 'modal'
          }} />
        </Stack.Navigator>

      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}


