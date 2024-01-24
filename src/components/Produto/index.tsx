import { useDispatch } from 'react-redux'
import { Game } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  game: Game
}

export const paraEuro = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR' }).format(
    valor
  )

const Produto = ({ game }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{game.categoria}</S.Tag>
        <img src={game.imagem} alt={game.titulo} />
      </S.Capa>
      <S.Titulo>{game.titulo}</S.Titulo>
      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        {game.precoAntigo && <small>{paraEuro(game.precoAntigo)}</small>}
        <strong>{paraEuro(game.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(adicionar(game))} type="button">
        Ajouter au panier
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
