import { StyleSheet } from 'react-native';

export const getStyles = (theme) => StyleSheet.create({
  text: {
    color: theme.colors.text,
  },
  
  // Variants based on typography
  h1: {
    ...theme.typography.h1,
  },
  h2: {
    ...theme.typography.h2,
  },
  h3: {
    ...theme.typography.h3,
  },
  body: {
    ...theme.typography.body,
  },
  button: {
    ...theme.typography.button,
  },
  caption: {
    ...theme.typography.caption,
    color: theme.colors.subtext,
  },
  
  // Alignments
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
}); 