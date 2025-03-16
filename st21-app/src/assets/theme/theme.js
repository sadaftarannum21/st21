import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F4A9BE',
      light: '#FBDDE5',
      dark: '#E67193',
    },
    secondary: {
      main: '#F4B9A9',
      light: '#F7E1E0',
      dark: '#E88C74',
    },
    error: {
      main: '#B00020',
      light: '#BF152C',
      dark: '#CC1E33',
    },
    warning: {
      main: '#FCEC55',
      light: '#FCEF74',
      dark: '#FAE635',
    },
    background: {
      paper: '#F0F0F0',
      default: '#F5EADF',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: '#f0f0f0',
          fontFamily: 'Roboto, Arial, sans-serif',
        },
        '.App': {
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '::-webkit-scrollbar': {
          width: '10px',
          height: '10px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#FBDDE5',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#E67193',
          borderRadius: '10px',
          border: '2px solid #E67193',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#FBDDE5',
        },
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#E67193 #E67193',
        },
      },
    },
  },
});

export default theme;
