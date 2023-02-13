import styled from 'styled-components'
import {
    CustomButton,
    CustomForm,
    CustomTextInput,
} from '../styles/globalStyles'
import { useForm, Controller } from 'react-hook-form'

const LoginForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    return (
        <Wrapper>
            <InputWrapper noValidate autoComplete="off">
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <CustomTextInput
                            id="standard-basic"
                            label="Email"
                            variant="outlined"
                            required
                            placeholder="abc@gmail.com"
                            field
                        />
                    )}
                />

                <CustomTextInput
                    id="standard-basic"
                    label="Password"
                    variant="outlined"
                    required
                    type="password"
                />
            </InputWrapper>
            <CustomButton variant="outlined">Login</CustomButton>
        </Wrapper>
    )
}

export default LoginForm

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const InputWrapper = styled(CustomForm)`
    display: flex;
    flex-direction: column;
`
