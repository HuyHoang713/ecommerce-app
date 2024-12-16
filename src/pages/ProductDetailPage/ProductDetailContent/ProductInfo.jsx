import {
  Box,
  Typography,
  Button
} from '@mui/material'

function ProductInfo({ flex }) {
  return (
    <Box sx={{ flex: flex, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Áo sơ mi cộc tay Original ODIN CLUB
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Mã sản phẩm: ODIN123
      </Typography>
      <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', marginTop: 2 }}>
        115.000đ <Typography component="span" variant="body1" color="error">-30%</Typography>
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        ✔ Miễn phí vận chuyển toàn quốc
      </Typography>
      <Typography variant="body2">✔ Đổi trả trong 7 ngày</Typography>

      <Box sx={{ marginTop: 3 }}>
        <Typography variant="body1">Chọn size:</Typography>
        <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
          <Button variant="outlined" size="small" sx={{ minWidth: '60px' }}>S</Button>
          <Button variant="contained" size="small" sx={{ minWidth: '60px' }}>M</Button>
          <Button variant="outlined" size="small" sx={{ minWidth: '60px' }}>L</Button>
          <Button variant="outlined" size="small" sx={{ minWidth: '60px' }}>XL</Button>
        </Box>

        <Typography variant="body1" sx={{ marginTop: 2 }}>Chọn màu:</Typography>
        <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
          <Button variant="outlined" size="small" sx={{ minWidth: '80px' }}>Trắng</Button>
          <Button variant="contained" size="small" sx={{ minWidth: '80px' }}>Đen</Button>
          <Button variant="outlined" size="small" sx={{ minWidth: '80px' }}>Hồng</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, marginTop: 4 }}>
        <Button 
          variant="contained" 
          color="primary"
          size="large"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '12px 40px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        >
          Mua ngay
        </Button>
        <Button 
          variant="outlined" 
          color="primary"
          size="large" 
          sx={{
            fontSize: '1.1rem',
            padding: '12px 30px',
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px'
            }
          }}
        >
          Thêm vào giỏ hàng
        </Button>
      </Box>

      {/* <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Thông tin sản phẩm:</Typography>
        <ul>
          <li>Chất liệu: Cotton</li>
          <li>Kiểu dáng: Form rộng</li>
          <li>Thương hiệu: ODIN CLUB</li>
        </ul>
      </Box> */}
    </Box>
  )
}

export default ProductInfo