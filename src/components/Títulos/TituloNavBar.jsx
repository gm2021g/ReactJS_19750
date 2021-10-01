import styled from 'styled-components'

const TituloNavBarStyled = styled.h1`
  padding: 0.8rem;
  margin: 0.3rem;
  color: #f77307;
  font-style: verdana;
  `
    ;

export default function TituloNavBar() {
    return (
        <div>
            <TituloNavBarStyled> OSTMA Obra Social para tu Mascota </TituloNavBarStyled>
        </div>
    );
}