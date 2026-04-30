import type { Post, User, UserStats } from "@/lib/types";

export const users: User[] = [
  {
    id: "1",
    username: "ayse.design",
    displayName: "Ayşe Demir",
    bio: "Minimal arayüzler, ürün deneyimi ve sade tasarım sistemleri üzerine çalışıyor.",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    isVerified: true,
    isFollowing: false,
    createdAt: "2023-01-01",
  },
  {
    id: "2",
    username: "mert.frontend",
    displayName: "Mert Kaya",
    bio: "Next.js, TypeScript ve performans odaklı frontend geliştirme notları paylaşıyor.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    isVerified: false,
    isFollowing: true,
    createdAt: "2022-08-14",
  },
  {
    id: "3",
    username: "empty.user",
    displayName: "Boş Profil",
    bio: "Bu profil empty state senaryosunu test etmek için kullanılır.",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
    isVerified: false,
    isFollowing: false,
    createdAt: "2024-01-01",
  },
  {
    id: "4",
    username: "zeynep.product",
    displayName: "Zeynep Arslan",
    bio: "Ürün stratejisi, kullanıcı araştırması ve mikro etkileşimler üzerine içerikler üretir.",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    isVerified: true,
    isFollowing: false,
    createdAt: "2021-11-21",
  },
  {
    id: "5",
    username: "deniz.ui",
    displayName: "Deniz Şahin",
    bio: "Arayüz detayları, erişilebilirlik ve tasarım kalitesi üzerine kısa notlar paylaşır.",
    avatarUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop",
    isVerified: false,
    isFollowing: false,
    createdAt: "2023-06-10",
  },
];

export const stats: Record<string, UserStats> = {
  "1": { followerCount: 1248, followingCount: 203, postCount: 16 },
  "2": { followerCount: 4380, followingCount: 512, postCount: 14 },
  "3": { followerCount: 10, followingCount: 5, postCount: 0 },
  "4": { followerCount: 9820, followingCount: 340, postCount: 12 },
  "5": { followerCount: 760, followingCount: 188, postCount: 11 },
};

export const posts: Record<string, Post[]> = {
  "1": [
    {
      id: "p1",
      userId: "1",
      content:
        "Profil sayfası küçük bir alan gibi görünür ama kullanıcının ilk izlenimini taşıyan en kritik yüzeylerden biridir.",
      imageUrl:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
      likeCount: 184,
      commentCount: 18,
      createdAt: "2024-01-01",
    },
    {
      id: "p2",
      userId: "1",
      content:
        "UI sadeliği sadece az eleman kullanmak değildir; doğru elemanı doğru yerde bırakabilmektir.",
      likeCount: 267,
      commentCount: 24,
      createdAt: "2024-01-04",
    },
    {
      id: "p3",
      userId: "1",
      content:
        "Empty state, loading state ve error state yoksa arayüz tamamlanmış sayılmaz.",
      likeCount: 391,
      commentCount: 42,
      createdAt: "2024-01-08",
    },
    {
      id: "p4",
      userId: "1",
      content:
        "Bir takip butonu basit görünür ama doğru state yönetimi, optimistic update ve rollback ister.",
      likeCount: 512,
      commentCount: 37,
      createdAt: "2024-01-12",
    },
    {
      id: "p5",
      userId: "1",
      content:
        "İyi component mimarisi, ileride değişiklik yaparken kendine bıraktığın temiz bir not gibidir.",
      likeCount: 220,
      commentCount: 15,
      createdAt: "2024-01-18",
    },
    {
      id: "p6",
      userId: "1",
      content: "Küçük dokunuşlar kullanıcı deneyimini tamamen değiştirebilir.",
      likeCount: 310,
      commentCount: 21,
      createdAt: "2024-01-20",
    },
    {
      id: "p7",
      userId: "1",
      content: "İyi tasarım görünmezdir, kötü tasarım bağırır.",
      imageUrl:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop",
      likeCount: 480,
      commentCount: 39,
      createdAt: "2024-01-22",
    },
    {
      id: "p8",
      userId: "1",
      content: "Performans, kullanıcı fark etmese bile hissedilir.",
      likeCount: 270,
      commentCount: 18,
      createdAt: "2024-01-25",
    },
    {
      id: "p9",
      userId: "1",
      content: "Her buton bir karar noktasıdır.",
      likeCount: 390,
      commentCount: 27,
      createdAt: "2024-01-28",
    },
    {
      id: "p10",
      userId: "1",
      content: "Minimal tasarım, az değil doğru seçimdir.",
      likeCount: 510,
      commentCount: 44,
      createdAt: "2024-02-01",
    },
    {
      id: "p11",
      userId: "1",
      content: "Kullanıcıyı yormayan arayüz kazanır.",
      likeCount: 290,
      commentCount: 19,
      createdAt: "2024-02-04",
    },
    {
      id: "p12",
      userId: "1",
      content: "Her detay bir deneyim parçasıdır.",
      imageUrl:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=1200&h=800&fit=crop",
      likeCount: 330,
      commentCount: 22,
      createdAt: "2024-02-07",
    },
    {
      id: "p13",
      userId: "1",
      content: "Hızlı hissettiren uygulama başarılıdır.",
      likeCount: 420,
      commentCount: 31,
      createdAt: "2024-02-10",
    },
    {
      id: "p14",
      userId: "1",
      content: "UI sadece görünüm değil, davranıştır.",
      likeCount: 370,
      commentCount: 28,
      createdAt: "2024-02-13",
    },
    {
      id: "p15",
      userId: "1",
      content: "Kullanıcı her zaman en kısa yolu seçer.",
      likeCount: 460,
      commentCount: 36,
      createdAt: "2024-02-16",
    },
    {
      id: "p16",
      userId: "1",
      content:
        "Tasarım sistemleri büyüdükçe küçük kararların değeri daha net anlaşılır.",
      likeCount: 395,
      commentCount: 30,
      createdAt: "2024-02-19",
    },
  ],

  "2": [
    {
      id: "m1",
      userId: "2",
      content:
        "Server Component veri almak için, Client Component etkileşim için. İkisini karıştırınca debug canavarı doğar.",
      likeCount: 640,
      commentCount: 55,
      createdAt: "2024-02-01",
    },
    {
      id: "m2",
      userId: "2",
      content:
        "TypeScript seni yavaşlatmaz. Kötü modelleme yavaşlatır. Acı ama faydalı gerçek.",
      likeCount: 720,
      commentCount: 81,
      createdAt: "2024-02-06",
    },
    {
      id: "m3",
      userId: "2",
      content:
        "Mock data yazarken bile gerçek backend modelini düşünmek, sonradan yapılacak entegrasyonu kolaylaştırır.",
      likeCount: 348,
      commentCount: 29,
      createdAt: "2024-02-10",
    },
    {
      id: "m4",
      userId: "2",
      content:
        "Kullanıcıya hızlı hissettiren şey çoğu zaman hız değil, doğru anda verilen görsel geri bildirimdir.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
      likeCount: 418,
      commentCount: 33,
      createdAt: "2024-02-14",
    },
    {
      id: "m5",
      userId: "2",
      content:
        "Endpoint simüle ediyorsan sadece veri döndürme; hata, gecikme ve boş durumları da düşün.",
      likeCount: 540,
      commentCount: 47,
      createdAt: "2024-02-18",
    },
    {
      id: "m6",
      userId: "2",
      content:
        "Bir API response’unu direkt component’e bağlamak kısa vadede hızlı, uzun vadede pahalıdır.",
      likeCount: 610,
      commentCount: 52,
      createdAt: "2024-02-22",
    },
    {
      id: "m7",
      userId: "2",
      content:
        "Service layer, route dosyalarının şişmesini engeller. Küçük projede bile düzen kazandırır.",
      likeCount: 430,
      commentCount: 36,
      createdAt: "2024-02-26",
    },
    {
      id: "m8",
      userId: "2",
      content:
        "Pagination yaparken page ve limit değerlerini her zaman güvenli hale getir. URL kullanıcıya açıktır.",
      likeCount: 385,
      commentCount: 22,
      createdAt: "2024-03-01",
    },
    {
      id: "m9",
      userId: "2",
      content:
        "Frontend’de en iyi performans bazen daha az render, bazen de daha doğru veri modelidir.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      likeCount: 702,
      commentCount: 63,
      createdAt: "2024-03-05",
    },
    {
      id: "m10",
      userId: "2",
      content:
        "Hata yönetimini sona bırakma. En çok puan kaybettiren yer genelde happy path dışıdır.",
      likeCount: 590,
      commentCount: 49,
      createdAt: "2024-03-09",
    },
    {
      id: "m11",
      userId: "2",
      content:
        "Component’leri küçük tutmak sadece düzen değil, değişiklik maliyetini azaltma stratejisidir.",
      likeCount: 455,
      commentCount: 31,
      createdAt: "2024-03-13",
    },
    {
      id: "m12",
      userId: "2",
      content:
        "next/image kullandığında sadece görsel göstermiyorsun; performans kararını framework’e bırakıyorsun.",
      likeCount: 380,
      commentCount: 28,
      createdAt: "2024-03-17",
    },
    {
      id: "m13",
      userId: "2",
      content:
        "Fetch katmanını sade tut, response mapping’i belirgin yap. Gelecekte kendine teşekkür edersin.",
      likeCount: 415,
      commentCount: 34,
      createdAt: "2024-03-21",
    },
    {
      id: "m14",
      userId: "2",
      content: "Kötü isimlendirme, iyi kodu bile sisli havaya sokar.",
      likeCount: 501,
      commentCount: 46,
      createdAt: "2024-03-25",
    },
  ],

  "3": [],

  "4": [
    {
      id: "z1",
      userId: "4",
      content:
        "İyi ürün kararları çoğu zaman büyük fikirlerden değil, küçük kullanıcı sürtünmelerini fark etmekten çıkar.",
      likeCount: 980,
      commentCount: 64,
      createdAt: "2024-03-03",
    },
    {
      id: "z2",
      userId: "4",
      content:
        "Bir arayüzün güven vermesi için her tıklamadan sonra kullanıcıya net bir cevap vermesi gerekir.",
      likeCount: 740,
      commentCount: 51,
      createdAt: "2024-03-09",
    },
    {
      id: "z3",
      userId: "4",
      content:
        "Ürün tasarımında estetik önemlidir ama tutarlılık yoksa estetik sadece dekor olur.",
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop",
      likeCount: 860,
      commentCount: 73,
      createdAt: "2024-03-15",
    },
    {
      id: "z4",
      userId: "4",
      content:
        "Kullanıcı araştırması, tahminleri gerçeğe çarptıran en sağlıklı yöntemdir.",
      likeCount: 690,
      commentCount: 45,
      createdAt: "2024-03-19",
    },
    {
      id: "z5",
      userId: "4",
      content:
        "Mikro etkileşimler küçük görünür ama ürünün karakterini onlar belirler.",
      likeCount: 810,
      commentCount: 59,
      createdAt: "2024-03-23",
    },
    {
      id: "z6",
      userId: "4",
      content:
        "Bir feature kullanıcının hayatını kolaylaştırmıyorsa, sadece ekranda yer kaplıyordur.",
      likeCount: 935,
      commentCount: 71,
      createdAt: "2024-03-27",
    },
    {
      id: "z7",
      userId: "4",
      content: "İyi ürün ekipleri fikirleri değil, problemleri sahiplenir.",
      likeCount: 870,
      commentCount: 66,
      createdAt: "2024-04-01",
    },
    {
      id: "z8",
      userId: "4",
      content:
        "Kullanıcı bir şeyi anlamak için düşünüyorsa, arayüz henüz işini bitirmemiştir.",
      likeCount: 760,
      commentCount: 50,
      createdAt: "2024-04-05",
    },
    {
      id: "z9",
      userId: "4",
      content: "Ürün stratejisi çoğu zaman neyi yapmayacağını bilmekle başlar.",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
      likeCount: 1010,
      commentCount: 88,
      createdAt: "2024-04-09",
    },
    {
      id: "z10",
      userId: "4",
      content:
        "İyi bir onboarding, kullanıcının özgüvenini artırır; sadece özellik anlatmaz.",
      likeCount: 790,
      commentCount: 62,
      createdAt: "2024-04-13",
    },
    {
      id: "z11",
      userId: "4",
      content:
        "Her metrik karar vermek için değildir. Bazıları sadece gürültüdür.",
      likeCount: 675,
      commentCount: 44,
      createdAt: "2024-04-17",
    },
    {
      id: "z12",
      userId: "4",
      content:
        "Kullanıcı deneyimi, ürünün verdiği söz ile yaşattığı gerçek arasındaki farktır.",
      likeCount: 920,
      commentCount: 77,
      createdAt: "2024-04-21",
    },
  ],

  "5": [
    {
      id: "d1",
      userId: "5",
      content: "Erişilebilirlik ekstra özellik değil, temel ürün kalitesidir.",
      likeCount: 155,
      commentCount: 12,
      createdAt: "2024-04-01",
    },
    {
      id: "d2",
      userId: "5",
      content: "Kontrast zayıfsa tasarım şık değil, sadece zor okunuyordur.",
      likeCount: 210,
      commentCount: 19,
      createdAt: "2024-04-04",
    },
    {
      id: "d3",
      userId: "5",
      content: "Form validasyonu kullanıcıyı azarlamamalı, yönlendirmeli.",
      likeCount: 188,
      commentCount: 14,
      createdAt: "2024-04-07",
    },
    {
      id: "d4",
      userId: "5",
      content: "Klavye ile gezilemiyorsa o arayüz herkese açık değildir.",
      likeCount: 245,
      commentCount: 26,
      createdAt: "2024-04-10",
    },
    {
      id: "d5",
      userId: "5",
      content:
        "Focus state küçük bir detay gibi görünür ama erişilebilirliğin direksiyonudur.",
      likeCount: 192,
      commentCount: 17,
      createdAt: "2024-04-13",
    },
    {
      id: "d6",
      userId: "5",
      content:
        "İyi boşluk kullanımı, kullanıcıya nereden başlayacağını söyler.",
      imageUrl:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
      likeCount: 260,
      commentCount: 21,
      createdAt: "2024-04-16",
    },
    {
      id: "d7",
      userId: "5",
      content:
        "Renk tek başına anlam taşıyorsa, bazı kullanıcılar o anlamı kaçırabilir.",
      likeCount: 176,
      commentCount: 13,
      createdAt: "2024-04-19",
    },
    {
      id: "d8",
      userId: "5",
      content: "İyi hata mesajı, kullanıcının ne yapacağını net söyler.",
      likeCount: 230,
      commentCount: 18,
      createdAt: "2024-04-22",
    },
    {
      id: "d9",
      userId: "5",
      content: "Arayüzde okunabilirlik yoksa estetik sadece vitrin olur.",
      likeCount: 205,
      commentCount: 16,
      createdAt: "2024-04-25",
    },
    {
      id: "d10",
      userId: "5",
      content: "Tutarlı spacing, tasarımın görünmeyen iskeletidir.",
      likeCount: 198,
      commentCount: 15,
      createdAt: "2024-04-28",
    },
    {
      id: "d11",
      userId: "5",
      content: "Kullanıcıya geri bildirim vermeyen tıklama, bozuk hissettirir.",
      likeCount: 240,
      commentCount: 20,
      createdAt: "2024-05-01",
    },
  ],
};
