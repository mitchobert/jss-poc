import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Label from '../Label';
import styles from './TextField.styles';

const useStyles = createUseStyles(styles, { name: 'Text-Field' });
function TextField({ labelText, id, name, value, onChange } = this.props) {
  const classes = useStyles();
  return (
    <>
      {labelText && (
        <Label className={classes.fieldLabel} labelText={labelText} />
      )}
      <input
        className={classes.textField}
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

TextField.defaultProps = {
  labelText: '',
  id: '',
  name: '',
  value: '',
  onChange: null,
};

TextField.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;