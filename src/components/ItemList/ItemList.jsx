import Box from "@mui/material/Box";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ productos }) => {
  return (
    <Box className="itemList">
      {productos.map(producto => (
        <Item key={producto.id} {...producto} />
      ))}
    </Box>
  );
}

export default ItemList;
