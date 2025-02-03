import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import theme from './assets/theme/theme.js';

function App() {
  console.log('Rendering App');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/st21">
        <RoutesConfig />
      </Router>
    </ThemeProvider>
  );
}

export default App;
