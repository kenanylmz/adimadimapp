import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import Text from '../../atoms/Text/Text';
import { getStyles } from './OnboardingSlide.styles';

const OnboardingSlide = ({ item }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text variant="h2" align="center" style={styles.title}>
          {item.title}
        </Text>
        <Text variant="body" align="center" style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingSlide; 