import styled from 'styled-components'

export const Boxes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 40px;
    }
`
