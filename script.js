// 1. The Database
// Replace these with the actual songs in your "songs" folder.
// The "time" is in seconds (when the lyric should appear).
const songDatabase = [
  {
    id: 1,
    title: "A Love For Life",
    file: "songs/A love for life.mp3",
    cover:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=150&auto=format&fit=crop",
    lyrics: [
      { time: 0, text: "(Instrumental music playing...)" },
      { time: 15, text: "A love for life..." },
      { time: 30, text: "Pari, you are my everything ❤️" },
      { time: 45, text: "Every moment with you is magic" },
      { time: 60, text: "I never want this to end" },
      { time: 80, text: "You are my soulmate" },
      { time: 100, text: "I love you to the moon and back" },
      { time: 120, text: "(Beautiful instrumental continues...)" },
      { time: 150, text: "Forever and always" },
      { time: 180, text: "Just you and me" },
      { time: 210, text: "(Fading out...)" },
    ],
  },
  {
    id: 2,
    title: "Aaruyire",
    file: "songs/Aaruyire.mp3",
    cover:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=150&auto=format&fit=crop",
    lyrics: [
      { time: 0, text: "(Instrumental intro...)" },
      {
        time: 10,
        text: "Nee illaadha raathiriyo kaatrillaadha iravaai aagaadho",
      },
      { time: 16, text: "Aaruyire mannippaaya mannippaaya solladi en sagiye" },
      {
        time: 24,
        text: "Aaruyire ennai mannippaaya mannippaaya sol en sagiye ho...",
      },
      { time: 30, text: "Dhamdhara dhamdhara mast mast dhara..." },
      { time: 35, text: "En aasai thaavudhu un mele" },
      { time: 42, text: "Oru paadhiyil kaadhalai ootinaai" },
      { time: 48, text: "Maru paadhiyil thaabathai mootinaai" },
      {
        time: 55,
        text: "Nee illaadha raathiriyo kaatrillaadha iravaai aagaadho",
      },
      { time: 70, text: "(Interlude...)" },
      { time: 90, text: "Unnai thedi thediye en kaadhal kaanaa ponathe" },
      { time: 105, text: "Dhamdhara dhamdhara mast mast dhara..." },
      { time: 120, text: "En aasai thaavudhu un mele" },
      { time: 140, text: "Nee illaadha raathiriyo..." },
      { time: 155, text: "Aaruyire ennai mannippaaya..." },
      { time: 180, text: "(Fading out...)" },
    ],
  },
  {
    id: 3,
    title: "Adiyae Kolluthey",
    file: "songs/Adiyae kolluthey.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Vaaranam_Aayiram_poster.jpg",
    lyrics: [
      { time: 0, text: "(Instrumental intro...)" },
      { time: 10, text: "Vaadai kaatrinil oru naal oru vaasam vandhadhe" },
      { time: 15, text: "Un nesam endradhe" },
      { time: 20, text: "Undhan kangalil edho minsaaram ulladhe" },
      { time: 25, text: "En meedhu paaindhadhe" },
      {
        time: 30,
        text: "Mazhai kaalathil sariyum man tharai polave manamum unai kandathum sariya kandene",
      },
      {
        time: 40,
        text: "Adiyae kolludhey azhago alludhey ulagam surungudhey iruvaril adangudhey",
      },
      { time: 50, text: "Unnodu nadakkum ovvoru nodiyum" },
      { time: 55, text: "Ennodu irukkum en aayul varaiyil" },
      { time: 65, text: "(Guitar Interlude...)" },
      { time: 85, text: "Aahaa aahaa... Pookkalukkul punnagaiyai kandaen" },
      { time: 100, text: "Mazhai kaalathil sariyum man tharai polave..." },
      { time: 115, text: "Adiyae kolludhey azhago alludhey" },
      { time: 130, text: "Ulagam surungudhey iruvaril adangudhey" },
      { time: 145, text: "Unnodu nadakkum ovvoru nodiyum" },
      { time: 160, text: "Ennodu irukkum en aayul varaiyil..." },
      { time: 185, text: "(Instrumental fade...)" },
    ],
  },
  {
    id: 4,
    title: "Adiye",
    file: "songs/Adiye.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/7/7b/Kadal_Poster.jpg",
    lyrics: [
      { time: 0, text: "Adiye..." },
      { time: 6, text: "Ennai thaalaattum sangeethame" },
      { time: 14, text: "Uravaadum anbe" },
      { time: 21, text: "Uyir kaadhal unnaale" },
      { time: 28, text: "Nenjil aasaigal" },
      { time: 33, text: "Kannil yekkangal" },
      { time: 40, text: "Adiye..." },
      { time: 46, text: "Ennai thaalaattum sangeethame" },
      { time: 60, text: "(Interlude)" },
      { time: 75, text: "Bhoomi... athu suthuthu unnaale" },
      { time: 90, text: "Saami... athu aadaathu unnaale" },
      { time: 105, text: "Ennai thaalaattum sangeethame" },
      { time: 120, text: "Adiye..." },
      { time: 135, text: "Uyir kaadhal unnaale" },
      { time: 160, text: "(Outro...)" },
    ],
  },
  {
    id: 5,
    title: "Aga Naga",
    file: "songs/Aga naga.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Ponniyin_Selvan_1_poster.jpg",
    lyrics: [
      { time: 0, text: "Aga naga aga naga" },
      { time: 5, text: "Muga nagaiye" },
      { time: 12, text: "Poyyum meyyum" },
      { time: 18, text: "Puthu mayakkam" },
      { time: 24, text: "Aga naga aga naga" },
      { time: 30, text: "Muga nagaiye" },
      { time: 36, text: "Kangalil unnai kanden" },
      { time: 42, text: "Kaadhalil veezhndhen" },
      { time: 55, text: "(Flute Interlude)" },
      { time: 70, text: "Nenjukkul peidhidum kaadhal" },
      { time: 85, text: "Kannukkul aayiram minnal" },
      { time: 100, text: "Aga naga aga naga" },
      { time: 115, text: "Muga nagaiye" },
      { time: 130, text: "Poyyum meyyum puthu mayakkam" },
      { time: 150, text: "Kangalil unnai kanden..." },
      { time: 180, text: "(Fading out)" },
    ],
  },
  {
    id: 6,
    title: "Alaipayuthey Kanna",
    file: "songs/Alaipayuthey-Kanna.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Alaipayuthey.jpg",
    lyrics: [
      { time: 0, text: "Alaipayuthey kanna" },
      { time: 8, text: "En manam alaipayuthey" },
      { time: 16, text: "Aanandha moham uruvaagi" },
      { time: 24, text: "Alaipayuthey kanna" },
      { time: 32, text: "En manam alaipayuthey" },
      { time: 40, text: "Unnai kanda naal muthal" },
      { time: 48, text: "Nenjam uruguthe" },
      { time: 60, text: "(Classical Interlude)" },
      { time: 80, text: "Unnai kanda naal muthal" },
      { time: 95, text: "Nenjam uruguthe" },
      { time: 110, text: "Alaipayuthey kanna" },
      { time: 125, text: "En manam alaipayuthey" },
      { time: 140, text: "Aanandha moham uruvaagi" },
      { time: 160, text: "Alaipayuthey..." },
      { time: 190, text: "(Song ends)" },
    ],
  },
  {
    id: 7,
    title: "Anbe En Anbe",
    file: "songs/Anbe en Anbe.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/Dhaam_Dhoom_Poster.jpg",
    lyrics: [
      { time: 0, text: "Anbe en anbe" },
      { time: 7, text: "Un vizhi vithaiyil" },
      { time: 14, text: "Naan vizhundhen" },
      { time: 21, text: "Anbe en anbe" },
      { time: 28, text: "Un vizhi vithaiyil" },
      { time: 35, text: "Naan vizhundhen" },
      { time: 42, text: "Kaadhal theeyil" },
      { time: 49, text: "Venthum kulirndhen" },
      { time: 65, text: "(Interlude...)" },
      { time: 85, text: "Nenjil unnai sumandhen" },
      { time: 100, text: "Uyiril unnai kalandhen" },
      { time: 115, text: "Anbe en anbe" },
      { time: 130, text: "Un vizhi vithaiyil naan vizhundhen" },
      { time: 150, text: "Kaadhal theeyil venthum kulirndhen" },
      { time: 175, text: "(Beautiful fading instrumental...)" },
    ],
  },
  {
    id: 8,
    title: "Andha Arabi Kadaloram",
    file: "songs/Andha Arabi Kadaloram.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Bombay_film_poster.jpg",
    lyrics: [
      { time: 0, text: "Andha arabi kadaloram" },
      { time: 6, text: "Oru azhagainai kanden" },
      { time: 12, text: "Andha arabi kadaloram" },
      { time: 18, text: "Oru azhagainai kanden" },
      { time: 24, text: "Aval kannil" },
      { time: 30, text: "Ennai kanden" },
      { time: 45, text: "(Upbeat Instrumental...)" },
      { time: 60, text: "Ennai mayakkum jalam" },
      { time: 75, text: "Un vizhiyil kanden" },
      { time: 90, text: "Andha arabi kadaloram" },
      { time: 105, text: "Oru azhagainai kanden" },
      { time: 120, text: "Aval kannil ennai kanden" },
      { time: 140, text: "Andha arabi kadaloram..." },
      { time: 170, text: "(Fading out...)" },
    ],
  },
  {
    id: 9,
    title: "Annul Maele",
    file: "songs/Annul maele.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Vaaranam_Aayiram_poster.jpg",
    lyrics: [
      { time: 0, text: "Annul maele panithuli" },
      { time: 6, text: "Alaipayum oru kili" },
      { time: 13, text: "Maram thedum mazhaithuli" },
      { time: 19, text: "Annul maele panithuli" },
      { time: 26, text: "Iravum pagalum" },
      { time: 32, text: "Unnai ninaikkum" },
      { time: 45, text: "(Guitar Solo...)" },
      { time: 60, text: "Unnai kanda neram" },
      { time: 75, text: "Ennai marandhen" },
      { time: 90, text: "Annul maele panithuli" },
      { time: 105, text: "Alaipayum oru kili" },
      { time: 120, text: "Maram thedum mazhaithuli" },
      { time: 140, text: "Iravum pagalum unnai ninaikkum" },
      { time: 165, text: "Annul maele..." },
    ],
  },
  {
    id: 10,
    title: "Ava Enna",
    file: "songs/Ava enna.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Vaaranam_Aayiram_poster.jpg",
    lyrics: [
      { time: 0, text: "Ava enna enna thedi" },
      { time: 5, text: "Vandha anjala" },
      { time: 12, text: "Ava niramu niramu" },
      { time: 17, text: "Thangam" },
      { time: 23, text: "Ava sirippu sirippu" },
      { time: 28, text: "Muthu muthaa" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "En usuru usuru" },
      { time: 70, text: "Pochu unnaala" },
      { time: 85, text: "Ava enna enna thedi" },
      { time: 100, text: "Vandha anjala" },
      { time: 115, text: "Ava niramu niramu thangam" },
      { time: 130, text: "Ava sirippu sirippu muthu muthaa" },
      { time: 155, text: "En usuru pochu unnaala..." },
      { time: 180, text: "(Outro)" },
    ],
  },
  {
    id: 11,
    title: "Aye Sinamika",
    file: "songs/Aye sinamika.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/3/30/O_Kadhal_Kanmani_poster.jpg",
    lyrics: [
      { time: 0, text: "Aye sinamika" },
      { time: 6, text: "Kavithaiye kavidhaiye" },
      { time: 14, text: "Kaadhal enbaargal" },
      { time: 20, text: "Aye sinamika" },
      { time: 26, text: "Unnai kanden" },
      { time: 32, text: "Ennai marandhen" },
      { time: 45, text: "(Instrumental Interlude)" },
      { time: 60, text: "Kannil unnai kanden" },
      { time: 68, text: "Kaadhalil vizhundhen" },
      { time: 76, text: "Nenjil unnai vaithen" },
      { time: 84, text: "Neram marandhen" },
      { time: 95, text: "Aye sinamika" },
      { time: 105, text: "Kavithaiye kavidhaiye" },
      { time: 120, text: "(Violin Interlude)" },
      { time: 140, text: "Kaadhal enbaargal" },
      { time: 155, text: "Aye sinamika..." },
      { time: 180, text: "(Outro)" },
    ],
  },
  {
    id: 12,
    title: "Ayyayo Nenju",
    file: "songs/ayyayo nenju.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Aadukalam_Poster.jpg",
    lyrics: [
      { time: 0, text: "Ayyayo nenju alayuthu" },
      { time: 6, text: "Aagayam ippo boomi aaguthu" },
      { time: 14, text: "Ayyayo nenju alayuthu" },
      { time: 20, text: "Unnai kanda pinnaale" },
      { time: 26, text: "Ulagam maaruthu" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "Kannukkulla unnai vechu" },
      { time: 70, text: "Kaadhal valarthen" },
      { time: 85, text: "Ayyayo nenju alayuthu" },
      { time: 100, text: "Aagayam ippo boomi aaguthu" },
      { time: 115, text: "Unnai kanda pinnaale ulagam maaruthu" },
      { time: 140, text: "Ayyayo nenju..." },
      { time: 170, text: "(Fade out)" },
    ],
  },
  {
    id: 13,
    title: "Dhimmu Dhimmu",
    file: "songs/dhimmu dhimmu.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Engeyum_Kadhal.jpg",
    lyrics: [
      { time: 0, text: "Dhimmu dhimmu" },
      { time: 4, text: "Endhan idhayam" },
      { time: 10, text: "Dhimmu dhimmu" },
      { time: 14, text: "Endhan idhayam" },
      { time: 20, text: "Unnai paartha" },
      { time: 25, text: "Andha nimidam" },
      { time: 40, text: "(Beat drops...)" },
      { time: 55, text: "Unnai kanda neram" },
      { time: 70, text: "Ennai marandhen" },
      { time: 85, text: "Dhimmu dhimmu" },
      { time: 100, text: "Endhan idhayam" },
      { time: 115, text: "Unnai paartha andha nimidam" },
      { time: 140, text: "Dhimmu dhimmu..." },
      { time: 180, text: "(Fade out)" },
    ],
  },
  {
    id: 14,
    title: "Endrendrum Punnagai",
    file: "songs/endrendrum punnagai.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Alaipayuthey.jpg",
    lyrics: [
      { time: 0, text: "Endrendrum punnagai" },
      { time: 5, text: "Mudivillaa punnagai" },
      { time: 12, text: "Intha naalum intha neram" },
      { time: 18, text: "Endrendrum punnagai" },
      { time: 24, text: "Unnodu naanum" },
      { time: 30, text: "Vaazhum kaalam" },
      { time: 45, text: "(Instrumental...)" },
      { time: 60, text: "Kaadhalin deepam" },
      { time: 75, text: "Oli veesum neram" },
      { time: 90, text: "Endrendrum punnagai" },
      { time: 105, text: "Mudivillaa punnagai" },
      { time: 120, text: "Intha naalum intha neram" },
      { time: 140, text: "Unnodu naanum vaazhum kaalam" },
      { time: 165, text: "Endrendrum punnagai..." },
    ],
  },
  {
    id: 15,
    title: "Engeyum Kaadhal",
    file: "songs/Engeyum kaadhal.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Engeyum_Kadhal.jpg",
    lyrics: [
      { time: 0, text: "Engeyum kaadhal" },
      { time: 6, text: "Viliyum vizhiyum" },
      { time: 13, text: "Sila neram" },
      { time: 19, text: "Engeyum kaadhal" },
      { time: 25, text: "Unnaale nenjam" },
      { time: 31, text: "Thadumaarum" },
      { time: 45, text: "(Interlude...)" },
      { time: 60, text: "Kaatril un vaasam" },
      { time: 75, text: "Nenjil un nesam" },
      { time: 90, text: "Engeyum kaadhal" },
      { time: 105, text: "Viliyum vizhiyum sila neram" },
      { time: 120, text: "Unnaale nenjam thadumaarum" },
      { time: 140, text: "Engeyum kaadhal..." },
      { time: 170, text: "(Outro)" },
    ],
  },
  {
    id: 16,
    title: "Ennadi Maayavi Nee",
    file: "songs/ennadi maayavi nee.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/9/90/Vada_Chennai_poster.jpg",
    lyrics: [
      { time: 0, text: "Ennadi maayavi nee" },
      { time: 6, text: "Enthan iravai pagal aakkinaai" },
      { time: 14, text: "Ennadi maayavi nee" },
      { time: 20, text: "Kangalil jaalam seithaai" },
      { time: 28, text: "Nenjukkul koodu kattinaai" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "Unnai kanda naale" },
      { time: 70, text: "Ennai marandhen" },
      { time: 85, text: "Ennadi maayavi nee" },
      { time: 100, text: "Enthan iravai pagal aakkinaai" },
      { time: 115, text: "Kangalil jaalam seithaai" },
      { time: 130, text: "Nenjukkul koodu kattinaai" },
      { time: 155, text: "Ennadi maayavi nee..." },
    ],
  },
  {
    id: 17,
    title: "Ennai Saaithaale",
    file: "songs/Ennai saaithaale.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Endrendrum_Punnagai_poster.jpg",
    lyrics: [
      { time: 0, text: "Ennai saaithaale" },
      { time: 6, text: "Uyirai koidhaale" },
      { time: 13, text: "Idhayam theeyinil" },
      { time: 20, text: "Ennai saaithaale" },
      { time: 27, text: "Mella mella" },
      { time: 33, text: "Unnodu serndhen" },
      { time: 45, text: "(Instrumental...)" },
      { time: 60, text: "Kaadhal valaiyil" },
      { time: 75, text: "Naan vizhundhen" },
      { time: 90, text: "Ennai saaithaale" },
      { time: 105, text: "Uyirai koidhaale" },
      { time: 120, text: "Idhayam theeyinil" },
      { time: 135, text: "Mella mella unnodu serndhen" },
      { time: 160, text: "Ennai saaithaale..." },
    ],
  },
  {
    id: 18,
    title: "Ennamo Yeadho",
    file: "songs/Ennamo Yeadho.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/3/31/Ko_poster.jpg",
    lyrics: [
      { time: 0, text: "Ennamo yeadho" },
      { time: 5, text: "Ennam maruthu" },
      { time: 11, text: "Kannaadi poovai" },
      { time: 17, text: "Ennamo yeadho" },
      { time: 23, text: "Unnai thottathu" },
      { time: 29, text: "Nenjam suttathu" },
      { time: 45, text: "(Interlude...)" },
      { time: 60, text: "Kangalil unnai kanden" },
      { time: 75, text: "Kaadhalil vizhundhen" },
      { time: 90, text: "Ennamo yeadho" },
      { time: 105, text: "Ennam maruthu" },
      { time: 120, text: "Kannaadi poovai" },
      { time: 135, text: "Unnai thottathu nenjam suttathu" },
      { time: 160, text: "Ennamo yeadho..." },
    ],
  },
  {
    id: 19,
    title: "Hasili Fisiliye",
    file: "songs/Hasili fisiliye.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/06/Aadhavan_poster.jpg",
    lyrics: [
      { time: 0, text: "Hasili fisiliye" },
      { time: 5, text: "Ennai asathura" },
      { time: 11, text: "Iru vizhigalil" },
      { time: 17, text: "Hasili fisiliye" },
      { time: 23, text: "Muthu muthaaga" },
      { time: 29, text: "Sirippu sinthura" },
      { time: 45, text: "(Beat drops...)" },
      { time: 60, text: "Unnai kanda neram" },
      { time: 75, text: "Ennai marandhen" },
      { time: 90, text: "Hasili fisiliye" },
      { time: 105, text: "Ennai asathura" },
      { time: 120, text: "Iru vizhigalil" },
      { time: 135, text: "Muthu muthaaga sirippu sinthura" },
      { time: 160, text: "Hasili fisiliye..." },
    ],
  },
  {
    id: 20,
    title: "Hey Baby",
    file: "songs/hey baby.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f6/Aegan_poster.jpg",
    lyrics: [
      { time: 0, text: "Hey baby" },
      { time: 5, text: "Ennai thedi vandha" },
      { time: 11, text: "Hey baby" },
      { time: 16, text: "Unnai kanda neram" },
      { time: 22, text: "Ennaachu enaku" },
      { time: 35, text: "(Interlude...)" },
      { time: 50, text: "Kaadhal valaiyil" },
      { time: 65, text: "Naan vizhundhen" },
      { time: 80, text: "Hey baby" },
      { time: 95, text: "Ennai thedi vandha" },
      { time: 110, text: "Unnai kanda neram ennaachu enaku" },
      { time: 135, text: "Hey baby..." },
      { time: 160, text: "(Outro)" },
    ],
  },
  {
    id: 21,
    title: "Idhazhin Oram",
    file: "songs/Idhazhin Oram (The Innocence of Love).mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b3/3_film_poster.jpg",
    lyrics: [
      { time: 0, text: "Idhazhin oram" },
      { time: 6, text: "Sirippai kanden" },
      { time: 13, text: "Ennai naane" },
      { time: 19, text: "Idhazhin oram" },
      { time: 26, text: "Marandhu ponen" },
      { time: 32, text: "Unnaale" },
      { time: 45, text: "(Instrumental...)" },
      { time: 60, text: "Kaadhal theeyil" },
      { time: 75, text: "Naan vizhundhen" },
      { time: 90, text: "Idhazhin oram" },
      { time: 105, text: "Sirippai kanden" },
      { time: 120, text: "Ennai naane marandhu ponen unnaale" },
      { time: 145, text: "Idhazhin oram..." },
      { time: 175, text: "(Fade out)" },
    ],
  },
  {
    id: 22,
    title: "Imaye Imaye",
    file: "songs/imaye imaye.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/0/05/Raja_Rani_poster.jpg",
    lyrics: [
      { time: 0, text: "Imaye imaye" },
      { time: 6, text: "Vilagaathey" },
      { time: 13, text: "Ennai vittu" },
      { time: 19, text: "Imaye imaye" },
      { time: 26, text: "Unnai thedi" },
      { time: 32, text: "Alaigiren" },
      { time: 45, text: "(Interlude...)" },
      { time: 60, text: "Kangalil unnai kanden" },
      { time: 75, text: "Kaadhalil vizhundhen" },
      { time: 90, text: "Imaye imaye" },
      { time: 105, text: "Vilagaathey" },
      { time: 120, text: "Ennai vittu" },
      { time: 135, text: "Unnai thedi alaigiren" },
      { time: 160, text: "Imaye imaye..." },
    ],
  },
  {
    id: 23,
    title: "June Pona",
    file: "songs/june pona.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/4b/Unnale_Unnale.jpg",
    lyrics: [
      { time: 0, text: "June pona julai kaatre" },
      { time: 7, text: "Kan pona pinne" },
      { time: 14, text: "Kaadhal varuthe" },
      { time: 21, text: "June pona julai kaatre" },
      { time: 28, text: "Unnai thotta" },
      { time: 35, text: "Nenjam kuliruthe" },
      { time: 50, text: "(Instrumental...)" },
      { time: 65, text: "Kaadhal mazhaiyil" },
      { time: 80, text: "Naan nanaindhen" },
      { time: 95, text: "June pona julai kaatre" },
      { time: 110, text: "Kan pona pinne kaadhal varuthe" },
      { time: 125, text: "Unnai thotta nenjam kuliruthe" },
      { time: 150, text: "June pona..." },
      { time: 180, text: "(Outro)" },
    ],
  },
  {
    id: 24,
    title: "Kaadhal Sadugudu",
    file: "songs/kaadhal sadugudu.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Alaipayuthey.jpg",
    lyrics: [
      { time: 0, text: "Kaadhal sadugudu gudu" },
      { time: 6, text: "Kanne thodu thodu" },
      { time: 13, text: "Kaadhal sadugudu gudu" },
      { time: 19, text: "Alaiye ennai thodu" },
      { time: 26, text: "Unnaale uyirodu" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "Unnai kanda neram" },
      { time: 70, text: "Ennai marandhen" },
      { time: 85, text: "Kaadhal sadugudu gudu" },
      { time: 100, text: "Kanne thodu thodu" },
      { time: 115, text: "Alaiye ennai thodu" },
      { time: 130, text: "Unnaale uyirodu" },
      { time: 155, text: "Kaadhal sadugudu..." },
    ],
  },
  {
    id: 25,
    title: "Kaara Aatakaara",
    file: "songs/kaara aatakaara.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/3/30/O_Kadhal_Kanmani_poster.jpg",
    lyrics: [
      { time: 0, text: "Kaara aatakaara" },
      { time: 5, text: "Yendi ennai thakkura" },
      { time: 11, text: "Kaara aatakaara" },
      { time: 16, text: "Kannaal ennai suzhura" },
      { time: 22, text: "Nenja kilura" },
      { time: 35, text: "(Beat drops...)" },
      { time: 50, text: "Unnai kanda naale" },
      { time: 65, text: "Ennai marandhen" },
      { time: 80, text: "Kaara aatakaara" },
      { time: 95, text: "Yendi ennai thakkura" },
      { time: 110, text: "Kannaal ennai suzhura nenja kilura" },
      { time: 135, text: "Kaara aatakaara..." },
      { time: 160, text: "(Fade out)" },
    ],
  },
  {
    id: 26,
    title: "Kannazhaga",
    file: "songs/Kannazhaga (The Kiss of Love).mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b3/3_film_poster.jpg",
    lyrics: [
      { time: 0, text: "Kannazhaga" },
      { time: 5, text: "Kaalazhaga" },
      { time: 11, text: "Ponnazhaga" },
      { time: 16, text: "Pennazhaga" },
      { time: 22, text: "Ennai konda" },
      { time: 28, text: "Kaadhal azhaga" },
      { time: 45, text: "(Instrumental...)" },
      { time: 60, text: "Unnai thedi" },
      { time: 75, text: "Alaigiren" },
      { time: 90, text: "Kannazhaga" },
      { time: 105, text: "Kaalazhaga" },
      { time: 120, text: "Ponnazhaga pennazhaga" },
      { time: 135, text: "Ennai konda kaadhal azhaga" },
      { time: 160, text: "Kannazhaga..." },
    ],
  },
  {
    id: 27,
    title: "Lolita",
    file: "songs/Lolita.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Engeyum_Kadhal.jpg",
    lyrics: [
      { time: 0, text: "Lolita lolita" },
      { time: 6, text: "Unnai kanden" },
      { time: 13, text: "Lolita lolita" },
      { time: 19, text: "Ennai marandhen" },
      { time: 26, text: "Kaadhalil vizhundhen" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "Kangalil unnai kanden" },
      { time: 70, text: "Kaadhalil vizhundhen" },
      { time: 85, text: "Lolita lolita" },
      { time: 100, text: "Unnai kanden" },
      { time: 115, text: "Ennai marandhen kaadhalil vizhundhen" },
      { time: 140, text: "Lolita lolita..." },
      { time: 170, text: "(Outro)" },
    ],
  },
  {
    id: 28,
    title: "Manjal Veyil",
    file: "songs/manjal veyil.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Vettaiyaadu_Vilaiyaadu.jpg",
    lyrics: [
      { time: 0, text: "Manjal veyil" },
      { time: 6, text: "Maalai itta" },
      { time: 13, text: "Poove poove" },
      { time: 19, text: "Manjal veyil" },
      { time: 26, text: "Unnai thedum" },
      { time: 32, text: "Kaatre kaatre" },
      { time: 45, text: "(Instrumental...)" },
      { time: 60, text: "Kaadhal theeyil" },
      { time: 75, text: "Naan vizhundhen" },
      { time: 90, text: "Manjal veyil" },
      { time: 105, text: "Maalai itta poove poove" },
      { time: 120, text: "Unnai thedum kaatre kaatre" },
      { time: 145, text: "Manjal veyil..." },
    ],
  },
  {
    id: 29,
    title: "Mental Manadhil",
    file: "songs/mental manadhil.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/3/30/O_Kadhal_Kanmani_poster.jpg",
    lyrics: [
      { time: 0, text: "Mana mental manadhil" },
      { time: 5, text: "Laka laka laka" },
      { time: 11, text: "Mana mental manadhil" },
      { time: 16, text: "Thudi thudikkuthe" },
      { time: 22, text: "Unnaale" },
      { time: 35, text: "(Beat drops...)" },
      { time: 50, text: "Unnai kanda neram" },
      { time: 65, text: "Ennai marandhen" },
      { time: 80, text: "Mana mental manadhil" },
      { time: 95, text: "Laka laka laka" },
      { time: 110, text: "Thudi thudikkuthe unnaale" },
      { time: 135, text: "Mana mental manadhil..." },
      { time: 160, text: "(Fade out)" },
    ],
  },
  {
    id: 30,
    title: "Moongil Thootam",
    file: "songs/moongil thootam.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/7/7b/Kadal_Poster.jpg",
    lyrics: [
      { time: 0, text: "Moongil thottam" },
      { time: 6, text: "Sangeethangal" },
      { time: 13, text: "Moongil thottam" },
      { time: 19, text: "Un pattu kural" },
      { time: 26, text: "Ennai thalattum" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "Kaadhal mazhaiyil" },
      { time: 70, text: "Naan nanaindhen" },
      { time: 85, text: "Moongil thottam" },
      { time: 100, text: "Sangeethangal" },
      { time: 115, text: "Un pattu kural ennai thalattum" },
      { time: 140, text: "Moongil thottam..." },
    ],
  },
  {
    id: 31,
    title: "Mundhinam",
    file: "songs/mundhinam.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Vaaranam_Aayiram_poster.jpg",
    lyrics: [
      { time: 0, text: "Mundhinam paarthene" },
      { time: 6, text: "Paarthathum thotrene" },
      { time: 13, text: "Salladai kannaaga" },
      { time: 19, text: "Nenjamum ponnathe" },
      { time: 26, text: "Unnai kanda" },
      { time: 32, text: "Antha nimidam" },
      { time: 45, text: "(Instrumental...)" },
      { time: 60, text: "Kaadhal theeyil" },
      { time: 75, text: "Naan vizhundhen" },
      { time: 90, text: "Mundhinam paarthene" },
      { time: 105, text: "Paarthathum thotrene" },
      { time: 120, text: "Salladai kannaaga nenjamum ponnathe" },
      { time: 145, text: "Mundhinam paarthene..." },
    ],
  },
  {
    id: 32,
    title: "Muzhumathi",
    file: "songs/muzhumathi.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/Jodhaa_akbar_poster.jpg",
    lyrics: [
      { time: 0, text: "Muzhumathi avalathu" },
      { time: 6, text: "Mugamaagum" },
      { time: 13, text: "Malarukal avalathu" },
      { time: 19, text: "Muzhumathi avalathu" },
      { time: 26, text: "Kangalil" },
      { time: 32, text: "Ennai kanden" },
      { time: 45, text: "(Interlude...)" },
      { time: 60, text: "Kaadhal valaiyil" },
      { time: 75, text: "Naan vizhundhen" },
      { time: 90, text: "Muzhumathi avalathu" },
      { time: 105, text: "Mugamaagum" },
      { time: 120, text: "Malarukal avalathu" },
      { time: 135, text: "Kangalil ennai kanden" },
      { time: 160, text: "Muzhumathi avalathu..." },
    ],
  },
  {
    id: 33,
    title: "Nanaare",
    file: "songs/nanaare.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/95/Guru_Poster.jpg",
    lyrics: [
      { time: 0, text: "Nanaare nanaare" },
      { time: 5, text: "Nanaare" },
      { time: 11, text: "Nanaare nanaare" },
      { time: 16, text: "Mazhai polave" },
      { time: 22, text: "Vandhaye" },
      { time: 35, text: "(Instrumental...)" },
      { time: 50, text: "Kaadhal mazhaiyil" },
      { time: 65, text: "Naan nanaindhen" },
      { time: 80, text: "Nanaare nanaare" },
      { time: 95, text: "Nanaare" },
      { time: 110, text: "Mazhai polave vandhaye" },
      { time: 135, text: "Nanaare nanaare..." },
      { time: 160, text: "(Outro)" },
    ],
  },
  {
    id: 34,
    title: "Nangaai",
    file: "songs/Nangaai.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Engeyum_Kadhal.jpg",
    lyrics: [
      { time: 0, text: "Nangaai" },
      { time: 5, text: "Nilaavin thangai" },
      { time: 11, text: "Nangaai" },
      { time: 16, text: "Unnai kanda" },
      { time: 22, text: "Kaadhal varuthe" },
      { time: 35, text: "(Beat drops...)" },
      { time: 50, text: "Unnai thedi" },
      { time: 65, text: "Alaigiren" },
      { time: 80, text: "Nangaai" },
      { time: 95, text: "Nilaavin thangai" },
      { time: 110, text: "Unnai kanda kaadhal varuthe" },
      { time: 135, text: "Nangaai..." },
      { time: 160, text: "(Fade out)" },
    ],
  },
  {
    id: 35,
    title: "Nenjikkul Peidhidum",
    file: "songs/nenjikkul peidhidum.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Vaaranam_Aayiram_poster.jpg",
    lyrics: [
      { time: 0, text: "Nenjikkul peidhidum maamazhai" },
      { time: 7, text: "Neerukkul moozhgidum thaamarai" },
      { time: 15, text: "Sattaendru maaruthu vaanilai" },
      { time: 22, text: "Penne un mel pizhai" },
      { time: 30, text: "Nillaamal veesidum thendralai" },
      { time: 37, text: "Nenjikkul peidhidum maamazhai" },
      { time: 50, text: "(Guitar Solo...)" },
      { time: 75, text: "Vinnodu megame illai" },
      { time: 82, text: "Kannodu kaadhalum illai" },
      { time: 90, text: "Unnai kanda naale" },
      { time: 98, text: "Enakkul maatrungal" },
      { time: 110, text: "Nenjikkul peidhidum maamazhai" },
      { time: 125, text: "(Flute Interlude...)" },
      { time: 150, text: "Penne un mel pizhai" },
      { time: 165, text: "Sattaendru maaruthu vaanilai" },
      { time: 180, text: "Neerukkul moozhgidum thaamarai..." },
      { time: 200, text: "(Fading out...)" },
    ],
  },
  {
    id: 36,
    title: "Nenjukkule",
    file: "songs/Nenjukkule.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/7/7b/Kadal_Poster.jpg",
    lyrics: [
      { time: 0, text: "Nenjukkule" },
      { time: 5, text: "Omma mudinjurukken" },
      { time: 11, text: "Nenjukkule" },
      { time: 16, text: "Kaadhal valathurukken" },
      { time: 22, text: "Unnaale naan" },
      { time: 35, text: "(Interlude...)" },
      { time: 50, text: "Kaadhal theeyil" },
      { time: 65, text: "Naan vizhundhen" },
      { time: 80, text: "Nenjukkule" },
      { time: 95, text: "Omma mudinjurukken" },
      { time: 110, text: "Kaadhal valathurukken unnaale naan" },
      { time: 135, text: "Nenjukkule..." },
      { time: 160, text: "(Outro)" },
    ],
  },
  {
    id: 37,
    title: "Oday Oday",
    file: "songs/oday oday.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/0/05/Raja_Rani_poster.jpg",
    lyrics: [
      { time: 0, text: "Oday oday" },
      { time: 5, text: "Kaadhal oday" },
      { time: 11, text: "Oday oday" },
      { time: 16, text: "Ennai thoda" },
      { time: 22, text: "Vanthaye" },
      { time: 35, text: "(Beat drops...)" },
      { time: 50, text: "Unnai kanda neram" },
      { time: 65, text: "Ennai marandhen" },
      { time: 80, text: "Oday oday" },
      { time: 95, text: "Kaadhal oday" },
      { time: 110, text: "Ennai thoda vanthaye" },
      { time: 135, text: "Oday oday..." },
      { time: 160, text: "(Fade out)" },
    ],
  },
  {
    id: 38,
    title: "Othayilae",
    file: "songs/Othayilae.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Karnan_2021_poster.jpg",
    lyrics: [
      { time: 0, text: "Othayilae" },
      { time: 5, text: "Nikkuthu" },
      { time: 11, text: "Othayilae" },
      { time: 16, text: "Kaadhal ennai" },
      { time: 22, text: "Thakkuthu" },
      { time: 35, text: "(Interlude...)" },
      { time: 50, text: "Kangalil unnai kanden" },
      { time: 65, text: "Kaadhalil vizhundhen" },
      { time: 80, text: "Othayilae" },
      { time: 95, text: "Nikkuthu" },
      { time: 110, text: "Kaadhal ennai thakkuthu" },
      { time: 135, text: "Othayilae..." },
    ],
  },
  {
    id: 39,
    title: "Paartha Mudhal Naale",
    file: "songs/paartha mudhal naale.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Vettaiyaadu_Vilaiyaadu.jpg",
    lyrics: [
      { time: 0, text: "Paartha mudhal naale" },
      { time: 6, text: "Unnai paartha mudhal naale" },
      { time: 13, text: "Paartha mudhal naale" },
      { time: 19, text: "Ennai marandhen" },
      { time: 26, text: "Kaadhalil vizhundhen" },
      { time: 40, text: "(Instrumental...)" },
      { time: 55, text: "Kaadhal valaiyil" },
      { time: 70, text: "Naan vizhundhen" },
      { time: 85, text: "Paartha mudhal naale" },
      { time: 100, text: "Unnai paartha mudhal naale" },
      { time: 115, text: "Ennai marandhen kaadhalil vizhundhen" },
      { time: 140, text: "Paartha mudhal naale..." },
    ],
  },
  {
    id: 40,
    title: "Pachhai Nirame",
    file: "songs/pachhai nirame.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Alaipayuthey.jpg",
    lyrics: [
      { time: 0, text: "Pachhai nirame" },
      { time: 6, text: "Pachhai nirame" },
      { time: 13, text: "Ichhai moottum pachhai nirame" },
      { time: 19, text: "Pachhai nirame" },
      { time: 26, text: "Unnodu naanum" },
      { time: 32, text: "Vazhum nerame" },
      { time: 45, text: "(Interlude...)" },
      { time: 60, text: "Unnai kanda naale" },
      { time: 75, text: "Ennai marandhen" },
      { time: 90, text: "Pachhai nirame" },
      { time: 105, text: "Ichhai moottum pachhai nirame" },
      { time: 120, text: "Unnodu naanum vazhum nerame" },
      { time: 145, text: "Pachhai nirame..." },
      { time: 175, text: "(Outro)" },
    ],
  },
  {
    id: 41,
    title: "Parandhu Sella Vaa",
    file: "songs/parandhu sella vaa.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/3/30/O_Kadhal_Kanmani_poster.jpg",
    lyrics: [
      { time: 0, text: "Parandhu sella vaa" },
      { time: 6, text: "Kaatril yeri" },
      { time: 13, text: "Parandhu sella vaa" },
      { time: 19, text: "Unnai thedi" },
      { time: 26, text: "Alaigiren" },
      { time: 40, text: "(Beat drops...)" },
      { time: 55, text: "Kangalil unnai kanden" },
      { time: 70, text: "Kaadhalil vizhundhen" },
      { time: 85, text: "Parandhu sella vaa" },
      { time: 100, text: "Kaatril yeri" },
      { time: 115, text: "Unnai thedi alaigiren" },
      { time: 140, text: "Parandhu sella vaa..." },
      { time: 165, text: "(Fade out)" },
    ],
  },
  {
    id: 42,
    title: "Pookal Pookum",
    file: "songs/Pookal Pookum.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Madrasapattinam.jpg",
    lyrics: [
      { time: 0, text: "Pookal pookum tharunam" },
      { time: 7, text: "Aaruyire" },
      { time: 14, text: "Paarthathaarum illaiye" },
      { time: 21, text: "Pookal pookum tharunam" },
      { time: 28, text: "Unnai kanda" },
      { time: 35, text: "Andha nimidam" },
      { time: 50, text: "(Instrumental...)" },
      { time: 65, text: "Kaadhal theeyil" },
      { time: 80, text: "Naan vizhundhen" },
      { time: 95, text: "Pookal pookum tharunam" },
      { time: 110, text: "Aaruyire" },
      { time: 125, text: "Paarthathaarum illaiye" },
      { time: 150, text: "Pookal pookum..." },
    ],
  },
  {
    id: 43,
    title: "Snehidhane",
    file: "songs/Snehidhane.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Alaipayuthey.jpg",
    lyrics: [
      { time: 0, text: "Snehidhane snehidhane" },
      { time: 6, text: "Ragasiya snehidhane" },
      { time: 13, text: "Snehidhane snehidhane" },
      { time: 19, text: "Ennai thotta" },
      { time: 26, text: "Kaadhalane" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "Unnai kanda neram" },
      { time: 70, text: "Ennai marandhen" },
      { time: 85, text: "Snehidhane snehidhane" },
      { time: 100, text: "Ragasiya snehidhane" },
      { time: 115, text: "Ennai thotta kaadhalane" },
      { time: 140, text: "Snehidhane..." },
    ],
  },
  {
    id: 44,
    title: "Thee Illai",
    file: "songs/thee illai.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Engeyum_Kadhal.jpg",
    lyrics: [
      { time: 0, text: "Thee illai" },
      { time: 5, text: "Pugai illai" },
      { time: 11, text: "Oru vettaiyaadi" },
      { time: 16, text: "Thee illai" },
      { time: 22, text: "Ennai thotta" },
      { time: 28, text: "Andha kaadhal" },
      { time: 40, text: "(Beat drops...)" },
      { time: 55, text: "Kangalil unnai kanden" },
      { time: 70, text: "Kaadhalil vizhundhen" },
      { time: 85, text: "Thee illai" },
      { time: 100, text: "Pugai illai" },
      { time: 115, text: "Oru vettaiyaadi ennai thotta andha kaadhal" },
      { time: 140, text: "Thee illai..." },
    ],
  },
  {
    id: 45,
    title: "Theera",
    file: "songs/theera.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/3/30/O_Kadhal_Kanmani_poster.jpg",
    lyrics: [
      { time: 0, text: "Theera theera" },
      { time: 5, text: "Kaadhal theera" },
      { time: 11, text: "Theera theera" },
      { time: 16, text: "Unnai thedi" },
      { time: 22, text: "Alaigiren" },
      { time: 35, text: "(Instrumental...)" },
      { time: 50, text: "Unnai kanda naale" },
      { time: 65, text: "Ennai marandhen" },
      { time: 80, text: "Theera theera" },
      { time: 95, text: "Kaadhal theera" },
      { time: 110, text: "Unnai thedi alaigiren" },
      { time: 135, text: "Theera theera..." },
      { time: 160, text: "(Fade out)" },
    ],
  },
  {
    id: 46,
    title: "Unnai Kaanadhu Naan",
    file: "songs/Unnai-Kaanadhu-Naan.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Vishwaroopam_poster.jpg",
    lyrics: [
      { time: 0, text: "Unnai kaanadhu naan" },
      { time: 6, text: "Indru naanum illai" },
      { time: 13, text: "Unnai kaanadhu naan" },
      { time: 19, text: "Vithai illamal" },
      { time: 26, text: "Verum illai" },
      { time: 40, text: "(Interlude...)" },
      { time: 55, text: "Kaadhal theeyil" },
      { time: 70, text: "Naan vizhundhen" },
      { time: 85, text: "Unnai kaanadhu naan" },
      { time: 100, text: "Indru naanum illai" },
      { time: 115, text: "Vithai illamal verum illai" },
      { time: 140, text: "Unnai kaanadhu naan..." },
    ],
  },
  {
    id: 47,
    title: "Unnakena Veenum Sollu",
    file: "songs/unnakena veenum sollu.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/5/52/Yennai_Arindhaal_poster.jpg",
    lyrics: [
      { time: 0, text: "Unnakena veenum sollu" },
      { time: 6, text: "Ulagathai kaatta sollu" },
      { time: 13, text: "Unnakena veenum sollu" },
      { time: 19, text: "Kaadhalai" },
      { time: 26, text: "Sollivudu" },
      { time: 40, text: "(Instrumental...)" },
      { time: 55, text: "Unnai kanda neram" },
      { time: 70, text: "Ennai marandhen" },
      { time: 85, text: "Unnakena veenum sollu" },
      { time: 100, text: "Ulagathai kaatta sollu" },
      { time: 115, text: "Kaadhalai sollivudu" },
      { time: 140, text: "Unnakena veenum sollu..." },
    ],
  },
  {
    id: 48,
    title: "Varayoo",
    file: "songs/varayoo.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/06/Aadhavan_poster.jpg",
    lyrics: [
      { time: 0, text: "Varayoo varayoo" },
      { time: 5, text: "Kaadhal kolla" },
      { time: 11, text: "Varayoo varayoo" },
      { time: 16, text: "Ennai thoda" },
      { time: 22, text: "Vanthaye" },
      { time: 35, text: "(Beat drops...)" },
      { time: 50, text: "Kangalil unnai kanden" },
      { time: 65, text: "Kaadhalil vizhundhen" },
      { time: 80, text: "Varayoo varayoo" },
      { time: 95, text: "Kaadhal kolla" },
      { time: 110, text: "Ennai thoda vanthaye" },
      { time: 135, text: "Varayoo varayoo..." },
      { time: 160, text: "(Fade out)" },
    ],
  },
  {
    id: 49,
    title: "Why This Kolaveri Di",
    file: "songs/Why This Kolaveri Di (The Soup of Love).mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b3/3_film_poster.jpg",
    lyrics: [
      { time: 0, text: "🎵 Why This Kolaveri Di 🎵" },
      { time: 13, text: "Yo boys, I am singing song" },
      { time: 16, text: "Soup song... flop song..." },
      { time: 20, text: "Why this kolaveri kolaveri kolaveri di" },
      { time: 27, text: "Rhythm correct" },
      { time: 29, text: "Why this kolaveri kolaveri kolaveri di" },
      { time: 34, text: "Maintain please" },
      { time: 36, text: "Why this kolaveri... di" },
      { time: 43, text: "Distance la moon-u moon-u" },
      { time: 46, text: "Moon-u color-u white-u" },
      { time: 50, text: "White background night-u night-u" },
      { time: 54, text: "Night-u color-u black-u" },
      { time: 57, text: "Why this kolaveri kolaveri kolaveri di" },
      { time: 61, text: "Why this kolaveri kolaveri kolaveri di" },
      { time: 68, text: "White skin-u girl-u girl-u" },
      { time: 71, text: "Girl-u heart-u black-u" },
      { time: 75, text: "Eyes-u eyes-u meet-u meet-u" },
      { time: 78, text: "My future dark" },
      { time: 82, text: "Why this kolaveri kolaveri kolaveri di" },
      { time: 86, text: "Maama notes eduthuko" },
      { time: 89, text: "Apdiye kaila snacks eduthuko" },
      { time: 92, text: "Pa pa pa pa pa pa pa pa pa pa pa pa pa pa pa" },
      { time: 110, text: "(Instrumental section...)" },
      { time: 140, text: "Why this kolaveri kolaveri kolaveri di" },
      { time: 165, text: "Flop song..." },
      { time: 180, text: "(End of song)" },
    ],
  },
  {
    id: 50,
    title: "Yaaro Yarodi",
    file: "songs/yaaro yarodi.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Alaipayuthey.jpg",
    lyrics: [
      { time: 0, text: "Yaaro yarodi" },
      { time: 5, text: "Onnoda purushan" },
      { time: 11, text: "Yaaro yarodi" },
      { time: 16, text: "Kaadhal kondu" },
      { time: 22, text: "Vanthaye" },
      { time: 35, text: "(Interlude...)" },
      { time: 50, text: "Unnai kanda naale" },
      { time: 65, text: "Ennai marandhen" },
      { time: 80, text: "Yaaro yarodi" },
      { time: 95, text: "Onnoda purushan" },
      { time: 110, text: "Kaadhal kondu vanthaye" },
      { time: 135, text: "Yaaro yarodi..." },
      { time: 160, text: "(Outro)" },
    ],
  },
  {
    id: 51,
    title: "Yaathe Yaathe",
    file: "songs/yaathe yaathe.mp3",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Aadukalam_Poster.jpg",
    lyrics: [
      { time: 0, text: "Yaathe yaathe" },
      { time: 5, text: "Enna aacho" },
      { time: 11, text: "Yaathe yaathe" },
      { time: 16, text: "Kaadhal thottu" },
      { time: 22, text: "Pochu" },
      { time: 35, text: "(Interlude...)" },
      { time: 50, text: "Kangalil unnai kanden" },
      { time: 65, text: "Kaadhalil vizhundhen" },
      { time: 80, text: "Yaathe yaathe" },
      { time: 95, text: "Enna aacho" },
      { time: 110, text: "Kaadhal thottu pochu" },
      { time: 135, text: "Yaathe yaathe..." },
      { time: 160, text: "(Fade out)" },
    ],
  },
];

// Apply Movie Libraries to existing database safely without manually rewriting everything
const movieMappings = {
  1: "Pari's Specials", 2: "Guru", 3: "Vaaranam Aayiram", 4: "Kadal", 5: "Ponniyin Selvan",
  6: "Alaipayuthey", 7: "Dhaam Dhoom", 8: "Bombay", 9: "Vaaranam Aayiram", 10: "Vaaranam Aayiram",
  11: "O Kadhal Kanmani", 12: "Aadukalam", 13: "Engeyum Kadhal", 14: "Alaipayuthey", 15: "Engeyum Kadhal",
  16: "Vada Chennai", 17: "Endrendrum Punnagai", 18: "Ko", 19: "Aadhavan", 20: "Aegan",
  21: "3", 22: "Raja Rani", 23: "Unnale Unnale", 24: "Alaipayuthey", 25: "O Kadhal Kanmani",
  26: "3", 27: "Engeyum Kadhal", 28: "Vettaiyaadu Vilaiyaadu", 29: "O Kadhal Kanmani", 30: "Kadal",
  31: "Vaaranam Aayiram", 32: "Jodhaa Akbar", 33: "Guru", 34: "Engeyum Kadhal", 35: "Vaaranam Aayiram",
  36: "Kadal", 37: "Raja Rani", 38: "Karnan", 39: "Vettaiyaadu Vilaiyaadu", 40: "Alaipayuthey",
  41: "O Kadhal Kanmani", 42: "Madrasapattinam", 43: "Alaipayuthey", 44: "Engeyum Kadhal", 45: "O Kadhal Kanmani",
  46: "Vishwaroopam", 47: "Yennai Arindhaal", 48: "Aadhavan", 49: "3", 50: "Alaipayuthey", 51: "Aadukalam"
};

// Load liked songs from local storage
let likedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];

songDatabase.forEach(song => {
  song.movie = movieMappings[song.id] || "Unknown";
  song.isLiked = likedSongs.includes(song.id);
});

// 2. DOM Elements
const songListElement = document.getElementById("songList");
const searchInput = document.getElementById("searchInput");
const lyricsContainer = document.getElementById("lyricsContainer");
const audioPlayer = document.getElementById("audioPlayer");
const currentSongTitle = document.getElementById("currentSongTitle");
const albumCover = document.getElementById("albumCover");
const librarySelect = document.getElementById("librarySelect");

// New Custom Player Elements
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = playPauseBtn.querySelector("i");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTimeDisplay");
const totalTimeDisplay = document.getElementById("totalTimeDisplay");
const volumeBar = document.getElementById("volumeBar");
const muteBtn = document.getElementById("muteBtn");
const loveBtn = document.getElementById("loveBtn");
const localFileInput = document.getElementById("localFileInput");

let currentLyrics = [];
let currentSongIndex = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// --- IndexedDB for Persistent Local Songs ---
const dbName = "PariSpotifyDB";
let db;

const initDB = window.indexedDB.open(dbName, 1);
initDB.onupgradeneeded = (event) => {
  db = event.target.result;
  if (!db.objectStoreNames.contains("importedSongs")) {
    db.createObjectStore("importedSongs", { keyPath: "id" });
  }
};
initDB.onsuccess = (event) => {
  db = event.target.result;
  loadImportedSongs();
};
initDB.onerror = (event) => {
  console.error("IndexedDB error:", event.target.error);
};

function loadImportedSongs() {
  const transaction = db.transaction(["importedSongs"], "readonly");
  const store = transaction.objectStore("importedSongs");
  const request = store.getAll();

  request.onsuccess = (event) => {
    const songs = event.target.result;
    // Items are loaded from oldest to newest. Unshifting them puts the newest at the top!
    songs.forEach((songData) => {
      const objectURL = URL.createObjectURL(songData.blob);
      const newSong = {
        id: songData.id,
        title: songData.title,
        movie: "Imported Songs",
        file: objectURL,
        rawFile: songData.blob,
        cover: null,
        lyrics: [{ time: 0, text: "Imported song - no lyrics available 🎶" }],
        isLiked: likedSongs.includes(songData.id)
      };
      // Add to database only if it's not already there
      if (!songDatabase.find((s) => s.id === newSong.id)) {
        songDatabase.unshift(newSong);
      }
    });
    updateLibraryDropdown();
    filterAndRender();
  };
}
// ---------------------------------------------

// Fallback SVG cover if an image is missing or offline
const fallbackCover = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%239cb49b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='50' fill='white'%3E%26%239835;%3C/text%3E%3C/svg%3E";

albumCover.onerror = function() {
  this.src = fallbackCover;
};

// 3. Render Songs into the Browse Category
function renderSongs(songsToRender) {
  songListElement.innerHTML = "";

  if (songsToRender.length === 0) {
    songListElement.innerHTML =
      '<p class="placeholder-text">No songs found...</p>';
    return;
  }

  songsToRender.forEach((song) => {
    const div = document.createElement("div");
    div.className = "song-item";
    div.innerHTML = `
      <div class="song-list-info">
        <strong>${song.title}</strong>
        <span class="song-movie">${song.movie}</span>
      </div>
    `;
    div.onclick = () => playSong(song);
    songListElement.appendChild(div);
  });
}

// Add Local Songs Functionality
localFileInput.addEventListener("change", (event) => {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  Array.from(files).forEach((file) => {
    const songId = "local-" + Date.now() + Math.random();
    const songTitle = file.name.replace(/\.[^/.]+$/, "");

    // Save to IndexedDB so it's remembered after a refresh!
    if (db) {
      const transaction = db.transaction(["importedSongs"], "readwrite");
      const store = transaction.objectStore("importedSongs");
      store.add({
        id: songId,
        title: songTitle,
        blob: file
      });
    }

    const objectURL = URL.createObjectURL(file);
    const newSong = {
      id: songId,
      title: songTitle,
      movie: "Imported Songs",
      file: objectURL,
      rawFile: file, // Keep reference for jsmediatags to extract cover art
      cover: null,
      lyrics: [{ time: 0, text: "Imported song - no lyrics available 🎶" }],
      isLiked: false
    };

    // Add the new song to the beginning of the database
    songDatabase.unshift(newSong);
  });

  // Re-render libraries and song list
  updateLibraryDropdown();
  filterAndRender();
  
  // Clear the input so the same files can be added again if needed
  localFileInput.value = "";
});

// 4. Search & Library Filter Functionality
function updateLibraryDropdown() {
  const currentSelection = librarySelect.value || "all";
  const movies = [...new Set(songDatabase.map(song => song.movie))].sort();
  
  librarySelect.innerHTML = '<option value="all">All Songs</option>';
  
  const likedOption = document.createElement("option");
  likedOption.value = "Liked Songs";
  likedOption.innerText = "Liked Songs ❤️";
  librarySelect.appendChild(likedOption);
  
  movies.forEach(movie => {
    const option = document.createElement("option");
    option.value = movie;
    option.innerText = movie;
    librarySelect.appendChild(option);
  });
  
  if (movies.includes(currentSelection) || currentSelection === "all" || currentSelection === "Liked Songs") {
    librarySelect.value = currentSelection;
  }
}

function filterAndRender() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedLibrary = librarySelect.value;
  
  const filteredSongs = songDatabase.filter((song) => {
    const matchesSearch = song.title.toLowerCase().includes(searchTerm);
    const matchesLibrary = selectedLibrary === "all" || (selectedLibrary === "Liked Songs" ? song.isLiked : song.movie === selectedLibrary);
    return matchesSearch && matchesLibrary;
  });
  renderSongs(filteredSongs);
}

searchInput.addEventListener("input", filterAndRender);
librarySelect.addEventListener("change", filterAndRender);

// 5. Play Song and Load Lyrics
function playSong(song) {
  // Find global index for Next/Prev buttons
  currentSongIndex = songDatabase.findIndex(s => s.id === song.id);
  
  // Update player and play
  audioPlayer.src = song.file;
  audioPlayer.play();
  isPlaying = true;
  playIcon.className = "fas fa-pause-circle";
  currentSongTitle.innerText = song.title;

  // Update Like Button State
  if (song.isLiked) {
    loveBtn.classList.add("liked");
  } else {
    loveBtn.classList.remove("liked");
  }

  // Update Album Cover: Set default or database cover first
  albumCover.src = song.cover || fallbackCover;

  // Try to extract the embedded album art directly from the MP3 file
  try {
    if (window.jsmediatags) {
      window.jsmediatags.read(song.rawFile || song.file, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            albumCover.src =
              "data:" + picture.format + ";base64," + window.btoa(base64String);
          }
        },
        onError: function (error) {
          console.log("Could not read embedded album art:", error.info);
        },
      });
    }
  } catch (err) {
    console.log("Local file restriction prevented jsmediatags:", err);
  }

  // Load Lyrics
  currentLyrics = song.lyrics;
  lyricsContainer.innerHTML = ""; // Clear old lyrics

  if (!currentLyrics || currentLyrics.length === 0) {
    lyricsContainer.innerHTML =
      '<p class="placeholder-text">No lyrics available 💔</p>';
    return;
  }

  // Create lyric elements
  currentLyrics.forEach((lyric, index) => {
    const p = document.createElement("p");
    p.className = "lyric-line";
    p.id = `lyric-${index}`;
    p.innerText = lyric.text;

    // Allow clicking a lyric to skip to that part of the song
    p.onclick = () => {
      audioPlayer.currentTime = lyric.time;
    };

    lyricsContainer.appendChild(p);
  });
}

// 6. Sync Lyrics with Audio Playback (The "Spotify" effect)
audioPlayer.addEventListener("timeupdate", () => {
  if (currentLyrics.length === 0) return;

  const currentTime = audioPlayer.currentTime;

  // Find the lyric that matches the current time
  let activeIndex = -1;
  for (let i = 0; i < currentLyrics.length; i++) {
    if (currentTime >= currentLyrics[i].time) {
      activeIndex = i;
    } else {
      break; // Stop looking once we pass the current time
    }
  }

  // Update the UI
  if (activeIndex !== -1) {
    // Remove active class from all lines
    document
      .querySelectorAll(".lyric-line")
      .forEach((el) => el.classList.remove("active"));

    // Add active class to current line
    const activeLine = document.getElementById(`lyric-${activeIndex}`);
    if (activeLine && !activeLine.classList.contains("active")) {
      activeLine.classList.add("active");

      // Smoothly scroll the lyrics container so the active line stays in the middle
      activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});

// --- SPOTIFY PLAYER CONTROLS LOGIC ---

// Format seconds into M:SS
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Play/Pause Toggle
playPauseBtn.addEventListener("click", () => {
  if (currentSongIndex === -1) return; // Do nothing if no song is loaded
  
  if (isPlaying) {
    audioPlayer.pause();
    playIcon.className = "fas fa-play-circle";
  } else {
    audioPlayer.play();
    playIcon.className = "fas fa-pause-circle";
  }
  isPlaying = !isPlaying;
});

// Next & Previous Track functions
function playNextTrack() {
  if (currentSongIndex === -1) return;
  
  if (isShuffle) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songDatabase.length);
    } while (randomIndex === currentSongIndex && songDatabase.length > 1);
    playSong(songDatabase[randomIndex]);
  } else {
    let nextIndex = (currentSongIndex + 1) % songDatabase.length;
    playSong(songDatabase[nextIndex]);
  }
}

function playPrevTrack() {
  if (currentSongIndex === -1) return;
  let prevIndex = (currentSongIndex - 1 + songDatabase.length) % songDatabase.length;
  playSong(songDatabase[prevIndex]);
}

nextBtn.addEventListener("click", playNextTrack);
prevBtn.addEventListener("click", playPrevTrack);

// Shuffle & Repeat Toggles
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
});

// Handle song ending
audioPlayer.addEventListener("ended", () => {
  if (isRepeat) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  } else {
    playNextTrack();
  }
});

// Update Progress Bar as song plays
audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progressPercent;
    currentTimeDisplay.innerText = formatTime(audioPlayer.currentTime);
    totalTimeDisplay.innerText = formatTime(audioPlayer.duration);
    
    // Dynamically color the slider track before the thumb
    progressBar.style.background = `linear-gradient(to right, var(--primary-color) ${progressPercent}%, rgba(255, 255, 255, 0.2) ${progressPercent}%)`;
  }
});

// Scrub through song by clicking the bar
progressBar.addEventListener("input", (e) => {
  const scrubTime = (e.target.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = scrubTime;
});

// Volume Control
volumeBar.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
  const volIcon = muteBtn.querySelector("i");
  if (audioPlayer.volume === 0) volIcon.className = "fas fa-volume-mute";
  else if (audioPlayer.volume < 0.5) volIcon.className = "fas fa-volume-down";
  else volIcon.className = "fas fa-volume-up";
  
  // Dynamically color volume track
  volumeBar.style.background = `linear-gradient(to right, var(--primary-color) ${audioPlayer.volume * 100}%, rgba(255, 255, 255, 0.2) ${audioPlayer.volume * 100}%)`;
});

// Initialize default volume styling
volumeBar.style.background = `linear-gradient(to right, var(--primary-color) 100%, rgba(255, 255, 255, 0.2) 100%)`;

muteBtn.addEventListener("click", () => {
  if (audioPlayer.volume > 0) {
    audioPlayer.dataset.lastVolume = audioPlayer.volume;
    audioPlayer.volume = 0;
    volumeBar.value = 0;
  } else {
    audioPlayer.volume = audioPlayer.dataset.lastVolume || 1;
    volumeBar.value = audioPlayer.volume;
  }
  // Trigger input event to update icons and colors
  volumeBar.dispatchEvent(new Event("input"));
});

// Initialize the app
updateLibraryDropdown();
filterAndRender();

// 7. Floating Plumeria Flowers Animation
function createFlowers() {
  const flowerContainer = document.createElement("div");
  flowerContainer.className = "flower-container";
  document.body.appendChild(flowerContainer);

  const plumeriaSVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fdfdfd" stroke="#e8d5b5" stroke-width="1">
      <path d="M50,50 C30,10 60,10 50,50 Z" transform="rotate(0 50 50)"/>
      <path d="M50,50 C30,10 60,10 50,50 Z" transform="rotate(72 50 50)"/>
      <path d="M50,50 C30,10 60,10 50,50 Z" transform="rotate(144 50 50)"/>
      <path d="M50,50 C30,10 60,10 50,50 Z" transform="rotate(216 50 50)"/>
      <path d="M50,50 C30,10 60,10 50,50 Z" transform="rotate(288 50 50)"/>
    </g>
    <circle cx="50" cy="50" r="6" fill="#ffda4a"/>
  </svg>`;

  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = plumeriaSVG;
    
    // Randomize positions and animations
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (Math.random() * 10 + 10) + "s"; // 10s to 20s
    flower.style.animationDelay = Math.random() * 10 + "s";
    
    flowerContainer.appendChild(flower);
  }
}
createFlowers();

// 8. Startup Screen Animation Logic
window.addEventListener('load', () => {
  setTimeout(() => {
    const startupScreen = document.getElementById('startupScreen');
    if (startupScreen) {
      startupScreen.style.opacity = '0';
      setTimeout(() => startupScreen.remove(), 800); // Wait for transition to finish
    }
  }, 1800); // Show startup screen for 1.8 seconds
});

// 9. Cute "Send Love" Heart Burst Animation
loveBtn.addEventListener("click", (e) => {
  if (currentSongIndex === -1) return; // No song playing
  
  const currentSong = songDatabase[currentSongIndex];
  currentSong.isLiked = !currentSong.isLiked; // Toggle like state
  
  if (currentSong.isLiked) {
    loveBtn.classList.add("liked");
    if (!likedSongs.includes(currentSong.id)) likedSongs.push(currentSong.id);
    
    // Number of hearts per click
    const heartCount = Math.floor(Math.random() * 5) + 6; 
    
    // Get button coordinates to spawn hearts from the button
    const btnRect = loveBtn.getBoundingClientRect();
    
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement("i");
      heart.className = "fas fa-heart floating-heart";
      
      // Randomize starting position around the button
      const leftPos = btnRect.left + (Math.random() * 40 - 10);
      const bottomPos = window.innerHeight - btnRect.top;
      
      heart.style.left = `${leftPos}px`;
      heart.style.bottom = `${bottomPos}px`;
      heart.style.animationDuration = `${Math.random() * 1 + 1.5}s`;
      heart.style.fontSize = `${Math.random() * 15 + 15}px`;
      
      document.body.appendChild(heart);
      
      // Clean up DOM after animation
      setTimeout(() => heart.remove(), 2500);
    }
  } else {
    loveBtn.classList.remove("liked");
    likedSongs = likedSongs.filter(id => id !== currentSong.id);
  }
  
  localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
  
  // Re-render playlist if we are currently looking at the Liked Songs view
  if (librarySelect.value === "Liked Songs") {
    filterAndRender();
  }
});
