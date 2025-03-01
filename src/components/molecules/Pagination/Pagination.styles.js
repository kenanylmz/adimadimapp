import { StyleSheet } from 'react-native';

export const getStyles = (theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.md,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    marginHorizontal: 6,
  },
}); 