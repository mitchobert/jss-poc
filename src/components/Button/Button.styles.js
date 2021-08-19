const button = (theme) => ({
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
});

const buttonLabel = (theme) => ({
  fontWeight: theme.fontWeight.medium,
});

const styles = (theme) => ({
  button: {
    ...button(theme),
  },
  buttonLabel: {
    ...buttonLabel(theme),
  },
});

export default styles;