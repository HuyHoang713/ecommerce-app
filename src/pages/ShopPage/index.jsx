import Box from '@mui/material/Box'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import SidebarFilter from '~/components/layout/Sidebar'
import MuiPagination from '~/components/navigation/Pagination'

const products = [
  { name: 'Surgical Mask', price: '12.00', image: 'https://via.placeholder.com/200x140' },
  { name: 'Oxygen ', price: '2.00', discount: 22, image: 'https://via.placeholder.com/400x400' },
  { name: 'Surgical Mask', price: '12.00', image: 'https://via.placeholder.com/200x140' },
  { name: ' Device', price: '2.00', discount: 22, image: 'https://via.placeholder.com/400x400' },
  { name: 'Surgical Mask', price: '12.00', image: 'https://via.placeholder.com/200x140' },
  { name: 'Oxygen Device', price: '2.00', discount: 22, image: 'https://via.placeholder.com/400x400' },
  { name: ' Mask', price: '12.00', image: 'https://via.placeholder.com/200x140' },
  { name: 'Oxygen ', price: '2.00', discount: 22, image: 'https://via.placeholder.com/400x400' },
  { name: 'Surgical Mask', price: '12.00', image: 'https://via.placeholder.com/200x140' },
  { name: 'Oxygen ', price: '2.00', discount: 22, image: 'https://via.placeholder.com/400x400' },
  { name: ' Mask', price: '12.00', image: 'https://via.placeholder.com/200x140' },
  { name: 'Oxygen Device', price: '2.00', discount: 22, image: 'https://via.placeholder.com/400x400' },
]

function Shop() {
  return (
    <>
      <Header />

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '20%', borderRight: '1px solid #ddd' }}>
          <SidebarFilter /> 
        </Box>

        <Box sx={{ flexGrow: 1, p: 3 }}>
          <MuiPagination data={products} itemsPerPage={6} />
        </Box>
      </Box>

      <Footer />
    </>
  )
}

export default Shop