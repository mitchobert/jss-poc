import { ThemeProvider } from 'react-jss'
import { AppTheme } from './AppTheme';
import Button from './components/Button';
import Label from './components/Label';
import TextField from './components/TextField';
import Accordion from './components/Accordion';
import Link from './components/Link';

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
      <Link
        className="customClassName"
        href="www.google.com"
      >
        This is a link
      </Link>
      <br />
    </ThemeProvider>
  );
}

export default App;
