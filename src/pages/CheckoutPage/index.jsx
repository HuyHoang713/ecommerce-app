import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from '@mui/material'
import Grid from '@mui/material/Grid2'

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery')

  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Grid container spacing={6}>
        {/* Left Section - Shipping Information */}
        <Grid size={7}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
            Checkout
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Shipping Information
          </Typography>

          {/* Delivery Method */}
          <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
            <Button
              variant={deliveryMethod === 'delivery' ? 'contained' : 'outlined'}
              onClick={() => setDeliveryMethod('delivery')}
              startIcon={<span>🚚</span>}
            >
              Delivery
            </Button>
            <Button
              variant={deliveryMethod === 'pickup' ? 'contained' : 'outlined'}
              onClick={() => setDeliveryMethod('pickup')}
              startIcon={<span>📍</span>}
            >
              Pick up
            </Button>
          </Box>

          {/* Form Fields */}
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Full name"
                required
                size="small"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label="Email address"
                required
                size="small"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label="Phone number"
                required
                size="small"
                InputProps={{
                  startAdornment: (
                    <select style={{ border: 'none', marginRight: 8 }}>
                      <option>🇺🇸 +1</option>
                    </select>
                  ),
                }}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                select
                label="Country"
                required
                size="small"
                defaultValue=""
              >
                <MenuItem value="">Choose country</MenuItem>
              </TextField>
            </Grid>
            <Grid size={4}>
              <TextField
                fullWidth
                label="City"
                size="small"
              />
            </Grid>
            <Grid size={4}>
              <TextField
                fullWidth
                label="State"
                size="small"
              />
            </Grid>
            <Grid size={4}>
              <TextField
                fullWidth
                label="ZIP Code"
                size="small"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the Terms and Conditions."
            />
          </Box>
        </Grid>

        {/* Right Section - Cart Summary */}
        <Grid size={5}>
          <Box sx={{ bgcolor: '#f8f9fa', p: 3, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Review your cart
            </Typography>

            {/* Cart Items */}
            <Box sx={{ mb: 3 }}>
              {/* Example cart item */}
              <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
                <img src="https://via.placeholder.com/80" alt="Product" style={{ width: 80, height: 80 }} />
                <Box>
                  <Typography variant="body1">DuoComfort Sofa Premium</Typography>
                  <Typography variant="body2" color="text.secondary">1x</Typography>
                  <Typography variant="body1">${20.00}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
                <img src="/sofa-image.jpg" alt="Product" style={{ width: 80, height: 80 }} />
                <Box>
                  <Typography variant="body1">DuoComfort Sofa Premium</Typography>
                  <Typography variant="body2" color="text.secondary">1x</Typography>
                  <Typography variant="body1">${20.00}</Typography>
                </Box>
              </Box>
            </Box>

            {/* Discount Code */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField
                size="small"
                placeholder="Discount code"
                fullWidth
              />
              <Button variant="outlined">Apply</Button>
            </Box>

            {/* Order Summary */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Subtotal</Typography>
                <Typography>${45.00}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Shipping</Typography>
                <Typography>${5.00}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Discount</Typography>
                <Typography color="error">-${10.00}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Typography fontWeight="bold">Total</Typography>
                <Typography fontWeight="bold">${40.00}</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
            >
              Pay Now
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>🔒</span>
              <Box>
                <Typography variant="body2">Secure Checkout - SSL Encrypted</Typography>
                <Typography variant="caption" color="text.secondary">
                  Ensuring your financial and personal details are secure during every transaction.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CheckoutPage
