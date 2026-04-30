## User Profile Case

Bu proje, Next.js App Router kullanılarak geliştirilmiş bir kullanıcı profil uygulamasıdır.
Amaç, gerçek bir backend’den veri alıyormuş gibi çalışan bir yapı kurmak ve temel kullanıcı etkileşimlerini simüle etmektir.

---

### Projeyi Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda aç:

```txt
http://localhost:3000
```

---

### Mimari Yaklaşım

Projede veri akışı şu şekilde kurgulandı:

```txt
UI → API Routes → lib/api → Mock Data
```

* **UI (page & components)** → Veriyi `fetch` ile alır ve render eder
* **API Routes (`app/api`)** → Backend endpoint gibi davranır
* **lib/api** → Veriyi hazırlayan fonksiyonları içerir
* **Mock data** → Basit bir veri kaynağı olarak kullanılır

Bu yapı sayesinde uygulama gerçek bir backend ile çalışıyormuş gibi davranır.

---

### Neden Bu Yapıyı Seçtim?

Component’lerden direkt mock data kullanmak yerine API üzerinden veri çekmeyi tercih ettim.

Bunun nedeni:

* Gerçek projelere daha yakın bir yapı kurmak
* Veri akışını daha net ayırmak
* İleride gerçek backend’e geçişi kolaylaştırmak

---

### API Endpointleri

* `GET /api/users/:id`
* `GET /api/users/:id/stats`
* `GET /api/users/:id/posts?page=1&limit=10`
* `POST /api/users/:id/follow`

---

### Öne Çıkan Özellikler

* **Optimistic UI** → Follow işlemi anında UI’da güncellenir
* **Pagination** → Postlar sayfalı şekilde yüklenir
* **State handling** → Loading, error ve empty durumları ele alınır
* **Image optimization** → `next/image` kullanıldı

---

### Trade-offs

Bu projede bazı bilinçli basitleştirmeler yapıldı:

* Gerçek database yerine mock data kullanıldı
* Authentication ve authorization eklenmedi
* Pagination server-side basit tutuldu (limit düşük tutuldu)

Buna karşılık:

* Kod yapısı gerçek backend’e uyumlu olacak şekilde kuruldu
* API katmanı korunarak yapı ölçeklenebilir bırakıldı

---

### Kullanılan Teknolojiler

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS


