# Документ за продолжување — digitalPIRLS
> Последно ажурирање: 28 март 2026

---

## МОМЕНТАЛНА СОСТОЈБА

Апликацијата е функционална и подготвена за:
- 15 приказни на македонски јазик ✅
- Јазичен toggle МК / SQ ✅
- Albanian верзија на **октопод** (текст + прашања + flip картички + боенка) ✅
- PWA (инсталабилна на таблет/мобилен) ✅
- Firebase реално-временско следење ✅
- ColoringBook + ChronologicalPuzzle за сите 15 приказни ✅

---

## ШТО ОСТАНА ДА СЕ НАПРАВИ

### ПРИОРИТЕТ 1 — Albanian преводи за останатите приказни

Имаме Albanian превод само за `octopus`. Треба да се додадат:

| Story ID | Македонски наслов | Статус |
|---|---|---|
| `chest` | Тајната на ковчегот | ❌ нема превод |
| `kaja` | Највредниот пронајдок | ❌ нема превод |
| `baba` | Цвеќиња на покривот | ❌ нема превод |
| `watchmaker` | Тајната на часовничарот | ❌ нема превод |
| `kite` | Змејот на трпението | ❌ нема превод |
| `lynx` | Балканскиот рис | ❌ нема превод |
| `shovel` | Чичкото со лопатата | ❌ нема превод |
| `rabbit` | Зајакот и земјотресот | ❌ нема превод |
| `puffins` | Морските папагалчиња | ❌ нема превод |
| `eagle` | Летај, Орле, летај | ❌ нема превод |
| `pita` | Пита за непријателот | ❌ нема превод |
| `pot` | Празната саксија | ❌ нема превод |
| `lakestar` | Езерската ѕвезда | ❌ нема превод |
| `lambe` | Дедо Ламбе и глувците | ❌ нема превод |

**Кога ќе имаш превод за нова приказна → види го форматот подолу.**

---

### ПРИОРИТЕТ 2 — Нови илустрации за сложалката на октопод (3 слики)

Треба да се генерираат 3 нови слики за хронолошката сложалка на октопод (Albanian верзија има 7 чекори, моментално 5):

| Нова слика | Опис | Prompt |
|---|---|---|
| Слика 6 | Reja e bojës — октопод бега и испушта мастило | `A dynamic underwater scene. An octopus is swimming away very fast, leaving a large, dark, cloud-like puff of black ink behind it. A confused shark is swimming into the ink cloud. Bright blue ocean background.` |
| Слика 7 | Skirt пикта — октопод поместува лост со боја | `A fun illustration inside an aquarium. An octopus named Skirt is happily using its tentacles to pull a lever. The lever is spraying bright, colorful paint (pink, yellow, blue) onto a white canvas set up in front of the tank.` |
| Слика 8 | Semi и топката — октопод ја отвора | `An octopus named Semi playing enthusiastically with a red and white plastic ball that pulls apart in the middle. The octopus is using its tentacles to piece the two halves back together. Bright aquarium lighting.` |

**По генерирање:** Зачувај ги во `public/Prekrasnot oktopod/Hronoloska Slagalka/` и додај ги во `inclusiveData.octopus.puzzle` со id 6, 7, 8:

```js
{ id: 6, img: './Prekrasnot oktopod/Hronoloska Slagalka/6.png',
  text: "МК текст за мастилото",
  textSq: "Kur rrezikohet, ai noton shpejt dhe lëshon një re boje të errët." },
{ id: 7, img: './Prekrasnot oktopod/Hronoloska Slagalka/7.png',
  text: "МК текст за Сквирт",
  textSq: "Disa oktapodë, si Skirti, madje mund të mësojnë të \"pikturojnë\" me leva." },
{ id: 8, img: './Prekrasnot oktopod/Hronoloska Slagalka/8.png',
  text: "МК текст за Семи",
  textSq: "Për të mos u mërzitur, ata luajnë lojëra dhe zgjidhin pazëlla si topi i Semit." },
```

### ПРИОРИТЕТ 3 — Линкови во PIRLS_BRO_Paket.md

Во документот `PIRLS_BRO_Paket.md` има placeholder-и:
- `[ЛИНК_ДО_АПЛИКАЦИЈАТА]` → замени со вистинскиот URL по deploy
- `[ЛИНК_ДО_UPATSTVO]` → замени со URL до упатство
- `[ЛИНК_ДО_KLUCEVI]` → замени со URL до клучевите за наставник
- `https://github.com/[KORISNICKO_IME]/digital-pirls` → замени со вистинскиот GitHub link

### ПРИОРИТЕТ 4 — Deploy и commit

```bash
# Во терминал:
cd c:\Users\pc4all\Downloads\Pirls
npm run build
git add -A
git commit -m "add Albanian language system and octopus SQ translation"
git push
```

---

## ФОРМАТ ЗА ИСПРАЌАЊЕ НОВИ Albanian ПРЕВОДИ

Кога имаш превод за нова приказна, испрати го на Claude во следниов формат:

```
STORY ID: [chest / kaja / baba / итн.]
НАСЛОВ (картичка): [краток Albanian наслов]
НАСЛОВ (header/голем): [Albanian наслов во caps]

TEXT:
P1: [Albanian текст на прв параграф]
P2: [Albanian текст на втор параграф]
── IMG ── (ги прескокнуваш — слики остануваат исти)
P3: [Albanian текст...]
── H2 ── [Albanian поднаслов ако постои]
P4: [Albanian текст...]
итн.

ПРАШАЊА:
Q1 (MCQ): [Albanian текст на прашање]
  А) [Albanian опција А]
  Б) [Albanian опција Б]
  В) [Albanian опција В]  ← ТОЧЕН
  Г) [Albanian опција Г]

Q2 (TEXT): [Albanian текст на прашање]
  HINT: [Albanian hint ако постои]

Q3 (MCQ): ...
итн.

FLIP КАРТИЧКИ (ако ги имаш):
Слика 1: [Albanian текст за грб на картичката]
Слика 2: [Albanian текст...]
итн.

БОЕНКА (ако ги имаш):
Слика 1: [Albanian опис]
Слика 2: [Albanian опис...]
итн.
```

**Claude ги додава во:**
- `storyContentSq` → текст + прашања
- `STORIES` → `titleSq`
- `inclusiveData[id].puzzle[].textSq` → flip картички
- `inclusiveData[id].coloring[].textSq` → боенка

---

## СТРУКТУРА НА КЛУЧНИТЕ ФАЈЛОВИ

```
src/App.jsx
  ├── const imgs = { ... }                    ← патеки до илустрации
  ├── const STORIES = [ ... ]                 ← листа со title + titleSq
  ├── const storyContent = { ... }            ← МК текст + прашања (lines ~266–1131)
  ├── const storyContentSq = { ... }          ← SQ текст + прашања (lines ~1133–1220)
  ├── const inclusiveData = { ... }           ← puzzle + coloring за сите приказни
  ├── const ChronologicalPuzzle = (...)       ← прима lang prop
  ├── const ColoringBook = (...)              ← прима lang prop
  └── export default function App()
        ├── const [lang, setLang]             ← 'mk' или 'sq'
        ├── const currentStory = (lang==='sq' && storyContentSq[id]) ? SQ : MK
        └── JSX со toggle копчиња МК/SQ

public/
  ├── PDF PIRLS Slidedecks/                   ← илустрации за lynx, puffins, eagle, pot, lambe, lakestar
  ├── Prekrasnot oktopod/                     ← илустрации за октопод
  ├── baba gun/                               ← илустрации за baba
  └── Gemini_Generated_Image_*.png            ← илустрации за chest, kaja, watchmaker, kite, shovel, rabbit, pita
```

---

## ВАЖНИ НАПОМЕНИ

1. **Дупликати во inclusiveData** — постојат дупликат клучеви (lynx, eagle, puffins, pita итн.). Во JavaScript последниот wins — тоа е НАМЕРНО и точно. Не бришај ги.

2. **Јазичниот toggle** — SQ копчето се прикажува само ако приказната има превод во `storyContentSq`. За приказни без превод, автоматски се прикажува МК текст + жолта лента.

3. **Боенка и сложалка** — СПОДЕЛЕНИ за МК и SQ. Само `textSq` полето е различно на картичките.

4. **Teacher PIN:** `pirls2026`

5. **Firebase:** Конфигурацијата е во `src/firebase.js` — не ја менувај без да знаеш што правиш.

6. **PWA иконите** се во `public/pwa-192.svg` и `public/pwa-512.svg`.

---

## БРЗИ КОМАНДИ

```bash
# Стартување за development:
npm run dev

# Build за production:
npm run build

# Preview на build:
npm run preview
```

---

*Документ генериран: 28 март 2026*
