# Документ за продолжување — digitalPIRLS
> Последно ажурирање: 28 март 2026

---

## МОМЕНТАЛНА СОСТОЈБА

Апликацијата е функционална со:
- **19 приказни** на македонски јазик ✅
- Јазичен toggle МК / SQ ✅
- Albanian (SQ) текст + прашања за: octopus, rabbit, pita, puffins, eagle, pot, lambe, hiking, baba, lakestar, fossil, shovel, kite, lynx, chest, kaja, watchmaker, lighthouse, forgotten_garden ✅
- PWA (инсталабилна на таблет/мобилен) ✅
- Firebase реално-временско следење ✅
- ColoringBook + ChronologicalPuzzle за сите 19 приказни ✅
- Рефакторирање: App.jsx поделен во `src/data/` и `src/utils/` ✅

---

## ШТО ОСТАНА ДА СЕ НАПРАВИ

### ПРИОРИТЕТ 1 — Слики за `forgotten_garden` (20-та приказна)

Корисникот ги подготвува сликите. Кога ќе бидат готови, треба да се додадат во:

**Структура на фолдери:**
```
public/Тајната на заборавената градина/
  1. [слика за P1-P3]
  2. [слика за P4-P5]
  3. [слика за P6-P7]
  4. [слика за P8-P9]
  хронолошка слагалка/
    1.png ... 7.png
  Coloring book/
    1.png ... 7.png
```

**Потоа додај во:**
1. `src/data/imgs.js` — `forgotten_garden: { key1: 'path1', ... }`
2. `src/data/storyContent.js` — вметни `{ type: 'img', src: imgs.forgotten_garden.key, alt: "..." }` по соодветните параграфи
3. `src/data/inclusiveData.js` — пополни `forgotten_garden: { puzzle: [...], coloring: [...] }`

**Моментален статус на `forgotten_garden`:**
- Текст МК + SQ: ✅ (9 параграфи, 13 прашања)
- Слики во текстот: ❌ (нема)
- Puzzle (хронолошка слагалка): ❌ `puzzle: []`
- Coloring book: ❌ `coloring: []`

---

### ПРИОРИТЕТ 2 — `textSq` во inclusiveData за flip-картички и боенка

Само `octopus` има `textSq` во inclusiveData. Следниве приказни немаат — при SQ режим flip-картичките и боенката покажуваат МК текст:

| Story ID | Статус |
|---|---|
| chest, kaja, watchmaker, kite, baba | ❌ нема textSq |
| lynx, shovel, rabbit, puffins, eagle | ❌ нема textSq |
| pita, pot, lakestar, lambe, hiking | ❌ нема textSq |
| fossil, lighthouse, forgotten_garden | ❌ нема textSq |

**Формат за додавање textSq:**
```js
{ id: 1, img: '...', text: "МК текст", textSq: "Albanian текст" },
```

---

### ПРИОРИТЕТ 3 — Слики за rabbit/puffins/eagle puzzle (чекори 6 и 7)

Entries 6-7 за тие приказни имаат `img: ''` — сликите не се генерирани. Моментално се филтрираат (не се прикажуваат). Puzzle работи со 5 чекори наместо 7.

---

### ПРИОРИТЕТ 4 — Линкови во PIRLS_BRO_Paket.md

Во документот `PIRLS_BRO_Paket.md` има placeholder-и:
- `[ЛИНК_ДО_АПЛИКАЦИЈАТА]` → замени со вистинскиот URL по deploy
- `[ЛИНК_ДО_UPATSTVO]` → замени со URL до упатство

---

## СТРУКТУРА НА КЛУЧНИТЕ ФАЈЛОВИ (по рефакторирање)

```
src/App.jsx                        ← само компоненти и логика (1915 линии)
src/data/
  imgs.js                          ← патеки до сите слики
  stories.js                       ← STORIES array + STORY_ICONS
  storyContent.js                  ← МК текст + прашања за сите 19 приказни
  storyContentSq.js                ← SQ текст + прашања за сите 19 приказни
  inclusiveData.js                 ← puzzle + coloring за сите 19 приказни
src/utils/
  sound.js                         ← playSound функција
```

---

## ФОРМАТ ЗА ДОДАВАЊЕ НОВА ПРИКАЗНА

Во следниов редослед:

1. **`src/data/stories.js`** — додај во STORIES array и STORY_ICONS
2. **`src/data/imgs.js`** — додај image keys
3. **`src/data/storyContent.js`** — додај МК текст + прашања
4. **`src/data/storyContentSq.js`** — додај SQ текст + прашања
5. **`src/data/inclusiveData.js`** — додај puzzle + coloring entries
6. **`src/App.jsx`** — додај greeting во `greetings` map

**ВАЖНО:** Текстот за content strings во JS фајлови не смее да содржи
straight double-quotes `"` без escape `\"` — ги кинат JS strings!
Македонскиот директен говор користи „наводници" (U+201E/U+201D), не `"`.

---

## ВАЖНИ НАПОМЕНИ

1. **Дупликати во inclusiveData** — постојат намерно. JS зема последниот. НЕ бришај!
2. **Teacher PIN:** `pirls2026`
3. **Firebase:** `src/firebase.js` — не менувај без причина
4. **PWA иконите:** `public/pwa-192.svg` и `public/pwa-512.svg`
5. **Puzzle filter:** ChronologicalPuzzle филтрира entries со `img: ''` — безбедно

---

## БРЗИ КОМАНДИ

```bash
npm run dev      # development
npm run build    # production build
npm run preview  # preview на build
```

---

*Документ ажуриран: 28 март 2026*
