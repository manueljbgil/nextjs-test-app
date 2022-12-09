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
  width: 20px;
  color: ${(props) => props.theme.fg} !important;
  border-color: ${(props) => props.theme.fg} !important;
`

export const CustomTextInput = styled(TextField)``

export default GlobalStyle
