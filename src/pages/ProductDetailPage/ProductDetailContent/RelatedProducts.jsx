import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material'

function RelatedProducts() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h6">Sản phẩm liên quan:</Typography>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/200x200"
            alt="Product Image"
          />
          <CardContent>
            <Typography variant="body1">Áo thun nam</Typography>
            <Typography variant="body2" color="text.secondary">
              69.000đ
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/200x200"
            alt="Product Image"
          />
          <CardContent>
            <Typography variant="body1">Áo khoác mùa đông</Typography>
            <Typography variant="body2" color="text.secondary">
              295.000đ
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default RelatedProducts