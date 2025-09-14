import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <header>
        <title>NovaLux</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link href="https://fonts.cdnfonts.com/css/instagram-sans-2" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </header>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<div>404 Not Found</div>} />
          <Route path='/' element={<ItemListContainer mensaje={'¡Hola, Bienvenidos a la tienda NovaLux!'} />} />
          <Route path='/seccion/:categoria' element={<ItemListContainer />} />
          <Route path='/producto/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
