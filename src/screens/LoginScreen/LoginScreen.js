import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform, Animated, Dimensions } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import Text from '../../components/atoms/Text/Text';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import { getStyles } from './LoginScreen.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  
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

  const handleLogin = () => {
    // İlerde Firebase ile entegre edilecek
    console.log('Login attempt with:', email, password);
    navigation.navigate('Main'); // Giriş başarılı varsayıyoruz şimdilik
  };

  const handleGoogleLogin = () => {
    // İlerde Google Auth ile entegre edilecek
    console.log('Google login attempt');
    navigation.navigate('Main');
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
        {/* Üst Bölüm - Başlık ve Karşılama Mesajı */}
        <Animated.View 
          style={[
            styles.headerContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }
          ]}
        >
          <Text variant="h1" style={styles.title}>Hoş Geldiniz</Text>
          <Text variant="body" style={styles.subtitle}>
            Hesabınıza giriş yaparak devam edin
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

            <TouchableOpacity style={styles.forgotPassword}>
              <Text variant="caption" color={theme.colors.primary}>
                Şifremi Unuttum
              </Text>
            </TouchableOpacity>

            <Button 
              title="Giriş Yap" 
              onPress={handleLogin} 
              style={styles.loginButton} 
            />
          </View>
        </Animated.View>

        {/* Sosyal Medya Girişi */}
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
            onPress={handleGoogleLogin}
          >
            <Image 
              source={require('../../assets/images/google_logo.png')} 
              style={styles.googleIcon} 
            />
            <Text variant="button" style={{color: '#FFFFFF', fontWeight: 'bold'}}>
              Google ile Giriş Yap
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Alt Bölüm - Kayıt Olma Linki */}
        <Animated.View 
          style={[
            styles.bottomContainer,
            {
              opacity: formOpacity,
            }
          ]}
        >
          <Text variant="body" style={{color: '#333333', fontWeight: 'bold'}}>Henüz hesabınız yok mu?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text variant="button" color={theme.colors.primary}> Kayıt Ol</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen; 