import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
  },
  skipContainer: {
    position: 'absolute',
    top: hp(5),
    right: theme.spacing.md,
    zIndex: 10,
  },
  bottomContainer: {
    marginVertical: theme.spacing.xl,
    alignItems: 'center',
  },
}); 