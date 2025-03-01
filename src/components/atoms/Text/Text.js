import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from './Text.styles';

const Text = ({
  children,
  variant = 'body',
  color,
  align = 'left',
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const baseStyles = StyleSheet.create({
    text: {
      fontFamily: 'System', // Yazı tipini değiştirebilirsiniz
      letterSpacing: 0.5,
    }
  });

  const textStyles = [
    baseStyles.text,
    styles.text,
    styles[variant],
    align && styles[align],
    color && { color },
    style,
  ];

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};

export default Text; 