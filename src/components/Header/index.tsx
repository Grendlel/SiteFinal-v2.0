import { Link } from "react-router-dom"
import { SHeader, NavBar } from "./styles"
import Logo from "../../assets/Olho.gif"
export function Header() {

  return (
    <SHeader>
      <figure>
        <img src={Logo} alt="Logo do site" />
      </figure>
      <h1>Grendel's WMP Skins</h1>
      <NavBar>
        <div>
          <Link to="/">Início</Link>
          <Link to="/comentario">Downloads</Link>
          <Link to="/cadastrar">Cadastrar</Link>
          <Link to="/login">login</Link>
        </div>
      </NavBar>
    </SHeader>
  )
}