import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
  /* Cabeçalho */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,118,38,1) 29%, rgba(0,212,255,1) 100%);
  border-bottom: 0.5rem solid rgba(22,1,36,0.5);
  height: 5rem;
  img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    width: 10rem;
  }
  h1{
    font-size: 3rem;
    text-shadow: -1px 0 ${colors.black}, 0 1px ${colors.secondary};
  }
`

export const SNavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: ${colors.black};
    font-size: 1.5rem;
  }
  a:hover {
    font-weight: bold;
  }
  button{
    background-color: ${colors.primary};
    border: 0.15rem solid ${colors.secondary};
    border-radius: 0.2rem;
    padding: 0.3rem;
    font-size: 1rem;
    margin-right: 1rem;
  }
`