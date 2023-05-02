import { Text } from '@components'
import { ReactElement } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './button.styles'

type ButtonProps = {
    title: string
} & TouchableOpacityProps

export default function Button({ title, style, ...props }: ButtonProps): ReactElement {
    return (
        <TouchableOpacity
            {...props}
            style={styles.button}
        >
            <Text style={[styles.buttonText, style]}>{title}</Text>
        </TouchableOpacity>
    )
}
