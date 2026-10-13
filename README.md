# Logo lee Furniture

Situs katalog furnitur statis yang dibuat dengan HTML, CSS, dan JavaScript. Situs ini mencakup beranda, daftar produk, detail produk, checkout, informasi perusahaan, dan halaman kontak.

## Fitur

- Menjelajahi daftar produk dan mencari produk berdasarkan nama.
- Melihat detail produk dan mengubah jumlah barang.
- Memilih chip penilaian dan metode pembayaran.
- Mengisi formulir kontak dengan konfirmasi di sisi browser.
- Animasi interaksi dengan dukungan pengaturan `prefers-reduced-motion`.

Fitur pencarian, pilihan pembayaran, dan formulir kontak saat ini hanya berjalan di browser. Tidak ada backend; formulir kontak tidak mengirim pesan dan checkout tidak memproses transaksi.

## Struktur Proyek

```text
.
├── index.html
├── pages/
│   ├── about.html
│   ├── checkout.html
│   ├── contact.html
│   ├── product-detail.html
│   ├── products-all.html
│   └── products.html
├── assets/
│   └── img/
├── css/
│   ├── common.css
│   ├── home.css
│   ├── motion.css
│   └── pages.css
└── js/
    ├── animations.js
    ├── chips.js
    ├── contact-form.js
    ├── product-search.js
    └── quantity.js
```

## Menjalankan Secara Lokal

Tidak diperlukan proses build atau instalasi dependensi. Buka `index.html` di browser, atau jalankan server statis dari folder proyek:

```bash
python3 -m http.server 8000
```

Kemudian buka <http://localhost:8000>. Bootstrap dan font Poppins dimuat dari CDN, sehingga tampil optimal jika koneksi internet tersedia.

## Lisensi

Kode proyek menggunakan lisensi MIT; lihat [LICENSE](LICENSE). Aset gambar dan materi pihak ketiga mungkin memiliki ketentuan terpisah, jadi pastikan hak penggunaannya sebelum mendistribusikannya kembali.
