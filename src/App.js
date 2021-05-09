import { ThemeProvider } from 'react-jss'
import { AppTheme } from './AppTheme';
import Button from './components/Button';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Button label="button" />
    </ThemeProvider>
  );
}

export default App;
