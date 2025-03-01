import { StyleSheet } from 'react-native';

export const getStyles = (theme) => StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
    width: '100%',
  },
  label: {
    marginBottom: theme.spacing.xs,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.medium,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: theme.spacing.md,
    color: theme.colors.text,
    fontSize: theme.typography.body.fontSize,
  },
  inputWithLeftIcon: {
    paddingLeft: theme.spacing.xs,
  },
  inputWithRightIcon: {
    paddingRight: theme.spacing.xs,
  },
  leftIcon: {
    paddingLeft: theme.spacing.sm,
  },
  rightIcon: {
    paddingRight: theme.spacing.sm,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
    marginTop: theme.spacing.xs,
  },
}); 