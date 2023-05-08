import { Text } from '@components'
import { BoardState } from '@utils'
import { ReactElement } from 'react'
import { TouchableOpacity, View } from 'react-native'

type BoardProps = {
    state: BoardState
    size: number
    disabled?: boolean
    onCellPressed?: (index: number) => void
}

export default function Board({ state, size, disabled, onCellPressed }: BoardProps): ReactElement {
    return (
        <View
            style={{
                width: size,
                height: size,
                backgroundColor: 'green',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}
        >
            {state.map((cell, index) => (
                <TouchableOpacity
                    disabled={cell !== null || disabled}
                    onPress={(): void => onCellPressed && onCellPressed(index)}
                    style={{
                        width: '33.33%',
                        height: '33.33%',
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    key={index}
                >
                    <Text
                        style={{
                            fontSize: size / 8
                        }}
                    >
                        {cell}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
