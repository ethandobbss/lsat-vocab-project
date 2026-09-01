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

const WORDS = RAW_WORDS.map((w,i)=>({id:i, term:w[0], def:w[1]}));

// ---------- state ----------
let settings = {
  direction:'td', scope:'all', order:'shuffle', batchSize:5, choices:4, input:'progressive',
  fontScale:1, theme:'day', sound:false, autoplay:false, autoSpeed:'normal'
};
// progress[id] holds only durable, cross-session facts about a word.
// Anything specific to the current Learn round lives in learnRoundStats instead.
let progress = {};
WORDS.forEach(w => progress[w.id] = {starred:false, level:0, attempts:0, correct:0, misses:0});
let stats = { attempts:0, correct:0 };

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

// ================= Learn engine =================
// Model: a fixed pool of words for this round. Each word has round-local stats
// (streak, attempts this round, last result, retired flag) used to compute a
// priority score. Small batches are pulled from the pool by priority, answered
// one at a time, then a recap is shown before pulling the next batch — mirroring
// "small batch -> evaluate -> update mastery estimate -> select next batch -> repeat".
let learnPool = [];          // array of word ids in this round
let learnRoundStats = {};    // id -> {streak, attemptsThisRound, lastResult, retired}
let learnBatch = [];         // array of {id} for the current batch
let learnBatchPos = 0;       // index within the current batch
let learnBatchNumber = 0;
let learnBatchResults = [];  // [{id, correct, dir, mode}] for the recap screen
let learnPhase = 'question'; // 'question' | 'recap' | 'complete'
let learnCurrent = null;     // the question currently being asked
let learnAwaitingNext = false;

function requiredStreak(id){
  // Words that have ever been missed historically need to be demonstrated
  // more than once before we treat them as no longer at risk of being forgotten.
  return progress[id].misses > 0 ? 3 : 2;
}
function priorityScore(id){
  const r = learnRoundStats[id];
  if(r.retired) return -Infinity;
  let score = 0;
  if(r.attemptsThisRound === 0) score += 4;               // introduce unseen terms
  if(r.lastResult === 'incorrect') score += 6;             // pull missed terms back soon
  score += Math.max(0, requiredStreak(id) - r.streak) * 1.5; // distance from demonstrated mastery
  const hist = progress[id];
  const histAcc = hist.attempts > 0 ? hist.correct / hist.attempts : 1;
  score += (1 - histAcc) * 3;                              // historically difficult terms surface more
  score += Math.random() * 0.8;                            // light jitter so batches don't feel robotic
  return score;
}
function reasonTag(id){
  const r = learnRoundStats[id];
  if(r.attemptsThisRound === 0) return {cls:'new', text:'New term'};
  if(r.lastResult === 'incorrect') return {cls:'review', text:'Review — missed last time'};
  if(r.streak >= 1 && r.streak < requiredStreak(id)) return {cls:'confirm', text:'Confirming recall'};
  return {cls:'', text:'Reviewing'};
}
function questionModeFor(id){
  if(settings.input === 'mc') return 'mc';
  if(settings.input === 'type') return 'type';
  return learnRoundStats[id].streak >= 1 ? 'type' : 'mc'; // adaptive: recognition first, then active recall
}
function buildLearnRound(){
  learnPool = scopedWords().map(w => w.id);
  learnRoundStats = {};
  learnPool.forEach(id => { learnRoundStats[id] = {streak:0, attemptsThisRound:0, lastResult:null, retired:false}; });
  learnBatchNumber = 0;
  learnAwaitingNext = false;
  startNextBatch();
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
  const w = WORDS[id];
  const dir = dirForCard();
  const mode = questionModeFor(id);
  let choices = null;
  if(mode === 'mc'){
    const pool = WORDS.filter(x => x.id !== id);
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
  if(learnPool.length === 0) buildLearnRound();
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
    bodyHtml = choices.map((c,i) => `<button class="choice" data-i="${i}">${c}</button>`).join('');
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
      <span class="badge ${tag.cls}">${tag.text}</span>
      <div class="learn-q"><b>${promptLabel}</b> ${dir==='td' ? '' : ''}</div>
      <div class="learn-q"><b>${promptText}</b></div>
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
      ? 'Correct — demonstrated reliably. Retired from this round and marked known.'
      : 'Correct.';
    fb.className = 'feedback ok';
  } else {
    fb.textContent = `Not quite — this will come back for review soon. Answer: ${correctText}`;
    fb.className = 'feedback bad';
  }

  learnBatchResults.push({id, correct:isCorrect, dir, mode});
  saveState();

  learnAwaitingNext = true;
  setTimeout(() => {
    learnAwaitingNext = false;
    learnBatchPos += 1;
    if(learnBatchPos < learnBatch.length){
      renderLearnQuestion();
    } else {
      learnPhase = 'recap';
      renderLearnRecap();
    }
  }, isCorrect ? 650 : 1700);
}
function renderLearnRecap(){
  const app = document.getElementById('app');
  const correctCount = learnBatchResults.filter(r => r.correct).length;
  const rows = learnBatchResults.map(r => {
    const w = WORDS[r.id];
    const rs = learnRoundStats[r.id];
    let note;
    if(r.correct && rs.retired) note = 'mastered this round';
    else if(r.correct) note = 'building recall — will be asked again';
    else note = 'missed — prioritized for the next batch';
    return `
      <li>
        <span class="mark ${r.correct?'ok':'bad'}">${r.correct?'✓':'✕'}</span>
        <span class="term">${w.term}</span>
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

// ---------- persistence ----------
async function loadState(){
  try{
    const s = await window.storage.get('settings', false);
    if(s && s.value) Object.assign(settings, JSON.parse(s.value));
  }catch(e){ /* no saved settings yet */ }
  try{
    const p = await window.storage.get('progress', false);
    if(p && p.value) Object.assign(progress, JSON.parse(p.value));
  }catch(e){ /* no saved progress yet */ }
  try{
    const st = await window.storage.get('stats', false);
    if(st && st.value) Object.assign(stats, JSON.parse(st.value));
  }catch(e){ /* no saved stats yet */ }
}
let saveTimer = null;
function saveState(){
  const tag = document.getElementById('saveTag');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try{ await window.storage.set('settings', JSON.stringify(settings), false); }catch(e){}
    try{ await window.storage.set('progress', JSON.stringify(progress), false); }catch(e){}
    try{ await window.storage.set('stats', JSON.stringify(stats), false); }catch(e){}
    if(tag){ tag.classList.add('show'); setTimeout(() => tag.classList.remove('show'), 900); }
  }, 300);
}

// ---------- audio ----------
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
  }catch(e){ /* audio unavailable */ }
}

// ---------- helpers ----------
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
  if(settings.scope==='starred') return WORDS.filter(w=>progress[w.id].starred);
  if(settings.scope==='unmastered') return WORDS.filter(w=>progress[w.id].level<2);
  if(settings.scope==='difficult') return WORDS.filter(w=>progress[w.id].misses>0);
  return WORDS.slice();
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
  return `<div class="empty-note">No cards match "${scopeLabel()}" yet.<br>Star a few words in Browse, or open Customize to change scope.</div>`;
}
function stopAutoplay(){ clearTimeout(autoplayTimer); autoplayTimer = null; }
function stopMatchTimer(){ clearInterval(matchTimerInterval); matchTimerInterval = null; }
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ---------- flashcards ----------
function buildFlashDeck(){
  const list = scopedWords();
  flashDeck = orderList(list).map(w => ({...w, _dir: dirForCard()}));
  flashIdx = 0;
  flashFlipped = false;
  stopAutoplay();
}
function renderFlash(){
  const app = document.getElementById('app');
  if(flashDeck.length===0){ app.innerHTML = emptyScopeNote(); return; }
  const w = flashDeck[flashIdx];
  const dir = w._dir;
  const front = dir==='td' ? {cls:'term', text:w.term} : {cls:'def', text:w.def};
  const back = dir==='td' ? {cls:'def', text:w.def} : {cls:'term', text:w.term};
  const pct = Math.round(((flashIdx+1)/flashDeck.length)*100);
  const p = progress[w.id];
  app.innerHTML = `
    <div class="stage">
      <div class="progressbar"><div style="width:${pct}%"></div></div>
      <div class="card ${flashFlipped?'flipped':''}" id="flashCard" role="button" tabindex="0" aria-label="Flip card">
        <div class="card-inner">
          <div class="face front"><div class="idx"><span>No. ${String(w.id+1).padStart(3,'0')} — ${flashIdx+1} / ${flashDeck.length}</span>${p.level>=2?'<span class="known-tag">✓ known</span>':''}</div><div class="content"><div class="${front.cls}">${front.text}</div></div></div>
          <div class="face back"><div class="idx">No. ${String(w.id+1).padStart(3,'0')}</div><div class="content"><div class="${back.cls}">${back.text}</div></div></div>
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
  cardEl.onclick = flip;
  cardEl.onkeydown = (e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); flip(); } };
  document.getElementById('prevBtn').onclick = (e)=>{ e.stopPropagation(); flashPrev(); };
  document.getElementById('nextBtn').onclick = (e)=>{ e.stopPropagation(); flashNext(); };
  document.getElementById('starBtn').onclick = (e)=>{ e.stopPropagation(); toggleStar(w.id); };
  document.getElementById('knownBtn').onclick = (e)=>{ e.stopPropagation(); toggleKnown(w.id); };
}
function toggleStar(id){ progress[id].starred = !progress[id].starred; saveState(); render(); }
function toggleKnown(id){ progress[id].level = progress[id].level>=2 ? 0 : 2; saveState(); render(); }
function flashNext(){
  flashFlipped=false;
  flashIdx = (flashIdx+1) % flashDeck.length;
  renderFlash();
  if(settings.autoplay) scheduleAutoplay();
}
function flashPrev(){
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

// ---------- match ----------
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
  if(matchTiles.length===0){
    app.innerHTML = `<div class="empty-note">Match needs at least 2 words in "${scopeLabel()}".<br>Star more words, or widen the scope in Customize.</div>`;
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

// ---------- browse ----------
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
  const q = browseQuery.trim().toLowerCase();
  const filtered = WORDS.filter(w => !q || w.term.toLowerCase().includes(q) || w.def.toLowerCase().includes(q));
  if(filtered.length===0){
    list.innerHTML = `<div class="empty-note">No entries match “${escapeHtml(browseQuery)}”.</div>`;
    return;
  }
  list.innerHTML = filtered.map(w=>{
    const p = progress[w.id];
    const lvl = p.level>=2 ? 'lvl2' : p.level===1 ? 'lvl1' : '';
    return `
      <div class="browse-row">
        <div class="dot ${lvl}" title="Mastery"></div>
        <div class="browse-text">
          <div class="t">${w.term}</div>
          <div class="d">${w.def}</div>
        </div>
        <button class="browse-star ${p.starred?'on':''}" data-id="${w.id}" title="Star">★</button>
      </div>`;
  }).join('');
  list.querySelectorAll('.browse-star').forEach(btn=>{
    btn.onclick = ()=>{ toggleStar(Number(btn.dataset.id)); };
  });
}

// ---------- stats ----------
function renderStats(){
  const app = document.getElementById('app');
  const mastered = WORDS.filter(w=>progress[w.id].level>=2).length;
  const starred = WORDS.filter(w=>progress[w.id].starred).length;
  const difficult = WORDS.filter(w=>progress[w.id].misses>0).length;
  const accuracy = stats.attempts>0 ? Math.round((stats.correct/stats.attempts)*100) : null;
  app.innerHTML = `
    <div class="stat-grid">
      <div class="stat-box"><div class="num">${mastered}/${WORDS.length}</div><div class="lbl">Marked known</div></div>
      <div class="stat-box"><div class="num">${starred}</div><div class="lbl">Starred</div></div>
      <div class="stat-box"><div class="num">${difficult}</div><div class="lbl">Missed at least once</div></div>
      <div class="stat-box"><div class="num">${accuracy===null?'—':accuracy+'%'}</div><div class="lbl">Learn accuracy (${stats.correct}/${stats.attempts})</div></div>
    </div>
    <p style="color:var(--ink-soft); font-family:var(--mono); font-size:.75em; text-align:center; line-height:1.7;">
      "Known" is set by tapping ✓ on a flashcard, or by demonstrating a word reliably in a Learn round.<br>
      "Missed at least once" tracks words you've gotten wrong in Learn mode — these make up the Difficult scope and need a longer streak before Learn retires them.
    </p>
  `;
}

// ---------- rendering / mode switch ----------
function render(){
  if(currentMode==='flash') renderFlash();
  else if(currentMode==='learn') renderLearn();
  else if(currentMode==='match') renderMatch();
  else if(currentMode==='browse') renderBrowse();
  else if(currentMode==='stats') renderStats();
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
}

// ---------- settings UI wiring ----------
function segWire(id, key, after){
  const seg = document.getElementById(id);
  seg.querySelectorAll('button').forEach(btn=>{
    btn.classList.toggle('active', String(settings[key])===btn.dataset.v);
    btn.onclick = ()=>{
      settings[key] = isNaN(Number(btn.dataset.v)) ? btn.dataset.v : Number(btn.dataset.v);
      seg.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b===btn));
      saveState();
      if(after) after();
    };
  });
}
function toggleWire(id, key, after){
  const el = document.getElementById(id);
  el.classList.toggle('on', !!settings[key]);
  el.setAttribute('role','switch');
  el.setAttribute('aria-checked', String(!!settings[key]));
  el.tabIndex = 0;
  const flip = ()=>{
    settings[key] = !settings[key];
    el.classList.toggle('on', settings[key]);
    el.setAttribute('aria-checked', String(settings[key]));
    saveState();
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

  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeDrawer(); closeCompliance(); } });

  document.getElementById('resetBtn').onclick = ()=>{
    if(!confirm('Reset all star marks, mastery, and stats? This cannot be undone.')) return;
    WORDS.forEach(w => progress[w.id] = {starred:false, level:0, attempts:0, correct:0, misses:0});
    stats = {attempts:0, correct:0};
    saveState();
    rebuildCurrentMode();
  };
}

document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.onclick = ()=> switchMode(btn.dataset.mode);
});
document.addEventListener('keydown', e=>{
  if(currentMode!=='flash') return;
  const tag = (e.target && e.target.tagName) || '';
  if(tag==='INPUT') return;
  if(e.key==='ArrowRight') flashNext();
  else if(e.key==='ArrowLeft') flashPrev();
  else if(e.key===' '){ e.preventDefault(); flashFlipped=!flashFlipped; renderFlash(); }
  else if(e.key.toLowerCase()==='s'){ const w=flashDeck[flashIdx]; if(w) toggleStar(w.id); }
  else if(e.key.toLowerCase()==='k'){ const w=flashDeck[flashIdx]; if(w) toggleKnown(w.id); }
});

(async function init(){
  await loadState();
  applyTheme();
  document.getElementById('deckCount').textContent = WORDS.length + ' entries';
  initSettingsPanel();
  buildFlashDeck();
  render();
  if(settings.autoplay) scheduleAutoplay();
})();
