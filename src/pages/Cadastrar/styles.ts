import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const SSection = styled.section`
  min-height: calc(100vh - 8.5rem);
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.primary};
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  form {
    background-color: ${colors.primary};
    border: 0.2rem solid ${colors.white};
    border-radius: 1rem;
    padding: 1.5rem;
    color: ${colors.white};
    font-size: 1.2rem;
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.primary};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 2.5rem;
        width: 2.5rem;
        padding: 0.3rem;
        color: ${colors.primary};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.white};
        font-weight: bold;
      }
    }
  }
  button{
    background-color: ${colors.terciary};
    border: 0.15rem solid ${colors.white};
    border-radius: 0.2rem;
    padding: 0.3rem;
    color: ${colors.white};
  }
`