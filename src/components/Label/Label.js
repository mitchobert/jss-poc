import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import styles from './Label.styles';

const useStyles = createUseStyles(styles, { name: 'Label' });

function Label({ labelText } = this.props) {
  const classes = useStyles();
  return (
    <label className={classes.label}>{labelText}</label>
  );
}

Label.defaultProps = {
  labelText: '',
};

Label.propTypes = {
  labelText: PropTypes.string,
};

export default Label;