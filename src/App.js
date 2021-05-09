import { ThemeProvider } from 'react-jss'
import { AppTheme } from './AppTheme';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      hello
    </ThemeProvider>
  );
}

export default App;
