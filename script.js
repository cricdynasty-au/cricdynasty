/* ================= constants ================= */

const BASE_YEAR = 2026; // season N = BASE_YEAR + N

const COUNTRIES = [
  { name: "India", flag: "🇮🇳" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "West Indies", flag: "🌴" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Afghanistan", flag: "🇦🇫" },
];

// relative strength of each national side — the harder-to-move axis that gates tournament success
const NATION_STRENGTH = {
  "India": 90, "Australia": 89, "England": 87, "South Africa": 82, "New Zealand": 80,
  "Pakistan": 78, "Sri Lanka": 68, "West Indies": 65, "Bangladesh": 60, "Afghanistan": 55,
};

// brand colour per board — used to re-theme the whole app on selection
const THEMES = {
  "India": { accent: "#2563eb", accent2: "#f2b632", text: "#eaf1ff" },
  "Australia": { accent: "#1f7a44", accent2: "#ffd400", text: "#eafff0" },
  "England": { accent: "#13285e", accent2: "#c8102e", text: "#eef1ff" },
  "Pakistan": { accent: "#0b6623", accent2: "#ffffff", text: "#eafff0" },
  "South Africa": { accent: "#00795d", accent2: "#f2c14e", text: "#eafff8" },
  "New Zealand": { accent: "#5c6470", accent2: "#e5e7eb", text: "#f5f5f6" },
  "West Indies": { accent: "#7a0019", accent2: "#f2c14e", text: "#ffeef1" },
  "Sri Lanka": { accent: "#123a7a", accent2: "#f2c14e", text: "#eaf1ff" },
  "Bangladesh": { accent: "#046a38", accent2: "#e2231a", text: "#eafff2" },
  "Afghanistan": { accent: "#1a56db", accent2: "#d32011", text: "#eaf1ff" },
  "default": { accent: "#5fd97a", accent2: "#f2c14e", text: "#06130a" },
};

// special palette while a World Cup / final is live — reverts to the board colour once it's over
const TOURNAMENT_THEMES = {
  "ICC ODI World Cup": { accent: "#1a56db", accent2: "#f2c14e", text: "#f5f8ff" },
  "ICC T20 World Cup": { accent: "#c026d3", accent2: "#22d3ee", text: "#fdf4ff" },
  "World Test Championship Final": { accent: "#7c2d12", accent2: "#f2c14e", text: "#fff7ed" },
};

const ROLES = [
  { key: "Batsman", icon: "🏏", desc: "Score runs, chase milestones with the bat." },
  { key: "Bowler", icon: "🎯", desc: "Take wickets, hunt five-fers." },
  { key: "All-rounder", icon: "⚡", desc: "Contribute with both bat and ball." },
  { key: "Wicketkeeper-Batsman", icon: "🧤", desc: "Bat, keep, and grab dismissals behind the stumps." },
];

const BAT_HANDS = ["Right-handed", "Left-handed"];
const PACE_SUBSTYLES = ["Right-arm Fast", "Right-arm Fast-medium", "Left-arm Fast", "Left-arm Fast-medium"];
const SPIN_SUBSTYLES = ["Right-arm Off-spin", "Right-arm Leg-spin", "Left-arm Orthodox", "Left-arm Wrist-spin"];

const FORMATS = [
  { key: "LONG", icon: "📅", title: "Long Format", desc: "First-class cricket for your home region, then Test caps. Patient innings, long spells, the purest test of a career." },
  { key: "SHORT", icon: "⚡", title: "Short Format", desc: "Sign with a T20 franchise in your home league. Fast cricket, big money, quick call-ups to the national T20I side." },
  { key: "ALL_ROUND", icon: "🌐", title: "All-Round", desc: "Play first-class cricket for your region, turn out for a franchise on the side, and get picked across Tests, ODIs and T20Is." },
];

const FC_TEAMS = {
  "India": ["Mumbai", "Tamil Nadu", "Delhi", "Karnataka", "Maharashtra", "Punjab", "Baroda", "Saurashtra", "Vidarbha", "Bengal"],
  "Australia": ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania"],
  "England": ["Yorkshire", "Surrey", "Lancashire", "Middlesex", "Warwickshire", "Somerset", "Essex", "Kent", "Nottinghamshire", "Hampshire"],
  "Pakistan": ["Sindh", "Central Punjab", "Southern Punjab", "Khyber Pakhtunkhwa", "Balochistan", "Northern"],
  "South Africa": ["Western Province", "Gauteng", "KwaZulu-Natal", "Eastern Province", "North West", "Free State", "Boland", "Easterns"],
  "New Zealand": ["Auckland", "Wellington", "Canterbury", "Otago", "Central Districts", "Northern Districts"],
  "West Indies": ["Jamaica", "Barbados", "Trinidad and Tobago", "Guyana", "Leeward Islands", "Windward Islands"],
  "Sri Lanka": ["Sinhalese SC", "Nondescripts CC", "Colts CC", "Bloomfield C&AC", "Moors SC", "Chilaw Marians"],
  "Bangladesh": ["Dhaka Division", "Chittagong Division", "Khulna Division", "Rajshahi Division", "Barisal Division", "Sylhet Division"],
  "Afghanistan": ["Kabul Region", "Nangarhar", "Balkh", "Kandahar", "Paktia", "Boost Region"],
};

const T20_FRANCHISES = {
  "India": ["Chennai Super Kings", "Mumbai Indians", "Royal Challengers Bengaluru", "Kolkata Knight Riders", "Delhi Capitals", "Punjab Kings", "Rajasthan Royals", "Sunrisers Hyderabad", "Gujarat Titans", "Lucknow Super Giants"],
  "Australia": ["Melbourne Renegades", "Melbourne Stars", "Sydney Sixers", "Sydney Thunder", "Perth Scorchers", "Adelaide Strikers", "Brisbane Heat", "Hobart Hurricanes"],
  "England": ["Manchester Originals", "London Spirit", "Oval Invincibles", "Birmingham Phoenix", "Trent Rockets", "Southern Brave", "Northern Superchargers", "Welsh Fire"],
  "Pakistan": ["Lahore Qalandars", "Karachi Kings", "Islamabad United", "Peshawar Zalmi", "Multan Sultans", "Quetta Gladiators"],
  "South Africa": ["Sunrisers Eastern Cape", "MI Cape Town", "Durban's Super Giants", "Joburg Super Kings", "Paarl Royals", "Pretoria Capitals"],
  "New Zealand": ["Auckland Aces", "Wellington Firebirds", "Canterbury Kings", "Central Stags", "Northern Brave", "Otago Volts"],
  "West Indies": ["Trinbago Knight Riders", "Guyana Amazon Warriors", "Barbados Royals", "St Kitts and Nevis Patriots", "Jamaica Tallawahs", "Saint Lucia Kings"],
  "Sri Lanka": ["Colombo Strikers", "Jaffna Kings", "Galle Marvels", "Kandy Falcons", "Dambulla Sixers", "B-Love Kandy"],
  "Bangladesh": ["Comilla Victorians", "Fortune Barishal", "Dhaka Capitals", "Rangpur Riders", "Khulna Tigers", "Chittagong Kings"],
  "Afghanistan": ["Band-e-Amir Dragons", "Mis Ainak Knights", "Speen Ghar Tigers", "Kabul Zalmi", "Boost Defenders"],
};

const FC_WINDOW = {
  "India": "Nov – Feb", "Australia": "Oct – Mar", "England": "Apr – Sep", "Pakistan": "Oct – Mar",
  "South Africa": "Oct – Mar", "New Zealand": "Oct – Mar", "West Indies": "Jan – Apr",
  "Sri Lanka": "Aug – Mar", "Bangladesh": "Oct – Feb", "Afghanistan": "Sep – Nov",
};
const T20_WINDOW = {
  "India": "Mar – May · IPL", "Australia": "Dec – Jan · BBL", "England": "Jul – Aug · The Hundred",
  "Pakistan": "Feb – Mar · PSL", "South Africa": "Jan · SA20", "New Zealand": "Dec – Jan · Super Smash",
  "West Indies": "Aug – Sep · CPL", "Sri Lanka": "Jul · LPL", "Bangladesh": "Jan – Feb · BPL",
  "Afghanistan": "Oct · Shpageeza",
};

const OPPONENT_NATIONS_POOL = COUNTRIES.map(c => c.name);

// sponsors unlock in tiers as reputation and standing grow
const SPONSOR_TIERS = {
  1: ["M&H", "JP Gavan", "JK Cricket"],
  2: ["DSC", "SG", "SS"],
  3: ["MRF", "Gray-Nicolls", "Kookaburra", "CEAT"],
};
const SPONSOR_TIER_LABEL = { 1: "Rookie brands", 2: "Established brands", 3: "Elite brands" };
const SPONSOR_PERKS = [
  { key: "ratingBoost", icon: "⚡", desc: "+3 batting & bowling this season" },
  { key: "reputationBoost", icon: "📣", desc: "+15 reputation immediately" },
  { key: "consistency", icon: "🎯", desc: "Steadier form all season" },
];

function sponsorTierFor(p) {
  const eliteRank = Math.min(p.rankBat, p.rankBowl);
  const proven = p.trophies.length > 0 || p.awards.length > 0;
  if (p.reputation >= 78 && eliteRank <= 10 && proven) return 3;
  if (p.reputation >= 40 || (p.caps.domestic + p.caps.intl + p.caps.franchise) >= 20) return 2;
  return 1;
}

const WHEEL_SEGMENTS = [
  { key: "hot_streak", icon: "🔥", label: "Hot Streak", kind: "boost", color: "#e8935d" },
  { key: "bumper_deal", icon: "💰", label: "Bumper Deal", kind: "boost", color: "#f2c14e" },
  { key: "fan_favourite", icon: "🌟", label: "Fan Favourite", kind: "boost", color: "#5fd97a" },
  { key: "niggle", icon: "🤕", label: "Niggling Injury", kind: "setback", color: "#e85d75" },
];

const DB_KEY = "cricDynastyDB";
const LAST_USER_KEY = "cricDynastyLastUser";
const SAVE_VERSION = 4;

const MAX_SEASONS = 20;
const MATCHES_PER_SEASON = 10;
const RETIRE_AGE_HARD = 40;
const RETIRE_AGE_SOFT = 35;

/* ================= utils ================= */

function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(rand(min, max + 1)); }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function choice(arr) { return arr[randInt(0, arr.length - 1)]; }
function pickN(arr, n) {
  const pool = arr.slice();
  const out = [];
  while (out.length < n && pool.length) out.push(pool.splice(randInt(0, pool.length - 1), 1)[0]);
  return out;
}
function ordinal(n) { const s = ["th", "st", "nd", "rd"], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }

function flagFor(country) { const c = COUNTRIES.find(c => c.name === country); return c ? c.flag : "🏳️"; }

function applyTheme(country) {
  const t = THEMES[country] || THEMES.default;
  const root = document.documentElement;
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-2", t.accent2);
  root.style.setProperty("--accent-text", t.text);
  document.body.classList.remove("tournament-mode");
}

function applyTournamentTheme(eventName) {
  const t = TOURNAMENT_THEMES[eventName] || THEMES.default;
  const root = document.documentElement;
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-2", t.accent2);
  root.style.setProperty("--accent-text", t.text);
  document.body.classList.add("tournament-mode");
}

// call at the top of any hub-family render so the tournament palette holds for the whole window, then reverts
function applyCurrentTheme(p) {
  if (p && p.bigEvent && p.bigEvent.active && p.selectedThisSeason && !p.intlDone) applyTournamentTheme(p.bigEvent.name);
  else applyTheme(p ? p.country : "default");
}

function emptyStatBlock() {
  return {
    matches: 0, innings: 0, runs: 0, balls: 0, fours: 0, sixes: 0,
    outs: 0, fifties: 0, hundreds: 0, highScore: 0,
    overs: 0, wickets: 0, runsConceded: 0, bestBowling: "0/0", fiveWickets: 0,
  };
}

function addStat(block, extra) {
  block.matches += 1;
  if (extra.batted) {
    block.innings += 1;
    block.runs += extra.runs;
    block.balls += extra.balls;
    block.fours += extra.fours;
    block.sixes += extra.sixes;
    if (extra.out) block.outs += 1;
    if (extra.runs >= 100) block.hundreds += 1;
    else if (extra.runs >= 50) block.fifties += 1;
    if (extra.runs > block.highScore) block.highScore = extra.runs;
  }
  if (extra.bowled) {
    block.overs += extra.overs;
    block.wickets += extra.wickets;
    block.runsConceded += extra.runsConceded;
    if (extra.wickets >= 5) block.fiveWickets += 1;
    const [bw, br] = block.bestBowling.split("/").map(Number);
    if (extra.wickets > bw || (extra.wickets === bw && extra.runsConceded < br)) {
      block.bestBowling = `${extra.wickets}/${extra.runsConceded}`;
    }
  }
}

function battingAverage(b) {
  const outs = b.outs || 0;
  if (outs === 0) return b.runs > 0 ? b.runs.toFixed(1) : "-";
  return (b.runs / outs).toFixed(1);
}
function strikeRate(b) { if (!b.balls) return "-"; return ((b.runs / b.balls) * 100).toFixed(1); }
function economyRate(b) { if (!b.overs) return "-"; return (b.runsConceded / b.overs).toFixed(1); }

function combineStats(...blocks) {
  const out = emptyStatBlock();
  blocks.forEach(b => {
    if (!b) return;
    out.matches += b.matches; out.innings += b.innings; out.runs += b.runs; out.balls += b.balls;
    out.fours += b.fours; out.sixes += b.sixes; out.outs += b.outs; out.fifties += b.fifties;
    out.hundreds += b.hundreds; out.highScore = Math.max(out.highScore, b.highScore);
    out.overs += b.overs; out.wickets += b.wickets; out.runsConceded += b.runsConceded;
    out.fiveWickets += b.fiveWickets;
  });
  return out;
}

/* ================= format scaling ================= */

const FORMAT_SCALE = {
  TEST: { overs: 20, tag: "Test" },
  FC: { overs: 16, tag: "First-Class" },
  ODI: { overs: 10, tag: "ODI" },
  T20: { overs: 4, tag: "T20" },
  FRANCHISE: { overs: 4, tag: "T20" },
};

// mean-runs model per format: mean = base + rating*slope, drawn from an exponential distribution
// (naturally gives realistic long tails: lots of low scores, occasional big ones, average ≈ mean)
const BATTING_MEAN = {
  TEST: { base: 8, slope: 0.42, sr: 48 },
  FC: { base: 7, slope: 0.4, sr: 52 },
  ODI: { base: 7, slope: 0.36, sr: 88 },
  T20: { base: 5, slope: 0.28, sr: 128 },
  FRANCHISE: { base: 5, slope: 0.28, sr: 128 },
};

/* ================= simulation ================= */

function simulateBatting(rating, oppStrength, fmt) {
  const cfg = BATTING_MEAN[fmt] || BATTING_MEAN.T20;
  const longFmt = fmt === "TEST" || fmt === "FC";
  const form = randInt(-8, 8);
  const effective = clamp(rating + form - (oppStrength - 50) / 4, 1, 99);
  const mean = clamp(cfg.base + effective * cfg.slope, 3, 70);
  const runs = clamp(Math.round(-Math.log(Math.random()) * mean), 0, Math.round(mean * 4.2));
  const outBase = longFmt ? 0.84 : fmt === "ODI" ? 0.77 : 0.8;
  const outChance = clamp(outBase - effective / 900, 0.55, 0.92);
  const out = Math.random() < outChance;
  const sr = cfg.sr * rand(0.78, 1.22);
  const balls = Math.max(1, Math.round((runs / sr) * 100));
  const fours = clamp(Math.round((runs * rand(0.12, 0.28)) / 4), 0, 20);
  const sixes = clamp(Math.round((runs * rand(0.02, 0.12)) / 6), 0, 10);
  return { batted: true, runs, balls: Math.max(balls, fours * 4 + sixes * 6), fours, sixes, out };
}

function simulateBowling(rating, oppStrength, fmt) {
  const scale = FORMAT_SCALE[fmt] || FORMAT_SCALE.T20;
  const longFmt = fmt === "TEST" || fmt === "FC";
  const form = randInt(-10, 10);
  const effective = clamp(rating + form - (oppStrength - 50) / 3, 1, 99);
  const overs = scale.overs;
  const perOverWicketChance = clamp(effective / (longFmt ? 340 : 240), 0.02, 0.42);
  let wickets = 0;
  for (let i = 0; i < overs; i++) if (Math.random() < perOverWicketChance) wickets++;
  wickets = clamp(wickets, 0, longFmt ? 8 : 5);
  const economyBase = longFmt ? 3.6 : fmt === "ODI" ? 5.6 : 11.5;
  const economy = clamp(economyBase - effective / (longFmt ? 24 : 13) + rand(-1.4, 1.4), 1.6, 15);
  const runsConceded = Math.max(0, Math.round(economy * overs));
  return { bowled: true, overs, wickets, runsConceded };
}

function simulatePlayerPerformance(p, oppStrength, fmt) {
  const perf = {};
  const doesBat = p.role !== "Bowler" || Math.random() < 0.85;
  const doesBowl = p.role === "Bowler" || p.role === "All-rounder";
  if (doesBat && p.role !== "Bowler") Object.assign(perf, simulateBatting(p.bat, oppStrength, fmt));
  else if (doesBat) Object.assign(perf, simulateBatting(Math.max(p.bat, 8), oppStrength, fmt));
  if (doesBowl) Object.assign(perf, simulateBowling(p.bowl, oppStrength, fmt));
  return perf;
}

function teamWinProbability(teamStrength, oppStrength, perf) {
  let contribution = 0;
  if (perf.batted) contribution += perf.runs / 6;
  if (perf.bowled) contribution += perf.wickets * 10;
  const diff = (teamStrength + contribution * 0.25) - oppStrength;
  return clamp(0.5 + diff / 130, 0.15, 0.85);
}

// international matches lean much more heavily on the nation's own baseline strength than any one player
function intlTeamStrength(p) {
  return clamp(NATION_STRENGTH[p.country] + (p.isNationalCaptain ? 4 : 0) + randInt(-4, 4), 20, 99);
}

function milestonesFor(perf) {
  const out = [];
  if (perf.batted) {
    if (perf.runs >= 100) out.push(`💯 Century! ${perf.runs}(${perf.balls})`);
    else if (perf.runs >= 50) out.push(`🔥 Half-century — ${perf.runs}(${perf.balls})`);
  }
  if (perf.bowled && perf.wickets >= 5) out.push(`🎯 Five-wicket haul! ${perf.wickets}/${perf.runsConceded}`);
  else if (perf.bowled && perf.wickets >= 3) out.push(`👏 ${perf.wickets}-wicket spell`);
  return out;
}

/* ================= archetypes ("played like") ================= */

function computeArchetype(p) {
  const d = combineStats(p.stats.domestic, p.stats.intl, p.stats.franchise);
  const avg = d.outs ? d.runs / d.outs : d.runs;
  const sr = d.balls ? (d.runs / d.balls) * 100 : 0;
  const wpm = d.matches ? d.wickets / d.matches : 0;
  const econ = d.overs ? d.runsConceded / d.overs : 99;
  const isSpin = p.bowlType === "Spin";

  if (p.role === "Bowler") {
    if (wpm > 1.3 && econ < 7) return { name: "The Wicket-Taking Metronome", desc: "Relentlessly accurate and always among the wickets." };
    if (isSpin && wpm > 0.9) return { name: "The Spin Wizard", desc: "Turns matches with guile and patience." };
    if (econ < 6.5) return { name: "The Metronome", desc: "Impossible to get away — bowls dry, waits for the mistake." };
    if (wpm > 1.1) return { name: "The Strike Bowler", desc: "Explosive spells that rip through top orders." };
    return { name: "The Steady Support Bowler", desc: "Dependable overs, holds an end up match after match." };
  }
  if (p.role === "All-rounder") {
    const batStrong = avg > 24 || sr > 110;
    const bowlStrong = wpm > 0.9 || econ < 7.5;
    if (batStrong && bowlStrong) return { name: "The Complete Package", desc: "A genuine all-rounder who wins matches both ways." };
    if (batStrong) return { name: "The Batting All-Rounder", desc: "Picked first for the runs, chips in with the ball." };
    if (bowlStrong) return { name: "The Bowling All-Rounder", desc: "A strike bowler who can also hold a bat." };
    return { name: "The Handy Utility Player", desc: "Never the headline, always in the mix." };
  }
  // Batsman / Wicketkeeper-Batsman
  if (avg > 40 && sr < 95) return { name: "The Stonewall Anchor", desc: "Wears the bowlers down, builds the innings brick by brick." };
  if (sr > 140) return { name: "The Finisher", desc: "Explosive hitting that turns games in an over." };
  if (avg > 34 && sr > 105) return { name: "The Complete Craftsman", desc: "Elegant, efficient, and brutally consistent." };
  if (d.sixes > d.fours * 0.6 && sr > 115) return { name: "The Boundary Hitter", desc: "Clears the ropes for fun, lives for the big shot." };
  return { name: "The Steady Hand", desc: "A reliable presence in the middle order." };
}

/* ================= accounts / save-slots ================= */

let currentUser = null;
let currentSaveId = null;
let state = null;
let draft = {
  name: "", country: COUNTRIES[0].name, role: "Batsman", batHand: "Right-handed",
  bowlType: "Pace", bowlSubStyle: PACE_SUBSTYLES[0], format: "ALL_ROUND",
};

function loadDB() {
  try { return JSON.parse(localStorage.getItem(DB_KEY)) || { users: {} }; }
  catch (e) { return { users: {} }; }
}
function saveDB(db) { try { localStorage.setItem(DB_KEY, JSON.stringify(db)); } catch (e) {} }

function savesForUser(username) {
  const db = loadDB();
  return (db.users[username] && db.users[username].saves) || [];
}

function save() {
  if (!currentUser || !currentSaveId || !state) return;
  const db = loadDB();
  if (!db.users[currentUser]) db.users[currentUser] = { saves: [] };
  const record = { ...state, id: currentSaveId, savedAt: Date.now() };
  const list = db.users[currentUser].saves;
  const idx = list.findIndex(s => s.id === currentSaveId);
  if (idx >= 0) list[idx] = record; else list.push(record);
  saveDB(db);
}

function deleteSave(username, id) {
  const db = loadDB();
  if (!db.users[username]) return;
  db.users[username].saves = db.users[username].saves.filter(s => s.id !== id);
  saveDB(db);
}

function login(username) {
  currentUser = username.trim();
  try { localStorage.setItem(LAST_USER_KEY, currentUser); } catch (e) {}
}
function logout() {
  currentUser = null; currentSaveId = null; state = null;
  try { localStorage.removeItem(LAST_USER_KEY); } catch (e) {}
}

/* ================= calendar / big events ================= */

function calendarWindowFor(p) {
  if (p.format === "SHORT") return `${T20_WINDOW[p.country] || "Season window"} · ${BASE_YEAR + p.season}`;
  return `${FC_WINDOW[p.country] || "Oct – Mar"} · ${BASE_YEAR + p.season}`;
}

function domesticFmtTag(p) { return p.format === "SHORT" ? "FRANCHISE" : "FC"; }

function bigEventInfo(p) {
  const season = p.season;
  if (p.format === "LONG") {
    if (season % 3 === 0) return { active: true, name: "World Test Championship Final", kind: "FINAL", fmt: "TEST" };
    return { active: false };
  }
  if (p.format === "SHORT") {
    if (season % 2 === 0) return { active: true, name: "ICC T20 World Cup", kind: "GROUP", fmt: "T20" };
    return { active: false };
  }
  // ALL_ROUND
  if (season % 3 === 0) return { active: true, name: "World Test Championship Final", kind: "FINAL", fmt: "TEST" };
  if (season % 4 === 0) return { active: true, name: "ICC ODI World Cup", kind: "GROUP", fmt: "ODI" };
  if (season % 2 === 0) return { active: true, name: "ICC T20 World Cup", kind: "GROUP", fmt: "T20" };
  return { active: false };
}

function intlFmtTag(p) {
  if (p.format === "LONG") return "TEST";
  if (p.format === "SHORT") return "T20";
  return choice(["TEST", "ODI", "T20"]);
}

/* ================= season flow ================= */

function buildFixtures(n, strengthRange, poolCountryTeams, excludeTeam) {
  const pool = poolCountryTeams.filter(t => t !== excludeTeam);
  const fixtures = [];
  for (let i = 0; i < n; i++) {
    fixtures.push({ opponent: choice(pool.length ? pool : poolCountryTeams), oppStrength: randInt(35, 70), played: false, fmt: domesticFmtTag(state) });
  }
  return fixtures;
}

function startSeason() {
  const p = state;
  const pool = teamPoolFor(p.country, p.domesticKind);
  p.fixtures = buildFixtures(MATCHES_PER_SEASON, null, pool, p.team);
  p.matchIndex = 0;
  p.seasonDomStats = emptyStatBlock();
  p.seasonIntlStats = emptyStatBlock();
  p.seasonFranchiseStats = emptyStatBlock();
  p.domesticDone = false; p.intlDone = false; p.franchiseDone = p.format !== "ALL_ROUND";
  p.selectedThisSeason = false;
  p.intlFixtures = []; p.intlIndex = 0;
  p.franchiseFixtures = []; p.franchiseIndex = 0;
  p.lastMatchResult = null; p.lastLeagueFinish = null; p.lastSeasonSummary = null;
  p.lastIntlSummary = null; p.lastFranchiseSummary = null;
  p.bigEvent = bigEventInfo(p);
  p.wheelResult = null;
  p.introShownThisWindow = false;
  p.hubTab = "Overview";
  save();
}

function playDomesticMatch() {
  const p = state;
  const fx = p.fixtures[p.matchIndex];
  const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
  const won = Math.random() < teamWinProbability(p.teamStrength, fx.oppStrength, perf);
  fx.played = true; fx.won = won;
  addStat(p.seasonDomStats, perf); addStat(p.stats.domestic, perf);
  p.caps.domestic += 1;
  p.lastMatchResult = { kind: "domestic", fmt: fx.fmt, opponent: fx.opponent, won, perf, milestones: milestonesFor(perf) };
  p.matchIndex += 1;
  gainReputation(perf, won);
  if (p.matchIndex >= p.fixtures.length) finishDomesticSeason();
  save();
}

function simRestOfDomesticSeason() {
  const p = state;
  while (p.matchIndex < p.fixtures.length) {
    const fx = p.fixtures[p.matchIndex];
    const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
    const won = Math.random() < teamWinProbability(p.teamStrength, fx.oppStrength, perf);
    fx.played = true; fx.won = won;
    addStat(p.seasonDomStats, perf); addStat(p.stats.domestic, perf);
    p.caps.domestic += 1;
    gainReputation(perf, won);
    p.matchIndex += 1;
  }
  p.lastMatchResult = null;
  finishDomesticSeason();
  save();
}

function finishDomesticSeason() {
  const p = state;
  p.domesticDone = true;
  const wins = p.fixtures.filter(f => f.won).length;
  const winRate = wins / p.fixtures.length;
  let finish;
  if (winRate > 0.75) finish = 1;
  else if (winRate > 0.6) finish = randInt(1, 3);
  else if (winRate > 0.45) finish = randInt(2, 5);
  else finish = randInt(4, 8);
  finish = clamp(finish, 1, 8);
  const captainBonus = p.isDomesticCaptain ? 0.12 : 0;
  const champion = finish === 1 && Math.random() < 0.55 + captainBonus;
  if (champion) {
    const label = p.domesticKind === "FRANCHISE" ? "T20 League Title" : "First-Class Championship";
    p.trophies.push({ season: p.season, name: `${p.team} — ${label}${p.isDomesticCaptain ? " (as captain)" : ""}`, icon: "🏆" });
  }
  const s = p.seasonDomStats;
  let award = null;
  const scoreValue = s.runs + s.wickets * 22;
  if (scoreValue > 280 && Math.random() < 0.5) {
    award = "Domestic Player of the Season";
    p.awards.push({ season: p.season, name: award, icon: "⭐" });
    p.reputation = clamp(p.reputation + 8, 0, 100);
  }
  p.lastLeagueFinish = { finish, champion, wins, losses: p.fixtures.length - wins };
  p.lastSeasonSummary = { stats: { ...s }, finish, champion, award };

  if (p.format === "ALL_ROUND") startFranchiseStint();
  else { p.franchiseDone = true; decideInternationalSelection(); }
  save();
}

function startFranchiseStint() {
  const p = state;
  const pool = teamPoolFor(p.country, "FRANCHISE");
  p.franchiseFixtures = pickN(pool.filter(t => t !== p.franchiseTeam), 4).map(opp => ({ opponent: opp, oppStrength: randInt(40, 72), played: false, fmt: "FRANCHISE" }));
  p.franchiseIndex = 0;
  p.franchiseDone = false;
}

function playFranchiseMatch() {
  const p = state;
  const fx = p.franchiseFixtures[p.franchiseIndex];
  const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
  const won = Math.random() < teamWinProbability(p.teamStrength + 4, fx.oppStrength, perf);
  fx.played = true; fx.won = won;
  addStat(p.seasonFranchiseStats, perf); addStat(p.stats.franchise, perf);
  p.caps.franchise += 1;
  p.lastMatchResult = { kind: "franchise", fmt: "FRANCHISE", opponent: fx.opponent, won, perf, milestones: milestonesFor(perf) };
  p.franchiseIndex += 1;
  gainReputation(perf, won);
  if (p.franchiseIndex >= p.franchiseFixtures.length) finishFranchiseStint();
  save();
}

function simRestOfFranchise() {
  const p = state;
  while (p.franchiseIndex < p.franchiseFixtures.length) {
    const fx = p.franchiseFixtures[p.franchiseIndex];
    const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
    const won = Math.random() < teamWinProbability(p.teamStrength + 4, fx.oppStrength, perf);
    fx.played = true; fx.won = won;
    addStat(p.seasonFranchiseStats, perf); addStat(p.stats.franchise, perf);
    p.caps.franchise += 1;
    gainReputation(perf, won);
    p.franchiseIndex += 1;
  }
  p.lastMatchResult = null;
  finishFranchiseStint();
  save();
}

function finishFranchiseStint() {
  const p = state;
  p.franchiseDone = true;
  p.lastFranchiseSummary = { stats: { ...p.seasonFranchiseStats } };
  decideInternationalSelection();
}

function decideInternationalSelection() {
  const p = state;
  const s = combineStats(p.seasonDomStats, p.seasonFranchiseStats);
  const formScore = (s.matches ? (s.runs + s.wickets * 22) / s.matches : 0);
  const ratingScore = (p.bat * 0.55 + p.bowl * 0.55);
  const established = p.caps.intl > 15;
  let chance = clamp((ratingScore + formScore * 1.6 + p.reputation * 0.3) / 150, 0.04, 0.93);
  if (established) chance = clamp(chance + 0.15, 0.04, 0.96);
  p.selectedThisSeason = Math.random() < chance;
  if (p.selectedThisSeason) {
    // reaching a Final at all is gated by the nation's own standing — a weak side rarely gets there
    if (p.bigEvent.active && p.bigEvent.kind === "FINAL") {
      const qualifyChance = clamp((NATION_STRENGTH[p.country] - 38) / 62, 0.04, 0.92);
      if (Math.random() >= qualifyChance) p.bigEvent = { active: false };
    }
    const games = p.bigEvent.active ? (p.bigEvent.kind === "FINAL" ? 1 : 5) : randInt(3, 4);
    const fmt = p.bigEvent.active ? p.bigEvent.fmt : intlFmtTag(p);
    const oppPool = OPPONENT_NATIONS_POOL.filter(n => n !== p.country);
    p.intlFixtures = pickN(oppPool, games).map(opp => ({
      opponent: opp, oppStrength: randInt(45, 80), played: false,
      fmt: p.bigEvent.active ? fmt : intlFmtTag(p),
      tag: p.bigEvent.active ? p.bigEvent.name : "Series",
    }));
  } else {
    p.intlDone = true;
  }
  save();
}

function playIntlMatch() {
  const p = state;
  const fx = p.intlFixtures[p.intlIndex];
  const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
  const won = Math.random() < teamWinProbability(intlTeamStrength(p), fx.oppStrength, perf);
  fx.played = true; fx.won = won;
  addStat(p.seasonIntlStats, perf); addStat(p.stats.intl, perf);
  p.caps.intl += 1;
  p.lastMatchResult = { kind: "intl", fmt: fx.fmt, opponent: fx.opponent, won, perf, milestones: milestonesFor(perf), tag: fx.tag };
  p.intlIndex += 1;
  gainReputation(perf, won);
  if (p.intlIndex >= p.intlFixtures.length) finishInternationalWindow();
  save();
}

function simRestOfIntl() {
  const p = state;
  while (p.intlIndex < p.intlFixtures.length) {
    const fx = p.intlFixtures[p.intlIndex];
    const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
    const won = Math.random() < teamWinProbability(intlTeamStrength(p), fx.oppStrength, perf);
    fx.played = true; fx.won = won;
    addStat(p.seasonIntlStats, perf); addStat(p.stats.intl, perf);
    p.caps.intl += 1;
    gainReputation(perf, won);
    p.intlIndex += 1;
  }
  p.lastMatchResult = null;
  finishInternationalWindow();
  save();
}

function finishInternationalWindow() {
  const p = state;
  p.intlDone = true;
  const s = p.seasonIntlStats;
  const wins = p.intlFixtures.filter(f => f.won).length;
  let trophy = null, finishTag = null;
  const nationStrength = NATION_STRENGTH[p.country];

  if (p.bigEvent.active) {
    const captainNote = p.isNationalCaptain ? " (as captain)" : "";
    if (p.bigEvent.kind === "FINAL") {
      const strength = (p.bat + p.bowl) * 0.5 * 0.3 + nationStrength * 0.7 + (p.isNationalCaptain ? 6 : 0);
      const won1 = Math.random() < clamp(0.06 + strength / 260, 0.04, 0.6);
      finishTag = won1 ? "Champions" : "Runners-up";
      if (won1) trophy = { season: p.season, name: `${p.bigEvent.name} — Champions (${p.country})${captainNote}`, icon: "🏆" };
    } else {
      const strength = (p.bat + p.bowl) * 0.5 * 0.28 + nationStrength * 0.6 + wins * 2.5 + (p.isNationalCaptain ? 5 : 0);
      const roll = strength + rand(-16, 16);
      if (roll > 88) finishTag = "Champions";
      else if (roll > 74) finishTag = "Runners-up";
      else if (roll > 58) finishTag = "Semi-finalists";
      else finishTag = "Group stage exit";
      // real cricket has upsets — a small flat chance of glory regardless of the odds above
      if (finishTag !== "Champions" && Math.random() < 0.03) finishTag = "Champions";
      if (finishTag === "Champions") trophy = { season: p.season, name: `${p.bigEvent.name} — Champions (${p.country})${captainNote}`, icon: "🏆" };
    }
    if (trophy) p.trophies.push(trophy);
    p.lastIntlSummary = { stats: { ...s }, wins, bigEvent: true, eventName: p.bigEvent.name, finishTag, trophy };
  } else {
    p.lastIntlSummary = { stats: { ...s }, wins, bigEvent: false };
  }
  const impact = s.runs + s.wickets * 22;
  if (impact > 180 && Math.random() < 0.45) {
    const name = "ICC Cricketer of the Year";
    p.awards.push({ season: p.season, name, icon: "🌟" });
    p.lastIntlSummary.award = name;
    p.reputation = clamp(p.reputation + 12, 0, 100);
  }
  save();
}

function gainReputation(perf, won) {
  const p = state;
  let delta = won ? 0.4 : -0.1;
  if (perf.batted && perf.runs >= 100) delta += 4;
  else if (perf.batted && perf.runs >= 50) delta += 1.5;
  if (perf.bowled && perf.wickets >= 5) delta += 4;
  else if (perf.bowled && perf.wickets >= 3) delta += 1.2;
  p.reputation = clamp(p.reputation + delta, 0, 100);
}

/* ================= career events: sponsorship & captaincy ================= */

function checkForCareerEvents() {
  const p = state;
  p.pendingEvents = [];
  const sponsorDue = p.season === 2 || (p.season > 2 && (p.season - 2) % 4 === 0);
  if (sponsorDue) p.pendingEvents.push({ type: "sponsor" });
  if (!p.isDomesticCaptain && p.age >= 23 && p.reputation >= 45 && p.season >= 3) {
    p.pendingEvents.push({ type: "captainDomestic" });
  }
  if (!p.isNationalCaptain && p.isDomesticCaptain && p.caps.intl >= 15 && p.reputation >= 68) {
    p.pendingEvents.push({ type: "captainNational" });
  }
  save();
}

function nextPendingEvent() {
  const p = state;
  p.activeEvent = p.pendingEvents.length ? p.pendingEvents.shift() : null;
  save();
  return p.activeEvent;
}

/* ================= wheel ================= */

function applyWheelEffect(segment) {
  const p = state;
  switch (segment.key) {
    case "hot_streak":
      p.bat = clamp(p.bat + 3, 1, 99); p.bowl = clamp(p.bowl + 3, 1, 99);
      return "Pre-season training camp paid off — a boost to both bat and ball.";
    case "bumper_deal":
      p.reputation = clamp(p.reputation + 15, 0, 100);
      return "A bumper endorsement deal lands — your profile is bigger than ever.";
    case "fan_favourite":
      p.reputation = clamp(p.reputation + 8, 0, 100); p.teamStrength = clamp(p.teamStrength + 3, 1, 99);
      return "The fans are firmly behind you heading into the new season.";
    case "niggle":
      p.bat = clamp(p.bat - 3, 1, 99); p.bowl = clamp(p.bowl - 3, 1, 99);
      return "A niggling injury in the off-season blunts your sharpness a little.";
    default:
      return "";
  }
}

/* ================= aging / retirement ================= */

function ageAndProgress() {
  const p = state;
  const growthAge = 27, declineAge = 32;
  const before = { bat: p.bat, bowl: p.bowl };
  ["bat", "bowl"].forEach(k => {
    if (p[k] <= 3) return;
    if (p.age < growthAge) {
      const gap = p.potential - p[k];
      p[k] += Math.max(0, Math.round(gap * rand(0.06, 0.2)));
    } else if (p.age <= declineAge) {
      p[k] += randInt(-1, 2);
    } else {
      const noDeclineChance = p.age > 36 ? 0.25 : 0.4;
      const dec = Math.random() < noDeclineChance ? 0 : randInt(1, p.age > 36 ? 3 : 2);
      p[k] -= dec;
    }
    p[k] = clamp(p[k], 1, 99);
  });
  p.lastRatingDelta = { bat: p.bat - before.bat, bowl: p.bowl - before.bowl };

  updateRankings();

  p.seasonLog.push({
    season: p.season, age: p.age,
    dom: { ...p.seasonDomStats }, intl: { ...p.seasonIntlStats }, franchise: { ...p.seasonFranchiseStats },
    champion: p.lastLeagueFinish ? p.lastLeagueFinish.champion : false,
  });

  p.forcedRetireOffer = (p.age >= RETIRE_AGE_SOFT && (p.bat < 32 && p.bowl < 32)) || p.age >= RETIRE_AGE_HARD - 1;
  save();
}

function battingFormScore(p) {
  const recent = p.seasonLog.slice(-2);
  if (!recent.length) return 0;
  const combined = recent.map(s => combineStats(s.dom, s.intl, s.franchise));
  const runs = combined.reduce((a, s) => a + s.runs, 0);
  const matches = combined.reduce((a, s) => a + s.matches, 0);
  return matches ? runs / matches : 0;
}
function bowlingFormScore(p) {
  const recent = p.seasonLog.slice(-2);
  if (!recent.length) return 0;
  const combined = recent.map(s => combineStats(s.dom, s.intl, s.franchise));
  const wkts = combined.reduce((a, s) => a + s.wickets, 0);
  const matches = combined.reduce((a, s) => a + s.matches, 0);
  return matches ? (wkts / matches) * 20 : 0;
}

function updateRankings() {
  const p = state;
  const batPoints = clamp(p.bat * 0.65 + battingFormScore(p) * 1.0 + p.reputation * 0.15, 0, 220);
  const bowlPoints = clamp(p.bowl * 0.65 + bowlingFormScore(p) * 1.0 + p.reputation * 0.15, 0, 220);
  p.rankBat = clamp(101 - Math.round(batPoints / 2.1), 1, 100);
  p.rankBowl = clamp(101 - Math.round(bowlPoints / 2.1), 1, 100);
}

function advanceToNextSeason() {
  const p = state;
  if (p.age >= RETIRE_AGE_HARD || p.season >= MAX_SEASONS) { retirePlayer(); return; }
  p.season += 1; p.age += 1;
  startSeason();
}

function retirePlayer() { state.retired = true; save(); }

function legacyTier(p) {
  const all = combineStats(p.stats.domestic, p.stats.intl, p.stats.franchise);
  const battingValue = all.runs;
  const bowlingValue = all.wickets * 24;
  const trophyBonus = p.trophies.length * 220;
  const score = battingValue + bowlingValue + trophyBonus;
  if (score > 8000) return { name: "Legend", sub: "A name etched into the history of the game." };
  if (score > 5200) return { name: "All-Time Great", sub: "Spoken about for generations to come." };
  if (score > 3000) return { name: "Great Career", sub: "A player fans will always remember." };
  if (score > 1300) return { name: "Solid Pro", sub: "A dependable career at the top level." };
  return { name: "Journeyman", sub: "Every dynasty starts with a story like this one." };
}

/* ================= render helpers ================= */

function ratingBar(label, value) { return `<div class="stat-box"><div class="val">${value}</div><div class="lbl">${label}</div></div>`; }

function screen(html) { document.getElementById("app").innerHTML = html; }

function masthead(extraRight = "") {
  return `<div class="masthead">
    <div class="wordmark"><img src="logo-small.png" alt="CricDynasty" class="wm-logo"></div>
    ${extraRight}
  </div>`;
}

function fmtLabel(tag) { return (FORMAT_SCALE[tag] || {}).tag || tag; }

function teamPoolFor(country, kind) {
  return (kind === "FRANCHISE" ? T20_FRANCHISES : FC_TEAMS)[country] || (kind === "FRANCHISE" ? T20_FRANCHISES.India : FC_TEAMS.India);
}

/* ================= screens: accounts ================= */

function renderLogin() {
  applyTheme("default");
  screen(`
    ${masthead()}
    <div class="hero">
      <img src="logo-medium.png" alt="CricDynasty" class="hero-logo">
      <div class="mode-tag">Welcome</div>
      <p>Enter a name to save and load your dynasties on this device. No password needed — this just keeps everyone's careers separate.</p>
    </div>
    <div class="card stack">
      <label class="field">Your name
        <input type="text" id="loginInput" autocomplete="off" placeholder="e.g. Ben" oninput="App.setLoginName(this.value)">
      </label>
      <button class="primary" ${(window.__loginName || "").trim() ? "" : "disabled"} onclick="App.doLogin()">Continue</button>
    </div>
  `);
}

function renderSaveList() {
  applyTheme("default");
  const saves = savesForUser(currentUser).slice().sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
  screen(`
    ${masthead(`<button class="link-btn" onclick="App.logout()">Switch user</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Hey ${currentUser}</div>
      <h1>Your Dynasties</h1>
      <p>Pick up a career in progress, or start a brand new one.</p>
    </div>
    <div class="stack">
      ${saves.map(s => `
        <div class="format-card" onclick="App.openSave('${s.id}')">
          <div class="format-icon">${flagFor(s.country)}</div>
          <div style="flex:1;">
            <div class="format-title">${s.name} · Season ${s.season}/${MAX_SEASONS}${s.retired ? " · Retired" : ""}</div>
            <div class="format-desc">Currently playing for ${s.team}${s.franchiseTeam && s.format === "ALL_ROUND" ? ` / ${s.franchiseTeam}` : ""}</div>
          </div>
          <button class="link-btn" onclick="event.stopPropagation(); App.deleteSaveConfirm('${s.id}')" style="color:var(--accent-3);">Delete</button>
        </div>
      `).join("")}
    </div>
    <button class="primary" onclick="App.goFormatSelect()">+ Start New Dynasty</button>
  `);
}

/* ================= screens: create ================= */

function renderFormatSelect() {
  applyTheme("default");
  screen(`
    ${masthead(`<button class="link-btn" onclick="App.goSaveList()">‹ Back</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Step 1 of 2</div>
      <h1>Choose your format</h1>
      <p>This decides your competitions, calendar and the international caps you'll chase.</p>
    </div>
    <div class="stack">
      ${FORMATS.map(f => `
        <div class="format-card ${draft.format === f.key ? "selected" : ""}" onclick="App.setDraftFormat('${f.key}')">
          <div class="format-icon">${f.icon}</div>
          <div>
            <div class="format-title">${f.title}</div>
            <div class="format-desc">${f.desc}</div>
          </div>
        </div>
      `).join("")}
    </div>
    <button class="primary" onclick="App.goCreate()">Continue</button>
  `);
}

function renderCreate() {
  applyTheme(draft.country);
  const needsBowl = draft.role === "Bowler" || draft.role === "All-rounder";
  const subOptions = draft.bowlType === "Pace" ? PACE_SUBSTYLES : SPIN_SUBSTYLES;
  const domesticKind = draft.format === "SHORT" ? "FRANCHISE" : "FC";
  const previewTeams = teamPoolFor(draft.country, domesticKind).slice(0, 3).join(", ");
  screen(`
    ${masthead(`<button class="link-btn" onclick="App.goFormatSelect()">‹ Back</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Step 2 of 2 · ${FORMATS.find(f => f.key === draft.format).title}</div>
      <h1>Create your player</h1>
      <p>Set up the prospect you'll guide through their career.</p>
    </div>
    <div class="card stack">
      <label class="field">Player name
        <input type="text" id="nameInput" autocomplete="off" placeholder="Your name" value="${draft.name}" oninput="App.setDraftName(this.value)">
      </label>
      <label class="field">Country
        <select id="countrySelect" onchange="App.setDraftCountry(this.value)">
          ${COUNTRIES.map(c => `<option value="${c.name}" ${c.name === draft.country ? "selected" : ""}>${c.flag} ${c.name} — ${NATION_STRENGTH[c.name]} rated</option>`).join("")}
        </select>
      </label>
      <div class="empty-note" style="padding:0;text-align:left;">
        ${draft.format === "SHORT" ? "Franchise pool" : "Domestic side pool"}: ${previewTeams}…
      </div>
      <div class="empty-note" style="padding:0;text-align:left;">
        National team rating: <strong style="color:var(--accent);">${NATION_STRENGTH[draft.country]}</strong> — ${NATION_STRENGTH[draft.country] >= 85 ? "a powerhouse, trophies are realistic" : NATION_STRENGTH[draft.country] >= 70 ? "a solid side with a real shot in good years" : "a big underdog — team success will be hard-earned"}.
      </div>
    </div>
    <div class="card stack">
      <div class="section-title">Role</div>
      <div class="role-grid">
        ${ROLES.map(r => `
          <div class="pill-btn ${r.key === draft.role ? "selected" : ""}" onclick="App.setDraftRole('${r.key}')">
            <div style="font-size:20px;">${r.icon}</div>
            <div style="margin-top:4px;">${r.key}</div>
          </div>
        `).join("")}
      </div>
      <div class="empty-note" style="padding:2px 0 0;">${ROLES.find(r => r.key === draft.role).desc}</div>
    </div>
    <div class="card stack">
      <div class="section-title">Batting hand</div>
      <div class="option-grid">
        ${BAT_HANDS.map(h => `<div class="pill-btn ${h === draft.batHand ? "selected" : ""}" onclick="App.setDraftBatHand('${h}')">${h}</div>`).join("")}
      </div>
      ${needsBowl ? `
        <div class="section-title">Bowling type</div>
        <div class="option-grid">
          ${["Pace", "Spin"].map(b => `<div class="pill-btn ${b === draft.bowlType ? "selected" : ""}" onclick="App.setDraftBowlType('${b}')">${b}</div>`).join("")}
        </div>
        <div class="section-title">Style</div>
        <div class="option-grid">
          ${subOptions.map(s => `<div class="pill-btn ${s === draft.bowlSubStyle ? "selected" : ""}" onclick="App.setDraftBowlSubStyle('${s}')" style="font-size:12.5px;">${s}</div>`).join("")}
        </div>
      ` : ""}
    </div>
    <button class="primary" ${draft.name.trim() ? "" : "disabled"} onclick="App.confirmCreate()">Begin career</button>
  `);
}

/* ================= screens: hub ================= */

function renderHub() {
  const p = state;
  applyCurrentTheme(p);
  const tabs = ["Overview", "Fixtures", "Rankings", "Career"];
  let body = "";
  if (p.hubTab === "Fixtures") body = renderHubFixtures();
  else if (p.hubTab === "Rankings") body = renderHubRankings();
  else if (p.hubTab === "Career") body = renderHubCareer();
  else body = renderHubOverview();

  screen(`
    ${masthead()}
    <div class="card player-card">
      <div class="player-avatar">${flagFor(p.country)}</div>
      <div>
        <div class="player-name">${p.name} ${p.isNationalCaptain ? "©️" : ""}</div>
        <div class="player-sub">${p.role} · Age ${p.age} · ${p.team}${p.isDomesticCaptain ? " (c)" : ""}</div>
      </div>
    </div>
    <div class="tab-bar">
      ${tabs.map(t => `<div class="tab-btn ${p.hubTab === t ? "active" : ""}" onclick="App.setHubTab('${t}')">${t}</div>`).join("")}
    </div>
    ${body}
  `);
}

function renderHubOverview() {
  const p = state;
  let phase, actionButtons;
  if (!p.domesticDone) {
    const label = p.domesticKind === "FRANCHISE" ? "Franchise league" : "First-class match";
    phase = `Season ${p.season}/${MAX_SEASONS} · ${calendarWindowFor(p)} · ${label} ${p.matchIndex + 1}/${p.fixtures.length}`;
    actionButtons = `
      <button class="primary" onclick="App.playMatch()">🏏 Play next match</button>
      <button class="secondary" onclick="App.simRestSeason()">⏩ Sim rest of season</button>
    `;
  } else if (!p.franchiseDone) {
    phase = `Season ${p.season}/${MAX_SEASONS} · Franchise stint (${p.franchiseTeam}) ${p.franchiseIndex + 1}/${p.franchiseFixtures.length}`;
    actionButtons = `
      <button class="primary" onclick="App.playFranchise()">⚡ Play next franchise match</button>
      <button class="secondary" onclick="App.simRestFranchise()">⏩ Sim rest of stint</button>
    `;
  } else if (p.selectedThisSeason && !p.intlDone) {
    const tag = p.intlFixtures[0] ? p.intlFixtures[0].tag : "Series";
    phase = `Season ${p.season}/${MAX_SEASONS} · ${tag} ${p.intlIndex + 1}/${p.intlFixtures.length}`;
    actionButtons = `
      <button class="primary" onclick="App.playIntl()">✈️ Play next international</button>
      <button class="secondary" onclick="App.simRestIntl()">⏩ Sim rest of window</button>
    `;
  } else {
    phase = `Season ${p.season}/${MAX_SEASONS} complete`;
    actionButtons = `<button class="primary" onclick="App.goSeasonSummary()">📋 View season summary</button>`;
  }

  const played = p.fixtures.filter(f => f.played).slice(-5).reverse();

  return `
    <div class="card">
      <div class="section-title">${phase}</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Batting", p.bat)}
        ${ratingBar("Bowling", p.bowl)}
        ${ratingBar("Fielding", p.field)}
      </div>
    </div>
    <div class="card stack">${actionButtons}</div>
    ${played.length ? `
      <div class="card">
        <div class="section-title">Recent domestic form</div>
        <div style="margin-top:6px;">
          ${played.map(f => `
            <div class="match-line">
              <span class="opp">vs ${f.opponent}</span>
              <span class="res ${f.won ? "win" : "loss"}">${f.won ? "WON" : "LOST"}</span>
            </div>
          `).join("")}
        </div>
      </div>
    ` : ""}
  `;
}

function fixtureRow(f, competitionLabel) {
  return `
    <div class="match-line">
      <span class="opp">vs ${f.opponent}<span class="season-tag" style="margin-left:8px;">${competitionLabel}</span></span>
      <span class="res pending">UPCOMING</span>
    </div>
  `;
}

function renderHubFixtures() {
  const p = state;
  const domUpcoming = p.domesticDone ? [] : p.fixtures.slice(p.matchIndex);
  const franchiseUpcoming = (p.format !== "ALL_ROUND" || p.franchiseDone) ? [] : p.franchiseFixtures.slice(p.franchiseIndex);
  const intlUpcoming = (!p.selectedThisSeason || p.intlDone) ? [] : p.intlFixtures.slice(p.intlIndex);
  const domLabel = p.domesticKind === "FRANCHISE" ? "League" : "First-Class";
  const anyUpcoming = domUpcoming.length || franchiseUpcoming.length || intlUpcoming.length;

  return `
    <div class="card">
      <div class="section-title">Upcoming fixtures</div>
      <div style="margin-top:6px;">
        ${!anyUpcoming ? `<div class="empty-note">Nothing scheduled right now — move on to the season summary.</div>` : ""}
        ${intlUpcoming.map(f => fixtureRow(f, f.tag || "International")).join("")}
        ${franchiseUpcoming.map(f => fixtureRow(f, "Franchise")).join("")}
        ${domUpcoming.map(f => fixtureRow(f, domLabel)).join("")}
      </div>
    </div>
    <div class="empty-note">Future rounds (like international windows) only appear once the current competition wraps up.</div>
  `;
}

function renderHubRankings() {
  const p = state;
  return `
    <div class="card">
      <div class="section-title">ICC-style world rankings</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Batting rank", "#" + p.rankBat)}
        ${ratingBar("Bowling rank", "#" + p.rankBowl)}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Reputation</div>
      <div class="rating-bar-wrap" style="margin-top:10px;">
        <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${p.reputation}%;"></div></div>
        <div class="rating-num">${Math.round(p.reputation)}</div>
      </div>
      <div class="empty-note" style="padding:8px 0 0;">Reputation drives sponsor offers, captaincy chances and national selection.</div>
    </div>
    <div class="card">
      <div class="section-title">${p.country} national team</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Team rating", NATION_STRENGTH[p.country])}
        ${ratingBar("Your caps", p.caps.intl)}
      </div>
      <div class="empty-note" style="padding:8px 0 0;">Team trophies lean heavily on this rating — brilliance from you still matters, but a weaker side makes titles much harder to reach.</div>
    </div>
    <div class="card">
      <div class="section-title">Leadership</div>
      <div class="empty-note" style="padding:6px 0;">
        ${p.isNationalCaptain ? `©️ National team captain` : p.isDomesticCaptain ? `©️ ${p.team} captain` : "No captaincy yet — keep performing and it'll come."}
      </div>
    </div>
    ${p.sponsor ? `
      <div class="card">
        <div class="section-title">Current sponsor</div>
        <div class="trophy-item" style="margin-top:6px;"><span class="icon">🏷️</span>${p.sponsor.name}</div>
      </div>
    ` : ""}
  `;
}

function renderHubCareer() {
  const p = state;
  const d = p.stats.domestic, i = p.stats.intl, fr = p.stats.franchise;
  const arche = computeArchetype(p);
  return `
    <div class="card">
      <div class="section-title">Domestic career (${p.team})</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Matches", d.matches)}
        ${ratingBar("Runs", d.runs)}
        ${ratingBar("Avg", battingAverage(d))}
        ${ratingBar("Wickets", d.wickets)}
        ${ratingBar("Econ", economyRate(d))}
        ${ratingBar("100s", d.hundreds)}
      </div>
    </div>
    ${p.format === "ALL_ROUND" ? `
      <div class="card">
        <div class="section-title">Franchise career (${p.franchiseTeam})</div>
        <div class="stat-grid" style="margin-top:10px;">
          ${ratingBar("Matches", fr.matches)}
          ${ratingBar("Runs", fr.runs)}
          ${ratingBar("SR", strikeRate(fr))}
          ${ratingBar("Wickets", fr.wickets)}
          ${ratingBar("Econ", economyRate(fr))}
          ${ratingBar("100s", fr.hundreds)}
        </div>
      </div>
    ` : ""}
    <div class="card">
      <div class="section-title">International career (${p.caps.intl} caps)</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Matches", i.matches)}
        ${ratingBar("Runs", i.runs)}
        ${ratingBar("Avg", battingAverage(i))}
        ${ratingBar("Wickets", i.wickets)}
        ${ratingBar("Econ", economyRate(i))}
        ${ratingBar("100s", i.hundreds)}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Played like</div>
      <div class="legacy-tier" style="padding-top:2px;">
        <div class="tier-name" style="font-size:20px;">${arche.name}</div>
        <div class="tier-sub">${arche.desc}</div>
      </div>
    </div>
    <div class="card">
      <div class="section-title">Trophy cabinet</div>
      <div class="trophy-list" style="margin-top:8px;">
        ${p.trophies.length ? p.trophies.map(t => `<div class="trophy-item"><span class="icon">${t.icon}</span>${t.name}<span class="season-tag">S${t.season}</span></div>`).join("")
          : `<div class="empty-note">No trophies yet — keep grinding.</div>`}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Awards</div>
      <div class="trophy-list" style="margin-top:8px;">
        ${p.awards.length ? p.awards.map(a => `<div class="trophy-item"><span class="icon">${a.icon}</span>${a.name}<span class="season-tag">S${a.season}</span></div>`).join("")
          : `<div class="empty-note">No individual awards yet.</div>`}
      </div>
    </div>
  `;
}

/* ================= screens: call-up / big event ================= */

function renderCallUp() {
  const p = state;
  applyCurrentTheme(p);
  const tag = p.intlFixtures[0] ? p.intlFixtures[0].tag : "Series";
  screen(`
    ${masthead()}
    <div class="big-event-screen">
      <div class="big-event-trophy">✈️</div>
      <div class="mode-tag">International call-up</div>
      <div class="big-event-title" style="font-size:32px;">${flagFor(p.country)} ${p.country}</div>
      <p style="color:var(--text-dim);max-width:380px;">You've been picked for the national side — ${tag}. This is your shot on the big stage.</p>
      <button class="primary" style="max-width:280px;" onclick="App.dismissIntlIntro()">Let's go</button>
    </div>
  `);
}

function renderBigEventIntro() {
  const p = state;
  applyCurrentTheme(p);
  screen(`
    ${masthead()}
    <div class="big-event-screen">
      <div class="big-event-trophy">🏆</div>
      <div class="mode-tag">You've been called up for</div>
      <div class="big-event-title">${p.bigEvent.name}</div>
      <p style="color:var(--text-dim);max-width:380px;">Representing ${flagFor(p.country)} ${p.country}. Every performance from here counts double.</p>
      <button class="primary" style="max-width:280px;" onclick="App.dismissIntlIntro()">Take the field</button>
    </div>
  `);
}

/* ================= screens: match & summaries ================= */

function renderMatchResult() {
  const p = state;
  applyCurrentTheme(p);
  const r = p.lastMatchResult;
  const perf = r.perf;
  let figureBig = "", figureSub = "";
  if (perf.batted && perf.bowled) {
    figureBig = `${perf.runs}(${perf.balls}) &nbsp;/&nbsp; ${perf.wickets}-${perf.runsConceded}`;
    figureSub = `Batting & bowling figures`;
  } else if (perf.batted) {
    figureBig = `${perf.runs}${perf.out ? "" : "*"}`;
    figureSub = `off ${perf.balls} balls · ${perf.fours}x4, ${perf.sixes}x6`;
  } else if (perf.bowled) {
    figureBig = `${perf.wickets}/${perf.runsConceded}`;
    figureSub = `${perf.overs} overs`;
  } else {
    figureBig = "DNB"; figureSub = "Did not feature much this match";
  }
  const heading = r.kind === "intl" ? (r.tag || "International") : r.kind === "franchise" ? `Franchise · ${fmtLabel(r.fmt)}` : `Domestic · ${fmtLabel(r.fmt)}`;

  screen(`
    ${masthead()}
    <div class="card">
      <div class="section-title" style="text-align:center;">${heading} vs ${r.opponent}</div>
      <div class="result-figures">
        <div class="big">${figureBig}</div>
        <div class="sub">${figureSub}</div>
      </div>
      <div class="badge" style="display:block;text-align:center;width:fit-content;margin:6px auto 0;background:${r.won ? "rgba(95,217,122,0.15)" : "rgba(232,93,117,0.15)"};color:${r.won ? "var(--accent)" : "var(--accent-3)"};">
        Team ${r.won ? "won" : "lost"} the match
      </div>
    </div>
    ${r.milestones.length ? `<div class="stack">${r.milestones.map(m => `<div class="milestone-banner">${m}</div>`).join("")}</div>` : ""}
    <button class="primary" onclick="App.continueFromMatch()">Continue</button>
  `);
}

function renderSeasonSummary() {
  const p = state;
  applyTheme(p.country);
  const sum = p.lastSeasonSummary;
  const lf = p.lastLeagueFinish;
  const label = p.domesticKind === "FRANCHISE" ? "Franchise league" : "First-class";
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">Season ${p.season} · ${label} recap</div>
      <h1>${p.team}</h1>
      <p>${lf.wins}-${lf.losses} record · finished ${ordinal(lf.finish)}${lf.champion ? " — 🏆 Champions!" : ""}</p>
    </div>
    <div class="card">
      <div class="section-title">Your season</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Runs", sum.stats.runs)}
        ${ratingBar("Avg", battingAverage(sum.stats))}
        ${ratingBar("SR", strikeRate(sum.stats))}
        ${ratingBar("Wickets", sum.stats.wickets)}
        ${ratingBar("Econ", economyRate(sum.stats))}
        ${ratingBar("50s/100s", `${sum.stats.fifties}/${sum.stats.hundreds}`)}
      </div>
      ${sum.award ? `<div class="milestone-banner" style="margin-top:12px;">⭐ ${sum.award}</div>` : ""}
    </div>
    <button class="primary" onclick="App.continueFromSeasonSummary()">Continue</button>
  `);
}

function renderFranchiseSummary() {
  const p = state;
  applyTheme(p.country);
  const sum = p.lastFranchiseSummary;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">Franchise stint · ${T20_WINDOW[p.country] || "T20 window"}</div>
      <h1>${p.franchiseTeam}</h1>
    </div>
    <div class="card">
      <div class="section-title">Your numbers</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Runs", sum.stats.runs)}
        ${ratingBar("SR", strikeRate(sum.stats))}
        ${ratingBar("Wickets", sum.stats.wickets)}
        ${ratingBar("Econ", economyRate(sum.stats))}
        ${ratingBar("50s/100s", `${sum.stats.fifties}/${sum.stats.hundreds}`)}
      </div>
    </div>
    <button class="primary" onclick="App.continueFromFranchiseSummary()">Continue</button>
  `);
}

function renderIntlSummary() {
  const p = state;
  applyCurrentTheme(p);
  const sum = p.lastIntlSummary;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">${sum.bigEvent ? sum.eventName : "International window"}</div>
      <h1>${flagFor(p.country)} ${p.country}</h1>
      <p>${sum.wins} win${sum.wins === 1 ? "" : "s"} in this window${sum.bigEvent ? ` · ${sum.finishTag}` : ""}</p>
    </div>
    <div class="card">
      <div class="section-title">Your numbers</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Runs", sum.stats.runs)}
        ${ratingBar("Avg", battingAverage(sum.stats))}
        ${ratingBar("SR", strikeRate(sum.stats))}
        ${ratingBar("Wickets", sum.stats.wickets)}
        ${ratingBar("Econ", economyRate(sum.stats))}
        ${ratingBar("50s/100s", `${sum.stats.fifties}/${sum.stats.hundreds}`)}
      </div>
      ${sum.trophy ? `<div class="milestone-banner" style="margin-top:12px;">🏆 ${sum.trophy.name}</div>` : ""}
      ${sum.award ? `<div class="milestone-banner" style="margin-top:12px;">🌟 ${sum.award}</div>` : ""}
    </div>
    <button class="primary" onclick="App.continueFromIntlSummary()">Continue</button>
  `);
}

function renderSponsorOffer() {
  const p = state;
  applyTheme(p.country);
  const tier = sponsorTierFor(p);
  const brands = pickN(SPONSOR_TIERS[tier], Math.min(3, SPONSOR_TIERS[tier].length));
  const perks = pickN(SPONSOR_PERKS, brands.length);
  const options = brands.map((name, idx) => ({ name, ...perks[idx % perks.length] }));
  window.__sponsorOptions = options;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">${SPONSOR_TIER_LABEL[tier]}</div>
      <h1>Pick a deal</h1>
      <p>Brands are circling after your recent form. Choose who to sign with this season.</p>
    </div>
    <div class="stack">
      ${options.map((s, idx) => `
        <div class="format-card" onclick="App.pickSponsor(${idx})">
          <div class="format-icon">${s.icon}</div>
          <div>
            <div class="format-title">${s.name}</div>
            <div class="format-desc">${s.desc}</div>
          </div>
        </div>
      `).join("")}
    </div>
    <button class="secondary" onclick="App.skipSponsor()">Skip this season</button>
  `);
}

function renderCaptaincyOffer(kind) {
  const p = state;
  applyTheme(p.country);
  const isNational = kind === "captainNational";
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">Captaincy opportunity</div>
      <h1>${isNational ? `Captain ${p.country}?` : `Captain ${p.team}?`}</h1>
      <p>${isNational
        ? "Your form and reputation have the selectors considering you to lead the national side."
        : `The ${p.team} board want you to take the armband for the side.`}</p>
    </div>
    <div class="card">
      <div class="section-title">What it means</div>
      <div class="empty-note" style="padding:6px 0;">
        Leadership boosts team strength and title chances, and looks great on the trophy cabinet — but the scrutiny is real if results slip.
      </div>
    </div>
    <div class="stack">
      <button class="primary" onclick="App.acceptCaptaincy('${kind}')">Accept the armband</button>
      <button class="secondary" onclick="App.declineCaptaincy('${kind}')">Not yet</button>
    </div>
  `);
}

function renderWheel() {
  applyTheme(state.country);
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">Off-season</div>
      <h1>Spin for your off-season</h1>
      <p>Three out of four land in your favour. Give it a spin.</p>
    </div>
    <div class="wheel-wrap">
      <div class="wheel-pointer">▼</div>
      <div class="wheel" id="wheelEl">
        ${WHEEL_SEGMENTS.map((s, i) => `<div class="wheel-seg wheel-seg-${i}"><span>${s.icon}</span></div>`).join("")}
      </div>
    </div>
    <div id="wheelResultBox"></div>
    <button class="primary" id="spinBtn" onclick="App.spinWheel()">🎡 Spin</button>
  `);
}

function renderOffSeason() {
  const p = state;
  applyTheme(p.country);
  const willForceRetire = p.age >= RETIRE_AGE_HARD;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">Off-season</div>
      <h1>Season ${p.season} complete</h1>
      <p>Age ${p.age} → ${p.age + (willForceRetire ? 0 : 1)}</p>
    </div>
    <div class="card">
      <div class="section-title">Rating change</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Batting", `${p.bat} (${p.lastRatingDelta.bat >= 0 ? "+" : ""}${p.lastRatingDelta.bat})`)}
        ${ratingBar("Bowling", `${p.bowl} (${p.lastRatingDelta.bowl >= 0 ? "+" : ""}${p.lastRatingDelta.bowl})`)}
      </div>
    </div>
    ${p.forcedRetireOffer && !willForceRetire ? `
      <div class="card">
        <div class="section-title">Decision time</div>
        <p style="color:var(--text-dim);font-size:13.5px;">Your form is fading. Play on for another season, or retire now while you can go out on your own terms?</p>
        <div class="stack" style="margin-top:10px;">
          <button class="secondary" onclick="App.retireNow()">Retire now</button>
          <button class="primary" onclick="App.goNextSeason()">Play on</button>
        </div>
      </div>
    ` : `
      <button class="primary" onclick="App.goNextSeason()">${willForceRetire ? "See career retirement" : `Start Season ${p.season + 1}`}</button>
    `}
  `);
}

function renderRetirement() {
  const p = state;
  applyTheme(p.country);
  const tier = legacyTier(p);
  const arche = computeArchetype(p);
  const d = p.stats.domestic, i = p.stats.intl, fr = p.stats.franchise;
  const all = combineStats(d, i, fr);
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:10px;">
      <div class="mode-tag">Career complete</div>
      <h1>${p.name} retires</h1>
      <p>${p.season} seasons · ${flagFor(p.country)} ${p.country} · ${p.role}</p>
    </div>
    <div class="card legacy-tier">
      <div class="tier-name">${tier.name}</div>
      <div class="tier-sub">${tier.sub}</div>
    </div>
    <div class="card">
      <div class="section-title">Career totals</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Runs", all.runs)}
        ${ratingBar("Wickets", all.wickets)}
        ${ratingBar("100s", all.hundreds)}
        ${ratingBar("5W hauls", all.fiveWickets)}
        ${ratingBar("Trophies", p.trophies.length)}
        ${ratingBar("Awards", p.awards.length)}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Played like</div>
      <div class="legacy-tier" style="padding-top:2px;">
        <div class="tier-name" style="font-size:22px;">${arche.name}</div>
        <div class="tier-sub">${arche.desc}</div>
      </div>
    </div>
    <div class="card">
      <div class="section-title">Trophy cabinet</div>
      <div class="trophy-list" style="margin-top:8px;">
        ${p.trophies.length ? p.trophies.map(t => `<div class="trophy-item"><span class="icon">${t.icon}</span>${t.name}<span class="season-tag">S${t.season}</span></div>`).join("")
          : `<div class="empty-note">No trophies this career.</div>`}
      </div>
    </div>
    <button class="primary" onclick="App.newDynasty()">Start a new dynasty</button>
  `);
}

/* ================= app controller ================= */

const App = {
  setLoginName(v) { window.__loginName = v; renderLogin(); const el = document.getElementById("loginInput"); if (el) { el.focus(); el.value = v; } },
  doLogin() {
    const name = (window.__loginName || "").trim();
    if (!name) return;
    login(name);
    renderSaveList();
  },
  goSaveList() { renderSaveList(); },
  openSave(id) {
    const rec = savesForUser(currentUser).find(s => s.id === id);
    if (!rec || rec.version !== SAVE_VERSION) return;
    state = rec; currentSaveId = id;
    if (state.retired) renderRetirement();
    else if (state.lastMatchResult) renderMatchResult();
    else renderHub();
  },
  deleteSaveConfirm(id) { deleteSave(currentUser, id); renderSaveList(); },
  logout() { logout(); renderLogin(); },

  goFormatSelect() { renderFormatSelect(); },
  setDraftFormat(v) { draft.format = v; renderFormatSelect(); },

  goCreate() { renderCreate(); },
  setDraftName(v) {
    draft.name = v; renderCreate();
    const el = document.getElementById("nameInput");
    if (el) { el.focus(); el.setSelectionRange(v.length, v.length); }
  },
  setDraftCountry(v) { draft.country = v; renderCreate(); },
  setDraftRole(v) { draft.role = v; renderCreate(); },
  setDraftBatHand(v) { draft.batHand = v; renderCreate(); },
  setDraftBowlType(v) { draft.bowlType = v; draft.bowlSubStyle = (v === "Pace" ? PACE_SUBSTYLES : SPIN_SUBSTYLES)[0]; renderCreate(); },
  setDraftBowlSubStyle(v) { draft.bowlSubStyle = v; renderCreate(); },

  confirmCreate() {
    if (!draft.name.trim()) return;
    state = freshPlayer({ ...draft, name: draft.name.trim() });
    currentSaveId = "save_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
    startSeason();
    renderHub();
  },

  setHubTab(t) { state.hubTab = t; save(); renderHub(); },

  goSeasonSummary() {
    if (!state.domesticDone) return renderHub();
    if (!state.franchiseDone) return renderFranchiseSummary();
    if (state.selectedThisSeason && !state.intlDone) return renderHub();
    renderSeasonSummary();
  },

  playMatch() { playDomesticMatch(); renderMatchResult(); },
  simRestSeason() { simRestOfDomesticSeason(); App.afterDomesticDone(); },
  afterDomesticDone() {
    const p = state;
    if (p.format === "ALL_ROUND") renderFranchiseSummary();
    else if (p.selectedThisSeason) App.enterInternationalPhase();
    else renderSeasonSummary();
  },

  playFranchise() { playFranchiseMatch(); renderMatchResult(); },
  simRestFranchise() { simRestOfFranchise(); renderFranchiseSummary(); },

  playIntl() { playIntlMatch(); renderMatchResult(); },
  simRestIntl() { simRestOfIntl(); renderIntlSummary(); },

  enterInternationalPhase() {
    const p = state;
    if (p.introShownThisWindow) return renderHub();
    p.introShownThisWindow = true;
    save();
    if (p.bigEvent.active) renderBigEventIntro();
    else renderCallUp();
  },
  dismissIntlIntro() { renderHub(); },

  continueFromMatch() {
    const p = state;
    const kind = p.lastMatchResult.kind;
    p.lastMatchResult = null;
    save();
    if (kind === "domestic") {
      if (!p.domesticDone) return renderHub();
      return App.afterDomesticDone();
    }
    if (kind === "franchise") {
      if (!p.franchiseDone) return renderHub();
      return renderFranchiseSummary();
    }
    if (!p.intlDone) return renderHub();
    return renderIntlSummary();
  },

  continueFromSeasonSummary() {
    if (state.selectedThisSeason && !state.intlDone) return App.enterInternationalPhase();
    App.afterFullSeason();
  },
  continueFromFranchiseSummary() {
    const p = state;
    if (p.selectedThisSeason && !p.intlDone) return App.enterInternationalPhase();
    renderSeasonSummary();
  },
  continueFromIntlSummary() { renderSeasonSummary(); },

  afterFullSeason() {
    checkForCareerEvents();
    App.advanceEventQueue();
  },
  advanceEventQueue() {
    const ev = nextPendingEvent();
    if (!ev) return App.goToWheel();
    if (ev.type === "sponsor") return renderSponsorOffer();
    if (ev.type === "captainDomestic") return renderCaptaincyOffer("captainDomestic");
    if (ev.type === "captainNational") return renderCaptaincyOffer("captainNational");
    App.advanceEventQueue();
  },

  pickSponsor(idx) {
    const p = state;
    const s = window.__sponsorOptions[idx];
    p.sponsor = s; p.sponsorHistory.push({ season: p.season, name: s.name });
    if (s.key === "ratingBoost") { p.bat = clamp(p.bat + 3, 1, 99); p.bowl = clamp(p.bowl + 3, 1, 99); }
    if (s.key === "reputationBoost") p.reputation = clamp(p.reputation + 15, 0, 100);
    save();
    App.advanceEventQueue();
  },
  skipSponsor() { App.advanceEventQueue(); },

  acceptCaptaincy(kind) {
    const p = state;
    if (kind === "captainDomestic") { p.isDomesticCaptain = true; p.teamStrength = clamp(p.teamStrength + 5, 1, 99); }
    else { p.isNationalCaptain = true; p.reputation = clamp(p.reputation + 10, 0, 100); }
    save();
    App.advanceEventQueue();
  },
  declineCaptaincy() { App.advanceEventQueue(); },

  goToWheel() { renderWheel(); },
  spinWheel() {
    const btn = document.getElementById("spinBtn");
    const wheelEl = document.getElementById("wheelEl");
    if (!btn || !wheelEl || btn.disabled) return;
    btn.disabled = true;
    const idx = randInt(0, WHEEL_SEGMENTS.length - 1);
    const segment = WHEEL_SEGMENTS[idx];
    // segment center angles, clockwise from 12 o'clock: seg0(NW)=315, seg1(NE)=45, seg2(SE)=135, seg3(SW)=225
    const segmentTopAngle = [315, 45, 135, 225];
    const finalAngle = 360 * 5 + ((360 - segmentTopAngle[idx]) % 360);
    wheelEl.style.transform = `rotate(${finalAngle}deg)`;
    setTimeout(() => {
      const message = applyWheelEffect(segment);
      state.wheelResult = { segment, message };
      save();
      const box = document.getElementById("wheelResultBox");
      if (box) {
        box.innerHTML = `
          <div class="milestone-banner" style="margin-top:14px;background:${segment.kind === "boost" ? "rgba(95,217,122,0.15)" : "rgba(232,93,117,0.15)"};border-color:${segment.kind === "boost" ? "rgba(95,217,122,0.4)" : "rgba(232,93,117,0.4)"};color:${segment.kind === "boost" ? "var(--accent)" : "var(--accent-3)"};">
            ${segment.icon} ${segment.label} — ${message}
          </div>`;
      }
      btn.textContent = "Continue";
      btn.disabled = false;
      btn.onclick = () => App.afterWheel();
    }, 3200);
  },
  afterWheel() {
    ageAndProgress();
    renderOffSeason();
  },

  retireNow() { retirePlayer(); renderRetirement(); },
  goNextSeason() {
    const p = state;
    if (p.age >= RETIRE_AGE_HARD) { retirePlayer(); renderRetirement(); return; }
    advanceToNextSeason();
    renderHub();
  },

  newDynasty() {
    state = null; currentSaveId = null;
    draft = { name: "", country: COUNTRIES[0].name, role: "Batsman", batHand: "Right-handed", bowlType: "Pace", bowlSubStyle: PACE_SUBSTYLES[0], format: "ALL_ROUND" };
    renderSaveList();
  },
};

window.App = App;

/* ================= boot ================= */

function freshPlayer(d) {
  const potential = Math.round(clamp(rand(58, 96) + (Math.random() < 0.08 ? rand(4, 10) : 0), 55, 99));
  let bat = 0, bowl = 0, field = 30;
  if (d.role === "Batsman") { bat = randInt(38, 52); bowl = randInt(3, 12); field = randInt(35, 48); }
  else if (d.role === "Bowler") { bat = randInt(3, 14); bowl = randInt(38, 52); field = randInt(35, 48); }
  else if (d.role === "All-rounder") { bat = randInt(28, 40); bowl = randInt(28, 40); field = randInt(38, 50); }
  else { bat = randInt(35, 48); bowl = randInt(2, 6); field = randInt(48, 62); }

  const domesticKind = d.format === "SHORT" ? "FRANCHISE" : "FC";
  const team = choice(teamPoolFor(d.country, domesticKind));
  const franchiseTeam = d.format === "ALL_ROUND" ? choice(teamPoolFor(d.country, "FRANCHISE").filter(t => t !== team)) : (d.format === "SHORT" ? team : null);
  const nationBaseline = NATION_STRENGTH[d.country] || 70;

  return {
    version: SAVE_VERSION,
    name: d.name, country: d.country, role: d.role, batHand: d.batHand,
    bowlType: (d.role === "Bowler" || d.role === "All-rounder") ? d.bowlType : null,
    bowlSubStyle: (d.role === "Bowler" || d.role === "All-rounder") ? d.bowlSubStyle : null,
    format: d.format, domesticKind, team, franchiseTeam,
    age: 18, potential, bat, bowl, field,
    reputation: Math.round(clamp(potential / 4 + rand(-5, 5), 10, 40)),
    teamStrength: clamp(Math.round(nationBaseline * 0.55) + randInt(-6, 6), 25, 95),
    isDomesticCaptain: false, isNationalCaptain: false,
    sponsor: null, sponsorHistory: [],
    rankBat: 100, rankBowl: 100,
    season: 1,
    matchIndex: 0, fixtures: [],
    seasonDomStats: emptyStatBlock(), seasonIntlStats: emptyStatBlock(), seasonFranchiseStats: emptyStatBlock(),
    selectedThisSeason: false,
    intlFixtures: [], intlIndex: 0,
    franchiseFixtures: [], franchiseIndex: 0,
    domesticDone: false, intlDone: false, franchiseDone: false,
    retired: false, forcedRetireOffer: false,
    caps: { domestic: 0, intl: 0, franchise: 0 },
    stats: { domestic: emptyStatBlock(), intl: emptyStatBlock(), franchise: emptyStatBlock() },
    trophies: [], awards: [], seasonLog: [],
    pendingEvents: [], activeEvent: null,
    wheelResult: null, wheelSpinning: false, introShownThisWindow: false,
    lastMatchResult: null, lastLeagueFinish: null, lastSeasonSummary: null,
    lastIntlSummary: null, lastFranchiseSummary: null,
    lastRatingDelta: { bat: 0, bowl: 0 },
    bigEvent: null,
    hubTab: "Overview",
  };
}

(function boot() {
  let lastUser = null;
  try { lastUser = localStorage.getItem(LAST_USER_KEY); } catch (e) {}
  if (lastUser) { currentUser = lastUser; renderSaveList(); }
  else renderLogin();
})();
