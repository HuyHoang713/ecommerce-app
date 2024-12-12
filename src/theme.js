import { createTheme } from '@mui/material'

// import { ThemeProvider, createTheme } from '@mui/material/styles'
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#4caf50', // Màu chính khi chế độ sáng
        //   contrastText: '#ffffff',
        // },
        // background: {
        //   default: '#ffffff', // Nền mặc định chế độ sáng
        //   paper: '#f5f5f5',
        // },
        // text: {
        //   primary: '#000000', // Văn bản chính chế độ sáng
        // },
      },
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#90caf9', // Màu chính khi chế độ tối
        //   contrastText: '#000000',
        // },
        // background: {
        //   default: '#121212', // Nền mặc định chế độ tối
        //   paper: '#1e1e1e',
        // },
        // text: {
        //   primary: '#ffffff', // Văn bản chính chế độ tối
        // },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
})

export default theme
