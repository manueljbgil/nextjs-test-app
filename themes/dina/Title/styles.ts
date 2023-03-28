import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    margin-bottom: 54px;
`

export const Text = styled.h2`
    color: col.$primary;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.2em;
    position: relative;
    display: inline-block;

    &::before {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: col.$primary;
    }

    &::after {
        content: '';
        width: 100%;
        height: 5px;
        position: absolute;
        bottom: -7px;
        left: 0;
        background: col.$primary;
    }
`
