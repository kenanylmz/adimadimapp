# OnboardingScreen Hafızası

## Genel Bilgiler
- Oluşturulma Tarihi: İlk versiyon
- Amaç: Kullanıcıyı uygulamanın özellikleriyle tanıştırmak

## Değişiklik Geçmişi
### İlk versiyon
- 🔄 Yapılan Değişiklik: OnboardingScreen oluşturuldu
- 📝 Nedeni: İlk kez uygulamayı kullananlara uygulama özelliklerini tanıtmak
- 🎯 Sonuç: Kaydırılabilir 3 ekrandan oluşan, animasyonlu bir onboarding deneyimi

## Özellikler
- FlatList ile kaydırılabilir ekranlar
- Pagination dots ile aktif sayfayı gösterme
- "Atla" ve "İleri/Başla" butonları
- Son sayfada "Başla" butonuyla Auth ekranına yönlendirme

## Notlar
- Ekranlar arası geçişler için Animated API kullanıldı
- onboardingData'da her slide için başlık, açıklama ve görsel bilgileri tanımlandı
- İleride gerçek görseller eklenecek (şu an placeholder kullanılıyor) 