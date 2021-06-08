import { ThemeProvider } from 'react-jss'
import { AppTheme } from './AppTheme';
import Button from './components/Button';
import Label from './components/Label';
import TextField from './components/TextField';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Label labelText="Label Only" />
      <br />
      <TextField labelText="Label with Field" />
      <br />
      <Button label="button" />
      <br />
    </ThemeProvider>
  );
}

export default App;
