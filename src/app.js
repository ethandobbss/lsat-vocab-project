const RAW_WORDS = [
["Allay","to calm or pacify, set to rest; to lessen or relieve"],
["Equivocal","open to more than one interpretation; ambiguous; uncertain or misleading"],
["Abound","exist in large numbers or amounts"],
["Chicanery","trickery; deception"],
["Obstinate","stubbornly refusing to change one's opinion or course of action despite persuasion"],
["Furtive","attempting to avoid notice, typically out of guilt; secretive; suggestive of guilty nervousness"],
["Espouse","to take up, adopt, or support; to become attached to; to marry"],
["Consummate","extremely skilled or accomplished; complete or perfect"],
["Ingenious","clever, original, imaginative, and inventive"],
["Resolute","firmly determined"],
["Elucidate","to clarify, explain"],
["Pedantic","excessively concerned with details and formal rules"],
["Confer","to consult, talk over, exchange opinions; to present as a gift, favor, or honor"],
["Jeer","to make fun of rudely; (n.) a rude remark of derision"],
["Disingenuous","insincere, or pretending to know less about something than one really does"],
["Propriety","the state of being proper or suitable; conformity to social convention; rightness"],
["Apposite","appropriate, suitable, or relevant"],
["Eclectic","choosing from, or composed of, elements drawn from various sources"],
["Replete","full, well supplied"],
["Castigate","to punish severely; to criticize severely"],
["Laudatory","full of or giving praise; expressing praise and commendation"],
["Grudging","reluctant, resentful, or unwilling to give, grant, or allow something"],
["Inextricable","impossible to disentangle or separate; impossible to escape from"],
["Incipient","in an initial stage, beginning to happen or develop"],
["Nexus","a link or connection; a connected group or series; the central and most important point"],
["Nebulous","vague, unclear; in the form of a cloud or haze, hazy"],
["Maverick","an unorthodox or independent-minded person; (adj.) unorthodox"],
["Intrepid","fearless; adventurous (often used for humorous effect)"],
["Disparate","fundamentally different; not allowing comparison"],
["Aberrant","departing from an accepted standard; deviant, divergent, abnormal"],
["Proliferate","to rapidly increase, multiply; (of a cell) to reproduce rapidly"],
["Fastidious","very attentive to, and concerned about, accuracy and detail"],
["Extirpate","to tear up by the roots; to destroy totally"],
["Opprobrious","damning; extremely critical; disgraceful, shameful"],
["Emanate","to come forth from a source"],
["Inadvertently","unintentionally; by oversight; carelessly"],
["Repudiate","to disown, reject, or deny the validity of"],
["Preclude","to make impossible, prevent, shut out"],
["Vexing","annoying, frustrating, worrying"],
["Aggrieved","distressed, wronged, injured"],
["Calamitous","causing great misfortune; disastrous, catastrophic"],
["Incontrovertible","unquestionable, indisputable"],
["Discordant","disagreeable in sound, jarring; lacking in harmony, conflicting"],
["Fallacious","false, incorrect, misleading, or deceptive"],
["Virtuous","having or showing high moral standards"],
["Scrupulous","diligent, thorough, and extremely attentive to detail; very concerned to avoid doing wrong"],
["Dismal","depressing, dreary; gloomy; pitifully or disgracefully bad"],
["Concession","a thing granted, especially in response to demands; a compromise; a preferential rate"],
["Concede","to admit something is true after first denying or resisting it; to surrender or yield"],
["Mudslinging","the use of insults and accusations, especially unjust ones, to damage an opponent's reputation"],
["Substantiate","provide evidence to support or prove the truth of"],
["Unbridled","uncontrolled, lacking in restraint"],
["Plaudits","applause; enthusiastic praise or approval"],
["Extol","to praise highly"],
["Effusive","expressing feelings in an unrestrained, heartfelt manner; overflowing, emotionally excessive"],
["Prevarication","evasion of the truth; a lie"],
["A priori","relating to reasoning or knowledge from theoretical deduction rather than observation"],
["Precocity","exhibiting mature qualities at an unusually early age"],
["Sanction","official permission or approval"],
["Benign","marked by gentleness, kindness, and graciousness; helpful"],
["Imprimatur","formal and explicit approval"],
["Derisive","expressing contempt, mocking, or ridicule"],
["Sully","to damage the purity or integrity of; defile"],
["Straw man","a weak or imaginary opposition set up only to be easily refuted; a person of no substance"],
["Unsurpassed","as good as or better than any other; superior, best, unmatched"],
["Relinquish","to let go, give up"],
["Aggregation","a large group or collection of people, animals, or things"],
["Befall","(of something bad) to happen to someone"],
["Adduce","to cite as evidence"],
["Encumbered","weighed down, burdened, impeded; saddled with debt; filled or blocked up"],
["Onerous","burdensome; involving hardship or difficulty"],
["Protracted","extended in time; prolonged"],
["Subsumed","included or absorbed into something else"],
["Composite","made up of various parts"],
["Adversarial","involving or characterized by conflict or opposition"],
["Continuum","a continuous sequence in which adjacent elements are barely distinguishable, though extremes are distinct"],
["Didactic","instructive, designed to teach"],
["Enjoin","to direct or order authoritatively; to urge; (law) to prohibit"],
["Ephemeral","short-lived"],
["Untenable","not capable of being defended; impossible to maintain"],
["Unduly","to an unwarranted or excessive degree; inappropriately"],
["Heed","to pay attention to, take notice of; (n.) careful attention"],
["Bemoan","to express discontent or sorrow over; to complain about"],
["Patronize","to treat as though kind but with a feeling of superiority; to frequent as a customer; to support as a patron"],
["Promulgate","to promote or make widely known; to put into effect by official proclamation; enact"],
["Conduit","something that provides a way of passing on information or payments; a connection between two places; a pipe"],
["Impute","to credit or ascribe to a person or cause, attribute; to lay blame for, often falsely"],
["Glean","to extract information from various sources; to collect gradually, bit by bit"],
["Stymie","to prevent or hinder the progress of"],
["Polemical","relating to strongly critical, controversial writing or speech; hostile, virulent"],
["Repugnant","extremely distasteful, unacceptable; incompatible with"],
["Indispensable","absolutely necessary"],
["Bastion","an institution, place, or person strongly defending particular principles or activities"],
["Repute","to assign a reputation to"],
["Debased","reduced in quality or value"],
["Edifice","a complex system of beliefs; a building"],
["Impugn","to call into question; to attack as false"],
["Evince","to display clearly, to make evident, to reveal, to indicate"],
["Dearth","a lack, scarcity, inadequate supply; a famine"],
["Pernicious","extremely harmful; deadly; having a harmful effect gradually or subtly"],
["Imprudent","not showing care for the consequences of an action; rash"],
["Prudent","wise, careful, cautious"],
["Counterintuitive","contrary to intuition or common-sense expectation, but often true"],
["In vain","without success or result"],
["Concomitant","naturally accompanying or associated"],
["Sequester","to isolate or hide away; to take legal possession of something"],
["Evanescent","vanishing, soon passing away out of sight or memory; quickly fading"],
["Underscore","to emphasize"],
["Deference","humble submission and respect"],
["Capitalize","to take advantage of something; to make the most of something"],
["Countenance","to admit as acceptable or possible; to tolerate, permit"],
["Contravene","to conflict with a right or principle; to violate a law or code"],
["Appraise","to assess the worth or value of"],
["Impervious","unable to be affected by; not allowing fluid to pass through"],
["Purport","to profess, suppose, claim, allege"],
["Credence","belief in or acceptance of something as true"],
["Delineate","to describe, draw, or portray precisely; to indicate the exact position of a boundary; to separate"],
["Bespeak","to be a signal or symptom of; to express the need or desire for, ask for"],
["Supersede","to replace"],
["Quaint","odd or old-fashioned in a pleasing way; clever, ingenious; skillfully made"],
["Precede","to come before"],
["Impetus","a moving force, impulse, stimulus"],
["Truncate","to shorten by cutting off"],
["Reprisal","an act of retaliation; revenge"],
["Contend","to argue, assert, or maintain; to fight, struggle"],
["Recourse","a source of help in a difficult situation; the legal right to demand compensation"],
["Intransigent","uncompromising"],
["Forestall","to prevent by acting first"],
["Marginal","of minor importance, significance, relevance, or effect"],
["Gratuitously","without good reason, unjustifiably; given or done free of charge"]
];

const MASTER_WORDS = RAW_WORDS.map((w,i)=>({id:i, term:w[0], def:w[1]}));
const MASTER_IDS = new Set(MASTER_WORDS.map(w=>w.id));

const STORAGE_PREFIX = 'vocabApp.';
const STORAGE_KEYS = {
  settings: STORAGE_PREFIX + 'settings.v1',
  progress: STORAGE_PREFIX + 'progress.v1',
  stats: STORAGE_PREFIX + 'stats.v1',
  customWords: STORAGE_PREFIX + 'customWords.v1',
  removedIds: STORAGE_PREFIX + 'removedIds.v1',
};

let storageAvailable = true;
function detectStorage(){
  try{
    const testKey = STORAGE_PREFIX + '__test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  }catch(e){
    return false;
  }
}
function readRaw(key){
  if(!storageAvailable) return null;
  try{ return window.localStorage.getItem(key); }
  catch(e){ return null; }
}
function writeRaw(key, value){
  if(!storageAvailable) return false;
  try{ window.localStorage.setItem(key, value); return true; }
  catch(e){ return false; }
}
function safeParse(raw){
  if(raw == null) return undefined;
  try{ return JSON.parse(raw); }
  catch(e){ return undefined; }
}

function sanitizeProgressEntry(e){
  const d = {starred:false, level:0, attempts:0, correct:0, misses:0};
  if(!e || typeof e !== 'object') return d;
  return {
    starred: !!e.starred,
    level: (e.level===1||e.level===2) ? e.level : 0,
    attempts: (Number.isFinite(e.attempts) && e.attempts>=0) ? e.attempts : 0,
    correct: (Number.isFinite(e.correct) && e.correct>=0) ? e.correct : 0,
    misses: (Number.isFinite(e.misses) && e.misses>=0) ? e.misses : 0,
  };
}
function sanitizeSettings(raw){
  const d = {
    direction:'td', scope:'all', order:'shuffle', batchSize:5, choices:4, input:'progressive',
    fontScale:1, theme:'day', sound:true, autoplay:false, autoSpeed:'normal'
  };
  if(!raw || typeof raw !== 'object') return d;
  const oneOf = (val, allowed, fallback) => allowed.includes(val) ? val : fallback;
  return {
    direction: oneOf(raw.direction, ['td','dt','mixed'], d.direction),
    scope: oneOf(raw.scope, ['all','starred','unmastered','difficult'], d.scope),
    order: oneOf(raw.order, ['shuffle','list','az'], d.order),
    batchSize: oneOf(raw.batchSize, [3,5,7], d.batchSize),
    choices: oneOf(raw.choices, [3,4,5], d.choices),
    input: oneOf(raw.input, ['progressive','mc','type'], d.input),
    fontScale: oneOf(raw.fontScale, [0.9,1,1.15], d.fontScale),
    theme: oneOf(raw.theme, ['day','night'], d.theme),
    sound: (raw.sound === undefined) ? d.sound : !!raw.sound,
    autoplay: !!raw.autoplay,
    autoSpeed: oneOf(raw.autoSpeed, ['slow','normal','fast'], d.autoSpeed),
  };
}
function sanitizeCustomWords(raw){
  if(!Array.isArray(raw)) return [];
  const seen = new Set();
  return raw.filter(w => {
    if(!w || typeof w !== 'object') return false;
    if(typeof w.id !== 'string' || !w.id.startsWith('c_')) return false;
    if(typeof w.term !== 'string' || typeof w.def !== 'string') return false;
    const term = w.term.trim(), def = w.def.trim();
    if(!term || !def) return false;
    if(seen.has(w.id)) return false;
    seen.add(w.id);
    return true;
  }).map(w => ({id:w.id, term:w.term.trim().slice(0,80), def:w.def.trim().slice(0,400)}));
}
function sanitizeRemovedIds(raw){
  if(!Array.isArray(raw)) return [];
  return raw.filter(id => Number.isInteger(id) && MASTER_IDS.has(id));
}
function sanitizeStats(raw){
  const d = {attempts:0, correct:0};
  if(!raw || typeof raw !== 'object') return d;
  return {
    attempts: (Number.isFinite(raw.attempts) && raw.attempts>=0) ? raw.attempts : 0,
    correct: (Number.isFinite(raw.correct) && raw.correct>=0) ? raw.correct : 0,
  };
}

let settings = sanitizeSettings(undefined);
let progress = {};
let stats = { attempts:0, correct:0 };
let customWords = [];
let removedIds = [];

let ACTIVE_WORDS = [];
let WORD_INDEX = {};

function rebuildActiveWords(){
  const removedSet = new Set(removedIds);
  const activeDefaults = MASTER_WORDS.filter(w => !removedSet.has(w.id));
  ACTIVE_WORDS = activeDefaults.concat(customWords.map(w => ({id:w.id, term:w.term, def:w.def, isCustom:true})));
  WORD_INDEX = {};
  ACTIVE_WORDS.forEach(w => { WORD_INDEX[w.id] = w; });
  ensureProgressFor(ACTIVE_WORDS);
  updateDeckCount();
}
function ensureProgressFor(words){
  words.forEach(w => { if(!progress[w.id]) progress[w.id] = sanitizeProgressEntry(undefined); });
}
function updateDeckCount(){
  const el = document.getElementById('deckCount');
  if(!el) return;
  const hiddenCount = removedIds.length;
  const customCount = customWords.length;
  let extra = [];
  if(customCount>0) extra.push(customCount + ' custom');
  if(hiddenCount>0) extra.push(hiddenCount + ' hidden');
  el.textContent = ACTIVE_WORDS.length + ' entries' + (extra.length ? ' (' + extra.join(', ') + ')' : '');
}

let flashDeck = [];
let flashIdx = 0;
let flashFlipped = false;
let autoplayTimer = null;

let matchTiles = [];
let matchSelected = [];
let matchStart = null;
let matchTimerInterval = null;
let matchMistakes = 0;
let matchLocked = false;

let currentMode = 'flash';

let learnPool = [];
let learnRoundStats = {};
let learnBatch = [];
let learnBatchPos = 0;
let learnBatchNumber = 0;
let learnBatchResults = [];
let learnPhase = 'question';
let learnCurrent = null;
let learnAwaitingNext = false;

let testConfig = { count:10, types:{ tf:true, mc:true, match:true } };
let testWords = [];
let testItems = [];
let testAnswers = {};
let testScore = null;
let testPhase = 'setup';

function requiredStreak(id){
  const p = progress[id];
  return (p && p.misses > 0) ? 3 : 2;
}
function priorityScore(id){
  const r = learnRoundStats[id];
  if(r.retired) return -Infinity;
  let score = 0;
  if(r.attemptsThisRound === 0) score += 4;
  if(r.lastResult === 'incorrect') score += 6;
  score += Math.max(0, requiredStreak(id) - r.streak) * 1.5;
  const hist = progress[id] || {attempts:0, correct:0};
  const histAcc = hist.attempts > 0 ? hist.correct / hist.attempts : 1;
  score += (1 - histAcc) * 3;
  score += Math.random() * 0.8;
  return score;
}
function reasonTag(id){
  const r = learnRoundStats[id];
  if(r.attemptsThisRound === 0) return {cls:'new', text:'New term'};
  if(r.lastResult === 'incorrect') return {cls:'review', text:'Review, missed last time'};
  if(r.streak >= 1 && r.streak < requiredStreak(id)) return {cls:'confirm', text:'Confirming recall'};
  return {cls:'', text:'Reviewing'};
}
function questionModeFor(id){
  if(settings.input === 'mc') return 'mc';
  if(settings.input === 'type') return 'type';
  return learnRoundStats[id].streak >= 1 ? 'type' : 'mc';
}
function buildLearnRound(){
  learnPool = scopedWords().map(w => w.id);
  learnRoundStats = {};
  learnPool.forEach(id => { learnRoundStats[id] = {streak:0, attemptsThisRound:0, lastResult:null, retired:false}; });
  learnBatchNumber = 0;
  learnAwaitingNext = false;
  learnPhase = 'question';
  if(learnPool.length > 0) startNextBatch();
}
function startNextBatch(){
  const active = learnPool.filter(id => !learnRoundStats[id].retired);
  if(active.length === 0){ learnPhase = 'complete'; return; }
  const scored = active.map(id => ({id, score:priorityScore(id)}));
  scored.sort((a,b) => b.score - a.score);
  const n = Math.min(settings.batchSize, scored.length);
  learnBatch = scored.slice(0, n).map(s => ({id:s.id}));
  learnBatchPos = 0;
  learnBatchResults = [];
  learnBatchNumber += 1;
  learnPhase = 'question';
}
function makeLearnQuestion(id){
  const w = WORD_INDEX[id];
  const dir = dirForCard();
  const mode = questionModeFor(id);
  let choices = null;
  if(mode === 'mc'){
    const pool = ACTIVE_WORDS.filter(x => x.id !== id);
    const distractors = shuffleArr(pool).slice(0, Math.max(1, settings.choices - 1));
    const answerText = dir === 'td' ? w.def : w.term;
    const opts = distractors.map(d => dir === 'td' ? d.def : d.term);
    opts.push(answerText);
    choices = shuffleArr(opts);
  }
  return {id, w, dir, mode, choices};
}
function renderLearn(){
  const app = document.getElementById('app');
  if(ACTIVE_WORDS.length === 0){ app.innerHTML = emptyVocabNote(); return; }
  if(learnPool.length === 0 && learnPhase !== 'complete') buildLearnRound();
  if(learnPool.length === 0){ app.innerHTML = emptyScopeNote(); return; }
  if(learnAwaitingNext) return;

  if(learnPhase === 'complete'){ renderLearnComplete(); return; }
  if(learnPhase === 'recap'){ renderLearnRecap(); return; }
  renderLearnQuestion();
}
function renderLearnQuestion(){
  const app = document.getElementById('app');
  const id = learnBatch[learnBatchPos].id;
  learnCurrent = makeLearnQuestion(id);
  const { dir, mode, choices, w } = learnCurrent;
  const promptLabel = dir === 'td' ? 'What is the definition of' : 'Which word means';
  const promptText = dir === 'td' ? w.term : w.def;
  const tag = reasonTag(id);
  const masteredCount = learnPool.filter(pid => learnRoundStats[pid].retired).length;

  const track = learnPool.map(pid => {
    const r = learnRoundStats[pid];
    const cls = r.retired ? 'lvl2' : r.streak >= 1 ? 'lvl1' : '';
    return `<div class="${cls}"></div>`;
  }).join('');

  let bodyHtml = '';
  if(mode === 'mc'){
    bodyHtml = choices.map((c,i) => `<button class="choice" data-i="${i}">${escapeHtml(c)}</button>`).join('');
  } else {
    bodyHtml = `
      <div class="type-row">
        <input type="text" id="typeInput" autocomplete="off" placeholder="Type the ${dir==='td'?'definition (a key phrase is fine)':'word'}…" />
        <button id="submitType">Check</button>
      </div>`;
  }

  app.innerHTML = `
    <div class="learn-card">
      <div class="learn-eyebrow"><span>BATCH ${learnBatchNumber} · QUESTION ${learnBatchPos+1}/${learnBatch.length}</span><span>${masteredCount}/${learnPool.length} MASTERED</span></div>
      <span class="badge ${tag.cls}">${escapeHtml(tag.text)}</span>
      <div class="learn-q"><b>${escapeHtml(promptLabel)}</b></div>
      <div class="learn-q"><b>${escapeHtml(promptText)}</b></div>
      <div id="answerArea">${bodyHtml}</div>
      <div class="feedback" id="feedback" aria-live="polite"></div>
      <div class="mastery-track">${track}</div>
    </div>`;

  if(mode === 'mc'){
    document.querySelectorAll('.choice').forEach(btn => {
      btn.onclick = () => handleLearnAnswer(choices[Number(btn.dataset.i)], btn);
    });
  } else {
    const input = document.getElementById('typeInput');
    const submit = document.getElementById('submitType');
    const go = () => { if(input.value.trim()) handleLearnAnswer(input.value, null); };
    submit.onclick = go;
    input.addEventListener('keydown', e => { if(e.key === 'Enter') go(); });
    input.focus();
  }
}
function normalize(s){ return s.trim().toLowerCase().replace(/[.;,]/g,''); }
function handleLearnAnswer(given, btnEl){
  const { id, dir, mode, w } = learnCurrent;
  const correctText = dir === 'td' ? w.def : w.term;
  let isCorrect;
  if(mode === 'mc'){
    isCorrect = given === correctText;
    document.querySelectorAll('.choice').forEach(b => {
      if(b.textContent === correctText) b.classList.add('correct');
      else if(b === btnEl) b.classList.add('wrong');
      b.disabled = true;
    });
  } else {
    const g = normalize(given), c = normalize(correctText);
    isCorrect = g === c || (dir === 'td' && g.length > 4 && c.includes(g));
    document.getElementById('typeInput').disabled = true;
    document.getElementById('submitType').disabled = true;
  }

  const r = learnRoundStats[id];
  r.attemptsThisRound += 1;
  progress[id].attempts += 1;
  stats.attempts += 1;

  let justMastered = false;
  if(isCorrect){
    r.streak += 1;
    r.lastResult = 'correct';
    progress[id].correct += 1;
    stats.correct += 1;
    if(r.streak >= requiredStreak(id)){
      r.retired = true;
      if(progress[id].level < 2){ progress[id].level = 2; justMastered = true; }
    }
  } else {
    r.streak = 0;
    r.lastResult = 'incorrect';
    progress[id].misses += 1;
  }

  const fb = document.getElementById('feedback');
  beep(isCorrect);
  if(isCorrect){
    fb.textContent = justMastered
      ? 'Correct. Demonstrated reliably, retired from this round and marked known.'
      : 'Correct.';
    fb.className = 'feedback ok';
  } else {
    fb.textContent = `Not quite. This will come back for review soon. Answer: ${correctText}`;
    fb.className = 'feedback bad';
  }

  learnBatchResults.push({id, correct:isCorrect, dir, mode});
  saveAll();

  learnAwaitingNext = true;
  if(isCorrect){
    setTimeout(() => { advanceLearn(); }, 650);
  } else {
    renderForcedContinue();
  }
}
function advanceLearn(){
  learnAwaitingNext = false;
  learnBatchPos += 1;
  if(learnBatchPos < learnBatch.length){
    renderLearnQuestion();
  } else {
    learnPhase = 'recap';
    if(learnBatchResults.length > 0 && learnBatchResults.every(r => r.correct)){
      fireConfetti();
    }
    renderLearnRecap();
  }
}
function renderForcedContinue(){
  const app = document.getElementById('app');
  const wrap = document.createElement('div');
  wrap.className = 'continue-wrap';
  const btn = document.createElement('button');
  btn.className = 'continue-btn';
  btn.disabled = true;
  const WAIT_SECONDS = 4;
  let remaining = WAIT_SECONDS;
  btn.textContent = `Continue (${remaining})`;
  wrap.appendChild(btn);
  app.querySelector('.learn-card').appendChild(wrap);

  const tick = setInterval(() => {
    remaining -= 1;
    if(remaining <= 0){
      clearInterval(tick);
      btn.disabled = false;
      btn.textContent = 'Continue';
    } else {
      btn.textContent = `Continue (${remaining})`;
    }
  }, 1000);

  btn.onclick = () => {
    if(btn.disabled) return;
    clearInterval(tick);
    advanceLearn();
  };
}
function renderLearnRecap(){
  const app = document.getElementById('app');
  const correctCount = learnBatchResults.filter(r => r.correct).length;
  const rows = learnBatchResults.map(r => {
    const w = WORD_INDEX[r.id];
    const rs = learnRoundStats[r.id];
    let note;
    if(r.correct && rs.retired) note = 'mastered this round';
    else if(r.correct) note = 'building recall, will be asked again';
    else note = 'missed, prioritized for the next batch';
    return `
      <li>
        <span class="mark ${r.correct?'ok':'bad'}">${r.correct?'Y':'N'}</span>
        <span class="term">${escapeHtml(w ? w.term : '(removed)')}</span>
        <span class="note">${note}</span>
      </li>`;
  }).join('');
  app.innerHTML = `
    <div class="learn-card">
      <div class="learn-eyebrow"><span>BATCH ${learnBatchNumber} COMPLETE</span></div>
      <div class="recap-score">${correctCount} / ${learnBatchResults.length} correct</div>
      <ul class="recap-list">${rows}</ul>
      <p style="color:var(--ink-soft); font-family:var(--mono); font-size:.75em; line-height:1.6;">
        The next batch is chosen from what you're most at risk of forgetting — recent misses first, then terms you haven't yet shown twice in a row, mixed with a few new words.
      </p>
      <div class="row">
        <button class="iconbtn big" id="continueBatch">Continue</button>
      </div>
    </div>`;
  document.getElementById('continueBatch').onclick = () => { startNextBatch(); render(); };
}
function renderLearnComplete(){
  const app = document.getElementById('app');
  const masteredCount = learnPool.filter(pid => learnRoundStats[pid].retired).length;
  app.innerHTML = `
    <div class="learn-card complete">
      <h2>Round complete</h2>
      <p style="color:var(--ink-soft); font-family: var(--mono); font-size:.85em;">
        ${masteredCount} of ${learnPool.length} words demonstrated reliably across ${learnBatchNumber} batches.
      </p>
      <div class="row" style="margin-top:24px;">
        <button class="iconbtn big" id="restartAll">Study again</button>
      </div>
    </div>`;
  document.getElementById('restartAll').onclick = () => { buildLearnRound(); render(); };
}

function loadAll(){
  storageAvailable = detectStorage();
  const banner = document.getElementById('storageBanner');
  if(banner) banner.hidden = storageAvailable;

  settings = sanitizeSettings(safeParse(readRaw(STORAGE_KEYS.settings)));

  const rawProgress = safeParse(readRaw(STORAGE_KEYS.progress));
  progress = {};
  if(rawProgress && typeof rawProgress === 'object'){
    Object.keys(rawProgress).forEach(id => { progress[id] = sanitizeProgressEntry(rawProgress[id]); });
  }

  stats = sanitizeStats(safeParse(readRaw(STORAGE_KEYS.stats)));
  customWords = sanitizeCustomWords(safeParse(readRaw(STORAGE_KEYS.customWords)));
  removedIds = sanitizeRemovedIds(safeParse(readRaw(STORAGE_KEYS.removedIds)));

  rebuildActiveWords();
}
let saveTimer = null;
function saveAll(){
  const tag = document.getElementById('saveTag');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    writeRaw(STORAGE_KEYS.settings, JSON.stringify(settings));
    writeRaw(STORAGE_KEYS.progress, JSON.stringify(progress));
    writeRaw(STORAGE_KEYS.stats, JSON.stringify(stats));
    writeRaw(STORAGE_KEYS.customWords, JSON.stringify(customWords));
    writeRaw(STORAGE_KEYS.removedIds, JSON.stringify(removedIds));
    if(tag && storageAvailable){ tag.classList.add('show'); setTimeout(() => tag.classList.remove('show'), 900); }
  }, 250);
}

function makeCustomId(){
  return 'c_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2,8);
}
function addCustomWord(term, def){
  term = (term||'').trim();
  def = (def||'').trim();
  if(!term || !def) return {ok:false, message:'Both a term and a definition are required.'};
  if(term.length>80) return {ok:false, message:'Term is too long (80 characters max).'};
  if(def.length>400) return {ok:false, message:'Definition is too long (400 characters max).'};
  const dupe = ACTIVE_WORDS.some(w => w.term.toLowerCase() === term.toLowerCase());
  if(dupe) return {ok:false, message:'That term is already in your vocabulary.'};
  const id = makeCustomId();
  customWords.push({id, term, def});
  progress[id] = sanitizeProgressEntry(undefined);
  rebuildActiveWords();
  saveAll();
  return {ok:true, message:`Added "${term}".`};
}
function removeWord(id){
  if(typeof id === 'string' && id.startsWith('c_')){
    customWords = customWords.filter(w => w.id !== id);
    delete progress[id];
  } else {
    const numId = Number(id);
    if(!removedIds.includes(numId)) removedIds.push(numId);
  }
  rebuildActiveWords();
  saveAll();
}
function restoreDefaultWord(id){
  const numId = Number(id);
  removedIds = removedIds.filter(rid => rid !== numId);
  rebuildActiveWords();
  saveAll();
}
function clearAllLocalData(){
  customWords = [];
  removedIds = [];
  progress = {};
  MASTER_WORDS.forEach(w => { progress[w.id] = sanitizeProgressEntry(undefined); });
  stats = {attempts:0, correct:0};
  settings = sanitizeSettings(undefined);
  testWords = [];
  testItems = [];
  testAnswers = {};
  testScore = null;
  testPhase = 'setup';
  rebuildActiveWords();
  saveAll();
}

let actx;
function beep(ok){
  if(!settings.sound) return;
  try{
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator();
    const g = actx.createGain();
    o.type = 'sine';
    o.frequency.value = ok ? 660 : 200;
    g.gain.value = 0.06;
    o.connect(g); g.connect(actx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.25);
    o.stop(actx.currentTime + 0.27);
  }catch(e){}
}

function fireConfetti(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#4255ff','#ffcd1f','#1fb27a','#ff5a63','#a259ff'];
  const count = 60;
  const frag = document.createDocumentFragment();
  const pieces = [];
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const left = Math.random()*100;
    const drift = Math.round(Math.random()*160-80) + 'px';
    const spin = Math.round(Math.random()*720-360) + 'deg';
    const duration = Math.round(2200 + Math.random()*1400);
    const delay = Math.round(Math.random()*250);
    el.style.left = left + 'vw';
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.setProperty('--drift', drift);
    el.style.setProperty('--spin', spin);
    el.style.animationDuration = duration + 'ms';
    el.style.animationDelay = delay + 'ms';
    if(Math.random()<0.5) el.style.borderRadius = '50%';
    frag.appendChild(el);
    pieces.push(el);
  }
  document.body.appendChild(frag);
  setTimeout(() => { pieces.forEach(p => p.remove()); }, 4200);
}

function shuffleArr(a){
  const arr = a.slice();
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}
function orderList(list){
  if(settings.order==='shuffle') return shuffleArr(list);
  if(settings.order==='az') return list.slice().sort((a,b)=>a.term.localeCompare(b.term));
  return list.slice();
}
function scopeLabel(){
  return {all:'All words', starred:'Starred words', unmastered:'Unmastered words', difficult:'Difficult words'}[settings.scope];
}
function scopedWords(){
  if(settings.scope==='starred') return ACTIVE_WORDS.filter(w=>progress[w.id] && progress[w.id].starred);
  if(settings.scope==='unmastered') return ACTIVE_WORDS.filter(w=>!progress[w.id] || progress[w.id].level<2);
  if(settings.scope==='difficult') return ACTIVE_WORDS.filter(w=>progress[w.id] && progress[w.id].misses>0);
  return ACTIVE_WORDS.slice();
}
function dirForCard(){
  if(settings.direction==='mixed') return Math.random()<0.5?'td':'dt';
  return settings.direction;
}
function applyTheme(){
  document.documentElement.classList.toggle('night', settings.theme==='night');
  document.documentElement.style.setProperty('--fs-scale', settings.fontScale);
}
function emptyScopeNote(){
  return `<div class="empty-note">No cards match "${scopeLabel()}" yet.<br>Star a few words in Browse, or open Settings to change scope.</div>`;
}
function emptyVocabNote(){
  return `<div class="empty-note">Your vocabulary is empty.<br>Add a word, or restore a removed one, in the Manage tab.</div>`;
}
function stopAutoplay(){ clearTimeout(autoplayTimer); autoplayTimer = null; }
function stopMatchTimer(){ clearInterval(matchTimerInterval); matchTimerInterval = null; }
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function buildFlashDeck(){
  const list = scopedWords();
  flashDeck = orderList(list).map(w => ({...w, _dir: dirForCard()}));
  flashIdx = 0;
  flashFlipped = false;
  stopAutoplay();
}
function renderFlash(){
  const app = document.getElementById('app');
  if(ACTIVE_WORDS.length === 0){ app.innerHTML = emptyVocabNote(); return; }
  if(flashDeck.length===0){ app.innerHTML = emptyScopeNote(); return; }
  const w = flashDeck[flashIdx];
  const dir = w._dir;
  const front = dir==='td' ? {cls:'term', text:w.term} : {cls:'def', text:w.def};
  const back = dir==='td' ? {cls:'def', text:w.def} : {cls:'term', text:w.term};
  const pct = Math.round(((flashIdx+1)/flashDeck.length)*100);
  const p = progress[w.id] || sanitizeProgressEntry(undefined);
  app.innerHTML = `
    <div class="stage">
      <div class="progressbar"><div style="width:${pct}%"></div></div>
      <div class="card ${flashFlipped?'flipped':''}" id="flashCard" role="button" tabindex="0" aria-label="Flip card">
        <div class="card-inner">
          <div class="face front"><div class="idx"><span>Card ${flashIdx+1} / ${flashDeck.length}</span>${w.isCustom?'<span class="known-tag">custom</span>':(p.level>=2?'<span class="known-tag">known</span>':'')}</div><div class="content"><div class="${front.cls}">${escapeHtml(front.text)}</div></div></div>
          <div class="face back"><div class="idx"><span>Card ${flashIdx+1} / ${flashDeck.length}</span></div><div class="content"><div class="${back.cls}">${escapeHtml(back.text)}</div></div></div>
        </div>
      </div>
      <div class="hint">tap card or press space to flip · ← → to navigate · s to star · k to mark known</div>
      <div class="row">
        <button class="iconbtn" id="prevBtn" title="Previous">←</button>
        <button class="iconbtn ${p.starred?'starred':''}" id="starBtn" title="Star">★</button>
        <button class="iconbtn ${p.level>=2?'known':''}" id="knownBtn" title="Mark known">✓</button>
        <button class="iconbtn" id="nextBtn" title="Next">→</button>
      </div>
    </div>
  `;
  const flip = ()=>{ flashFlipped=!flashFlipped; renderFlash(); if(settings.autoplay) scheduleAutoplay(); };
  const cardEl = document.getElementById('flashCard');
  cardEl.addEventListener('click', flip);
  cardEl.addEventListener('keydown', (e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flip(); } });
  document.getElementById('prevBtn').addEventListener('click', (e)=>{ e.stopPropagation(); flashPrev(); });
  document.getElementById('nextBtn').addEventListener('click', (e)=>{ e.stopPropagation(); flashNext(); });
  document.getElementById('starBtn').addEventListener('click', (e)=>{ e.stopPropagation(); toggleStar(w.id); });
  document.getElementById('knownBtn').addEventListener('click', (e)=>{ e.stopPropagation(); toggleKnown(w.id); });
}
function toggleStar(id){
  if(!progress[id]) progress[id] = sanitizeProgressEntry(undefined);
  progress[id].starred = !progress[id].starred;
  saveAll(); render();
}
function toggleKnown(id){
  if(!progress[id]) progress[id] = sanitizeProgressEntry(undefined);
  progress[id].level = progress[id].level>=2 ? 0 : 2;
  saveAll(); render();
}
function flashNext(){
  if(flashDeck.length===0) return;
  flashFlipped=false;
  flashIdx = (flashIdx+1) % flashDeck.length;
  renderFlash();
  if(settings.autoplay) scheduleAutoplay();
}
function flashPrev(){
  if(flashDeck.length===0) return;
  flashFlipped=false;
  flashIdx = (flashIdx-1+flashDeck.length) % flashDeck.length;
  renderFlash();
  if(settings.autoplay) scheduleAutoplay();
}
function autoplayDelay(){ return { slow:5000, normal:3200, fast:1800 }[settings.autoSpeed] || 3200; }
function scheduleAutoplay(){
  stopAutoplay();
  if(!settings.autoplay || currentMode!=='flash' || flashDeck.length===0) return;
  const half = autoplayDelay()/2;
  autoplayTimer = setTimeout(()=>{
    flashFlipped = true;
    renderFlash();
    autoplayTimer = setTimeout(()=>{ flashNext(); }, half);
  }, half);
}

function buildMatch(){
  stopMatchTimer();
  const list = scopedWords();
  matchSelected = [];
  matchStart = null;
  matchMistakes = 0;
  matchLocked = false;
  if(list.length<2){ matchTiles = []; return; }
  const n = Math.min(8, list.length);
  const chosen = shuffleArr(list).slice(0, n);
  const tiles = [];
  chosen.forEach(w=>{
    tiles.push({wordId:w.id, type:'term', text:w.term, matched:false});
    tiles.push({wordId:w.id, type:'def', text:w.def, matched:false});
  });
  matchTiles = shuffleArr(tiles);
}
function renderMatch(){
  const app = document.getElementById('app');
  if(ACTIVE_WORDS.length === 0){ app.innerHTML = emptyVocabNote(); return; }
  if(matchTiles.length===0){
    app.innerHTML = `<div class="empty-note">Match needs at least 2 words in "${scopeLabel()}".<br>Star more words, or widen the scope in Settings.</div>`;
    return;
  }
  const remaining = matchTiles.filter(t=>!t.matched).length/2;
  app.innerHTML = `
    <div class="match-head">
      <span>PAIRS LEFT: ${remaining}</span>
      <span id="matchTimer">0:00</span>
      <span>MISSES: ${matchMistakes}</span>
      <button class="iconbtn big" id="newMatchBtn">New set</button>
    </div>
    <div class="match-grid" id="matchGrid"></div>
  `;
  const grid = document.getElementById('matchGrid');
  matchTiles.forEach((t,i)=>{
    const btn = document.createElement('button');
    btn.className = 'tile ' + (t.type==='term'?'term':'def') + (t.matched?' matched':'') + (matchSelected.includes(i)?' selected':'');
    btn.textContent = t.text;
    btn.disabled = t.matched;
    btn.onclick = ()=>handleTileClick(i);
    grid.appendChild(btn);
  });
  document.getElementById('newMatchBtn').onclick = ()=>{ buildMatch(); renderMatch(); };
  if(matchStart) startMatchTimerDisplay();
}
function startMatchTimerDisplay(){
  stopMatchTimer();
  const el = document.getElementById('matchTimer');
  matchTimerInterval = setInterval(()=>{
    if(!el || !matchStart) return;
    const secs = Math.floor((Date.now()-matchStart)/1000);
    el.textContent = Math.floor(secs/60)+':'+String(secs%60).padStart(2,'0');
  }, 250);
}
function handleTileClick(i){
  if(matchLocked) return;
  const t = matchTiles[i];
  if(t.matched || matchSelected.includes(i)) return;
  if(!matchStart){ matchStart = Date.now(); startMatchTimerDisplay(); }
  matchSelected.push(i);
  renderMatch();
  if(matchSelected.length===2){
    const [a,b] = matchSelected;
    const ta = matchTiles[a], tb = matchTiles[b];
    if(ta.wordId===tb.wordId && ta.type!==tb.type){
      beep(true);
      ta.matched = true; tb.matched = true;
      matchSelected = [];
      renderMatch();
      if(matchTiles.every(t=>t.matched)){
        stopMatchTimer();
        const secs = Math.floor((Date.now()-matchStart)/1000);
        setTimeout(()=>{
          document.getElementById('app').innerHTML = `
            <div class="learn-card complete">
              <h2>All matched!</h2>
              <p style="color:var(--ink-soft); font-family:var(--mono); font-size:.85em;">
                Time: ${Math.floor(secs/60)}:${String(secs%60).padStart(2,'0')} · Misses: ${matchMistakes}
              </p>
              <div class="row" style="margin-top:24px;">
                <button class="iconbtn big" id="newMatchBtn2">Play again</button>
              </div>
            </div>`;
          document.getElementById('newMatchBtn2').onclick = ()=>{ buildMatch(); renderMatch(); };
        }, 150);
      }
    } else {
      beep(false);
      matchMistakes += 1;
      matchLocked = true;
      const gridButtons = document.querySelectorAll('#matchGrid .tile');
      if(gridButtons[a]) gridButtons[a].classList.add('wrongflash');
      if(gridButtons[b]) gridButtons[b].classList.add('wrongflash');
      setTimeout(()=>{
        matchSelected = [];
        matchLocked = false;
        renderMatch();
      }, 600);
    }
  }
}

let browseQuery = '';
function renderBrowse(){
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="search-row"><input type="text" id="browseSearch" placeholder="Search terms or definitions…" value="${escapeHtml(browseQuery)}" /></div>
    <div id="browseList"></div>
  `;
  const input = document.getElementById('browseSearch');
  input.oninput = ()=>{ browseQuery = input.value; renderBrowseList(); };
  input.focus();
  const savedPos = input.value.length;
  input.setSelectionRange(savedPos, savedPos);
  renderBrowseList();
}
function renderBrowseList(){
  const list = document.getElementById('browseList');
  if(ACTIVE_WORDS.length === 0){ list.innerHTML = emptyVocabNote(); return; }
  const q = browseQuery.trim().toLowerCase();
  const filtered = ACTIVE_WORDS.filter(w => !q || w.term.toLowerCase().includes(q) || w.def.toLowerCase().includes(q));
  if(filtered.length===0){
    list.innerHTML = `<div class="empty-note">No entries match “${escapeHtml(browseQuery)}”.</div>`;
    return;
  }
  list.innerHTML = filtered.map(w=>{
    const p = progress[w.id] || sanitizeProgressEntry(undefined);
    const lvl = p.level>=2 ? 'lvl2' : p.level===1 ? 'lvl1' : '';
    return `
      <div class="browse-row">
        <div class="dot ${lvl}" title="Mastery"></div>
        <div class="browse-text">
          <div class="t">${escapeHtml(w.term)}${w.isCustom?'<span class="tag-custom">custom</span>':''}</div>
          <div class="d">${escapeHtml(w.def)}</div>
        </div>
        <div class="browse-actions">
          <button class="browse-star ${p.starred?'on':''}" data-id="${w.id}" title="Star">★</button>
          <button class="mini-btn danger" data-remove="${w.id}" title="Remove from my vocabulary">Remove</button>
        </div>
      </div>`;
  }).join('');
  list.querySelectorAll('.browse-star').forEach(btn=>{
    btn.onclick = ()=>{ toggleStar(btn.dataset.id); };
  });
  list.querySelectorAll('[data-remove]').forEach(btn=>{
    btn.onclick = ()=>{
      const id = btn.dataset.remove;
      const w = WORD_INDEX[id];
      const label = w ? w.term : 'this word';
      if(!confirm(`Remove "${label}" from your vocabulary? ${w && w.isCustom ? 'This deletes it permanently.' : 'You can restore it later from Manage.'}`)) return;
      removeWord(id);
      renderBrowseList();
      updateDeckCount();
    };
  });
}

function renderManage(){
  const app = document.getElementById('app');
  const removedWords = removedIds.map(id => MASTER_WORDS.find(w => w.id === id)).filter(Boolean);

  const customRows = customWords.length === 0
    ? `<div class="empty-note small">You haven't added any custom words yet.</div>`
    : customWords.map(w => `
        <div class="manage-row">
          <div class="browse-text">
            <div class="t">${escapeHtml(w.term)}<span class="tag-custom">custom</span></div>
            <div class="d">${escapeHtml(w.def)}</div>
          </div>
          <button class="mini-btn danger" data-remove-custom="${w.id}">Remove</button>
        </div>`).join('');

  const removedRows = removedWords.length === 0
    ? `<div class="empty-note small">No default words are currently hidden.</div>`
    : removedWords.map(w => `
        <div class="manage-row">
          <div class="browse-text">
            <div class="t">${escapeHtml(w.term)}</div>
            <div class="d">${escapeHtml(w.def)}</div>
          </div>
          <button class="mini-btn restore" data-restore="${w.id}">Restore</button>
        </div>`).join('');

  app.innerHTML = `
    <div class="manage-section">
      <h3>Add a word</h3>
      <div class="add-form">
        <input type="text" id="newTerm" placeholder="Term" maxlength="80" />
        <textarea id="newDef" placeholder="Definition" maxlength="400" rows="2"></textarea>
        <button id="addWordBtn">Add word</button>
        <div class="form-msg" id="addFormMsg"></div>
      </div>
    </div>
    <div class="manage-section">
      <h3>Your custom words (${customWords.length})</h3>
      ${customRows}
    </div>
    <div class="manage-section">
      <h3>Removed default words (${removedWords.length})</h3>
      ${removedRows}
    </div>
  `;

  document.getElementById('addWordBtn').onclick = () => {
    const term = document.getElementById('newTerm').value;
    const def = document.getElementById('newDef').value;
    const result = addCustomWord(term, def);
    const msg = document.getElementById('addFormMsg');
    msg.textContent = result.message;
    msg.className = 'form-msg' + (result.ok ? '' : ' err');
    if(result.ok){
      document.getElementById('newTerm').value = '';
      document.getElementById('newDef').value = '';
      renderManage();
    }
  };
  document.querySelectorAll('[data-remove-custom]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.removeCustom;
      const w = WORD_INDEX[id];
      if(!confirm(`Permanently remove "${w ? w.term : 'this word'}"?`)) return;
      removeWord(id);
      renderManage();
    };
  });
  document.querySelectorAll('[data-restore]').forEach(btn => {
    btn.onclick = () => {
      restoreDefaultWord(Number(btn.dataset.restore));
      renderManage();
    };
  });
}

function renderStats(){
  const app = document.getElementById('app');
  const mastered = ACTIVE_WORDS.filter(w=>progress[w.id] && progress[w.id].level>=2).length;
  const starred = ACTIVE_WORDS.filter(w=>progress[w.id] && progress[w.id].starred).length;
  const difficult = ACTIVE_WORDS.filter(w=>progress[w.id] && progress[w.id].misses>0).length;
  const accuracy = stats.attempts>0 ? Math.round((stats.correct/stats.attempts)*100) : null;
  app.innerHTML = `
    <div class="stat-grid">
      <div class="stat-box"><div class="num">${mastered}/${ACTIVE_WORDS.length}</div><div class="lbl">Marked known</div></div>
      <div class="stat-box"><div class="num">${starred}</div><div class="lbl">Starred</div></div>
      <div class="stat-box"><div class="num">${difficult}</div><div class="lbl">Missed at least once</div></div>
      <div class="stat-box"><div class="num">${accuracy===null?'—':accuracy+'%'}</div><div class="lbl">Learn accuracy (${stats.correct}/${stats.attempts})</div></div>
    </div>
    <p style="color:var(--ink-soft); font-family:var(--mono); font-size:.75em; text-align:center; line-height:1.7;">
      "Known" is set by tapping the checkmark on a flashcard, or by demonstrating a word reliably in a Learn round.<br>
      "Missed at least once" tracks words you've gotten wrong in Learn mode — these make up the Difficult scope and need a longer streak before Learn retires them.<br>
      Statistics only cover words currently in your active vocabulary.
    </p>
  `;
}

function letterGrade(pct){
  if(pct>=90) return 'A';
  if(pct>=80) return 'B';
  if(pct>=70) return 'C';
  if(pct>=60) return 'D';
  return 'F';
}
function chunkMatchWords(words){
  const chunks = [];
  let i = 0;
  const n = words.length;
  while(i < n){
    let size = Math.min(4, n-i);
    if(n-i-size === 1) size -= 1;
    if(size < 2) size = n-i;
    chunks.push(words.slice(i, i+size));
    i += size;
  }
  return chunks;
}
function assignTestTypes(words, typesSelected){
  const types = typesSelected.slice();
  const assignments = words.map(() => types[Math.floor(Math.random()*types.length)]);
  if(types.includes('match')){
    const matchCount = assignments.filter(t => t==='match').length;
    if(matchCount === 1){
      const idx = assignments.indexOf('match');
      const fallback = types.find(t => t!=='match');
      assignments[idx] = fallback || 'match';
    }
  }
  return assignments;
}
function makeTFItem(word, pool){
  let isTrue = Math.random() < 0.5;
  let shownDef;
  if(isTrue){
    shownDef = word.def;
  } else {
    const others = pool.filter(w => w.id !== word.id);
    shownDef = others.length ? others[Math.floor(Math.random()*others.length)].def : word.def;
    if(shownDef === word.def) isTrue = true;
  }
  return {type:'tf', word, shownDef, isTrue};
}
function makeMCItem(word, pool){
  const dir = Math.random() < 0.5 ? 'td' : 'dt';
  const distractorPool = pool.filter(w => w.id !== word.id);
  const distractors = shuffleArr(distractorPool).slice(0, Math.min(3, distractorPool.length));
  const correctText = dir==='td' ? word.def : word.term;
  const opts = distractors.map(d => dir==='td' ? d.def : d.term);
  opts.push(correctText);
  const choices = shuffleArr(opts);
  return {type:'mc', word, dir, choices, correctText};
}
function makeMatchItem(words){
  const shuffledDefs = shuffleArr(words.map(w => w.def));
  return {type:'match', words, shuffledDefs};
}
function buildTestItems(words, assignments, pool){
  const items = [];
  const matchWords = [];
  words.forEach((w,i) => {
    const t = assignments[i];
    if(t==='match') matchWords.push(w);
    else if(t==='tf') items.push(makeTFItem(w, pool));
    else items.push(makeMCItem(w, pool));
  });
  if(matchWords.length === 1){
    items.push(makeMCItem(matchWords[0], pool));
  } else if(matchWords.length >= 2){
    chunkMatchWords(matchWords).forEach(chunk => items.push(makeMatchItem(chunk)));
  }
  return shuffleArr(items);
}
function buildTest(){
  const N = Math.min(testConfig.count, ACTIVE_WORDS.length);
  const selectedTypes = Object.keys(testConfig.types).filter(k => testConfig.types[k]);
  testWords = shuffleArr(ACTIVE_WORDS).slice(0, N);
  const assignments = assignTestTypes(testWords, selectedTypes);
  testItems = buildTestItems(testWords, assignments, ACTIVE_WORDS);
  testAnswers = {};
  testScore = null;
  testPhase = 'active';
}
function rebuildSameTest(){
  const selectedTypes = Object.keys(testConfig.types).filter(k => testConfig.types[k]);
  const assignments = assignTestTypes(testWords, selectedTypes);
  testItems = buildTestItems(testWords, assignments, ACTIVE_WORDS);
  testAnswers = {};
  testScore = null;
  testPhase = 'active';
}
function isItemAnswered(item, idx){
  if(item.type==='match'){
    const ans = testAnswers[idx] || {};
    return item.words.every(w => ans[w.id]);
  }
  return testAnswers[idx] !== undefined && testAnswers[idx] !== null && testAnswers[idx] !== '';
}
function countUnanswered(){
  return testItems.reduce((acc,item,idx) => acc + (isItemAnswered(item,idx) ? 0 : 1), 0);
}
function submitTest(){
  let earned = 0;
  let total = 0;
  testItems.forEach((item, idx) => {
    if(item.type==='tf'){
      total += 1;
      const chosen = testAnswers[idx];
      const correct = chosen !== undefined && chosen === String(item.isTrue);
      item._correct = correct;
      item._chosen = chosen;
      if(correct) earned += 1;
    } else if(item.type==='mc'){
      total += 1;
      const chosen = testAnswers[idx];
      const correct = chosen === item.correctText;
      item._correct = correct;
      item._chosen = chosen;
      if(correct) earned += 1;
    } else {
      const answers = testAnswers[idx] || {};
      let chunkCorrect = 0;
      item.words.forEach(w => {
        total += 1;
        if(answers[w.id] === w.def) chunkCorrect += 1;
      });
      item._chunkCorrect = chunkCorrect;
      item._answers = answers;
      earned += chunkCorrect;
    }
  });
  testScore = {earned, total};
  testPhase = 'graded';
  if(total > 0 && earned === total) fireConfetti();
  render();
}
function handleSubmitTestClick(){
  const unanswered = countUnanswered();
  if(unanswered > 0){
    if(!confirm(`You have ${unanswered} unanswered question${unanswered===1?'':'s'}. Submit anyway?`)) return;
  }
  submitTest();
}
function choiceClass(graded, isCorrectOption, isChosenOption){
  let cls = 'choice';
  if(graded){
    if(isCorrectOption) cls += ' correct';
    else if(isChosenOption) cls += ' wrong';
  } else if(isChosenOption){
    cls += ' selected';
  }
  return cls;
}
function renderTF(item, idx, total, graded){
  const chosen = graded ? item._chosen : testAnswers[idx];
  const trueIsCorrect = item.isTrue === true;
  const trueChosen = chosen === 'true';
  const falseChosen = chosen === 'false';
  const trueCls = choiceClass(graded, trueIsCorrect, trueChosen);
  const falseCls = choiceClass(graded, !trueIsCorrect, falseChosen);
  const disabled = graded ? 'disabled' : '';
  return `
    <div class="test-q" data-idx="${idx}">
      <div class="tq-head"><span>QUESTION ${idx+1} OF ${total}</span><span>TRUE / FALSE</span></div>
      <div class="tq-prompt">Is this definition correct for <b>${escapeHtml(item.word.term)}</b>?<br>"${escapeHtml(item.shownDef)}"</div>
      <button class="${trueCls}" data-idx="${idx}" data-type="tf" data-val="true" ${disabled}>True</button>
      <button class="${falseCls}" data-idx="${idx}" data-type="tf" data-val="false" ${disabled}>False</button>
      ${graded && !item._correct ? `<div class="feedback bad">Correct answer: ${item.isTrue ? 'True' : 'False'}</div>` : ''}
    </div>`;
}
function renderMC(item, idx, total, graded){
  const chosen = graded ? item._chosen : testAnswers[idx];
  const promptLabel = item.dir==='td' ? 'What is the definition of' : 'Which word means';
  const promptText = item.dir==='td' ? item.word.term : item.word.def;
  const btns = item.choices.map(c => {
    const isCorrectOpt = c === item.correctText;
    const isChosenOpt = c === chosen;
    const cls = choiceClass(graded, isCorrectOpt, isChosenOpt);
    return `<button class="${cls}" data-idx="${idx}" data-type="mc" data-text="${escapeHtml(c)}" ${graded?'disabled':''}>${escapeHtml(c)}</button>`;
  }).join('');
  return `
    <div class="test-q" data-idx="${idx}">
      <div class="tq-head"><span>QUESTION ${idx+1} OF ${total}</span><span>MULTIPLE CHOICE</span></div>
      <div class="tq-prompt"><b>${escapeHtml(promptLabel)}</b> ${escapeHtml(promptText)}?</div>
      ${btns}
      ${graded && !item._correct ? `<div class="feedback bad">Correct answer: ${escapeHtml(item.correctText)}</div>` : ''}
    </div>`;
}
function renderMatchQ(item, idx, total, graded){
  const answers = graded ? (item._answers || {}) : (testAnswers[idx] || {});
  const rows = item.words.map(w => {
    const chosen = answers[w.id] || '';
    const isCorrect = chosen === w.def;
    const rowCls = graded ? (isCorrect ? 'match-row ok' : 'match-row bad') : 'match-row';
    const opts = ['<option value="">Choose a definition…</option>']
      .concat(item.shuffledDefs.map(d => `<option value="${escapeHtml(d)}" ${chosen===d?'selected':''}>${escapeHtml(d)}</option>`));
    return `<div class="${rowCls}">
      <div class="mr-term">${escapeHtml(w.term)}</div>
      <select data-idx="${idx}" data-wordid="${w.id}" data-type="match" ${graded?'disabled':''}>${opts.join('')}</select>
      ${graded && !isCorrect ? `<span class="mr-correct">Correct: ${escapeHtml(w.def)}</span>` : ''}
    </div>`;
  }).join('');
  return `
    <div class="test-q" data-idx="${idx}">
      <div class="tq-head"><span>QUESTION ${idx+1} OF ${total}</span><span>MATCHING · ${item.words.length} PAIRS</span></div>
      <div class="tq-prompt">Match each term to its definition.</div>
      ${rows}
    </div>`;
}
function renderTestItemHtml(item, idx, total, graded){
  if(item.type==='tf') return renderTF(item, idx, total, graded);
  if(item.type==='mc') return renderMC(item, idx, total, graded);
  return renderMatchQ(item, idx, total, graded);
}
function wireTestInputs(){
  document.querySelectorAll('.test-q').forEach(qEl => {
    const idx = Number(qEl.dataset.idx);
    qEl.querySelectorAll('button.choice[data-type="tf"], button.choice[data-type="mc"]').forEach(btn => {
      btn.addEventListener('click', () => {
        qEl.querySelectorAll('button.choice').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if(btn.dataset.type==='tf') testAnswers[idx] = btn.dataset.val;
        else testAnswers[idx] = btn.dataset.text;
      });
    });
    qEl.querySelectorAll('select[data-type="match"]').forEach(sel => {
      sel.addEventListener('change', () => {
        if(!testAnswers[idx]) testAnswers[idx] = {};
        testAnswers[idx][sel.dataset.wordid] = sel.value;
      });
    });
  });
}
function renderTestGraded(){
  const app = document.getElementById('app');
  const pct = testScore.total > 0 ? Math.round((testScore.earned/testScore.total)*100) : 0;
  const grade = letterGrade(pct);
  let html = `<div class="learn-card" style="max-width:min(760px,94vw); margin:0 auto;">
      <div class="complete" style="padding: clamp(14px,3vw,20px) 0;">
        <h2>Test complete</h2>
        <div class="recap-score">${testScore.earned} / ${testScore.total} · ${pct}% · Grade ${grade}</div>
      </div>`;
  html += testItems.map((item,idx) => renderTestItemHtml(item, idx, testItems.length, true)).join('');
  html += `<div class="row" style="margin-top:24px; gap:12px;">
        <button class="iconbtn big" id="retakeTestBtn">Retake this test</button>
        <button class="iconbtn big" id="newTestBtn">New test</button>
      </div></div>`;
  app.innerHTML = html;
  document.getElementById('retakeTestBtn').onclick = () => { rebuildSameTest(); render(); };
  document.getElementById('newTestBtn').onclick = () => { testPhase = 'setup'; render(); openTestSetup(); };
}
function renderTest(){
  const app = document.getElementById('app');
  if(testPhase === 'active'){
    app.innerHTML = `<div class="learn-card" style="max-width:min(760px,94vw); margin:0 auto;">
        <div class="learn-eyebrow"><span>TEST</span><span>${testItems.length} QUESTIONS</span></div>
        ${testItems.map((item,idx) => renderTestItemHtml(item, idx, testItems.length, false)).join('')}
        <div class="row" style="margin-top:24px;"><button class="iconbtn big" id="submitTestBtn">Submit Test</button></div>
      </div>`;
    wireTestInputs();
    document.getElementById('submitTestBtn').onclick = handleSubmitTestClick;
  } else if(testPhase === 'graded'){
    renderTestGraded();
  } else {
    app.innerHTML = `<div class="empty-note">Configure a test to get started.<br><button class="iconbtn big" style="margin-top:14px;" id="openTestSetupBtn">Set up a test</button></div>`;
    document.getElementById('openTestSetupBtn').onclick = openTestSetup;
  }
}

function render(){
  if(currentMode==='flash') renderFlash();
  else if(currentMode==='learn') renderLearn();
  else if(currentMode==='match') renderMatch();
  else if(currentMode==='browse') renderBrowse();
  else if(currentMode==='manage') renderManage();
  else if(currentMode==='stats') renderStats();
  else if(currentMode==='test') renderTest();
}
function switchMode(mode){
  if(mode===currentMode) return;
  stopAutoplay();
  if(currentMode==='match') stopMatchTimer();
  currentMode = mode;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.mode===mode));
  if(mode==='flash') buildFlashDeck();
  else if(mode==='learn') buildLearnRound();
  else if(mode==='match') buildMatch();
  render();
  if(mode==='flash' && settings.autoplay) scheduleAutoplay();
  if(mode==='test' && testPhase==='setup') openTestSetup();
}

const SEG_BINDINGS = [
  ['segDirection','direction'], ['segScope','scope'], ['segOrder','order'],
  ['segBatch','batchSize'], ['segChoices','choices'], ['segInput','input'],
  ['segFont','fontScale'], ['segTheme','theme'], ['segAutoSpeed','autoSpeed'],
];
const TOGGLE_BINDINGS = [['toggleAutoplay','autoplay'], ['toggleSound','sound']];

function syncSettingsUI(){
  SEG_BINDINGS.forEach(([segId,key]) => {
    const seg = document.getElementById(segId);
    if(!seg) return;
    seg.querySelectorAll('button').forEach(btn => btn.classList.toggle('active', String(settings[key])===btn.dataset.v));
  });
  TOGGLE_BINDINGS.forEach(([toggleId,key]) => {
    const el = document.getElementById(toggleId);
    if(!el) return;
    el.classList.toggle('on', !!settings[key]);
    el.setAttribute('aria-checked', String(!!settings[key]));
  });
}
function segWire(id, key, after){
  const seg = document.getElementById(id);
  seg.querySelectorAll('button').forEach(btn=>{
    btn.onclick = ()=>{
      settings[key] = isNaN(Number(btn.dataset.v)) ? btn.dataset.v : Number(btn.dataset.v);
      seg.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b===btn));
      saveAll();
      if(after) after();
    };
  });
}
function toggleWire(id, key, after){
  const el = document.getElementById(id);
  el.setAttribute('role','switch');
  el.tabIndex = 0;
  const flip = ()=>{
    settings[key] = !settings[key];
    el.classList.toggle('on', settings[key]);
    el.setAttribute('aria-checked', String(settings[key]));
    saveAll();
    if(after) after();
  };
  el.onclick = flip;
  el.onkeydown = (e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flip(); } };
}
function rebuildCurrentMode(){
  if(currentMode==='flash') buildFlashDeck();
  else if(currentMode==='learn') buildLearnRound();
  else if(currentMode==='match') buildMatch();
  render();
}
function initSettingsPanel(){
  segWire('segDirection','direction');
  segWire('segScope','scope', rebuildCurrentMode);
  segWire('segOrder','order', rebuildCurrentMode);
  segWire('segBatch','batchSize', ()=>{ if(currentMode==='learn') rebuildCurrentMode(); });
  segWire('segChoices','choices');
  segWire('segInput','input');
  segWire('segFont','fontScale', applyTheme);
  segWire('segTheme','theme', applyTheme);
  segWire('segAutoSpeed','autoSpeed', ()=>{ if(settings.autoplay) scheduleAutoplay(); });
  toggleWire('toggleAutoplay','autoplay', ()=>{ if(settings.autoplay && currentMode==='flash') scheduleAutoplay(); else stopAutoplay(); });
  toggleWire('toggleSound','sound');
  syncSettingsUI();

  document.getElementById('gearBtn').onclick = ()=>{
    document.getElementById('drawer').classList.add('open');
    document.getElementById('overlay').classList.add('open');
  };
  const closeDrawer = ()=>{
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  };
  document.getElementById('closeDrawer').onclick = closeDrawer;
  document.getElementById('overlay').onclick = closeDrawer;

  document.getElementById('complianceBtn').onclick = ()=>{
    document.getElementById('complianceModal').classList.add('open');
    document.getElementById('complianceOverlay').classList.add('open');
  };
  const closeCompliance = ()=>{
    document.getElementById('complianceModal').classList.remove('open');
    document.getElementById('complianceOverlay').classList.remove('open');
  };
  document.getElementById('closeCompliance').onclick = closeCompliance;
  document.getElementById('complianceOverlay').onclick = closeCompliance;

  document.getElementById('infoBtn').onclick = ()=>{
    document.getElementById('infoModal').classList.add('open');
    document.getElementById('infoOverlay').classList.add('open');
  };
  const closeInfo = ()=>{
    document.getElementById('infoModal').classList.remove('open');
    document.getElementById('infoOverlay').classList.remove('open');
  };
  document.getElementById('closeInfo').onclick = closeInfo;
  document.getElementById('infoOverlay').onclick = closeInfo;

  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeDrawer(); closeCompliance(); closeInfo(); closeTestSetup(); } });

  document.getElementById('resetBtn').onclick = ()=>{
    if(!confirm('Clear all local data? This permanently deletes your custom words, restores removed default words, and wipes all progress, statistics, and settings on this device. This cannot be undone.')) return;
    clearAllLocalData();
    syncSettingsUI();
    applyTheme();
    currentMode = 'flash';
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.mode==='flash'));
    rebuildCurrentMode();
  };
}

function openTestSetup(){
  syncTestSetupUI();
  document.getElementById('testSetupModal').classList.add('open');
  document.getElementById('testSetupOverlay').classList.add('open');
}
function closeTestSetup(){
  const modal = document.getElementById('testSetupModal');
  const overlay = document.getElementById('testSetupOverlay');
  if(modal) modal.classList.remove('open');
  if(overlay) overlay.classList.remove('open');
}
function syncTestSetupUI(){
  const max = Math.max(3, ACTIVE_WORDS.length);
  if(testConfig.count > max) testConfig.count = max;
  if(testConfig.count < 3) testConfig.count = Math.min(3, max);
  [['testTypeTF','tf'],['testTypeMC','mc'],['testTypeMatch','match']].forEach(([id,key]) => {
    const el = document.getElementById(id);
    el.classList.toggle('on', !!testConfig.types[key]);
    el.setAttribute('aria-checked', String(!!testConfig.types[key]));
  });
  document.getElementById('testCountInput').value = testConfig.count;
  document.getElementById('testCountInput').max = max;
  document.getElementById('testCountMax').textContent = `max ${ACTIVE_WORDS.length} available`;
  document.querySelectorAll('#testCountPresets button').forEach(b => {
    const v = b.dataset.v==='all' ? max : Number(b.dataset.v);
    b.classList.toggle('active', v === testConfig.count);
    b.disabled = b.dataset.v!=='all' && Number(b.dataset.v) > ACTIVE_WORDS.length;
  });
  document.getElementById('testSetupMsg').textContent = '';
}
function wireTestTypeSwitch(id, key){
  const el = document.getElementById(id);
  el.setAttribute('role','switch');
  el.tabIndex = 0;
  const flip = ()=>{
    const activeCount = Object.values(testConfig.types).filter(Boolean).length;
    if(testConfig.types[key] && activeCount<=1){
      document.getElementById('testSetupMsg').textContent = 'At least one question type must be selected.';
      return;
    }
    testConfig.types[key] = !testConfig.types[key];
    syncTestSetupUI();
  };
  el.onclick = flip;
  el.onkeydown = (e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flip(); } };
}
function initTestSetupPanel(){
  wireTestTypeSwitch('testTypeTF','tf');
  wireTestTypeSwitch('testTypeMC','mc');
  wireTestTypeSwitch('testTypeMatch','match');

  document.querySelectorAll('#testCountPresets button').forEach(b => {
    b.onclick = ()=>{
      const max = Math.max(3, ACTIVE_WORDS.length);
      const v = b.dataset.v==='all' ? max : Number(b.dataset.v);
      testConfig.count = Math.max(3, Math.min(v, max));
      syncTestSetupUI();
    };
  });
  const countInput = document.getElementById('testCountInput');
  countInput.addEventListener('change', ()=>{
    const max = Math.max(3, ACTIVE_WORDS.length);
    let val = Number(countInput.value);
    if(!Number.isFinite(val) || val<3) val = 3;
    if(val>max) val = max;
    testConfig.count = val;
    syncTestSetupUI();
  });

  document.getElementById('startTestBtn').onclick = ()=>{
    const msg = document.getElementById('testSetupMsg');
    if(ACTIVE_WORDS.length < 3){
      msg.textContent = 'You need at least 3 words in your vocabulary to take a test.';
      return;
    }
    const selectedTypes = Object.keys(testConfig.types).filter(k => testConfig.types[k]);
    if(selectedTypes.length===0){
      msg.textContent = 'Select at least one question type.';
      return;
    }
    buildTest();
    closeTestSetup();
    render();
  };
  document.getElementById('cancelTestSetupBtn').onclick = ()=>{ closeTestSetup(); render(); };
  document.getElementById('closeTestSetup').onclick = ()=>{ closeTestSetup(); render(); };
  document.getElementById('testSetupOverlay').onclick = ()=>{ closeTestSetup(); render(); };
}

document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.onclick = ()=> switchMode(btn.dataset.mode);
});
document.addEventListener('keydown', e=>{
  if(currentMode!=='flash') return;
  const tag = (e.target && e.target.tagName) || '';
  if(tag==='INPUT'||tag==='TEXTAREA') return;
  if(e.key==='ArrowRight') flashNext();
  else if(e.key==='ArrowLeft') flashPrev();
  else if(e.key===' '){ e.preventDefault(); if(flashDeck.length){ flashFlipped=!flashFlipped; renderFlash(); } }
  else if(e.key.toLowerCase()==='s'){ const w=flashDeck[flashIdx]; if(w) toggleStar(w.id); }
  else if(e.key.toLowerCase()==='k'){ const w=flashDeck[flashIdx]; if(w) toggleKnown(w.id); }
});

(function init(){
  loadAll();
  applyTheme();
  initSettingsPanel();
  initTestSetupPanel();
  buildFlashDeck();
  render();
  if(settings.autoplay) scheduleAutoplay();
})();
