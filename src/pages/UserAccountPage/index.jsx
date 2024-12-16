import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import ProfileIcon from '@mui/icons-material/Person'
import OrderIcon from '@mui/icons-material/ShoppingCart'
import PasswordIcon from '@mui/icons-material/Lock'

const UserAccountPage = () => {
  const [tabValue, setTabValue] = useState(0)
  const [profile, setProfile] = useState({
    name: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
  })
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
  }

  const handleProfileUpdate = () => {
    alert('Profile updated successfully!')
  }

  const handlePasswordUpdate = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('Passwords don\'t match!')
      return
    }
    alert('Password updated successfully!')
  }

  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        User Account
      </Typography>

      <Grid container spacing={2}>
        {/* Side Navigation */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ height: '100%' }}>
            <Tabs
              orientation="vertical"
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                borderRight: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  py: 2,
                },
              }}
            >
              <Tab label="Profile" icon={<ProfileIcon />} iconPosition="start" />
              <Tab label="Order History" icon={<OrderIcon />} iconPosition="start" />
              <Tab label="Change Password" icon={<PasswordIcon />} iconPosition="start" />
            </Tabs>
          </Paper>
        </Grid>

        {/* Content Area */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 4 }}>
            {/* Profile Tab */}
            {tabValue === 0 && (
              <Box>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'medium' }}>
                  Personal Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    onClick={handleProfileUpdate}
                  >
                    Update Profile
                  </Button>
                </Box>
              </Box>
            )}

            {/* Order History Tab */}
            {tabValue === 1 && (
              <Box>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'medium' }}>
                  Order History
                </Typography>
                <Paper variant="outlined" sx={{ borderRadius: 2 }}>
                  <List>
                    <ListItem sx={{ py: 2 }}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight="medium">
                            Order #1234 - $99.99
                          </Typography>
                        }
                        secondary="Date: 2024-06-01 | Status: Delivered"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 2 }}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight="medium">
                            Order #1235 - $149.99
                          </Typography>
                        }
                        secondary="Date: 2024-06-15 | Status: Processing"
                      />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ py: 2 }}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight="medium">
                            Order #1236 - $89.99
                          </Typography>
                        }
                        secondary="Date: 2024-06-20 | Status: Shipped"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Box>
            )}

            {/* Change Password Tab */}
            {tabValue === 2 && (
              <Box>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'medium' }}>
                  Change Password
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Current Password"
                      type="password"
                      name="currentPassword"
                      value={passwords.currentPassword}
                      onChange={handlePasswordChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="New Password"
                      type="password"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Confirm New Password"
                      type="password"
                      name="confirmPassword"
                      value={passwords.confirmPassword}
                      onChange={handlePasswordChange}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    onClick={handlePasswordUpdate}
                  >
                    Update Password
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UserAccountPage