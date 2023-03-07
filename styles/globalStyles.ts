import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family:"Switzer-Variable";
        src: url('./fonts/Switzer-Variable.ttf');
        font-style: normal;
        font-weight: 400;
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

export const CustomButton = styled(Button)`
    width: 200px;
    background-color: ${(props) => props.theme.fg} !important;
    color: ${(props) => props.theme.bg} !important;
    border-color: ${(props) => props.theme.fg} !important;
`

export const CustomTextInput = styled(TextField)`
    > label {
        color: ${(props) => props.theme.fg} !important;
    }

    .MuiInputBase-input {
        color: white !important;
    }

    .MuiInputBase-root {
        margin-bottom: 12px !important;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${(props) => props.theme.fg} !important;
    }
`

export const CustomForm = styled.form`
    margin: 16px;
`

export default GlobalStyle
