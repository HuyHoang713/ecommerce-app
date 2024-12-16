import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@mui/material'

function ProductSpecifications() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h6">Thông số sản phẩm:</Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Thương hiệu</TableCell>
              <TableCell>ODIN CLUB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Chất liệu</TableCell>
              <TableCell>Cotton 100%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Màu sắc</TableCell>
              <TableCell>Trắng, Đen, Hồng</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Xuất xứ</TableCell>
              <TableCell>Việt Nam</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kiểu dáng</TableCell>
              <TableCell>Form rộng</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ProductSpecifications