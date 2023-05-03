import { Background, Board } from '@components'
import { ReactElement } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './single-player-game.styles'

export default function SinglePlayerGame(): ReactElement {
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Board
                    onCellPressed={(index): void => {
                        alert(index)
                    }}
                    state={['x', 'o', null, 'x', 'o', null, 'x', 'o', null]}
                    size={300}
                />
            </SafeAreaView>
        </Background>
    )
}
