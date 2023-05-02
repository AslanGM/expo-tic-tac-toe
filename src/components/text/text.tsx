import { ReactElement, ReactNode } from 'react'
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'

type TextProps = {
    weight: '400' | '700'
    textTransform: 'uppercase' | 'lowercase' | 'capitalize'
    children: ReactNode
} & NativeTextProps

const defaultProps = {
    weight: '700',
    textTransform: 'uppercase'
}

export default function Text({
    children,
    style,
    weight,
    textTransform,
    ...props
}: TextProps): ReactElement {
    let fontFamily
    if (weight === '400') {
        fontFamily = 'ppradiogro-regular'
    }
    if (weight === '700') {
        fontFamily = 'ppradiogro-bold'
    }
    return (
        <NativeText
            {...props}
            style={[{ fontFamily, textTransform }, style]}
        >
            {children}
        </NativeText>
    )
}

Text.defaultProps = defaultProps
