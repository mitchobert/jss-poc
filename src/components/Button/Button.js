import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStylesFromThemeFunction = createUseStyles(theme => ({
    button: {
        background: theme.color.green,
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        borderRadius: theme.borderRadius.sm,
        color: theme.color.black,
        borderColor: theme.color.green,
        fontFamily: theme.fontFamily.roboto,
    },
    label: {
        fontWeight: theme.fontWeight.medium,
    }
}))

function Button({ label, ...props } = this.props) {
    const classes = useStylesFromThemeFunction(props);
    return (
        <button className={classes.button}>
            <span className={classes.label}>{label}</span>
        </button>
    );
}

Button.defaultProps = {
    label: '',
  };

Button.propTypes = {
    label: PropTypes.string,
};

export default Button;