# Navigation Hafızası

## Genel Bilgiler
- Oluşturulma Tarihi: İlk versiyon
- Amaç: Uygulama navigasyon yapısını yönetmek

## Değişiklik Geçmişi
### İlk versiyon
- 🔄 Yapılan Değişiklik: AppNavigator oluşturuldu
- 📝 Nedeni: Onboarding, auth ve ana ekranlar arasında geçiş sağlamak
- 🎯 Sonuç: 
  - İlk kurulumda onboarding ekranını gösterme
  - Giriş durumuna göre Auth veya Main navigatörlerine yönlendirme

## Notlar
- AsyncStorage kullanılarak uygulamanın ilk kez çalıştırılıp çalıştırılmadığı kontrol ediliyor
- Auth ve Main navigatörleri için placeholder komponentler eklendi, ileride doldurulacak 