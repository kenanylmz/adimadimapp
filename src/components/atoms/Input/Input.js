import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import Text from '../Text/Text';
import { getStyles } from './Input.styles';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  leftIcon,
  rightIcon,
  error,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text variant="caption" style={styles.label}>
          {label}
        </Text>
      )}
      
      <View style={[
        styles.inputContainer,
        error && styles.inputError
      ]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.placeholder || "#A8A8A8"}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={[
            styles.input,
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && styles.inputWithRightIcon
          ]}
          {...props}
        />
        
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      
      {error && (
        <Text variant="caption" style={styles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input; 