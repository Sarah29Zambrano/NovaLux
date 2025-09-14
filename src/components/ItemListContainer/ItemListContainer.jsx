import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { obtenerProductosPorCategoria, obtenerProductos } from '../../Asyncmocks';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const { categoria } = useParams();

  React.useEffect(() => {
    setCargando(true);
    if (categoria) {
      obtenerProductosPorCategoria(categoria)
        .then((items) => {
          setProductos(items);
          setCargando(false);
        })
    } else {
      obtenerProductos()
        .then((items) => {
          setProductos(items);
          setCargando(false);
        })
    }
  }, [categoria])

  return (
    <Box className="itemListContainer">
      <Typography className='mensaje' variant="h5">{mensaje}</Typography>
      {!cargando ? <ItemList productos={productos} /> : <p>Cargando productos...</p>}
    </Box>
  )
}

export default ItemListContainer