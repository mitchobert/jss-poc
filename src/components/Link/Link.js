import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Link.styles';

const useStyles = createUseStyles(styles, { name: 'Link' });

const Link = ({ className, href, children } = this.props) => {
    const classes = useStyles();
    return (
        <a
            className={`${classes.link} ${className}`}
            href={href}
        >
            {children}
        </a>
    );
}

export default Link;