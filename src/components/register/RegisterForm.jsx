import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styled from 'styled-components';


const StyledForm = styled.form`
width:320;`;

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 16px;`;


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <StyledLabel>
                Username
                <input type="text" name="name" />
            </StyledLabel>
            <StyledLabel>
                Email
                <input type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
                Password
                <input type="password" name="password" />
            </StyledLabel>
            <button type="submit">Register</button>
        </StyledForm>
    );
};
