# Project Information

Github Repo: [Prueba Tecnica Trainee-Jr](https://github.com/FabrizzioLoPresti/add-items-react-vite)

Youtube Video: [PRUEBA TÉCNICA de React para Junior y Trainee](https://www.youtube.com/watch?v=JW_x-Tq5Vt0)

Uso de ESLint -> [ESLint](https://eslint.org/) con npx eslint --init (JS -> Vite ya trae su archivo (desactivar algunas reglas))

Types generados con Quicktype.io -> [Quicktype.io](https://quicktype.io/)

Testing con Vitest y Happy Dom -> [Vitest](https://vitest.dev/)

Testing de Componentes con React Testing Librabry -> [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Testing E2E simulando Usuario -> [Cypress](https://www.cypress.io/) o [user-event](https://testing-library.com/docs/ecosystem-user-event/)

Consultar APIs con SWR -> [SWR](https://swr.vercel.app/)

Custom Hooks

FormData para obtener valor de Inputs -> [FormData](https://developer.mozilla.org/es/docs/Web/API/FormData)

Funciones de Primer Orden -> [Funciones de Primer Orden](https://developer.mozilla.org/es/docs/Glossary/First-class_Function)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# 1ª Prueba técnica React y Nodejs

> Te damos la bienvenida a la primera prueba técnica del proceso de selección como Senior Software Typescript Developer con React y Nodejs. La prueba consiste en lo siguiente:

### Ejercicio 1. Añadir y eliminar elementos de una lista (React)

**Requisitos**: Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.

**Duración máxima**: 40 minutos

**Enunciado**:

```bash
Crear una app en React que implemente un campo de texto y botón para añadir un elemento.

Cuando se hace click en el botón, el texto en el campo de entrada debe agregarse a continuación en una lista de elementos.

Además, cada vez que se hace click en cualquier elemento de la lista, debe eliminarse de la lista.
```

- [x] _Dar importancia a la funcionalidad y usabilidad, más que al diseño visual._
- [x] _El código debe ser enteramente desarrollado en Typescript._

### Ejercicio 2. API REST (Nodejs)

**Requisitos**: Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.

**Duración máxima**: 40 minutos

**Enunciado**:

```bash
Crear una API REST en Node.js que gestione Libros y Autores. Se deben crear 2 endpoints para operar con la misma.

Se puede usar almacenamiento en memoria o el sistema gestor de bases de datos de su preferencia.
```

**Entidad Libro (book):**

- id: number
- title: string
- chapters: number. Representa la cantidad de capítulos.
- pages: number. Representa la cantidad de páginas.

**Entidad Autor (author):**

- id: number
- name: string

- [x] _Debe existir una relación del tipo Many-to-Many entre los libros y los autores_

**Endpoints:**

1. **Nuevo Libr**o: Creará un nuevo libro, aportando todos sus datos incluidos los autores.
2. **Obtener todos los libros**: Deberá devolver un listado de libros con sus autores.
3. **Crear un autor**: Creará un nuevo autor
4. **Obtener todos los autores**: Deberá devolver un listado de todos los autores con los libros que tengan.
5. **Obtener Promedio de Páginas por Capítulo**: Obtener el dato de una instancia de Libro ya creada. Se debe devolver el id del libro consultado y un promedio de páginas por capítulo. Ambos en formato cadena, y con 2 decimales para el promedio.

- [x] _Para la prueba es necesario realizar lo que dicta el enunciado, aunque se pueden agregar características no mencionadas (manejo de errores, repositorio de datos, validaciones, etc.)._
- [x] _Se pueden asumir los aspectos que no aclare el enunciado, y realizar aclaraciones personales en caso de ser necesario._
- [x] _El código debe ser enteramente desarrollado en Typescript._

Recuerda que dispones de 90 minutos para realizar las dos pruebas conjuntamente.

Por favor, confirma que lo has recibido y vas a comenzar la prueba en el botón de abajo.

**Envía todos los archivos fuente del proyecto vía email en archivo Zip (sin carpeta de dependencias) una vez finalizado el tiempo de la prueba.**

¡Mucha suerte!
