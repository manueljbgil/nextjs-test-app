import styled from 'styled-components'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'

type Props = {
    children: Array<JSX.Element> | JSX.Element
}

const Landing = ({ children }: Props) => {
    return (
        <Wrapper>
            <TopBar />
            {children}
            <Footer />
        </Wrapper>
    )
}

export default Landing

const Wrapper = styled.div``
