import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/style'
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator  screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: '#fff',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500
    }}>
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
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Tab Navigator' component={TabNavigation} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Manage Expense' component={ManageExpense} />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}


