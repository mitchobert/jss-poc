import { ThemeProvider } from 'react-jss'
import { AppTheme } from './AppTheme';
import Button from './components/Button';
import Label from './components/Label';
import TextField from './components/TextField';
import Accordion from './components/Accordion';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Label labelText="Label Only" />
      <br />
      <TextField labelText="Label with Field" />
      <br />
      <Button label="button" />
      <br />
      <br />
      <Accordion title="accordion">
        This is the hidden content.
      </Accordion>
      <br />
    </ThemeProvider>
  );
}

export default App;
