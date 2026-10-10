# Latihan Ceria — PWA Tahun 1–3

Aplikasi kuiz interaktif untuk Tahun 1, 2 dan 3 bagi Bahasa Melayu, English, Matematik dan Pendidikan Islam.

## Ciri
- 480 soalan tersedia: 3 tahun × 4 subjek × 40 soalan. Setiap latihan memilih 10 soalan secara rawak.
- Semakan jawapan serta-merta dan penerangan ringkas.
- Markah, peratus, semakan jawapan dan sejarah latihan.
- Berfungsi secara luar talian selepas aset dimuatkan ke peranti.
- Daftar profil murid dengan nama, kelas/tahun dan foto profil.
- Profil, foto dan sejarah latihan disimpan secara setempat di peranti, bukan di awan; tiada kata laluan atau akaun pelayan.

## Cara guna
1. Ekstrak ZIP.
2. Untuk melihat fail di komputer, buka `index.html` (kuiz berfungsi terus; pemasangan PWA memerlukan pelayan HTTPS atau localhost).
3. Untuk pasang pada telefon, hoskan folder ini melalui GitHub Pages, Netlify atau hosting HTTPS lain.
4. Buka URL di Chrome Android, gunakan menu **Install app / Add to Home screen**. Pada iPhone, gunakan Safari > Share > Add to Home Screen.

## Ubah soalan
Edit `questions.js`. Format setiap soalan: `["Teks soalan", ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"], indeksJawapanBetul, "Penerangan"]`. Indeks bermula dengan 0 (A=0, B=1, C=2, D=3).

## Liputan soalan
Soalan disusun supaya menyentuh topik KSSR Tahap 1 seperti kefahaman bacaan pendek (BM dan English), pecahan, wang, masa dan ukuran (Matematik), serta abjad hijaiyah dan surah pendek (Pendidikan Islam). Pilihan jawapan A–D diacak pada setiap latihan. Setiap kali soalan diubah, tukar nama cache dalam `sw.js` (contohnya `latihan-ceria-v3`) supaya peranti pengguna mendapat versi terkini.

## Penting
Soalan ini ialah latihan pengukuhan umum dan belum dipadankan secara menyeluruh dengan DSKP atau pentaksiran terkini. Guru disarankan menyemak soalan dengan DSKP rasmi sebelum digunakan sebagai penilaian. Tiada data murid dihantar ke pelayan.


## Kemas kini koleksi soalan — 10 Oktober 2026

- 480 soalan pengukuhan umum: 40 soalan bagi setiap subjek untuk setiap tahun.
- Subjek: Bahasa Melayu, English, Matematik dan Pendidikan Islam; Tahun 1–3.
- Setiap latihan memilih 10 soalan secara rawak; pilihan jawapan turut diacak.
- Setiap jawapan disertakan penerangan. Profil, foto dan sejarah markah dikekalkan.
- Service worker versi v7 menggantikan cache lama. Buka semula atau muat semula aplikasi selepas kemas kini.
- Bukan kertas peperiksaan rasmi KPM.
