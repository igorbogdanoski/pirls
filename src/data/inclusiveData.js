// Puzzle and coloring data — add new story entries here
const inclusiveData = {
  chest: {
    puzzle: [
      { id: 1, img: './chest/Hronoloska Slagalka/1.png', text: "Марко беше тажен што мора да го помине распустот во селото." },
      { id: 2, img: './chest/Hronoloska Slagalka/2.png', text: "Дедо му го замоли да најде еден стар часовник на таванот." },
      { id: 3, img: './chest/Hronoloska Slagalka/3.png', text: "Марко пронајде мал дрвен ковчег со изрезбани цветови." },
      { id: 4, img: './chest/Hronoloska Slagalka/4.png', text: "Внатре имаше само стара фотографија, камче и свирче." },
      { id: 5, img: './chest/Hronoloska Slagalka/5.png', text: "Дедото му објасни дека вистинското богатство се спомените." }
    ],
    coloring: [
      { id: 1, img: './chest/Story board/1.png', text: "Марко седи на тремот и му е досадно." },
      { id: 2, img: './chest/Story board/2.png', text: "Искачување по старите дрвени скали до таванот." },
      { id: 3, img: './chest/Story board/3.png', text: "Темниот таван полн со стари предмети и прашина." },
      { id: 4, img: './chest/Story board/4.png', text: "Марко го отвора дрвениот ковчег." },
      { id: 5, img: './chest/Story board/5.png', text: "Дедото раскажува за своето најголемо богатство." }
    ]
  },
  kaja: {
    puzzle: [
      { id: 1, img: './kaja/Hronoloska Slagalka/1.png', text: "Каја сакаше да биде пронаоѓач и постојано црташе идеи во својата тетратка." },
      { id: 2, img: './kaja/Hronoloska Slagalka/2.png', text: "Нејзиниот голем робот „Чистомат“ се расипа токму пред натпреварот." },
      { id: 3, img: './kaja/Hronoloska Slagalka/3.png', text: "Таа виде како малите врапчиња се мачат да најдат храна во снегот." },
      { id: 4, img: './kaja/Hronoloska Slagalka/4.png', text: "Каја направи едноставна хранилка од пластично шише и дрвени лажици." },
      { id: 5, img: './kaja/Hronoloska Slagalka/5.png', text: "Таа доби специјална награда за пронајдок кој навистина им помага на другите." }
    ],
    coloring: [
      { id: 1, img: './kaja/Story board/1.png', text: "Каја работи во својата соба." },
      { id: 2, img: './kaja/Story board/2.png', text: "Врапчињата на гранката во зима." },
      { id: 3, img: './kaja/Story board/3.png', text: "Каја го сече пластичното шише." },
      { id: 4, img: './kaja/Story board/4.png', text: "Полнење на хранилката со зрна." },
      { id: 5, img: './kaja/Story board/5.png', text: "Среќната Каја со својата диплома." }
    ]
  },
  watchmaker: {
    puzzle: [
      { id: 1, img: './watchmaker/Hronoloska Slagalka/1.png', text: "Стариот часовничар живееше сам во својата тивка работилница." },
      { id: 2, img: './watchmaker/Hronoloska Slagalka/2.png', text: "Еден ден, едно мало куче се појави пред неговата врата." },
      { id: 3, img: './watchmaker/Hronoloska Slagalka/3.png', text: "Часовничарот почна да се грижи за кучето и повеќе не беше осамен." },
      { id: 4, img: './watchmaker/Hronoloska Slagalka/4.png', text: "Тој ги поправаше старите часовници со голема радост." },
      { id: 5, img: './watchmaker/Hronoloska Slagalka/5.png', text: "Животот во работилницата повторно стана весел и исполнет со звук." }
    ],
    coloring: [
      { id: 1, img: './watchmaker/Story board/1.png', text: "Работилница полна со часовници." },
      { id: 2, img: './watchmaker/Story board/2.png', text: "Часовничарот го гали малото куче." },
      { id: 3, img: './watchmaker/Story board/3.png', text: "Кучето си игра меѓу запчаниците." },
      { id: 4, img: './watchmaker/Story board/4.png', text: "Заедничка прошетка во парк." },
      { id: 5, img: './watchmaker/Story board/5.png', text: "Среќниот часовничар и неговиот пријател." }
    ]
  },
  kite: {
    puzzle: [
      { id: 1, img: './kite/Hronoloska Slagalka/1.png', text: "Бојан со денови правеше голем, шарен змеј за летање." },
      { id: 2, img: './kite/Hronoloska Slagalka/2.png', text: "При првиот обид, змејот веднаш падна на земјата." },
      { id: 3, img: './kite/Hronoloska Slagalka/3.png', text: "Бојан беше многу лут и сакаше да се откаже." },
      { id: 4, img: './kite/Hronoloska Slagalka/4.png', text: "Дедо му го научи дека трпението е најважно за успех." },
      { id: 5, img: './kite/Hronoloska Slagalka/5.png', text: "На крајот, змејот полета високо кон синото небо." }
    ],
    coloring: [
      { id: 1, img: './kite/Story board/1.png', text: "Бојан во својата работилница со хартија и лепило." },
      { id: 2, img: './kite/Story board/2.png', text: "Трчање на ливадата со змејот." },
      { id: 3, img: './kite/Story board/3.png', text: "Дедото му покажува како да го врзе конецот." },
      { id: 4, img: './kite/Story board/4.png', text: "Бојан се смее додека змејот се качува." },
      { id: 5, img: './kite/Story board/5.png', text: "Шарениот змеј меѓу облаците." }
    ]
  },
  baba: {
    puzzle: [
      { id: 1, img: './baba gun/Hronoloski slagalki/1 Gemini_Generated_Image_cszl5bcszl5bcszl.png', text: "Баба Гун живееше во мала селска куќичка со трева на покривот." },
      { id: 2, img: './baba gun/Hronoloski slagalki/2 Gemini_Generated_Image_bockdcbockdcbock.png', text: "Докторот ѝ рече дека мора да се пресели во голема зграда во градот." },
      { id: 3, img: './baba gun/Hronoloski slagalki/3 Gemini_Generated_Image_xfis2zxfis2zxfis.png', text: "Баба Гун тајно си ги донесе кокошките во својот нов стан." },
      { id: 4, img: './baba gun/Hronoloski slagalki/4 Gemini_Generated_Image_5gfp4t5gfp4t5gfp.png', text: "Таа си направи прекрасна градина на својот балкон." },
      { id: 5, img: './baba gun/Hronoloski slagalki/5 Gemini_Generated_Image_c4v4yfc4v4yfc4v4.png', text: "Сега баба Гун е среќна, но се прашува како да ја качи кравата во лифтот!" }
    ],
    coloring: [
      { id: 1, img: './baba gun/Story board and colorin book/1 Gemini_Generated_Image_puhov0puhov0puho.png', text: "Баба Гун со нејзините животни пред куќичката во село." },
      { id: 2, img: './baba gun/Story board and colorin book/2 Gemini_Generated_Image_6qunt16qunt16qun.png', text: "Докторот ѝ рече да се пресели — баба Гун ги пакува своите работи." },
      { id: 3, img: './baba gun/Story board and colorin book/3 Gemini_Generated_Image_el9wb5el9wb5el9w.png', text: "Баба Гун го разгледува новиот стан и балконот со поглед на градот." },
      { id: 4, img: './baba gun/Story board and colorin book/4 Gemini_Generated_Image_rtzmsartzmsartzm.png', text: "Баба Гун тајно ги качува кокошките по скалите во зградата." },
      { id: 5, img: './baba gun/Story board and colorin book/5 Gemini_Generated_Image_qikdraqikdraqikd.png', text: "Баба Гун сади трева и цвеќиња на балконот — исто како во село!" },
      { id: 6, img: './baba gun/Story board and colorin book/6 Gemini_Generated_Image_up56l0up56l0up56.png', text: "Кравата влезе во лифтот — баба Гун не знае што да прави!" }
    ]
  },
  octopus: {
    puzzle: [
      { id: 1, img: './Prekrasnot oktopod/Hronoloska Slagalka/1 Gemini_Generated_Image_e2gucde2gucde2gu.png', text: "Октоподот е мајстор за криење и живее на дното на океанот.", textSq: "Oktapodi jeton vetëm në guvat e shkëmbinjve dhe ka trup të butë pa kocka me tetë krahë." },
      { id: 2, img: './Prekrasnot oktopod/Hronoloska Slagalka/2 Gemini_Generated_Image_bvd378bvd378bvd3.png', text: "Кога е во опасност, тој испушта темен облак од мастило.", textSq: "Kur rrezikohet, oktapodi noton me shpejtësi dhe lëshon një re boje të errët për t'u larguar." },
      { id: 3, img: './Prekrasnot oktopod/Hronoloska Slagalka/3 Gemini_Generated_Image_vcoaodvcoaodvcoa.png', text: "Октоподите се многу паметни и можат да отвораат тегли.", textSq: "Oktapodët janë shumë të zgjuar dhe mësojnë të hapin kavanoza — si Frida në akuarium." },
      { id: 4, img: './Prekrasnot oktopod/Hronoloska Slagalka/4 Gemini_Generated_Image_8jp0qq8jp0qq8jp0.png', text: "Во аквариумите, тие сакаат да си играат со пластични топки.", textSq: "Për të mos u mërzitur, oktapodët luajnë me lodra dhe pazëlla si topi i Semi-t." },
      { id: 5, img: './Prekrasnot oktopod/Hronoloska Slagalka/5 Gemini_Generated_Image_x8oyr4x8oyr4x8oy.png', text: "Октоподите се многу пријателски расположени кон своите чувари.", textSq: "Oktapodët lidhen emocionalisht me kujdestarët e tyre — marrin ngjyrë të kuqe nga gëzimi dhe i përqafojnë." },
      { id: 6, img: './Prekrasnot oktopod/Hronoloska Slagalka/6.png', text: "Кога е во опасност, октоподот испушта облак темно мастило за да ги збуни напаѓачите.", textSq: "Kur rrezikohet, oktapodi noton shpejt dhe lëshon një re boje të errët për të hutuar grabitqarët." },
      { id: 7, img: './Prekrasnot oktopod/Hronoloska Slagalka/7.png', text: "Октоподот Сквирт научил да слика поместувајќи лостови кои прскаат боја на платно.", textSq: "Disa oktapodë, si Skirti, madje mund të mësojnë të \"pikturojnë\" duke lëvizur levat me bojë." },
      { id: 8, img: './Prekrasnot oktopod/Hronoloska Slagalka/8.png', text: "За да не им здодее, октоподите си играат со играчки и сложувалки — Семи ужива со пластична топка.", textSq: "Për të mos u mërzitur, ata luajnë me lodra si topi i Semi-t që ndahet në dy pjesë." }
    ],
    coloring: [
      { id: 1, img: './Prekrasnot oktopod/Story board and colorin book/1 Gemini_Generated_Image_v7t8k3v7t8k3v7t8.png', text: "Октопод со осум долги пипала живее на дното на океанот.", textSq: "Oktapod me tetë krahë të gjatë duke notuar në fund të oqeanit pranë strofullës." },
      { id: 2, img: './Prekrasnot oktopod/Story board and colorin book/2 Gemini_Generated_Image_f1t7o0f1t7o0f1t7.png', text: "Бегство со помош на темен облак мастило.", textSq: "Reja e errët e bojës — mbrojtja e shpejtë e oktapodit nga rreziku." },
      { id: 3, img: './Prekrasnot oktopod/Story board and colorin book/3 Gemini_Generated_Image_z78pizz78pizz78p.png', text: "Октоподот мајсторски се крие зад карпите — тоа е неговата суперсила!", textSq: "Oktapodi fshihet pas shkëmbinjve — maskimi është superfuqia e tij!" },
      { id: 4, img: './Prekrasnot oktopod/Story board and colorin book/4 Gemini_Generated_Image_opk6mxopk6mxopk6.png', text: "Паметниот октопод Фрида отвора тегла во аквариумот.", textSq: "Oktapodi i zgjuar Frida hap kavanozin me ushqim në akuarium." },
      { id: 5, img: './Prekrasnot oktopod/Story board and colorin book/5 Gemini_Generated_Image_h4xz8lh4xz8lh4xz.png', text: "Различни видови октоподи си играат со украсни топки.", textSq: "Llojet e ndryshme të oktapodëve duke luajtur me topa zbukurimi." },
      { id: 6, img: './Prekrasnot oktopod/Story board and colorin book/6 Gemini_Generated_Image_jad20zjad20zjad2.png', text: "Поздравување со чуварот на аквариумот — октоподот е пријателски!", textSq: "Përshëndetje me kujdestarin — oktapodi është miqësor dhe i lumtur!" }
    ]
  },
  lynx: {
    puzzle: [
      { id: 1, img: './lynx/Hronoloska Slagalka/1.png', text: "Балканскиот рис е ретко и загрозено животно." },
      { id: 2, img: './lynx/Hronoloska Slagalka/2.png', text: "Научниците користат камери за да ги набљудуваат рисовите." },
      { id: 3, img: './lynx/Hronoloska Slagalka/3.png', text: "Рисовите се движат тивко низ густата шума." },
      { id: 4, img: './lynx/Hronoloska Slagalka/4.png', text: "Тие имаат карактеристични реси на ушите." },
      { id: 5, img: './lynx/Hronoloska Slagalka/5.png', text: "Мораме да ја заштитиме природата за рисовите да преживеат." }
    ],
    coloring: [
      { id: 1, img: './lynx/Story board/1.png', text: "Рис како седи на карпа." },
      { id: 2, img: './lynx/Story board/2.png', text: "Поставување на фото-замка." },
      { id: 3, img: './lynx/Story board/3.png', text: "Шумата во зима." },
      { id: 4, img: './lynx/Story board/4.png', text: "Малите рисчиња си играат." },
      { id: 5, img: './lynx/Story board/5.png', text: "Рисот во движење." }
    ]
  },
  shovel: {
    puzzle: [
      { id: 1, img: './shovel/Hronoloska Slagalka/1.png', text: "Чичкото со лопатата секој ден работеше во својата градина." },
      { id: 2, img: './shovel/Hronoloska Slagalka/2.png', text: "Тој најде нешто необично додека копаше." },
      { id: 3, img: './shovel/Hronoloska Slagalka/3.png', text: "Сите соседи дојдоа да видат што се случува." },
      { id: 4, img: './shovel/Hronoloska Slagalka/4.png', text: "Откритието беше изненадување за целото село." },
      { id: 5, img: './shovel/Hronoloska Slagalka/5.png', text: "Градината стана место на голема авантура." }
    ],
    coloring: [
      { id: 1, img: './shovel/Story board/1.png', text: "Копање во градината." },
      { id: 2, img: './shovel/Story board/2.png', text: "Лопатата и земјата." },
      { id: 3, img: './shovel/Story board/3.png', text: "Изненадено лице на чичкото." },
      { id: 4, img: './shovel/Story board/4.png', text: "Соседите се собираат." },
      { id: 5, img: './shovel/Story board/5.png', text: "Зелената градина." }
    ]
  },
  rabbit: {
    puzzle: [
      { id: 1, img: './rabbit/Hronoloska Slagalka/1.png', text: "Зајакот уживаше во мирното попладне во шумата.", textSq: "Lepuri që çdo herë brengosej për diçka, më së tepërmi frikësohej se një ditë do të ketë tërmet." },
      { id: 2, img: './rabbit/Hronoloska Slagalka/2.png', text: "Одеднаш, земјата почна силно да се тресе.", textSq: "Një frut i madh ra nga druri me zhurmë dhe lepuri bërtiti: “Tërmet!”" },
      { id: 3, img: './rabbit/Hronoloska Slagalka/3.png', text: "Сите животни беа исплашени од земјотресот.", textSq: "Mijëra lepuj vraponin shpejt në panik drejt pikës më të lartë të malit." },
      { id: 4, img: './rabbit/Hronoloska Slagalka/4.png', text: "Зајакот им помогна на своите пријатели да се сокријат.", textSq: "Luani i mençur i ndaloi lepujt dhe pyeti: “Kush e pa tërmetin?”" },
      { id: 5, img: './rabbit/Hronoloska Slagalka/5.png', text: "Кога тресењето престана, во шумата повторно беше безбедно.", textSq: "Luani dhe lepuri zbritën bashkë nga mali për të gjetur vendin e zhurmës." },
      { id: 6, img: '', text: "", textSq: "Luani hodhi frutin për tokë (BAM!) dhe lepuri kuptoi se nuk kishte pasur tërmet." },
      { id: 7, img: '', text: "", textSq: "Luani u tregoi të gjithë lepujve se tani çdo gjë është në rregull dhe mund të kthehen në shtëpi." }
    ],
    coloring: [
      { id: 1, img: './rabbit/Story board/1.png', text: "Зајакот јаде моркови.", textSq: "Lepuri i vogël i frikësuar duke kërcyer kur bie fruti i madh." },
      { id: 2, img: './rabbit/Story board/2.png', text: "Дрвјата што се нишаат.", textSq: "Turmë e madhe lepujsh duke vrapuar në panik drejt malit." },
      { id: 3, img: './rabbit/Story board/3.png', text: "Животните во паника.", textSq: "Luani i qetë dhe madhështor duke biseduar me lepurin e parë." },
      { id: 4, img: './rabbit/Story board/4.png', text: "Зајакот ги води другите во дувлото.", textSq: "Luani duke qeshur pranë frutit, ndërsa lepuri ndjehet i lehtësuar." }
    ]
  },
  puffins: {
    puzzle: [
      { id: 1, img: './puffins/Hronoloska Slagalka/1.png', text: "Морските папагалчиња живеат на високите карпи покрај морето.", textSq: "Çdo vit, papagajtë e detit kthehen nga oqeani në ishullin Hajmaji për të bërë vezët e tyre." },
      { id: 2, img: './puffins/Hronoloska Slagalka/2.png', text: "Тие со своите шарени клунови ловат мали риби.", textSq: "Pasi zogjtë çelin nga vezët, prindërit gjuajnë dhe u sjellin atyre peshq të vegjël për t'i ushqyer." },
      { id: 3, img: './puffins/Hronoloska Slagalka/3.png', text: "Секоја година, тие се враќаат во истите гнезда.", textSq: "Kur lulet çelin plotësisht, fëmijët e dinë se ka ardhur koha që zogjtë të provojnë fluturimin." },
      { id: 4, img: './puffins/Hronoloska Slagalka/4.png', text: "Малите папагалчиња учат како да пливаат и да летаат.", textSq: "Gjatë natës, zogjtë nisen drejt detit, por disa hutohen nga dritat e fshatit dhe bien në rrugë." },
      { id: 5, img: './puffins/Hronoloska Slagalka/5.png', text: "Ноќите на карпите се полни со звук на ветерот и морето.", textSq: "Hana dhe shokët e saj i kërkojnë zogjtë e humbur me llamba dhe i vendosin në kuti kartoni." },
      { id: 6, img: '', text: "", textSq: "Fëmijët i mbajnë zogjtë të sigurt në shtëpi gjatë natës për t'i mbrojtur nga macet dhe makinat." },
      { id: 7, img: '', text: "", textSq: "Të nesërmen në mëngjes, fëmijët i dërgojnë zogjtë në plazh dhe i lirojnë të fluturojnë drejt oqeanit." }
    ],
    coloring: [
      { id: 1, img: './puffins/Story board/1.png', text: "Папагалче со шарен клун.", textSq: "Hana duke shikuar papagajtë e detit që kthehen në ishull." },
      { id: 2, img: './puffins/Story board/2.png', text: "Летот над океанот.", textSq: "Zogu i ri i papagallit të detit i hutuar nga dritat e fshatit." },
      { id: 3, img: './puffins/Story board/3.png', text: "Гнезда во пукнатините на карпите.", textSq: "Hana duke shpëtuar një zog të humbur me kuti kartoni." },
      { id: 4, img: './puffins/Story board/4.png', text: "Пливање во брановите.", textSq: "Hana duke lëshuar zogjtë e shpëtuar drejt oqeanit në plazh." }
    ]
  },
  eagle: {
    puzzle: [
      { id: 1, img: './eagle/Hronoloska Slagalka/1.png', text: "Малото орле беше пронајдено во шумата и одгледано со кокошките.", textSq: "Fermeri shkoi në luginë dhe kërkoi për viçin e humbur buzë shtratit të lumit, prapa shkëmbinjve pas një stuhie të tmerrshme." },
      { id: 2, img: './eagle/Hronoloska Slagalka/2.png', text: "Орлето мислеше дека е обична кокошка и не пробуваше да лета.", textSq: "Fermeri gjen shqiponjën e vogël në parvazin e shkëmbit." },
      { id: 3, img: './eagle/Hronoloska Slagalka/3.png', text: "Еден човек дојде и реши да му покаже на орлето дека е крал на птиците.", textSq: "Shqiponja jeton, rritet dhe ushqehet si pulë në fermë." },
      { id: 4, img: './eagle/Hronoloska Slagalka/4.png', text: "По неколку обиди, орлето ги рашири крилјата кон сонцето.", textSq: "Miku e ngre shqiponjën lart, por ajo kthehet tek pulat." },
      { id: 5, img: './eagle/Hronoloska Slagalka/5.png', text: "На крајот, орлето полета високо и никогаш не се врати.", textSq: "Miku vjen në errësirë dhe zgjon fermerin për një përpjekje të dytë." },
      { id: 6, img: '', text: "", textSq: "Të dy burrat ngjiten në mal në errësirë bashkë me shqiponjën e fjetur." },
      { id: 7, img: '', text: "", textSq: "Në agim, me lindjen e diellit, shqiponja e kupton natyrën e saj dhe fluturon." }
    ],
    coloring: [
      { id: 1, img: './eagle/Story board/1.png', text: "Орлето меѓу кокошките во дворот.", textSq: "Fermeri duke gjetur zogthin në shkëmb." },
      { id: 2, img: './eagle/Story board/2.png', text: "Човекот го држи орлето на рака.", textSq: "Shqiponja e madhe duke jetuar mes pulave." },
      { id: 3, img: './eagle/Story board/3.png', text: "Гледање кон планините.", textSq: "Fermeri dhe miku duke u ngjitur në mal." },
      { id: 4, img: './eagle/Story board/4.png', text: "Првиот замав со крилјата.", textSq: "Shqiponja duke fluturuar lart drejt diellit." }
    ]
  },
  pita: {
    puzzle: [
      { id: 1, img: './pita/Hronoloska Slagalka/1.png', text: "Баба Милка реши да направи најубава пита со јаболка.", textSq: "Jeremy u transferua në lagje dhe bëri një aheng ku nuk e ftoi Tomin, duke u bërë kështu armiku i tij numër një." },
      { id: 2, img: './pita/Hronoloska Slagalka/2.png', text: "Мирисот на питата се прошири низ целата улица.", textSq: "Babai i Tomit i tregon atij për recetën sekrete të 'Tortës për armikun'." },
      { id: 3, img: './pita/Hronoloska Slagalka/3.png', text: "Таа реши да му однесе парче на својот намуртен сосед.", textSq: "Babai pjek një tortë që ka erë shumë të mirë, ndërsa Tomi mendohet se si do të funksionojë ajo." },
      { id: 4, img: './pita/Hronoloska Slagalka/4.png', text: "Соседот се изненади и за прв пат се насмевна.", textSq: "Tomi shkon te Jeremy dhe e fton të luajnë gjatë gjithë ditës për të bërë tortën të funksionojë." },
      { id: 5, img: './pita/Hronoloska Slagalka/5.png', text: "Питата го претвори непријателот во добар пријател.", textSq: "Tomi e ndalon Jeremy-n të hajë tortën në panik, por pastaj zbulon se ajo ishte e sigurt dhe ata bëhen miq." }
    ],
    coloring: [
      { id: 1, img: './pita/Story board/1.png', text: "Месење на тестото.", textSq: "Jeremy bën një festë pa Tomin." },
      { id: 2, img: './pita/Story board/2.png', text: "Јаболка на масата.", textSq: "Babai sjell idenë e 'Tortës për armikun'." },
      { id: 3, img: './pita/Story board/3.png', text: "Печење во рерната.", textSq: "Babai pjek një tortë që ka erë shumë të mirë." },
      { id: 4, img: './pita/Story board/4.png', text: "Носење на питата до соседната врата.", textSq: "Tomi troket në derën e Jeremy-t për ta ftuar të luajnë." },
      { id: 5, img: './pita/Story board/5.png', text: "Заедничко пиење чај со пита.", textSq: "Ata hanë tortën të sigurt dhe bëhen miq të ngushtë." }
    ]
  },
  pot: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_1.png', text: "Одамна во Кина живеело момче по име Пинг кое многу сакало цвеќиња.", textSq: "Perandori plak shpalli se do t'i jepte secilit fëmijë nga një farë dhe kush do të rriste bimën më të mirë, do të bëhej Perandor." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_3.png', text: "Царот им дал на сите деца по едно семе и рекол: „Оној што ќе го одгледа најубавото цвеќе, ќе ме наследи!“", textSq: "Secili fëmijë mori një farë perandorake dhe një mundësi të çmuar për t'u bërë trashëgimtar." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_5.png', text: "Пинг го засадил семето, го наводнувал секој ден, но ништо не никнувало.", textSq: "Xhuni mbolli farën e tij me shumë kujdes, por saksia e tij mbeti e zbrazët." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_7.png', text: "По една година, сите деца донеле прекрасни цвеќиња, освен Пинг кој носел празна саксија.", textSq: "Fëmijët e tjerë sollën lule të bukura, ndërsa Xhuni shkoi në pallat me saksinë bosh." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_12.png', text: "Царот го избрал Пинг за нов владетел затоа што тој бил искрен – сите семиња биле варени!", textSq: "Perandori zbulon se farat ishin zierë dhe i buzëqesh Xhunit për ndershmërinë e tij." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_2.png', text: "Пинг и неговата градина полна со цвеќиња.", textSq: "Xhuni në kopshtin e tij të bukur duke mbjellë me kujdes një farë të vogël." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_4.png', text: "Децата ги добиваат посебните семиња од Царот.", textSq: "Fëmijët marrin farat e çmuara nga Perandori për konkursin e madh." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_6.png', text: "Пинг се грижи за својата саксија со многу љубов и трпение.", textSq: "Xhuni e ujit saksinë e tij çdo ditë duke pritur gjethen e parë." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_8.png', text: "Пинг е тажен затоа што неговото семе не никнува.", textSq: "Xhuni është i trishtuar sepse fara e tij nuk rritet pavarësisht kujdesit." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_10.png', text: "Пинг стои перед Царот со својата празна саксија.", textSq: "Xhuni i tregon Perandorit saksinë e tij të zbrazët me shumë ndershmëri." },
      { id: 6, img: './PDF PIRLS Slidedecks/The_Empty_Pot/The_Empty_Pot_13.png', text: "Пинг станува нов цар поради неговата искреност.", textSq: "Perandori buzëqesh dhe e zgjedh Xhunin për të qenë trashëgimtari i ri." }
    ]
  },
  lambe: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_1.png', text: "Дедо Ламбе живееше во мала куќарка полна со весели глувци.", textSq: "Gjergji ishte një plak 87-vjeçar që jetonte qetë, derisa një ditë minjtë në shtëpinë e tij u shtuan aq shumë saqë nuk mund t'i duronte dot." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_3.png', text: "Глувците беа многу итри и не се фаќаа во стапиците со сирење.", textSq: "Gjergji ngjit kurthet me djathë në tavan." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_5.png', text: "Дедо Ламбе го залепи целиот мебел наопаку за таванот.", textSq: "Natën e parë, minjtë dolën nga vrimat, panë kurthet në tavan dhe filluan të qeshnin zëshëm me plakun duke bërë shaka." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_7.png', text: "Глувците мислеа дека стојат на таванот и почнаа да паничат.", textSq: "Gjergji ngjit të gjitha orenditë (karrigen, tavolinën) në tavan." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_10.png', text: "Откако ги надитри, дедо Ламбе ги однесе глувците во шумата.", textSq: "Minjtë shohin orenditë lart, mendojnë se janë përmbys dhe bëjnë panik." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_2.png', text: "Дедо Ламбе ги трпеше глувците кои му прават врева.", textSq: "Plaku Gjergj shqetësohet nga shtimi i minjve." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_4.png', text: "Глувците танцуваат околу стапиците на Ламбе.", textSq: "Minjtë qeshin dhe mendojnë se ai është budalla." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_6.png', text: "Ламбе го лепи телевизорот и килимот за таванот.", textSq: "Gjergji ngjit të gjitha orenditë (karrigen, tavolinën) në tavan." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_8.png', text: "Глувците се обидуваат да стојат на главите за да не паднат.", textSq: "Minjtë shohin orenditë lart, mendojnë se janë përmbys dhe bëjnë panik." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Lambe_Enigma/The_Lambe_Enigma_9.png', text: "Дедо Ламбе ги собира онесвестените глувци од подот.", textSq: "Minjtë qëndrojnë në kokë për t'u drejtuar dhe u bie të fikët." }
    ]
  },
  hiking: {
    puzzle: [
      { id: 1, img: './storyboard/Излет/1. Gemini_Generated_Image_dohdk4dohdk4dohd.png', text: "Првиот чекор е да изберете забавно место и да ја проверите временската прогноза.", textSq: "Hapi 1: Zgjidhni një vend argëtues dhe kontrolloni parashikimin e motit për t'u veshur saktë." },
      { id: 2, img: './storyboard/Излет/2. Gemini_Generated_Image_arh7tsarh7tsarh7.png', text: "Спакувајте го ранецот со најважните работи: вода, храна и прибор за прва помош.", textSq: "Hapi 2: Paketoni çantën me ujë, ushqim, ndihmën e parë dhe çorape shtesë." },
      { id: 3, img: './storyboard/Излет/3. Gemini_Generated_Image_o6ynro6ynro6ynro.png', text: "Кажете му на некој близок каде одите и кога планирате да се вратите.", textSq: "Hapi 3: Tregojini dikujt se ku po shkoni dhe kur prisni të ktheheni — nisuni herët." },
      { id: 4, img: './storyboard/Излет/4. Gemini_Generated_Image_1tvfzi1tvfzi1tvf.png', text: "Користете мапа за да ја изберете најсоодветната патека за вашето пешачење.", textSq: "Hapi 4: Zgjidhni shtegun tuaj duke përdorur hartën e Lookout Hill." },
      { id: 5, img: './storyboard/Излет/5. Gemini_Generated_Image_w6oeyrw6oeyrw6oe.png', text: "Уживајте во природата, носете соодветна облека и одржувајте умерено темпо.", textSq: "Hapi 5: Ecni me ritëm të moderuar dhe shijojini çuditë e natyrës rreth jush." },
      { id: 6, img: './storyboard/Излет/6. Gemini_Generated_Image_5x7tln5x7tln5x7t.png', text: "Бидете внимателни на патеката и секогаш држете безбедно растојание од дивите животни.", textSq: "Hapi 6: Tregohuni të kujdesshëm në shteg — mos u afroni kurrë kafshëve të egra." },
      { id: 7, img: './storyboard/Излет/7. Gemini_Generated_Image_6fb10g6fb10g6fb1.png', text: "Вратете се безбедно дома пред да се стемни и јавете му се на вашиот контакт.", textSq: "Hapi 7: Kthehuni në shtëpi para errësirës dhe njoftoni personin që e keni lajmëruar." }
    ],
    coloring: [
      { id: 1, img: './Пешачење приказна/coloring book/Gemini_Generated_Image_3shq843shq843shq.png', text: "Планирање на авантурата дома.", textSq: "Planifikimi i aventurës në shtëpi." },
      { id: 2, img: './Пешачење приказна/coloring book/Gemini_Generated_Image_b2547tb2547tb254.png', text: "Подготовка на ранецот со опрема.", textSq: "Përgatitja e çantës me pajisje." },
      { id: 3, img: './Пешачење приказна/coloring book/Gemini_Generated_Image_btja5sbtja5sbtja.png', text: "Поздравување и поаѓање на пат.", textSq: "Përshëndetje dhe nisje në rrugë." },
      { id: 4, img: './Пешачење приказна/coloring book/Gemini_Generated_Image_d0wyh8d0wyh8d0wy.png', text: "Проучување на мапата во природа.", textSq: "Studimi i hartës në natyrë." },
      { id: 5, img: './Пешачење приказна/coloring book/Gemini_Generated_Image_eini6teini6teini.png', text: "Пешачење по убавите шумски патеки.", textSq: "Shëtitje në shtigjet e bukura të pyllit." },
      { id: 6, img: './Пешачење приказна/coloring book/Gemini_Generated_Image_inureainureainur.png', text: "Набљудување на дивите животни од далечина.", textSq: "Vëzhgimi i kafshëve të egra nga larg." },
      { id: 7, img: './Пешачење приказна/coloring book/Gemini_Generated_Image_nziin2nziin2nzii.png', text: "Среќно враќање дома на зајдисонце.", textSq: "Kthim i lumtur në shtëpi në perëndim të diellit." }
    ]
  },
  lynx: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_1.png', text: "Балканскиот рис е прекрасна дива мачка која живее во нашите планини." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_3.png', text: "Научниците користат специјални камери за да го следат движењето на рисовите." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_5.png', text: "Рисовите се многу вешти ловци и се движат нешумно низ шумата." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_8.png', text: "Мајката рис се грижи за своите мали рисчиња во скриени дувла." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_12.png', text: "Мораме да ги заштитиме рисовите затоа што се многу ретки и загрозени." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_2.png', text: "Рис со карактеристични реси на ушите." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_4.png', text: "Поставување фото-замка во планината." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_6.png', text: "Рис како демне во снежната шума." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_9.png', text: "Малите рисчиња си играат пред дувлото." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Balkan_Lynx/The_Balkan_Lynx_11.png', text: "Природата каде што живее балканскиот рис." }
    ]
  },
  boat: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_1.png', text: "Малото дрвено бродче беше направено со многу љубов." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_4.png', text: "Тоа храбро заплови низ брановите на големото езеро." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_7.png', text: "Бродчето се сретна со многу нови пријатели во плитакот." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_11.png', text: "Една голема бура за малку ќе го потопеше малото бродче." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_14.png', text: "На крајот, бродчето се врати безбедно кај својот пронаоѓач." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_2.png', text: "Изработка на дрвеното бродче." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_5.png', text: "Бродчето на сред езеро." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_8.png', text: "Средба со водните животни." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_12.png', text: "Борба со силниот ветар." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Brave_Wooden_Boat/The_Brave_Wooden_Boat_15.png', text: "Среќното враќање дома." }
    ]
  },
  dino_first: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_1.png', text: "Одамна, пред милиони години, на Земјата владееле диносаурусите." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_3.png', text: "Првиот диносаурус бил откриен во една длабока пештера." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_6.png', text: "Научниците внимателно ги склопиле сите пронајдени коски." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_9.png', text: "Диносаурусот бил огромен и имал многу остри заби." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_12.png', text: "Денес можеме да ги видиме нивните скелети во големите музеи." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_2.png', text: "Диносауруси во нивната природна средина." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_4.png', text: "Археолошко наоѓалиште." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_7.png', text: "Реконструкција на скелет." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_10.png', text: "Различни видови диносауруси." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_First_Dinosaur/The_First_Dinosaur_11.png', text: "Посета на музеј." }
    ]
  },
  dino_iguanodon: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_1.png', text: "Мери Енинг била позната по своите откритија на фосили." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_3.png', text: "Еден ден таа пронашла необичен заб во карпите покрај морето." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_6.png', text: "Се покажало дека тоа е заб од дотогаш непознатиот Игуанодон." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_9.png', text: "Луѓето биле воодушевени од ова неверојатно пронаоѓалиште." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_14.png', text: "Мери Енинг станала една од најважните жени во науката." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_2.png', text: "Мери Енинг ги истражува карпите." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_4.png', text: "Пронаоѓање на првиот фосил." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_7.png', text: "Цртање на скелетот на Игуанодонот." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_10.png', text: "Изложба во Лондон." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Iguanodon_Discovery/The_Iguanodon_Discovery_15.png', text: "Портрет на Мери Енинг." }
    ]
  },
  star: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_1.png', text: "На небото секоја ноќ светеше една многу посебна ѕвезда." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_4.png', text: "Една вечер, ѕвездата падна право во мирното езеро." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_7.png', text: "Сите животни во шумата се собраа да видат што се случи." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_11.png', text: "Ѕвездата ги претвори сите риби во светлечки суштества." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_14.png', text: "Оттогаш, езерото свети во најубавите бои на виножитото." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_2.png', text: "Ноќното небо над езерото." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_5.png', text: "Падот на ѕвездата." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_8.png', text: "Љубопитните животни." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_12.png', text: "Магичните риби во водата." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_15.png', text: "Светлечкото езеро." }
    ]
  },
  seed: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_1.png', text: "Царот им даде на сите деца по едно магично семе." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_3.png', text: "Пинг многу се трудеше, но неговото семе не никнуваше." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_6.png', text: "Помина една година и дојде денот за избор на наследник." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_10.png', text: "Пинг беше единствениот со празна саксија пред Царот." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_14.png', text: "Царот го награди Пинг затоа што ја кажа вистината." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_2.png', text: "Царот ги дели семињата." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_4.png', text: "Пинг го наводнува своето семе." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_7.png', text: "Децата со прекрасни цвеќиња." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_11.png', text: "Пинг е искрен со Царот." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Seed_of_Truth/The_Seed_of_Truth_15.png', text: "Пинг станува нов цар." }
    ]
  },
  soar: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_1.png', text: "Малото орле беше пронајдено во едно гнездо со кокошки." },
      { id: 2, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_4.png', text: "Тоа мислеше дека е кокошка и не знаеше да лета." },
      { id: 3, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_7.png', text: "Еден стар орел дојде да го научи дека е роден за височините." },
      { id: 4, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_11.png', text: "По многу обиди, орлето конечно ги рашири своите крилја." },
      { id: 5, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_14.png', text: "Сега тоа лета високо над планините, онаму каде што припаѓа." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_2.png', text: "Орлето меѓу кокошките." },
      { id: 2, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_5.png', text: "Првите обиди за летање." },
      { id: 3, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_8.png', text: "Средба со стариот орел." },
      { id: 4, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_12.png', text: "Летање во височините." },
      { id: 5, img: './PDF PIRLS Slidedecks/Born_to_Soar/Born_to_Soar_15.png', text: "Слободен орел на небото." }
    ]
  },
  eagle: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_1.png', text: "Во планината живееше еден орел кој заборавил како да лета.", textSq: "Fermeri shkoi në luginë dhe kërkoi për viçin e humbur buzë shtratit të lumit, prapa shkëmbinjve pas një stuhie të tmerrshme." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_4.png', text: "Еден мудар старец му покажа дека сонцето му ја дава силата.", textSq: "Fermeri gjen shqiponjën e vogël në parvazin e shkëmbit." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_7.png', text: "Орелот полека почна да ја враќа вербата во себе.", textSq: "Shqiponja jeton, rritet dhe ushqehet si pulë në fermë." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_11.png', text: "Тој полета кон сонцето и стана крал на небото.", textSq: "Miku e ngre shqiponjën lart, por ajo kthehet tek pulat." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_14.png', text: "Никогаш не заборавајте дека сте родени за големи нешта.", textSq: "Miku vjen në errësirë dhe zgjon fermerin për një përpjekje të dytë." },
      { id: 6, img: '', text: "", textSq: "Të dy burrat ngjiten në mal në errësirë bashkë me shqiponjën e fjetur." },
      { id: 7, img: '', text: "", textSq: "Në agim, me lindjen e diellit, shqiponja e kupton natyrën e saj dhe fluturon." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_2.png', text: "Орелот на карпата.", textSq: "Fermeri duke gjetur zogthin në shkëmb." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_5.png', text: "Старецот и орелот.", textSq: "Shqiponja e madhe duke jetuar mes pulave." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_8.png', text: "Првиот замав со крилјата.", textSq: "Fermeri dhe miku duke u ngjitur në mal." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Awakened_Eagle/The_Awakened_Eagle_12.png', text: "Лет кон сонцето.", textSq: "Shqiponja duke fluturuar lart drejt diellit." }
    ]
  },
  puffin: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_1.png', text: "Малите морски папагалчиња чекаа да падне ноќта за да полетаат." },
      { id: 2, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_4.png', text: "Тие често се губеа во градот поради светлата од зградите." },
      { id: 3, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_7.png', text: "Децата од градот решија да им помогнат да го најдат морето." },
      { id: 4, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_11.png', text: "Сите заедно ги собираа залутаните папагалчиња во кутии." },
      { id: 5, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_14.png', text: "На крајот, сите безбедно полетаа кон нивниот вистински дом." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_2.png', text: "Папагалчињата на брегот." },
      { id: 2, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_5.png', text: "Светлата на градот." },
      { id: 3, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_8.png', text: "Акција за спасување." },
      { id: 4, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_12.png', text: "Ослободување на птиците." },
      { id: 5, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_13.png', text: "Среќни папагалчиња на море." }
    ]
  },
  chest: {
    puzzle: [
      { id: 1, img: 'Gemini_Generated_Image_svlevhsvlevhsvle.png', text: "Марко седеше на тремот и му беше многу досадно." },
      { id: 2, img: 'Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png', text: "На таванот пронајде мал дрвен ковчег со цвеќиња." },
      { id: 3, img: 'Gemini_Generated_Image_tidjntidjntidjnt.png', text: "Дедо му му ги раскажа приказните за предметите во ковчегот." }
    ],
    coloring: [
      { id: 1, img: 'Gemini_Generated_Image_svlevhsvlevhsvle.png', text: "Марко на тремот." },
      { id: 2, img: 'Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png', text: "Дрвениот ковчег." },
      { id: 3, img: 'Gemini_Generated_Image_tidjntidjntidjnt.png', text: "Среќните спомени." }
    ]
  },
  kaja: {
    puzzle: [
      { id: 1, img: 'Gemini_Generated_Image_pa6gs9pa6gs9pa6g.png', text: "Каја сакаше да направи робот што чисти." },
      { id: 2, img: 'Gemini_Generated_Image_mpue84mpue84mpue.png', text: "Дедото ја утеши Каја кога роботот се расипа." },
      { id: 3, img: 'Gemini_Generated_Image_irdou7irdou7irdo.png', text: "Каја направи паметна хранилка за птиците." }
    ],
    coloring: [
      { id: 1, img: 'Gemini_Generated_Image_pa6gs9pa6gs9pa6g.png', text: "Лабораторијата на Каја." },
      { id: 2, img: 'Gemini_Generated_Image_mpue84mpue84mpue.png', text: "Разговор со дедото." },
      { id: 3, img: 'Gemini_Generated_Image_irdou7irdou7irdo.png', text: "Хранилката за птици." }
    ]
  },
  watchmaker: {
    puzzle: [
      { id: 1, img: 'Gemini_Generated_Image_93tlph93tlph93tl.png', text: "Марко се чувствуваше осамено во новиот град." },
      { id: 2, img: 'Gemini_Generated_Image_4gmp3n4gmp3n4gmp.png', text: "Кучето на часовничарот го повика Марко на помош." },
      { id: 3, img: 'Gemini_Generated_Image_1rt2501rt2501rt2.png', text: "Марко и часовничарот станаа најдобри пријатели." }
    ],
    coloring: [
      { id: 1, img: 'Gemini_Generated_Image_93tlph93tlph93tl.png', text: "Марко пред куќата." },
      { id: 2, img: 'Gemini_Generated_Image_4gmp3n4gmp3n4gmp.png', text: "Средба со кучето." },
      { id: 3, img: 'Gemini_Generated_Image_1rt2501rt2501rt2.png', text: "Работилницата за часовници." }
    ]
  },
  pita: {
    puzzle: [
      { id: 1, img: 'Gemini_Generated_Image_cfaajhcfaajhcfaa.png', text: "Баба и внукот направија вкусна пита." },
      { id: 2, img: 'Gemini_Generated_Image_akd8v0akd8v0akd8.png', text: "Тие ја однесоа питата кај стариот сосед." },
      { id: 3, img: 'Gemini_Generated_Image_mycd13mycd13mycd.png', text: "Заедно уживаа во вечерата и разговорот." },
      { id: 4, img: 'Gemini_Generated_Image_bn489hbn489hbn48.png', text: "Непријателот стана најдобар пријател." }
    ],
    coloring: [
      { id: 1, img: 'Gemini_Generated_Image_cfaajhcfaajhcfaa.png', text: "Готвење во кујната." },
      { id: 2, img: 'Gemini_Generated_Image_akd8v0akd8v0akd8.png', text: "Носење на питата." },
      { id: 3, img: 'Gemini_Generated_Image_mycd13mycd13mycd.png', text: "Вечера кај соседот." },
      { id: 4, img: 'Gemini_Generated_Image_bn489hbn489hbn48.png', text: "Ново пријателство." }
    ]
  },
  shovel: {
    puzzle: [
      { id: 1, img: 'Gemini_Generated_Image_ed1hrfed1hrfed1h.png', text: "Чичкото со лопатата работеше напорно секој ден." },
      { id: 2, img: 'Gemini_Generated_Image_ntjzjxntjzjxntjz.png', text: "Децата му помагаа и се смееја заедно." },
      { id: 3, img: 'Gemini_Generated_Image_gem9rdgem9rdgem9.png', text: "Чичкото им раскажуваше најубави приказни." }
    ],
    coloring: [
      { id: 1, img: 'Gemini_Generated_Image_ed1hrfed1hrfed1h.png', text: "Работа во дворот." },
      { id: 2, img: 'Gemini_Generated_Image_ntjzjxntjzjxntjz.png', text: "Радост и смеа." },
      { id: 3, img: 'Gemini_Generated_Image_gem9rdgem9rdgem9.png', text: "Време за приказни." }
    ]
  },
  kite: {
    puzzle: [
      { id: 1, img: 'Gemini_Generated_Image_ovlkzqovlkzqovlk.png', text: "Змејот беше заплеткан во гранките." },
      { id: 2, img: 'Gemini_Generated_Image_2fxzxn2fxzxn2fxz.png', text: "Децата со многу трпение го поправаа змејот." },
      { id: 3, img: 'Gemini_Generated_Image_22q3ph22q3ph22q3.png', text: "Змејот конечно полета високо на небото." }
    ],
    coloring: [
      { id: 1, img: 'Gemini_Generated_Image_ovlkzqovlkzqovlk.png', text: "Несреќа со змејот." },
      { id: 2, img: 'Gemini_Generated_Image_2fxzxn2fxzxn2fxz.png', text: "Поправка во работилницата." },
      { id: 3, img: 'Gemini_Generated_Image_22q3ph22q3ph22q3.png', text: "Лет кон облаците." }
    ]
  },
  rabbit: {
    puzzle: [
      { id: 1, img: 'Gemini_Generated_Image_j12s9rj12s9rj12s.png', text: "Зајакот многу се исплаши од чудниот звук.", textSq: "Lepuri që çdo herë brengosej për diçka, më së tepërmi frikësohej se një ditë do të ketë tërmet." },
      { id: 2, img: 'Gemini_Generated_Image_nnfx6onnfx6onnfx.png', text: "Лавот го сопре зајакот и го праша зошто бега.", textSq: "Një frut i madh ra nga druri me zhurmë dhe lepuri bërtiti: “Tërmet!”" },
      { id: 3, img: 'Gemini_Generated_Image_1hdc6w1hdc6w1hdc.png', text: "Сите сфатија дека нема страв и се вратија дома.", textSq: "Mijëra lepuj vraponin shpejt në panik drejt pikës më të lartë të malit." }
    ],
    coloring: [
      { id: 1, img: 'Gemini_Generated_Image_j12s9rj12s9rj12s.png', text: "Исплашениот зајак.", textSq: "Lepuri i vogël i frikësuar duke kërcyer kur bie fruti i madh." },
      { id: 2, img: 'Gemini_Generated_Image_nnfx6onnfx6onnfx.png', text: "Кралот лав.", textSq: "Luani i qetë dhe madhështor duke biseduar me lepurin e parë." },
      { id: 3, img: 'Gemini_Generated_Image_1hdc6w1hdc6w1hdc.png', text: "Среќен крај.", textSq: "Luani duke qeshur pranë frutit, ndërsa lepuri ndjehet i lehtësuar." }
    ]
  },
  // FIX: puffins ID uses Patience_Takes_Flight (old ./puffins/... paths didn't exist)
  puffins: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_1.png', text: "Хана го набљудува небото и ги гледа папагалчињата како се враќаат на островот.", textSq: "Hana vrojton qiellin dhe sheh papagajtë që kthehen në ishull." },
      { id: 2, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_3.png', text: "Родителите им носат риби на малите птици длабоко во карпите.", textSq: "Prindërit u sjellin peshq zogjve të vegjël thellë në shkëmbinj." },
      { id: 3, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_5.png', text: "Птиците се збунети од светлата на селото и паѓаат на патот.", textSq: "Zogjtë ngatërrohen nga dritat e fshatit dhe bien në rrugë." },
      { id: 4, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_7.png', text: "Децата бараат со светилки за да ги најдат птиците пред мачките и автомобилите.", textSq: "Fëmijët kërkojnë me llamba që t'i gjejnë zogjtë para maceve dhe veturave." },
      { id: 5, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_9.png', text: "Децата ги чуваат птиците безбедни во картонски кутии во куќите.", textSq: "Fëmijët i mbajnë zogjtë të sigurt në kuti kartoni brenda shtëpive." },
      { id: 6, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_11.png', text: "Следното утро, децата ги пуштаат птиците од плажата.", textSq: "Të nesërmen në mëngjes, fëmijët i lëshojnë zogjtë nga plazhi." },
      { id: 7, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_13.png', text: "Птиците пловат безбедно на отворено море во текот на зимата.", textSq: "Zogjtë lundrojnë të sigurt në det të hapur gjatë dimrit." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_2.png', text: "Хана ги гледа папагалчињата.", textSq: "Hana duke shikuar papagajtë e detit." },
      { id: 2, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_4.png', text: "Родителите ги хранат малите.", textSq: "Prindërit duke ushqyer të vegjlit." },
      { id: 3, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_6.png', text: "Збунетото папагалче во селото.", textSq: "Zogu i hutuar në fshat." },
      { id: 4, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_8.png', text: "Акција за спасување ноќе.", textSq: "Misioni i shpëtimit të natës." },
      { id: 5, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_10.png', text: "Грижа за птиците во домот.", textSq: "Kujdesi për zogjtë në shtëpi." },
      { id: 6, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_12.png', text: "Пуштање на слобода во плажата.", textSq: "Lirimi i shpezëve në plazh." },
      { id: 7, img: './PDF PIRLS Slidedecks/Patience_Takes_Flight/Patience_Takes_Flight_14.png', text: "Среќно пливање во морето.", textSq: "Lundrimi i sigurt në det." }
    ]
  },
  // ADD: lakestar ID — maps to The_Lake_Star folder
  lakestar: {
    puzzle: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_1.png', text: "На небото секоја ноќ светеше една многу посебна ѕвезда." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_3.png', text: "Една вечер, ѕвездата падна право во мирното езеро." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_6.png', text: "Сите животни во шумата се собраа да видат што се случи." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_9.png', text: "Ѕвездата ги претвори сите риби во светлечки суштества." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_12.png', text: "Езерото почна да свети во прекрасни бои на виножитото." },
      { id: 6, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_15.png', text: "Оттогаш, езерото е чудо кое луѓето доаѓаат да го гледаат." }
    ],
    coloring: [
      { id: 1, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_2.png', text: "Ноќното небо над езерото." },
      { id: 2, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_4.png', text: "Падот на ѕвездата." },
      { id: 3, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_7.png', text: "Животните се собираат на брегот." },
      { id: 4, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_10.png', text: "Магичните светлечки риби." },
      { id: 5, img: './PDF PIRLS Slidedecks/The_Lake_Star/The_Lake_Star_13.png', text: "Светлечкото езеро." }
    ]
  },
  fossil: {
    puzzle: [
      { id: 1, img: './Заб приказна/хронолоска слагалка/1. Gemini_Generated_Image_1y5z5e1y5z5e1y5z.png', text: "Луѓето наоѓале огромни фосили во карпите и не знаеле что се тие." },
      { id: 2, img: './Заб приказна/хронолоска слагалка/2. Gemini_Generated_Image_mo45g6mo45g6mo45.png', text: "Бернар Палиси во Франција проучувал фосили и сфатил дека се остатоци од изумрени суштества." },
      { id: 3, img: './Заб приказна/хронолоска слагалка/3. Gemini_Generated_Image_sfcb4isfcb4isfcb.png', text: "Мери Анинг во Англија нашла загадочен фосилен заб и го однела на својот сопруг Гидеон Мантел." },
      { id: 4, img: './Заб приказна/хронолоска слагалка/4. Gemini_Generated_Image_6p7e426p7e426p7e.png', text: "Гидеон Мантел го проучувал забот со лупа и го однел во музеи ширум светот за да открие что е." },
      { id: 5, img: './Заб приказна/хронолоска слагалка/5. Gemini_Generated_Image_a31784a31784a317.png', text: "Мантел открил дека забот припаѓа на огромен влекач сличен на игуана и му го дал името Игуанодон." },
      { id: 6, img: './Заб приказна/хронолоска слагалка/6. Gemini_Generated_Image_c5p20ic5p20ic5p2.png', text: "Мантел погрешно нацртал Игуанодон со рог на носот — всушност тоа бил шилец од неговиот палец." },
      { id: 7, img: './Заб приказна/хронолоска слагалка/7. Gemini_Generated_Image_fd9pplfd9pplfd9p.png', text: "Во 1842 година научникот Ричард Овен го измислил зборот \"диносауриа\" — ужасно голем гуштер." }
    ],
    coloring: [
      { id: 1, img: './Заб приказна/coloring book/1. Gemini_Generated_Image_h6a8eeh6a8eeh6a8.png', text: "Фосилни коски во карпа" },
      { id: 2, img: './Заб приказна/coloring book/2. Gemini_Generated_Image_9lwgnq9lwgnq9lwg.png', text: "Бернар Палиси со фосил" },
      { id: 3, img: './Заб приказна/coloring book/3. Gemini_Generated_Image_gd57e4gd57e4gd57.png', text: "Мери Анинг наоѓа фосил" },
      { id: 4, img: './Заб приказна/coloring book/4. Gemini_Generated_Image_gvpk0dgvpk0dgvpk.png', text: "Гидеон Мантел го проучува забот" },
      { id: 5, img: './Заб приказна/coloring book/5. Gemini_Generated_Image_m8wvlwm8wvlwm8wv.png', text: "Игуанодон — погрешен цртеж со рог" },
      { id: 6, img: './Заб приказна/coloring book/6. Gemini_Generated_Image_84a3il84a3il84a3.png', text: "Точниот изглед на Игуанодон" },
      { id: 7, img: './Заб приказна/coloring book/7. Gemini_Generated_Image_awwtbqawwtbqawwt.png', text: "Диносауруси во праисториски свет" }
    ]
  },
  lighthouse: {
    puzzle: [
    { id: 1, img: './Светлината на Ирското Море/хронолошка слагалка/1. Gemini_Generated_Image_2figja2figja2fig.png',
      text: 'Кога ќе почнеше бура и магла, исплашениот Лијам секогаш се криеше длабоко под своето топло волнено ќебе.',
      textSq: 'Kur fillonte stuhia dhe mjegulla mbi fshat, Liami i frikësuar gjithmonë fshihej thellë nën batanijen e tij të ngrohtë në dhomë.' },
    { id: 2, img: './Светлината на Ирското Море/хронолошка слагалка/2. Gemini_Generated_Image_h7baeh7baeh7baeh.png',
      text: 'Дедото Фин и Лијам гледаат кон шарените бротчиња во пристаништето, додека високиот светилник се издигнува на карпата.',
      textSq: 'Gjyshi Finn dhe Liami shikojnë varkat shumëngjyrëshe në port, ndërsa fari i lartë ngrihet mbi shkëmb.' },
    { id: 3, img: './Светлината на Ирското Море/хронолошка слагалка/3. Gemini_Generated_Image_xe0jvfxe0jvfxe0j.png',
      text: 'Таткото исплови со бродот „Морска птица“, а страшната густа магла се спушта врз ноќта.',
      textSq: 'Babai lundroi me varkën "Zogu i Detit", ndërsa mjegulla e tmerrshme zbriti shpejt natën.' },
    { id: 4, img: './Светлината на Ирското Море/хронолошка слагалка/4. Gemini_Generated_Image_tqa2mutqa2mutqa2.png',
      text: 'Повредениот дедо Фин бара помош во темната соба осветлена сомо од свеќа, а Лијам решително граба жолт мантил.',
      textSq: 'Gjyshi i lënduar kërkon ndihmë urgjente dhe Liami me vendosmëri vesh mushamanë e verdhë.' },
    { id: 5, img: './Светлината на Ирското Море/хронолошка слагалка/5. Gemini_Generated_Image_4nn0ce4nn0ce4nn0.png',
      text: 'Срцето му удираше лудо, но Лијам храбро се качуваше по темните и бескрајни спирални скалила на светилникот.',
      textSq: 'Me zemrën që i rrihte fort, Liami ngjitej me guxim nëpër shkallët spirale të errëta e të pafundme.' },
    { id: 6, img: './Светлината на Ирското Море/хронолошка слагалка/6. Gemini_Generated_Image_qcudr8qcudr8qcud.png',
      text: 'Лијам го запалил големиот резервен фенер на гас — силна жолта светлина ги пресече густата магла надвор.',
      textSq: 'Liami ndezi fenerin e madh me gaz — drita e fortë e verdhë çau mjegullën e dendur jashtë.' },
    { id: 7, img: './Светлината на Ирското Море/хронолошка слагалка/7. Gemini_Generated_Image_94kijd94kijd94ki.png',
      text: 'Светлината на Лијам го спаси таткото. Тие силно се прегрнаа во куќата, а Лијам сфати дека вистинска храброст е да дејствуваш и кога се плашиш.',
      textSq: 'Drita e Liamit shpëtoi babanë e tij. Ata u përqafuan fort dhe Liami kuptoi se guximi i vërtetë është të veprosh edhe kur ke frikë.' }
    ],
    coloring: [
    { id: 1, img: './Светлината на Ирското Море/Coloring book/1. Gemini_Generated_Image_kfyyflkfyyflkfyy.png',
      text: 'Светилник на карпа покрај рибарско село',
      textSq: 'Fari mbi shkëmb pranë fshatit peshkatarësh' },
    { id: 2, img: './Светлината на Ирското Море/Coloring book/2. Gemini_Generated_Image_olvqo0olvqo0olvq.png',
      text: 'Лијам се крие под ќебе додека бура поминува',
      textSq: 'Liami fshihet nën batanije ndërkohë që stuhia kalon' },
    { id: 3, img: './Светлината на Ирското Море/Coloring book/3. Gemini_Generated_Image_v81snav81snav81s.png',
      text: 'Бродот на таткото во немирно море',
      textSq: 'Varka e babait në detin e trazuar' },
    { id: 4, img: './Светлината на Ирското Море/Coloring book/4. Gemini_Generated_Image_ju19fyju19fyju19.png',
      text: 'Дедото бара помош во собата со свеќа',
      textSq: 'Gjyshi kërkon ndihmë në dhomën me qiri' },
    { id: 5, img: './Светлината на Ирското Море/Coloring book/5. Gemini_Generated_Image_63m11a63m11a63m1.png',
      text: 'Лијам се качува по спиралните скалила со ламба',
      textSq: 'Liami ngjitet nëpër shkallët spirale me elektrik dore' },
    { id: 6, img: './Светлината на Ирското Море/Coloring book/6. Gemini_Generated_Image_iute7riute7riute.png',
      text: 'Силна жолта светлина блеснува низ стаклото',
      textSq: 'Drita e fortë e verdhë shkëlqen përmes qelqit' },
    { id: 7, img: './Светлината на Ирското Море/Coloring book/7. Gemini_Generated_Image_e5v17pe5v17pe5v1.png',
      text: 'Таткото го прегрнува храбриот син',
      textSq: 'Babai përqafon birin e tij hero' }
    ]
  }
,
  forgotten_garden: {
    puzzle: [
      { id: 1, img: './Тајната на заборавената градина/хронолоска слагалка/1. Gemini_Generated_Image_e2ruzqe2ruzqe2ru.png',
        text: 'Јана беше многу несреќна поради неуредниот двор полн со трење. Таа сакаше целиот неред едноставно да се покрие со бетон.',
        textSq: 'Jana ishte shumë e pakënaqur me oborrin e çrregullt plot me gjemba. Ajo dëshironte që e gjithë rrmëmuja thjesht të mbulohej me beton.' },
      { id: 2, img: './Тајната на заборавената градина/хронолоска слагалка/2. Gemini_Generated_Image_bhirglbhirglbhir.png',
        text: 'Дедо Никола го нарекол дворот "заспано волшебно царство". Тој верувал дека под нередот се крие убавина.',
        textSq: 'Gjyshi Nikolla e quajti oborrin "mbretëri magjike të fjetur". Ai besonte se nën rrmëmujë fshihej bukuri.' },
      { id: 3, img: './Тајната на заборавената градина/хронолоска слагалка/3. Gemini_Generated_Image_cla1m9cla1m9cla1.png',
        text: 'Заедно со дедо Никола, Јана облече ракавици и напорно работеше за да ги искорне плевелите и сувите гранки.',
        textSq: 'Së bashku me gjyshin Nikolla, Jana veshi dorezat dhe punoi shumë për të shkulur barërat e këqija dhe degët e thata.' },
      { id: 4, img: './Тајната на заборавената градина/хронолоска слагалка/4. Gemini_Generated_Image_ct8ognct8ognct8o.png',
        text: 'Јана со неверување ги засади грдите луковици кои изгледале како збрчкани камчиња.',
        textSq: 'Jana me mosbesim mbjelli qepujkat e shëmtuara që dukeshin si guralekë të rrrudhosur.' },
      { id: 5, img: './Тајната на заборавената градина/хронолоска слагалка/5. Gemini_Generated_Image_seoqszseoqszseoq.png',
        text: 'Дојде зимата и дворот се покри со дебела бела покривка од снег. Јана целосно заборави на луковиците што ги засади.',
        textSq: 'Erdhi dimri dhe oborri u mbulua me një shtesë të trashë bore. Jana i harroi plotësisht qepujkat që kishte mbjellë.' },
      { id: 6, img: './Тајната на заборавената градина/хронолоска слагалка/6. Gemini_Generated_Image_umpy9kumpy9kumpy.png',
        text: 'Напролет, од оние "грди камчиња" израснале прекрасни жолти и виолетови лалиња околу камената клупа.',
        textSq: 'Në pranverë, nga ata "guralekë të shëmtuar" kishin mbirë tulipanë të buk ur të verdhë dhe vjollëëz rreth stolit të gurit.' },
      { id: 7, img: './Тајната на заборавената градина/хронолоска слагалка/7. Gemini_Generated_Image_38kc7q38kc7q38kc.png',
        text: 'Јана го прегрна дедо Никола и сфати дека вистинската убавина бара труд и многу трпение.',
        textSq: 'Jana përqafoi gjyshin Nikolla dhe kuptoi se bukuria e vërtetë kërkon punë dhe shumë durim.' },
    ],
    coloring: [
      { id: 1, img: './Тајната на заборавената градина/Coloring book/1. Gemini_Generated_Image_grz5ktgrz5ktgrz5.png',
        text: 'Јана тажна на тремот пред неуредниот двор.',
        textSq: 'Jana e trishtuar në verandë para oborrit të çrregullt.' },
      { id: 2, img: './Тајната на заборавената градина/Coloring book/2. Gemini_Generated_Image_mk2r1fmk2r1fmk2r.png',
        text: 'Дедо Никола ѝ покажува скриената убавина на дворот.',
        textSq: 'Gjyshi Nikolla i tregon Janës bukurinë e fshehur të oborrit.' },
      { id: 3, img: './Тајната на заборавената градина/Coloring book/3. Gemini_Generated_Image_bjc0r5bjc0r5bjc0.png',
        text: 'Јана и дедо Никола напорно работат за да го исчистат дворот.',
        textSq: 'Jana dhe gjyshi Nikolla punojnë shumë për të pastruar oborrin.' },
      { id: 4, img: './Тајната на заборавената градина/Coloring book/4. Gemini_Generated_Image_eo29v3eo29v3eo29.png',
        text: 'Дедо Никола ѝ подава грди луковици на Јана да ги засади.',
        textSq: 'Gjyshi Nikolla i jep Janës qepujka të shëmtuara për t\'i mbjellë.' },
      { id: 5, img: './Тајната на заборавената градина/Coloring book/5. Gemini_Generated_Image_apfx4rapfx4rapfx.png',
        text: 'Дворот покриен со снег преку зимата.',
        textSq: 'Oborri i mbuluar me borë gjatë dimrit.' },
      { id: 6, img: './Тајната на заборавената градина/Coloring book/6. Gemini_Generated_Image_f60h2gf60h2gf60h.png',
        text: 'Прекрасни лалиња цветаат напролет околу камената клупа.',
        textSq: 'Tulipanë të buk ur lulëzojnë rreth stolit të gurit në pranverë.' },
      { id: 7, img: './Тајната на заборавената градина/Coloring book/7. Gemini_Generated_Image_h13hv9h13hv9h13h.png',
        text: 'Јана радосно го прегрнува дедо Никола во пролетниот двор.',
        textSq: 'Jana e lumtur përqafon gjyshin Nikolla në kopshtin pranveror.' },
    ]
  }
};

export default inclusiveData;
