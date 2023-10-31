import { useState } from 'react'
import { type ItemId, type Item } from '../types/types'

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text
    }

    setItems(prevItems => [...prevItems, newItem])
  }

  const removeItem = (id: ItemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return {
    items,
    addItem,
    removeItem
  }
}
