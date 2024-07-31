import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoard from "./screens/OnboardLogin/OnBoard";
import Register from "./screens/OnboardLogin/Register";
import Login from "./screens/OnboardLogin/Login";
import Dashboard from "./screens/Dashboard/Dashboard";

const Stack = createNativeStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
        component={OnBoard}
        name="OnBoard"
        options={{headerShown: false}} />
        <Stack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}} />
        <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}} />
        <Stack.Screen
        component={Dashboard}
        name="Dashboard"
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}