import { Box, Typography, Button, Card, CardMedia, CardContent, Container, IconButton } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { useState } from 'react'

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const productsPerSlide = 4
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const totalSlides = Math.ceil(products.length / productsPerSlide)

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <Box>
      <Container sx={{ my: 5 }}>
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Featured Products
          </Typography>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <Typography 
              color="primary" 
              sx={{ 
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              See All
            </Typography>
          </Link>
        </Box> */}

        <Box sx={{ position: 'relative' }}>
          <Box sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.3s ease',
                transform: `translateX(-${currentSlide * 100}%)`,
                gap: 3
              }}
            >
              {products.map((product) => (
                <Box
                  key={product}
                  sx={{
                    minWidth: `calc((100% - ${3 * 24}px) / 4)`,
                    flexShrink: 0
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://via.placeholder.com/300x200"
                      alt="Product Image"
                    />
                    <CardContent>
                      <Typography variant="h6">Product Name {product}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        $99.99
                      </Typography>
                      <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' }
            }}
          >
            <ArrowBack />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': { bgcolor: 'background.paper' }
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductCarousel