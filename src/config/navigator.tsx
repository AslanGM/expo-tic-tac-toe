import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Game, Home } from '@screens'
import { ReactElement } from 'react'

export type StackNavigatorParams = {
    Home: undefined
    Game: undefined
}

const Stack = createStackNavigator<StackNavigatorParams>()

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Game"
                    component={Game}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
