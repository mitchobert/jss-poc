import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStylesFromThemeFunction = createUseStyles(theme => ({
    button: {
        background: theme.color.blue400,
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        border: `1px solid ${theme.color.blue400}`,
        borderRadius: theme.borderRadius.sm,
        textTransform: 'uppercase',
        color: theme.color.white,
        fontFamily: theme.fontFamily.roboto,
        cursor: 'pointer',
        '&:hover': {
            background: theme.color.blue800,
            border: `1px solid ${theme.color.blue800}`,
        },
        '&:focus': {
            outline: `2px solid ${theme.color.blue900}`,
            outlineStyle: 'auto',
        }
    },
    label: {
        fontWeight: theme.fontWeight.medium,
    }
}
));

function Button({ className, label, ...props } = this.props) {
    const classes = useStylesFromThemeFunction(props);
    return (
        <button className={classNames( 'button', className, classes.button)}>
            <span className={classes.label}>{label}</span>
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