export interface Item {
  id: ItemId
  text: string
}

export type ItemId = `${string}-${string}-${string}-${string}-${string}`
