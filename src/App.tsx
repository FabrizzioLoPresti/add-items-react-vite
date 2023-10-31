import './App.css'
import ItemCard from './components/item'
import { type ItemId } from './types/types.d'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

// const INITIAL_ITEMS: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     text: 'Videojuegos 🎮'
//   },
//   {
//     id: crypto.randomUUID(),
//     text: 'Libros 📚'
//   },
//   {
//     id: crypto.randomUUID(),
//     text: 'Series 🎬'
//   }
// ]

function App () {
  const { items, addItem, removeItem } = useItems()
  useSEO({
    title: `[${items.length}] Prueba Tecnica Front-End Trainee-Jr`,
    description: 'Agregar/Eliminar elementos de una lista con React.js, Typescript, Vite y Vitetest'
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { elements } = e.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement

    if (input !== null && isInput) {
      addItem(input.value)
      input.value = ''
    }
  }

  // Esto es una Funcion de Primera Clase o Funcion de Orden Superior (HOF), que es una funcion que recibe otra funcion como parametro y retorna otra funcion
  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba Tecnica Front-End Trainee-Jr</h1>
        <h2>Agregar/Eliminar elementos de una lista</h2>
        <form action="" onSubmit={handleSubmit} aria-label='Add items to list' >
          <label htmlFor="item">
            Elemento a crear:
            <input type="text" name="item" id="item" placeholder='Videojuegos 🎮' required />
          </label>

          <button type='submit'>
            Agregar
          </button>
        </form>
      </aside>

      <section>
        <h2>Lista de Elementos</h2>
        <ul>
          {
            items.length > 0
              ? items.map(item => (
                <ItemCard
                  key={item.id}
                  item={item}
                  createHandleRemoveItem={createHandleRemoveItem}
                />
              ))
              : <li>
              <span>No hay elementos</span>
            </li>
          }
        </ul>
      </section>
    </main>
  )
}

export default App
