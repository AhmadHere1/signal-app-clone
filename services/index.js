import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../src/screens/LoginScreen';
import { RegisterScreen } from '../src/screens/RegisterScreen';


const NavContainer = () => {
    const screenOptions = {
        headerShown: false
    }

    // this will help us to register stack type screens
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={screenOptions}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export { NavContainer }