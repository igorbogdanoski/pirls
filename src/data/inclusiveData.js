import imgs from './imgs.js';

// Puzzle and coloring data — add new story entries here
const inclusiveData = {
  chest: {
    puzzle: [
      { id: 1, img: imgs.chest.puzzle[1], text: "Марко беше тажен што мора да го помине распустот во селото.", textSq: 'Marko ishte i trishtuar që duhej ta kalonte pushimin në fshat.' },
      { id: 2, img: imgs.chest.puzzle[2], text: "Дедо му го замоли да најде еден стар часовник на таванот.", textSq: 'Gjyshi i tij e kërkoi të gjente një orë të vjetër në papafingo.' },
      { id: 3, img: imgs.chest.puzzle[3], text: "Марко пронајде мал дрвен ковчег со изрезбани цветови.", textSq: 'Marko gjeti një arkë të vogël druri të gdhendur me lule.' }
    ],
    coloring: [
      { id: 1, img: imgs.chest.coloring[1], text: "Марко седи на тремот и му е досадно.", textSq: 'Marko ulet në verandë dhe i mërzitet.' },
      { id: 2, img: imgs.chest.coloring[2], text: "Марко го отвора дрвениот ковчег.", textSq: 'Marko hap arkën e drurit.' },
      { id: 3, img: imgs.chest.coloring[3], text: "Дедото раскажува за своето најголемо богатство.", textSq: 'Gjyshi tregon për pasurinë e tij më të madhe.' }
    ],
    coloringWIP: true
  },
  kaja: {
    puzzle: [
      { id: 1, img: imgs.kaja.puzzle[1], text: "Каја сакаше да биде пронаоѓач и постојано црташе идеи во својата тетратка.", textSq: 'Kaja donte të bëhej një shpikëse dhe vizatonte ide në fletoren e saj.' },
      { id: 2, img: imgs.kaja.puzzle[2], text: "Нејзиниот голем робот „Чистомат“ се расипа токму пред натпреварот.", textSq: 'Roboti i saj i madh u prish fill para garës.' },
      { id: 3, img: imgs.kaja.puzzle[3], text: "Каја направи едноставна хранилка од пластично шише и дрвени лажици.", textSq: 'Kaja bëri një ushqyes të thjeshtë nga një shishe plastike.' },
      { id: 4, img: imgs.kaja.puzzle[4], text: "Каја го претстави својот пронајдок пред класот.", textSq: 'Kaja prezantoi shpikjen e saj para klasës.' },
      { id: 5, img: imgs.kaja.puzzle[5], text: "Хранилката привлече многу птици на прозорецот.", textSq: 'Ushqyesi tërhoqi shumë zogj te dritarja.' },
      { id: 6, img: imgs.kaja.puzzle[6], text: "Каја разбра дека едноставноста е дар.", textSq: 'Kaja kuptoi se thjeshtësia është dhuratë.' },
    ],
    coloring: [
      { id: 1, img: imgs.kaja.coloring[1], text: "Каја работи во својата соба.", textSq: 'Kaja punon në dhomën e saj.' },
      { id: 2, img: imgs.kaja.coloring[2], text: "Разговор со дедото.", textSq: 'Bisedë me gjyshin.' },
      { id: 3, img: imgs.kaja.coloring[3], text: "Хранилката за птици.", textSq: 'Ushqyesi për zogjtë.' },
      { id: 4, img: imgs.kaja.coloring[4], text: "Презентација во класот.", textSq: 'Prezantim në klasë.' },
      { id: 5, img: imgs.kaja.coloring[5], text: "Птиците на прозорецот.", textSq: 'Zogjtë te dritarja.' },
      { id: 6, img: imgs.kaja.coloring[6], text: "Горда Каја со пронајдокот.", textSq: 'Kaja krenare me shpikjen.' },
    ],
  },
  shovel: {
    puzzle: [
      { id: 1, img: imgs.shovel.puzzle[1], text: "Чичкото со лопатата секој ден работеше во својата градина.", textSq: 'Xhaxhai me lopatë punonte çdo ditë në kopshtin e tij.' },
      { id: 2, img: imgs.shovel.puzzle[2], text: "Тој најде нешто необично додека копаше.", textSq: 'Ai gjeti diçka të pazakontë ndërsa gërmonte.' },
      { id: 3, img: imgs.shovel.puzzle[3], text: "Градината стана место на голема авантура.", textSq: 'Kopshti u bë vend i një aventure të madhe.' },
      { id: 4, img: imgs.shovel.puzzle[4], text: "Чичкото откри голема стара амфора закопана во земјата.", textSq: 'Xhaxhai zbuloi një amforë të vjetër të madhe nën tokë.' },
      { id: 5, img: imgs.shovel.puzzle[5], text: "Чичкото ја донесе амфората во локалниот музеј.", textSq: 'Xhaxhai e solli amforën në muzeun lokal.' },
    ],
    coloring: [
      { id: 1, img: imgs.shovel.coloring[1], text: "Работа во градината.", textSq: 'Punë në kopsht.' },
      { id: 2, img: imgs.shovel.coloring[2], text: "Изненадување под земјата.", textSq: 'Surprizë nën tokë.' },
      { id: 3, img: imgs.shovel.coloring[3], text: "Приказни во градината.", textSq: 'Histori në kopsht.' },
      { id: 4, img: imgs.shovel.coloring[4], text: "Пронајдено историско богатство.", textSq: 'Thesar historik i zbuluar.' },
      { id: 5, img: imgs.shovel.coloring[5], text: "Посета на музеј со амфората.", textSq: 'Vizitë në muze me amforën.' },
    ],
  },
  lynx: {
    puzzle: [
      { id: 1, img: imgs.lynx.puzzle[1], text: "Балканскиот рис е ретко и загрозено животно.", textSq: 'Rrëqebulli i Ballkanit është një kafshë e rrallë dhe e rrezikuar.' },
      { id: 2, img: imgs.lynx.puzzle[2], text: "Научниците користат камери за да ги набљудуваат рисовите.", textSq: 'Shkencëtarët përdorin kamera për të vëzhguar rrëqebujt.' },
      { id: 3, img: imgs.lynx.puzzle[3], text: "Рисовите се движат тивко низ густата шума.", textSq: 'Rrëqebujt lëvizin qetësisht nëpër pyllin e dendur.' },
      { id: 4, img: imgs.lynx.puzzle[4], text: "Рисот успешно ја одбранил својата територија.", textSq: 'Rrëqebulli me sukses mbroi territorin e tij.' },
      { id: 5, img: imgs.lynx.puzzle[5], text: "Научниците споделуваат добри вести за популацијата на рисот.", textSq: 'Shkencëtarët ndajnë lajme të mira për populatën e rrëqebullit.' },
      { id: 6, img: imgs.lynx.puzzle[6], text: "Балканскиот рис продолжува да живее слободно во природата.", textSq: 'Rrëqebulli i Ballkanit vazhdon të jetojë i lirë në natyrë.' },
    ],
    coloring: [
      { id: 1, img: imgs.lynx.coloring[1], text: "Рис како седи на карпа.", textSq: 'Rrëqebulli i ulur mbi shkëmb.' },
      { id: 2, img: imgs.lynx.coloring[2], text: "Поставување на фото-замка.", textSq: 'Vendosja e foto-kurthit.' },
      { id: 3, img: imgs.lynx.coloring[3], text: "Шумата во зима.", textSq: 'Pylli në dimër.' },
      { id: 4, img: imgs.lynx.coloring[4], text: "Трагите на рисот во снегот.", textSq: 'Gjurmët e rrëqebullit në borë.' },
      { id: 5, img: imgs.lynx.coloring[5], text: "Семејство рисови во шумата.", textSq: 'Familja e rrëqebujve në pyll.' },
      { id: 6, img: imgs.lynx.coloring[6], text: "Рисот на слобода.", textSq: 'Rrëqebulli i lirë.' },
    ],
  },
  baba: {
    puzzle: [
      { id: 1, img: imgs.baba.puzzle[1], text: "Баба Гун живееше во мала селска куќичка со трева на покривот.", textSq: 'Gjyshja Gun jetonte në një shtëpizë të vogël fshati me bar mbi çati.' },
      { id: 2, img: imgs.baba.puzzle[2], text: "Докторот ѝ рече дека мора да се пресели во голема зграда во градот.", textSq: 'Mjeku i tha se duhej të shpërngulej në një ndërtesë të madhe në qytet.' },
      { id: 3, img: imgs.baba.puzzle[3], text: "Баба Гун тајно си ги донесе кокошките во својот нов стан.", textSq: 'Gjyshja Gun fshehurazi i solli pulat në apartamentin e saj të ri.' },
      { id: 4, img: imgs.baba.puzzle[4], text: "Таа си направи прекрасна градина на својот балкон.", textSq: 'Ajo bëri një kopsht të mrekullueshëm në ballkonin e saj.' },
      { id: 5, img: imgs.baba.puzzle[5], text: "Сега баба Гун е среќна со своите животни во градот!", textSq: 'Tani gjyshja Gun është e lumtur me kafshët e saj në qytet!' }
    ],
    coloring: [
      { id: 1, img: imgs.baba.coloring[1], text: "Баба Гун пред куќичката во село.", textSq: 'Gjyshja Gun para shtëpizës në fshat.' },
      { id: 2, img: imgs.baba.coloring[2], text: "Баба Гун ги пакува своите работи.", textSq: 'Gjyshja Gun paketon gjërat e saj.' },
      { id: 3, img: imgs.baba.coloring[3], text: "Новиот стан во зградата.", textSq: 'Apartamenti i ri në ndërtesë.' },
      { id: 4, img: imgs.baba.coloring[4], text: "Градината на балконот.", textSq: 'Kopshti në ballkon.' },
      { id: 5, img: imgs.baba.coloring[5], text: "Животните во градот.", textSq: 'Kafshët në qytet.' },
      { id: 6, img: imgs.baba.coloring[6], text: "Среќа во новиот дом.", textSq: 'Lumturi në shtëpinë e re.' }
    ]
  },
  octopus: {
    puzzle: [
      { id: 1, img: imgs.octopus.puzzle[1], text: "Октоподот е мајстор за криење и живее на дното на океанот.", textSq: "Oktapodi është mjeshtër i fshehjes dhe jeton në fund të oqeanit." },
      { id: 2, img: imgs.octopus.puzzle[2], text: "Кога е во опасност, тој испушта темен облак од мастило.", textSq: "Kur rrezikohet, ai lëshon një re të errët boje." },
      { id: 3, img: imgs.octopus.puzzle[3], text: "Октоподите се многу паметни и можат да отвораат тегли.", textSq: "Oktapodët janë shumë të zgjuar dhe mund të hapin kavanoza." },
      { id: 4, img: imgs.octopus.puzzle[4], text: "Тие сакаат да си играат со играчки и сложувалки.", textSq: "Ata duan të luajnë me lodra dhe pazëlla." },
      { id: 5, img: imgs.octopus.puzzle[5], text: "Има многу видови октоподи.", textSq: "Ka shumë lloje oktapodësh." },
      { id: 6, img: imgs.octopus.puzzle[6], text: "Октоподите се многу пријателски расположени кон чуварите.", textSq: "Oktapodët janë shumë miqësorë me kujdestarët." },
      { id: 7, img: imgs.octopus.puzzle[7], text: "Октоподот е навистина прекрасно суштество.", textSq: "Oktapodi është vërtet një krijesë e mrekullueshme." }
    ],
    coloring: [
      { id: 1, img: imgs.octopus.coloring[1], text: "Октопод во океанот.", textSq: "Oktapodi në oqean." },
      { id: 2, img: imgs.octopus.coloring[2], text: "Бегство со мастило.", textSq: "Ikja me bojë." },
      { id: 3, img: imgs.octopus.coloring[3], text: "Маскирање зад карпите.", textSq: "Maskimi pas shkëmbinjve." },
      { id: 4, img: imgs.octopus.coloring[4], text: "Игра со топки.", textSq: "Lojë me topa." },
      { id: 5, img: imgs.octopus.coloring[5], text: "Поздрав со пријателите.", textSq: "Përshëndetje me miqtë." },
      { id: 6, img: imgs.octopus.coloring[6], text: "Истражување на дното.", textSq: "Eksplorimi i fundit." }
    ]
  },
  watchmaker: {
    puzzle: [
      { id: 1, img: imgs.watchmaker.puzzle[1], text: "Стариот часовничар живееше сам во својата тивка работилница.", textSq: 'Sahatçiu i vjetër jetonte i vetëm në punishten e tij të qetë.' },
      { id: 2, img: imgs.watchmaker.puzzle[2], text: "Еден ден, едно мало куче се појави перед неговата врата.", textSq: 'Një ditë, një qen i vogël u shfaq para derës së tij.' },
      { id: 3, img: imgs.watchmaker.puzzle[3], text: "Животот во работилницата повторно стана весел и исполнет.", textSq: 'Jeta në punishte u bë përsëri e gëzueshme dhe e plotë.' },
      { id: 4, img: imgs.watchmaker.puzzle[4], text: "Кучето го инспирираше часовничарот да создаде нешто ново.", textSq: 'Qeni e inspiroi sahatçiun të krijonte diçka të re.' },
      { id: 5, img: imgs.watchmaker.puzzle[5], text: "Животот и времето течат убаво кога си со пријател.", textSq: 'Jeta dhe koha rrjedhin bukur kur je me mik.' },
    ],
    coloring: [
      { id: 1, img: imgs.watchmaker.coloring[1], text: "Работилница полна со часовници.", textSq: 'Punishtja plot me sahatë.' },
      { id: 2, img: imgs.watchmaker.coloring[2], text: "Часовничарот со малото куче.", textSq: 'Sahatçiu me qenin e vogël.' },
      { id: 3, img: imgs.watchmaker.coloring[3], text: "Поправање на часовниците.", textSq: 'Riparimi i sahatëve.' },
      { id: 4, img: imgs.watchmaker.coloring[4], text: "Прошетка низ градот заедно.", textSq: 'Shëtitje nëpër qytet bashkë.' },
      { id: 5, img: imgs.watchmaker.coloring[5], text: "Радост во работилницата.", textSq: 'Gëzim në punishte.' },
    ],
  },
  kite: {
    puzzle: [
      { id: 1, img: imgs.kite.puzzle[1], text: "Бојан со денови правеше голем, шарен змеј за летање.", textSq: 'Bojani bëri një balonë të madhe dhe me ngjyra për ditë të tëra.' },
      { id: 2, img: imgs.kite.puzzle[2], text: "При првиот обид, змејот веднаш падна на земјата.", textSq: 'Në përpjekjen e parë, balona ra menjëherë në tokë.' },
      { id: 3, img: imgs.kite.puzzle[3], text: "Бојан беше многу лут и сакаше да се откаже.", textSq: 'Bojani ishte shumë i zemëruar dhe donte të dorëzohej.' },
      { id: 4, img: imgs.kite.puzzle[4], text: "Бојан повторно се обиде со нова стратегија.", textSq: 'Bojani u përpoq sërish me një strategji të re.' },
      { id: 5, img: imgs.kite.puzzle[5], text: "Змејот конечно полета високо во небото.", textSq: 'Balona më në fund fluturoi lart në qiell.' },
      { id: 6, img: imgs.kite.puzzle[6], text: "Бојан научи дека трпението е клуч за успех.", textSq: 'Bojani mësoi se durimi është çelësi i suksesit.' },
    ],
    coloring: [
      { id: 1, img: imgs.kite.coloring[1], text: "Бојан во својата работилница.", textSq: 'Bojani në punishten e tij.' },
      { id: 2, img: imgs.kite.coloring[2], text: "Трчање на ливадата.", textSq: 'Vrapim në livadh.' },
      { id: 3, img: imgs.kite.coloring[3], text: "Дедото му помага на Бојан.", textSq: 'Gjyshi e ndihmon Bojanin.' },
      { id: 4, img: imgs.kite.coloring[4], text: "Успешен полет на змејот.", textSq: 'Fluturim i suksesshëm i balonës.' },
      { id: 5, img: imgs.kite.coloring[5], text: "Среќниот Бојан и неговиот змеј.", textSq: 'Bojani i lumtur dhe balona e tij.' },
      { id: 6, img: imgs.kite.coloring[6], text: "Пролетен ден на ливадата.", textSq: 'Ditë pranvere në livadh.' },
    ],
  },
  rabbit: {
    puzzle: [
      { id: 1, img: imgs.rabbit.puzzle[1], text: "Зајакот уживаше во мирното попладне во шумата.", textSq: "Lepuri po shijonte pasditen e qetë në pyll." },
      { id: 2, img: imgs.rabbit.puzzle[2], text: "Одеднаш, земјата почна силно да се тресе.", textSq: "Papritmas, toka filloi të dridhej fort." },
      { id: 3, img: imgs.rabbit.puzzle[3], text: "Кога тресењето престана, во шумата беше безбедно.", textSq: "Kur dridhja ndaloi, pylli ishte i sigurt." },
      { id: 4, img: imgs.rabbit.puzzle[4], text: "Зајакот им помогна на другите животни да се засолнат.", textSq: 'Lepuri ndihmoi kafshët e tjera të gjejnë strehim.' },
      { id: 5, img: imgs.rabbit.puzzle[5], text: "Шумата се смири и сè беше во ред.", textSq: 'Pylli u qetësua dhe gjithçka ishte mirë.' },
      { id: 6, img: imgs.rabbit.puzzle[6], text: "Зајакот стана херој на шумата.", textSq: 'Lepuri u bë hero i pyllit.' },
    ],
    coloring: [
      { id: 1, img: imgs.rabbit.coloring[1], text: "Зајакот во шумата.", textSq: "Lepuri në pyll." },
      { id: 2, img: imgs.rabbit.coloring[2], text: "Лавот го смирува зајакот.", textSq: "Luani e qetëson lepurin." },
      { id: 3, img: imgs.rabbit.coloring[3], text: "Среќен крај за сите.", textSq: "Fund i lumtur për të gjithë." },
      { id: 4, img: imgs.rabbit.coloring[4], text: "Другите животни му благодараат на зајакот.", textSq: 'Kafshët e tjera i falënderojnë lepurit.' },
      { id: 5, img: imgs.rabbit.coloring[5], text: "Одмор по земјотресот.", textSq: 'Pushim pas tërmetit.' },
      { id: 6, img: imgs.rabbit.coloring[6], text: "Мир во шумата.", textSq: 'Paqe në pyll.' },
    ],
  },
  puffins: {
    puzzle: [
      { id: 1, img: imgs.puffins.puzzle[1], text: "Морските папагалчиња се враќаат на островот за да снесат јајца.", textSq: "Papagajtë e detit kthehen në ishull për të bërë vezë." },
      { id: 2, img: imgs.puffins.puzzle[2], text: "Родителите им носат риба на малите папагалчиња.", textSq: "Prindërit u sjellin peshk papagajve të vegjël." },
      { id: 3, img: imgs.puffins.puzzle[3], text: "Децата ги спасуваат папагалчињата во текот на ноќта.", textSq: "Fëmijët shpëtojnë papagajtë gjatë natës." },
      { id: 4, img: imgs.puffins.puzzle[4], text: "Хана ги пушта папагалчињата слободно во морето.", textSq: "Hana lëshon papagajtë e lirë në det." },
      { id: 5, img: imgs.puffins.puzzle[5], text: "Грижата за природата е одговорност на сите.", textSq: 'Kujdesi për natyrën është përgjegjësi e të gjithëve.' },
      { id: 6, img: imgs.puffins.puzzle[6], text: "Морето е дом на папагалчињата.", textSq: 'Deti është shtëpia e papagajve.' },
    ],
    coloring: [
      { id: 1, img: imgs.puffins.coloring[1], text: "Папагалчиња на гребенот.", textSq: "Papagajtë në shkëmb." },
      { id: 2, img: imgs.puffins.coloring[2], text: "Клун полн со риби.", textSq: "Sqepi plot me peshq." },
      { id: 3, img: imgs.puffins.coloring[3], text: "Акција за спасување.", textSq: "Aksioni i shpëtimit." },
      { id: 4, img: imgs.puffins.coloring[4], text: "Лет кон слободата.", textSq: "Fluturim drejt lirisë." },
      { id: 5, img: imgs.puffins.coloring[5], text: "Папагалчиња под вода.", textSq: 'Papagajtë nën ujë.' },
      { id: 6, img: imgs.puffins.coloring[6], text: "Радост на морето.", textSq: 'Gëzim në det.' },
    ],
  },
  eagle: {
    puzzle: [
      { id: 1, img: imgs.eagle.puzzle[1], text: "Еден фармер најде мало паднато орле на планината.", textSq: 'Një fermer gjeti një shqiponjë të vogël të rënë në mal.' },
      { id: 2, img: imgs.eagle.puzzle[2], text: "Орелот порасна во дворот заедно со кокошките.", textSq: 'Shqiponja u rrit në oborr bashkë me pulat.' },
      { id: 3, img: imgs.eagle.puzzle[3], text: "Еден човек дојде да му помогне на орелот да полета.", textSq: 'Një burrë erdhi për ta ndihmuar shqiponjën të fluturonte.' },
      { id: 4, img: imgs.eagle.puzzle[4], text: "Орелот ги рашири крилјата и конечно полета слободно.", textSq: 'Shqiponja hapi krahët dhe më në fund fluturoi e lirë.' },
      { id: 5, img: imgs.eagle.puzzle[5], text: "Орелот бараше соплеменици во небото.", textSq: 'Shqiponja kërkoi bashkëfarësorë në qiell.' },
      { id: 6, img: imgs.eagle.puzzle[6], text: "Слободата значи сè за орелот.", textSq: 'Liria do të thotë gjithçka për shqiponjën.' },
    ],
    coloring: [
      { id: 1, img: imgs.eagle.coloring[1], text: "Малото орле во гнездото.", textSq: 'Shqiponja e vogël në fole.' },
      { id: 2, img: imgs.eagle.coloring[2], text: "Орелот јаде со кокошките.", textSq: 'Shqiponja ha me pulat.' },
      { id: 3, img: imgs.eagle.coloring[3], text: "Обид за полетување од покривот.", textSq: 'Përpjekje për fluturim nga çatia.' },
      { id: 4, img: imgs.eagle.coloring[4], text: "Сонцето изгрева зад планината.", textSq: 'Dielli lind pas malit.' },
      { id: 5, img: imgs.eagle.coloring[5], text: "Орелот кружи над планината.", textSq: 'Shqiponja rrotullohet mbi mal.' },
      { id: 6, img: imgs.eagle.coloring[6], text: "Величественото летање на орелот.", textSq: 'Fluturimi madhështor i shqiponjës.' },
    ],
  },
  pita: {
    puzzle: [
      { id: 1, img: imgs.pita.puzzle[1], text: "Баба и внукот направија вкусна пита.", textSq: 'Gjyshja dhe nipi bënë një pite të shijshme.' },
      { id: 2, img: imgs.pita.puzzle[2], text: "Тие ја оставија питата на прозорецот да се излади.", textSq: 'Ata e lanë piten në dritare që të ftohej.' },
      { id: 3, img: imgs.pita.puzzle[3], text: "Едно животно се обиде да ја украде питата.", textSq: 'Një kafshë u përpoq ta vidhte piten.' },
      { id: 4, img: imgs.pita.puzzle[4], text: "На крајот сите заедно ја јадеа питата.", textSq: 'Në fund të gjithë së bashku e hëngrën piten.' },
      { id: 5, img: imgs.pita.puzzle[5], text: "Питата ги зближи непријателите.", textSq: 'Pita i afroi armiqtë.' },
      { id: 6, img: imgs.pita.puzzle[6], text: "Прошка и помирување со сладок залак.", textSq: 'Falje dhe pajtim me një kafshatë të ëmbël.' },
    ],
    coloring: [
      { id: 1, img: imgs.pita.coloring[1], text: "Месење на питата.", textSq: 'Zënia e pites.' },
      { id: 2, img: imgs.pita.coloring[2], text: "Питата на прозорецот.", textSq: 'Pitja në dritare.' },
      { id: 3, img: imgs.pita.coloring[3], text: "Шумските пријатели.", textSq: 'Miqtë e pyllit.' },
      { id: 4, img: imgs.pita.coloring[4], text: "Заедничка гозба.", textSq: 'Gosti e përbashkët.' },
      { id: 5, img: imgs.pita.coloring[5], text: "Срдечно барање прошка.", textSq: 'Kërkesë e sinqertë falje.' },
      { id: 6, img: imgs.pita.coloring[6], text: "Нови пријатели за секогаш.", textSq: 'Miq të rinj për gjithmonë.' },
    ],
  },
  hiking: {
    puzzle: [
      { id: 1, img: imgs.hiking.puzzle[1], text: "Децата се подготвуваа за голем излет во планина.", textSq: 'Fëmijët po përgatiteshin për një udhëtim të madh në mal.' },
      { id: 2, img: imgs.hiking.puzzle[2], text: "Патот беше стрмен, но тие не се откажуваа.", textSq: 'Rruga ishte e pjerrët, por ata nuk u dorëzuan.' },
      { id: 3, img: imgs.hiking.puzzle[3], text: "Конечно стигнаа до прекрасниот водопад.", textSq: 'Më në fund arritën te ujëvara e mrekullueshme.' },
      { id: 4, img: imgs.hiking.puzzle[4], text: "Сите заедно уживаа во природата.", textSq: 'Të gjithë së bashku shijuan natyrën.' },
      { id: 5, img: imgs.hiking.puzzle[5], text: "Направија многу убави фотографии.", textSq: 'Bënë shumë fotografi të bukura.' },
      { id: 6, img: imgs.hiking.puzzle[6], text: "Изгрејсонце во планината.", textSq: 'Lindja e diellit në mal.' },
      { id: 7, img: imgs.hiking.puzzle[7], text: "Враќање дома со убави спомени.", textSq: 'Kthimi në shtëpi me kujtime të bukura.' }
    ],
    coloring: [
      { id: 1, img: imgs.hiking.coloring[1], text: "Пакување на ранците.", textSq: 'Paketimi i çantave.' },
      { id: 2, img: imgs.hiking.coloring[2], text: "Пешачење низ шумата.", textSq: 'Ecuri nëpër pyll.' },
      { id: 3, img: imgs.hiking.coloring[3], text: "Игра крај водопадот.", textSq: 'Lojë pranë ujëvarës.' },
      { id: 4, img: imgs.hiking.coloring[4], text: "Одмор на ливадата.", textSq: 'Pushim në livadh.' },
      { id: 5, img: imgs.hiking.coloring[5], text: "Планински пејзаж.", textSq: 'Peizazh malor.' },
      { id: 6, img: imgs.hiking.coloring[6], text: "Цвеќиња во планината.", textSq: 'Lule në mal.' },
      { id: 7, img: imgs.hiking.coloring[7], text: "Шумски животни.", textSq: 'Kafshët e pyllit.' }
    ]
  },
  fossil: {
    puzzle: [
      { id: 1, img: imgs.fossil.puzzle[1], text: "Мина најде необичен камен во својот двор.", textSq: 'Mina gjeti një gur të pazakontë në oborrin e saj.' },
      { id: 2, img: imgs.fossil.puzzle[2], text: "Таа го однесе каменот кај наставникот по биологија.", textSq: 'Ajo e çoi gurin te mësuesi i biologjisë.' },
      { id: 3, img: imgs.fossil.puzzle[3], text: "Се покажа дека тоа е многу стар фосил.", textSq: 'Doli se ishte një fosil shumë i vjetër.' },
      { id: 4, img: imgs.fossil.puzzle[4], text: "Целото училиште беше возбудено за пронајдокот.", textSq: 'E gjithë shkolla ishte e emocionuar për zbulimin.' },
      { id: 5, img: imgs.fossil.puzzle[5], text: "Направија мала изложба во училницата.", textSq: 'Bënë një ekspozitë të vogël në klasë.' },
      { id: 6, img: imgs.fossil.puzzle[6], text: "Мина стана вистински млад истражувач.", textSq: 'Mina u bë një kërkuese e vërtetë e re.' },
      { id: 7, img: imgs.fossil.puzzle[7], text: "Учење за праисторискиот свет.", textSq: 'Mësimi për botën parahistorike.' }
    ],
    coloring: [
      { id: 1, img: imgs.fossil.coloring[1], text: "Мина во градината.", textSq: 'Mina në kopsht.' },
      { id: 2, img: imgs.fossil.coloring[2], text: "Истражување со лупа.", textSq: 'Hulumtim me thjerrëz.' },
      { id: 3, img: imgs.fossil.coloring[3], text: "Во училишната лабораторија.", textSq: 'Në laboratorin e shkollës.' },
      { id: 4, img: imgs.fossil.coloring[4], text: "Фосилот на диносаурус.", textSq: 'Fosili i dinozaurit.' },
      { id: 5, img: imgs.fossil.coloring[5], text: "Разговор со научници.", textSq: 'Bisedë me shkencëtarët.' },
      { id: 6, img: imgs.fossil.coloring[6], text: "Цртање на фосилот.", textSq: 'Vizatimi i fosilit.' },
      { id: 7, img: imgs.fossil.coloring[7], text: "Среќниот пронаоѓач.", textSq: 'Zbuluesi i lumtur.' }
    ]
  },
  pot: {
    puzzle: [
      { id: 1, img: imgs.pot.puzzle[1], text: "Царот им даде на сите деца по едно семе да го засадат.", textSq: 'Perandori u dha të gjithë fëmijëve nga një farë për ta mbjellë.' },
      { id: 2, img: imgs.pot.puzzle[2], text: "Ли го негуваше своето семе со многу љубов, но ништо не растеше.", textSq: 'Li e kujdesej për farën e tij me shumë dashuri, por asgjë nuk rritej.' },
      { id: 3, img: imgs.pot.puzzle[3], text: "Сите други деца донесоа саксии со прекрасни цветови.", textSq: 'Të gjithë fëmijët e tjerë sollën saksi me lule të mrekullueshme.' },
      { id: 4, img: imgs.pot.puzzle[4], text: "Ли му ја покажа на царот својата празна саксија.", textSq: 'Li i tregoi perandorit saksine e tij të zbrazët.' },
      { id: 5, img: imgs.pot.puzzle[5], text: "Царот му даде на Ли голема мудрост.", textSq: 'Perandori i dhuroi Li urtësinë e madhe.' },
      { id: 6, img: imgs.pot.puzzle[6], text: "Ли стана следниот водач на кралството.", textSq: 'Li u bë udhëheqësi i radhës i mbretërisë.' },
    ],
    coloring: [
      { id: 1, img: imgs.pot.coloring[1], text: "Ли ја подготвува земјата.", textSq: 'Li përgatit tokën.' },
      { id: 2, img: imgs.pot.coloring[2], text: "Наводнување на семето.", textSq: 'Ujitja e farës.' },
      { id: 3, img: imgs.pot.coloring[3], text: "Тажниот Ли со празната саксија.", textSq: 'Li i trishtuar me saksine e zbrazët.' },
      { id: 4, img: imgs.pot.coloring[4], text: "Царот го избира својот наследник.", textSq: 'Perandori zgjedh pasardhësin e tij.' },
      { id: 5, img: imgs.pot.coloring[5], text: "Крунисување на новиот владетел.", textSq: 'Kurorëzimi i sundimtarit të ri.' },
      { id: 6, img: imgs.pot.coloring[6], text: "Мудрост и чесност се наградуваат.", textSq: 'Urtësia dhe ndershmëria shpërblehen.' },
    ],
  },
  lakestar: {
    puzzle: [
      { id: 1, img: imgs.lakestar.puzzle[1], text: "Една ноќ, мала ѕвезда падна во езерото.", textSq: 'Një natë, një yll i vogël ra në liqen.' },
      { id: 2, img: imgs.lakestar.puzzle[2], text: "Животните се обидуваа да ја извлечат од водата.", textSq: 'Kafshët u përpoqën ta nxirrnin nga uji.' },
      { id: 3, img: imgs.lakestar.puzzle[3], text: "Езерската ѕвезда почна да свети уште посилно.", textSq: 'Ylli i liqenit filloi të shndriste edhe më fort.' },
      { id: 4, img: imgs.lakestar.puzzle[4], text: "На крајот, ѕвездата се врати на небото.", textSq: 'Në fund, ylli u kthye në qiell.' },
      { id: 5, img: imgs.lakestar.puzzle[5], text: "Малите риби ја чуваа ѕвездата во езерото.", textSq: 'Peshqit e vegjël e ruanin yllin në liqen.' },
      { id: 6, img: imgs.lakestar.puzzle[6], text: "Ѕвездата засветила уште поубаво после авантурата.", textSq: 'Ylli shndriste edhe më bukur pas aventurës.' },
    ],
    coloring: [
      { id: 1, img: imgs.lakestar.coloring[1], text: "Ѕвездена ноќ над езерото.", textSq: 'Natë me yje mbi liqen.' },
      { id: 2, img: imgs.lakestar.coloring[2], text: "Рибите си играат со ѕвездата.", textSq: 'Peshqit luajnë me yllin.' },
      { id: 3, img: imgs.lakestar.coloring[3], text: "Бувот ја набљудува сцената.", textSq: 'Bufi vëzhgon skenën.' },
      { id: 4, img: imgs.lakestar.coloring[4], text: "Магија во природата.", textSq: 'Magji në natyrë.' },
      { id: 5, img: imgs.lakestar.coloring[5], text: "Светлина под водата.", textSq: 'Drita nën ujë.' },
      { id: 6, img: imgs.lakestar.coloring[6], text: "Езерото во ноќта.", textSq: 'Liqeni gjatë natës.' },
    ],
  },
  lambe: {
    puzzle: [
      { id: 1, img: imgs.lambe.puzzle[1], text: "Дедо Ламбе секој ден им носеше храна на своите пријатели - глувците.", textSq: 'Gjyshi Lambe u sillte ushqim miqve të tij - miuve çdo ditë.' },
      { id: 2, img: imgs.lambe.puzzle[2], text: "Глувците му помагаа на дедо Ламбе во неговата работилница.", textSq: 'Miuat e ndihmonin gjyshin Lambe në punishten e tij.' },
      { id: 3, img: imgs.lambe.puzzle[3], text: "Еден ден, тие подготвија големо изненадување.", textSq: 'Një ditë, ata përgatitën një surprizë të madhe.' },
      { id: 4, img: imgs.lambe.puzzle[4], text: "Сите заедно прославија со многу музика и игра.", textSq: 'Të gjithë së bashku festuan me shumë muzikë dhe valle.' },
      { id: 5, img: imgs.lambe.puzzle[5], text: "Дедо Ламбе им раскажуваше приказни на глувците.", textSq: 'Gjyshi Lambe u tregonte histori miuve.' },
      { id: 6, img: imgs.lambe.puzzle[6], text: "Глувците му нацртаа слика на дедо Ламбе.", textSq: 'Miuat i vizatuan një figurë gjyshit Lambe.' },
      { id: 7, img: imgs.lambe.puzzle[7], text: "Пријателството меѓу дедо Ламбе и глувците порасна.", textSq: 'Miqësia midis gjyshit Lambe dhe miuve u rrit.' },
    ],
    coloring: [
      { id: 1, img: imgs.lambe.coloring[1], text: "Дедо Ламбе прави играчки.", textSq: 'Gjyshi Lambe bën lodra.' },
      { id: 2, img: imgs.lambe.coloring[2], text: "Глувците јадат сирење.", textSq: 'Miuat hane djathë.' },
      { id: 3, img: imgs.lambe.coloring[3], text: "Работилница полна со живот.", textSq: 'Punishte plot jetë.' },
      { id: 4, img: imgs.lambe.coloring[4], text: "Весела забава.", textSq: 'Festë e gëzueshme.' },
      { id: 5, img: imgs.lambe.coloring[5], text: "Среќен дедо Ламбе со пријателите.", textSq: 'Gjyshi Lambe i lumtur me miqtë.' },
      { id: 6, img: imgs.lambe.coloring[6], text: "Музика и танц во работилницата.", textSq: 'Muzikë dhe vallëzim në punishte.' },
      { id: 7, img: imgs.lambe.coloring[7], text: "Прекрасно пријателство за цел живот.", textSq: 'Miqësi e mrekullueshme për gjithë jetën.' },
    ],
  },
  lighthouse: {
    puzzle: [
      { id: 1, img: imgs.lighthouse.puzzle[1], text: "Светилникот ги водеше бродовите низ бурното море.", textSq: 'Fari i udhëhiqte anijet nëpër detin e trazuar.' },
      { id: 2, img: imgs.lighthouse.puzzle[2], text: "Чуварот на светилникот секој ден се качуваше до врвот.", textSq: 'Rojtari i farit ngjitej në majë çdo ditë.' },
      { id: 3, img: imgs.lighthouse.puzzle[3], text: "Една ноќ, светлото на светилникот одеднаш згасна.", textSq: 'Një natë, drita e farit u fik papritmas.' },
      { id: 4, img: imgs.lighthouse.puzzle[4], text: "Сите жители на градот дојдоа да помогнат.", textSq: 'Të gjithë banorët e qytetit erdhën për të ndihmuar.' },
      { id: 5, img: imgs.lighthouse.puzzle[5], text: "Светилникот повторно почна да свети посилно од кога било.", textSq: 'Fari filloi të shndriste përsëri më fort se kurrë.' },
      { id: 6, img: imgs.lighthouse.puzzle[6], text: "Бродовите беа безбедни во пристаништето.", textSq: 'Anijet ishin të sigurta në port.' },
      { id: 7, img: imgs.lighthouse.puzzle[7], text: "Мирна ноќ на морето.", textSq: 'Natë e qetë në det.' }
    ],
    coloring: [
      { id: 1, img: imgs.lighthouse.coloring[1], text: "Бранот удира во карпите.", textSq: 'Vala godet shkëmbinjtë.' },
      { id: 2, img: imgs.lighthouse.coloring[2], text: "Скалите на светилникот.", textSq: 'Shkallët e farit.' },
      { id: 3, img: imgs.lighthouse.coloring[3], text: "Чуварот ја чисти леќата.", textSq: 'Rojtari pastron thjerrëzën.' },
      { id: 4, img: imgs.lighthouse.coloring[4], text: "Галебите летаат околу кулата.", textSq: 'Pulëbardhat fluturojnë rreth kullës.' },
      { id: 5, img: imgs.lighthouse.coloring[5], text: "Брод во далечината.", textSq: 'Anije në largësi.' },
      { id: 6, img: imgs.lighthouse.coloring[6], text: "Месечина над морето.", textSq: 'Hëna mbi det.' },
      { id: 7, img: imgs.lighthouse.coloring[7], text: "Светилникот во зори.", textSq: 'Fari në agim.' }
    ]
  },
  forgotten_garden: {
    puzzle: [
      { id: 1, img: imgs.forgotten_garden.puzzle[1], text: "Јана пронајде тајна врата во стариот ѕид.", textSq: 'Jana gjeti një derë të fshehtë në murin e vjetër.' },
      { id: 2, img: imgs.forgotten_garden.puzzle[2], text: "Зад вратата се криеше прекрасна заборавена градина.", textSq: 'Pas derës fshihej një kopsht i mrekullueshëm i harruar.' },
      { id: 3, img: imgs.forgotten_garden.puzzle[3], text: "Градината беше запуштена, па Јана реши да ја среди.", textSq: 'Kopshti ishte i lënë pas dore, kështu që Jana vendosi ta rregullonte.' },
      { id: 4, img: imgs.forgotten_garden.puzzle[4], text: "Наскоро, цвеќињата почнаа повторно да цветаат.", textSq: 'Së shpejti, lulet filluan të lulëzonin përsëri.' },
      { id: 5, img: imgs.forgotten_garden.puzzle[5], text: "Птиците и пеперутките се вратија во градината.", textSq: 'Zogjtë dhe fluturat u kthyen në kopsht.' },
      { id: 6, img: imgs.forgotten_garden.puzzle[6], text: "Градината стана омиленото место на сите деца.", textSq: 'Kopshti u bë vendi i preferuar i të gjithë fëmijëve.' },
      { id: 7, img: imgs.forgotten_garden.puzzle[7], text: "Магијата на природата се врати.", textSq: 'Magjia e natyrës u kthye.' }
    ],
    coloring: [
      { id: 1, img: imgs.forgotten_garden.coloring[1], text: "Стариот клуч на вратата.", textSq: 'Çelësi i vjetër në derë.' },
      { id: 2, img: imgs.forgotten_garden.coloring[2], text: "Фонтаната во центарот на градината.", textSq: 'Shatërvani në qendër të kopshtit.' },
      { id: 3, img: imgs.forgotten_garden.coloring[3], text: "Јана со канта за полевање.", textSq: 'Jana me një kante për ujitje.' },
      { id: 4, img: imgs.forgotten_garden.coloring[4], text: "Рози во полн цуте.", textSq: 'Trëndafila në lulëzim të plotë.' },
      { id: 5, img: imgs.forgotten_garden.coloring[5], text: "Клупа под големото дрво.", textSq: 'Stol nën pemën e madhe.' },
      { id: 6, img: imgs.forgotten_garden.coloring[6], text: "Пеперутки на сонце.", textSq: 'Flutura në diell.' },
      { id: 7, img: imgs.forgotten_garden.coloring[7], text: "Зајдисонце во градината.", textSq: 'Perëndimi i diellit në kopsht.' }
    ]
  }
};

export default inclusiveData;
