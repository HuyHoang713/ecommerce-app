import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import Navbar from '../navigation/Navbar'
import Search from '../ui/Search'
import Auth from '../navigation/Auth'
import UserMenu from '../navigation/UserMenu'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const isMenuOpen = Boolean(anchorEl)

  const menuId = 'primary-search-account-menu'

  return (
    <AppBar position="static" >
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>

        {/* Navbar */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Navbar />
        </Box>

        {/* Search */}
        <Search />

        {/* Auth */}
        <Auth />
        {/* <UserMenu /> */}

        {/* Menu Icon for Mobile */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleMenuOpen}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          keepMounted
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>Products</MenuItem>
          <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header