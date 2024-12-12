import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
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
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='label-select-mode-theme'>Theme</InputLabel>
      <Select
        labelId='label-select-mode-theme'
        id='select-mode-theme'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value="light">
          <LightModeIcon fontSize='small' />Light
        </MenuItem>
        <MenuItem value="dark">
          <DarkModeIcon fontSize='small' />Dark
        </MenuItem>
        <MenuItem value="system">
          <SystemModeIcon fontSize='small' />System
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectModeTheme