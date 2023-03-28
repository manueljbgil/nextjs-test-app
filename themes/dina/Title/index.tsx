import { ReactNode } from 'react'
import { Container, Text } from './styles'

interface TitleProps {
    children: ReactNode
}

const Title = (props: TitleProps) => {
    const { children } = props

    return (
        <Container>
            <Text>{children}</Text>
        </Container>
    )
}

export default Title
