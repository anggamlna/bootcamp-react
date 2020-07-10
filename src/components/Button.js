import styled from 'styled-components';

export const ButtonContainer = styled.button`
background: transparent;
outline: none;
border: none;
color: ${props => props.cart ? "var(--mainGrey)" : "var(--mainBlack)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem;
transition: all 0.3s ease-in-out;
&:hover{
    background: ${props => props.cart ? "var(--lightWhite)" : "var(--lightBlack)"};
    color: ${props => props.cart ? "var(--lightBlack)" : "var(--lightWhite)"};
}

&:focus{
    outline: none;
}
`