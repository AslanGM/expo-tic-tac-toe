import { Background, Board } from '@components'
import { BoardState, isTerminal } from '@utils'
import { ReactElement, useState } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './single-player-game.styles'

export default function SinglePlayerGame(): ReactElement {
    const [state, setState] = useState<BoardState>([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ])

    const handleOnCellPressed = (cell: number): void => {
        if (state[cell] || isTerminal(state)) return
        const stateCopy: BoardState = [...state]
        stateCopy[cell] = 'x'
        setState(stateCopy)
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Board
                    disabled={Boolean(isTerminal(state))}
                    onCellPressed={(cell): void => {
                        handleOnCellPressed(cell)
                    }}
                    state={state}
                    size={300}
                />
            </SafeAreaView>
        </Background>
    )
}
