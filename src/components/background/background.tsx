import { StatusBar } from 'expo-status-bar'
import { ReactElement, ReactNode } from 'react'
import { View } from 'react-native'
import styles from './background.styles'

type BackgroundProps = {
    children: ReactNode
}

export default function Background({ children }: BackgroundProps): ReactElement {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <View style={styles.bg} />
            {children}
        </View>
    )
}
