import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Comentario() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          img={item.img}
          data={item.data}
          titulo={item.titulo}
          tamanho={item.tamanho}
        />
      ))}
    </S.Section>
  )
}