import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import Text from '../../components/atoms/Text/Text';
import {getStyles} from './OnboardingScreen.styles';
import {onboardingData} from './onboardingData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

const OnboardingScreen = ({navigation, onOnboardingComplete}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  // Görsel placeholder oluşturucu
  const renderPlaceholderImage = index => {
    const colors = ['#5E72E4', '#FF5678', '#3EC1D3'];
    const icons = [
      {
        title: 'CHALLENGE',
        subtitle: 'HER GÜN YENİ BİR ADIM',
        description:
          'Günlük, haftalık veya aylık hedefler belirleyin ve ilerlemelerinizi takip edin',
      },
      {
        title: 'KATILIM',
        subtitle: 'BİRLİKTE BAŞARIN',
        description:
          'Arkadaşlarınızla birlikte çalışın, yorumlar yapın ve birbirinizi motive edin',
      },
      {
        title: 'KEŞFET',
        subtitle: 'İLHAM ALIN',
        description:
          'Popüler challengeları keşfedin ve kendi tarzınıza uygun etkinlikler bulun',
      },
    ];

    const icon = icons[index % icons.length];

    return (
      <View
        style={[
          localStyles.placeholderImage,
          {backgroundColor: colors[index % colors.length]},
        ]}>
        <View style={localStyles.placeholderContent}>
          <Text
            variant="h2"
            color="#FFFFFF"
            align="center"
            style={localStyles.placeholderTitle}>
            {icon.title}
          </Text>
          <Text
            variant="body"
            color="#FFFFFF"
            align="center"
            style={localStyles.placeholderSubtitle}>
            {icon.subtitle}
          </Text>
          <View style={localStyles.divider} />
          <Text
            variant="caption"
            color="#FFFFFF"
            align="center"
            style={localStyles.placeholderDescription}>
            {icon.description}
          </Text>
        </View>
      </View>
    );
  };

  // İyileştirilmiş slide komponenti
  const renderItem = ({item, index}) => (
    <View style={localStyles.slide}>
      <View style={localStyles.imageContainer}>
        {/* Gerçek görsel yoksa placeholder göster */}
        {renderPlaceholderImage(index)}
      </View>
      <View style={localStyles.textContainer}>
        <Text variant="h2" align="center" style={localStyles.title}>
          {item.title}
        </Text>
        <Text variant="body" align="center" style={localStyles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  const handleGetStarted = async () => {
    // Onboarding'i tamamladığını AppNavigator'a bildir
    if (onOnboardingComplete) {
      await onOnboardingComplete();
    }
  };

  const handleSkip = async () => {
    // Onboarding'i atladığını AppNavigator'a bildir
    if (onOnboardingComplete) {
      await onOnboardingComplete();
    }
  };

  return (
    <View style={[styles.container, localStyles.container]}>
      {/* Gradient arka plan efekti */}
      <Animated.View
        style={[
          localStyles.backgroundCircle,
          {
            backgroundColor: theme.colors.primary,
            opacity: 0.8,
            transform: [
              {
                translateX: scrollX.interpolate({
                  inputRange: [-width, 0, width * onboardingData.length],
                  outputRange: [-width * 0.6, 0, width * 0.6],
                }),
              },
            ],
          },
        ]}
      />

      <View style={localStyles.skipContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text variant="button" color={theme.colors.primary}>
            Atla
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <View style={localStyles.paginationContainer}>
        {onboardingData.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={[
                localStyles.dot,
                {
                  width: dotWidth,
                  opacity,
                  backgroundColor: theme.colors.primary,
                },
              ]}
            />
          );
        })}
      </View>

      <View style={localStyles.buttonContainer}>
        <TouchableOpacity
          style={[localStyles.button, {backgroundColor: theme.colors.primary}]}
          onPress={handleGetStarted}>
          <Text variant="button" color="#FFFFFF">
            {currentIndex === onboardingData.length - 1 ? 'Başla' : 'İleri'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Yerel stiller
const localStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
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
    zIndex: -1,
  },
  skipContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  imageContainer: {
    width: width * 0.8,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  placeholderContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 2,
  },
  placeholderSubtitle: {
    fontWeight: '600',
    marginBottom: 16,
  },
  divider: {
    width: 40,
    height: 3,
    backgroundColor: '#FFFFFF',
    marginVertical: 16,
    borderRadius: 2,
  },
  placeholderDescription: {
    textAlign: 'center',
    lineHeight: 22,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    maxWidth: '80%',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

export default OnboardingScreen;
