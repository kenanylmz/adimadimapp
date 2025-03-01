import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

export const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundCircle: {
    position: 'absolute',
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: width,
    top: -width * 0.75,
    left: -width * 0.25,
    backgroundColor: theme.colors.primary,
    zIndex: -1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: height * 0.08,
    paddingBottom: theme.spacing.xl,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: hp(5),
  },
  title: {
    marginBottom: theme.spacing.sm,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
  },
  formContainer: {
    width: '100%',
    marginBottom: hp(3),
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: theme.radius.large,
    padding: theme.spacing.lg,
    ...theme.shadows.large,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: theme.spacing.sm,
  },
  loginButton: {
    marginTop: theme.spacing.lg,
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: hp(3),
  },
  orText: {
    marginVertical: theme.spacing.md,
    color: theme.colors.text,
    fontWeight: '500',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.accent || '#FF7043',
    padding: theme.spacing.md,
    borderRadius: theme.radius.medium,
    width: '100%',
    marginVertical: theme.spacing.sm,
    ...theme.shadows.medium,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: theme.spacing.sm,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 2,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingTop: theme.spacing.lg,
  },
}); 