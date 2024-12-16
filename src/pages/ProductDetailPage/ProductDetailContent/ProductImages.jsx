import Box from '@mui/material/Box'

function ProductImages({ flex }) {
  return (
    <Box sx={{ flex: flex }}>
      <img src="https://via.placeholder.com/400x400" alt="Sản phẩm" style={{ width: '100%' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <img src="https://via.placeholder.com/100x100" alt="Hình nhỏ" style={{ border: '1px solid #ccc', borderRadius: 4 }} />
        <img src="https://via.placeholder.com/100x100" alt="Hình nhỏ" style={{ border: '1px solid #ccc', borderRadius: 4 }} />
        <img src="https://via.placeholder.com/100x100" alt="Hình nhỏ" style={{ border: '1px solid #ccc', borderRadius: 4 }} />
      </Box>
    </Box>
  )
}

export default ProductImages