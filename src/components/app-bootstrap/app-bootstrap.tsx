import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { ReactElement, ReactNode } from 'react'

type AppBootstrapProps = {
    children: ReactNode
}

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontsLoaded] = useFonts({
        'ppradiogro-bold': require('@assets/fonts/ppradiogro-bold.ttf'),
        'ppradiogro-regular': require('@assets/fonts/ppradiogro-regular.ttf')
    })
    return fontsLoaded ? <>{children}</> : <AppLoading />
}
