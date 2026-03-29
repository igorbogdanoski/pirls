import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { ref, set, update, onValue, off, get } from 'firebase/database';
import { db, FIREBASE_ENABLED } from './firebase.js';
import imgs from './data/imgs.js';
import { STORIES, STORY_ICONS, glossaryData } from './data/stories.js';
import storyContent from './data/storyContent.js';
import storyContentSq from './data/storyContentSq.js';
import inclusiveData from './data/inclusiveData.js';
import { playSound } from './utils/sound.js';

// ── TRANSLATIONS ──────────────────────────────────────────
const t_full = {
  mk: {
    readingWithUnderstanding: "Читање со разбирање",
    heroTitle_part1: "Читање со ",
    heroTitle_part2: "разбирање",
    interactivePlatform: "Интерактивна образовна платформа",
    bilingualPlatform: "Двојазична платформа",
    bilingualDesc: "Платформата е достапна на македонски и албански јазик. Избери јазик со копчињата горе.",
    macedonian: "Македонски",
    albanian: "Shqip",
    active: "активно",
    studentJoin: "Влези во час",
    studentDesc: "Внеси го своето име и презиме и 6-знаковниот код од наставникот за да се приклучиш во часот.",
    studentJoined: "Поврзан на час",
    leaveSession: "Напушти час",
    teacherLogin: "Наставник",
    teacherDesc: "Создај час, следи ги учениците во живо и преземи извештај по завршувањето на часот.",
    enter: "Влези →",
    join: "Приклучи се →",
    chooseStory: "Избери приказна за да започнеш",
    back: "Назад",
    questions: "Прашања",
    puzzle: "Слагалка",
    coloring: "Боенка",
    markerRemoved: "Маркерот е отстранет.",
    markedWell: "Одлично маркирано!",
    allMarkersCleared: "Сите маркери се исчистени.",
    writeDetailed: "Те молам напиши подетален одговор за да го разберам твоето објаснување. 📝",
    correct: "Точно! Одлично размислување. 🎯",
    incorrect: "Не е точно — точниот одговор е означен со зелено. Продолжуваме натаму.",
    excellent: "ИЗВОНРЕДНО! 🏆 Твојот одговор е на највисоко ниво.",
    goodStart: "ДОБАР ПОЧЕТОК! ✨",
    rejected: "Хмм, твојот одговор не ги содржи клучните детали од приказната. 🧐 Прочитај го пак текстот и обиди се да го објасниш одговорот со твои зборови!",
    answerSaved: "Примено! Твојот одговор е зачуван. ⭐",
    of: "од",
    backToText: "Назад кон текстот",
    excellentWork: "Одлична работа!",
    completedStoryDesc: "Успешно ги одговори сите прашања за оваа приказна.",
    chooseNewStory: "Избери нова приказна →",
    listenQuestion: "Слушај го прашањето",
    owlFeedback: "🦉",
    badgesTitle: "ИЗВОНРЕДНО! Ја заврши оваа приказна и освои нов златен медал!",
    internetError: "⚠️ Нема интернет врска — одговорите не се синхронизираат",
    close: "Затвори",
    zoomIn: "Зголеми го фонтот",
    zoomOut: "Намали го фонтот",
    albanianWip: "Përkthimi shqip për këtë tregim është në përgatitje. Teksti shfaqet në maqedonisht.",
    storyWip: "Наскоро: Целосниот текст за оваа приказна е во подготовка...",
    today: "Денес",
    start: "Започни →",
    author: "Идеја и реализација:",
    footerPlatform: "Читање со разбирање 2026 • Интерактивна образовна платформа",
    teacherPortal: "Пристап — Наставник",
    teacherPanel: "Командна Табла — Наставник",
    teacherPanelDesc: "Создај нов час и сподели го кодот со учениците. Ги следиш нивните одговори во живо за време на часот.",
    enterPin: "Внесете го PIN кодот",
    wrongPin: "Погрешен PIN. Обидете се повторно.",
    cancel: "Откажи",
    yourName: "Ваше име (незадолжително)",
    namePlaceholder: "пр. Марија Петровска",
    whichStory: "Која приказна денес?",
    classCode: "Код на часот",
    chooseStoryForStudents: "Избери ја приказната за учениците",
    continueNoStory: "Продолжи без одредена приказна →",
    enterValidCode: "Внесете валиден код",
    placeholderPin: "••••••••",
    liveLessonView: "Преглед на часот во живо",
    activeStatus: "Активни",
    totalStudents: "Вкупно ученици",
    synchronized: "Синхронизирано",
    demoMode: "Демо режим",
    classAccuracy: "Точност на клас",
    answersCount: "Одговори",
    studentCodeLabel: "Код за ученици",
    report: "Извештај",
    teacherAssignedStory: "Доделена приказна",
    noAssignedStory: "Нема доделена приказна",
    storySelection: "Избор на приказна",
    studentProgress: "Напредок на учениците",
    lastSeen: "Последен пат виден",
    ago: "пред",
    minutesShort: "мин",
    justNow: "сега",
    csvStudent: "Ученик",
    csvStory: "Приказна",
    csvQuestion: "Прашање",
    csvAnswer: "Одговор",
    csvCorrect: "Точно",
    csvIncorrect: "Неточно",
    csvType: "Тип",
    csvTime: "Час",
    mcqType: "Избор",
    textType: "Текст",
    wipTitle: "Активноста е во подготовка",
    waitingForStudents: "Чекање на ученици...",
    tellStudentsCode: "Кажете им на учениците да го внесат овој код на нивниот екран:",
    anonymous: "Анонимен",
    activeStatusLabel: "Активен",
    inactiveStatusLabel: "Неактивен",
    currentActivity: "Моментална активност",
    questionLabel: "Прашање",
    stepLabel: "Чекор",
    viewingHome: "Го разгледува почетниот екран",
    successRate: "Успешност",
    answerHistory: "Историја на одговори",
    live: "Во живо",
    closeDetails: "Затвори детали",
    cancelRestriction: "Откажи ограничување",
    puzzleWIPDesc: "Слагалката за оваа приказна е во изработка...",
    coloringWIPDesc: "Боенката за оваа приказна е во изработка...",
    sendAnswer: "Испрати одговор",
    writeMin3: "Напиши барем 3 збора",
    showHint: "Покажи помош",
    hideHint: "Скриј помош",
    listenExplanation: "Слушај го објаснувањето",
    orLabel: "или",
    nameLabel: "Твое име и презиме",
    errorName: "Внеси го своето име (барем 2 букви)",
    errorCode: "Внеси го кодот за час",
    errorNotExist: "Кодот не постои. Прашај го наставникот.",
    btnJoin: "Влези! 🚀",
    btnLoading: "⏳ Се поврзува...",
    btnSkip: "Продолжи без час →",
    skipDesc: "Без час — активностите работат нормално, но наставникот нема да ги гледа твоите одговори",
    questionOptionsLabel: "Опции за прашање"
  },
  sq: {
    readingWithUnderstanding: "Lexim me kuptim",
    heroTitle_part1: "Lexim me ",
    heroTitle_part2: "kuptim",
    interactivePlatform: "Platformë edukative interaktive",
    bilingualPlatform: "Platformë dygjuhëshe",
    bilingualDesc: "Platforma është e disponueshme në gjuhën maqedonase dhe shqipe. Zgjidhni gjuhën me butonat më lart.",
    macedonian: "Maqedonisht",
    albanian: "Shqip",
    active: "aktive",
    studentJoin: "Hyni në klasë",
    studentDesc: "Shkruani emrin dhe mbiemrin tuaj dhe kodin me 6 shifra nga mësuesi për t'u bashkuar me klasën.",
    studentJoined: "I lidhur në klasë",
    leaveSession: "Largohu nga klasa",
    teacherLogin: "Mësuesi",
    teacherDesc: "Krijoni një klasë, ndiqni nxënësit drejtpërdrejt dhe shkarkoni një raport pas përfundimit të klasës.",
    enter: "Hyni →",
    join: "Bashkohu →",
    chooseStory: "Zgjidh një tregim për të filluar",
    back: "Mbrapa",
    questions: "Pyetje",
    puzzle: "Pazëll",
    coloring: "Libër ngjyrosje",
    markerRemoved: "Markuesi u hoq.",
    markedWell: "Shënuar shkëlqyeshëm!",
    allMarkersCleared: "Të gjithë markuesit u fshinë.",
    writeDetailed: "Ju lutemi shkruani një përgjigje më të detajuar që të mund të kuptoj shpjegimin tuaj. 📝",
    correct: "Saktë! Mendim i shkëlqyer. 🎯",
    incorrect: "Nuk është e saktë — përgjigja e saktë është shënuar me të gjelbër. Vazhdojmë tutje.",
    excellent: "E JASHTËZAKONSHME! 🏆 Përgjigja juaj është në nivelion më të lartë.",
    goodStart: "FILLIM I MIRË! ✨",
    rejected: "Hmm, përgjigja juaj nuk përmban detajet kryesore të tregimit. 🧐 Lexoni tekstin përsëri dhe provoni të shpjegoni përgjigjen me fjalët tuaja!",
    answerSaved: "E pranuar! Përgjigja juaj u ruajt. ⭐",
    of: "nga",
    backToText: "Kthehu te teksti",
    excellentWork: "Punë e shkëlqyer!",
    completedStoryDesc: "Ju u jeni përgjigjur me sukses të gjitha pyetjeve për këtë tregim.",
    chooseNewStory: "Zgjidhni një tregim të ri →",
    listenQuestion: "Dëgjoni pyetjen",
    owlFeedback: "🦉",
    badgesTitle: "SHKËLQYESHËM! Ju keni përfunduar këtë tregim dhe keni fituar një medalje të re ari!",
    internetError: "⚠️ Nuk ka lidhje interneti — përgjigjet nuk sinkronizohen",
    close: "Mbyll",
    zoomIn: "Rrit tekstin",
    zoomOut: "Zvogëlo tekstin",
    albanianWip: "Përkthimi shqip për këtë tregim është në përgatitje. Teksti shfaqet në maqedonisht.",
    storyWip: "Së shpejti: Teksti i plotë për këtë tregim është në përgatitje...",
    today: "Sot",
    start: "Fillo →",
    author: "Ideja dhe realizimi:",
    footerPlatform: "Lexim me kuptim 2026 • Platformë edukative interaktive",
    teacherPortal: "Qasje — Mësuesi",
    teacherPanel: "Paneli — Mësuesi",
    teacherPanelDesc: "Krijoni një klasë të re dhe ndani kodin me nxënësit. Ndiqni përgjigjet e tyre drejtpërdrejt.",
    enterPin: "Shkruani PIN-in",
    wrongPin: "PIN i gabuar. Provoni përsëri.",
    cancel: "Anulo",
    yourName: "Emri juaj (opsionale)",
    namePlaceholder: "p.sh. Maria Petrovska",
    whichStory: "Cilin tregim sot?",
    classCode: "Kodi i klasës",
    chooseStoryForStudents: "Zgjidhni tregimin për nxënësit",
    continueNoStory: "Vazhdo pa tregim specifik →",
    enterValidCode: "Shkruani një kod të vlefshëm",
    placeholderPin: "••••••••",
    liveLessonView: "Pamja e klasës drejtpërdrejt",
    activeStatus: "Aktivë",
    totalStudents: "Gjithsej nxënës",
    synchronized: "Sinkronizuar",
    demoMode: "Regjimi demo",
    classAccuracy: "Saktësia e klasës",
    answersCount: "Përgjigje",
    studentCodeLabel: "Kodi për nxënësit",
    report: "Raport",
    teacherAssignedStory: "Tregimi i caktuar",
    noAssignedStory: "Nuk ka tregim të caktuar",
    storySelection: "Zgjedhja e tregimit",
    studentProgress: "Progresi i nxënësve",
    lastSeen: "Parë për herë të fundit",
    ago: "para",
    minutesShort: "min",
    justNow: "tani",
    csvStudent: "Nxënës",
    csvStory: "Tregim",
    csvQuestion: "Pyetje",
    csvAnswer: "Përgjigje",
    csvCorrect: "Saktë",
    csvIncorrect: "Gabim",
    csvType: "Lloj",
    csvTime: "Koha",
    mcqType: "Zgjedhje",
    textType: "Tekst",
    wipTitle: "Aktiviteti është në përgatitje",
    waitingForStudents: "Duke pritur për nxënës...",
    tellStudentsCode: "U thuani nxënësve të shkruajnë këtë kod në ekranin e tyre:",
    anonymous: "Anonim",
    activeStatusLabel: "Aktiv",
    inactiveStatusLabel: "Joaktiv",
    currentActivity: "Aktiviteti aktual",
    questionLabel: "Pyetje",
    stepLabel: "Hapi",
    viewingHome: "Duke shikuar faqen fillestare",
    successRate: "Shkalla e suksesit",
    answerHistory: "Historia e përgjigjeve",
    live: "Drejtpërdrejt",
    closeDetails: "Mbyll detajet",
    cancelRestriction: "Anulo kufizimin",
    puzzleWIPDesc: "Pazëlli për këtë tregim është në përgatitje...",
    coloringWIPDesc: "Libri i ngjyrosjes për këtë tregim është në përgatitje...",
    sendAnswer: "Dërgo përgjigjen",
    writeMin3: "Shkruaj të paktën 3 fjalë",
    showHint: "Trego ndihmën",
    hideHint: "Fshih ndihmën",
    listenExplanation: "Dëgjo shpjegimin",
    orLabel: "ose",
    nameLabel: "Emri dhe mbiemri juaj",
    errorName: "Shkruani emrin tuaj (të paktën 2 shkronja)",
    errorCode: "Shkruani kodin e klasës",
    errorNotExist: "Kodi nuk ekziston. Pyetni mësuesin.",
    btnJoin: "Hyni! 🚀",
    btnLoading: "⏳ Po lidhet...",
    btnSkip: "Vazhdo pa klasë →",
    skipDesc: "Pa klasë — aktivitetet funksionojnë normalisht, por mësuesi nuk do t'i shohë përgjigjet tuaja",
    questionOptionsLabel: "Opsionet për pyetjen"
  }
};

const Timer = ({ active }) => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-2xl border-2 border-amber-200 text-amber-700 font-black">
      <span className="text-xl">⏱️</span>
      <span className="font-mono text-lg">{formatTime(seconds)}</span>
    </div>
  );
};

const TextWithGlossary = ({ content, glossary, onTermClick }) => {
  if (!content) return null;
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  if (terms.length === 0) return content;
  
  // Broad range for all Cyrillic and Latin characters to handle mixed content/typos
  const wordRegex = /[a-zA-Z\u0400-\u04FF\u0500-\u052F]+/g;
  
  const elements = [];
  let lastIndex = 0;
  const matches = [...content.matchAll(wordRegex)];
  
  matches.forEach((match, i) => {
    if (match.index > lastIndex) {
      elements.push(content.substring(lastIndex, match.index));
    }
    
    const word = match[0];
    const wordLower = word.toLowerCase();
    
    // Совпаѓање на зборовни форми (македонска морфологија):
    // 1. Зборот го содржи терминот (пр. "пипалата" содржи "пипала")
    // 2. Стем-совпаѓање: делат заеднички префикс ≥5 знаци (пр. "тропски"/"тропска")
    const matchedTermKey = terms.find(term => {
      const t = term.toLowerCase();
      if (wordLower.includes(t)) return true;
      if (t.length >= 5 && wordLower.length >= 5) {
        const stemLen = Math.min(t.length, wordLower.length) - 2;
        if (stemLen >= 4 && t.slice(0, stemLen) === wordLower.slice(0, stemLen)) return true;
      }
      return false;
    });
    
    if (matchedTermKey) {
      elements.push(
        <button
          key={`match-${i}`}
          type="button"
          onClick={() => onTermClick(matchedTermKey, glossary[matchedTermKey])}
          onKeyDown={e => e.key === 'Enter' && onTermClick(matchedTermKey, glossary[matchedTermKey])}
          aria-label={`Погледни го значењето на зборот: ${matchedTermKey}`}
          className="cursor-help border-b-2 border-dashed border-indigo-400 text-indigo-700 font-bold hover:bg-indigo-50 transition-colors px-1 rounded-md inline focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {word}
        </button>
      );
    } else {
      elements.push(word);
    }
    
    lastIndex = match.index + word.length;
  });
  
  if (lastIndex < content.length) {
    elements.push(content.substring(lastIndex));
  }
  
  return <>{elements}</>;
};




const WIPModal = ({ onClose, emoji, title, description, lang = 'mk' }) => {
  const T = t_full[lang];
  return (
    <div className="fixed inset-0 z-[120] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-8" onClick={onClose}>
      <div className="bg-white rounded-[4rem] shadow-2xl p-16 max-w-lg text-center" onClick={e => e.stopPropagation()}>
        <div className="text-8xl mb-8">{emoji}</div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">{T.wipTitle}</h2>
        <p className="text-xl text-slate-500 font-bold mb-10 leading-relaxed">{description}</p>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay:'0.1s'}}></div>
          <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay:'0.2s'}}></div>
        </div>
        <button onClick={onClose} className="px-12 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-lg uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl">{T.close}</button>
      </div>
    </div>
  );
};

// ─── HELPERS ────────────────────────────────────────────────
const generateSessionCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};


// ─── TEACHER LOGIN MODAL ─────────────────────────────────────
const TeacherLoginModal = ({ onSuccess, onClose, lang = 'mk' }) => {
  const T = t_full[lang];
  const [pin, setPin] = useState('');
  const [mode, setMode] = useState('pin');
  const [joinCode, setJoinCode] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [error, setError] = useState('');
  const [createdCode, setCreatedCode] = useState('');
  const TEACHER_PIN = import.meta.env.VITE_TEACHER_PIN || 'pirls2026';

  const handlePinSubmit = () => {
    if (pin === TEACHER_PIN) { setMode('options'); setError(''); }
    else { setError(T.wrongPin); setPin(''); }
  };

  const handleCreateSession = async () => {
    const code = generateSessionCode();
    if (FIREBASE_ENABLED && db) {
      await set(ref(db, `pirls_sessions/${code}`), {
        createdAt: Date.now(), teacher: teacherName || T.teacherLogin, students: {},
      }).catch(() => {});
    }
    setCreatedCode(code);
    setMode('story');
  };

  const handlePickStory = async (storyId) => {
    if (FIREBASE_ENABLED && db && createdCode) {
      await update(ref(db, `pirls_sessions/${createdCode}`), { assignedStory: storyId }).catch(() => {});
    }
    onSuccess(createdCode);
  };

  const handleJoinSession = () => {
    if (joinCode.trim().length < 4) { setError(T.enterValidCode); return; }
    onSuccess(joinCode.toUpperCase().trim());
  };

  if (mode === 'story') return (
    <div className="fixed inset-0 z-[300] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[3rem] p-10 shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        <div className="text-center mb-6 shrink-0">
          <div className="text-5xl mb-3">📚</div>
          <h2 className="text-3xl font-black text-slate-900">{T.whichStory}</h2>
          <p className="text-slate-500 mt-2 text-base">{T.classCode}: <strong className="text-indigo-600 text-xl tracking-widest font-black">{createdCode}</strong> · {T.chooseStoryForStudents}</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 overflow-y-auto flex-1 mb-4">
          {STORIES.map(s => (
            <button key={s.id} onClick={() => handlePickStory(s.id)}
              className={`p-5 rounded-[2rem] border-4 bg-gradient-to-b ${s.color} hover:shadow-xl hover:scale-105 transition-all text-center group`}>
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
              <p className="text-xs font-black text-slate-800 leading-tight">{lang === 'sq' && s.titleSq ? s.titleSq : s.title}</p>
            </button>
          ))}
        </div>
        <button onClick={() => onSuccess(createdCode)}
          className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all shrink-0">
          {T.continueNoStory}
        </button>
      </div>
    </div>
  );

  if (mode === 'pin') return (
    <div className="fixed inset-0 z-[300] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[3rem] p-12 shadow-2xl w-full max-w-md">
        <div className="text-center mb-10">
          <div className="text-7xl mb-4">👩‍🏫</div>
          <h2 className="text-4xl font-black text-slate-900">{T.teacherPortal}</h2>
          <p className="text-slate-500 mt-2">{T.enterPin}</p>
        </div>
        <input type="password" value={pin} onChange={e => setPin(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handlePinSubmit()}
          placeholder={T.placeholderPin}
          className="w-full text-center text-3xl tracking-widest border-4 border-slate-200 rounded-2xl py-5 px-6 font-mono focus:outline-none focus:border-indigo-400 mb-4" />
        {error && <p className="text-red-500 text-center font-bold mb-4">{error}</p>}
        <div className="flex gap-4">
          <button onClick={onClose} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all">{T.cancel}</button>
          <button onClick={handlePinSubmit} className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all">{T.enter}</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[300] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[3rem] p-12 shadow-2xl w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👩‍🏫</div>
          <h2 className="text-3xl font-black text-slate-900">{T.teacherPanel}</h2>
          <p className="text-slate-500 mt-3 text-base leading-snug">{T.teacherPanelDesc}</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 block">{T.yourName}</label>
            <input value={teacherName} onChange={e => setTeacherName(e.target.value)}
              placeholder={T.namePlaceholder}
              className="w-full border-4 border-slate-200 rounded-2xl py-4 px-6 font-bold text-lg focus:outline-none focus:border-indigo-400" />
          </div>
          <button onClick={handleCreateSession}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-200">
            🆕 {T.teacherLogin}
          </button>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-sm font-bold">{T.orLabel}</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div>
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 block">{T.classCode}</label>
            <div className="flex gap-3">
              <input value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase())}
                placeholder="ABCDEF" maxLength={8}
                className="flex-1 border-4 border-slate-200 rounded-2xl py-4 px-6 font-black text-xl text-center tracking-widest focus:outline-none focus:border-indigo-400 uppercase" />
              <button onClick={handleJoinSession}
                className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-black text-lg hover:bg-slate-700 transition-all">{T.enter}</button>
            </div>
          </div>
          {error && <p className="text-red-500 text-center font-bold">{error}</p>}
        </div>
        <button onClick={onClose} className="w-full mt-6 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all">{T.cancel}</button>
      </div>
    </div>
  );
};

// ─── STUDENT JOIN MODAL ──────────────────────────────────────
const StudentJoinModal = ({ onJoin, onSkip, lang = 'mk' }) => {
  const T = t_full[lang];
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJoin = async () => {
    if (name.trim().length < 2) { setError(T.errorName); return; }
    if (code.trim().length < 4) { setError(T.errorCode); return; }
    const upperCode = code.toUpperCase().trim();
    setLoading(true);
    if (FIREBASE_ENABLED && db) {
      try {
        const snap = await get(ref(db, `pirls_sessions/${upperCode}`));
        if (!snap?.exists()) { setError(T.errorNotExist); setLoading(false); return; }
      } catch {
        // Permission error or network issue — allow joining, student data will sync when written
      }
    }
    setLoading(false);
    onJoin(name.trim(), upperCode);
  };

  return (
    <div className="fixed inset-0 z-[300] bg-indigo-950/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[3rem] p-12 shadow-2xl w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎓</div>
          <h2 className="text-4xl font-black text-slate-900">{T.studentJoin}</h2>
          <p className="text-slate-500 mt-3 text-base leading-snug">{T.studentDesc}</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 block">{T.nameLabel}</label>
            <input value={name} onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleJoin()}
              placeholder={T.namePlaceholder}
              className="w-full border-4 border-slate-200 rounded-2xl py-5 px-6 font-bold text-xl focus:outline-none focus:border-indigo-400" />
          </div>
          <div>
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 block">{T.classCode}</label>
            <input value={code} onChange={e => setCode(e.target.value.toUpperCase())}
              onKeyDown={e => e.key === 'Enter' && handleJoin()}
              placeholder="ABCDEF" maxLength={8}
              className="w-full border-4 border-slate-200 rounded-2xl py-5 px-6 font-black text-2xl text-center tracking-widest focus:outline-none focus:border-indigo-400 uppercase" />
          </div>
          {error && <p className="text-red-500 text-center font-bold">{error}</p>}
          <button onClick={handleJoin} disabled={loading}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 disabled:opacity-60 transition-all shadow-lg shadow-indigo-200">
            {loading ? T.btnLoading : T.btnJoin}
          </button>
        </div>
        <button onClick={onSkip} className="w-full mt-4 py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all">
          {T.btnSkip}
        </button>
        <p className="text-center text-xs text-slate-300 mt-3">{T.skipDesc}</p>
      </div>
    </div>
  );
};

// ─── TEACHER DASHBOARD ───────────────────────────────────────
const TeacherDashboard = ({ sessionCode, lang = 'mk', onClose }) => {
  const T = t_full[lang];
  const [sessionData, setSessionData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (!FIREBASE_ENABLED || !db || !sessionCode) return;
    const sessionRef = ref(db, `pirls_sessions/${sessionCode}`);
    const unsubscribe = onValue(sessionRef, snap => setSessionData(snap.val()));
    return () => off(sessionRef);
  }, [sessionCode]);

  const students = sessionData?.students ? Object.entries(sessionData.students) : [];
  const now = Date.now();
  
  // Calculate Class Stats
  const activeStudentsCount = students.filter(([, s]) => now - (s.lastSeen || 0) < 90000).length;
  const totalAnswers = students.reduce((acc, [, s]) => acc + (s.answers ? Object.keys(s.answers).length : 0), 0);
  const correctAnswers = students.reduce((acc, [, s]) => {
    if (!s.answers) return acc;
    return acc + Object.values(s.answers).filter(a => a.isCorrect === true).length;
  }, 0);
  const classAccuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;

  const exportCSV = () => {
    const rows = [[T.csvStudent, T.csvStory, T.csvQuestion, T.csvAnswer, T.csvCorrect, T.csvType, T.csvTime]];
    students.forEach(([, s]) => {
      if (!s.answers) return;
      Object.entries(s.answers).forEach(([key, ans]) => {
        const parts = key.split('_q');
        rows.push([
          s.name || '—', parts[0], parseInt(parts[1] || 0) + 1,
          `"${(ans.value || '').replace(/"/g, '""')}"`,
          ans.isCorrect === true ? T.csvCorrect : ans.isCorrect === false ? T.csvIncorrect : '—',
          ans.type === 'mcq' ? T.mcqType : T.textType,
          new Date(ans.timestamp).toLocaleTimeString(lang === 'mk' ? 'mk-MK' : 'sq-AL'),
        ]);
      });
    });
    const csv = '\uFEFF' + rows.map(r => r.join(',')).join('\n');
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })),
      download: `pirls_${sessionCode}_${new Date().toISOString().slice(0, 10)}.csv`,
    });
    a.click();
  };

  return (
    <div className="fixed inset-0 z-[250] bg-slate-950 flex flex-col font-sans">
      {/* HEADER */}
      <div className="bg-slate-900 border-b-2 border-slate-800 px-8 py-5 flex items-center justify-between shrink-0 shadow-2xl z-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-indigo-500/20">👩‍🏫</div>
          <div>
            <h1 className="text-white font-black text-3xl tracking-tight">{T.liveLessonView}</h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {activeStudentsCount} {T.activeStatus}
              </span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{students.length} {T.totalStudents}</span>
              {FIREBASE_ENABLED ? (
                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ml-2">{T.synchronized} ✅</span>
              ) : (
                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ml-2">{T.demoMode} ⚠️</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="grid grid-cols-2 gap-8 mr-6 border-r border-slate-800 pr-8 hidden xl:grid">
            <div className="text-center">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{T.classAccuracy}</p>
              <p className="text-white text-2xl font-black">{classAccuracy}%</p>
            </div>
            <div className="text-center">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{T.answersCount}</p>
              <p className="text-white text-2xl font-black">{totalAnswers}</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-[2.5rem] px-10 py-4 text-center border-2 border-slate-700/50 relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.25em] mb-1 relative z-10">{T.studentCodeLabel}</p>
            <p className="text-white font-black text-4xl tracking-[0.4em] relative z-10 leading-none">{sessionCode}</p>
            <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex gap-3">
            <button onClick={exportCSV} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black transition-all text-sm uppercase tracking-widest shadow-lg shadow-emerald-900/20">📥 {T.report}</button>
            <button onClick={onClose} className="bg-slate-800 hover:bg-slate-700 text-white w-16 h-16 rounded-2xl font-black text-3xl flex items-center justify-center transition-all border-2 border-slate-700">×</button>
          </div>
        </div>
      </div>

      {/* STORY SWITCHER — live control */}
      <div className="bg-slate-900/50 border-b border-slate-800/50 px-8 py-4 flex items-center gap-4 overflow-x-auto shrink-0 no-scrollbar">
        <div className="flex items-center gap-3 bg-slate-800/40 px-4 py-2 rounded-2xl border border-slate-700/50 shrink-0 mr-2">
          <span className="text-2xl">🎯</span>
          <span className="text-slate-300 text-xs font-black uppercase tracking-widest shrink-0">{T.storySelection}:</span>
        </div>
        {STORIES.map(s => {
          const isActive = sessionData?.assignedStory === s.id;
          return (
            <button key={s.id} onClick={async () => {
              if (!FIREBASE_ENABLED || !db) return;
              await update(ref(db, `pirls_sessions/${sessionCode}`), { assignedStory: isActive ? null : s.id }).catch(() => {});
            }}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-sm transition-all shrink-0 border-2 ${isActive ? 'bg-indigo-600 text-white border-indigo-400 shadow-xl shadow-indigo-500/20 scale-105' : 'bg-slate-800/40 text-slate-400 border-transparent hover:bg-slate-800 hover:text-white hover:border-slate-600'}`}>
              <span className="text-xl">{s.icon}</span>
              <span>{lang === 'sq' && s.titleSq ? s.titleSq : s.title}</span>
            </button>
          );
        })}
        {sessionData?.assignedStory && (
          <button onClick={async () => {
            if (!FIREBASE_ENABLED || !db) return;
            await update(ref(db, `pirls_sessions/${sessionCode}`), { assignedStory: null }).catch(() => {});
          }}
            className="px-6 py-3 rounded-2xl font-black text-xs bg-rose-900/40 text-rose-400 border-2 border-rose-900/50 hover:bg-rose-800/50 hover:text-rose-300 transition-all shrink-0 uppercase tracking-widest flex items-center gap-2">
            ✕ {T.cancelRestriction}
          </button>
        )}
      </div>

      {/* MAIN GRID */}
      <div className="flex-1 overflow-y-auto p-8 bg-slate-950">
        {students.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-600 max-w-2xl mx-auto text-center">
            <div className="text-[12rem] mb-10 animate-pulse">⏳</div>
            <p className="text-5xl font-black text-white mb-6 tracking-tight">{T.waitingForStudents}</p>
            <p className="text-2xl text-slate-500 mb-10 leading-relaxed font-bold">{T.tellStudentsCode}</p>
            <div className="bg-slate-900 rounded-[4rem] px-20 py-10 border-4 border-indigo-500 shadow-2xl shadow-indigo-500/10">
              <p className="text-[10rem] font-black text-indigo-400 tracking-[0.3em] leading-none uppercase">{sessionCode}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {students.map(([sId, s]) => {
              const isActive = now - (s.lastSeen || 0) < 90000;
              const allAns = s.answers ? Object.values(s.answers) : [];
              const correct = allAns.filter(a => a.isCorrect === true).length;
              const total = allAns.length;
              const pct = total > 0 ? Math.round((correct / total) * 100) : null;
              const isSelected = selectedId === sId;
              
              // Find story info
              const story = s.currentStory ? STORIES.find(st => st.id === s.currentStory) : null;

              return (
                <div key={sId} onClick={() => setSelectedId(isSelected ? null : sId)}
                  className={`rounded-[2.5rem] p-6 border-2 cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col ${isSelected ? 'bg-slate-900 border-indigo-500 shadow-2xl scale-[1.02] z-20' : isActive ? 'bg-slate-900 border-slate-800 hover:border-indigo-600 shadow-lg' : 'bg-slate-950 border-slate-900 opacity-60 grayscale'}`}>
                  
                  {/* Status Indicator Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${isActive ? 'bg-indigo-500' : 'bg-slate-800'}`} />

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shrink-0 shadow-lg ${isActive ? 'bg-gradient-to-br from-indigo-500 to-indigo-700' : 'bg-slate-800 text-slate-500'}`}>
                      {(s.name || '?').slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white text-xl font-black truncate tracking-tight">{s.name || T.anonymous}</p>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-green-400 animate-pulse' : 'bg-slate-600'}`} />
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-green-400' : 'text-slate-500'}`}>{isActive ? T.activeStatusLabel : T.inactiveStatusLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity Summary */}
                  <div className="bg-slate-800/40 rounded-3xl p-4 mb-4 border border-slate-700/30 flex-1">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{T.currentActivity}</p>
                    {s.currentStory && s.currentStory !== 'home' ? (
                      <div className="flex items-start gap-3">
                        <span className="text-2xl mt-1">{story?.icon || '📖'}</span>
                        <div>
                          <p className="text-white text-sm font-black leading-snug">{lang === 'sq' && story?.titleSq ? story?.titleSq : (story?.title || s.currentStory)}</p>
                          <div className="flex items-center gap-2 mt-1">
                             <p className="text-indigo-400 text-xs font-black">{T.questionLabel} {(s.currentQuestion || 0) + 1}</p>
                             <span className="text-slate-700">•</span>
                             <p className="text-slate-500 text-[10px] font-bold">{T.stepLabel} {(s.currentQuestion || 0) + 1}/8</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🏠</span>
                        <p className="text-slate-400 text-sm font-bold italic">{T.viewingHome}</p>
                      </div>
                    )}
                  </div>

                  {/* Progress Stats */}
                  {total > 0 && (
                    <div className="mb-2 px-1">
                      <div className="flex justify-between text-xs mb-2 items-end">
                        <div className="flex flex-col">
                           <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{T.successRate}</span>
                           <span className={`font-black text-lg leading-none ${pct >= 70 ? 'text-emerald-400' : pct >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>{pct}%</span>
                        </div>
                        <span className="text-slate-400 font-bold text-xs bg-slate-800 px-2 py-1 rounded-lg border border-slate-700">{correct} / {total}</span>
                      </div>
                      <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 p-0.5">
                        <div className={`h-full rounded-full transition-all duration-1000 ${pct >= 70 ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.3)]' : pct >= 40 ? 'bg-amber-400' : 'bg-rose-400'}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )}

                  {isSelected && s.answers && (
                    <div className="border-t border-slate-800 pt-5 mt-4 space-y-3 max-h-[16rem] overflow-y-auto pr-1 no-scrollbar animate-in fade-in slide-in-from-top-2">
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center justify-between">
                         <span>{T.answerHistory}</span>
                         <span className="text-indigo-500">{T.live} →</span>
                      </p>
                      {Object.entries(s.answers).reverse().map(([key, ans]) => {
                        const parts = key.split('_q');
                        const qStory = STORIES.find(st => st.id === parts[0]);
                        return (
                          <div key={key} className={`p-3 rounded-2xl text-xs border border-transparent transition-colors ${ans.isCorrect === true ? 'bg-emerald-500/5 border-emerald-500/20' : ans.isCorrect === false ? 'bg-rose-500/5 border-rose-500/20' : 'bg-slate-800/50 border-slate-700/50'}`}>
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="font-black text-slate-400 uppercase tracking-tighter flex items-center gap-1">
                                {qStory?.icon || '📖'} {T.questionLabel.slice(0, 1)}{parseInt(parts[1] || 0) + 1}
                              </span>
                              <div className={`px-2 py-0.5 rounded-full font-black text-[9px] uppercase tracking-widest ${ans.isCorrect === true ? T.csvCorrect : ans.isCorrect === false ? T.csvIncorrect : T.textType}`}>
                                {ans.isCorrect === true ? T.csvCorrect : ans.isCorrect === false ? T.csvIncorrect : T.textType}
                              </div>
                            </div>
                            <p className="text-slate-300 font-bold leading-relaxed pr-4 line-clamp-3">{ans.value || '—'}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {isSelected && (
                    <div className="mt-auto pt-4 flex justify-center">
                       <button className="text-indigo-500 text-[10px] font-black uppercase tracking-widest hover:text-indigo-400 transition-colors">{T.closeDetails} ↑</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const ChronologicalPuzzle = ({ data, onClose, lang = 'mk' }) => {
  const [items, setItems] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [flippedIds, setFlippedIds] = useState(new Set());
  const [fullViewImg, setFullViewImg] = useState(null);

  useEffect(() => {
    const shuffled = [...data].filter(item => item.img).sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, [data]);

  const handleReorder = (newOrder) => {
    setItems(newOrder);
    const currentOrder = newOrder.map(item => item.id).join(',');
    const correctOrder = data.map(item => item.id).join(',');
    if (currentOrder === correctOrder) {
      setIsCorrect(true);
      if (typeof playSound === 'function') playSound('success');
    }
  };

  const toggleFlip = (id) => {
    setFlippedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetPuzzle = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setIsCorrect(false);
    setFlippedIds(new Set());
  };

  const t = {
    mk: {
      title: "ХРОНОЛОШКА СЛАГАЛКА",
      desc: "Подреди ги сликите во правилен редослед! Кликни на 🔍 за да ја видиш целата илустрација, или на 🔄 за да го видиш делот од приказната!",
      reset: "Ресетирај 🔄",
      successTitle: "СЕКОЈА ЧЕСТ!",
      successDesc: "Успешно ја раскажа приказната со правилно подредување на сликите!",
      successBtn: "ОДИМЕ ПОНАТАМУ! 🚀",
      back: "Назад кон сликата",
      zoom: "Зголеми слика",
      readPart: "Прочитај дел од приказната"
    },
    sq: {
      title: "PUZZLE KRONOLOGJIKE",
      desc: "Renditni fotografitë në rendin e duhur! Klikoni mbi 🔍 për të parë ilustrimin e plotë, ose mbi 🔄 për të parë pjesën e tregimit!",
      reset: "Rifillo 🔄",
      successTitle: "ÇDO NDER!",
      successDesc: "Ju e treguat me sukses historinë duke i rregulluar fotografitë në rendin e duhur!",
      successBtn: "VAZHDOJMË TUTJE! 🚀",
      back: "Kthehu te fotografia",
      zoom: "Zmadho fotografinë",
      readPart: "Lexo pjesën e tregimit"
    }
  }[lang];

  return (
    <div className="fixed inset-0 z-[120] bg-indigo-950/98 backdrop-blur-xl flex flex-col p-8 overflow-hidden">
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-indigo-500 rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-indigo-500/20">🧩</div>
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{t.title}</h2>
            <p className="text-indigo-300 text-lg font-bold">{t.desc}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={resetPuzzle} className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-[1.5rem] font-black uppercase tracking-widest text-xs border-2 border-white/10 transition-all">{t.reset}</button>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white w-16 h-16 rounded-[1.5rem] font-black text-3xl border-2 border-white/10 flex items-center justify-center transition-all">×</button>
        </div>
      </div>

      <div className="flex-1 w-full overflow-y-auto px-4 pb-20 no-scrollbar">
        <Reorder.Group 
          axis="x" 
          values={items} 
          onReorder={handleReorder}
          className="flex flex-wrap gap-6 justify-center max-w-full mx-auto py-6"
        >
          {items.map((item) => (
            <Reorder.Item 
              key={item.id} 
              value={item}
              whileDrag={{ scale: 1.05, rotate: 2, zIndex: 50 }}
              className="flex-shrink-0 cursor-grab active:cursor-grabbing perspective-1000"
            >
              <div 
                className="relative w-[15rem] h-[22rem] transition-all duration-700 preserve-3d"
                style={{ transform: flippedIds.has(item.id) ? 'rotateY(180deg)' : 'none' }}
              >
                {/* FRONT SIDE: LARGE IMAGE */}
                <div
                  className={`absolute inset-0 backface-hidden w-full h-full bg-white rounded-[2.5rem] shadow-xl p-3 border-[8px] transition-all duration-300 group ${isCorrect ? 'border-emerald-400' : 'border-white hover:border-indigo-400'}`}
                >
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-xl font-black shadow-lg z-20">
                    {items.indexOf(item) + 1}
                  </div>
                  <div 
                    className="w-full h-full relative overflow-hidden rounded-[2rem] bg-slate-50 group cursor-zoom-in"
                    onClick={() => setFullViewImg(item.img)}
                  >
                    <img src={item.img} className="w-full h-full object-contain pointer-events-none" alt={`Слика ${items.indexOf(item) + 1} од слагалката`} />
                    
                    {/* ZOOM OVERLAY */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/40 backdrop-blur-md p-3 rounded-full text-white text-2xl border-2 border-white/20">🔍</span>
                    </div>
                  </div>
                  
                  {/* BUTTONS ROW */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => { e.stopPropagation(); setFullViewImg(item.img); }}
                      className="bg-indigo-500/90 backdrop-blur-md text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-lg border-2 border-white/20 hover:bg-indigo-600 hover:scale-110 transition-all cursor-pointer"
                      title={t.zoom}
                    >🔍</button>
                    <button
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => { e.stopPropagation(); toggleFlip(item.id); }}
                      className="bg-indigo-500/90 backdrop-blur-md text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-lg border-2 border-white/20 hover:bg-indigo-600 hover:scale-110 transition-all cursor-pointer"
                      title={t.readPart}
                    >🔄</button>
                  </div>
                </div>

                {/* BACK SIDE: TEXT */}
                <div
                  className="absolute inset-0 backface-hidden w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] shadow-xl p-6 border-[8px] border-indigo-400 flex flex-col items-center justify-center text-center rotate-y-180"
                >
                  <p className="text-white font-black text-base leading-snug mb-4 overflow-y-auto max-h-full">
                    {lang === 'sq' && item.textSq ? item.textSq : item.text}
                  </p>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-xl border-2 border-white/20 flex-shrink-0">📖</div>
                  <button
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => { e.stopPropagation(); toggleFlip(item.id); }}
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg shadow-lg border-2 border-white/20 hover:bg-white/40 hover:scale-110 transition-all cursor-pointer"
                    title={t.back}
                  >🔄</button>
                </div>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <AnimatePresence>
        {fullViewImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setFullViewImg(null)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-10 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={fullViewImg} 
              className="max-w-full max-h-full rounded-3xl shadow-2xl border-8 border-white/10" 
              alt="Зголемена илустрација"
            />
            <button className="absolute top-10 right-10 bg-white/10 hover:bg-white/20 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-4xl border-2 border-white/10 transition-all">×</button>
          </motion.div>
        )}

        {isCorrect && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-900/40 backdrop-blur-md z-[130] p-10 text-center"
          >
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-[4rem] p-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-[12px] border-emerald-400 max-w-4xl"
            >
              <div className="text-[12rem] mb-12 animate-bounce">🏆</div>
              <h3 className="text-8xl font-black text-slate-900 mb-6 tracking-tighter uppercase">{t.successTitle}</h3>
              <p className="text-4xl text-slate-600 font-bold mb-16 opacity-90 leading-tight">{t.successDesc}</p>
              <button 
                onClick={onClose} 
                className="px-24 py-10 bg-emerald-500 text-white rounded-full text-5xl font-black shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border-b-8 border-emerald-700"
              >
                {t.successBtn}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ColoringBook = ({ data, onClose, lang = 'mk' }) => {
  const [activeScene, setActiveScene] = useState(0);
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#ef4444');
  const [brushSize, setBrushSize] = useState(20);
  const [zoom, setZoom] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  // toolType: 'brush' | 'pencil' | 'eraser'
  const [toolType, setToolType] = useState('brush');
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [points, setPoints] = useState([]);

  // Caption matching: sceneAssignments[sceneIdx] = captionOriginalIdx
  const [sceneAssignments, setSceneAssignments] = useState({});
  // Shuffle caption order once on mount for the matching challenge
  const [shuffledOrder] = useState(() => {
    const arr = data.map((_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const handleCaptionClick = (captionIdx) => {
    setSceneAssignments(prev => {
      const newA = { ...prev };
      // Remove this caption from any previously assigned scene
      for (const k of Object.keys(newA)) {
        if (newA[k] === captionIdx) delete newA[k];
      }
      // Toggle: unassign if same caption already on current scene
      if (prev[activeScene] === captionIdx) {
        delete newA[activeScene];
      } else {
        newA[activeScene] = captionIdx;
      }
      return newA;
    });
  };

  const scene = data[activeScene];
  const assignedCaptionIdx = sceneAssignments[activeScene];

  const saveToHistory = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      setHistory(prev => [...prev.slice(-19), canvas.toDataURL()]);
      setRedoStack([]);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = scene.img;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setHistory([canvas.toDataURL()]);
      setRedoStack([]);
    };
  }, [activeScene, scene.img]);

  const undo = () => {
    if (history.length <= 1) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const currentState = history[history.length - 1];
    const prevState = history[history.length - 2];
    setRedoStack(prev => [...prev, currentState]);
    setHistory(prev => prev.slice(0, -1));
    const img = new Image();
    img.src = prevState;
    img.onload = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0, canvas.width, canvas.height); };
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const nextState = redoStack[redoStack.length - 1];
    setHistory(prev => [...prev, nextState]);
    setRedoStack(prev => prev.slice(0, -1));
    const img = new Image();
    img.src = nextState;
    img.onload = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0, canvas.width, canvas.height); };
  };

  // FIX: coordinates use canvas.width/rect.width which already handles zoom via CSS width
  const getCoords = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    saveToHistory();
    const canvas = canvasRef.current;
    const { x, y } = getCoords(e, canvas);
    setPoints([{ x, y }]);
    setIsDrawing(true);
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    if (toolType === 'eraser') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = brushSize / zoom;
    } else if (toolType === 'pencil') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1, brushSize * 0.3 / zoom);
    } else {
      ctx.globalCompositeOperation = 'multiply';
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize / zoom;
    }
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const { x, y } = getCoords(e, canvas);
    const newPoints = [...points, { x, y }];
    setPoints(newPoints);
    const ctx = canvas.getContext('2d');
    if (toolType === 'pencil' || newPoints.length <= 2) {
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      const lastTwo = newPoints.slice(-3);
      const xc = (lastTwo[1].x + lastTwo[2].x) / 2;
      const yc = (lastTwo[1].y + lastTwo[2].y) / 2;
      ctx.quadraticCurveTo(lastTwo[1].x, lastTwo[1].y, xc, yc);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    if (e?.type?.startsWith('touch')) e.preventDefault();
    if (isDrawing) { setIsDrawing(false); setPoints([]); }
  };

  const clearCanvas = () => {
    saveToHistory();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = scene.img;
    img.onload = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0, canvas.width, canvas.height); };
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `pirls-boenka-${activeScene + 1}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const printCanvas = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    const captionText = assignedCaptionIdx !== undefined ? data[assignedCaptionIdx].text : '';
    const win = window.open('', '_blank');
    win.document.write(`<html><body style="margin:0;padding:24px;font-family:sans-serif;background:#fff;text-align:center">
      <img src="${dataUrl}" style="max-width:100%;max-height:85vh;object-fit:contain;display:block;margin:0 auto"/>
      ${captionText ? `<p style="font-size:20px;margin-top:20px;font-style:italic;color:#333;text-align:center">&bdquo;${captionText}&ldquo;</p>` : ''}
      <script>window.onload=function(){window.print();window.close();}<\/script>
    </body></html>`);
    win.document.close();
  };

  const t = {
    mk: {
      title: "БОЕНКА",
      brush: "Четка",
      pencil: "Молив",
      eraser: "Гума",
      undo: "Врати назад",
      redo: "Врати напред",
      zoom: "Зум",
      scenes: "Сцени",
      cards: "Картички со текст",
      hint: "Кликни на картичка за да ја поставиш на тековната слика",
      chooseCard: "← Избери картичка со текст",
      print: "Печати",
      save: "Сними",
      clear: "Исчисти",
      close: "Затвори"
    },
    sq: {
      title: "LIBRI I NGJYROSJES",
      brush: "Furça",
      pencil: "Lapsi",
      eraser: "Goma",
      undo: "Kthehu prapa",
      redo: "Shko përpara",
      zoom: "Zmadhimi",
      scenes: "Skenat",
      cards: "Karta me tekst",
      hint: "Klikoni mbi një kartë për ta vendosur atë në imazhin aktual",
      chooseCard: "← Zgjidhni një kartë teksti",
      print: "Printo",
      save: "Ruaj",
      clear: "Pastro",
      close: "Mbyll"
    }
  }[lang];

  const toolBtn = (type, icon, title) => (
    <button
      onClick={() => setToolType(type)}
      className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl transition-all ${toolType === type ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'}`}
      title={title}
    >{icon}</button>
  );

  return (
    <div className="fixed inset-0 z-[120] bg-white flex flex-col p-6 overflow-hidden">
      {/* TOOLBAR */}
      <div className="flex justify-between items-center mb-6 bg-slate-50 p-4 rounded-[2rem] border-2 border-slate-100 shadow-sm overflow-x-auto no-scrollbar gap-4">
        <div className="flex items-center gap-6 min-w-max">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter shrink-0">🎨 {t.title}</h2>

          <div className="h-10 w-px bg-slate-200 shrink-0" />

          {/* Tools */}
          <div className="flex gap-1 bg-white p-1.5 rounded-2xl shadow-inner shrink-0">
            {toolBtn('brush', '🖌️', t.brush)}
            {toolBtn('pencil', '✏️', t.pencil)}
            {toolBtn('eraser', '🧽', t.eraser)}
          </div>

          {/* Undo/Redo */}
          <div className="flex gap-1 shrink-0">
            <button onClick={undo} disabled={history.length <= 1} className="w-10 h-10 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 text-lg" title={t.undo} aria-label={t.undo}>↩️</button>
            <button onClick={redo} disabled={redoStack.length === 0} className="w-10 h-10 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 text-lg" title={t.redo} aria-label={t.redo}>↪️</button>
          </div>

          <div className="h-10 w-px bg-slate-200 shrink-0" />

          {/* Colors */}
          <div className="flex gap-2 shrink-0">
            {['#ef4444','#f97316','#f59e0b','#10b981','#3b82f6','#8b5cf6','#ec4899','#000000'].map(c => (
              <button
                key={c}
                className={`w-9 h-9 rounded-full border-4 transition-all ${color === c && toolType !== 'eraser' ? 'scale-125 border-indigo-600 shadow-lg' : 'border-transparent hover:scale-110'}`}
                style={{ backgroundColor: c }}
                onClick={() => { setColor(c); if (toolType === 'eraser') setToolType('brush'); }}
              />
            ))}
          </div>

          <div className="h-10 w-px bg-slate-200 shrink-0" />

          {/* Brush size */}
          <div className="flex flex-col gap-1 min-w-[110px] shrink-0">
            <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>{toolType === 'pencil' ? t.pencil : t.brush}</span>
              <span>{brushSize}px</span>
            </div>
            <input type="range" min="2" max="80" value={brushSize} onChange={e => setBrushSize(+e.target.value)}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
          </div>

          <div className="h-10 w-px bg-slate-200 shrink-0" />

          {/* Zoom */}
          <div className="flex flex-col gap-1 shrink-0">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">{t.zoom}</span>
            <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200">
              <button onClick={() => setZoom(z => Math.max(0.5, +(z - 0.25).toFixed(2)))} className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg font-black hover:bg-slate-100">−</button>
              <span className="text-slate-700 font-mono text-[10px] w-10 text-center font-black">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(4, +(z + 0.25).toFixed(2)))} className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg font-black hover:bg-slate-100">+</button>
            </div>
          </div>

          <div className="h-10 w-px bg-slate-200 shrink-0" />

          {/* Caption matching progress indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border-2 border-amber-200 shrink-0">
            <span className="text-amber-600 text-lg">📝</span>
            <span className="text-amber-800 font-black text-sm">{Object.keys(sceneAssignments).length}/{data.length}</span>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex gap-3 shrink-0">
          <button onClick={printCanvas} className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-3 rounded-2xl font-black text-sm hover:bg-indigo-100 transition-all border-2 border-indigo-100">🖨️ {t.print}</button>
          <button onClick={downloadCanvas} className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-3 rounded-2xl font-black text-sm hover:bg-emerald-100 transition-all border-2 border-emerald-100">💾 {t.save}</button>
          <button onClick={clearCanvas} className="flex items-center gap-2 bg-rose-50 text-rose-600 px-5 py-3 rounded-2xl font-black text-sm hover:bg-rose-100 transition-all border-2 border-rose-100">🗑️ {t.clear}</button>
          <button onClick={onClose} className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl">× {t.close}</button>
        </div>
      </div>

      {/* MAIN AREA — scenes | canvas | captions underneath */}
      <div className="flex-1 flex gap-6 overflow-hidden min-h-0">

        {/* LEFT: scene thumbnails */}
        <div className="w-36 space-y-2 overflow-y-auto pr-1 shrink-0 no-scrollbar">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">{t.scenes}</p>
          {data.map((s, idx) => {
            const isCorrect = sceneAssignments[idx] === idx;
            const hasAssignment = sceneAssignments[idx] !== undefined;
            return (
              <button
                key={idx}
                onClick={() => { setActiveScene(idx); setZoom(1); }}
                className={`w-full p-2 rounded-2xl border-4 transition-all text-left group ${activeScene === idx ? 'bg-indigo-600 border-indigo-400 shadow-xl' : 'bg-white border-slate-100 hover:border-indigo-200 shadow-sm'}`}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img src={s.img} className={`w-full h-16 object-cover transition-all ${activeScene === idx ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} alt={`${t.scenes} ${idx + 1}`} />
                  <div className={`absolute inset-0 flex items-center justify-center font-black text-2xl text-white drop-shadow-lg`}>{idx + 1}</div>
                  {hasAssignment && (
                    <div className={`absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black shadow ${isCorrect ? 'bg-green-500' : 'bg-amber-400'}`}>
                      {isCorrect ? '✓' : '📝'}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* CENTER & BOTTOM: canvas area with captions underneath */}
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
          {/* Canvas area */}
          <div className="flex-1 overflow-auto bg-slate-100/50 rounded-[3rem] border-4 border-dashed border-slate-200 shadow-inner flex items-start justify-center p-8">
            <div className="relative inline-block">
              <canvas
                ref={canvasRef}
                width={800}
                height={600}
                style={{ width: `${800 * zoom}px`, height: `${600 * zoom}px`, maxWidth: '100%', maxHeight: '60vh', display: 'block', cursor: toolType === 'eraser' ? 'cell' : 'crosshair' }}
                className="shadow-2xl rounded-2xl bg-white"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                onTouchCancel={stopDrawing}
              />
              {/* Assigned caption overlay */}
              {assignedCaptionIdx !== undefined ? (
                <div className={`absolute bottom-4 left-4 right-4 px-6 py-3 rounded-2xl border-2 shadow-xl backdrop-blur-md ${assignedCaptionIdx === activeScene ? 'bg-green-400/95 border-green-300' : 'bg-amber-400/95 border-amber-300'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-lg shrink-0">{assignedCaptionIdx === activeScene ? '✅' : '📝'}</span>
                    <p className={`text-sm font-bold leading-snug italic ${assignedCaptionIdx === activeScene ? 'text-green-900' : 'text-amber-900'}`}>„{lang === 'sq' && data[assignedCaptionIdx].textSq ? data[assignedCaptionIdx].textSq : data[assignedCaptionIdx].text}"</p>
                  </div>
                </div>
              ) : (
                <div className="absolute bottom-4 left-4 right-4 bg-slate-800/60 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-slate-600/30 shadow-xl">
                  <p className="text-center text-white/80 text-sm font-bold">← {t.chooseCard}</p>
                </div>
              )}
            </div>
          </div>

          {/* CAPTIONS ROW (moved from right column to bottom) */}
          <div className="bg-slate-50 p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-sm shrink-0">
            <div className="flex items-center justify-between mb-4 px-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.cards}</p>
              <p className="text-[10px] text-slate-400 font-bold">{t.hint}</p>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {shuffledOrder.map((origIdx) => {
                const s = data[origIdx];
                const isOnCurrentScene = sceneAssignments[activeScene] === origIdx;
                const assignedToEntry = Object.entries(sceneAssignments).find(([, v]) => v === origIdx);
                const assignedSceneNum = assignedToEntry ? parseInt(assignedToEntry[0]) + 1 : null;
                const isCorrectForSomeScene = origIdx === parseInt(assignedToEntry?.[0]);
                return (
                  <button
                    key={origIdx}
                    onClick={() => handleCaptionClick(origIdx)}
                    className={`min-w-[16rem] max-w-[16rem] p-4 rounded-2xl border-4 text-left transition-all shadow-sm shrink-0 ${
                      isOnCurrentScene
                        ? 'bg-amber-400 border-amber-300 shadow-lg text-amber-900 scale-[1.02]'
                        : assignedSceneNum
                          ? isCorrectForSomeScene
                            ? 'bg-green-50 border-green-300 text-green-800'
                            : 'bg-slate-50 border-slate-200 text-slate-400'
                          : 'bg-white border-slate-100 hover:border-indigo-300 hover:shadow text-slate-700'
                    }`}
                  >
                    {assignedSceneNum && (
                      <div className="flex items-center gap-1 mb-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isOnCurrentScene ? 'bg-amber-700 text-white' : isCorrectForSomeScene ? 'bg-green-500 text-white' : 'bg-slate-400 text-white'}`}>
                          {isOnCurrentScene ? (lang === 'sq' ? '✓ Kjo skenë' : '✓ Оваа слика') : `${lang === 'sq' ? 'Skena' : 'Слика'} ${assignedSceneNum}`}
                        </span>
                      </div>
                    )}
                    <p className="text-xs font-bold leading-snug italic">„{lang === 'sq' && s.textSq ? s.textSq : s.text}"</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeStory, setActiveStory] = useState('home');
  const [lang, setLang] = useState(() => localStorage.getItem('pirls_lang') || 'mk');

  // ── TRANSLATIONS ──────────────────────────────────────────
  const t = {
    mk: {
      readingWithUnderstanding: "Читање со разбирање",
      heroTitle_part1: "Читање со ",
      heroTitle_part2: "разбирање",
      interactivePlatform: "Интерактивна образовна платформа",
      bilingualPlatform: "Двојазична платформа",
      bilingualDesc: "Платформата е достапна на македонски и албански јазик. Избери јазик со копчињата горе.",
      macedonian: "Македонски",
      albanian: "Shqip",
      active: "активно",
      studentJoin: "Влези во час",
      studentDesc: "Внеси го своето име и презиме и 6-знаковниот код од наставникот за да се приклучиш во часот.",
      studentJoined: "Поврзан на час",
      leaveSession: "Напушти час",
      teacherLogin: "Наставник",
      teacherDesc: "Создај час, следи ги учениците во живо и преземи извештај по завршувањето на часот.",
      enter: "Влези →",
      join: "Приклучи се →",
      chooseStory: "Избери приказна за да започнеш",
      back: "Назад",
      questions: "Прашања",
      puzzle: "Слагалка",
      coloring: "Боенка",
      markerRemoved: "Маркерот е отстранет.",
      markedWell: "Одлично маркирано!",
      allMarkersCleared: "Сите маркери се исчистени.",
      writeDetailed: "Те молам напиши подетален одговор за да го разберам твоето објаснување. 📝",
      correct: "Точно! Одлично размислување. 🎯",
      incorrect: "Не е точно — точниот одговор е означен со зелено. Продолжуваме натаму.",
      excellent: "ИЗВОНРЕДНО! 🏆 Твојот одговор е на највисоко ниво.",
      goodStart: "ДОБАР ПОЧЕТОК! ✨",
      rejected: "Хмм, твојот одговор не ги содржи клучните детали од приказната. 🧐 Прочитај го пак текстот и обиди се да го објасниш одговорот со твои зборови!",
      answerSaved: "Примено! Твојот одговор е зачуван. ⭐",
      of: "од",
      backToText: "Назад кон текстот",
      excellentWork: "Одлична работа!",
      completedStoryDesc: "Успешно ги одговори сите прашања за оваа приказна.",
      chooseNewStory: "Избери нова приказна →",
      listenQuestion: "Слушај го прашањето",
      owlFeedback: "🦉",
      badgesTitle: "ИЗВОНРЕДНО! Ја заврши оваа приказна и освои нов златен медал!",
      internetError: "⚠️ Нема интернет врска — одговорите не се синхронизираат",
      close: "Затвори",
      zoomIn: "Зголеми го фонтот",
      zoomOut: "Намали го фонтот",
      albanianWip: "Përkthimi shqip për këtë tregim është në përgatitje. Teksti shfaqet në maqedonisht.",
      storyWip: "Наскоро: Целосниот текст за оваа приказна е во подготовка...",
      today: "Денес",
      start: "Започни →",
      author: "Идеја и реализација:",
      footerPlatform: "Читање со разбирање 2026 • Интерактивна образовна платформа"
    },
    sq: {
      readingWithUnderstanding: "Lexim me kuptim",
      heroTitle_part1: "Lexim me ",
      heroTitle_part2: "kuptim",
      interactivePlatform: "Platformë edukative interaktive",
      bilingualPlatform: "Platformë dygjuhëshe",
      bilingualDesc: "Platforma është e disponueshme në gjuhën maqedonase dhe shqipe. Zgjidhni gjuhën me butonat më lart.",
      macedonian: "Maqedonisht",
      albanian: "Shqip",
      active: "aktive",
      studentJoin: "Hyni në klasë",
      studentDesc: "Shkruani emrin dhe mbiemrin tuaj dhe kodin me 6 shifra nga mësuesi për t'u bashkuar me klasën.",
      studentJoined: "I lidhur në klasë",
      leaveSession: "Largohu nga klasa",
      teacherLogin: "Mësuesi",
      teacherDesc: "Krijoni një klasë, ndiqni nxënësit drejtpërdrejt dhe shkarkoni një raport pas përfundimit të klasës.",
      enter: "Hyni →",
      join: "Bashkohu →",
      chooseStory: "Zgjidh një tregim për të filluar",
      back: "Mbrapa",
      questions: "Pyetje",
      puzzle: "Pazëll",
      coloring: "Libër ngjyrosje",
      markerRemoved: "Markuesi u hoq.",
      markedWell: "Shënuar shkëlqyeshëm!",
      allMarkersCleared: "Të gjithë markuesit u fshinë.",
      writeDetailed: "Ju lutemi shkruani një përgjigje më të detajuar që të mund të kuptoj shpjegimin tuaj. 📝",
      correct: "Saktë! Mendim i shkëlqyer. 🎯",
      incorrect: "Nuk është e saktë — përgjigja e saktë është shënuar me të gjelbër. Vazhdojmë tutje.",
      excellent: "E JASHTËZAKONSHME! 🏆 Përgjigja juaj është në nivelin më të lartë.",
      goodStart: "FILLIM I MIRË! ✨",
      rejected: "Hmm, përgjigja juaj nuk përmban detajet kryesore të tregimit. 🧐 Lexoni tekstin përsëri dhe provoni të shpjegoni përgjigjen me fjalët tuaja!",
      answerSaved: "E pranuar! Përgjigja juaj u ruajt. ⭐",
      of: "nga",
      backToText: "Kthehu te teksti",
      excellentWork: "Punë e shkëlqyer!",
      completedStoryDesc: "Ju u jeni përgjigjur me sukses të gjitha pyetjeve për këtë tregim.",
      chooseNewStory: "Zgjidhni një tregim të ri →",
      listenQuestion: "Dëgjoni pyetjen",
      owlFeedback: "🦉",
      badgesTitle: "SHKËLQYESHËM! Ju keni përfunduar këtë tregim dhe keni fituar një medalje të re ari!",
      internetError: "⚠️ Nuk ka lidhje interneti — përgjigjet nuk sinkronizohen",
      close: "Mbyll",
      zoomIn: "Rrit tekstin",
      zoomOut: "Zvogëlo tekstin",
      albanianWip: "Përkthimi shqip për këtë tregim është në përgatitje. Teksti shfaqet në maqedonisht.",
      storyWip: "Së shpejti: Teksti i plotë për këtë tregim është në përgatitje...",
      today: "Sot",
      start: "Fillo →",
      author: "Ideja dhe realizimi:",
      footerPlatform: "Lexim me kuptim 2026 • Platformë edukative interaktive"
    }
  };
  const T = t[lang];

  const [progress, setProgress] = useState(0);
  const [highlightMode, setHighlightMode] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [showColoring, setShowColoring] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [markColor, setMarkColor] = useState('bg-yellow-300');
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('pirls_fontSize');
    return saved ? parseFloat(saved) : 1.5;
  });
  const [avatarMsg, setAvatarMsg] = useState("");
  const [step, setStep] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [textAns, setTextAns] = useState("");

  const [showHint, setShowHint] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [glossaryTerm, setGlossaryTerm] = useState(null);
  const [completedStories, setCompletedStories] = useState(() => {
    const saved = localStorage.getItem('pirls_badges');
    return saved ? JSON.parse(saved) : [];
  });
  const [canSpeak, setCanSpeak] = useState(false);
  const textRef = useRef(null);

  // ── Teacher / Student session state ──────────────────────
  const [sessionCode, setSessionCode] = useState(() => localStorage.getItem('pirls_session') || '');
  const [studentName, setStudentName] = useState(() => localStorage.getItem('pirls_student_name') || '');
  const [studentId] = useState(() => {
    let id = localStorage.getItem('pirls_student_id');
    if (!id) { id = Math.random().toString(36).substr(2, 9); localStorage.setItem('pirls_student_id', id); }
    return id;
  });
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);
  const [showJoinSession, setShowJoinSession] = useState(false);
  const [assignedStory, setAssignedStory] = useState('');

  // Live-listen to assignedStory so teacher can change it mid-lesson
  useEffect(() => {
    if (!FIREBASE_ENABLED || !db || !sessionCode) { setAssignedStory(''); return; }
    const aRef = ref(db, `pirls_sessions/${sessionCode}/assignedStory`);
    const unsubscribe = onValue(aRef, snap => {
      const val = snap.val() || '';
      setAssignedStory(val);
      // Auto-redirect student to assigned story if it's new and different
      // but only if student is NOT already in that story
      if (val && val !== activeStory) {
        setActiveStory(val);
        setStep(0);
        setProgress(0);
        setAvatarMsg(`Твојот наставник ја избра приказната: ${STORIES.find(s => s.id === val)?.title || val}`);
      }
    });
    return () => off(aRef);
  }, [sessionCode, activeStory]);

  useEffect(() => {
    localStorage.setItem('pirls_fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('pirls_lang', lang);
  }, [lang]);

  useEffect(() => {
    const checkVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setCanSpeak(voices.some(v => v.lang.includes('mk')));
    };
    checkVoices();
    window.speechSynthesis.onvoiceschanged = checkVoices;
  }, []);

  const speak = (text) => {
    if (!canSpeak || !text) return;
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    
    // Прво бараме специфичен македонски глас
    let mkdVoice = voices.find(v => v.lang === 'mk-MK' || v.lang === 'mk');
    
    // Ако немаме, бараме било кој словенски јазик како приближна алтернатива (опционално)
    // Но корисникот сака висок квалитет, па ако нема МКД, подобро да не зборува
    
    if (mkdVoice) {
      utterance.voice = mkdVoice;
      utterance.lang = 'mk-MK';
      utterance.rate = 0.85; // Малку побавно за подобро разбирање
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      if (import.meta.env.DEV) console.warn("Macedonian voice unavailable on this device.");
      // Можеме да поставиме lang и да се надеваме на најдоброто (некои прелистувачи сами наоѓаат)
      utterance.lang = 'mk-MK';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (progress >= 100 && !completedStories.includes(activeStory) && activeStory !== 'home') {
      const newBadges = [...completedStories, activeStory];
      setCompletedStories(newBadges);
      localStorage.setItem('pirls_badges', JSON.stringify(newBadges));
      setAvatarMsg(T.badgesTitle);
      
      // EXPERT: Trigger Confetti for story completion
      if (window.confetti) {
        window.confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4f46e5', '#facc15', '#10b981']
        });
      }
    }
  }, [progress, activeStory]);

  useEffect(() => {
    setStep(0);
    setSelectedOpt(null);
    setTextAns("");
    setProgress(0);
    
    const greetings = {
      mk: {
        home: "Добредојде во digitalPIRLS! Избери приказна за да започнеш.",
        chest: "Марко мисли дека е досадно во селото. Ајде да му покажеме дека греши!",
        kaja: "Каја е вистински пронаоѓач. Ајде да видиме што измислила!",
        baba: "Баба Гун има интересна идеја за нејзиниот покрив!",
        octopus: "Нурни длабоко! Октоподот нè чека во океанот.",
        watchmaker: "Секој механизам заслужува втора шанса.",
        kite: "Трпението е клучот до успехот.",
        lynx: "Балканскиот рис е нашиот шумски дух.",
        shovel: "Едно ново пријателство се раѓа во дворот.",
        rabbit: "Понекогаш стравот е само плод што паѓа од дрво.",
        puffins: "Ајде да им помогнеме на морските папагалчиња да го најдат патот до морето!",
        eagle: "Ти не си кокошка, ти си орел. Летај слободно!",
        pita: "Најбрзиот начин да се ослободиш од непријателот е да го направиш пријател.",
        fossil: "Мистеријата на џиновскиот заб нè носи во времето на диносаурусите!",
        lighthouse: "Лијам мора да го запали светилникот за да го спаси татко му. Ајде да му помогнеме!",
        forgotten_garden: "Јана мисли дека дворот е катастрофа. Но дедо Никола знае нешто — ајде да откриеме!",
        lambe: "Трпението и итрината се посилни од секој проблем!",
        fallback: "Прочитај го текстот внимателно!"
      },
      sq: {
        home: "Mirësevini në digitalPIRLS! Zgjidhni një tregim për të filluar.",
        chest: "Marko mendon se është e mërzitshme në fshat. Le t'i tregojmë se e ka gabim!",
        kaja: "Kaja është një shpikëse e vërtetë. Le të shohim se çfarë ka shpikur!",
        baba: "Gjyshja Gun ka një ide interesante për çatinë e saj!",
        octopus: "Zhytu thellë! Oktapodi na pret në oqean.",
        watchmaker: "Çdo mekanizëm meriton një shans të dytë.",
        kite: "Durimi është çelësi i suksesit.",
        lynx: "Rrëqebulli i Ballkanit është shpirti i pyllit tonë.",
        shovel: "Një miqësi e re lind në oborr.",
        rabbit: "Ndonjëherë frika është vetëm një frut që bie nga pema.",
        puffins: "Le t'i ndihmojmë papagajtë e detit të gjejnë rrugën drejt detit!",
        eagle: "Ti nuk je pulë, ti je shqiponjë. Fluturo e lirë!",
        pita: "Mënyra më e shpejtë për të shpëtuar nga armiku është ta bësh atë mik.",
        fossil: "Misteri i dhëmbit gjigant na dërgon në kohën e dinozaurëve!",
        lighthouse: "Liam duhet të ndezë farin për të shpëtuar babanë e tij. Le ta ndihmojmë!",
        forgotten_garden: "Jana mendon se oborri është një katastrofë. Por gjyshi Nikolla di diçka — le ta zbulojmë!",
        lambe: "Durimi dhe zgjuarsia janë më të forta se çdo problem!",
        fallback: "Lexoni tekstin me kujdes!"
      }
    };
    setAvatarMsg(greetings[lang][activeStory] || greetings[lang].fallback);
  }, [activeStory]);

  // ── Firebase: sync student presence whenever story/step changes ──
  useEffect(() => {
    if (!FIREBASE_ENABLED || !db || !sessionCode || !studentName) return;
    update(ref(db, `pirls_sessions/${sessionCode}/students/${studentId}`), {
      name: studentName,
      lastSeen: Date.now(),
      currentStory: activeStory === 'home' ? null : activeStory,
      currentQuestion: step,
    }).then(() => setConnectionError(false)).catch(() => setConnectionError(true));
  }, [sessionCode, studentName, activeStory, step]);

  const saveAnswer = (type, value, isCorrect) => {
    if (!FIREBASE_ENABLED || !db || !sessionCode || !studentName) return;
    set(ref(db, `pirls_sessions/${sessionCode}/students/${studentId}/answers/${activeStory}_q${step}`), {
      type, question: storyContent[activeStory]?.questions?.[step]?.q || '', value, isCorrect, timestamp: Date.now(),
    }).then(() => setConnectionError(false)).catch(() => setConnectionError(true));
  };

  const handleHighlight = () => {
    if (!highlightMode) return;
    const sel = window.getSelection();
    if (!sel.rangeCount || sel.toString().length === 0) return;
    const range = sel.getRangeAt(0);
    if (textRef.current?.contains(range.commonAncestorContainer)) {
      const mark = document.createElement('mark');
      mark.className = `${markColor} rounded px-1 cursor-pointer transition-all hover:scale-105`;
      mark.onclick = (e) => {
        const text = e.target.innerText;
        e.target.replaceWith(document.createTextNode(text));
        setAvatarMsg("Маркерот е отстранет.");
      };
      try { range.surroundContents(mark); setAvatarMsg(T.markedWell); } catch(e) {}
      sel.removeAllRanges();
    }
  };

  const clearHighlights = () => {
    const marks = textRef.current?.querySelectorAll('mark');
    marks?.forEach(m => m.replaceWith(document.createTextNode(m.innerText)));
    setAvatarMsg(T.allMarkersCleared);
  };

  const handleMCQ = (opt, correct) => {
    setSelectedOpt(opt);
    saveAnswer('mcq', opt, opt === correct);
    const nextStep = step + 1;
    const totalSteps = currentStory.questions.length;
    setProgress(Math.min(100, Math.round((nextStep / totalSteps) * 100)));
    if (opt === correct) {
      playSound('success');
      setAvatarMsg(T.correct);
      if (canSpeak && lang === 'mk') speak(T.correct);
      setTimeout(() => { setStep(nextStep); setSelectedOpt(null); setTextAns(''); setShowHint(false); }, 1800);
    } else {
      setAvatarMsg(T.incorrect);
      setTimeout(() => { setStep(nextStep); setSelectedOpt(null); setTextAns(''); setShowHint(false); }, 2500);
    }
  };

  const handleTextSubmit = (customAns) => {
    const ansToProcess = customAns || textAns;
    const trimmedAns = ansToProcess.trim().toLowerCase();
    if (trimmedAns.length < 6) {
      setAvatarMsg(T.writeDetailed);
      return;
    }

    // AI Feedback Logic based on PIRLS criteria (Expert Level)
    if (currentQuestion.criteria) {
      const foundKeywords = currentQuestion.criteria.filter(kw =>
        trimmedAns.includes(kw.toLowerCase())
      );
      const wordCount = trimmedAns.split(/\s+/).length;
      saveAnswer('text', ansToProcess.trim(), foundKeywords.length >= 2 && wordCount >= 3);

      if (foundKeywords.length >= 2 && wordCount >= 3) {
        // FULL SUCCESS - EXPERT LEVEL
        playSound('success');
        setAvatarMsg(T.excellent);
        if (canSpeak && lang === 'mk') speak(T.excellent);
        
        const nextStep = step + 1;
        const totalSteps = currentStory.questions.length;
        setProgress(Math.min(100, Math.round((nextStep / totalSteps) * 100)));
        
        setTimeout(() => {
          setStep(nextStep);
          setTextAns("");
          setShowHint(false);
        }, 4000);
      } else if (foundKeywords.length === 1 && wordCount >= 2) {
        // PARTIAL SUCCESS
        playSound('success');
        setAvatarMsg(T.goodStart);
        if (canSpeak && lang === 'mk') speak(T.goodStart);
        
        const nextStep = step + 1;
        const totalSteps = currentStory.questions.length;
        setProgress(Math.min(100, Math.round((nextStep / totalSteps) * 100)));
        
        setTimeout(() => {
          setStep(nextStep);
          setTextAns("");
          setShowHint(false);
        }, 4000);
      } else {
        // REJECTED - NO MEANING OR WRONG ANSWER
        setAvatarMsg(T.rejected);
        if (canSpeak && lang === 'mk') speak(T.rejected);
      }
    } else {
      // Fallback for generic text questions
      saveAnswer('text', ansToProcess.trim(), null);
      playSound('success');
      setAvatarMsg(T.answerSaved);
      const nextStep = step + 1;
      const totalSteps = currentStory.questions.length;
      setProgress(Math.min(100, Math.round((nextStep / totalSteps) * 100)));
      setTimeout(() => {
        setStep(nextStep);
        setTextAns("");
      }, 2000);
    }
  };

  if (activeStory === 'home') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center font-sans relative overflow-hidden">
        {/* Анимирана позадина */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl px-8 py-12 flex flex-col items-center">

          {/* ── HERO НАСЛОВ ── */}
          <div className="w-full text-center mb-12">
            <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] font-black text-indigo-950 mb-5 tracking-tighter italic leading-none whitespace-nowrap">
              {T.heroTitle_part1}<span className="text-indigo-600 underline decoration-yellow-400 decoration-[6px] underline-offset-6">{T.heroTitle_part2}</span>
            </h1>
            <div className="flex items-center gap-5 justify-center">
              <div className="h-[2px] w-20 bg-indigo-200 rounded-full"></div>
              <p className="text-lg text-slate-400 font-bold uppercase tracking-[0.35em]">{T.heroSubtitle || T.interactivePlatform}</p>
              <div className="h-[2px] w-20 bg-indigo-200 rounded-full"></div>
            </div>
            {/* Јазичен toggle */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setLang('mk')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm transition-all border-2 ${lang === 'mk' ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'}`}
              >
                <span className="text-lg">🇲🇰</span> MK
              </button>
              <button
                onClick={() => setLang('sq')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm transition-all border-2 ${lang === 'sq' ? 'bg-red-600 text-white border-red-600 shadow-lg' : 'bg-white text-slate-500 border-slate-200 hover:border-red-300'}`}
              >
                <span className="text-lg">🇦🇱</span> SQ
              </button>
            </div>
          </div>

          {/* ── 3 КОЛОНИ: Ученик | Превод-банер | Наставник ── */}
          <div className="mb-14 w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* Left — Ученик */}
            {sessionCode && studentName ? (
              <div className="p-8 rounded-[3rem] shadow-xl border-4 bg-gradient-to-b from-green-50 to-green-100 border-green-200 text-center flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-xl font-black text-slate-800 leading-tight mb-2">{studentName}</h2>
                <p className="text-sm text-slate-500 leading-snug">{T.studentJoined}: <strong className="text-green-700">{sessionCode}</strong></p>
                <button
                  onClick={() => { setSessionCode(''); setStudentName(''); localStorage.removeItem('pirls_session'); localStorage.removeItem('pirls_student_name'); }}
                  className="mt-4 text-xs text-red-400 hover:text-red-600 font-bold transition-all underline">
                  {T.leaveSession}
                </button>
              </div>
            ) : (
              <button onClick={() => setShowJoinSession(true)}
                className="p-8 rounded-[3rem] shadow-xl border-4 bg-gradient-to-b from-indigo-50 to-indigo-100 border-indigo-200 hover:shadow-2xl hover:border-indigo-400 transition-all group text-center flex flex-col items-center justify-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🧒</div>
                <h2 className="text-xl font-black text-slate-800 leading-tight mb-2">{T.studentJoin}</h2>
                <p className="text-sm text-slate-500 leading-snug">{T.studentDesc}</p>
                <div className="mt-3">
                  <span className="text-indigo-600 font-black text-xs tracking-widest uppercase italic">{T.join}</span>
                </div>
              </button>
            )}

            {/* Center — Двојазична платформа */}
            <div className="p-8 rounded-[3rem] border-4 border-dashed border-indigo-200 bg-gradient-to-b from-indigo-50 via-white to-green-50 text-center flex flex-col items-center justify-center gap-4 shadow-lg">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl">🌍</span>
                <h3 className="text-base font-black text-indigo-900 uppercase tracking-widest">{T.bilingualPlatform}</h3>
              </div>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                {T.bilingualDesc}
              </p>
              <div className="flex items-center justify-center gap-4 mt-1">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border-2 border-indigo-100 shadow-sm">
                  <span className="text-xl">🇲🇰</span>
                  <span className="font-black text-slate-700 text-sm">{t.mk.macedonian}</span>
                  <span className="text-[10px] text-green-600 font-bold uppercase tracking-wide ml-1">✓ {t.mk.active}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border-2 border-red-100 shadow-sm">
                  <span className="text-xl">🇦🇱</span>
                  <span className="font-black text-slate-700 text-sm">{t.sq.albanian}</span>
                  <span className="text-[10px] text-green-600 font-bold uppercase tracking-wide ml-1">✓ {t.sq.active}</span>
                </div>
              </div>
            </div>

            {/* Right — Наставник */}
            <button onClick={() => setShowTeacherLogin(true)}
              className="p-8 rounded-[3rem] shadow-xl border-4 bg-gradient-to-b from-violet-50 to-violet-100 border-violet-200 hover:shadow-2xl hover:border-violet-400 transition-all group text-center flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">👩‍🏫</div>
              <h2 className="text-xl font-black text-slate-800 leading-tight mb-2">{T.teacherLogin}</h2>
              <p className="text-sm text-slate-500 leading-snug">{T.teacherDesc}</p>
              <div className="mt-3">
                <span className="text-violet-600 font-black text-xs tracking-widest uppercase italic">{T.enter}</span>
              </div>
            </button>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {STORIES.map(s => {
              const isAssigned = !!assignedStory && s.id === assignedStory;
              const isLocked   = !!sessionCode && !!assignedStory && s.id !== assignedStory;
              return (
                <button
                  key={s.id}
                  onClick={() => !isLocked && setActiveStory(s.id)}
                  disabled={isLocked}
                  className={[
                    'p-10 rounded-[3.5rem] shadow-xl border-4 bg-gradient-to-b transition-all group relative overflow-hidden text-center',
                    s.color,
                    isAssigned
                      ? 'ring-4 ring-indigo-500 ring-offset-4 shadow-2xl shadow-indigo-200 scale-[1.04]'
                      : isLocked
                        ? 'opacity-20 grayscale cursor-not-allowed'
                        : 'hover:shadow-2xl hover:-translate-y-1',
                  ].join(' ')}
                >
                  {isAssigned && (
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-black px-3 py-1.5 rounded-full tracking-widest uppercase">
                      📌 {T.today}
                    </div>
                  )}
                  {completedStories.includes(s.id) && !isLocked && (
                    <div className="absolute top-4 right-4 text-4xl animate-pulse">🎖️</div>
                  )}
                  <div className={`text-8xl mb-6 drop-shadow-md transition-transform duration-500 ${!isLocked ? 'group-hover:scale-110' : ''}`}>{s.icon}</div>
                  <h2 className="text-2xl font-black text-slate-800 leading-tight">{lang === 'sq' && s.titleSq ? s.titleSq : s.title}</h2>
                  {!isLocked && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-indigo-600 font-black text-sm tracking-widest uppercase italic">{T.start}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <footer className="mt-12 py-8 border-t border-slate-200 w-full text-center">
            <p className="text-slate-400 font-medium">
              {T.author} <span className="text-indigo-900 font-black text-lg ml-1">Игор Богданоски</span>
            </p>
            <p className="text-xs text-slate-300 mt-2 uppercase tracking-[0.2em] font-bold">{T.footerPlatform}</p>
          </footer>

          {/* ─── MODALS ─── */}
          {showTeacherLogin && (
            <TeacherLoginModal
              lang={lang}
              onSuccess={(code) => {
                setSessionCode(code);
                localStorage.setItem('pirls_session', code);
                setShowTeacherLogin(false);
                setShowTeacher(true);
              }}
              onClose={() => setShowTeacherLogin(false)}
            />
          )}
          {showTeacher && (
            <TeacherDashboard
              sessionCode={sessionCode}
              lang={lang}
              onClose={() => { setShowTeacher(false); setSessionCode(''); localStorage.removeItem('pirls_session'); }}
            />
          )}
          {showJoinSession && (
            <StudentJoinModal
              lang={lang}
              onJoin={(name, code) => {
                setStudentName(name);
                setSessionCode(code);
                localStorage.setItem('pirls_student_name', name);
                localStorage.setItem('pirls_session', code);
                setShowJoinSession(false);
              }}
              onSkip={() => setShowJoinSession(false)}
            />
          )}
        </div>
      </div>
    );
  }

  const currentStory = (lang === 'sq' && storyContentSq[activeStory]) ? storyContentSq[activeStory] : storyContent[activeStory];
  const currentQuestion = currentStory?.questions[step];

  return (
    <div className="h-screen bg-white flex flex-col font-sans overflow-hidden">
      <header role="banner" className="h-20 bg-white border-b-2 border-slate-100 flex items-center justify-between px-4 sm:px-10">
        <button onClick={() => setActiveStory('home')} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-bold px-5 py-2 rounded-2xl bg-slate-50 hover:bg-indigo-50 border-2 border-transparent hover:border-indigo-200 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          <span className="hidden sm:inline">{T.back}</span>
        </button>
        <div className="flex items-center gap-6 w-1/2 justify-center">
          <Timer active={activeStory !== 'home' && progress < 100} />
          <div className="flex-1 max-w-xs h-3 bg-slate-100 rounded-full overflow-hidden border">
            <div className="h-full bg-indigo-500 transition-all duration-1000 shadow-lg" style={{ width: `${progress}%` }}></div>
          </div>
          {progress === 100 && <span className="text-3xl animate-pulse">🎖️</span>}
        </div>
        <div className="flex items-center gap-3 justify-end">
          {/* Lang toggle in story header */}
          {(storyContentSq[activeStory] || storyContent[activeStory]) && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLang('mk')}
                title={t.mk.macedonian}
                className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all border-2 ${lang === 'mk' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-300'}`}
              >🇲🇰 МК</button>
              {storyContentSq[activeStory] && (
                <button
                  onClick={() => setLang('sq')}
                  title={t.sq.albanian}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all border-2 ${lang === 'sq' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-400 border-slate-200 hover:border-red-300'}`}
                >🇦🇱 SQ</button>
              )}
            </div>
          )}
          <span className="font-black text-indigo-900 italic hidden sm:block">
            {T.heroTitle_part1}<span className="text-indigo-600">{T.heroTitle_part2}</span>
          </span>
        </div>
      </header>

      {/* FULL WIDTH TEXT */}
      <main className="flex-1 overflow-y-auto bg-slate-50/30 px-4 sm:px-8 md:px-12 py-6 sm:py-8" onMouseUp={handleHighlight}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8">{currentStory?.title || "digitalPIRLS"}</h1>
          <div ref={textRef} className="prose prose-2xl max-w-none text-slate-700 space-y-10" style={{ fontSize: `${fontSize}rem`, lineHeight: '1.8' }}>
            {currentStory?.text.map((item, idx) => {
              if (item.type === 'p') return (
                <p key={idx}>
                  <TextWithGlossary
                    content={item.content}
                    glossary={glossaryData}
                    onTermClick={(term, def) => setGlossaryTerm({ term, def })}
                  />
                </p>
              );
              if (item.type === 'h2') return <h2 key={idx} className="text-4xl font-black text-indigo-900 mt-16 mb-8">{item.content}</h2>;
              if (item.type === 'img') return <img key={idx} src={item.src} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white" alt={item.alt} />;
              if (item.type === 'blockquote') return <blockquote key={idx} className="border-l-8 border-indigo-500 pl-8 font-black text-indigo-900 italic my-12">{item.content}</blockquote>;
              return null;
            })}
            {lang === 'sq' && !storyContentSq[activeStory] && currentStory && (
              <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 mb-6 flex items-center gap-4">
                <span className="text-3xl">🇦🇱</span>
                <p className="text-amber-800 font-bold">{T.albanianWip}</p>
              </div>
            )}
            {!currentStory && <p className="text-2xl italic text-slate-400">{T.storyWip}</p>}
          </div>
        </div>
      </main>

      {/* BOTTOM BAR */}
      <div className="shrink-0 h-20 bg-white border-t-2 border-slate-100 flex items-center justify-between px-8 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
        {/* LEFT: inclusive activities */}
        <div className="flex items-center gap-3">
          {inclusiveData[activeStory] && (
            <>
              <button
                onClick={() => setShowPuzzle(true)}
                className="flex items-center gap-2 px-5 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-black rounded-2xl border-2 border-indigo-100 transition-all hover:scale-105 text-sm"
              >
                🧩 <span className="hidden sm:inline">{T.puzzle}</span>
              </button>
              <button
                onClick={() => setShowColoring(true)}
                className="flex items-center gap-2 px-5 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 font-black rounded-2xl border-2 border-rose-100 transition-all hover:scale-105 text-sm"
              >
                🎨 <span className="hidden sm:inline">{T.coloring}</span>
              </button>
            </>
          )}
        </div>

        {/* CENTER: big PIRLS-style questions button */}
        <button
          onClick={() => setShowQuestions(true)}
          className="flex items-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-full shadow-lg shadow-orange-200 transition-all hover:scale-105 active:scale-95 text-xl"
        >
          📋 <span>{T.questions}</span>
          <span className="bg-white/25 px-3 py-1 rounded-full text-base font-black">
            {Math.min(step + 1, currentStory?.questions?.length ?? 1)} {T.of} {currentStory?.questions?.length ?? '?'}
          </span>
        </button>

        {/* RIGHT: text tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHighlightMode(!highlightMode)}
            className={`px-4 py-3 rounded-2xl font-black text-sm transition-all flex items-center gap-2 border-2 ${highlightMode ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'}`}
          >
            🖍️
          </button>
          {highlightMode && (
            <div className="flex gap-2" role="group" aria-label={lang === 'sq' ? "Zgjidh ngjyrën" : "Избери боја за маркирање"}>
              {[
                { color: 'bg-yellow-300', label: t.mk.markYellow, labelSq: t.sq.markYellow },
                { color: 'bg-green-300',  label: t.mk.markGreen,  labelSq: t.sq.markGreen  },
                { color: 'bg-blue-300',   label: t.mk.markBlue,   labelSq: t.sq.markBlue   },
              ].map(({ color, label, labelSq }) => (
                <button
                  key={color}
                  onClick={() => setMarkColor(color)}
                  aria-label={lang === 'sq' ? labelSq : label}
                  aria-pressed={markColor === color}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${color} ${markColor === color ? 'border-indigo-600 scale-125' : 'border-transparent hover:scale-110'}`}
                />
              ))}
            </div>
          )}
          <button onClick={() => setFontSize(Math.min(3.5, fontSize + 0.15))} className="w-10 h-10 bg-slate-50 border-2 border-slate-200 rounded-xl hover:bg-slate-100 font-black text-sm" title={T.zoomIn} aria-label={T.zoomIn}>A+</button>
          <button onClick={() => setFontSize(Math.max(1.125, fontSize - 0.15))} className="w-10 h-10 bg-slate-50 border-2 border-slate-200 rounded-xl hover:bg-slate-100 font-black text-sm" title={T.zoomOut} aria-label={T.zoomOut}>A-</button>
        </div>
      </div>

      {/* QUESTIONS OVERLAY — slides up from bottom, PIRLS-style */}
      <AnimatePresence>
        {showQuestions && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
            className="fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-[2rem] overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.25)]"
            style={{ height: '68vh' }}
          >
            {/* Orange header bar */}
            <div className="bg-orange-500 flex items-center justify-between px-8 py-4 shrink-0">
              <button
                onClick={() => setShowQuestions(false)}
                className="flex items-center gap-2 text-white font-black text-lg hover:bg-white/20 px-4 py-2 rounded-2xl transition-all"
              >
                ✕ <span className="hidden sm:inline">{T.backToText}</span>
              </button>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => { setStep(Math.max(0, step - 1)); setSelectedOpt(null); setTextAns(''); }}
                  disabled={step === 0}
                  className="w-12 h-12 bg-white/20 hover:bg-white/40 disabled:opacity-30 text-white font-black text-2xl rounded-2xl flex items-center justify-center transition-all"
                >←</button>
                <span className="text-white font-black text-xl px-2">
                  {Math.min(step + 1, currentStory?.questions?.length ?? 1)} {T.of} {currentStory?.questions?.length ?? '?'}
                </span>
                <button
                  onClick={() => { setStep(Math.min((currentStory?.questions?.length ?? 1) - 1, step + 1)); setSelectedOpt(null); setTextAns(''); }}
                  disabled={step >= (currentStory?.questions?.length ?? 1) - 1}
                  className="w-12 h-12 bg-white/20 hover:bg-white/40 disabled:opacity-30 text-white font-black text-2xl rounded-2xl flex items-center justify-center transition-all"
                >→</button>
              </div>
              <div className="w-36" />
            </div>

            {/* Question content area */}
            <div className="flex-1 bg-white overflow-y-auto">
              <div className="max-w-3xl mx-auto p-8">

                {/* Owl feedback banner */}
                {avatarMsg && (
                  <div
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="flex items-center gap-4 mb-6 p-4 bg-indigo-50 rounded-2xl border-2 border-indigo-100"
                  >
                    <span className="text-3xl shrink-0" aria-hidden="true">🦉</span>
                    <p className="text-slate-700 font-bold flex-1">{avatarMsg}</p>
                    {canSpeak && (
                      <button onClick={() => speak(avatarMsg)} className="shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center hover:scale-110 transition-all">🔊</button>
                    )}
                  </div>
                )}

                {/* Completion screen */}
                {!currentQuestion && step > 0 && (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="text-8xl mb-6">🏆</div>
                    <h2 className="text-4xl font-black text-slate-900 mb-3 uppercase tracking-tight">{T.excellentWork}</h2>
                    <p className="text-lg font-bold text-slate-500 mb-10 max-w-sm leading-relaxed">{T.completedStoryDesc}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => { setShowQuestions(false); }}
                        className="px-10 py-4 bg-indigo-100 text-indigo-700 rounded-2xl text-lg font-black hover:bg-indigo-200 transition-all border-2 border-indigo-200"
                      >
                        ← {T.backToText}
                      </button>
                      <button
                        onClick={() => { setShowQuestions(false); setActiveStory('home'); }}
                        className="px-10 py-4 bg-emerald-500 text-white rounded-2xl text-lg font-black shadow-xl hover:bg-emerald-600 transition-all"
                      >
                        {T.chooseNewStory}
                      </button>
                    </div>
                  </div>
                )}

                {/* Question */}
                {currentQuestion && (() => {
                  const letters = ['А', 'Б', 'В', 'Г', 'Д'];
                  const wordCount = textAns.trim() ? textAns.trim().split(/\s+/).length : 0;
                  const canSubmit = wordCount >= 3;
                  return (
                  <div>
                    {/* Question text + listen button */}
                    <div className="flex items-start gap-3 mb-6">
                      <h3 className="text-2xl font-black text-slate-800 flex-1 leading-snug">
                        <span className="text-orange-500 mr-2">{step + 1}.</span>{currentQuestion.q}
                      </h3>
                      {canSpeak && (
                        <button
                          onClick={() => speak(currentQuestion.q)}
                          className="shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center hover:bg-orange-200 hover:scale-110 transition-all mt-1"
                          title={T.listenQuestion}
                          aria-label={T.listenQuestion}
                        >🔊</button>
                      )}
                    </div>

                    {/* MCQ */}
                    {currentQuestion.type === 'mcq' ? (
                      <div className="space-y-3" role="radiogroup" aria-label={`${T.questionOptionsLabel} ${step + 1}`}>
                        {currentQuestion.options.map((opt, idx) => {
                          const isSelected = selectedOpt === opt;
                          const isCorrect  = opt === currentQuestion.correct;
                          const answered   = selectedOpt !== null;
                          let cls = 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md';
                          if (answered && isCorrect)                cls = 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-200';
                          else if (answered && isSelected && !isCorrect) cls = 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-200';
                          else if (answered)                        cls = 'bg-slate-50 border-slate-100 text-slate-300 opacity-50';
                          return (
                            <button
                              key={opt}
                              onClick={() => handleMCQ(opt, currentQuestion.correct)}
                              disabled={answered}
                              aria-pressed={isSelected}
                              className={`w-full p-4 text-left rounded-2xl text-lg font-bold transition-all duration-300 border-4 flex items-center gap-4 disabled:cursor-not-allowed ${cls}`}
                            >
                              <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base shrink-0 transition-all ${
                                answered && isCorrect        ? 'bg-white/30 text-white' :
                                answered && isSelected       ? 'bg-white/30 text-white' :
                                answered                     ? 'bg-slate-200 text-slate-400' :
                                                               'bg-indigo-100 text-indigo-700'
                              }`}>
                                {answered && isCorrect ? '✓' : answered && isSelected && !isCorrect ? '✗' : letters[idx]}
                              </span>
                              <span className="flex-1">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                    ) : (
                      /* Text answer */
                      <div className="space-y-4">
                        {/* Textarea */}
                        <div className="relative">
                          <textarea
                            autoFocus
                            className="w-full min-h-[10rem] p-5 bg-white rounded-2xl border-4 border-indigo-200 focus:border-indigo-500 text-xl font-medium outline-none transition-colors duration-200 resize-none leading-relaxed"
                            placeholder={T.textPlaceholder}
                            value={textAns}
                            onChange={(e) => setTextAns(e.target.value)}
                            aria-label={lang === 'sq' ? `Përgjigjja e pyetjes ${step + 1}` : `Одговор на прашање ${step + 1}`}
                            aria-describedby="word-count-hint"
                          />
                          {/* Word counter */}
                          <div id="word-count-hint" className={`absolute bottom-3 right-4 text-sm font-bold transition-colors ${
                            wordCount === 0 ? 'text-slate-300' :
                            wordCount < 3   ? 'text-amber-500' :
                                              'text-emerald-600'
                          }`}>
                            {wordCount === 0 
                              ? T.min3words 
                              : `${wordCount} ${wordCount === 1 ? T.word : T.words} ${wordCount >= 3 ? '✓' : ''}`
                            }
                          </div>
                        </div>

                        {/* Inline hint */}
                        {currentQuestion.hint && (
                          <div className={`overflow-hidden transition-all duration-300 ${showHint ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex items-start gap-3 p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                              <span className="text-2xl shrink-0">💡</span>
                              <p className="text-amber-800 font-bold text-base leading-snug">{currentQuestion.hint}</p>
                            </div>
                          </div>
                        )}

                        {/* Submit row */}
                        <div className="flex gap-3">
                          <button
                            onClick={handleTextSubmit}
                            disabled={!canSubmit}
                            className="flex-1 py-5 bg-indigo-600 text-white rounded-2xl text-lg font-black shadow-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                          >
                            {canSubmit ? `${T.sendAnswer} →` : T.writeMin3}
                          </button>
                          {currentQuestion.hint && (
                            <button
                              onClick={() => setShowHint(!showHint)}
                              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-4 transition-all shrink-0 ${showHint ? 'bg-amber-400 border-amber-300 shadow-lg' : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50'}`}
                              aria-label={showHint ? T.hideHint : T.showHint}
                              aria-expanded={showHint}
                            >💡</button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  );
                })()}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODALS */}
      {/* Модални прозорци за инклузивни активности */}
      {showPuzzle && (
        (inclusiveData[activeStory]?.puzzle && !inclusiveData[activeStory]?.puzzleWIP)
          ? <ChronologicalPuzzle data={inclusiveData[activeStory].puzzle} onClose={() => setShowPuzzle(false)} lang={lang} />
          : <WIPModal
              onClose={() => setShowPuzzle(false)}
              emoji="🧩"
              title={T.puzzle}
              description={T.puzzleWIPDesc}
              lang={lang}
            />
      )}
      {showColoring && (
        (inclusiveData[activeStory]?.coloring && !inclusiveData[activeStory]?.coloringWIP)
          ? <ColoringBook data={inclusiveData[activeStory].coloring} onClose={() => setShowColoring(false)} lang={lang} />
          : <WIPModal
              onClose={() => setShowColoring(false)}
              emoji="🎨"
              title={T.coloring}
              description={T.coloringWIPDesc}
              lang={lang}
            />
      )}
      
      {glossaryTerm && (
        <div
          className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setGlossaryTerm(null)}
          onKeyDown={(e) => { if (e.key === 'Escape') setGlossaryTerm(null); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="glossary-term-title"
            className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-lg border-t-[12px] border-indigo-500 animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h4 id="glossary-term-title" className="text-3xl font-black text-slate-900 uppercase tracking-tight">{glossaryTerm.term}</h4>
              <button onClick={() => setGlossaryTerm(null)} className="text-slate-300 hover:text-slate-600 text-4xl">×</button>
            </div>
            <div className="flex items-center gap-6 mb-8">
               <div className="p-4 bg-indigo-50 rounded-3xl text-4xl">📚</div>
               <p className="text-xl text-slate-600 leading-relaxed font-medium flex-1">
                 {glossaryTerm.def}
               </p>
               {canSpeak && (
                 <button 
                   onClick={() => speak(glossaryTerm.def)}
                   className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg hover:scale-110 active:scale-95 transition-all"
                   title={T.listenExplanation}
                 >
                   🔊
                 </button>
               )}
            </div>
            <button onClick={() => setGlossaryTerm(null)} className="w-full py-5 bg-slate-100 text-slate-600 rounded-3xl font-black text-xl hover:bg-slate-200 transition-all uppercase tracking-widest">
              {T.close}
            </button>
          </div>
        </div>
      )}

      {/* Connection error toast */}
      {connectionError && (
        <div className="fixed bottom-6 right-6 z-[500] flex items-center gap-3 bg-red-500 text-white px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm" role="alert" aria-live="assertive">
          <span>⚠️</span>
          <span>{T.internetError}</span>
          <button onClick={() => setConnectionError(false)} className="ml-2 text-white/70 hover:text-white text-lg leading-none" aria-label={T.close}>×</button>
        </div>
      )}

      {/* Background Shapes */}
      <div className="fixed -bottom-20 -left-20 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="fixed -top-20 -right-20 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-30 -z-10" />

      {/* ── TEACHER LOGIN ── */}
      {showTeacherLogin && (
        <TeacherLoginModal
          lang={lang}
          onSuccess={(code) => {
            setSessionCode(code);
            localStorage.setItem('pirls_session', code);
            setShowTeacherLogin(false);
            setShowTeacher(true);
          }}
          onClose={() => setShowTeacherLogin(false)}
        />
      )}

      {/* ── TEACHER DASHBOARD ── */}
      {showTeacher && (
        <TeacherDashboard
          sessionCode={sessionCode}
          lang={lang}
          onClose={() => { setShowTeacher(false); setSessionCode(''); localStorage.removeItem('pirls_session'); }}
        />
      )}

      {/* ── STUDENT JOIN SESSION ── */}
      {showJoinSession && (
        <StudentJoinModal
          onJoin={(name, code) => {
            setStudentName(name);
            setSessionCode(code);
            localStorage.setItem('pirls_student_name', name);
            localStorage.setItem('pirls_session', code);
            setShowJoinSession(false);
          }}
          onSkip={() => setShowJoinSession(false)}
        />
      )}
    </div>
  );
}
