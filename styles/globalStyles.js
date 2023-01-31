import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.bg};
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
