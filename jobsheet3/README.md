|       | Pemrograman Berbasis Framework 2025 |
| ----- | ----------------------------------- |
| NIM   | 2241720233                          |
| Nama  | Irsyad Danisaputra                  |
| Kelas | TI - 3C                             |

# Jobsheet Week 3

## Langkah-langkah Praktikum

### 1. Persiapan Lingkungan

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:
2. Buat direktori baru untuk proyek Next.js Anda
3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan
4. Jalankan aplikasi Next.js dengan perintah: Aplikasi akan terbuka di browser pada alamat http://localhost:3000.

### 2. Membuat Halaman dengan Server-Side Rendering (SSR)

1. Buka file pages/index.tsx di text editor Anda.
2. Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana:
3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks "Selamat Datang di Website Saya!".
   ![alt text](image.png)

### 3. Menggunakan Static Site Generation (SSG)

1. Buat file baru di direktori pages dengan nama blog js.
2. Tambahkan kode berikut untuk membuat halaman blog dengan SSG:
3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang
   diambil dari API eksternal.
   ![alt text](image-1.png)

### 4. Menggunakan Dynamic Routes

1. Buat direktori baru di pages dengan nama blog.
2. Buat file di dalam direktori blog dengan nama [slug].js
3. Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug:
4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat
   halaman yang menampilkan slug dari URL.
   ![alt text](image-2.png)

### 5. Menggunakan API Routes

1. Pastikan terdapat direktori di pages dengan nama api.
2. Buat file di dalam direktori api dengan nama products.js.
3. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk:
4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk:
5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar
   produk yang diambil dari API route.
   ![alt text](image-3.png)

### 6. Menggunakan Link Component

1. Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke
   halaman lain:
2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami":
3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke
   halaman tentang.
   ![alt text](image-4.png)
   ![alt text](image-5.png)

### Tugas

1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar
   pengguna dari API https://jsonplaceholder.typicode.com/users.
2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID.

<br> users/index.js
![alt text](image-8.png)

<br> users/[id].js
![alt text](image-9.png)

<br> result
<br>![alt text](image-6.png)
<br>![alt text](image-7.png)

3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.

<br> api/weather.js
![alt text](image-10.png)

<br> pages/weather.js
![alt text](image-11.png)

<br> result
<br>![alt text](image-12.png)
<br>![alt text](image-13.png)
