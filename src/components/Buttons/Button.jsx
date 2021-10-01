import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 0.8rem;
  margin: 0.3rem;
  background-color: wheat;
  &:hover {
    background-color: #ece9d7;
    }
  `;

export default function Button({ text }) {
    return (
        <ButtonStyled> {text} </ButtonStyled>
    );
}

