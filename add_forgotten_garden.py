import sys, re
sys.stdout.reconfigure(encoding='utf-8')

# ── Read all data files ──────────────────────────────────────────────────────
for fname in ['src/data/stories.js','src/data/storyContent.js','src/data/storyContentSq.js','src/data/inclusiveData.js','src/App.jsx']:
    with open(fname,'r',encoding='utf-8') as f:
        globals()[fname.replace('/','_').replace('.','_').replace('-','_')] = f.read()

stories   = globals()['src_data_stories_js']
sc        = globals()['src_data_storyContent_js']
sq        = globals()['src_data_storyContentSq_js']
incl      = globals()['src_data_inclusiveData_js']
app       = globals()['src_App_jsx']

# ── 1. stories.js — add to STORIES array ────────────────────────────────────
old_fossil_story = "  { id: 'fossil',     icon: '🦕',  title: 'Мистеријата на џиновскиот заб', color: 'from-stone-50 to-stone-100 border-stone-200' },"
new_fossil_story = (old_fossil_story + "\n"
  "  { id: 'forgotten_garden', icon: '🌷', title: 'Тајната на заборавената градина', titleSq: 'Sekreti i kopshtit të harruar', color: 'from-green-50 to-green-100 border-green-200' },")
stories = stories.replace(old_fossil_story, new_fossil_story, 1)

# Add to STORY_ICONS
old_icons = "lighthouse:'🔦' };"
new_icons = "lighthouse:'🔦', forgotten_garden:'🌷' };"
stories = stories.replace(old_icons, new_icons, 1)

with open('src/data/stories.js','w',encoding='utf-8') as f:
    f.write(stories)
print('OK: stories.js')

# ── 2. storyContent.js — MK story ────────────────────────────────────────────
mk_entry = """  forgotten_garden: {
    title: "ТАЈНАТА НА ЗАБОРАВЕНАТА ГРАДИНА",
    text: [
      { type: 'p', content: "Десетгодишната Јана беше многу несреќна. Нејзиното семејство неодамна се пресели во нова куќа на крајот од градот. Дворот беше вистинска катастрофа – полн со висока трева, трнливи грмушки и исушени лисја. Немаше ниту една рамна патека каде што би можела да го вози својот нов црвен велосипед. „Сакам целиот овој неред да се покрие со бетон!" – им се пожали таа на родителите." },
      { type: 'p', content: "Следниот ден на гости дојде дедо Никола. Тој многу ја сакаше природата. Ја најде Јана како седи тажно на тремот. „Зошто си намуртена, птичјо моја?" – ја праша тој. Јана покажа кон „џунглата". „Не можам да си играм овде. Сè е грдо и неуредно."" },
      { type: 'p', content: "Дедо Никола благо се насмевна. „Бетонот е студен и мртов, Јана. Ова овде е заспано волшебно царство. Само треба да го разбудиме." Јана го погледна со неверување. Каква магија би можела да се крие во тој трнлив хаос?" },
      { type: 'p', content: "Следниот викенд, дедо Никола донесе дебели ракавици и градинарски алат. „Ќе работиме заедно," – рече тој. Јана без волја почна да му помага. Тие корнеа плевел, ги сечеа сувите гранки и собираа лисја. Под густиот бршлен, открија една прекрасна стара камена клупа. Беше тешка работа. Јана си ги изгреба рацете и многу се измори. „Ова е сосема бескорисно," – воздивна таа." },
      { type: 'p', content: "„Трпение," – рече дедото. Тој ѝ подаде неколку мали, суви, кафеави луковици. „Засади ги овие околу камената клупа." Јана си помисли дека личат на грди, збрчкани камчиња, но сепак го послуша. Ги закопа во темната земја и ги полеа со вода." },
      { type: 'p', content: "Набрзо дојде зимата. Дворот се покри со дебела бела покривка од снег. Јана целосно заборави на градината, на грдите луковици и на камената клупа. За неа, дворот повторно беше само едно празно место." },
      { type: 'p', content: "Но, тогаш пристигна пролетта. Снегот се стопи, а сонцето почна да ја стоплува земјата. Едно утро, Јана погледна низ прозорецот и не можеше да им поверува на своите очи. Околу камената клупа, од оние „грди камчиња", беа израснати прекрасни жолти и виолетови лалиња. Пчели и шарени пеперутки летаа насекаде. Трнливите грмушки сега беа полни со ситни, миризливи бели цветови." },
      { type: 'p', content: "Јана истрча надвор. Седна на камената клупа, вдишувајќи го слаткиот мирис на цвеќињата и слушајќи ја песната на птиците. Зад неа тивко се приближи дедо Никола. „Дали царството се разбуди?" – праша тој со топла насмевка." },
      { type: 'p', content: "Јана силно го прегрна. „Да! Прекрасно е. Фала ти, дедо." Таа сфати дека студен бетонски двор никогаш не би ја имал оваа магија. Научи дека за некои работи е потребен труд и многу трпение за да ја покажат својата вистинска убавина." },
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Зошто Јана беше несреќна на почетокот на приказната?", options: ["А) Затоа што не сакаше да живее со дедо ѝ.", "Б) Затоа што ѝ се расипа црвениот велосипед.", "В) Затоа што дворот беше неуреден и немаше каде да вози велосипед.", "Г) Затоа што мораше да работи во градината секој ден."], correct: "В) Затоа што дворот беше неуреден и немаше каде да вози велосипед." },
      { id: 2, type: 'text', q: "Што сакаше Јана да се направи со дворот наместо да биде полн со растенија?" },
      { id: 3, type: 'mcq', q: "Зошто дедо Никола го нарече дворот „заспано волшебно царство"?", options: ["А) Затоа што таму живееја само заспани животни.", "Б) Затоа што веруваше дека дворот крие убавина која треба да се открие.", "В) Затоа што Јана најмногу сакаше да чита бајки за царства.", "Г) Затоа што сакаше да ја исплаши Јана."], correct: "Б) Затоа што веруваше дека дворот крие убавина која треба да се откри." },
      { id: 4, type: 'text', q: "Наведи две работи кои Јана и нејзиниот дедо ги направија за да го исчистат дворот." },
      { id: 5, type: 'text', q: "Како се чувствуваше Јана во врска со луковиците кога дедо ѝ ги подаде? Објасни зошто се чувствуваше така користејќи докази од текстот." },
      { id: 6, type: 'mcq', q: "Што се случи со градината за време на зимата?", options: ["А) Лалињата расцветаа порано од вообичаено.", "Б) Дедо Никола изгради ограда околу неа.", "В) Јана секој ден ги полеваше растенијата.", "Г) Се покри со снег и Јана целосно заборави на неа."], correct: "Г) Се покри со снег и Јана целосно заборави на неа." },
      { id: 7, type: 'mcq', q: "Во што се претворија „грдите, збрчкани камчиња" напролет?", options: ["А) Во бели цветови на трнливите грмушки.", "Б) Во жолти и виолетови лалиња.", "В) Во шарени пеперутки.", "Г) Во нова камена клупа."], correct: "Б) Во жолти и виолетови лалиња." },
      { id: 8, type: 'text', q: "Најди го делот од приказната кога Јана седи на камената клупа напролет. Како нејзините чувства за дворот се промениле во споредба со почетокот на приказната?" },
      { id: 9, type: 'mcq', q: "Што сакаше да каже дедо Никола кога праша: „Дали царството се разбуди?"", options: ["А) Дали лалињата и природата конечно процветаа и ја покажаа својата убавина.", "Б) Дали Јана конечно се разбуди од зимскиот сон.", "В) Дали животните во шумата се разбудија.", "Г) Дали бетонот конечно се исуши во дворот."], correct: "А) Дали лалињата и природата конечно процветаа и ја покажаа својата убавина." },
      { id: 10, type: 'text', q: "Каква личност е дедо Никола? Наведи една негова особина и дади пример од текстот што го покажува тоа." },
      { id: 11, type: 'mcq', q: "Која е главната порака (поука) на овој расказ?", options: ["А) Децата не треба да возат велосипеди во дворот.", "Б) Бетонот е секогаш подобар и почист од природата.", "В) За да се открие вистинската убавина на работите, потребни се труд и трпение.", "Г) Зимата е најубавото годишно време за градинарство."], correct: "В) За да се открие вистинската убавина на работите, потребни се труд и трпение." },
      { id: 12, type: 'text', q: "Авторот ги споредува сувите луковици со „грди камчиња". Зошто оваа споредба е важна за приказната?" },
      { id: 13, type: 'text', q: "Авторот го насловил расказот „Тајната на заборавената градина". Дали мислиш дека ова е соодветен наслов за приказната? Искористи информации од текстот за да го објасниш твојот одговор." },
    ]
  }
"""

old_sc_end = "\n};\n\nexport default storyContent;"
new_sc_end = ",\n" + mk_entry + "\n};\n\nexport default storyContent;"
sc = sc.replace(old_sc_end, new_sc_end, 1)
with open('src/data/storyContent.js','w',encoding='utf-8') as f:
    f.write(sc)
print('OK: storyContent.js')

# ── 3. storyContentSq.js — SQ story ──────────────────────────────────────────
sq_entry = """  forgotten_garden: {
    title: "SEKRETI I KOPSHTIT TE HARRUAR",
    text: [
      { type: 'p', content: "Dhjetëvjeçarja Jana ishte shumë e palumtur. Familja e saj sapo ishte shpërngulur në një shtëpi të re në fund të qytetit. Oborri ishte një katastrofë e vërtetë – i mbushur me bar të lartë, shkurre me gjemba dhe gjethe të thata. Nuk kishte asnjë shteg të rrafshët ku ajo mund të ngiste biçikletën e saj të re të kuqe. 'Dua që e gjithë kjo rrëmujë të mbulohet me beton!' – u ankua ajo te prindërit e saj." },
      { type: 'p', content: "Të nesërmen, gjyshi Nikolla erdhi për vizitë. Ai e donte shumë natyrën. E gjeti Janën duke qëndruar e trishtuar në verandë. 'Pse je e vrenjtur, zogu im?' – e pyeti ai. Jana tregoi nga 'xhungla'. 'Nuk mund të luaj këtu. Çdo gjë është e shëmtuar dhe e çrregullt.'" },
      { type: 'p', content: "Gjyshi Nikolla buzëqeshi lehtë. 'Betoni është i ftohtë dhe i vdekur, Jana. Këtu kemi një mbretëri magjike të fjetur. Ne vetëm duhet ta zgjojmë atë.' Jana e shikoi me mosbesim. Çfarë magjie mund të fshihej në atë kaos me gjemba?" },
      { type: 'p', content: "Fundjavën e ardhshme, gjyshi Nikolla solli doreza të trasha dhe vegla kopshtarie. 'Ne do të punojmë së bashku,' – tha ai. Jana pa dëshirë filloi ta ndihmonte. Ata shkulën barërat e këqija, prenë degët e thata dhe mblodhën gjethet. Nën urthin e dendur, zbuluan një stol të bukur të vjetër prej guri. Ishte punë e vështirë. Jana gërvishti duart dhe u lodh shumë. 'Kjo është krejtësisht e kotë,' – psherëtiu ajo." },
      { type: 'p', content: "'Durim,' – tha gjyshi. Ai i dha asaj disa qepujka të vogla, të thata dhe ngjyrë kafe. 'Mbillni këto rreth stolit prej guri.' Jana mendoi se ato dukeshin si guralecë të shëmtuar e të rrudhosur, por megjithatë u bind. I groposi në tokën e errët dhe i ujiti me ujë." },
      { type: 'p', content: "Së shpejti erdhi dimri. Oborri u mbulua me një shtresë të trashë bore të bardhë. Jana e harroi plotësisht kopshtin, qepujkat e shëmtuara dhe stolin prej guri. Për të, oborri ishte përsëri vetëm një vend i zbrazët." },
      { type: 'p', content: "Por më pas erdhi pranvera. Bora u shkri dhe dielli filloi të ngrohë tokën. Një mëngjes, Jana shikoi nga dritarja dhe nuk u besonte syve. Rreth stolit prej guri, nga ata 'guralecë të shëmtuar', kishin mbirë tulipanë të bukur të verdhë dhe vjollcë. Bletët dhe fluturat shumëngjyrëshe fluturonin kudo. Shkurret me gjemba tani ishin plot me lule të vogla të bardha aromatike." },
      { type: 'p', content: "Jana vrapoi jashtë. U ul në stolin e gurit, duke thithur aromën e ëmbël të luleve dhe duke dëgjuar këngën e zogjve. Pas saj, gjyshi Nikolla u afrua në heshtje. 'A u zgjua mbretëria?' – pyeti ai me një buzëqeshje të ngrohtë." },
      { type: 'p', content: "Jana e përqafoi fort. 'Po! Është e mrekullueshme. Faleminderit, gjysh.' Ajo e kuptoi se një oborr i ftohtë prej betoni nuk do ta kishte kurrë këtë magji. Ajo mësoi se disa gjëra kërkojnë punë të palodhur dhe shumë durim për të treguar bukurinë e tyre të vërtetë." },
    ],
    questions: [
      { id: 1, type: 'mcq', q: "Pse Jana ishte e pakënaqur në fillim të tregimit?", options: ["A. Sepse nuk donte të jetonte me gjyshin e saj.", "B. Sepse iu prish biçikleta e saj e kuqe.", "C. Sepse oborri ishte i çrregullt dhe nuk kishte ku të ngiste biçikletën.", "D. Sepse duhej të punonte në kopsht çdo ditë."], correct: "C. Sepse oborri ishte i çrregullt dhe nuk kishte ku të ngiste biçikletën." },
      { id: 2, type: 'text', q: "Çfarë donte Jana të bëhej me oborrin në vend që të ishte plot me bimë?" },
      { id: 3, type: 'mcq', q: "Pse gjyshi Nikolla e quajti oborrin një 'mbretëri magjike të fjetur'?", options: ["A. Sepse aty jetonin vetëm kafshë të fjetura.", "B. Sepse besonte se oborri fshihte një bukuri që duhej zbuluar.", "C. Sepse Janës i pëlqente më shumë të lexonte përralla për mbretëritë.", "D. Sepse donte ta frikësonte Janën."], correct: "B. Sepse besonte se oborri fshihte një bukuri që duhej zbuluar." },
      { id: 4, type: 'text', q: "Përmend dy gjëra që Jana dhe gjyshi i saj bënë për të pastruar oborrin." },
      { id: 5, type: 'text', q: "Si ndihej Jana për qepujkat kur gjyshi ia dha ato? Shpjego pse ndihej ashtu duke përdorur prova nga teksti." },
      { id: 6, type: 'mcq', q: "Çfarë ndodhi me kopshtin gjatë dimrit?", options: ["A. Tulipanët çelën më herët se zakonisht.", "B. Gjyshi Nikolla ndërtoi një gardh rreth tij.", "C. Jana i ujiste bimët çdo ditë.", "D. U mbulua me borë dhe Jana e harroi plotësisht."], correct: "D. U mbulua me borë dhe Jana e harroi plotësisht." },
      { id: 7, type: 'mcq', q: "Në çfarë u shndërruan 'guralecët e shëmtuar e të rrudhosur' në pranverë?", options: ["A. Në lule të bardha në shkurret me gjemba.", "B. Në tulipanë të verdhë dhe vjollcë.", "C. Në flutura shumëngjyrëshe.", "D. Në një stol të ri guri."], correct: "B. Në tulipanë të verdhë dhe vjollcë." },
      { id: 8, type: 'text', q: "Gjej pjesën e tregimit kur Jana ulet në stolin prej guri në pranverë. Si kanë ndryshuar ndjenjat e saj për oborrin në krahasim me fillimin e tregimit?" },
      { id: 9, type: 'mcq', q: "Çfarë donte të thoshte gjyshi Nikolla kur pyeti: 'A u zgjua mbretëria?'", options: ["A. A kishin lulëzuar më në fund tulipanët dhe natyra, duke treguar bukurinë e tyre.", "B. A ishte zgjuar më në fund Jana nga gjumi i dimrit.", "C. A ishin zgjuar kafshët në pyll.", "D. A ishte tharë më në fund betoni në oborr."], correct: "A. A kishin lulëzuar më në fund tulipanët dhe natyra, duke treguar bukurinë e tyre." },
      { id: 10, type: 'text', q: "Çfarë personi është gjyshi Nikolla? Përmend një tipar të tijin dhe jep një shembull nga teksti që e tregon këtë." },
      { id: 11, type: 'mcq', q: "Cili është mesazhi kryesor (morali) i këtij tregimi?", options: ["A. Fëmijët nuk duhet të ngasin biçikleta në oborr.", "B. Betoni është gjithmonë më i mirë dhe më i pastër se natyra.", "C. Për të zbuluar bukurinë e vërtetë të gjërave, nevojitet punë dhe durim.", "D. Dimri është stina më e mirë për kopshtari."], correct: "C. Për të zbuluar bukurinë e vërtetë të gjërave, nevojitet punë dhe durim." },
      { id: 12, type: 'text', q: "Autori i krahason qepujkat e thata me 'guralecë të shëmtuar'. Pse ky krahasim është i rëndësishëm për tregimin?" },
      { id: 13, type: 'text', q: "Autori e ka titulluar tregimin 'Sekreti i kopshtit të harruar'. A mendon se ky është një titull i përshtatshëm për tregimin? Përdor informacione nga teksti për të shpjeguar përgjigjen tënde." },
    ]
  }
"""

old_sq_end = "\n};\n\nexport default storyContentSq;"
new_sq_end = ",\n" + sq_entry + "\n};\n\nexport default storyContentSq;"
sq = sq.replace(old_sq_end, new_sq_end, 1)
with open('src/data/storyContentSq.js','w',encoding='utf-8') as f:
    f.write(sq)
print('OK: storyContentSq.js')

# ── 4. inclusiveData.js — empty entry ────────────────────────────────────────
old_incl_end = "};\n\nexport default inclusiveData;"
new_incl_end = ",\n  forgotten_garden: {\n    puzzle: [],\n    coloring: []\n  }\n};\n\nexport default inclusiveData;"
incl = incl.replace(old_incl_end, new_incl_end, 1)
with open('src/data/inclusiveData.js','w',encoding='utf-8') as f:
    f.write(incl)
print('OK: inclusiveData.js')

# ── 5. App.jsx — add avatar greeting ─────────────────────────────────────────
old_greeting = "      lighthouse: \"Лијам мора да го запали светилникот за да го спаси татко му. Ајде да му помогнеме!\","
new_greeting = (old_greeting + "\n"
  "      forgotten_garden: \"Јана мисли дека дворот е катастрофа. Но дедо Никола знае нешто — ајде да откриеме!\",")
app = app.replace(old_greeting, new_greeting, 1)
with open('src/App.jsx','w',encoding='utf-8') as f:
    f.write(app)
print('OK: App.jsx (greeting)')
