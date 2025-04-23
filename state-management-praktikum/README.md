# Practicum
## 1. React Context untuk State Global Sederhana
![Bukti Screenshot](img/prac1.png)
## 2. Zustand untuk State Management Kompleks
![Bukti screenshot](img/prac2.png)
## 3. Redux Toolkit dengan SSR Support
![Bukti screenshot](img/prac3.png)
## 4. Data Fetching dengan SWR
![Bukti screenshot](img/prac4.png)
## 5. URL State Management
![Bukti screenshot](img/prac5.png)

# Tugas
## 1. Bandingkan performa antara Context API, Zustand, dan Redux


## 2. Diskusikan kapan sebaiknya menggunakan masing-masing solusi
### Context API cocok digunakan ketika:
- Aplikasi kecil atau menengah
- State yang ingin disimpan bersifat global tapi jarang berubah, seperti: tema aplikasi (light/dark), bahasa (en/id), atau user login
- Tidak butuh fitur debugging atau struktur kompleks
* Contoh: pengaturan dark mode atau menyimpan data user login
### Zustand cocok digunakan ketika:
- Ingin manajemen state yang lebih efisien dan fleksibel
- Aplikasi menengah ke besar, tapi tidak ingin ribet seperti Redux
- State sering berubah dan digunakan oleh banyak komponen
- Ingin menghindari banyak boilerplate
* Contoh: e-commerce app dengan banyak state seperti filter, keranjang, notifikasi, dsb.

### Redux Toolkit cocok digunakan ketika:
- Aplikasi besar dan kompleks, apalagi jika dikerjakan oleh banyak developer
- Kamu perlu fitur seperti middleware, time-travel debugging, atau pengelolaan async logic yang kuat
- Kamu ingin semua state tersentralisasi dan mudah diuji
- Perlu pola kerja dan arsitektur yang jelas
* Contoh: dashboard admin besar, aplikasi enterprise, aplikasi dengan REST API yang kompleks

