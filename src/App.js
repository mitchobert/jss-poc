import { ThemeProvider } from 'react-jss'
import { AppTheme } from './AppTheme';
import Button from './components/Button';
import Label from './components/Label';
import TextField from './components/TextField';
import Accordion from './components/Accordion';
import Link from './components/Link';
import Example from './components/Example';

import { createUseStyles } from 'react-jss';
import styles from './App.styles';

const useStyles = createUseStyles(styles, { name: 'App' });

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={AppTheme}>
      <div className={classes.root}>

        <h1>JSS Proof of Concept</h1>

        <h2>Link</h2>
        <p>A simple example of an element styled with JSS.</p>
        <Example>
          <Link
            className="customClassName"
            href="www.google.com"
          >
            This is a link
          </Link>
        </Example>

        <h2>Label</h2>
        <p>A label is an element that can be used by itself.</p>
        <Example>
          <Label labelText="Label Only" />
        </Example>

        <h2>Label and Text Field</h2>
        <p>The <code>TextField</code> component can consume the <code>Label</code> element to reduce styling.</p>
        <Example>
          <TextField labelText="Label with Field" />
        </Example>

        <h2>Button</h2>
        <p>In this example, certain targets can be targetted for styling, like the <code>button</code> and <code>label</code> attributes.</p>
        <Example>
          <Button label="button" />
        </Example>

        <h2>Accordion</h2>
        <p>Class components can't use React Hooks. In these instances create a wrapper component to add the styling.</p>
        <Example>
          <Accordion title="accordion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet libero ut nunc pulvinar, eget vehicula ligula placerat. Suspendisse id blandit libero, non finibus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis quam ut velit auctor aliquet
          </Accordion>
          <Accordion title="accordion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet libero ut nunc pulvinar, eget vehicula ligula placerat. Suspendisse id blandit libero, non finibus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis quam ut velit auctor aliquet
          </Accordion>
          <Accordion title="accordion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet libero ut nunc pulvinar, eget vehicula ligula placerat. Suspendisse id blandit libero, non finibus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis quam ut velit auctor aliquet
          </Accordion>
        </Example>

      </div>
    </ThemeProvider>
  );
}

export default App;
