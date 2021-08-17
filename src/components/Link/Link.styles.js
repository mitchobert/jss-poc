const styles = (theme) => ({
    link: {
        fontSize: '14px',
        color: theme.color.blue100,
        textDecoration: 'none',

        '&:hover': {
            color: '#1e90ff',
            textDecoration: 'underline',
        },
    },
});

export default styles;