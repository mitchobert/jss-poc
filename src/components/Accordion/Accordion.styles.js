import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => (
    {
        accordionContainer: {
            display: 'block',
            color: theme.color.black,
            fontWeight: theme.fontWeight.medium,
            fontSize: '14px',
            boxShadow: '0px 3px 4px rgb(0, 0, 0, 0.2)',
            background: theme.color.white,

            '& > .accordionPanel': {
                display: 'flex',
                alignItem: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
                cursor: 'pointer',
            },

            '& > .accordionContent': {
                padding: '0 24px 16px 24px',

                '&.expanded': {
                    marginBottom: '24px',
                },
            },

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