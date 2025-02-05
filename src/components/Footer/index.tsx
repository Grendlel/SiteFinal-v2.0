import { SFooter } from "./styles"
import Paypal from "../../assets/paypal.png"

export function Footer() {
  return (
    <SFooter>
      <a href="http://paypal.com" target="_blank">
        <img src={Paypal} alt="Paypal" />
      </a>
    </SFooter>
  )
}