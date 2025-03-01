import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform, Animated, Dimensions } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import Text from '../../components/atoms/Text/Text';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import { getStyles } from './RegisterScreen.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const RegisterScreen = ({ navigation, setLoginStatus }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
  
  // Animasyon değerleri
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const formOpacity = useRef(new Animated.Value(0)).current;
  const formSlide = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Sayfa yüklendiğinde animasyonları başlat
    Animated.sequence([
      // Önce başlık animasyonu
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      // Sonra form animasyonu
      Animated.parallel([
        Animated.timing(formOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(formSlide, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  const handleRegister = () => {
    // İlerde Firebase ile entegre edilecek
    console.log('Register attempt with:', name, email, password);
    
    // Kayıt başarılı - AppNavigator'a bildir
    if (setLoginStatus) {
      setLoginStatus(true);
    } else {
      console.warn("setLoginStatus function is not available");
    }
  };

  const handleGoogleRegister = () => {
    // İlerde Google Auth ile entegre edilecek
    console.log('Google register attempt');
    
    // Kayıt başarılı - AppNavigator'a bildir
    if (setLoginStatus) {
      setLoginStatus(true);
    } else {
      console.warn("setLoginStatus function is not available");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Gradient arka plan efekti */}
      <Animated.View
        style={[
          styles.backgroundCircle,
          {
            opacity: 0.8,
          },
        ]}
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Üst Bölüm - Başlık */}
        <Animated.View 
          style={[
            styles.headerContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }
          ]}
        >
          <Text variant="h1" style={styles.title}>Kayıt Ol</Text>
          <Text variant="body" style={styles.subtitle}>
            Hesap oluşturarak deneyimine başla
          </Text>
        </Animated.View>

        {/* Form Bölümü */}
        <Animated.View 
          style={[
            styles.formContainer,
            {
              opacity: formOpacity,
              transform: [{ translateY: formSlide }],
            }
          ]}
        >
          <View style={styles.formCard}>
            <Input
              label="Ad Soyad"
              placeholder="Adınızı ve soyadınızı girin"
              value={name}
              onChangeText={setName}
              leftIcon={<Icon name="person-outline" size={20} color={theme.colors.primary} />}
            />

            <Input
              label="E-posta"
              placeholder="E-posta adresinizi girin"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={<Icon name="mail-outline" size={20} color={theme.colors.primary} />}
            />

            <Input
              label="Şifre" 
              placeholder="Şifrenizi girin"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              leftIcon={<Icon name="lock-closed-outline" size={20} color={theme.colors.primary} />}
              rightIcon={
                <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                  <Icon 
                    name={secureTextEntry ? "eye-outline" : "eye-off-outline"} 
                    size={20} 
                    color={theme.colors.primary} 
                  />
                </TouchableOpacity>
              }
            />

            <Input
              label="Şifre Tekrar" 
              placeholder="Şifrenizi tekrar girin"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={secureConfirmTextEntry}
              leftIcon={<Icon name="lock-closed-outline" size={20} color={theme.colors.primary} />}
              rightIcon={
                <TouchableOpacity onPress={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)}>
                  <Icon 
                    name={secureConfirmTextEntry ? "eye-outline" : "eye-off-outline"} 
                    size={20} 
                    color={theme.colors.primary} 
                  />
                </TouchableOpacity>
              }
            />

            <Button 
              title="Kayıt Ol" 
              onPress={handleRegister} 
              style={styles.registerButton} 
            />
          </View>
        </Animated.View>

        {/* Sosyal Medya Kaydı */}
        <Animated.View 
          style={[
            styles.socialContainer,
            {
              opacity: formOpacity,
              transform: [{ translateY: formSlide }],
            }
          ]}
        >
          <Text variant="body" style={[styles.orText, {color: theme.colors.text}]}>veya</Text>
          
          <TouchableOpacity 
            style={styles.googleButton} 
            onPress={handleGoogleRegister}
          >
            <Image 
              source={require('../../assets/images/google_logo.png')} 
              style={styles.googleIcon} 
            />
            <Text variant="button" style={{color: '#FFFFFF', fontWeight: 'bold'}}>
              Google ile Kayıt Ol
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Alt Bölüm - Giriş Yapma Linki */}
        <Animated.View 
          style={[
            styles.bottomContainer,
            {
              opacity: formOpacity,
            }
          ]}
        >
          <Text variant="body" style={{color: '#333333', fontWeight: 'bold'}}>Zaten hesabınız var mı?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text variant="button" color={theme.colors.primary}> Giriş Yap</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen; 