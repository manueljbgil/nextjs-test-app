import { ReactNode } from 'react'
import { Text } from './styles'

interface DetailsTextProps {
    children: ReactNode
}

const DetailsText = (props: DetailsTextProps) => {
    const { children } = props

    return <Text>{children}</Text>
}

export default DetailsText
