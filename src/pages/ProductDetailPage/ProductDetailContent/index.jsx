import Box from '@mui/material/Box'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import ProductSpecifications from './ProductSpecifications'
import CustomerReviews from './CustomerReviews'
import RelatedProducts from './RelatedProducts'

function ProductDetailContent() {
  return (
    <>
      <Box sx={{ paddingTop: 4, maxWidth: '1200px', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <ProductImages flex={1} />
          <ProductInfo flex={2} />
        </Box>

        <ProductSpecifications />

        <CustomerReviews />

        <RelatedProducts />
      </Box>
    </>
  )
}

export default ProductDetailContent