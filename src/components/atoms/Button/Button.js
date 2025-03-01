import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from './Button.styles';

const Button = ({
  title,
  onPress,
  variant = 'filled',
  size = 'medium',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {leftIcon && !loading && leftIcon}
      
      {loading ? (
        <ActivityIndicator 
          color={variant === 'filled' ? theme.colors.background : theme.colors.primary} 
          size={size === 'small' ? 'small' : 'small'} 
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
      
      {rightIcon && !loading && rightIcon}
    </TouchableOpacity>
  );
};

export default Button; 