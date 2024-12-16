import { Box, IconButton, MenuItem, Menu } from '@mui/material'
import { ShoppingCart, Favorite, AccountCircle } from '@mui/icons-material'
import SelectModeTheme from '../ui/SelectModeTheme'
import { useState } from 'react'

function UserMenu() {

  // State quản lý
  const [anchorEl, setAnchorEl] = useState(null)

  // Menu người dùng
  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setAnchorEl(null)
  }

  // Render menu người dùng
  const renderUserMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleUserMenuClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={handleUserMenuClose}>Hồ Sơ</MenuItem>
      <MenuItem onClick={handleUserMenuClose}>Đơn Hàng</MenuItem>
      <MenuItem onClick={handleUserMenuClose}>Đăng Xuất</MenuItem>
    </Menu>
  )

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SelectModeTheme />

        <IconButton color="inherit">
          <Favorite />
        </IconButton>

        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>

        <IconButton color="inherit" onClick={handleUserMenuOpen}>
          <AccountCircle />
        </IconButton>
      </Box>

      {/* User Menu Render */}
      {renderUserMenu}
    </>
  )
}

export default UserMenu