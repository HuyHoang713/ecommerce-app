import { Box, Typography, Button } from '@mui/material'

function Banner() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(https://via.placeholder.com/1920x600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Welcome to MyShop</Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>Discover our exclusive offers and collections</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Shop Now
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Banner