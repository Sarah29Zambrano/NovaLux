import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/InfoOutline';
import './Item.css';
import { Link } from 'react-router-dom';
import { formatearMoneda } from '../../Asyncmocks';

const Item = ({ id, nombre, descripcion, precio, imagen }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className='itemCardMedia'
        component="img"
        alt={imagen.alt}
        height="140"
        image={imagen.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descripcion}
        </Typography>
        <Typography variant='h4'>{formatearMoneda(precio)}</Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Link to={"/producto/" + id}>
          <Button size="small" startIcon={<InfoIcon />}>Ver más detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Item;
