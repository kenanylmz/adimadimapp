# AppNavigator Hafızası

## Genel Bilgiler

- Oluşturulma Tarihi: İlk versiyon
- Amaç: Uygulama genelinde navigasyon akışını yönetmek

## Değişiklik Geçmişi

### İlk versiyon

- 🔄 Yapılan Değişiklik: AppNavigator oluşturuldu
- 📝 Nedeni: Onboarding, Auth ve Main navigasyonlarını yönetmek
- 🎯 Sonuç: Temel navigasyon yapısı

### Güncelleme 1

- 🔄 Yapılan Değişiklik: Onboarding sonrası Auth ekranlarına yönlendirme
- 📝 Nedeni: Kullanıcının onboarding sonrası giriş yapması gerekiyor
- 🎯 Sonuç: Daha doğru bir kullanıcı akışı

### Güncelleme 2

- 🔄 Yapılan Değişiklik: NavigationContainer kaldırıldı
- 📝 Nedeni: Çift NavigationContainer hatasını gidermek
- 🎯 Sonuç: Navigasyon hatası çözüldü, App.js içinde tek NavigationContainer kullanılıyor

## Notlar

- NavigationContainer sadece App.js içinde olmalı
- AppNavigator içinde StackNavigator kullanılıyor
- İlk açılışta Onboarding, daha sonra kullanıcı durumuna göre Auth veya Main gösteriliyor
