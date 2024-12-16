import { Box, Typography, Checkbox, Slider } from '@mui/material'

const SidebarFilter = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant='h6'>Category</Typography>
      {['Accessories', 'Baby Care', 'Medical', 'Supplies'].map((cat) => (
        <div key={cat}>
          <Checkbox /> {cat}
        </div>
      ))}

      <Typography variant='h6' sx={{ mt: 2 }}>
        Brand
      </Typography>
      {['Cheetos', 'Lays', 'Nescafe'].map((brand) => (
        <div key={brand}>
          <Checkbox /> {brand}
        </div>
      ))}

      <Typography variant='h6' sx={{ mt: 2 }}>
        Price Range
      </Typography>
      <Slider defaultValue={30} min={10} max={1000} />
    </Box>
  )
}

export default SidebarFilter
