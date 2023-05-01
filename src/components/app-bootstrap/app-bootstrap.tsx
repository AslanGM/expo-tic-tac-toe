import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { ReactElement, ReactNode } from 'react'

type AppBootstrapProps = {
    children: ReactNode
}

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontsLoaded] = useFonts({
        'ppradiogro-bold': require('@assets/fonts/ppradiogro-bold.woff2'),
        'ppradiogro-regular': require('@assets/fonts/ppradiogro-regular.woff2')
    })
    return fontsLoaded ? <>{children}</> : <AppLoading />
}
