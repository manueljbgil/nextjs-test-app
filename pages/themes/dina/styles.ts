import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 24px;
    font-family: var(--dina-font-primary);
`

export const Content = styled.section`
    padding: 0 15px;
    margin-bottom: 72px;

    @media (min-width: 768px) {
        width: 100%;
        max-width: 1110px;
        margin: 0 auto 72px;
    }
`
