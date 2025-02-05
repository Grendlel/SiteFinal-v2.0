import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  margin: 0 auto;
  min-height: calc(100vh - 8.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    font-size: 5rem;font-size: 4rem;
    display: flex;
    color: ${colors.terciary};
    margin-top: 1rem;
    margin-left: 1rem;
    text-shadow: -1px 0 ${colors.black}, 0 1px ${colors.primary}, 1px 0 ${colors.primary}, 0 -1px ${colors.secondary};
  }
`
