import styled from 'styled-components'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'

type Props = {
    children: Array<JSX.Element> | JSX.Element
    categories: Array<any>
}

const Landing = ({ children, categories }: Props) => {
    return (
        <Wrapper>
            <TopBar categories={categories} />
            {children}
            <Footer />
        </Wrapper>
    )
}

export default Landing

const Wrapper = styled.div``
