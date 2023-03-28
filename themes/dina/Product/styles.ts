import styled from 'styled-components'

export const ProductContainer = styled.div`
    color: col.$primary;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 75px 1fr;

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`

export const NoImage = styled.div`
    width: 60px;
    aspect-ratio: 1 / 1;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
`

export const Item = styled.h4`
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding-right: 50px;
    display: flex;
    align-items: center;
`

export const Title = styled.span``

export const Dots = styled.span`
    flex-grow: 1;
    height: 2px;
    background-image: repeating-linear-gradient(
        to right,
        #888 0,
        #888 3px,
        transparent 3px,
        transparent 6px
    );
    background-position: bottom left;
`
export const Price = styled.span``

export const Description = styled.p`
    font-size: 14px;
    font-style: italic;
    font-family: var(--font-secondary);
`
