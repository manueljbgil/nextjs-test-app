import styled from 'styled-components'

export const BannerWrapper = styled.section`
    width: 100%;
    height: 250px;
    margin-bottom: 108px;

    @media (min-width: 768px) {
        height: 450px;
    }
`

export const Container = styled.div`
    background-image: url('https://matchthemes.com/demowp/dina/wp-content/uploads/2017/02/menu-1col-image-3.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;

    &:before {
        content: '';
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const Content = styled.div`
    z-index: 2;
    text-align: center;
`

export const Title = styled.h1`
    font-size: 36px;
    text-transform: uppercase;
    color: col.$white;
    line-height: 1.2em;

    @media (min-width: 768px) {
        font-size: 52px;
    }
`
export const Catch = styled.p`
    opacity: 0.8;
    color: col.$white;
`
