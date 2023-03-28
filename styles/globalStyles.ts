import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:"Switzer-Variable";
        src: url('./fonts/Switzer-Variable.ttf') ;
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family:"Khand-Bold";
        src: url('./fonts/Khand-Bold.ttf');
        font-style: normal;
    }
    body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        background: ${(props) => props.theme.bg};
    }
    div{
        display: flex;
        flex-direction: column;
    }
    .container {
        padding: 0 2rem;
    }
    p {
        font-family: 'Switzer-Variable';
        font-size: 12px;
        color : ${(props) => props.theme.fontColor};
    }
`

export const CustomForm = styled.form`
    margin: 16px;
`

export default GlobalStyle
