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
    memoryText: "one of my favourite songs ✨ and a cute cat 🐱",
    memoryImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop",
    lyrics: [
      { time: 0, text: "(Instrumental music playing...)" },
      { time: 15, text: "A love for life...", words: [
          { time: 15, text: "A" },
          { time: 15.6, text: "love" },
          { time: 16.3, text: "for" },
          { time: 16.8, text: "life..." }
      ]},
      { time: 30, text: "Pari, you are my everything ❤️" },
      { time: 45, text: "Every moment with you is magic" },
      { time: 60, text: "I never want this to end" },
      { time: 80, text: "You are monica to my chandler ❤️" },
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
    memoryText: "the song that made me fall in love with you ❤️ meow",
    memoryImage: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=200&auto=format&fit=crop",
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
    memoryText: "i can play this in the guitarr 🐾",
    memoryImage: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=200&auto=format&fit=crop",
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
    memoryText: "mwahhhhhhhhhh 🥹",
    memoryImage: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=200&auto=format&fit=crop",
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
// Load custom playlists from local storage (Object mapping Playlist Name -> Array of Song IDs)
let customPlaylists = JSON.parse(localStorage.getItem("customPlaylists")) || {};
// Load Pari's listening stats
let playStats = JSON.parse(localStorage.getItem("pariPlayStats")) || {};
// Load custom album covers
let customCovers = JSON.parse(localStorage.getItem("pariCustomCovers")) || {};
// Load custom polaroid memories
let customMemories = JSON.parse(localStorage.getItem("pariCustomMemories")) || {};

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
const coverFileInput = document.getElementById("coverFileInput");
const editCoverWrapper = document.getElementById("editCoverWrapper");
const polaroidFileInput = document.getElementById("polaroidFileInput");
const editPolaroidWrapper = document.getElementById("editPolaroidWrapper");
const shapeToggleBtn = document.getElementById("shapeToggleBtn");
const sleepTimerBtn = document.getElementById("sleepTimerBtn");
const sleepTimerDisplay = document.getElementById("sleepTimerDisplay");
const polaroidContainer = document.getElementById("polaroidContainer");
const polaroidImage = document.getElementById("polaroidImage");
const polaroidText = document.getElementById("polaroidText");
const partyBtn = document.getElementById("partyBtn");
const zenModeBtn = document.getElementById("zenModeBtn");
const downloadWrappedBtn = document.getElementById("downloadWrappedBtn");
const clearDataBtn = document.getElementById("clearDataBtn");

// Setup Mini Visualizer & Title Wrapper
const titleWrapper = document.createElement('div');
titleWrapper.style.display = 'flex';
titleWrapper.style.alignItems = 'center';
currentSongTitle.parentNode.insertBefore(titleWrapper, currentSongTitle);
titleWrapper.appendChild(currentSongTitle);

const visualizerCanvas = document.createElement("canvas");
visualizerCanvas.id = "miniVisualizer";
visualizerCanvas.width = 40;
visualizerCanvas.height = 15;
visualizerCanvas.style.marginLeft = "10px";
titleWrapper.appendChild(visualizerCanvas);

// Audio Visualizer Setup
let audioCtx;
let analyser;
let dataArray;
let canvasCtx = visualizerCanvas.getContext("2d");
audioPlayer.crossOrigin = "anonymous";
let currentFlowerSpeed = 1; // Tracks the current animation speed for the flowers
let bassFilter, trebleFilter; // Audio EQ Filters
let pannerNode, convolverNode, dryGain, wetGain; // Audio Illusions Nodes
let vocalBypass, vocalMix; // Karaoke Nodes
let isPartyMode = false;

audioPlayer.preservesPitch = false; // Allows the Turntable Tape Stop pitch to bend!
audioPlayer.mozPreservesPitch = false;
audioPlayer.webkitPreservesPitch = false;

function initVisualizer() {
  if (audioCtx) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return;
  }
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    
    const bassValNode = document.getElementById("bassValue");
    const trebleValNode = document.getElementById("trebleValue");

    bassFilter = audioCtx.createBiquadFilter();
    bassFilter.type = "lowshelf";
    bassFilter.frequency.value = 200;
    bassFilter.gain.value = bassValNode ? parseInt(bassValNode.innerText) || 0 : 0;

    trebleFilter = audioCtx.createBiquadFilter();
    trebleFilter.type = "highshelf";
    trebleFilter.frequency.value = 3000;
    trebleFilter.gain.value = trebleValNode ? parseInt(trebleValNode.innerText) || 0 : 0;

    // Advanced Audio Illusions Nodes
    dryGain = audioCtx.createGain();
    wetGain = audioCtx.createGain();
    convolverNode = audioCtx.createConvolver();
    pannerNode = audioCtx.createStereoPanner();
    
    // Generate a mathematical Synthetic Impulse Response for the Reverb effect
    const length = audioCtx.sampleRate * 2.5; // 2.5 second tail
    const buffer = audioCtx.createBuffer(2, length, audioCtx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const data = buffer.getChannelData(c);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 3);
      }
    }
    convolverNode.buffer = buffer;
    wetGain.gain.value = 0; // Off by default

    // True Vocal Remover Phase Cancellation Circuit
    vocalBypass = audioCtx.createGain();
    vocalMix = audioCtx.createGain();
    const splitter = audioCtx.createChannelSplitter(2);
    const merger = audioCtx.createChannelMerger(2);
    const inverter = audioCtx.createGain();
    inverter.gain.value = -1; // Inverts the phase of the right channel

    // Connect the Graph: Source -> [Karaoke Circuit] -> EQ -> [Dry/Wet Reverb] -> Panner -> Analyser -> Speakers
    const source = audioCtx.createMediaElementSource(audioPlayer);
    source.connect(vocalBypass);
    source.connect(splitter);
    
    splitter.connect(merger, 0, 0); // L to L
    splitter.connect(merger, 0, 1); // L to R
    splitter.connect(inverter, 1);  // R to Inverter
    inverter.connect(merger, 0, 0); // -R to L
    inverter.connect(merger, 0, 1); // -R to R
    merger.connect(vocalMix);

    vocalBypass.connect(bassFilter);
    vocalMix.connect(bassFilter);
    vocalBypass.gain.value = 1;
    vocalMix.gain.value = 0;

    // Fix: Connect the Bass EQ to the Treble EQ to complete the audio circuit!
    bassFilter.connect(trebleFilter);

    trebleFilter.connect(dryGain).connect(pannerNode);
    trebleFilter.connect(convolverNode).connect(wetGain).connect(pannerNode);
    pannerNode.connect(analyser);
    analyser.connect(audioCtx.destination);
    
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    
    function draw() {
      requestAnimationFrame(draw);
      
      if (!isPlaying && dataArray.every(v => v === 0)) {
        // Gracefully slow the flowers back to normal speed when music stops
        if (currentFlowerSpeed > 1.01) {
          currentFlowerSpeed += (1 - currentFlowerSpeed) * 0.1;
          document.querySelectorAll('.flower').forEach(flower => {
            flower.getAnimations().forEach(anim => anim.playbackRate = currentFlowerSpeed);
          });
        }
        return;
      }
      
      analyser.getByteFrequencyData(dataArray);

      // --- Floating Flowers Audio Reactivity ---
      let sum = 0;
      // Focus on the first half of the data array (bass/lower frequencies) for the beat
      const beatLength = Math.floor(bufferLength / 2);
      for (let i = 0; i < beatLength; i++) {
        sum += dataArray[i];
      }
      const average = sum / beatLength;
      
      // Map average energy (0-255) to a speed multiplier (1x to 4x speed)
      let targetSpeed = 1 + (average / 255) * 3;
      currentFlowerSpeed += (targetSpeed - currentFlowerSpeed) * 0.1; // Smooth interpolation
      
      document.querySelectorAll('.flower').forEach(flower => {
        flower.getAnimations().forEach(anim => {
          anim.playbackRate = currentFlowerSpeed;
        });
      });
      // -----------------------------------------
      
      // --- Party Mode Dynamic Beat Strobe ---
      const strobeOverlay = document.getElementById("strobeOverlay");
      if (isPartyMode && strobeOverlay) {
        if (average > 215) { // Hard bass threshold
          strobeOverlay.style.opacity = (average - 200) / 55;
          strobeOverlay.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
        } else {
          let currentOpacity = parseFloat(strobeOverlay.style.opacity) || 0;
          strobeOverlay.style.opacity = Math.max(0, currentOpacity - 0.08); // Smooth decay
        }
      } else if (strobeOverlay && strobeOverlay.style.opacity > 0) {
        strobeOverlay.style.opacity = 0;
      }
      // --------------------------------------

      // --- Pro Audio Studio EQ Visualizer ---
      const eqCanvas = document.getElementById("eqCanvas");
      if (eqCanvas && eqModal.style.display !== "none") {
        const eqCtx = eqCanvas.getContext("2d");
        // Prevent 60fps layout thrashing by only writing if dimensions change (Huge optimization)
        if (eqCanvas.width !== eqCanvas.offsetWidth) eqCanvas.width = eqCanvas.offsetWidth;
        if (eqCanvas.height !== eqCanvas.offsetHeight) eqCanvas.height = eqCanvas.offsetHeight;
        eqCtx.clearRect(0, 0, eqCanvas.width, eqCanvas.height);

        const color = document.documentElement.style.getPropertyValue('--primary-color') || '#9cb49b';
        const eqBarWidth = (eqCanvas.width / bufferLength) * 2.5;
        let eqX = 0;
        for (let i = 0; i < bufferLength; i++) {
          const eqBarHeight = (dataArray[i] / 255) * eqCanvas.height;
          eqCtx.fillStyle = color;
          eqCtx.fillRect(eqX, eqCanvas.height - eqBarHeight, eqBarWidth, eqBarHeight);
          eqX += eqBarWidth + 1;
        }
      }
      // --------------------------------------

      canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
      
      const primaryColor = document.documentElement.style.getPropertyValue('--primary-color') || '#9cb49b';
      const barWidth = (visualizerCanvas.width / bufferLength) * 2.5;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * visualizerCanvas.height;
        canvasCtx.fillStyle = primaryColor;
        canvasCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    }
    draw();
  } catch (err) {
    console.log("AudioContext initialization failed:", err);
  }
}

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

polaroidImage.onerror = function() {
  this.style.display = "none"; // Hide polaroid image gracefully if the external link dies
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
    div.dataset.songId = song.id;
    
    // Retain genie effect if this song is currently playing and the list re-renders
    if (currentSongIndex !== -1 && songDatabase[currentSongIndex].id === song.id) {
      div.classList.add("playing-genie");
    }
    
    const infoDiv = document.createElement("div");
    infoDiv.className = "song-list-info";
    infoDiv.innerHTML = `
      <strong>${song.title}</strong>
      <span class="song-movie">${song.movie}</span>
    `;

    const addBtn = document.createElement("button");
    addBtn.className = "add-to-playlist-btn";
    addBtn.title = "Add/Remove from Playlist";
    addBtn.innerHTML = '<i class="fas fa-plus"></i>';
    addBtn.onclick = (e) => {
      e.stopPropagation(); // Prevents the song from playing when clicking the + button
      openPlaylistModal(song);
    };

    div.appendChild(infoDiv);
    div.appendChild(addBtn);
    div.onclick = () => crossfadeToSong(songDatabase.findIndex(s => s.id === song.id));
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
  
  // Render Custom Playlists
  const playlistNames = Object.keys(customPlaylists);
  if (playlistNames.length > 0) {
    const customGroup = document.createElement("optgroup");
    customGroup.label = "Your Playlists";
    playlistNames.forEach(name => {
      const option = document.createElement("option");
      option.value = "playlist_" + name;
      option.innerText = "🎵 " + name;
      customGroup.appendChild(option);
    });
    librarySelect.appendChild(customGroup);
  }

  // Render Movies / Albums
  const movieGroup = document.createElement("optgroup");
  movieGroup.label = "Albums & Movies";
  movies.forEach(movie => {
    const option = document.createElement("option");
    option.value = movie;
    option.innerText = movie;
    movieGroup.appendChild(option);
  });
  librarySelect.appendChild(movieGroup);
  
  // Attempt to restore their selection after update
  if (currentSelection === "all" || currentSelection === "Liked Songs" || movies.includes(currentSelection) || currentSelection.startsWith("playlist_")) {
    librarySelect.value = currentSelection;
  }
}

function filterAndRender() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedLibrary = librarySelect.value;
  
  const filteredSongs = songDatabase.filter((song) => {
    const matchesSearch = song.title.toLowerCase().includes(searchTerm);
    
    let matchesLibrary = false;
    if (selectedLibrary === "all") {
      matchesLibrary = true;
    } else if (selectedLibrary === "Liked Songs") {
      matchesLibrary = song.isLiked;
    } else if (selectedLibrary.startsWith("playlist_")) {
      const playlistName = selectedLibrary.replace("playlist_", "");
      matchesLibrary = customPlaylists[playlistName] && customPlaylists[playlistName].includes(song.id);
    } else {
      matchesLibrary = song.movie === selectedLibrary;
    }
    
    return matchesSearch && matchesLibrary;
  });
  renderSongs(filteredSongs);
}

searchInput.addEventListener("input", filterAndRender);
librarySelect.addEventListener("change", filterAndRender);

// --- Random Dynamic Background Colors ---
function applyRandomThemeColor() {
  // Generate random vibrant but balanced colors
  const r = Math.floor(Math.random() * 156) + 100; // 100-255
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  
  const rgb = `rgb(${r}, ${g}, ${b})`;
  // Create a much darker version of the same color for the background gradient
  const darkerRgb = `rgb(${Math.floor(r * 0.3)}, ${Math.floor(g * 0.3)}, ${Math.floor(b * 0.3)})`;
  
  document.documentElement.style.setProperty('--primary-color', rgb);
  document.documentElement.style.setProperty('--bg-gradient', `linear-gradient(135deg, ${darkerRgb} 0%, #1a1a1a 100%)`);
}

// 5. Play Song and Load Lyrics
function playSong(song) {
  // Find global index for Next/Prev buttons
  currentSongIndex = songDatabase.findIndex(s => s.id === song.id);
  
  initVisualizer();
  applyRandomThemeColor();

  // Record Stats for Pari's Wrapped
  playStats[song.id] = (playStats[song.id] || 0) + 1;
  localStorage.setItem("pariPlayStats", JSON.stringify(playStats));

  // Update player and play
  audioPlayer.src = song.file;
  const playPromise = audioPlayer.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => console.log("Playback prevented by browser:", err));
  }
  isPlaying = true;
  playIcon.className = "fas fa-pause-circle";
  currentSongTitle.innerText = song.title;
  albumCover.classList.add("playing");

  // Apply the magical genie effect to the currently playing song in the playlist
  document.querySelectorAll('.song-item').forEach(item => {
    item.classList.remove('playing-genie');
  });
  const activeItem = document.querySelector(`.song-item[data-song-id="${song.id}"]`);
  if (activeItem) {
    activeItem.classList.add('playing-genie');
    
    // Math-based vertical scroll to prevent horizontal swipe-locking on mobile
    const listContainer = document.getElementById("songList");
    if (listContainer) {
      const itemRect = activeItem.getBoundingClientRect();
      const containerRect = listContainer.getBoundingClientRect();
      const scrollTop = listContainer.scrollTop + (itemRect.top - containerRect.top) - (containerRect.height / 2) + (itemRect.height / 2);
      listContainer.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  }

  // Display Digital Polaroid Memory if it exists
  const hasPolaroidImage = customMemories[song.id] || song.memoryImage;
  if (song.memoryText || hasPolaroidImage) {
    polaroidImage.src = customMemories[song.id] || song.memoryImage || "";
    polaroidImage.style.display = hasPolaroidImage ? "block" : "none";
    polaroidText.innerText = song.memoryText || "";
    polaroidContainer.classList.add("visible");
  } else {
    polaroidContainer.classList.remove("visible");
  }

  // --- Auto-Swipe to Lyrics on Mobile! ---
  if (window.innerWidth <= 768) {
    const mainContainer = document.querySelector("main");
    if (mainContainer) {
      mainContainer.scrollTo({ left: window.innerWidth, behavior: "smooth" });
    }
  }

  // Setup Media Session API (Lock Screen & Device Controls)
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: song.movie,
      album: 'Pari Spotify',
      artwork: [
        { src: customCovers[song.id] || song.cover || fallbackCover, sizes: '512x512', type: 'image/jpeg' }
      ]
    });
    
    // Full Support for Control Center & Dynamic Island
    navigator.mediaSession.setActionHandler('play', () => { if (!isPlaying) playPauseBtn.click(); });
    navigator.mediaSession.setActionHandler('pause', () => { if (isPlaying) playPauseBtn.click(); });
    navigator.mediaSession.setActionHandler('previoustrack', playPrevTrack);
    navigator.mediaSession.setActionHandler('nexttrack', playNextTrack);
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.fastSeek && !details.seekTime) return;
      audioPlayer.currentTime = details.seekTime;
      updatePositionState();
    });
  }

  // Update Like Button State
  if (song.isLiked) {
    loveBtn.classList.add("liked");
  } else {
    loveBtn.classList.remove("liked");
  }

  // Update Album Cover: Prioritize Custom Cover -> Database Cover -> Fallback
  albumCover.src = customCovers[song.id] || song.cover || fallbackCover;

  // Try to extract the embedded album art directly from the MP3 file
  try {
    if (window.jsmediatags && !customCovers[song.id]) {
      window.jsmediatags.read(song.rawFile || song.file, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64Cover = "data:" + picture.format + ";base64," + window.btoa(base64String);
            albumCover.src = base64Cover;
            
            if ('mediaSession' in navigator && navigator.mediaSession.metadata) {
              navigator.mediaSession.metadata.artwork = [
                { src: base64Cover, sizes: '512x512', type: picture.format }
              ];
            }
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
    
    if (lyric.words) {
      p.style.color = "rgba(255, 240, 243, 0.5)"; // Base color for Karaoke line
      lyric.words.forEach((w, wIndex) => {
        const span = document.createElement("span");
        span.className = "lyric-word";
        span.innerText = w.text + " ";
        span.dataset.time = w.time;
        p.appendChild(span);
      });
    } else {
      p.innerText = lyric.text;
    }

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

      // Math-based vertical scroll to prevent horizontal swipe-locking on mobile
      const lyricsCont = document.getElementById("lyricsContainer");
      if (lyricsCont) {
        const itemRect = activeLine.getBoundingClientRect();
        const containerRect = lyricsCont.getBoundingClientRect();
        const scrollTop = lyricsCont.scrollTop + (itemRect.top - containerRect.top) - (containerRect.height / 2) + (itemRect.height / 2);
        lyricsCont.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
    
    // Word-by-word Highlighting
    if (activeLine && activeLine.querySelector(".lyric-word")) {
      activeLine.querySelectorAll(".lyric-word").forEach(span => {
        if (currentTime >= parseFloat(span.dataset.time)) {
          span.classList.add("word-active");
        } else {
          span.classList.remove("word-active");
        }
      });
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

let tapeStopInterval;
let tapeStartInterval;

// Play/Pause Toggle (Turntable Effect)
playPauseBtn.addEventListener("click", () => {
  if (currentSongIndex === -1) return; // Do nothing if no song is loaded
  
  initVisualizer();
  clearInterval(tapeStopInterval);
  clearInterval(tapeStartInterval);

  if (isPlaying) {
    playIcon.className = "fas fa-play-circle";
    albumCover.classList.remove("playing");
    isPlaying = false;
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "paused";

    // Turntable Tape Stop Down
    let dropRate = audioPlayer.playbackRate;
    tapeStopInterval = setInterval(() => {
      dropRate -= 0.06;
      if (dropRate <= 0.1) {
        clearInterval(tapeStopInterval);
        audioPlayer.pause();
        audioPlayer.playbackRate = isReverbActive ? 0.85 : 1.0;
      } else {
        try { audioPlayer.playbackRate = dropRate; } catch(e){}
      }
    }, 20);
  } else {
    playIcon.className = "fas fa-pause-circle";
    albumCover.classList.add("playing");
    isPlaying = true;
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "playing";

    // Turntable Wind Up
    try { audioPlayer.playbackRate = 0.1; } catch(e){}
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(e => console.log("Playback prevented:", e));
    }
    const targetRate = isReverbActive ? 0.85 : 1.0;
    tapeStartInterval = setInterval(() => {
      let newRate = audioPlayer.playbackRate + 0.06;
      if (newRate >= targetRate) {
        clearInterval(tapeStartInterval);
        audioPlayer.playbackRate = targetRate;
      } else {
        try { audioPlayer.playbackRate = newRate; } catch(e){}
      }
    }, 20);
  }
});

let isFading = false;
function crossfadeToSong(songIndex) {
  if (isFading) return; // Prevent double clicking bugs
  
  // If nothing is playing, just play immediately without fading
  if (currentSongIndex === -1 || !isPlaying) {
    playSong(songDatabase[songIndex]);
    return;
  }
  
  isFading = true;
  const userTargetVolume = parseFloat(volumeBar.value) || 1;
  let currentFadeVol = userTargetVolume; // Track virtually to fix iOS read-only volume loop bug
  
  // To prevent mobile browser autoplay blocks, we MUST play the new song synchronously!
  // We instantly switch tracks and just perform a smooth fade-in.
  try { audioPlayer.volume = 0; } catch(e){}
  currentFadeVol = 0;
  playSong(songDatabase[songIndex]); // Synchronous play bypasses autoplay restrictions
  
  // Smooth 500ms fade in
  let fadeInInterval = setInterval(() => {
    if (currentFadeVol < userTargetVolume - 0.1) {
      currentFadeVol += 0.1;
      try { audioPlayer.volume = Math.min(userTargetVolume, currentFadeVol); } catch(e){}
    } else {
      try { audioPlayer.volume = userTargetVolume; } catch(e){} // Restore exact user volume
      clearInterval(fadeInInterval);
      isFading = false;
    }
  }, 50);
}

function playNextTrack() {
  if (currentSongIndex === -1) return;
  
  if (isShuffle) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songDatabase.length);
    } while (randomIndex === currentSongIndex && songDatabase.length > 1);
    crossfadeToSong(randomIndex);
  } else {
    let nextIndex = (currentSongIndex + 1) % songDatabase.length;
    crossfadeToSong(nextIndex);
  }
}

function playPrevTrack() {
  if (currentSongIndex === -1) return;
  let prevIndex = (currentSongIndex - 1 + songDatabase.length) % songDatabase.length;
  crossfadeToSong(prevIndex);
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

// Sync lock screen progress bar
function updatePositionState() {
  if ('mediaSession' in navigator && !isNaN(audioPlayer.duration)) {
    try {
      navigator.mediaSession.setPositionState({
        duration: audioPlayer.duration,
        playbackRate: audioPlayer.playbackRate,
        position: Math.min(Math.max(0, audioPlayer.currentTime), audioPlayer.duration)
      });
    } catch(e) {}
  }
}
audioPlayer.addEventListener('loadedmetadata', updatePositionState);

// Scrub through song by clicking the bar
progressBar.addEventListener("input", (e) => {
  const scrubTime = (e.target.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = scrubTime;
});
progressBar.addEventListener("change", updatePositionState);

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

// --- SLEEP TIMER LOGIC ---
let sleepTimerMinutes = 0;
let sleepTimerTimeout = null;
let sleepTimerCountdown = null;

sleepTimerBtn.addEventListener("click", () => {
  // Cycle: Off (0) -> 15 -> 30 -> 60 -> Off (0)
  if (sleepTimerMinutes === 0) sleepTimerMinutes = 15;
  else if (sleepTimerMinutes === 15) sleepTimerMinutes = 30;
  else if (sleepTimerMinutes === 30) sleepTimerMinutes = 60;
  else sleepTimerMinutes = 0;

  clearTimeout(sleepTimerTimeout);
  clearInterval(sleepTimerCountdown);

  if (sleepTimerMinutes === 0) {
    sleepTimerBtn.classList.remove("active");
    sleepTimerDisplay.style.display = "none";
  } else {
    sleepTimerBtn.classList.add("active");
    sleepTimerDisplay.style.display = "inline-block";
    
    let remainingSeconds = sleepTimerMinutes * 60;
    
    sleepTimerCountdown = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds <= 0) clearInterval(sleepTimerCountdown);
      
      const m = Math.floor(remainingSeconds / 60);
      const s = remainingSeconds % 60;
      sleepTimerDisplay.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
      
      // Fade out audio volume smoothly during the last 10 seconds
      if (remainingSeconds <= 10 && remainingSeconds > 0 && isPlaying) {
        audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
        volumeBar.value = audioPlayer.volume;
        volumeBar.style.background = `linear-gradient(to right, var(--primary-color) ${audioPlayer.volume * 100}%, rgba(255, 255, 255, 0.2) ${audioPlayer.volume * 100}%)`;
      }
    }, 1000);

    sleepTimerTimeout = setTimeout(() => {
      if (isPlaying) playPauseBtn.click(); // Gracefully pauses the player
      sleepTimerBtn.click(); // Resets the timer visually to Off
    }, sleepTimerMinutes * 60 * 1000);
  }
});

// Initialize the app
updateLibraryDropdown();
filterAndRender();

// 7. Floating Background Shapes Animation (Flowers, Seashells, Hearts)
let currentShapeIndex = parseInt(localStorage.getItem("pariShapePreference")) || 0;

function createFloatingShapes() {
  
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

  const seashellSVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,85 C30,85 15,65 15,45 C15,25 35,15 50,15 C65,15 85,25 85,45 C85,65 70,85 50,85 Z" fill="#fff0f5" stroke="#ffb6c1" stroke-width="2"/>
    <path d="M50,85 Q40,50 25,35" stroke="#ffb6c1" stroke-width="2" fill="none"/>
    <path d="M50,85 Q45,45 40,20" stroke="#ffb6c1" stroke-width="2" fill="none"/>
    <path d="M50,85 L50,15" stroke="#ffb6c1" stroke-width="2" fill="none"/>
    <path d="M50,85 Q55,45 60,20" stroke="#ffb6c1" stroke-width="2" fill="none"/>
    <path d="M50,85 Q60,50 75,35" stroke="#ffb6c1" stroke-width="2" fill="none"/>
    <path d="M40,85 L60,85 C65,95 35,95 40,85 Z" fill="#ffb6c1"/>
  </svg>`;

  const heartSVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,85 C20,55 10,40 10,25 C10,10 25,5 35,5 C45,5 50,15 50,15 C50,15 55,5 65,5 C75,5 90,10 90,25 C90,40 80,55 50,85 Z" fill="#ff4d6d" opacity="0.8"/>
  </svg>`;

  const shapes = [plumeriaSVG, seashellSVG, heartSVG];
  const activeShape = shapes[currentShapeIndex % shapes.length];

  // If the shapes already exist, just safely swap their SVGs without restarting the animation to prevent freezing!
  const existingFlowers = document.querySelectorAll(".flower");
  if (existingFlowers.length > 0) {
    existingFlowers.forEach(flower => {
      flower.innerHTML = activeShape;
    });
    return;
  }

  // Otherwise, create the container and shapes for the very first time
  const newContainer = document.createElement("div");
  newContainer.className = "flower-container";
  document.body.appendChild(newContainer);

  for (let i = 0; i < 20; i++) {
    const shape = document.createElement("div");
    shape.className = "flower"; // Keeping the class name as "flower" so it dynamically syncs with the Audio beat!
    shape.innerHTML = activeShape;
    
    // Randomize positions and animations
    shape.style.left = Math.random() * 100 + "vw";
    shape.style.animationDuration = (Math.random() * 10 + 10) + "s"; // 10s to 20s
    shape.style.animationDelay = "-" + (Math.random() * 20) + "s"; // Negative delay spawns them instantly!
    
    newContainer.appendChild(shape);
  }
}
createFloatingShapes();

if (shapeToggleBtn) {
  shapeToggleBtn.addEventListener("click", () => {
    currentShapeIndex = (currentShapeIndex + 1) % 3; // Cycles: 0 -> 1 -> 2 -> 0
    localStorage.setItem("pariShapePreference", currentShapeIndex);
    createFloatingShapes();
  });
}

// 8. Login Auth & Startup Screen Animation Logic
const loginScreen = document.getElementById("loginScreen");
const startupScreen = document.getElementById("startupScreen");
const loginError = document.getElementById("loginError");
const loginSuccess = document.getElementById("loginSuccess");
const loginOptionsContainer = document.getElementById("loginOptionsContainer");
const loginOptions = loginOptionsContainer ? loginOptionsContainer.querySelectorAll(".login-option-btn") : [];

function playStartupAnimation() {
  setTimeout(() => {
    if (startupScreen) {
      startupScreen.style.opacity = '0';
      setTimeout(() => startupScreen.remove(), 800); // Wait for transition to finish
    }
  }, 1800); // Show startup screen for 1.8 seconds
}

// Check if she already correctly answered this on her device before
if (localStorage.getItem("pariSpotifyUnlocked") === "true") {
  if (loginScreen) loginScreen.remove();
  if (document.readyState === "complete" || document.readyState === "interactive") {
    playStartupAnimation();
  } else {
    window.addEventListener('load', playStartupAnimation);
  }
} else {
  // Shuffle the options so they are in a random order every time
  if (loginOptionsContainer) {
    const optionsArray = Array.from(loginOptions);
    optionsArray.sort(() => Math.random() - 0.5);
    optionsArray.forEach(option => loginOptionsContainer.appendChild(option));
  }

  loginOptions.forEach(button => {
    button.addEventListener("click", function() {
      const isCorrect = this.getAttribute("data-correct") === "true";
      if (isCorrect) {
        loginError.style.display = 'none';
        if (loginSuccess) loginSuccess.style.display = 'block';
        localStorage.setItem("pariSpotifyUnlocked", "true");
        
        // Wait 1.5 seconds so she can read the message before unlocking
        setTimeout(() => {
          loginScreen.style.opacity = '0';
          setTimeout(() => {
            loginScreen.remove();
            playStartupAnimation(); // Trigger startup after login
          }, 500);
        }, 1500);
      } else {
        loginError.style.display = 'block';
      }
    });
  });
}

// 9.5 3D Parallax Polaroid Hover Effect
if (polaroidContainer) {
  polaroidContainer.addEventListener('mousemove', (e) => {
    if (!polaroidContainer.classList.contains('visible')) return;
    const rect = polaroidContainer.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    polaroidContainer.style.transform = `translateY(0) translateX(0) perspective(600px) rotateX(${-y/4}deg) rotateY(${x/4}deg) scale(1.15)`;
  });
  polaroidContainer.addEventListener('mouseleave', () => {
    if (polaroidContainer.classList.contains('visible')) polaroidContainer.style.transform = '';
  });
}

// Lock App Functionality
const lockAppBtn = document.getElementById("lockAppBtn");
if (lockAppBtn) {
  lockAppBtn.addEventListener("click", () => {
    localStorage.removeItem("pariSpotifyUnlocked");
    location.reload();
  });
}

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

// 10. Keyboard Shortcuts (Space, Arrows)
document.addEventListener('keydown', (e) => {
  // Don't trigger if the user is typing in the search bar
  if (document.activeElement === searchInput) return;
  
  // Map keys to actions
  switch(e.code) {
    case 'Space':
      e.preventDefault(); // Prevent page from scrolling down
      playPauseBtn.click();
      break;
    case 'ArrowRight':
      e.preventDefault();
      playNextTrack();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      playPrevTrack();
      break;
    case 'ArrowUp':
      e.preventDefault();
      audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
      volumeBar.value = audioPlayer.volume;
      volumeBar.dispatchEvent(new Event('input'));
      break;
    case 'ArrowDown':
      e.preventDefault();
      audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
      volumeBar.value = audioPlayer.volume;
      volumeBar.dispatchEvent(new Event('input'));
      break;
  }
});

// 11. Progressive Web App (PWA) Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => {
        console.log('ServiceWorker registered successfully!');
        
        // Auto-refresh the page if a new update is pushed to Vercel/GitHub
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              window.location.reload();
            }
          });
        });
      })
      .catch(err => console.log('ServiceWorker failed:', err));
  });
}

// 12. Custom Playlist Management Logic
const playlistModal = document.getElementById("playlistModal");
const playlistModalOptions = document.getElementById("playlistModalOptions");
const closePlaylistModal = document.getElementById("closePlaylistModal");
const createPlaylistBtn = document.getElementById("createPlaylistBtn");
let songToAdd = null;

function openPlaylistModal(song) {
  songToAdd = song;
  playlistModalOptions.innerHTML = "";
  
  // Option to create a new playlist directly from the modal
  const createNewBtn = document.createElement("button");
  createNewBtn.className = "login-option-btn";
  createNewBtn.innerHTML = '<i class="fas fa-plus"></i> Create New Playlist';
  createNewBtn.onclick = () => {
    const name = prompt("Enter a name for your new playlist:");
    if (name && name.trim() !== "") {
      if (!customPlaylists[name.trim()]) customPlaylists[name.trim()] = [];
      if (!customPlaylists[name.trim()].includes(songToAdd.id)) customPlaylists[name.trim()].push(songToAdd.id);
      savePlaylistsAndClose();
    }
  };
  playlistModalOptions.appendChild(createNewBtn);

  // List existing playlists to add/remove the song
  Object.keys(customPlaylists).forEach(playlistName => {
    const btn = document.createElement("button");
    btn.className = "login-option-btn";
    
    const isInPlaylist = customPlaylists[playlistName].includes(songToAdd.id);
    btn.innerHTML = isInPlaylist ? `<i class="fas fa-check-circle" style="color: var(--primary-color);"></i> ${playlistName}` : playlistName;
    
    btn.onclick = () => {
      if (isInPlaylist) {
        customPlaylists[playlistName] = customPlaylists[playlistName].filter(id => id !== songToAdd.id); // Remove
      } else {
        customPlaylists[playlistName].push(songToAdd.id); // Add
      }
      savePlaylistsAndClose();
    };
    playlistModalOptions.appendChild(btn);
  });

  playlistModal.style.display = "flex";
  setTimeout(() => playlistModal.style.opacity = "1", 10);
}

function savePlaylistsAndClose() {
  localStorage.setItem("customPlaylists", JSON.stringify(customPlaylists));
  updateLibraryDropdown();
  filterAndRender(); // Refresh UI dynamically
  
  playlistModal.style.opacity = "0";
  setTimeout(() => playlistModal.style.display = "none", 500);
}

closePlaylistModal.addEventListener("click", () => {
  playlistModal.style.opacity = "0";
  setTimeout(() => playlistModal.style.display = "none", 500);
});

// Header Button to just create an empty playlist
createPlaylistBtn.addEventListener("click", () => {
  const name = prompt("Enter a name for your new playlist:");
  if (name && name.trim() !== "") {
    if (!customPlaylists[name.trim()]) {
      customPlaylists[name.trim()] = [];
      localStorage.setItem("customPlaylists", JSON.stringify(customPlaylists));
      updateLibraryDropdown();
      librarySelect.value = "playlist_" + name.trim();
      filterAndRender();
    } else {
      alert("A playlist with that name already exists!");
    }
  }
});

// 13. Pro Audio Studio (EQ) Logic
const eqBtn = document.getElementById("eqBtn");
const eqModal = document.getElementById("eqModal");
const closeEqModal = document.getElementById("closeEqModal");
const bassValue = document.getElementById("bassValue");
const trebleValue = document.getElementById("trebleValue");

function formatEqValue(val) {
  return val > 0 ? `+${val} dB` : `${val} dB`;
}

function setupKnob(knobId, valueId, getFilter, min, max, initial) {
  const knob = document.getElementById(knobId);
  const valueDisplay = document.getElementById(valueId);
  if (!knob || !valueDisplay) return;

  let currentValue = initial;
  let isDragging = false;
  let startY = 0;

  function updateKnob(val) {
    const range = max - min;
    const percentage = (val - min) / range;
    // Map to a 270 degree rotation range (-135deg to +135deg)
    const deg = -135 + (percentage * 270);
    knob.style.transform = `rotate(${deg}deg)`;
    valueDisplay.innerText = formatEqValue(val);
    
    const filter = getFilter();
    if (filter) filter.gain.value = val;
  }

  function handleMove(clientY) {
    if (!isDragging) return;
    const deltaY = startY - clientY; // Upward drag is positive
    startY = clientY;
    
    currentValue += deltaY * 0.3; // Adjust sensitivity
    currentValue = Math.max(min, Math.min(max, currentValue));
    updateKnob(Math.round(currentValue));
  }

  // Mouse interactions
  knob.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    document.body.style.userSelect = 'none'; // Prevent accidental text highlighting
  });
  window.addEventListener('mousemove', (e) => handleMove(e.clientY));
  window.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
  });

  // Touch interactions
  knob.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    document.body.style.userSelect = 'none';
  }, { passive: false });
  window.addEventListener('touchmove', (e) => {
    if (isDragging) e.preventDefault(); // Prevent scrolling while adjusting
    handleMove(e.touches[0].clientY);
  }, { passive: false });
  window.addEventListener('touchend', () => {
    isDragging = false;
    document.body.style.userSelect = '';
  });

  updateKnob(currentValue);
}

// Initialize knobs
setupKnob('bassKnob', 'bassValue', () => bassFilter, -10, 15, 0);
setupKnob('trebleKnob', 'trebleValue', () => trebleFilter, -10, 15, 0);

if (eqBtn) {
  eqBtn.addEventListener("click", () => {
    eqModal.style.display = "flex";
    setTimeout(() => eqModal.style.opacity = "1", 10);
  });
  closeEqModal.addEventListener("click", () => {
    eqModal.style.opacity = "0";
    setTimeout(() => eqModal.style.display = "none", 500);
  });
}

// 14. Pari's Wrapped (Stats) Logic
const wrappedBtn = document.getElementById("wrappedBtn");
const wrappedModal = document.getElementById("wrappedModal");
const closeWrappedModal = document.getElementById("closeWrappedModal");
const wrappedStats = document.getElementById("wrappedStats");

if (wrappedBtn) {
  wrappedBtn.addEventListener("click", () => {
    const sortedStats = Object.entries(playStats).sort((a, b) => b[1] - a[1]).slice(0, 5);
    wrappedStats.innerHTML = "";
    if (sortedStats.length === 0) {
      wrappedStats.innerHTML = "<p style='font-weight:normal;'>You haven't listened to any songs yet! Go play some music! 🎵</p>";
    } else {
      sortedStats.forEach(([songId, count], index) => {
        const song = songDatabase.find(s => s.id == songId);
        if (song) {
          wrappedStats.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;">
              <span>#${index + 1} &nbsp; ${song.title}</span>
              <span>${count} plays</span>
            </div>`;
        }
      });
    }
    wrappedModal.style.display = "flex";
    setTimeout(() => wrappedModal.style.opacity = "1", 10);
  });
  closeWrappedModal.addEventListener("click", () => {
    wrappedModal.style.opacity = "0";
    setTimeout(() => wrappedModal.style.display = "none", 500);
  });
}

if (downloadWrappedBtn) {
  downloadWrappedBtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080; canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    
    const grad = ctx.createLinearGradient(0, 0, 1080, 1920);
    grad.addColorStop(0, "#ff4d6d"); grad.addColorStop(1, "#ff8fa3");
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1080, 1920);
    
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.font = "900 200px sans-serif";
    ctx.fillText("🎵", 540, 400);
    
    ctx.fillStyle = "white"; ctx.textAlign = "center";
    ctx.font = "bold 90px sans-serif"; ctx.fillText("Pari's Wrapped", 540, 300);
    ctx.font = "40px sans-serif"; ctx.fillText("Top Played Songs of All Time", 540, 420);
    
    const sortedStats = Object.entries(playStats).sort((a, b) => b[1] - a[1]).slice(0, 5);
    ctx.textAlign = "left";
    sortedStats.forEach(([songId, count], index) => {
      const song = songDatabase.find(s => s.id == songId);
      if (song) {
        ctx.font = "bold 50px sans-serif";
        ctx.fillText(`#${index + 1}  ${song.title}`, 150, 700 + (index * 150));
        ctx.font = "40px sans-serif";
        ctx.fillText(`${count} plays`, 800, 700 + (index * 150));
      }
    });
    
    const link = document.createElement("a");
    link.download = "Paris_Wrapped.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  });
}

// 15. Audio Illusions (8D & Slowed+Reverb) Logic
const toggle8DBtn = document.getElementById("toggle8DBtn");
const toggleReverbBtn = document.getElementById("toggleReverbBtn");
let is8DActive = false;
let isReverbActive = false;
let panAngle = 0;

function orbitAudio() {
  if (is8DActive && pannerNode) {
    panAngle += 0.012; // Orbit Speed
    pannerNode.pan.value = Math.sin(panAngle);
    requestAnimationFrame(orbitAudio);
  } else if (pannerNode) {
    pannerNode.pan.value = 0;
  }
}

if (toggle8DBtn) {
  toggle8DBtn.addEventListener("click", () => {
    is8DActive = !is8DActive;
    toggle8DBtn.innerText = is8DActive ? "On" : "Off";
    toggle8DBtn.style.color = is8DActive ? "var(--bg-color)" : "";
    toggle8DBtn.style.background = is8DActive ? "var(--primary-color)" : "";
    if (is8DActive) orbitAudio();
  });
}

if (toggleReverbBtn) {
  toggleReverbBtn.addEventListener("click", () => {
    isReverbActive = !isReverbActive;
    toggleReverbBtn.innerText = isReverbActive ? "On" : "Off";
    toggleReverbBtn.style.color = isReverbActive ? "var(--bg-color)" : "";
    toggleReverbBtn.style.background = isReverbActive ? "var(--primary-color)" : "";
    
    if (isReverbActive) {
      if (dryGain && wetGain) {
        dryGain.gain.value = 0.5; // Lower dry mix
        wetGain.gain.value = 0.8; // High wet reverb mix
      }
      audioPlayer.playbackRate = 0.85; // Slow down aesthetic
    } else {
      if (dryGain && wetGain) {
        dryGain.gain.value = 1;
        wetGain.gain.value = 0;
      }
      audioPlayer.playbackRate = 1.0;
    }
  });
}

// 15.5 Ambient Lofi Rain Synthesizer
const toggleRainBtn = document.getElementById("toggleRainBtn");
let isRainActive = false;
let rainSource, rainGainNode;

if (toggleRainBtn) {
  toggleRainBtn.addEventListener("click", () => {
    isRainActive = !isRainActive;
    toggleRainBtn.innerText = isRainActive ? "On" : "Off";
    toggleRainBtn.style.color = isRainActive ? "var(--bg-color)" : "";
    toggleRainBtn.style.background = isRainActive ? "var(--primary-color)" : "";

    if (isRainActive && audioCtx) {
      // Generate 2 seconds of pure white noise
      const bufferSize = audioCtx.sampleRate * 2;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      
      rainSource = audioCtx.createBufferSource();
      rainSource.buffer = buffer;
      rainSource.loop = true;
      
      // Muffle the noise so it sounds like cozy rain (Lowpass filter)
      const rainFilter = audioCtx.createBiquadFilter();
      rainFilter.type = "lowpass";
      rainFilter.frequency.value = 800; // Deep rumble
      
      rainGainNode = audioCtx.createGain();
      rainGainNode.gain.value = 0;
      rainGainNode.gain.setTargetAtTime(0.25, audioCtx.currentTime, 1); // Fade in
      
      rainSource.connect(rainFilter).connect(rainGainNode).connect(audioCtx.destination);
      rainSource.start();
    } else if (rainGainNode && rainSource) {
      rainGainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.5); // Fade out
      setTimeout(() => { if (rainSource) rainSource.disconnect(); }, 1000);
    }
  });
}

// 15.6 Vocal Remover (Phase Cancellation Circuit)
const toggleKaraokeBtn = document.getElementById("toggleKaraokeBtn");
let isKaraokeActive = false;

if (toggleKaraokeBtn) {
  toggleKaraokeBtn.addEventListener("click", () => {
    isKaraokeActive = !isKaraokeActive;
    toggleKaraokeBtn.innerText = isKaraokeActive ? "On" : "Off";
    toggleKaraokeBtn.style.color = isKaraokeActive ? "var(--bg-color)" : "";
    toggleKaraokeBtn.style.background = isKaraokeActive ? "var(--primary-color)" : "";

    if (vocalBypass && vocalMix) {
      vocalBypass.gain.value = isKaraokeActive ? 0 : 1;
      vocalMix.gain.value = isKaraokeActive ? 1 : 0;
    }
  });
}

// 15.7 Party Mode Strobe Logic
if (partyBtn) {
  partyBtn.addEventListener("click", () => {
    isPartyMode = !isPartyMode;
    partyBtn.classList.toggle("listening", isPartyMode); // Reuses the pulse heart animation!
  });
}

// 15.8 Zen Karaoke Mode
if (zenModeBtn) {
  zenModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("zen-mode");
    zenModeBtn.classList.toggle("active");
  });
}

// 16. Hands-Free AI Voice Control Logic
const micBtn = document.getElementById("micBtn");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition && micBtn) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';

  micBtn.addEventListener("click", () => {
    try {
      recognition.start();
      micBtn.classList.add("listening");
      searchInput.dataset.orig = searchInput.placeholder;
      searchInput.placeholder = "Listening... 🎤";
    } catch (e) {
      // Prevent crash if already started
    }
  });

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Heard Voice Command:", command);
    
    // Give visual feedback of what was heard
    searchInput.placeholder = `Heard: "${command}"`;
    setTimeout(() => {
      if (!micBtn.classList.contains("listening")) searchInput.placeholder = searchInput.dataset.orig || "Search for a song...";
    }, 2000);

    // Playback Controls
    if (command.includes("next") || command.includes("skip")) playNextTrack();
    else if (command.includes("previous") || command.includes("back")) playPrevTrack();
    else if (command.includes("pause") || command.includes("stop")) { if (isPlaying) playPauseBtn.click(); }
    else if (command.includes("play")) {
      const songName = command.replace(/(play|song|track)/g, "").trim();
      if (!songName && !isPlaying) playPauseBtn.click();
      else if (songName) {
        const found = songDatabase.find(s => s.title.toLowerCase().includes(songName) || songName.includes(s.title.toLowerCase()));
        if (found) crossfadeToSong(songDatabase.findIndex(s => s.id === found.id));
      }
    }
    // Volume Controls
    else if (command.includes("volume up") || command.includes("louder")) {
      audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.2);
      volumeBar.value = audioPlayer.volume;
      volumeBar.dispatchEvent(new Event("input"));
    }
    else if (command.includes("volume down") || command.includes("quieter") || command.includes("softer")) {
      audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.2);
      volumeBar.value = audioPlayer.volume;
      volumeBar.dispatchEvent(new Event("input"));
    }
    else if (command.includes("mute")) {
      if (audioPlayer.volume > 0) muteBtn.click();
    }
    else if (command.includes("unmute")) {
      if (audioPlayer.volume === 0) muteBtn.click();
    }
    // Feature & UI Controls
    else if (command.includes("shuffle")) shuffleBtn.click();
    else if (command.includes("repeat")) repeatBtn.click();
    else if ((command.includes("like") || command.includes("love")) && !command.includes("unlike")) {
      if (currentSongIndex !== -1 && !songDatabase[currentSongIndex].isLiked) loveBtn.click();
    }
    else if (command.includes("unlike")) {
      if (currentSongIndex !== -1 && songDatabase[currentSongIndex].isLiked) loveBtn.click();
    }
    else if (command.includes("party")) partyBtn.click();
    else if (command.includes("zen")) zenModeBtn.click();
    else if (command.includes("rain")) toggleRainBtn.click();
    else if (command.includes("karaoke") || command.includes("vocals")) toggleKaraokeBtn.click();
    else if (command.includes("8d") || command.includes("orbit")) toggle8DBtn.click();
    else if (command.includes("reverb") || command.includes("slowed")) toggleReverbBtn.click();
    else if (command.includes("stats") || command.includes("wrapped")) wrappedBtn.click();
  };

  recognition.onend = () => {
    micBtn.classList.remove("listening");
    searchInput.placeholder = searchInput.dataset.orig || "Search for a song...";
  };
  recognition.onerror = () => {
    micBtn.classList.remove("listening");
    searchInput.placeholder = searchInput.dataset.orig || "Search for a song...";
  };
}

// 17. Custom Album Art Engine (Compression & Storage)
if (coverFileInput) {
  coverFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file || currentSongIndex === -1) {
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        // Auto-Compress to 300x300 so localStorage 5MB limit doesn't break
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 300;
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > MAX_SIZE) { height *= MAX_SIZE / width; width = MAX_SIZE; }
        } else {
          if (height > MAX_SIZE) { width *= MAX_SIZE / height; height = MAX_SIZE; }
        }
        
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
        const songId = songDatabase[currentSongIndex].id;
        
        try {
          customCovers[songId] = compressedBase64;
          localStorage.setItem("pariCustomCovers", JSON.stringify(customCovers));
          albumCover.src = compressedBase64; // Instantly visually update!
          
          if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata.artwork = [{ src: compressedBase64, sizes: '512x512', type: 'image/jpeg' }];
          }
        } catch (err) {
          alert("Your custom art storage is full! Please clear browser data or replace existing covers.");
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    
    // Reset input so the same file can be selected again
    e.target.value = "";
  });
}

// 19. Clear Custom Data (Free up Storage Space)
if (clearDataBtn) {
  clearDataBtn.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to clear all custom data? This will safely delete your imported songs, custom playlists, custom album covers, and polaroid memories to free up space on your device.");
    if (confirmed) {
      // Clear heavy localStorage items
      localStorage.removeItem("likedSongs");
      localStorage.removeItem("customPlaylists");
      localStorage.removeItem("pariPlayStats");
      localStorage.removeItem("pariCustomCovers");
      localStorage.removeItem("pariCustomMemories");
      
      // Clear IndexedDB imported audio files
      if (db) {
        try {
          const transaction = db.transaction(["importedSongs"], "readwrite");
          const store = transaction.objectStore("importedSongs");
          store.clear();
          transaction.oncomplete = () => {
            alert("Custom data cleared successfully! Reloading app...");
            location.reload();
          };
        } catch (err) {
          alert("Custom data cleared! Reloading app...");
          location.reload();
        }
      } else {
        alert("Custom data cleared! Reloading app...");
        location.reload();
      }
    }
  });
}

// 18. Custom Polaroid Memory Engine
if (polaroidFileInput) {
  polaroidFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file || currentSongIndex === -1) {
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        // Auto-Compress to max 400px width so localStorage doesn't overflow
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 400;
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > MAX_SIZE) { height *= MAX_SIZE / width; width = MAX_SIZE; }
        } else {
          if (height > MAX_SIZE) { width *= MAX_SIZE / height; height = MAX_SIZE; }
        }
        
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
        const songId = songDatabase[currentSongIndex].id;
        
        customMemories[songId] = compressedBase64;
        localStorage.setItem("pariCustomMemories", JSON.stringify(customMemories));
        polaroidImage.src = compressedBase64;
        polaroidImage.style.display = "block";
        polaroidContainer.classList.add("visible");
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    
    // Reset input so the same file can be selected again
    e.target.value = "";
  });
}
