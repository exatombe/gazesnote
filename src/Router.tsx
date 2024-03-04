import { DarkTheme, NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';

import {useColorScheme} from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function Router() {
    const colorsScheme = useColorScheme();
    return (                    
    <PaperProvider theme={colorsScheme === 'dark' ? MD3DarkTheme : MD3LightTheme}>
        <NavigationContainer theme={colorsScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>                
    </PaperProvider>

    );
}