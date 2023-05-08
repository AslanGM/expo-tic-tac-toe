import { BoardResult, BoardState, Moves } from '@utils'

export const printFormattedBoard = (state: BoardState): void => {
    let formattedString = ''
    state.forEach((cell, index) => {
        formattedString += cell ? ` ${cell} |` : '   |'
        if ((index + 1) % 3 === 0) {
            formattedString = formattedString.slice(0, -1)
            if (index < 6) {
                formattedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n'
            }
        }
    })
}

export const isEmpty = (state: BoardState): boolean => {
    return state.every(cell => cell === null)
}

export const isFull = (state: BoardState): boolean => {
    return state.every(cell => cell)
}

export const getAvailableMoves = (state: BoardState): Moves[] => {
    const availableMoves: Moves[] = []
    state.forEach((cell, index) => {
        if (!cell) {
            availableMoves.push(index as Moves)
        }
    })
    return availableMoves
}

export const isTerminal = (state: BoardState): BoardResult | false => {
    if (isEmpty(state)) return false
    if (isFull(state)) {
        return {
            winner: null
        }
    }
    const winningCombinations = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i]
        const [cell1, cell2, cell3] = combination
        if (state[cell1] && state[cell1] === state[cell2] && state[cell2] === state[cell3]) {
            const result: BoardResult = {
                winner: state[cell1],
                direction: i < 3 ? 'H' : i < 6 ? 'V' : i < 8 ? 'D' : undefined,
                row: i < 3 ? (i === 0 ? 1 : i === 1 ? 2 : 3) : undefined,
                column: i > 2 && i < 6 ? (i === 3 ? 1 : i === 4 ? 2 : 3) : undefined,
                diagonal: i > 5 ? (i === 6 ? 'MAIN' : 'COUNTER') : undefined
            }
            return result
        }
    }
    return false
}
