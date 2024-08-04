import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoard from "./screens/OnboardLogin/OnBoard";
import Register from "./screens/OnboardLogin/Register";
import Login from "./screens/OnboardLogin/Login";
import Dashboard from "./screens/Dashboard/Dashboard";
import Account from "./screens/Account/Account";
import Note from "./screens/Note/Note";
import Reminders from "./screens/Reminders/Reminders";
import Lecture from "./screens/Lecture/Lecture";
import EachDay from "./screens/Lecture/EachDay";


const Stack = createNativeStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen
        component={Account}
        name="Account"
        options={{headerShown: false}} />
        <Stack.Screen
        component={Note}
        name="Note"
        options={{headerShown: false}} />
        <Stack.Screen
        component={Reminders}
        name="Reminders"
        options={{headerShown: false}} />
        <Stack.Screen
        component={Lecture}
        name="Lecture"
        options={{headerShown: false}} />
        <Stack.Screen
        component={EachDay}
        name={"EachDay"}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}