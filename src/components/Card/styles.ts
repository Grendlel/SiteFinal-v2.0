import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  flex-direction: column;
  background-color: ${colors.terciary};
  padding: 0.5rem;
  border-radius: 1.5rem;
  margin: 0.5rem;
  height: 20rem;
  width: 100rem;
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