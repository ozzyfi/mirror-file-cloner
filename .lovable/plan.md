Sorunun kaynağı sadece eski `min-height:100vh` satırı değil: canlı ekranda hero alanı navbar altında hâlâ çok aşağıda başlıyor çünkü mevcut değerler (`padding-top:112px`) görsel olarak hâlâ fazla ve yayınlanan sayfada hero içeriği ilk viewport içinde aşağıda kalıyor.

Plan:

1. `src/index.css` içinde ana sayfa hero kuralını doğrudan daha yukarı taşıyacağım:
   - `min-height:auto`
   - `display:flex`
   - `align-items:flex-start`
   - `padding-top:72px`
   - `padding-bottom:72px`

2. `src/index.css` mobil hero kuralını da doğrudan sıkılaştıracağım:
   - `padding-top:72px`
   - `padding-bottom:52px`

3. `public/site.html` içindeki hero CSS için aynı değişiklikleri uygulayacağım.

4. `public/managers.html` dosyasına dokunmayacağım.

5. `FINAL HERO` gibi ayrı override eklemeyeceğim; mevcut `.hero` kuralını doğrudan değiştireceğim.

6. Uygulama sonrası kontrol edeceğim:
   - `src/index.css` ve `public/site.html` içinde `min-height:100vh`, `padding-top:4rem`, `padding-top:5rem`, `FINAL HERO` kalmadığını arayacağım.
   - Canlı/preview hero görselinde başlık ve mockup kartın navbar’a daha yakın başladığını doğrulayacağım.

Not: Lovable ortamında manuel git commit komutu çalıştırmıyorum; dosya değişiklikleri GitHub entegrasyonu açıksa senkronize olur. Canlı `toola.co` için değişiklikten sonra Publish/Update yapılması gerekir.