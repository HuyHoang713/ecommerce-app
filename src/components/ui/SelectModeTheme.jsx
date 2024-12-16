import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SystemModeIcon from '@mui/icons-material/SettingsBrightness'

function SelectModeTheme() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{  
      m: 1, 
      minWidth: 120, 
      // bgcolor: mode === 'dark' ? '#121212' : '',
      color: mode === 'dark' ? '#ffffff' : '#ffffff', 
    }} 
    size='small'
    >
      <InputLabel id='label-select-mode-theme'>Theme</InputLabel>
      <Select
        labelId='label-select-mode-theme'
        id='select-mode-theme'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{display:'flex', alignItems:'center', gap:1}}>
            <LightModeIcon fontSize='small' />Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{display:'flex', alignItems:'center', gap:1}}>
            <DarkModeIcon fontSize='small' />Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{display:'flex', alignItems:'center', gap:1}}>
            <SystemModeIcon fontSize='small' />System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectModeTheme