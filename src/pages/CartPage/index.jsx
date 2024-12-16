import { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 2 },
  ])

  const shippingFee = 50

  const handleQuantityChange = (id, value) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, value) } : item
    )
    setCartItems(updatedCart)
  }

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingFee

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell align="center">
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    inputProps={{ min: 1, style: { textAlign: 'center' } }}
                    sx={{ width: 60 }}
                  />
                </TableCell>
                <TableCell align="right">${item.price * item.quantity}</TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ marginTop: 3, textAlign: 'right' }}>
        <Typography variant="h6">Shipping Fee: ${shippingFee}</Typography>
        <Typography variant="h5">Total: ${totalPrice}</Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: 2 }}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  )
}

export default CartPage
