import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

// expect se utiliza para establecer el valor que deseas evaluar, y toBe se utiliza para comparar ese valor con un valor esperado y determinar si la prueba es exitosa o fallida en función de la igualdad de los valores.

describe('<App />', () => {
  test('should work', () => {
    expect(1).toBe(1)
  }),
  test('should render app', () => {
    const { getByText } = render(<App />)
    screen.debug()
    expect(
      // screen.getByText(/Prueba Tecnica Front-End Trainee-Jr/i)
      getByText(/Prueba Tecnica Front-End Trainee-Jr/i)
    ).toBeDefined()
  }),
  test('should add items and remove them', async () => {
    const user = userEvent.setup()

    render(<App />)

    // buscar el input
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // buscar el form
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    // buscar el boton
    const button = form?.querySelector('button')
    expect(button).toBeDefined()

    if(input instanceof HTMLInputElement) {
      // escribir en el input
      const randomText = crypto.randomUUID()
      await user.type(input, randomText)
      expect(input.value).toBe(randomText)

      // hacer submit
      await user.click(button!)

      // asegurar que el elemento se agrego a la lista
      const list = screen.getByRole('list')
      expect(list).toBeDefined()
      expect(list?.children.length).toBe(1)

      // asegurarnos que lo podemos borrar
    const item = screen.getByText(randomText)
    const removeButton = item.querySelector('button')
    expect(removeButton).toBeDefined()

    await user.click(removeButton!)

    const noResults = screen.getByText('No hay elementos')
    expect(noResults).toBeDefined()
    }
  })
})