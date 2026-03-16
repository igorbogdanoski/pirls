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
    case 'whistle':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1000, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
      osc.start(); osc.stop(ctx.currentTime + 0.3);
      break;
    case 'sparkle':
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1500, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      osc.start(); osc.stop(ctx.currentTime + 0.05);
      break;
    case 'bubble':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
      osc.start(); osc.stop(ctx.currentTime + 0.3);
      break;
    case 'bird':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
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
  const [step, setStep] = useState(1);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [textAns, setTextAns] = useState("");
  const [showAnim, setShowAnim] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    setStep(1);
    setSelectedOpt(null);
    setTextAns("");
    setProgress(activeStory === 'home' ? 0 : 20);
    
    const greetings = {
      home: "Добредојде во digitalPIRLS! Избери приказна за да започнеш.",
      chest: "Марко мисли дека е досадно во селото. Ајде да му покажеме дека греши!",
      kaja: "Каја е вистински пронаоѓач. Ајде да видиме што измислила!",
      baba: "Баба Гун има интересна идеја за нејзиниот покрив!",
      octopus: "Нурни длабоко! Октоподот нè чека во океанот."
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

  const handleMCQ = (opt, correct, nextMsg) => {
    setSelectedOpt(opt);
    if (opt === correct) {
      playSound('success');
      setAvatarMsg(nextMsg);
      setProgress(activeStory === 'chest' ? 50 : 60);
      setTimeout(() => { setStep(step + 1); setSelectedOpt(null); }, 2000);
    } else {
      setAvatarMsg("Хмм, обиди се повторно. Одговорот е во текстот!");
    }
  };

  const handleTextSubmit = (nextMsg) => {
    if (textAns.trim().length > 5) {
      playSound('success');
      setAvatarMsg(nextMsg);
      setProgress(100);
      setStep(step + 1);
    } else {
      setAvatarMsg("Те молам напиши подетален одговор.");
    }
  };

  if (activeStory === 'home') {
    return (
      <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center font-sans" style={{ fontFamily: "'Verdana', sans-serif" }}>
        <div className="mb-12 text-center">
          <h1 className="text-7xl font-black text-indigo-900 mb-2 tracking-tighter italic underline decoration-yellow-400 decoration-8 underline-offset-8">digitalPIRLS</h1>
          <p className="text-xl text-slate-500 mt-4 font-medium uppercase tracking-[0.2em]">Проверка на читање со разбирање</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {[
            { id: 'chest', icon: '🗝️', title: 'Тајната на ковчегот', color: 'hover:border-amber-600 bg-amber-50/30' },
            { id: 'kaja', icon: '💡', title: 'Највредниот пронајдок', color: 'hover:border-yellow-500 bg-yellow-50/30' },
            { id: 'baba', icon: '🌻', title: 'Цвеќиња на покривот', color: 'hover:border-pink-500 bg-pink-50/30' },
            { id: 'octopus', icon: '🐙', title: 'Прекрасниот октопод', color: 'hover:border-indigo-500 bg-indigo-50/30' },
            { id: 'watchmaker', icon: '🕰️', title: 'Тајната на часовничарот', color: 'hover:border-orange-500 bg-orange-50/30' },
            { id: 'kite', icon: '🪁', title: 'Змејот на трпението', color: 'hover:border-sky-500 bg-sky-50/30' },
            { id: 'lynx', icon: '🐾', title: 'Балканскиот рис', color: 'hover:border-emerald-500 bg-emerald-50/30' },
            { id: 'shovel', icon: '⛏️', title: 'Чичкото со лопатата', color: 'hover:border-amber-400 bg-orange-50/10' }
          ].map(s => (
            <button key={s.id} onClick={() => setActiveStory(s.id)} className={`p-8 rounded-[3rem] shadow-xl border-4 border-white ${s.color} hover:-translate-y-2 transition-all group relative overflow-hidden text-center backdrop-blur-sm`}>
              <div className="text-7xl mb-4 group-hover:scale-125 transition-transform drop-shadow-md">{s.icon}</div>
              <h2 className="text-2xl font-black text-slate-800 leading-tight">{s.title}</h2>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20 group-hover:bg-indigo-500 transition-colors"></div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white flex flex-col font-sans overflow-hidden" style={{ fontFamily: "'Verdana', sans-serif" }}>
      {/* HEADER */}
      <header className="h-20 bg-white border-b-2 border-slate-100 flex items-center justify-between px-10">
        <button onClick={() => setActiveStory('home')} className="group flex items-center gap-3 text-slate-600 hover:text-indigo-600 font-bold px-5 py-2 rounded-2xl bg-slate-50 transition-all border border-slate-100">
          <span className="group-hover:-translate-x-1 transition-transform">⬅️</span> Назад кон мени
        </button>
        <div className="flex items-center gap-6 w-1/3">
          <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border">
            <div className="h-full bg-indigo-500 transition-all duration-1000 shadow-[0_0_15px_rgba(99,102,241,0.6)]" style={{ width: `${progress}%` }}></div>
          </div>
          {progress === 100 && <span className="text-3xl animate-bounce">🎖️</span>}
        </div>
      </header>

      {/* SPLIT SCREEN */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT: TEXT */}
        <div className="w-3/5 p-12 overflow-y-auto bg-slate-50/30 border-r-4 border-slate-100" onMouseUp={handleHighlight}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-10 pb-6 border-b-4 border-indigo-50">
              <h1 className="text-5xl font-black text-slate-900 leading-none tracking-tight">
                {activeStory === 'chest' ? "ТАЈНАТА НА СТАРИОТ КОВЧЕГ" : 
                 activeStory === 'kaja' ? "НАЈВРЕДНИОТ ПРОНАЈДОК" : "digitalPIRLS"}
              </h1>
              <button onClick={() => setHighlightMode(!highlightMode)} className={`px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${highlightMode ? 'bg-yellow-400 text-yellow-950 scale-110 shadow-xl ring-4 ring-yellow-200' : 'bg-slate-200 text-slate-500'}`}>
                🖍️ {highlightMode ? 'Маркер: ВКЛУЧЕН' : 'Вклучи Маркер'}
              </button>
            </div>

            <div ref={textRef} className="prose prose-2xl max-w-none text-slate-700 leading-[1.8] space-y-10">
              {activeStory === 'chest' && (
                <>
                  <p>Десетгодишниот Марко воопшто не беше среќен. Селото за него значеше само едно: досада. Таму немаше интернет, ниту видеоигри.</p>
                  <img src={imgs.chest.porch} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white ring-4 ring-slate-100" alt="Марко во село" />
                  <p>Дедо Јован го замоли да најде еден часовник на таванот. Таму Марко забележа нешто неочекувано скриено под едно старо ќебе...</p>
                  
                  <div className="bg-amber-100/50 p-10 rounded-[3.5rem] border-4 border-dashed border-amber-300 shadow-inner relative group">
                    <p className="italic text-amber-900 mb-0">
                      Тоа не беше картонска кутија, туку мал, дрвен <span onClick={() => { playSound('sparkle'); setAvatarMsg("Виде како светна? ✨ Марко го најде ковчегот!"); }} className="text-amber-800 font-black cursor-pointer underline decoration-amber-400 decoration-4 underline-offset-8 group-hover:bg-amber-200 transition-colors">🗝️ ковчег</span> со изрезбани цветови на капакот. Марко мислеше дека внатре има скриено богатство.
                    </p>
                  </div>
                  
                  <img src={imgs.chest.finding} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white ring-4 ring-slate-100" alt="Ковчегот" />
                  <p>Внатре имаше само стара слика, едно бело камче и <span onClick={() => { playSound('whistle'); setAvatarMsg("🎶 Пссст! Свирчето сè уште работи!"); }} className="text-indigo-600 font-black cursor-pointer underline decoration-wavy underline-offset-8">🪈 дрвено свирче</span>. Марко беше разочаран, но неговиот дедо само се насмевна.</p>
                  
                  <blockquote className="border-l-8 border-indigo-500 pl-8 text-3xl font-black text-indigo-900 italic my-12">
                    „Златото се троши, Марко, но спомените остануваат засекогаш.“
                  </blockquote>

                  <img src={imgs.chest.story} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white ring-4 ring-slate-100" alt="Дедото раскажува" />
                  <p>Тоа попладне, Марко со часови ги слушаше приказните. Сфати дека селото крие многу поинтересни авантури од видеоигрите.</p>
                </>
              )}
              
              {activeStory === 'kaja' && (
                <>
                  <p>Десетгодишната Каја не беше обично девојче. Додека другите деца носеа играчки, таа секогаш имаше мала зелена тетратка. Нејзината соба личеше на лабораторија.</p>
                  <img src={imgs.kaja.lab} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white ring-4 ring-slate-100" alt="Каја лабораторија" />
                  <p>Реши да направи „Чистомат 3000“, но роботот се распадна. Каја сакаше да се откаже, но дедо Марко ѝ помогна...</p>
                  <img src={imgs.kaja.comfort} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white ring-4 ring-slate-100" alt="Дедо Марко ја теши Каја" />
                  <p className="bg-yellow-50 p-8 rounded-[2.5rem] border-l-8 border-yellow-400 italic">
                    „Погледни ги оние <span onClick={() => { playSound('bird'); setAvatarMsg("Чуј ги врапчињата! 🦜"); }} className="text-yellow-700 font-black cursor-pointer underline decoration-wavy underline-offset-8">врапчиња</span>. Земјата е замрзната и не можат да најдат храна.“
                  </p>
                  <p>Каја направи едноставна хранилка од шише. Сфати дека највредните идеи им помагаат на другите.</p>
                  <img src={imgs.kaja.feeder} className="w-full rounded-[3rem] shadow-2xl my-6 border-[12px] border-white ring-4 ring-slate-100" alt="Хранилка за птици" />
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: INTERACTIVE PANEL */}
        <div className="w-2/5 flex flex-col bg-white">
          {/* AVATAR BAR */}
          <div className="p-8 bg-indigo-900 flex items-center gap-6 shadow-2xl relative z-10">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl animate-pulse ring-4 ring-indigo-400">
              🦉
            </div>
            <div className="flex-1 bg-white p-6 rounded-[2rem] rounded-tl-none shadow-xl border-4 border-indigo-200">
              <p className="text-slate-800 text-xl font-bold leading-snug">{avatarMsg}</p>
            </div>
          </div>

          <div className="flex-1 p-10 bg-slate-50 overflow-y-auto">
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
                <div className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-slate-100">
                  <h3 className="text-2xl font-black text-slate-800 mb-8 leading-tight">1. Што чувствува Марко на почетокот?</h3>
                  <div className="space-y-4">
                    {['Возбуда', 'Досада', 'Страв', 'Лутина'].map((opt) => (
                      <button 
                        key={opt}
                        onClick={() => handleMCQ(opt, 'Досада', "Така е! Му недостига интернетот. А сега прочитај што најде на таванот.")}
                        className={`w-full p-6 text-left rounded-3xl text-xl font-bold transition-all border-4 ${selectedOpt === opt ? 'bg-indigo-600 text-white border-indigo-400 scale-[0.98]' : 'bg-slate-50 text-slate-700 border-white hover:border-indigo-100 hover:bg-white shadow-sm'}`}
                      >
                        {opt === 'Досада' && selectedOpt === opt ? '✅ ' : '⭕️ '} {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in zoom-in duration-500">
                <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-b-[12px] border-indigo-100">
                  <h3 className="text-2xl font-black text-slate-800 mb-6 leading-tight">2. Каков пронајдок направи Каја за птиците?</h3>
                  <textarea 
                    className="w-full h-48 p-8 bg-slate-50 rounded-[2rem] border-4 border-slate-100 text-xl font-medium focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all placeholder:text-slate-300"
                    placeholder="Опиши го пронајдокот со свои зборови..."
                    value={textAns}
                    onChange={(e) => setTextAns(e.target.value)}
                  />
                  <button 
                    onClick={() => handleTextSubmit("Прекрасно објаснување! Ти си вистински пронаоѓач на зборови! ⭐")}
                    className="mt-8 w-full py-6 bg-indigo-600 text-white rounded-[2rem] text-2xl font-black shadow-xl hover:bg-indigo-700 hover:-translate-y-1 active:translate-y-0 transition-all border-b-8 border-indigo-800"
                  >
                    ПРАТИ ОДГОВОР 🚀
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 animate-bounce">
                <div className="text-9xl mb-10">🏆</div>
                <h2 className="text-5xl font-black text-slate-900 mb-6">БРАВО!</h2>
                <p className="text-2xl font-bold text-slate-500 mb-12">Успешно ги реши сите предизвици за оваа приказна.</p>
                <button onClick={() => setActiveStory('home')} className="px-12 py-6 bg-emerald-500 text-white rounded-full text-2xl font-black shadow-2xl hover:bg-emerald-600 transition-all border-b-8 border-emerald-700">
                  СЛЕДНА ПРИКАЗНА 🐾
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showAnim && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
          <div className="w-full h-full bg-indigo-900/40 animate-pulse flex items-center justify-center">
            <div className="text-9xl animate-ping">🐙</div>
          </div>
        </div>
      )}
    </div>
  );
}
