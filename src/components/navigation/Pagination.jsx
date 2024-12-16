import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Typography } from '@mui/material'
import ProductCard from '../product/ProductCard'
import Grid from '@mui/material/Grid2'

const MuiPagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  // Lấy dữ liệu trang hiện tại
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleChange = (event, value) => {
    setCurrentPage(value)
  }

  return (
    <Box>
      <Typography variant='h5' sx={{ mb: 2, fontWeight: 'bold' }}>
        List All Products
      </Typography>

      <Grid container spacing={2}>
        {currentData.map((prod, index) => (
          <Grid xs={12} sm={6} md={3} key={index}>
            <ProductCard product={prod} />
          </Grid>
        ))}
      </Grid>

      {/* Phân trang */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color='primary'
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  )
}

export default MuiPagination
