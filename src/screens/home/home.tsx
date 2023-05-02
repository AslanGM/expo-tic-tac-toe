import { Background, Text } from '@components'
import { StackNavigatorParams } from '@config/navigator'
import { StackNavigationProp } from '@react-navigation/stack'
import { ReactElement } from 'react'
import { Button, ScrollView } from 'react-native'
import styles from './home.styles'

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, 'Home'>
}

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Home</Text>
                <Button
                    title="Go to Game"
                    onPress={(): void => {
                        navigation.navigate('Game')
                    }}
                />
            </ScrollView>
        </Background>
    )
}
