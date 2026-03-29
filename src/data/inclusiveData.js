// Puzzle and coloring data — add new story entries here
const inclusiveData = {
  chest: {
    puzzle: [
      { id: 1, img: '/Gemini_Generated_Image_svlevhsvlevhsvle.png', text: "Марко беше тажен што мора да го помине распустот во селото.", textSq: 'Marko ishte i trishtuar që duhej ta kalonte pushimin në fshat.' },
      { id: 2, img: '/Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png', text: "Дедо му го замоли да најде еден стар часовник на таванот.", textSq: 'Gjyshi i tij e kërkoi të gjente një orë të vjetër në papafingo.' },
      { id: 3, img: '/Gemini_Generated_Image_tidjntidjntidjnt.png', text: "Марко пронајде мал дрвен ковчег со изрезбани цветови.", textSq: 'Marko gjeti një arkë të vogël druri të gdhendur me lule.' }
    ],
    coloring: [
      { id: 1, img: '/Gemini_Generated_Image_svlevhsvlevhsvle.png', text: "Марко седи на тремот и му е досадно.", textSq: 'Marko ulet në verandë dhe i mërzitet.' },
      { id: 2, img: '/Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png', text: "Марко го отвора дрвениот ковчег.", textSq: 'Marko hap arkën e drurit.' },
      { id: 3, img: '/Gemini_Generated_Image_tidjntidjntidjnt.png', text: "Дедото раскажува за своето најголемо богатство.", textSq: 'Gjyshi tregon për pasurinë e tij më të madhe.' }
    ]
  },
  kaja: {
    puzzle: [
      { id: 1, img: '/Gemini_Generated_Image_pa6gs9pa6gs9pa6g.png', text: "Каја сакаше да биде пронаоѓач и постојано црташе идеи во својата тетратка.", textSq: 'Kaja donte të bëhej një shpikëse dhe vizatonte ide në fletoren e saj.' },
      { id: 2, img: '/Gemini_Generated_Image_mpue84mpue84mpue.png', text: "Нејзиниот голем робот „Чистомат“ се расипа токму пред натпреварот.", textSq: 'Roboti i saj i madh u prish fill para garës.' },
      { id: 3, img: '/Gemini_Generated_Image_irdou7irdou7irdo.png', text: "Каја направи едноставна хранилка од пластично шише и дрвени лажици.", textSq: 'Kaja bëri një ushqyes të thjeshtë nga një shishe plastike.' }
    ],
    coloring: [
      { id: 1, img: '/Gemini_Generated_Image_pa6gs9pa6gs9pa6g.png', text: "Каја работи во својата соба.", textSq: 'Kaja punon në dhomën e saj.' },
      { id: 2, img: '/Gemini_Generated_Image_mpue84mpue84mpue.png', text: "Разговор со дедото.", textSq: 'Bisedë me gjyshin.' },
      { id: 3, img: '/Gemini_Generated_Image_irdou7irdou7irdo.png', text: "Хранилката за птици.", textSq: 'Ushqyesi për zogjtë.' }
    ]
  },
  shovel: {
    puzzle: [
      { id: 1, img: '/Gemini_Generated_Image_ed1hrfed1hrfed1h.png', text: "Чичкото со лопатата секој ден работеше во својата градина.", textSq: 'Xhaxhai me lopatë punonte çdo ditë në kopshtin e tij.' },
      { id: 2, img: '/Gemini_Generated_Image_ntjzjxntjzjxntjz.png', text: "Тој најде нешто необично додека копаше.", textSq: 'Ai gjeti diçka të pazakontë ndërsa gërmonte.' },
      { id: 3, img: '/Gemini_Generated_Image_gem9rdgem9rdgem9.png', text: "Градината стана место на голема авантура.", textSq: 'Kopshti u bë vend i një aventure të madhe.' }
    ],
    coloring: [
      { id: 1, img: '/Gemini_Generated_Image_ed1hrfed1hrfed1h.png', text: "Работа во градината.", textSq: 'Punë në kopsht.' },
      { id: 2, img: '/Gemini_Generated_Image_ntjzjxntjzjxntjz.png', text: "Изненадување под земјата.", textSq: 'Surprizë nën tokë.' },
      { id: 3, img: '/Gemini_Generated_Image_gem9rdgem9rdgem9.png', text: "Приказни во градината.", textSq: 'Histori në kopsht.' }
    ]
  },
  lynx: {
    puzzle: [
      { id: 1, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_1.png', text: "Балканскиот рис е ретко и загрозено животно.", textSq: 'Rrëqebulli i Ballkanit është një kafshë e rrallë dhe e rrezikuar.' },
      { id: 2, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_2.png', text: "Научниците користат камери за да ги набљудуваат рисовите.", textSq: 'Shkencëtarët përdorin kamera për të vëzhguar rrëqebujt.' },
      { id: 3, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_3.png', text: "Рисовите се движат тивко низ густата шума.", textSq: 'Rrëqebujt lëvizin qetësisht nëpër pyllin e dendur.' },
      { id: 4, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_4.png', text: "Тие имаат карактеристични реси на ушите.", textSq: 'Ata kanë tufa karakteristike në veshë.' },
      { id: 5, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_5.png', text: "Мораме да ја заштитиме природата за рисовите да преживеат.", textSq: 'Duhet ta mbrojmë natyrën që rrëqebujt të mbijetojnë.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_6.png', text: "Рис како седи на карпа.", textSq: 'Rrëqebulli i ulur mbi shkëmb.' },
      { id: 2, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_7.png', text: "Поставување на фото-замка.", textSq: 'Vendosja e foto-kurthit.' },
      { id: 3, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_8.png', text: "Шумата во зима.", textSq: 'Pylli në dimër.' },
      { id: 4, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_9.png', text: "Малите рисчиња си играат.", textSq: 'Rrëqebujt e vegjël duke luajtur.' },
      { id: 5, img: '/storyboard/The_Balkan_Lynx/The_Balkan_Lynx_10.png', text: "Рисот во движење.", textSq: 'Rrëqebulli në lëvizje.' }
    ]
  },
  baba: {
    puzzle: [
      { id: 1, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_1.png', text: "Баба Гун живееше во мала селска куќичка со трева на покривот.", textSq: 'Gjyshja Gun jetonte në një shtëpizë të vogël fshati me bar mbi çati.' },
      { id: 2, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_3.png', text: "Докторот ѝ рече дека мора да се пресели во голема зграда во градот.", textSq: 'Mjeku i tha se duhej të shpërngulej në një ndërtesë të madhe në qytet.' },
      { id: 3, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_6.png', text: "Баба Гун тајно си ги донесе кокошките во својот нов стан.", textSq: 'Gjyshja Gun fshehurazi i solli pulat në apartamentin e saj të ri.' },
      { id: 4, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_9.png', text: "Таа си направи прекрасна градина на својот балкон.", textSq: 'Ajo bëri një kopsht të mrekullueshëm në ballkonin e saj.' },
      { id: 5, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_15.png', text: "Сега баба Гун е среќна со своите животни во градот!", textSq: 'Tani gjyshja Gun është e lumtur me kafshët e saj në qytet!' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_2.png', text: "Баба Гун пред куќичката во село.", textSq: 'Gjyshja Gun para shtëpizës në fshat.' },
      { id: 2, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_4.png', text: "Баба Гун ги пакува своите работи.", textSq: 'Gjyshja Gun paketon gjërat e saj.' },
      { id: 3, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_7.png', text: "Новиот стан во зградата.", textSq: 'Apartamenti i ri në ndërtesë.' },
      { id: 4, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_10.png', text: "Градината на балконот.", textSq: 'Kopshti në ballkon.' },
      { id: 5, img: '/storyboard/Baba_Gun_s_City_Farm/Baba_Gun_s_City_Farm_13.png', text: "Животните во градот.", textSq: 'Kafshët në qytet.' }
    ]
  },
  octopus: {
    puzzle: [
      { id: 1, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_1.png', text: "Октоподот е мајстор за криење и живее на дното на океанот.", textSq: "Oktapodi është mjeshtër i fshehjes dhe jeton në fund të oqeanit." },
      { id: 2, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_3.png', text: "Кога е во опасност, тој испушта темен облак од мастило.", textSq: "Kur rrezikohet, ai lëshon një re të errët boje." },
      { id: 3, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_5.png', text: "Октоподите се многу паметни и можат да отвораат тегли.", textSq: "Oktapodët janë shumë të zgjuar dhe mund të hapin kavanoza." },
      { id: 4, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_8.png', text: "Тие сакаат да си играат со играчки и сложувалки.", textSq: "Ata duan të luajnë me lodra dhe pazëlla." },
      { id: 5, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_12.png', text: "Октоподите се многу пријателски расположени кон чуварите.", textSq: "Oktapodët janë shumë miqësorë me kujdestarët." }
    ],
    coloring: [
      { id: 1, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_2.png', text: "Октопод во океанот.", textSq: "Oktapodi në oqean." },
      { id: 2, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_4.png', text: "Бегство со мастило.", textSq: "Ikja me bojë." },
      { id: 3, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_6.png', text: "Маскирање зад карпите.", textSq: "Maskimi pas shkëmbinjve." },
      { id: 4, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_9.png', text: "Игра со топки.", textSq: "Lojë me topa." },
      { id: 5, img: '/storyboard/The_Clever_Octopus/The_Clever_Octopus_11.png', text: "Поздрав со пријателите.", textSq: "Përshëndetje me miqtë." }
    ]
  },
  watchmaker: {
    puzzle: [
      { id: 1, img: '/Gemini_Generated_Image_93tlph93tlph93tl.png', text: "Стариот часовничар живееше сам во својата тивка работилница.", textSq: 'Sahatçiu i vjetër jetonte i vetëm në punishten e tij të qetë.' },
      { id: 2, img: '/Gemini_Generated_Image_4gmp3n4gmp3n4gmp.png', text: "Еден ден, едно мало куче се појави пред неговата врата.", textSq: 'Një ditë, një qen i vogël u shfaq para derës së tij.' },
      { id: 3, img: '/Gemini_Generated_Image_1rt2501rt2501rt2.png', text: "Животот во работилницата повторно стана весел и исполнет.", textSq: 'Jeta në punishte u bë përsëri e gëzueshme dhe e plotë.' }
    ],
    coloring: [
      { id: 1, img: '/Gemini_Generated_Image_93tlph93tlph93tl.png', text: "Работилница полна со часовници.", textSq: 'Punishtja plot me sahatë.' },
      { id: 2, img: '/Gemini_Generated_Image_4gmp3n4gmp3n4gmp.png', text: "Часовничарот со малото куче.", textSq: 'Sahatçiu me qenin e vogël.' },
      { id: 3, img: '/Gemini_Generated_Image_1rt2501rt2501rt2.png', text: "Поправање на часовниците.", textSq: 'Riparimi i sahatëve.' }
    ]
  },
  kite: {
    puzzle: [
      { id: 1, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_1.png', text: "Бојан со денови правеше голем, шарен змеј за летање.", textSq: 'Bojani bëri një balonë të madhe dhe me ngjyra për ditë të tëra.' },
      { id: 2, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_3.png', text: "При првиот обид, змејот веднаш падна на земјата.", textSq: 'Në përpjekjen e parë, balona ra menjëherë në tokë.' },
      { id: 3, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_5.png', text: "Бојан беше многу лут и сакаше да се откаже.", textSq: 'Bojani ishte shumë i zemëruar dhe donte të dorëzohej.' },
      { id: 4, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_8.png', text: "Дедо му го научи дека трпението е најважно за успех.", textSq: 'Gjyshi e mësoi se durimi është më i rëndësishmi për sukses.' },
      { id: 5, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_11.png', text: "На крајот, змејот полета високо кон синото небо.", textSq: 'Në fund, balona fluturoi lart drejt qiellit të kaltër.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_2.png', text: "Бојан во својата работилница.", textSq: 'Bojani në punishten e tij.' },
      { id: 2, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_4.png', text: "Трчање на ливадата.", textSq: 'Vrapim në livadh.' },
      { id: 3, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_7.png', text: "Дедото му помага на Бојан.", textSq: 'Gjyshi e ndihmon Bojanin.' },
      { id: 4, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_10.png', text: "Бојан се смее со змејот.", textSq: 'Bojani qesh me balonën.' },
      { id: 5, img: '/storyboard/Patience_Takes_Flight/Patience_Takes_Flight_13.png', text: "Шарениот змеј во облаците.", textSq: 'Balona me ngjyra në re.' }
    ]
  },
  rabbit: {
    puzzle: [
      { id: 1, img: '/Gemini_Generated_Image_j12s9rj12s9rj12s.png', text: "Зајакот уживаше во мирното попладне во шумата.", textSq: "Lepuri po shijonte pasditen e qetë në pyll." },
      { id: 2, img: '/Gemini_Generated_Image_nnfx6onnfx6onnfx.png', text: "Одеднаш, земјата почна силно да се тресе.", textSq: "Papritmas, toka filloi të dridhej fort." },
      { id: 3, img: '/Gemini_Generated_Image_1hdc6w1hdc6w1hdc.png', text: "Кога тресењето престана, во шумата беше безбедно.", textSq: "Kur dridhja ndaloi, pylli ishte i sigurt." }
    ],
    coloring: [
      { id: 1, img: '/Gemini_Generated_Image_j12s9rj12s9rj12s.png', text: "Зајакот во шумата.", textSq: "Lepuri në pyll." },
      { id: 2, img: '/Gemini_Generated_Image_nnfx6onnfx6onnfx.png', text: "Лавот го смирува зајакот.", textSq: "Luani e qetëson lepurin." },
      { id: 3, img: '/Gemini_Generated_Image_1hdc6w1hdc6w1hdc.png', text: "Среќен крај за сите.", textSq: "Fund i lumtur për të gjithë." }
    ]
  },
  puffins: {
    puzzle: [
      { id: 1, img: '/Gemini_Generated_Image_6rliq26rliq26rli.png', text: "Морските папагалчиња се враќаат на островот за да снесат јајца.", textSq: "Papagajtë e detit kthehen në ishull për të bërë vezë." },
      { id: 2, img: '/Gemini_Generated_Image_3eunt73eunt73eun.png', text: "Родителите им носат риба на малите папагалчиња.", textSq: "Prindërit u sjellin peshk papagajve të vegjël." },
      { id: 3, img: '/Gemini_Generated_Image_3nal113nal113nal.png', text: "Децата ги спасуваат папагалчињата во текот на ноќта.", textSq: "Fëmijët shpëtojnë papagajtë gjatë natës." },
      { id: 4, img: '/Gemini_Generated_Image_s0veo8s0veo8s0ve.png', text: "Хана ги пушта папагалчињата слободно во морето.", textSq: "Hana lëshon papagajtë e lirë në det." }
    ],
    coloring: [
      { id: 1, img: '/Gemini_Generated_Image_6rliq26rliq26rli.png', text: "Папагалчиња на гребенот.", textSq: "Papagajtë në shkëmb." },
      { id: 2, img: '/Gemini_Generated_Image_3eunt73eunt73eun.png', text: "Клун полн со риби.", textSq: "Sqepi plot me peshq." },
      { id: 3, img: '/Gemini_Generated_Image_3nal113nal113nal.png', text: "Акција за спасување.", textSq: "Aksioni i shpëtimit." },
      { id: 4, img: '/Gemini_Generated_Image_s0veo8s0veo8s0ve.png', text: "Лет кон слободата.", textSq: "Fluturim drejt lirisë." }
    ]
  },
  eagle: {
    puzzle: [
      { id: 1, img: '/storyboard/Born_to_Soar/Born_to_Soar_1.png', text: "Еден фармер најде мало паднато орле на планината.", textSq: 'Një fermer gjeti një shqiponjë të vogël të rënë në mal.' },
      { id: 2, img: '/storyboard/Born_to_Soar/Born_to_Soar_4.png', text: "Орелот порасна во дворот заедно со кокошките.", textSq: 'Shqiponja u rrit në oborr bashkë me pulat.' },
      { id: 3, img: '/storyboard/Born_to_Soar/Born_to_Soar_7.png', text: "Еден човек дојде да му помогне на орелот да полета.", textSq: 'Një burrë erdhi për ta ndihmuar shqiponjën të fluturonte.' },
      { id: 4, img: '/storyboard/Born_to_Soar/Born_to_Soar_12.png', text: "Тие се искачија на високата планина во зори.", textSq: 'Ata u ngjitën në malin e lartë në agim.' },
      { id: 5, img: '/storyboard/Born_to_Soar/Born_to_Soar_15.png', text: "Орелот ги рашири крилјата и конечно полета слободно.", textSq: 'Shqiponja hapi krahët dhe më në fund fluturoi e lirë.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/Born_to_Soar/Born_to_Soar_2.png', text: "Малото орле во гнездото.", textSq: 'Shqiponja e vogël në fole.' },
      { id: 2, img: '/storyboard/Born_to_Soar/Born_to_Soar_5.png', text: "Орелот јаде со кокошките.", textSq: 'Shqiponja ha me pulat.' },
      { id: 3, img: '/storyboard/Born_to_Soar/Born_to_Soar_8.png', text: "Обид за полетување од покривот.", textSq: 'Përpjekje për fluturim nga çatia.' },
      { id: 4, img: '/storyboard/Born_to_Soar/Born_to_Soar_11.png', text: "Патот кон планината.", textSq: 'Rruga drejt malit.' },
      { id: 5, img: '/storyboard/Born_to_Soar/Born_to_Soar_14.png', text: "Сонцето изгрева зад планината.", textSq: 'Dielli lind pas malit.' }
    ]
  },
  pita: {
    puzzle: [
      { id: 1, img: '/Gemini_Generated_Image_cfaajhcfaajhcfaa.png', text: "Баба и внукот направија вкусна пита.", textSq: 'Gjyshja dhe nipi bënë një byrek të shijshëm.' },
      { id: 2, img: '/Gemini_Generated_Image_akd8v0akd8v0akd8.png', text: "Тие ја однесоа питата кај стариот сосед.", textSq: 'Ata ia çuan byrekun fqinjit të vjetër.' },
      { id: 3, img: '/Gemini_Generated_Image_mycd13mycd13mycd.png', text: "Заедно уживаа во вечерата и разговорот.", textSq: 'Bashkë gëzuan darkën dhe bisedën.' }
    ],
    coloring: [
      { id: 1, img: '/Gemini_Generated_Image_cfaajhcfaajhcfaa.png', text: "Готвење во кујната.", textSq: 'Gatim në kuzhinë.' },
      { id: 2, img: '/Gemini_Generated_Image_akd8v0akd8v0akd8.png', text: "Носење на питата.", textSq: 'Bartja e byreks.' },
      { id: 3, img: '/Gemini_Generated_Image_mycd13mycd13mycd.png', text: "Вечера кај соседот.", textSq: 'Darkë te fqinji.' }
    ]
  },
  hiking: {
    puzzle: [
      { id: 1, img: '/storyboard/Излет/1. Gemini_Generated_Image_dohdk4dohdk4dohd.png', text: "Подготовка за планинарење со ранец и опрема.", textSq: 'Përgatitja për ecje në mal me çantë dhe pajisje.' },
      { id: 2, img: '/storyboard/Излет/2. Gemini_Generated_Image_arh7tsarh7tsarh7.png', text: "Пешачење по тесните планински патеки.", textSq: 'Ecja nëpër shtigjet e ngushta malore.' },
      { id: 3, img: '/storyboard/Излет/3. Gemini_Generated_Image_o6ynro6ynro6ynro.png', text: "Прекрасен водопад скриен во шумата.", textSq: 'Ujëvarë e mrekullueshme e fshehur në pyll.' },
      { id: 4, img: '/storyboard/Излет/4. Gemini_Generated_Image_1tvfzi1tvfzi1tvf.png', text: "Одмор и уживање во природата.", textSq: 'Pushim dhe shijim i natyrës.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/Излет/5. Gemini_Generated_Image_w6oeyrw6oeyrw6oe.png', text: "Планински врвови во далечина.", textSq: 'Majat e maleve në largësi.' },
      { id: 2, img: '/storyboard/Излет/6. Gemini_Generated_Image_5x7tln5x7tln5x7t.png', text: "Животни во шумата.", textSq: 'Kafshët në pyll.' },
      { id: 3, img: '/storyboard/Излет/7. Gemini_Generated_Image_6fb10g6fb10g6fb1.png', text: "Среќни планинари.", textSq: 'Alpinistë të lumtur.' }
    ]
  },
  fossil: {
    puzzle: [
      { id: 1, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_1.png', text: "Мери Анинг најде необичен фосилен заб во карпите.", textSq: 'Mary Anning gjeti një dhëmb fosil të pazakontë në shkëmbinj.' },
      { id: 2, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_4.png', text: "Гидеон Мантел го проучуваше забот со големо внимание.", textSq: 'Gideon Mantell e studioi dhëmbin me kujdes të madh.' },
      { id: 3, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_8.png', text: "Мантел сфати дека забот му припаѓа на Игуанодон.", textSq: 'Mantell kuptoi se dhëmbi i përkiste Iguanodonit.' },
      { id: 4, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_11.png', text: "Тој прв нацрта како изгледал овој огромен влекач.", textSq: 'Ai vizatoi i pari se si dukej kjo zvarranik gjigant.' },
      { id: 5, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_14.png', text: "Ричард Овен го измисли зборот диносаурус.", textSq: 'Richard Owen shpiku fjalën dinosaur.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_2.png', text: "Копање фосили.", textSq: 'Gërmimi i fosileve.' },
      { id: 2, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_5.png', text: "Забот на Игуанодон.", textSq: 'Dhëmbi i Iguanodonit.' },
      { id: 3, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_9.png', text: "Истражување во музеј.", textSq: 'Kërkimi në muze.' },
      { id: 4, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_12.png', text: "Цртање на диносаурусот.", textSq: 'Vizatimi i dinosaurit.' },
      { id: 5, img: '/storyboard/The_Iguanodon_Discovery/The_Iguanodon_Discovery_15.png', text: "Скелет во музејот.", textSq: 'Skeleti në muze.' }
    ]
  },
  pot: {
    puzzle: [
      { id: 1, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_1.png', text: "Царот им даде на сите деца по едно варено семе.", textSq: 'Perandori u dha të gjithë fëmijëve nga një farë të zier.' },
      { id: 2, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_4.png', text: "Пинг се грижеше за своето семе секој ден.", textSq: 'Ping u kujdes për farën e tij çdo ditë.' },
      { id: 3, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_7.png', text: "Ништо не порасна во неговата саксија.", textSq: 'Asgjë nuk u rrit në saksinë e tij.' },
      { id: 4, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_10.png', text: "Пинг ја однесе празната саксија кај царот.", textSq: 'Ping çoi saksinë e zbrazët te perandori.' },
      { id: 5, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_13.png', text: "Царот го избра Пинг за нов владетел поради неговата искреност.", textSq: 'Perandori zgjodhi Pingun si sundimtar të ri për ndershmërinë e tij.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_2.png', text: "Децата со своите семиња.", textSq: 'Fëmijët me farat e tyre.' },
      { id: 2, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_5.png', text: "Пинг ја полева саксијата.", textSq: 'Ping loton saksinë.' },
      { id: 3, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_8.png', text: "Другите деца со големи цветови.", textSq: 'Fëmijët e tjerë me lule të mëdha.' },
      { id: 4, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_11.png', text: "Пинг пред царот.", textSq: 'Ping para perandorit.' },
      { id: 5, img: '/storyboard/The_Empty_Pot/The_Empty_Pot_12.png', text: "Среќниот Пинг со круната.", textSq: 'Ping i lumtur me kurorën.' }
    ]
  },
  lakestar: {
    puzzle: [
      { id: 1, img: '/storyboard/The_Lake_Star/The_Lake_Star_1.png', text: "Тео најде стара скршена едрилица во трските.", textSq: 'Teo gjeti një varkë me vela të vjetër e të prishur në kallamishte.' },
      { id: 2, img: '/storyboard/The_Lake_Star/The_Lake_Star_4.png', text: "Тој и дедо му ја поправаа едрилицата со многу труд.", textSq: 'Ai dhe gjyshi e rregulluan varkën me shumë mund.' },
      { id: 3, img: '/storyboard/The_Lake_Star/The_Lake_Star_7.png', text: "Бојан му се смееше на Тео за неговото старо бродче.", textSq: 'Bojani u tall me Teon për varkën e tij të vjetër.' },
      { id: 4, img: '/storyboard/The_Lake_Star/The_Lake_Star_10.png', text: "Силниот ветер го заглави бродчето на Бојан во трските.", textSq: 'Era e fortë bllokoi varkën e Bojanit në kallamishte.' },
      { id: 5, img: '/storyboard/The_Lake_Star/The_Lake_Star_14.png', text: "Езерската ѕвезда го спаси бродчето на Бојан.", textSq: 'Ylli i liqenit shpëtoi varkën e Bojanit.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/The_Lake_Star/The_Lake_Star_2.png', text: "Тео на брегот на езерото.", textSq: 'Teo në bregun e liqenit.' },
      { id: 2, img: '/storyboard/The_Lake_Star/The_Lake_Star_5.png', text: "Поправање на едрото.", textSq: 'Rregullimi i velës.' },
      { id: 3, img: '/storyboard/The_Lake_Star/The_Lake_Star_8.png', text: "Средба на пристаништето.", textSq: 'Takimi në port.' },
      { id: 4, img: '/storyboard/The_Lake_Star/The_Lake_Star_12.png', text: "Пловидба низ брановите.", textSq: 'Lundrim nëpër valë.' },
      { id: 5, img: '/storyboard/The_Lake_Star/The_Lake_Star_15.png', text: "Среќниот Тео со својот брод.", textSq: 'Teo i lumtur me varkën e tij.' }
    ]
  },
  lambe: {
    puzzle: [
      { id: 1, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_1.png', text: "Глувците во куќата на Ламбе беа многу бучни.", textSq: 'Mijët në shtëpinë e Lambes ishin shumë të zhurmshëm.' },
      { id: 2, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_4.png', text: "Ламбе реши да го залепи целиот мебел за таванот.", textSq: 'Lambe vendosi të ngjitë të gjitha mobiljet në tavan.' },
      { id: 3, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_6.png', text: "Глувците мислеа дека тие самите стојат наопаку.", textSq: 'Mijët menduan se ata vetë po qëndronin përmbys.' },
      { id: 4, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_8.png', text: "Тие паднаа од таванот и избегаа од куќата.", textSq: 'Ata ranë nga tavani dhe ikën nga shtëpia.' },
      { id: 5, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_10.png', text: "Ламбе конечно уживаше во мир и тишина.", textSq: 'Më në fund Lambe shijoi paqen dhe qetësinë.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_2.png', text: "Глувците танцуваат.", textSq: 'Mijët duke kërcyer.' },
      { id: 2, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_5.png', text: "Ламбе со лепилото.", textSq: 'Lambe me ngjitësin.' },
      { id: 3, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_7.png', text: "Мебелот на таванот.", textSq: 'Mobiljet në tavan.' },
      { id: 4, img: '/storyboard/The_Lambe_Enigma/The_Lambe_Enigma_9.png', text: "Глувците на подот.", textSq: 'Mijët në dysheme.' }
    ]
  },
  lighthouse: {
    puzzle: [
      { id: 1, img: '/Светлината на Ирското Море/хронолошка слагалка/1. Gemini_Generated_Image_2figja2figja2fig.png', text: "Лиам се плаши од бури и магла.", textSq: 'Liami ka frikë nga stuhitë dhe mjegulla.' },
      { id: 2, img: '/Светлината на Ирското Море/хронолошка слагалка/2. Gemini_Generated_Image_h7baeh7baeh7baeh.png', text: "Дедо му Фин е чувар на светилникот.", textSq: 'Gjyshi i tij Finni është roja e farit.' },
      { id: 3, img: '/Светлината на Ирското Море/хронолошка слагалка/3. Gemini_Generated_Image_xe0jvfxe0jvfxe0j.png', text: "Густа магла и невреме го зафатија селото.", textSq: 'Një mjegull e dendur dhe stuhia përfshiu fshatin.' },
      { id: 4, img: '/Светлината на Ирското Море/хронолошка слагалка/4. Gemini_Generated_Image_tqa2mutqa2mutqa2.png', text: "Дедо му го повреди коленото и не можеше да се искачи.", textSq: 'Gjyshi lëndoi gjurin dhe nuk mund të ngjitej.' },
      { id: 5, img: '/Светлината на Ирското Море/хронолошка слагалка/5. Gemini_Generated_Image_4nn0ce4nn0ce4nn0.png', text: "Лиам мораше сам да се искачи по тристате скали.", textSq: 'Liami duhej të ngjitej vetë në treqind shkallët.' },
      { id: 6, img: '/Светлината на Ирското Море/хронолошка слагалка/6. Gemini_Generated_Image_qcudr8qcudr8qcud.png', text: "Тој го запали резервниот фенер и го спаси татко му.", textSq: 'Ai ndezi fenerin rezervë dhe shpëtoi babanë e tij.' },
      { id: 7, img: '/Светлината на Ирското Море/хронолошка слагалка/7. Gemini_Generated_Image_94kijd94kijd94ki.png', text: "Лиам научи дека храброст е да го направиш правилното и кога се плашиш.", textSq: 'Liami mësoi se guximi është të bësh atë që duhet edhe kur ke frikë.' }
    ],
    coloring: [
      { id: 1, img: '/Светлината на Ирското Море/coloring/1. Gemini_Generated_Image_kfyyflkfyyflkfyy.png', text: "Светилникот дење.", textSq: 'Fari ditën.' },
      { id: 2, img: '/Светлината на Ирското Море/coloring/2. Gemini_Generated_Image_olvqo0olvqo0olvq.png', text: "Бродови во магла.", textSq: 'Anijet në mjegull.' },
      { id: 3, img: '/Светлината на Ирското Море/coloring/3. Gemini_Generated_Image_v81snav81snav81s.png', text: "Внатре во светилникот.", textSq: 'Brenda farit.' },
      { id: 4, img: '/Светлината на Ирското Море/coloring/4. Gemini_Generated_Image_ju19fyju19fyju19.png', text: "Силниот фенер на светилникот.", textSq: 'Feneri i fortë i farit.' },
      { id: 5, img: '/Светлината на Ирското Море/coloring/5. Gemini_Generated_Image_63m11a63m11a63m1.png', text: "Лиам се качува по скалите.", textSq: 'Liami ngjitet shkallëve.' },
      { id: 6, img: '/Светлината на Ирското Море/coloring/6. Gemini_Generated_Image_iute7riute7riute.png', text: "Запалениот фенер.", textSq: 'Feneri i ndezur.' },
      { id: 7, img: '/Светлината на Ирското Море/coloring/7. Gemini_Generated_Image_e5v17pe5v17pe5v1.png', text: "Средба со татко му.", textSq: 'Takimi me babanë.' }
    ]
  },
  forgotten_garden: {
    puzzle: [
      { id: 1, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_1.png', text: "Децата најдоа клуч од една заборавена градина.", textSq: 'Fëmijët gjetën çelësin e një kopshti të harruar.' },
      { id: 2, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_4.png', text: "Тие влегоа внатре и видоа дека сè е исушено.", textSq: 'Ata hyrën brenda dhe panë se gjithçka ishte tharë.' },
      { id: 3, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_7.png', text: "Заедно почнаа да садат нови цвеќиња и дрвја.", textSq: 'Së bashku filluan të mbjellin lule dhe pemë të reja.' },
      { id: 4, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_10.png', text: "Градината повторно стана најубавото место во градот.", textSq: 'Kopshti u bë përsëri vendi më i bukur në qytet.' },
      { id: 5, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_14.png', text: "Сите соседи доаѓаа да уживаат во мирисот на цвеќињата.", textSq: 'Të gjithë fqinjët vinin të shijonin erën e luleve.' }
    ],
    coloring: [
      { id: 1, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_2.png', text: "Старата порта на градината.", textSq: 'Porta e vjetër e kopshtit.' },
      { id: 2, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_5.png', text: "Чистење на сувите гранки.", textSq: 'Pastrimi i degëve të thata.' },
      { id: 3, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_8.png', text: "Садење рози.", textSq: 'Mbjellja e trëndafilave.' },
      { id: 4, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_11.png', text: "Игра во градината.", textSq: 'Lojë në kopsht.' },
      { id: 5, img: '/storyboard/Baba_Gun_s_City_Garden/Baba_Gun_s_City_Garden_15.png', text: "Шарена пролет.", textSq: 'Pranverë me ngjyra.' }
    ]
  }
};

export default inclusiveData;
