import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export const getStyles = (theme) => StyleSheet.create({
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  image: {
    width: width * 0.8,
    height: hp(30),
    marginBottom: theme.spacing.xl,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing.md,
  },
  description: {
    color: theme.colors.subtext,
    maxWidth: '80%',
  },
}); 