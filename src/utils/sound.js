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

export { createAudioContext, playSound };
