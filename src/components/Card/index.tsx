import { Section } from "./styles";
export interface ICard {
  data: string
  titulo: string
  tamanho: string
  img: string
}
export const Card = ({ data, titulo, tamanho, img }: ICard) => {
  return (
    <Section>
      <img src={img} alt="Skins" />
      <aside>
        <p>{titulo}</p>
      </aside>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <aside>
        <h5>Size:</h5>
        <p>{tamanho}</p>
      </aside>
    </Section>
  );
};
