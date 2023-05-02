import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, SinglePlayerGame } from '@screens'
import { ReactElement } from 'react'

export type StackNavigatorParams = {
    Home: undefined
    SinglePlayerGame: undefined
}

const Stack = createStackNavigator<StackNavigatorParams>()

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="SinglePlayerGame"
                    component={SinglePlayerGame}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
