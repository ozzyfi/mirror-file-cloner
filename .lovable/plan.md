# ToolA Landing — Tasarım Denge & Mobil Uyum Revizyonu

`public/site.html` üzerinde sadece **CSS ve mobil davranış** rötuşları yapılacak. İçerik, kopya, font ve renk paleti **değişmeyecek**.

## Tespit edilen sorunlar

1. **Mobil navigasyon taşması** — `Ürün / Nasıl Çalışır / Güvenlik / EN / Pilot Başlat` linkleri 600px altında üst üste binip CTA'yı sıkıştırıyor.
2. **Tablet boşluk** — 601–960px aralığında container hâlâ `3rem` padding kullanıyor; içerik ekrana yapışık duruyor.
3. **`.how-grid` 5 sütunluk yapı** — 960–1100px'te kartlar dar ve okunmaz; tek breakpoint var (`960 → 2 sütun`).
4. **Bölüm dikey ritmi** — desktop'ta `4.5rem`, mobilde de aynı; mobilde fazla nefessiz değil ama tablet/mobilde aşağı yukarı dikey hava düzensiz; `.cta` `5rem`, `.ins` `4.5rem` gibi tutarsızlıklar var.
5. **Kart etkileşimi yok** — `prob-card / cap-card / sec-card / how-step / sol-card` hiç hover state'i yok, sayfa statik hissettiriyor.
6. **Section padding mobilde** — `padding:4.5rem 0` mobilde fazla; üst üste binen 6 büyük bölüm sayfayı uzatıyor.
7. **`.proof-metrics` orta hücre kenarlığı** — mobilde tek sütuna geçince ortadaki hücre alta yapışık duruyor (zaten yarı çözülmüş, tutarlılık için son rötuş).
8. **Hero badge mobilde** — uzun badge tek satırda zorlanıyor; küçük ekranda font/letter-spacing inceltilmeli.
9. **Footer `.fr` mobilde** — separator nokta + sosyal ikonlar + e-posta + adres tek satıra sıkışmaya çalışıyor; mobilde dikey hizalama daha temiz olur.

## Yapılacak değişiklikler (tamamı CSS / küçük HTML class)

### A. Container ve section ritmi
- Tablet (≤960px): `.w{padding:0 2rem}`, `.ni{padding:.85rem 2rem}`, `.fi{padding:0 2rem}`
- Mobil (≤600px): tüm `section`, `.ins`, `.sec-strip`, `.cta`, `.proof` için `padding:3rem 0`
- Tutarlılık: `.ins` ve `.sec-strip` desktop'ta `4.5rem 0` kalır, `.cta` `4.5rem 0`'a çekilir (5rem yerine)

### B. Mobil navigasyon
- ≤720px: nav içindeki `Ürün / Nasıl Çalışır / Güvenlik` linkleri gizlenir (CSS `display:none`); sadece **EN** ve **Pilot Başlat** görünür kalır
- Hamburger menü eklenmez (kapsam dışı, kopya talebi değil)

### C. `.how-grid` kademeli grid
- ≥1100px: 5 sütun (mevcut)
- 760–1099px: 3 sütun
- 560–759px: 2 sütun
- ≤559px: 1 sütun

### D. Kart hover state'leri (birleşik)
`.prob-card, .cap-card, .sec-card, .how-step, .sol-card`:
```
transition: transform .2s, border-color .2s, box-shadow .2s;
&:hover { transform: translateY(-2px); border-color: rgba(232,96,28,.25); box-shadow: 0 8px 24px rgba(15,26,46,.06); }
```

### E. Hero badge ufak rötuş
- ≤600px: `.hero-badge` `font-size:.66rem; padding:.35rem .75rem`

### F. Footer mobilde dikey hizalama
- ≤600px: `.fr` `flex-direction:column; gap:.5rem`; ortadaki `·` separator span'leri `display:none` (zaten dikey diziliyor)

### G. `.proof-metrics` rötuş
- Tek sütuna geçtiğinde `.pm` arası ayırıcı zaten alt çizgi; padding `2rem 1.5rem`'e düşürülür

### H. `.expert-grid` dengesi
- 960–1199px arası `gap:2rem`, daha derli toplu durur (mevcut sadece 3rem)

## Dokunulmayacaklar
- Tüm metin/i18n içeriği
- Renk değişkenleri, fontlar, gradyanlar
- Hero, mockup, memory card layout'u (sadece spacing/responsive)
- Modal, formspree, JS davranışı
- Footer'daki logo, sosyal ikonlar ve email/adres içeriği

## Sonuç
~40 satırlık odaklı CSS güncellemesi ile sayfa tüm breakpoint'lerde dengeli, kartlar canlı, mobil nav temiz ve dikey ritim tutarlı olacak.
