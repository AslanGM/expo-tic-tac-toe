import { AppBootstrap } from '@components'
import Navigator from '@config/navigator'
import { ReactElement } from 'react'

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <Navigator />
        </AppBootstrap>
    )
}
