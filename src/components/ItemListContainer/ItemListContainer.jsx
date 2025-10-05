import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const { categoria } = useParams();
  console.log(import.meta.env.VITE_FIREBASE_API_KEY)

  React.useEffect(() => {
    setCargando(true)
    const misProductos = categoria ? query(collection(db, 'productos'), where('categoria', '==', categoria)) : collection(db, 'productos')
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos)
        setCargando(false)
      })
      .catch(error => console.log(error))
  }, [categoria])

  // React.useEffect(() => {
  //   setCargando(true);
  //   if (categoria) {
  //     obtenerProductosPorCategoria(categoria)
  //       .then((items) => {
  //         setProductos(items);
  //         setCargando(false);
  //       })
  //   } else {
  //     obtenerProductos()
  //       .then((items) => {
  //         setProductos(items);
  //         setCargando(false);
  //       })
  //   }
  // }, [categoria])

  return (
    <Box className="itemListContainer">
      <Typography className='mensaje' variant="h5">{mensaje}</Typography>
      {!cargando ? <ItemList productos={productos} /> : <p>Cargando productos...</p>}
    </Box>
  )
}

export default ItemListContainer