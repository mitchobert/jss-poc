import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => (
    {
        accordionContainer: {
            display: 'block',
            color: theme.color.black,
            fontWeight: theme.fontWeight.medium,
            fontSize: '12px',
            border: '1px solid #000',

            '& > .accordionPanel': {
                padding: '16px',
                cursor: 'pointer',
            },

            '& > .accordionContent': {
                fontSize: '16px',
            }
        },
    })
);

function AccordionStyles({ children } = this.props) {
    const classes = useStyles();
    return (
        <div className={classes.accordionContainer}>{children}</div>
    );
}

export default AccordionStyles;