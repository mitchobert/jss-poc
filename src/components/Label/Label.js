import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => (
    {
        label:{
            display: 'block',
            color: theme.color.black,
            fontWeight: theme.fontWeight.medium,
            fontSize: '12px',
        }
    })
);

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