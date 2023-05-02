import { Background, Button } from '@components'
import { StackNavigatorParams } from '@config/navigator'
import { StackNavigationProp } from '@react-navigation/stack'
import { ReactElement } from 'react'
import { Image, ScrollView, View } from 'react-native'
import styles from './home.styles'

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, 'Home'>
}

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('@assets/images/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.buttonsContainer}>
                    <Button title="Single Player" />
                    <Button title="Multiplayer" />
                    <Button title="Login" />
                    <Button title="Settings" />
                </View>
            </ScrollView>
        </Background>
    )
}
