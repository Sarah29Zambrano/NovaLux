import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import "./NavBar.css"
import logoNovaLux from "../../assets/NovaLuxLogo.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const pages = [
  {
    id: 1,
    nombreParaMostrar: "Pequeños Electrodomésticos",
    nombreLogico: "pequenosElectrodomesticos"
  },
  {
    id: 2,
    nombreParaMostrar: "Refrigeración",
    nombreLogico: "refrigeracion"
  },
  {
    id: 3,
    nombreParaMostrar: "Lavado",
    nombreLogico: "lavado"
  }
]

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="navBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Box className="logoContainer" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img src={logoNovaLux} className="logoNovaLux" />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(({ id, nombreLogico, nombreParaMostrar }) => (
                <Link key={id} to={"/seccion/" + nombreLogico}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{nombreParaMostrar}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link className="logoContainer" to="/">
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "center" }}>
              <img src={logoNovaLux} className="logoNovaLux" />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-between" }}>
            {pages.map(({ id, nombreLogico, nombreParaMostrar }) => (
              <Link key={id} to={"/seccion/" + nombreLogico}>
                <Button
                  onClick={handleCloseNavMenu}
                  className="buttonPage"
                >
                  {nombreParaMostrar}
                </Button>
              </Link>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
