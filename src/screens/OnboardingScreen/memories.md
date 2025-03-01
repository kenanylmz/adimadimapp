# OnboardingScreen Hafızası

## Genel Bilgiler

- Oluşturulma Tarihi: İlk versiyon
- Amaç: Kullanıcılara ilk kullanımda uygulama hakkında bilgi vermek

## Değişiklik Geçmişi

### İlk versiyon

- 🔄 Yapılan Değişiklik: Onboarding ekranı oluşturuldu
- 📝 Nedeni: Kullanıcıları uygulama özellikleriyle tanıştırmak
- 🎯 Sonuç: Animasyonlu, kaydırılabilir tanıtım slaytları

### Güncelleme 1

- 🔄 Yapılan Değişiklik: Navigasyon düzeltildi
- 📝 Nedeni: 'Auth' navigator'a erişim hatası
- 🎯 Sonuç: AsyncStorage kullanarak onboarding durumu kaydedildi ve Login ekranına doğrudan yönlendirme eklendi

### Güncelleme 2

- 🔄 Yapılan Değişiklik: Navigasyon yöntemi değiştirildi
- 📝 Nedeni: Login ekranına erişim hatasını gidermek
- 🎯 Sonuç: AsyncStorage ile onboarding durumu kaydedilerek Auth navigatörüne yönlendirme eklendi

### Güncelleme 3

- 🔄 Yapılan Değişiklik: Props ile callback fonksiyonu kullanıldı
- 📝 Nedeni: Nested navigator'lar arası navigasyon sorununu çözmek
- 🎯 Sonuç: AppNavigator ile doğrudan iletişim kurarak state değişikliği yapma

## Özellikler

- Kaydırılabilir slaytlar
- İlerleme göstergesi
- "Başla" butonu
- "Atla" seçeneği
- Animasyonlu görsel öğeler
- AsyncStorage ile onboarding durumunu kaydetme

## Bağlantılar

- Login ekranına yönlendirme

## Notlar

- Ekranlar arası geçişler için Animated API kullanıldı
- onboardingData'da her slide için başlık, açıklama ve görsel bilgileri tanımlandı
- İleride gerçek görseller eklenecek (şu an placeholder kullanılıyor)
