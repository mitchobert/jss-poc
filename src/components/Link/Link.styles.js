const styles = (theme) => ({
  link: {
    fontSize: '14px',
    color: theme.color.blue400,
    textDecoration: 'none',

    '&:hover': {
      color: theme.color.blue800,
      textDecoration: 'underline',
    },
  },
});

export default styles;