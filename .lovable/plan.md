## Hedef

Mevcut landing page (site.html) aynen kalsın. Üst menüdeki "Ürün" ve "Nasıl Çalışır" linkleri kaldırılsın; yerlerine iki yeni link gelsin:

- **Teknisyenler için** → mevcut ana sayfayı (site.html) açar (ana sayfa butonu işlevi)
- **Yöneticiler için** → yeni bir sayfa açar, scroll ile değil ayrı sayfa olarak

Yeni sayfa, mevcut sitenin tüm tasarım dilini (renkler, tipografi, nav, footer, modal, dil değiştirici) birebir korur ve verilen içeriği TR + EN olarak sunar.

## Yapılacaklar

### 1. Yeni sayfa: `public/managers.html`

- `site.html`'in baştan sona aynı iskeleti: `<head>` meta/SEO, `<nav>`, `<footer>`, pilot modalı, dil değiştirici JS, i18n sözlüğü.
- Sayfa başlığı/meta: "Yöneticiler için — ToolA".
- Hero alanı altında verilen içerik bölümlere ayrılmış olarak yerleştirilir:
  1. **Hero** — "Saha veriniz AI-ready operasyon hafızasına dönüşsün." + açıklama + "Yönetici Panelini Gör" (scroll to #panel) ve "6 Haftalık Pilot Başlat" (modal) CTA'ları.
  2. **Yönetici Paneli mock kartı** (`#panel`) — Veri Kalitesi Skoru 87%, Eksik kök nedenler 49, Kanıtsız kapanan işler 18, Ekipmana bağlanmamış fotoğraflar 12, Belirsiz lokasyonlar 7, Tekrar eden arızalar listesi (P-204, Klima Oda 304, Jeneratör G-12). Mevcut sitenin kart / panel stili (border, radius, gölge tonları) kullanılır.
  3. **Problem bloğu** — "İş kapanıyor, ama kurum yeterince öğrenmiyor." başlık + paragraf + 4 alt kart (Eksik kapanışlar, Kanıtsız işler, Tekrar eden problemler geç fark edilir, AI kirli veriyi okuyamaz).
  4. **Çözüm bloğu** — "Saha verisini yönetilebilir hafızaya çevirin." + paragraf + 6 örnek sorgu kartı (tırnaklı sorular).
  5. **AI seçim bloğu** — "Hangi AI'ın kullanılacağını siz belirlersiniz." + paragraf + chip listesi (ChatGPT/Connector, Claude/MCP, Microsoft Copilot/M365, Gemini/API, Azure OpenAI, Local LLM/On-prem, Tam izole kurulum).
  6. **Veri kontrolü bloğu** — "Veri kontrolünüz elinizde kalır." + 4 kart (Rol bazlı erişim, AI erişim kontrolü, Kaynaklı cevaplar, On-prem / yerel kurulum).
  7. **Kapanış CTA** — "Sahanızı görünür ve sorgulanabilir hale getirin." + paragraf + "6 Haftalık Pilot Başlat" butonu (modal).
- Tüm metinler `data-i18n` anahtarları ile TR + EN sözlüğüne bağlanır; mevcut dil seçici (TR/EN) çalışır.
- Hiçbir yeni renk, font veya bileşen eklenmez — sadece site.html'deki mevcut tokenlar (`--ink`, `--line`, `--bg`, kart radius'ları, vb.) ve mevcut sınıflar kullanılır.

### 2. Nav güncelleme (her iki dosyada)

`index.html` ve `public/site.html` içindeki `<nav>` blokunda:

- `#product` ("Ürün") linkini sil
- `#how` ("Nasıl Çalışır") linkini sil
- Yerlerine ekle:
  - `<a href="/site.html">Teknisyenler için</a>` (en: "For Technicians")
  - `<a href="/managers.html">Yöneticiler için</a>` (en: "For Managers")
- "Güvenlik" linki ve "Pilot Başlat" CTA'sı aynen kalır.
- i18n sözlüğüne `nav-tech` ve `nav-mgr` anahtarları eklenir; `nav-product` ve `nav-how` kaldırılır.
- Mobile kuralı (`nav ul li:nth-child(-n+3){display:none}`) gözden geçirilir — yeni link sayısına göre mobilde de Teknisyenler/Yöneticiler görünür kalacak şekilde ayarlanır; Güvenlik mobilde gizlenebilir.

### 3. `managers.html` nav'ı

Aynı nav yapısı; aktif link "Yöneticiler için" hafif vurgulu (opacity 1) olur. Sayfa açılışında tepeden başlar — scroll davranışı yok, ayrı route.

## Etkilenmeyen alanlar

- Footer (iki satırlı yeni hali) aynen korunur ve managers.html'e de aynısı kopyalanır.
- Pilot modal davranışı ve `submit-pilot-request` edge function entegrasyonu değişmez.
- React tarafı (`src/`) değişmez; `Index.tsx` zaten `/site.html`'e yönlendiriyor.

## Doğrulama

- `/` açıldığında ana sayfa aynı görünür, navda yeni iki link var.
- "Yöneticiler için" → `/managers.html` tepeden açılır, scroll yok.
- "Teknisyenler için" → `/site.html` açılır (ana sayfa).
- TR/EN değiştirici her iki sayfada da çalışır.
- Mobilde nav okunabilir kalır.
