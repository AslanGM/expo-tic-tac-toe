import { Background, Text } from '@components'
import { ReactElement } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './single-player-game.styles'

export default function SinglePlayerGame(): ReactElement {
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Text style={{ color: '#EDF1ED' }}>Game</Text>
            </SafeAreaView>
        </Background>
    )
}
