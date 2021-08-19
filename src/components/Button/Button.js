import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import styles from './Button.styles';

const useStyles = createUseStyles(styles, { name: 'Button' });

function Button({ className, label, ...props } = this.props) {
  const classes = useStyles();
  return (
    <button className={classNames(className, classes.button)}>
      <span className={classes.buttonLabel}>{label}</span>
    </button>
  );
}

Button.defaultProps = {
  className: '',
  label: '',
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Button;