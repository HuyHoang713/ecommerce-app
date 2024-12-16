import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import theme from '~/theme'

function Auth() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, marginLeft: 2 }}>
        <Button variant="outlined" color="inherit">Sign Up</Button>
        <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.contrastText, color: theme.palette.primary.main }}>Log In</Button>
      </Box>
    </>
  )
}

export default Auth