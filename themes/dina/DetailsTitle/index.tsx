import { ReactNode } from 'react'
import { Title } from './styles'

interface DetailsTitleProps {
    children: ReactNode
}

const DetailsTitle = (props: DetailsTitleProps) => {
    const { children } = props

    return <Title>{children}</Title>
}

export default DetailsTitle
