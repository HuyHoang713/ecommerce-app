import { Typography, Button, Card, CardMedia, CardContent } from '@mui/material'

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ width: 200, m: 2 }}>
      <CardMedia component='img' height='140' image={product.image} alt={product.name} />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>{product.name}</Typography>
        <Typography color='text.secondary'>${product.price}</Typography>
        {/* {product.discount && (
          <Typography color='error'>-{product.discount}%</Typography>
        )} */}
        <Button variant='contained' size='small' sx={{ mt: 1 }}>Add to Cart</Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
