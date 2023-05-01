import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { ReactElement, ReactNode } from 'react'

type AppBootstrapProps = {
    children: ReactNode
}

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    })
    return fontsLoaded ? <>{children}</> : <AppLoading />
}
