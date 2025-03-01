import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const getStyles = (theme) => StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.medium,
  },
  
  // Variants
  filled: {
    backgroundColor: theme.colors.primary,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  text: {
    backgroundColor: 'transparent',
  },
  
  // Sizes
  small: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    minWidth: hp(10),
  },
  medium: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    minWidth: hp(15),
  },
  large: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    minWidth: hp(20),
  },
  
  // Text styles
  text: {
    textAlign: 'center',
    fontWeight: '600',
  },
  filledText: {
    color: '#FFFFFF',
  },
  outlinedText: {
    color: theme.colors.primary,
  },
  textText: {
    color: theme.colors.primary,
  },
  
  // Text sizes
  smallText: {
    fontSize: theme.typography.caption.fontSize,
  },
  mediumText: {
    fontSize: theme.typography.button.fontSize,
  },
  largeText: {
    fontSize: theme.typography.h3.fontSize,
  },
  
  // States
  disabled: {
    backgroundColor: theme.colors.border,
    borderColor: theme.colors.border,
    opacity: 0.5,
  },
  disabledText: {
    color: theme.colors.subtext,
  },
}); 