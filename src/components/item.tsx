import { type Item, type ItemId } from '../types/types'

interface Props {
  item: Item
  createHandleRemoveItem: (id: ItemId) => () => void
}

const ItemCard = ({ item, createHandleRemoveItem }: Props) => {
  return (
    <li>
      <span>{item.text}</span>
      <button onClick={createHandleRemoveItem(item.id)}>Eliminar</button>
    </li>
  )
}

export default ItemCard
