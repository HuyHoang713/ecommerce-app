import {
  Box,
  Typography,
  Divider,
  IconButton
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

function CustomerReviews() {
  return (
    <Box sx={{ 
      marginTop: 4,
      padding: 3,
      backgroundColor: '#f8f9fa',
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid #e9ecef'
    }}>
      <Typography variant="h6" sx={{
        borderBottom: '2px solid #dee2e6',
        paddingBottom: 1,
        marginBottom: 2
      }}>
        Đánh giá từ khách hàng:
      </Typography>
      <Box sx={{
        backgroundColor: 'white',
        padding: 2,
        borderRadius: 1,
        marginBottom: 2
      }}>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Nguyễn Văn A</strong> <StarIcon color="warning" /><StarIcon color="warning" /><StarIcon color="warning" /><StarIcon color="warning" /><StarIcon color="warning" />
        </Typography>
        <Typography variant="body2" sx={{ color: '#6c757d' }}>
          Hàng chất lượng, đúng như mô tả. Giao hàng nhanh.
        </Typography>
      </Box>
      <Divider sx={{ marginY: 2 }} />
      <Box sx={{
        backgroundColor: 'white', 
        padding: 2,
        borderRadius: 1
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Trần Thị B</strong> <StarIcon color="warning" /><StarIcon color="warning" /><StarIcon color="warning" /><StarIcon color="warning" /><StarIcon color="disabled" />
          </Typography>
          <Box>
            <IconButton size="small" color="primary">
              <EditIcon />
            </IconButton>
            <IconButton size="small" color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: '#6c757d' }}>
          Màu hơi khác so với hình nhưng vẫn rất đẹp.
        </Typography>
      </Box>
    </Box>
  )
}

export default CustomerReviews