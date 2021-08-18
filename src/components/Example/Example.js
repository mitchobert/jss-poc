import React from 'react';
import { createUseStyles } from 'react-jss';

const useStylesFromThemeFunction = createUseStyles(theme => ({
  example: {
    background: theme.color.gray200,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
}
));

function Example({ children, ...props } = this.props) {
  const classes = useStylesFromThemeFunction(props);
  return (
    <div className={classes.example}>
      {children}
    </div>
  );
}

export default Example;