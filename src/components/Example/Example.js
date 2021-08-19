import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Example.styles';

const useStyles = createUseStyles(styles, { name: 'Example' });

function Example({ children, ...props } = this.props) {
  const classes = useStyles();
  return (
    <div className={classes.example}>
      {children}
    </div>
  );
}

export default Example;