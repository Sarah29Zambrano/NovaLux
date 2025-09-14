import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../Asyncmocks';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      obtenerProductoPorId(id)
        .then((item) => {
          setProducto(item);
        });
    }
  }, [id]);
  return <ItemDetail {...producto} />;
}

export default ItemDetailContainer