import React, { useState, useRef, useEffect } from 'react';

// Дефинирање на патеките до илустрациите
const imgs = {
  shovel: {
    main: 'Gemini_Generated_Image_ed1hrfed1hrfed1h.png',
    happy: 'Gemini_Generated_Image_ntjzjxntjzjxntjz.png',
    comfort: 'Gemini_Generated_Image_gem9rdgem9rdgem9.png'
  },
  lynx: {
    main: 'Gemini_Generated_Image_a0xj05a0xj05a0xj.png',
    camera: 'Gemini_Generated_Image_8i86cr8i86cr8i86.png',
    cave: 'Gemini_Generated_Image_dk2d2wdk2d2wdk2d.png'
  },
  kite: {
    messy: 'Gemini_Generated_Image_ovlkzqovlkzqovlk.png',
    workshop: 'Gemini_Generated_Image_2fxzxn2fxzxn2fxz.png',
    flying: 'Gemini_Generated_Image_22q3ph22q3ph22q3.png'
  },
  watchmaker: {
    sad: 'Gemini_Generated_Image_93tlph93tlph93tl.png',
    dog: 'Gemini_Generated_Image_4gmp3n4gmp3n4gmp.png',
    workshop: 'Gemini_Generated_Image_1rt2501rt2501rt2.png'
  },
  octopus: {
    swimming: 'Gemini_Generated_Image_imotqgimotqgimot.png',
    camouflage: 'Gemini_Generated_Image_j3yja4j3yja4j3yj.png',
    aquarium: 'Gemini_Generated_Image_4t3xbb4t3xbb4t3x.png'
  },
  baba: {
    village: 'Gemini_Generated_Image_ubtmx7ubtmx7ubtm.png',
    sad: 'Gemini_Generated_Image_66pz9466pz9466pz.png',
    roof: 'Gemini_Generated_Image_b0mh53b0mh53b0mh.png',
    q8: 'Gemini_Generated_Image_nnfmepnnfmepnnfm.png'
  },
  kaja: {
    lab: 'Gemini_Generated_Image_pa6gs9pa6gs9pa6g.png',
    comfort: 'Gemini_Generated_Image_mpue84mpue84mpue.png',
    feeder: 'Gemini_Generated_Image_irdou7irdou7irdo.png'
  },
  chest: {
    porch: 'Gemini_Generated_Image_svlevhsvlevhsvle.png',
    finding: 'Gemini_Generated_Image_1e7ixc1e7ixc1e7i.png',
    story: 'Gemini_Generated_Image_tidjntidjntidjnt.png'
  }
};

const storyContent = {
  chest: {
    title: "ТАЈНАТА НА СТАРИОТ КОВЧЕГ",
    text: [
      { type: 'p', content: "Десетгодишниот Марко воопшто не беше среќен. Неговите родители мораа да отпатуваат службено, па тој требаше да го помене првиот месец од летниот распуст кај своите баба и дедо во селото. За Марко, кој беше навикнат на брзиот градски живот, селото значеше само едно: досада. Таму немаше брз интернет, немаше видеоигри, ниту пак негови врсници со кои би можел да вози велосипед." },
      { type: 'img', src: imgs.chest.porch, alt: "Марко на тремот" },
      { type: 'p', content: "Првите неколку дена Марко само седеше на тремот и воздивнуваше. Едно попладне, дедо му Јован му пријде со мала насмевка на лицето. „Марко, бидејќи немаш што да правиш, би сакал ли да ми помогнеш? Оди горе на стариот таван и најди го мојот стар џебен часовник. Мислам дека е во една од картонските кутии до прозорецот.“" },
      { type: 'p', content: "Марко неволно стана и се искачи по дрвените скали кои чкрипеа под неговите нозе. Таванот беше темен, мирисаше на стара хартија и суви билки, а низ малиот прозорец продираше само еден тенок зрак сончева светлина. Насекаде имаше стари предмети: скршена столица, прашливи книги и еден куп кутии." },
      { type: 'p', content: "Додека го бараше часовникот, Марко забележа нешто чудно скриено под едно старо ќебе. Тоа не беше картонска кутија, туку мал, дрвен ковчег со изрезбани цветови на капакот. Ковчегот имаше мала бакарна брава, но таа не беше заклучена." },
      { type: 'img', src: imgs.chest.finding, alt: "Наоѓање на ковчегот" },
      { type: 'p', content: "Срцето на Марко почна забрзано да чука. „Можеби ова е скриено богатство!“ – си помисли тој. Очекуваше да види стари златници или можеби некој вреден накит. Внимателно го подигна капакот." },
      { type: 'p', content: "Но, внатре немаше ниту злато, ниту дијаманти. Марко разочарано здивна. Во ковчегот имаше само три обични предмети: една многу стара и избледена фотографија од две момчиња кои ловат риби, едно обично мазно бело камче и едно дрвено свирче." },
      { type: 'blockquote', content: "„Златото се троши, Марко, но спомените остануваат засекогаш.“" },
      { type: 'img', src: imgs.chest.story, alt: "Дедото раскажува" },
      { type: 'p', content: "Марко го гледаше дедо си со широко отворени очи. Одеднаш, овие обични предмети повеќе не му изгледаа како ѓубре. Тие беа парчиња од животот на неговиот дедо, мали предмети кои чуваа големи, среќни приказни." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Зошто Марко требаше да го помене распустот во селото?", options: ["Затоа што сакаше да истражува", "Затоа што родителите мораа службено да патуваат", "Затоа што сакаше богатство", "Затоа што во градот му беше досадно"], correct: "Затоа што родителите мораа службено да патуваат" },
      { id: 2, type: 'text', q: "Наведи две работи кои на Марко му недостасуваа во селото." },
      { id: 3, type: 'mcq', q: "Што го замоли дедо Јован да најде Марко на таванот?", options: ["Картонски кутии", "Едно старо ќебе", "Стар џебен часовник", "Мал дрвен ковчег"], correct: "Стар џебен часовник" }
    ]
  },
  kaja: {
    title: "НАЈВРЕДНИОТ ПРОНАЈДОК",
    text: [
      { type: 'p', content: "Десетгодишната Каја не беше обично девојче. Додека другите деца носеа играчки во своите ранци, Каја секогаш носеше мала зелена тетратка и молив. Нејзината соба личеше на тајна лабораторија. Насекаде имаше празни картонски кутии, жици, стари копчиња и туби со лепак." },
      { type: 'img', src: imgs.kaja.lab, alt: "Каја во лабораторија" },
      { type: 'p', content: "Еден ден, училиштето објави голем натпревар: „Млад пронаоѓач на годината“. Наградата беше голем златен медал. Каја веднаш реши да направи нешто спектакуларно. Сакаше да конструира робот кој сам ќе ја чисти нејзината соба. Го нарече „Чистомат 3000“." },
      { type: 'p', content: "Цела недела Каја сечеше, лепеше и врзуваше. Употреби стара метла, една пластична кофа и многу ластичиња. Но, вечерта пред натпреварот, кога реши да го тестира роботот, се случи катастрофа. Штом го повлече јажето за да го стартува, едно ластиче се скина. Пластичната кофа ѝ падна право на главата, а старата метла расфрли прашина насекаде низ собата." },
      { type: 'img', src: imgs.kaja.comfort, alt: "Дедото ја теши Каја" },
      { type: 'p', content: "Каја седна на подот, опкружена со скршените делови. Очите ѝ се наполнија со солзи. Се чувствуваше поразено и сакаше целосно да се откаже од натпреварот. Во тој момент, во собата влезе нејзиниот дедо Марко. Тој не се насмеа на нередот." },
      { type: 'p', content: "„Не секоја идеја успева од првпат, Каја“ – рече тој со топол глас. – „Но, знаеш, понекогаш луѓето бараат многу комплицирани решенија, а забораваат на едноставните проблеми што се наоѓаат право пред нивните очи.“" },
      { type: 'p', content: "Каја ги погледна врапчињата надвор, а потоа ги погледна расфрланите материјали. Одеднаш, во нејзината глава се роди нова идеја! Таа ја избриша прашината од лицето и веднаш се фати за работа." },
      { type: 'img', src: imgs.kaja.feeder, alt: "Хранилка за птици" },
      { type: 'p', content: "Овој пат не правеше комплициран робот. Зеде едно празно пластично шише и две дрвени лажици за готвење. Направи мали дупки на шишето и ги протна лажиците низ нив. Каја сфати дека највредните идеи им помагаат на другите." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Што секогаш носеше Каја со себе во својот ранец?", options: ["Дрвени лажици", "Пластични шишиња", "Зелена тетратка и молив", "Играчки и книги"], correct: "Зелена тетратка и молив" },
      { id: 2, type: 'text', q: "Што требаше да прави првиот пронајдок на Каја, наречен „Чистомат 3000“?" },
      { id: 3, type: 'mcq', q: "Која награда ја доби Каја на училишниот натпревар?", options: ["Златен медал", "Награда за најдобар робот", "Зелена диплома за грижа кон природата", "Награда за најчиста соба"], correct: "Зелена диплома за грижа кон природата" }
    ]
  },
  shovel: {
    title: "ЧИЧКОТО СО ЛОПАТАТА",
    text: [
      { type: 'p', content: "Дојде еден чичко со лопата. Си влезе во нашиот двор, си седна на скалите, а лопатата ја стави меѓу нозете. Потоа извади некакво шамиче и си ја избриша потта од збрчканото лице. – Да има една убава вода, слатко би се напил! – рече." },
      { type: 'img', src: imgs.shovel.main, alt: "Чичкото на скалите" },
      { type: 'p', content: "Билјана брзо му донесе чаша вода. Чичкото беше дојден да прекопа еден дел од нашиот двор. Беше низок, со старец качкет и шарена кошула. Иако имаше само два-три заба, беше многу симпатичен и пријатен." },
      { type: 'p', content: "Чичкото почна да копа. Работеше бавно. Честопати и ќе офнеше, а потоа ќе се исправеше и со рацете ќе се фатеше за половината. Годините си го правеа своето. Билјана постојано се врткаше околу него и му помагаше собирајќи ги камчињата." },
      { type: 'img', src: imgs.shovel.happy, alt: "Билјана му помага" },
      { type: 'p', content: "Во текот на тие три дена тие станаа големи пријатели. Заедно ручаа, тој ѝ раскажуваше приказни, а таа внимателно го слушаше. Кога заврши со работата, чичкото нежно ја бакна Билјана в чело и си замина." },
      { type: 'img', src: imgs.shovel.comfort, alt: "Повторна средба" },
      { type: 'p', content: "По неколку дена, чичкото пак дојде. Но, овој пат беше без лопата. Имаше нова кошула и нова капа. Дојде само за да ја види Билјана и да ѝ раскажува нови приказни." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Зошто чичкото дојде во дворот?", options: ["Да се одмори", "Да прекопа дел од дворот", "Да бара вода", "Да бара работа"], correct: "Да прекопа дел од дворот" },
      { id: 2, type: 'text', q: "Како Билјана му помагаше на чичкото додека тој работеше?" },
      { id: 3, type: 'mcq', q: "Која е главната порака на овој расказ?", options: ["Работата е тешка", "Пријателството не знае за години", "Треба да се пие многу вода", "Секогаш носи лопата"], correct: "Пријателството не знае за години" }
    ]
  },
  lynx: {
    title: "БАЛКАНСКИОТ РИС",
    text: [
      { type: 'p', content: "Во шумите на планината Бистра и Националниот парк Маврово, се крие едно од најретките животни – балканскиот рис. Бидејќи вешто се крие, жителите го нарекуваат „шумски дух“." },
      { type: 'img', src: imgs.lynx.main, alt: "Балкански рис" },
      { type: 'p', content: "Рисот изгледа како огромна домашна мачка. Најпрепознатливиот знак се неговите уши со црни прамени кои личат на четкички. Тие му помагаат да слуша многу подобро." },
      { type: 'img', src: imgs.lynx.camera, alt: "Скриена камера" },
      { type: 'p', content: "Рисот е ноќен ловец со неверојатен вид. Може да забележи плен во целосна темнина на 75 метри. Се храни со срни, зајаци и диви кози." },
      { type: 'img', src: imgs.lynx.cave, alt: "Младенчиња" },
      { type: 'p', content: "Денес рисот е во голема опасност. Останати се помалку од 50 возрасни единки. Мораме да го заштитиме ова наше природно богатство." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Како локалните жители го нарекуваат рисот?", options: ["Планински лав", "Шумски дух", "Дива мачка", "Ноќен ловец"], correct: "Шумски дух" },
      { id: 2, type: 'text', q: "Наведи две причини зошто рисот е во опасност да исчезне." },
      { id: 3, type: 'mcq', q: "Колку метри може да види рисот во темница?", options: ["10 метри", "50 метри", "75 метри", "100 метри"], correct: "75 метри" }
    ]
  },
  baba: {
    title: "ЦВЕЌИЊА НА ПОКРИВОТ",
    text: [
      { type: 'p', content: "Баба Гун живеела во селска куќичка која личела на играчка. Покривот ѝ бил покриен со трева и цвеќиња. Имала многу животни: крава, седум кокошки, две овци и мачка." },
      { type: 'img', src: imgs.baba.village, alt: "Селската куќа" },
      { type: 'p', content: "Кога се преселила во градот, станот ѝ изгледал како „стаклена кутија“. Била тажна бидејќи ѝ недостасувале нејзините животни. Тогаш раскажувачот на шега ѝ предложил да си ги донесе." },
      { type: 'img', src: imgs.baba.sad, alt: "Баба Гун е тажна" },
      { type: 'p', content: "Баба Гун го прифатила предлогот сериозно. Изнајмила камион и ги донела сите животни. Направила фарма на рамниот покрив на зградата, со трева и дрвена ограда." },
      { type: 'img', src: imgs.baba.roof, alt: "Фарма на покрив" },
      { type: 'p', content: "Сега Баба Гун е повторно среќна, а свежите јајца ги дели со сите соседи. Градот доби свое село на самиот врв." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Каде живеела Баба Гун пред да се пресели во градот?", options: ["Во стаклена кутија", "Во селска куќичка", "На фарма за коњи", "Во планина"], correct: "Во селска куќичка" },
      { id: 2, type: 'text', q: "Зошто новиот стан на Баба Гун ѝ изгледал како „стаклена кутија“?" },
      { id: 3, type: 'mcq', q: "Која била поуката на оваа приказна?", options: ["Секогаш живеј во село", "Станот мора да биде бел", "Можеш да се чувствуваш како дома ако ги понесеш саканите работи", "Животните не смеат да влезат во град"], correct: "Можеш да се чувствуваш како дома ако ги понесеш саканите работи" }
    ]
  },
  octopus: {
    title: "ПРЕКРАСНИОТ ОКТОПОД",
    text: [
      { type: 'p', content: "Октоподите се морски животни со осум долги пипала. Нивните пипала се многу силни и имаат моќни чашки за вшмукување. Живеат во сите океани, но најмногу ги сакаат топлите води." },
      { type: 'img', src: imgs.octopus.swimming, alt: "Октопод плива" },
      { type: 'p', content: "Октоподите се експерти за камуфлажа. Можат да ја променат бојата на кожата за неколку секунди за да станат невидливи меѓу карпите и коралите." },
      { type: 'img', src: imgs.octopus.camouflage, alt: "Камуфлажа" },
      { type: 'p', content: "Тие немаат коски, па можат да се протнат низ многу тесни места. Научниците откриле дека октоподите се многу интелигентни – знаат да отвораат тегли и да решаваат сложувалки." },
      { type: 'img', src: imgs.octopus.aquarium, alt: "Октопод во аквариум" },
      { type: 'p', content: "Во аквариумите, тие ги препознаваат своите чувари и дури стануваат црвени кога се возбудени да ги видат." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Колку пипала има октоподот?", options: ["Шест", "Осум", "Десет", "Дванаесет"], correct: "Осум" },
      { id: 2, type: 'text', q: "Наведи еден пример од текстот што покажува дека октоподите се паметни." },
      { id: 3, type: 'mcq', q: "Што прави октоподот кога сака да избегне опасност?", options: ["Почнува да пее", "Испушта облак од темно мастило", "Се прави дека спие", "Гради камена куќа"], correct: "Испушта облак од темно мастило" }
    ]
  },
  watchmaker: {
    title: "ТАЈНАТА НА СТАРИОТ ЧАСОВНИЧАР",
    text: [
      { type: 'p', content: "Марко се преселил во нов град и му било многу тажно. Неговиот прв сосед, господин Петар, бил стар часовничар кој секогаш изгледал намуртено." },
      { type: 'img', src: imgs.watchmaker.sad, alt: "Марко е тажен" },
      { type: 'p', content: "Кога на Марко му се расипала омилената играчка – лимен пес – тој ја оставил пред работилницата на Петар. Следното утро играчката била поправена со порака: „На механизмите им треба грижа, исто како и на луѓето.“" },
      { type: 'img', src: imgs.watchmaker.dog, alt: "Поправената играчка" },
      { type: 'p', content: "Марко и старецот станале пријатели. Марко научил како работат запчаниците, а господин Петар повторно почнал да се смее. Работилницата веќе не била тивка." },
      { type: 'img', src: imgs.watchmaker.workshop, alt: "Во работилницата" },
      { type: 'p', content: "Марко сфатил дека вистинските пријателства се раѓаат таму каде што најмалку очекуваме." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Што му се расипа на Марко?", options: ["Часовник", "Вистинско куче", "Лимен пес", "Велосипед"], correct: "Лимен пес" },
      { id: 2, type: 'text', q: "Што сфатил Марко за господин Петар на крајот од летото?" },
      { id: 3, type: 'mcq', q: "Што се слушало од работилницата на крајот од приказната?", options: ["Само тик-так", "Детска смеа", "Гласна музика", "Лаење на куче"], correct: "Детска смеа" }
    ]
  },
  kite: {
    title: "ЗМЕЈОТ НА ТРПЕНИЕТО",
    text: [
      { type: 'p', content: "Горјан бил десетгодишно момче кое секогаш брзало. Сакал неговиот змеј за натпреварот да биде готов прв, па го направил набрзина од тенка хартија." },
      { type: 'img', src: imgs.kite.messy, alt: "Скршениот змеј" },
      { type: 'p', content: "Змејот се распаднал при првиот посилен ветер. Дедо му Ило, искусен столар, го научил дека добрите работи бараат труд и трпение." },
      { type: 'img', src: imgs.kite.workshop, alt: "Работа со дедото" },
      { type: 'p', content: "Заедно направиле нов змеј од издржливо платно од стар чадор. Горјан научил да ги мери стапчињата и да врзува цврсти јазли." },
      { type: 'img', src: imgs.kite.flying, alt: "Успешен лет" },
      { type: 'p', content: "На денот на натпреварот, змејот на Горјан летал највисоко и најстабилно. Горјан ја добил наградата, но и важна лекција за животот." }
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Од што бил направен првиот змеј на Горјан?", options: ["Од платно", "Од тенка хартија", "Од пластика", "Од дрво"], correct: "Од тенка хартија" },
      { id: 2, type: 'text', q: "Што користеле Горјан и дедо му за да го направат вториот змеј?" },
      { id: 3, type: 'mcq', q: "Која е најважната лекција што ја научил Горјан?", options: ["Дека треба да се победи Виктор", "Дека добрите работи бараат трпение и труд", "Дека купените играчки се подобри", "Дека ветерот е опасен"], correct: "Дека добрите работи бараат трпение и труд" }
    ]
  }
};

// --- Помошни функции за звук (Web Audio API) ---
const createAudioContext = () => new (window.AudioContext || window.webkitAudioContext)();

const playSound = (type) => {
  const ctx = createAudioContext();
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  switch(type) {
    case 'success':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.setValueAtTime(800, ctx.currentTime + 0.1);
      osc.start(); osc.stop(ctx.currentTime + 0.2);
      break;
    default:
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.start(); osc.stop(ctx.currentTime + 0.1);
  }
};

export default function App() {
  const [activeStory, setActiveStory] = useState('home');
  const [progress, setProgress] = useState(0);
  const [highlightMode, setHighlightMode] = useState(false);
  const [avatarMsg, setAvatarMsg] = useState("");
  const [step, setStep] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [textAns, setTextAns] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    setStep(0);
    setSelectedOpt(null);
    setTextAns("");
    setProgress(activeStory === 'home' ? 0 : 10);
    
    const greetings = {
      home: "Добредојде во digitalPIRLS! Избери приказна за да започнеш.",
      chest: "Марко мисли дека е досадно во селото. Ајде да му покажеме дека греши!",
      kaja: "Каја е вистински пронаоѓач. Ајде да видиме што измислила!",
      baba: "Баба Гун има интересна идеја за нејзиниот покрив!",
      octopus: "Нурни длабоко! Октоподот нè чека во океанот.",
      watchmaker: "Секој механизам заслужува втора шанса.",
      kite: "Трпението е клучот до успехот.",
      lynx: "Балканскиот рис е нашиот шумски дух.",
      shovel: "Едно ново пријателство се раѓа во дворот."
    };
    setAvatarMsg(greetings[activeStory] || "Прочитај го текстот внимателно!");
  }, [activeStory]);

  const handleHighlight = () => {
    if (!highlightMode) return;
    const sel = window.getSelection();
    if (!sel.rangeCount || sel.toString().length === 0) return;
    const range = sel.getRangeAt(0);
    if (textRef.current?.contains(range.commonAncestorContainer)) {
      const mark = document.createElement('mark');
      mark.className = 'bg-yellow-300 rounded px-1 cursor-pointer';
      try { range.surroundContents(mark); setAvatarMsg("Одлично маркирано!"); } catch(e) {}
      sel.removeAllRanges();
    }
  };

  const handleMCQ = (opt, correct) => {
    setSelectedOpt(opt);
    if (opt === correct) {
      playSound('success');
      setAvatarMsg("Одлично! Одиме на следното прашање.");
      setProgress(Math.min(100, progress + 20));
      setTimeout(() => { setStep(step + 1); setSelectedOpt(null); }, 1500);
    } else {
      setAvatarMsg("Хмм, обиди се повторно. Одговорот е во текстот!");
    }
  };

  const handleTextSubmit = () => {
    if (textAns.trim().length > 5) {
      playSound('success');
      setAvatarMsg("Прекрасно објаснување! ⭐");
      setProgress(Math.min(100, progress + 30));
      setStep(step + 1);
      setTextAns("");
    } else {
      setAvatarMsg("Те молам напиши подетален одговор.");
    }
  };

  if (activeStory === 'home') {
    return (
      <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center font-sans">
        <div className="mb-12 text-center">
          <h1 className="text-7xl font-black text-indigo-900 mb-2 italic underline decoration-yellow-400 decoration-8 underline-offset-8">digitalPIRLS</h1>
          <p className="text-xl text-slate-500 mt-4 font-medium uppercase tracking-[0.2em]">Интерактивна проверка на знаењето</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {[
            { id: 'chest', icon: '🗝️', title: 'Тајната на ковчегот', color: 'bg-amber-50/30 border-amber-100' },
            { id: 'kaja', icon: '💡', title: 'Највредниот пронајдок', color: 'bg-yellow-50/30 border-yellow-100' },
            { id: 'baba', icon: '🌻', title: 'Цвеќиња на покривот', color: 'bg-pink-50/30 border-pink-100' },
            { id: 'octopus', icon: '🐙', title: 'Прекрасниот октопод', color: 'bg-indigo-50/30 border-indigo-100' },
            { id: 'watchmaker', icon: '🕰️', title: 'Тајната на часовничарот', color: 'bg-orange-50/30 border-orange-100' },
            { id: 'kite', icon: '🪁', title: 'Змејот на трпението', color: 'bg-sky-50/30 border-sky-100' },
            { id: 'lynx', icon: '🐾', title: 'Балканскиот рис', color: 'bg-emerald-50/30 border-emerald-100' },
            { id: 'shovel', icon: '⛏️', title: 'Чичкото со лопатата', color: 'bg-orange-50/10 border-orange-100' }
          ].map(s => (
            <button key={s.id} onClick={() => setActiveStory(s.id)} className={`p-8 rounded-[3rem] shadow-xl border-4 ${s.color} hover:-translate-y-2 transition-all group relative overflow-hidden text-center`}>
              <div className="text-7xl mb-4 group-hover:scale-125 transition-transform">{s.icon}</div>
              <h2 className="text-2xl font-black text-slate-800">{s.title}</h2>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentStory = storyContent[activeStory];
  const currentQuestion = currentStory?.questions[step];

  return (
    <div className="h-screen bg-white flex flex-col font-sans overflow-hidden">
      <header className="h-20 bg-white border-b-2 border-slate-100 flex items-center justify-between px-10">
        <button onClick={() => setActiveStory('home')} className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 font-bold px-5 py-2 rounded-2xl bg-slate-50 transition-all">
          ⬅️ Назад кон мени
        </button>
        <div className="flex items-center gap-6 w-1/3">
          <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border">
            <div className="h-full bg-indigo-500 transition-all duration-1000 shadow-lg" style={{ width: `${progress}%` }}></div>
          </div>
          {progress === 100 && <span className="text-3xl animate-bounce">🎖️</span>}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: TEXT */}
        <div className="w-3/5 p-12 overflow-y-auto bg-slate-50/30 border-r-4 border-slate-100" onMouseUp={handleHighlight}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-10 pb-6 border-b-4 border-indigo-50">
              <h1 className="text-5xl font-black text-slate-900">{currentStory?.title || "digitalPIRLS"}</h1>
              <button onClick={() => setHighlightMode(!highlightMode)} className={`px-6 py-2 rounded-full font-black text-xs transition-all ${highlightMode ? 'bg-yellow-400 text-yellow-950 scale-110 shadow-xl' : 'bg-slate-200 text-slate-500'}`}>
                🖍️ {highlightMode ? 'Маркер: ВКЛУЧЕН' : 'Вклучи Маркер'}
              </button>
            </div>

            <div ref={textRef} className="prose prose-2xl max-w-none text-slate-700 space-y-10">
              {currentStory?.text.map((item, idx) => {
                if (item.type === 'p') return <p key={idx}>{item.content}</p>;
                if (item.type === 'img') return <img key={idx} src={item.src} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white" alt={item.alt} />;
                if (item.type === 'blockquote') return <blockquote key={idx} className="border-l-8 border-indigo-500 pl-8 text-3xl font-black text-indigo-900 italic my-12">{item.content}</blockquote>;
                return null;
              })}
              {!currentStory && <p className="text-2xl italic text-slate-400">Наскоро: Целосниот текст за оваа приказна е во подготовка...</p>}
            </div>
          </div>
        </div>

        {/* RIGHT: INTERACTIVE PANEL */}
        <div className="w-2/5 flex flex-col bg-white">
          <div className="p-8 bg-indigo-900 flex items-center gap-6 shadow-2xl relative z-10">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl animate-pulse">🦉</div>
            <div className="flex-1 bg-white p-6 rounded-[2rem] rounded-tl-none shadow-xl border-4 border-indigo-200">
              <p className="text-slate-800 text-xl font-bold">{avatarMsg}</p>
            </div>
          </div>

          <div className="flex-1 p-10 bg-slate-50 overflow-y-auto">
            {!currentQuestion && step > 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-10">
                <div className="text-9xl mb-10">🏆</div>
                <h2 className="text-5xl font-black text-slate-900 mb-6">БРАВО!</h2>
                <p className="text-2xl font-bold text-slate-500 mb-12">Успешно ги реши сите предизвици!</p>
                <button onClick={() => setActiveStory('home')} className="px-12 py-6 bg-emerald-500 text-white rounded-full text-2xl font-black shadow-2xl hover:bg-emerald-600 transition-all">
                  СЛЕДНА ПРИКАЗНА 🐾
                </button>
              </div>
            )}

            {currentQuestion && (
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-slate-100">
                <h3 className="text-2xl font-black text-slate-800 mb-8">{step + 1}. {currentQuestion.q}</h3>
                {currentQuestion.type === 'mcq' ? (
                  <div className="space-y-4">
                    {currentQuestion.options.map((opt) => (
                      <button 
                        key={opt}
                        onClick={() => handleMCQ(opt, currentQuestion.correct)}
                        className={`w-full p-6 text-left rounded-3xl text-xl font-bold transition-all border-4 ${selectedOpt === opt ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-slate-50 text-slate-700 border-white hover:border-indigo-100 shadow-sm'}`}
                      >
                        {selectedOpt === opt ? '✅ ' : '⭕️ '} {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <textarea 
                      className="w-full h-48 p-8 bg-slate-50 rounded-[2rem] border-4 border-slate-100 text-xl font-medium focus:ring-4 focus:ring-indigo-200 outline-none"
                      placeholder="Напиши го твојот одговор овде..."
                      value={textAns}
                      onChange={(e) => setTextAns(e.target.value)}
                    />
                    <button 
                      onClick={handleTextSubmit}
                      className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] text-2xl font-black shadow-xl hover:bg-indigo-700 transition-all"
                    >
                      ПРАТИ ОДГОВОР 🚀
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
