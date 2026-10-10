/* Soalan contoh pengukuhan umum, bukan kertas rasmi KPM. Setiap kategori mengandungi 10 soalan. */
const QUESTION_BANK={
'1':{
 bm:[
 ['Pilih huruf vokal.',['B','K','M','A'],3,'Huruf vokal ialah a, e, i, o dan u.'],
 ['Perkataan manakah nama haiwan?',['Kucing','Meja','Buku','Kasut'],0,'Kucing ialah haiwan.'],
 ['Lengkapkan: Saya minum ___.',['nasi','roti','air','kek'],2,'Kita minum air. Nasi, roti dan kek dimakan.'],
 ['Lawan bagi perkataan “besar” ialah…',['tinggi','kecil','panjang','kuat'],1,'Besar berlawan dengan kecil.'],
 ['Berapa suku kata dalam “kerusi”?',['1','2','3','4'],2,'Ke-ru-si ada tiga suku kata.'],
 ['Pilih ayat yang betul.',['Ali makan nasi.','Ali nasi makan.','Makan Ali nasi.','Nasi Ali makan.'],0,'Susunan ayat yang betul ialah Ali makan nasi.'],
 ['Perkataan manakah mengandungi digraf “ng”?',['kaki','buku','meja','ladang'],3,'Ladang mengandungi digraf ng yang mewakili satu bunyi.'],
 ['Ayat “Siapakah nama kamu?” ialah ayat…',['penyata','tanya','perintah','seruan'],1,'Ayat tanya menggunakan kata tanya dan tanda soal.'],
 ['Ali ada seekor kucing. Kucing itu berwarna putih. Apakah warna kucing Ali?',['hitam','kuning','putih','biru'],2,'Menurut ayat, kucing Ali berwarna putih.'],
 ['Tanda baca di akhir ayat penyata ialah…',['.','?','!',','],0,'Ayat penyata berakhir dengan noktah.']
 ],
 en:[
 ['Which word is a colour?',['Run','Blue','Chair','Eat'],1,'Blue is a colour.'],
 ['Choose the correct greeting in the morning.',['Good night','Goodbye','Thank you','Good morning'],3,'We say good morning in the morning.'],
 ['Which word begins with the sound /b/?',['Ball','Cat','Sun','Dog'],0,'Ball begins with the sound /b/.'],
 ['I ___ a pupil.',['is','are','am','be'],2,'Use am with I.'],
 ['Which is a body part?',['Hand','Table','Door','Cup'],0,'A hand is a body part.'],
 ['Choose the correct word: one ___.',['apples','books','apple','dogs'],2,'One means only one, so we say one apple.'],
 ['The teacher says, “Open your book.” What do you do?',['Close the book','Open the book','Draw the book','Eat the book'],1,'Open your book means to open the book.'],
 ['Which name is written correctly?',['ali','ALI','aLi','Ali'],3,'A name begins with a capital letter, followed by small letters.'],
 ['The opposite of hot is…',['cold','big','fast','long'],0,'Cold is the opposite of hot.'],
 ['This is Sam. He has a red bag. What colour is Sam’s bag?',['blue','green','red','black'],2,'The text says Sam has a red bag.']
 ],
 math:[
 ['2 + 3 = ?',['3','4','5','6'],2,'2 tambah 3 ialah 5.'],
 ['Jarum pendek di nombor 3 dan jarum panjang di nombor 12. Pukul berapa?',['pukul 3','pukul 12','pukul 6','pukul 9'],0,'Jarum pendek menunjukkan jam dan jarum panjang di 12 bermaksud tepat pukul 3.'],
 ['Nombor selepas 19 ialah…',['18','21','29','20'],3,'Selepas 19 ialah 20.'],
 ['Dua keping syiling 50 sen bersamaan…',['50 sen','RM1','RM2','10 sen'],1,'50 sen + 50 sen = 100 sen = RM1.'],
 ['35 + 20 = ?',['45','50','55','65'],2,'35 tambah 20 ialah 55.'],
 ['48 − 10 = ?',['38','58','40','37'],0,'48 tolak 10 ialah 38.'],
 ['Dalam nombor 47, digit 4 bernilai…',['4','47','400','40'],3,'Digit 4 berada di tempat puluh, maka nilainya 40.'],
 ['Bentuk sebiji bola ialah…',['kubus','sfera','kon','silinder'],1,'Bola berbentuk sfera.'],
 ['Sebiji kek dibahagi dua sama banyak. Setiap bahagian ialah…',['satu perempat','tiga perempat','satu perdua','satu'],2,'Dua bahagian sama banyak, setiap bahagian ialah satu perdua.'],
 ['Berapa hari dalam seminggu?',['7','5','6','12'],0,'Seminggu ada tujuh hari.']
 ],
 islam:[
 ['Rukun Islam ada berapa?',['3','4','5','6'],2,'Rukun Islam ada lima.'],
 ['Kitab suci umat Islam ialah…',['Al-Quran','Taurat','Injil','Zabur'],0,'Al-Quran ialah kitab suci umat Islam.'],
 ['Siapakah nabi terakhir?',['Nabi Adam','Nabi Musa','Nabi Nuh','Nabi Muhammad SAW'],3,'Nabi Muhammad SAW ialah nabi terakhir.'],
 ['Ucapan ketika bertemu orang Islam ialah…',['Selamat tinggal','Assalamualaikum','Selamat malam','Jumpa lagi'],1,'Assalamualaikum ialah ucapan salam.'],
 ['Sebelum makan kita digalakkan membaca…',['cerita','lagu','doa','pantun'],2,'Kita digalakkan membaca doa sebelum makan.'],
 ['Kita berdoa kepada…',['Allah SWT','bulan','matahari','pokok'],0,'Kita berdoa kepada Allah SWT.'],
 ['Sifat baik terhadap ibu bapa ialah…',['derhaka','menengking','melawan','hormat'],3,'Kita wajib menghormati ibu bapa.'],
 ['Huruf pertama dalam abjad hijaiyah ialah…',['ب','ا','ت','ج'],1,'Huruf pertama hijaiyah ialah alif (ا).'],
 ['Apabila menerima pemberian, kita mengucapkan…',['maaf','tolong','terima kasih','selamat'],2,'Berterima kasih ialah akhlak mulia.'],
 ['Huruf jawi “ب” dibaca…',['ba','alif','ta','sin'],0,'Huruf jawi ب dibaca ba.']
 ]
},
'2':{
 bm:[
 ['Pilih kata kerja.',['Cantik','Menyapu','Merah','Tinggi'],1,'Menyapu ialah perbuatan.'],
 ['Penjodoh bilangan bagi pensel ialah…',['sebiji','seekor','sehelai','sebatang'],3,'Sebatang pensel.'],
 ['Ayat tanya diakhiri dengan…',['tanda soal','noktah','koma','tanda seru'],0,'Ayat tanya menggunakan tanda soal.'],
 ['Kata lawan “rajin” ialah…',['cekap','pandai','malas','baik'],2,'Lawan rajin ialah malas.'],
 ['Pilih kata adjektif.',['Sekolah','Cantik','Berlari','Murid'],1,'Cantik menerangkan sifat.'],
 ['Ibu membeli tiga ___ epal.',['ekor','helai','batang','biji'],3,'Buah-buahan yang kecil dibilang dengan biji.'],
 ['Pilih kata nama khas.',['Ahmad','budak','sungai','buku'],0,'Ahmad ialah nama khas seseorang dan ditulis dengan huruf besar.'],
 ['Pilih ejaan yang betul.',['sekola','skolah','sekolah','sekolahh'],2,'Ejaan betul ialah sekolah.'],
 ['Mira menyiram bunga setiap pagi. Apakah yang Mira lakukan setiap pagi?',['mencuci kereta','menyiram bunga','membaca buku','menyapu lantai'],1,'Menurut ayat, Mira menyiram bunga setiap pagi.'],
 ['Kata ganti nama diri pertama ialah…',['dia','mereka','kamu','saya'],3,'Saya merujuk diri sendiri.']
 ],
 en:[
 ['Choose the plural of “book”.',['bookes','bookies','books','book'],2,'The plural is books.'],
 ['She ___ happy.',['is','am','are','be'],0,'Use is with she.'],
 ['The opposite of “fast” is…',['big','tall','thin','slow'],3,'Slow is the opposite of fast.'],
 ['Choose a fruit.',['Carrot','Apple','Rice','Bread'],1,'Apple is a fruit.'],
 ['We use our eyes to…',['hear','taste','see','smell'],2,'We see with our eyes.'],
 ['Which sentence is correct?',['He is running.','He are running.','He am running.','He running is.'],0,'He is running is correct.'],
 ['A ___ of shoes.',['piece','cup','bottle','pair'],3,'We say a pair of shoes.'],
 ['Which word is a place?',['Quickly','School','Blue','Eat'],1,'School is a place.'],
 ['Lina has a pet rabbit. It is white and small. What colour is Lina’s rabbit?',['black','brown','white','grey'],2,'The text says the rabbit is white.'],
 ['I ___ swim very well.',['can','is','am','are'],0,'We use can to talk about ability.']
 ],
 math:[
 ['24 + 15 = ?',['29','39','49','40'],1,'24 + 15 = 39.'],
 ['50 − 18 = ?',['28','38','42','32'],3,'50 − 18 = 32.'],
 ['4 × 3 = ?',['12','7','14','16'],0,'4 darab 3 ialah 12.'],
 ['20 ÷ 5 = ?',['2','5','4','10'],2,'20 bahagi 5 ialah 4.'],
 ['Nilai tempat bagi digit 6 dalam 563 ialah…',['sa','puluh','ratus','ribu'],1,'Digit 6 berada di tempat puluh, nilainya 60.'],
 ['300 + 400 = ?',['600','800','900','700'],3,'300 + 400 = 700.'],
 ['Satu jam bersamaan…',['60 minit','30 minit','45 minit','100 minit'],0,'1 jam = 60 minit.'],
 ['RM5 + RM3 = ?',['RM7','RM9','RM8','RM10'],2,'RM5 + RM3 = RM8.'],
 ['Pilih nombor genap.',['13','18','15','21'],1,'18 boleh dibahagi 2 dengan tepat.'],
 ['Sebiji pizza dibahagi kepada 4 bahagian sama banyak. Satu bahagian ialah…',['satu perdua','dua perempat','tiga perempat','satu perempat'],3,'Satu daripada empat bahagian sama banyak ialah satu perempat.']
 ],
 islam:[
 ['Wuduk diperlukan sebelum kita…',['bermain','menonton televisyen','solat','makan'],2,'Wuduk diperlukan untuk menunaikan solat.'],
 ['Rukun Iman ada berapa?',['6','4','5','7'],0,'Rukun Iman ada enam.'],
 ['Malaikat yang menyampaikan wahyu ialah…',['Mikail','Israfil','Izrail','Jibril'],3,'Jibril AS menyampaikan wahyu.'],
 ['Arah kiblat umat Islam ialah ke…',['sekolah','Kaabah','rumah','gunung'],1,'Kita menghadap Kaabah di Masjidil Haram ketika solat.'],
 ['Solat Subuh mempunyai berapa rakaat?',['4','3','2','5'],2,'Solat Subuh dua rakaat.'],
 ['Mengucapkan terima kasih ialah akhlak…',['mulia','tercela','buruk','dilarang'],0,'Berterima kasih ialah akhlak mulia.'],
 ['Ibu Nabi Muhammad SAW bernama…',['Khadijah','Aisyah','Fatimah','Aminah'],3,'Ibu baginda ialah Aminah binti Wahab.'],
 ['Puasa wajib dilaksanakan pada bulan…',['Muharam','Ramadan','Zulkaedah','Syawal'],1,'Puasa wajib pada bulan Ramadan.'],
 ['Surah pertama dalam Al-Quran ialah…',['Al-Ikhlas','An-Nas','Al-Fatihah','Al-Baqarah'],2,'Surah Al-Fatihah ialah surah pertama dalam Al-Quran.'],
 ['Kita perlu ___ apabila guru mengajar.',['mendengar','bising','bermain','tidur'],0,'Mendengar ialah adab menuntut ilmu.']
 ]
},
'3':{
 bm:[
 ['Pilih ayat majmuk.',['Ali membaca.','Buku itu tebal.','Saya lapar.','Ali membaca dan Abu menulis.'],3,'Dua klausa digabungkan dengan “dan”.'],
 ['Peribahasa “ringan tulang” bermaksud…',['rajin membantu','malas','cepat berlari','kurus'],0,'Ringan tulang bermaksud rajin membantu.'],
 ['Pilih kata hubung.',['Tinggi','Meja','Kerana','Menangis'],2,'Kerana ialah kata hubung.'],
 ['Kata lawan “berani” ialah…',['gagah','takut','kuat','rajin'],1,'Lawan berani ialah takut.'],
 ['Pilih kata sendi nama.',['besar','makan','di','pantas'],2,'Di ialah kata sendi nama untuk tempat.'],
 ['Peribahasa “bagai aur dengan tebing” menggambarkan…',['kerjasama','permusuhan','kesedihan','kemalasan'],0,'Peribahasa ini merujuk kepada saling membantu.'],
 ['“Wah, cantiknya lukisan itu!” ialah ayat…',['tanya','perintah','penyata','seruan'],3,'Ayat seruan menggunakan tanda seru.'],
 ['Pilih awalan bagi perkataan “menulis”.',['-an','meN-','-kan','-i'],1,'Menulis menggunakan awalan meN-.'],
 ['Pilih kata ganda.',['buku-buku','mata','kereta','kasut'],0,'Buku-buku ialah kata ganda kerana perkataan diulang.'],
 ['Pak Ali pergi ke pasar. Dia membeli ikan dan sayur. Ke manakah Pak Ali pergi?',['sekolah','pasar','masjid','kebun'],1,'Menurut teks, Pak Ali pergi ke pasar.']
 ],
 en:[
 ['Choose the correct sentence.',['They is playing.','They are playing.','They am playing.','They be playing.'],1,'Use are with they.'],
 ['I have a pen ___ a ruler.',['but','so','because','and'],3,'We use and to join two things.'],
 ['Choose the adjective.',['Beautiful','Swim','Teacher','School'],0,'Beautiful describes a quality.'],
 ['We have lunch ___ twelve o’clock.',['in','on','at','by'],2,'We use at with a clock time.'],
 ['Which word means the opposite of “early”?',['Fast','Late','Soon','First'],1,'Late is the opposite of early.'],
 ['“Go straight, then turn ___ at the bank.” Which word tells us a direction?',['bank','eat','happy','left'],3,'Left tells us which way to turn.'],
 ['___ are my friends.',['They','He','She','It'],0,'They refers to more than one person.'],
 ['Choose the correct question.',['Where you live?','Where does you live?','Where do you live?','Where living you?'],2,'Use do in the question with you.'],
 ['Tom goes to school by bus. He likes reading books. How does Tom go to school?',['by car','by bus','by bike','on foot'],1,'The text says Tom goes to school by bus.'],
 ['She drinks milk ___ day.',['every','ago','yesterday','tomorrow'],0,'Every day is a common time expression.']
 ],
 math:[
 ['125 + 236 = ?',['351','361','371','461'],1,'125 + 236 = 361.'],
 ['500 − 275 = ?',['225','235','325','275'],0,'500 − 275 = 225.'],
 ['7 × 8 = ?',['54','58','64','56'],3,'7 darab 8 ialah 56.'],
 ['72 ÷ 9 = ?',['6','7','8','9'],2,'72 bahagi 9 ialah 8.'],
 ['1/2 daripada 20 ialah…',['5','10','15','20'],1,'Separuh daripada 20 ialah 10.'],
 ['3 m bersamaan berapa cm?',['30','3000','3','300'],3,'1 m = 100 cm, maka 3 m = 300 cm.'],
 ['RM10.00 − RM3.50 = ?',['RM6.50','RM6.00','RM7.50','RM5.50'],0,'RM10.00 − RM3.50 = RM6.50.'],
 ['1 kg bersamaan…',['10 g','100 g','1000 g','10000 g'],2,'1 kg = 1000 g.'],
 ['Berapa minit dari 2:15 hingga 3:00?',['30','45','35','60'],1,'Dari 2:15 ke 3:00 ialah 45 minit.'],
 ['Ali ada 45 biji guli. Dia memberi 18 biji kepada adik. Berapa biji guli Ali sekarang?',['27','63','37','33'],0,'45 − 18 = 27.']
 ],
 islam:[
 ['Zakat fitrah dikeluarkan sebelum…',['solat Zuhur','solat Jumaat','solat Subuh','solat Hari Raya Aidilfitri'],3,'Zakat fitrah dikeluarkan pada bulan Ramadan sebelum solat Hari Raya Aidilfitri.'],
 ['Nabi Muhammad SAW dilahirkan di…',['Madinah','Makkah','Taif','Baitulmaqdis'],1,'Baginda dilahirkan di Makkah.'],
 ['Solat Isyak mempunyai berapa rakaat fardu?',['4','2','3','5'],0,'Solat Isyak empat rakaat.'],
 ['Nabi yang menerima kitab Taurat ialah…',['Nabi Isa AS','Nabi Daud AS','Nabi Musa AS','Nabi Muhammad SAW'],2,'Taurat diturunkan kepada Nabi Musa AS.'],
 ['Puasa bermula dari terbit fajar hingga…',['waktu Zuhur','terbenam matahari','tengah malam','terbit matahari'],1,'Puasa bermula dari terbit fajar hingga terbenam matahari.'],
 ['Surah Al-Ikhlas mempunyai berapa ayat?',['3','5','6','4'],3,'Surah Al-Ikhlas mempunyai empat ayat.'],
 ['Amanah ialah…',['menjaga kepercayaan dan tanggungjawab','mengkhianati orang','berbohong','membazir'],0,'Amanah ialah menjaga tanggungjawab dan kepercayaan.'],
 ['Kita mesti ___ apabila menerima nikmat Allah.',['sombong','merungut','bersyukur','membazir'],2,'Bersyukur ialah akhlak terpuji.'],
 ['Nabi Daud AS menerima kitab…',['Al-Quran','Zabur','Taurat','Injil'],1,'Zabur diturunkan kepada Nabi Daud AS.'],
 ['Rukun Islam yang pertama ialah…',['mengerjakan haji','berpuasa','mengeluarkan zakat','mengucap dua kalimah syahadah'],3,'Rukun Islam pertama ialah mengucap dua kalimah syahadah.']
 ]
}};
const SUBJECTS={bm:['Bahasa Melayu','📖'],en:['English','🔤'],math:['Matematik','🔢'],islam:['Pendidikan Islam','🕌']};
