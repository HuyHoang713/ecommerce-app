import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const Footer = () => (
  <>
    <Box sx={{ backgroundColor: '#333', color: '#fff', p: 3, marginTop: 4 }}>
      <Grid container spacing={2} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid xs={12} md={4}>
          <Typography variant='h6'>Information</Typography>
          <Typography>About Us</Typography>
          <Typography>Privacy Policy</Typography>
        </Grid>

        <Grid xs={12} md={4}>
          <Typography variant='h6'>Quick Links</Typography>
          <Typography>Success Story</Typography>
          <Typography>Contact</Typography>
        </Grid>
        
        <Grid xs={12} md={4}>
          <Typography variant='h6'>Subscribe</Typography>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{ backgroundColor: 'lightgray', padding: 1, textAlign: 'center' }}>
      <Typography variant="body2">&copy 2024 Shopee Clone. All rights reserved.</Typography>
    </Box>
  </>
)

export default Footer
