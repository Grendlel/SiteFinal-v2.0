import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.terciary};
  padding: 0.5rem;
  border-radius: 1.5rem;
  margin-left: 32.5rem;
  height: 23rem;
  width: 50rem;
  aside {
    color: ${colors.primary};
    font-size: 2.5rem;
    display: flex;
    p {
      color: ${colors.white};
      font-size: 2rem;
      margin-left: 0.5rem;
    }
  }
`