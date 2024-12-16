import { Box, Typography, Container } from '@mui/material'
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Banner from '~/components/ui/Banner'
import ProductCarousel from '~/components/product/ProductCarousel'

const HomePage = () => {
  return (
    <Box>
      <Header />

      {/* Banner Section */}
      <Banner />

      {/* Featured Products Section */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>Featured Products</Typography>
        <ProductCarousel />
      </Container>

      {/* Collections Section */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>Our Collections</Typography>
        <ProductCarousel />
      </Container>

      {/* About Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 5 }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>About Us</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            MyShop is your one-stop destination for quality and stylish products. With years of experience in the e-commerce industry, we are dedicated to providing the best shopping experience to our customers.
          </Typography>
          <Typography variant="body1">
            Discover top-notch items at unbeatable prices and enjoy a seamless shopping journey with MyShop.
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default HomePage
