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
// accents are tuned to stay clearly visible as text/borders/icons on a near-black background —
// several board colours (navy, maroon, dark green) were too close to black to read at their real shade
const THEMES = {
  "India": { accent: "#2563eb", accent2: "#f2b632", text: "#eaf1ff" },
  "Australia": { accent: "#1f7a44", accent2: "#ffd400", text: "#eafff0" },
  "England": { accent: "#3f63c2", accent2: "#e0344e", text: "#eef1ff" },
  "Pakistan": { accent: "#17944a", accent2: "#ffffff", text: "#eafff0" },
  "South Africa": { accent: "#00a37d", accent2: "#f2c14e", text: "#eafff8" },
  "New Zealand": { accent: "#8a93a3", accent2: "#e5e7eb", text: "#f5f5f6" },
  "West Indies": { accent: "#d5455c", accent2: "#f2c14e", text: "#ffeef1" },
  "Sri Lanka": { accent: "#3568c2", accent2: "#f2c14e", text: "#eaf1ff" },
  "Bangladesh": { accent: "#0a8f4a", accent2: "#e8443a", text: "#eafff2" },
  "Afghanistan": { accent: "#3d76ea", accent2: "#e0442f", text: "#eaf1ff" },
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

const GROUNDS_BY_COUNTRY = {
  "India": ["Wankhede Stadium, Mumbai", "Eden Gardens, Kolkata", "M. Chinnaswamy Stadium, Bengaluru", "Narendra Modi Stadium, Ahmedabad", "Arun Jaitley Stadium, Delhi", "M. A. Chidambaram Stadium, Chennai"],
  "Australia": ["Melbourne Cricket Ground", "Sydney Cricket Ground", "The Gabba, Brisbane", "Adelaide Oval", "Perth Stadium", "Bellerive Oval, Hobart"],
  "England": ["Lord's, London", "The Oval, London", "Old Trafford, Manchester", "Edgbaston, Birmingham", "Headingley, Leeds", "Trent Bridge, Nottingham"],
  "Pakistan": ["Gaddafi Stadium, Lahore", "National Stadium, Karachi", "Rawalpindi Cricket Stadium", "Multan Cricket Stadium"],
  "South Africa": ["Wanderers Stadium, Johannesburg", "Newlands, Cape Town", "Kingsmead, Durban", "St George's Park, Gqeberha"],
  "New Zealand": ["Eden Park, Auckland", "Basin Reserve, Wellington", "Hagley Oval, Christchurch", "Seddon Park, Hamilton"],
  "West Indies": ["Kensington Oval, Barbados", "Sabina Park, Jamaica", "Queen's Park Oval, Trinidad", "Providence Stadium, Guyana"],
  "Sri Lanka": ["R. Premadasa Stadium, Colombo", "Galle International Stadium", "Pallekele International Stadium"],
  "Bangladesh": ["Sher-e-Bangla Stadium, Dhaka", "Zahur Ahmed Chowdhury Stadium, Chattogram", "Sylhet International Cricket Stadium"],
  "Afghanistan": ["Kabul International Cricket Stadium", "Ghazi Amanullah International Stadium"],
};
const WTC_FINAL_GROUND = "The Oval, London";

function groundFor(country) { return choice(GROUNDS_BY_COUNTRY[country] || GROUNDS_BY_COUNTRY.India); }

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
  const ranks = [p.rankBat, p.rankBowl].filter(r => r != null);
  const eliteRank = ranks.length ? Math.min(...ranks) : 999;
  const proven = p.trophies.length > 0 || p.awards.length > 0;
  if (p.reputation >= 78 && eliteRank <= 10 && proven) return 3;
  if (p.reputation >= 40 || (p.caps.domestic + p.caps.intl + p.caps.franchise) >= 20) return 2;
  return 1;
}
const SPONSOR_TIER_VALUE = { 1: 5000, 2: 20000, 3: 75000 };

/* ================= money ================= */

function formatMoney(n) {
  n = Math.round(n || 0);
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}k`;
  return `$${n}`;
}

function formatPercent(n) { return `${Math.round(n * 100)}%`; }

// prestige only pays off once you're a proven quantity — an unproven rookie gets the same standard
// deal everywhere, regardless of which club they sign for
function contractSalaryFor(kind, mod, reputation, applyPrestige) {
  const base = kind === "FRANCHISE" ? 35000 : 15000;
  const prestigeMult = applyPrestige ? 1 + (mod / 10) * 0.4 : 1;
  const repMult = 1 + (reputation != null ? reputation : 20) / 130;
  return Math.round((base * prestigeMult * repMult) / 500) * 500;
}

function overseasFeeFor(reputation) {
  const repMult = 1 + (reputation != null ? reputation : 45) / 90;
  return Math.round((60000 * repMult) / 1000) * 1000;
}

// tiered per-match/appearance fees, plus milestone bonuses scaled by competition prestige
const MATCH_FEE = { domestic: 500, franchise: 2000, overseas: 6000, TEST: 10000, ODI: 6000, T20: 4000 };
const BONUS_BASE = { fifty: 1000, hundred: 4000, threeWkt: 1000, fiveWkt: 4000, win: 800 };
const BONUS_TIER_MULT = { domestic: 0.3, franchise: 0.6, overseas: 1, intl: 1.2 };
const TROPHY_BONUS = { domestic: 15000, major: 150000 };

// earnings is the lifetime "career total" stat and never shrinks; bankBalance is what the shop can actually spend
function addEarnings(amount) {
  const p = state;
  p.earnings = (p.earnings || 0) + amount;
  p.seasonEarnings = (p.seasonEarnings || 0) + amount;
  p.bankBalance = (p.bankBalance || 0) + amount;
}

function awardMatchEarnings(tier, fmt, perf, won) {
  const fee = tier === "intl" ? (MATCH_FEE[fmt] || MATCH_FEE.T20) : MATCH_FEE[tier];
  const mult = BONUS_TIER_MULT[tier];
  let bonus = 0;
  const innScores = [];
  if (perf.batted) innScores.push(perf.runs);
  if (perf.innings2) innScores.push(perf.innings2.runs);
  innScores.forEach(r => { if (r >= 100) bonus += BONUS_BASE.hundred; else if (r >= 50) bonus += BONUS_BASE.fifty; });
  if (perf.bowled) {
    if (perf.wickets >= 5) bonus += BONUS_BASE.fiveWkt;
    else if (perf.wickets >= 3) bonus += BONUS_BASE.threeWkt;
  }
  if (won) bonus += BONUS_BASE.win;
  const total = Math.round(fee + bonus * mult);
  addEarnings(total);
  return total;
}

const WHEEL_SEGMENTS = [
  { key: "hot_streak", icon: "🔥", label: "Hot Streak", kind: "boost", color: "#e8935d" },
  { key: "bumper_deal", icon: "💰", label: "Bumper Deal", kind: "boost", color: "#f2c14e" },
  { key: "fan_favourite", icon: "🌟", label: "Fan Favourite", kind: "boost", color: "#5fd97a" },
  { key: "extra_yards", icon: "🏋️", label: "Extra Yards", kind: "boost", color: "#4fd1c5" },
  { key: "media_circus", icon: "🎭", label: "Media Circus", kind: "mixed", color: "#b98af2" },
  { key: "niggle", icon: "🤕", label: "Niggling Injury", kind: "setback", color: "#f2836b" },
  { key: "lost_form", icon: "📉", label: "Lost Form", kind: "setback", color: "#e85d75" },
  { key: "injury_scare", icon: "🦴", label: "Injury Scare", kind: "setback", color: "#c23b52" },
];

const DB_KEY = "cricDynastyDB";
const LAST_USER_KEY = "cricDynastyLastUser";
const SAVE_VERSION = 10;

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

// the nation you're currently facing in an international window — only nations carry a theme,
// so domestic/franchise opponents (no colour data) just fall through to your own board colour
function currentOpponentCountry(p) {
  if (!p || !p.selectedThisSeason || p.intlDone) return null;
  const fx = p.intlFixtures[p.intlIndex];
  if (fx && THEMES[fx.opponent]) return fx.opponent;
  return null;
}

function applyMatchupTheme(myCountry, oppCountry) {
  const mine = THEMES[myCountry] || THEMES.default;
  const theirs = THEMES[oppCountry] || THEMES.default;
  const root = document.documentElement;
  root.style.setProperty("--accent", mine.accent);
  root.style.setProperty("--accent-2", theirs.accent);
  root.style.setProperty("--accent-text", mine.text);
  document.body.classList.remove("tournament-mode");
}

// call at the top of any hub-family render so the tournament palette holds for the whole window, then reverts
function applyCurrentTheme(p) {
  if (p && p.bigEvent && p.bigEvent.active && p.selectedThisSeason && !p.intlDone) return applyTournamentTheme(p.bigEvent.name);
  const opp = currentOpponentCountry(p);
  if (opp) return applyMatchupTheme(p.country, opp);
  applyTheme(p ? p.country : "default");
}

function emptyStatBlock() {
  return {
    matches: 0, innings: 0, runs: 0, balls: 0, fours: 0, sixes: 0,
    outs: 0, fifties: 0, hundreds: 0, highScore: 0,
    overs: 0, wickets: 0, runsConceded: 0, bestBowling: "0/0", fiveWickets: 0,
  };
}

// one real innings' worth of batting — kept separate from addStat so a match with
// two innings (Test/FC) can credit each innings' own milestones instead of a blended total
function addBattingInnings(block, inn) {
  block.innings += 1;
  block.runs += inn.runs;
  block.balls += inn.balls;
  block.fours += inn.fours;
  block.sixes += inn.sixes;
  if (inn.out) block.outs += 1;
  if (inn.runs >= 100) block.hundreds += 1;
  else if (inn.runs >= 50) block.fifties += 1;
  if (inn.runs > block.highScore) block.highScore = inn.runs;
}

function addStat(block, extra) {
  block.matches += 1;
  if (extra.batted) {
    addBattingInnings(block, { runs: extra.runs, balls: extra.balls, fours: extra.fours, sixes: extra.sixes, out: extra.out });
    if (extra.innings2) addBattingInnings(block, extra.innings2);
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
// steep on purpose — a middling rating should rarely produce a big score, an elite one regularly should
const BATTING_MEAN = {
  TEST: { base: -16, slope: 0.71, sr: 48 },
  FC: { base: -17, slope: 0.68, sr: 52 },
  ODI: { base: -17, slope: 0.61, sr: 88 },
  T20: { base: -19, slope: 0.47, sr: 128 },
  FRANCHISE: { base: -19, slope: 0.47, sr: 128 },
};

/* ================= simulation ================= */

const BATTING_APPROACHES = {
  Cautious: { meanMult: 0.82, outAdj: -0.09, srMult: 0.84, label: "Cautious", desc: "Occupy the crease, sacrifice tempo for your wicket." },
  Balanced: { meanMult: 1.0, outAdj: 0, srMult: 1.0, label: "Balanced", desc: "Play each ball on its merits." },
  Aggressive: { meanMult: 1.24, outAdj: 0.1, srMult: 1.22, label: "Aggressive", desc: "Take the attack to the bowlers — higher ceiling, higher risk." },
};
const BOWLING_APPROACHES = {
  Contain: { wicketMult: 0.72, econAdj: -1.15, label: "Contain", desc: "Bowl tight lines, dry up the runs." },
  Balanced: { wicketMult: 1.0, econAdj: 0, label: "Balanced", desc: "Mix it up and take what comes." },
  Attack: { wicketMult: 1.32, econAdj: 1.2, label: "Attack", desc: "Bowl for wickets — more threat, more boundaries conceded." },
};

/* ================= perk shop ================= */
// bought with money instead of grinding reputation — each perk has 3 levels, starting cheap/small and
// growing into a bigger, pricier bonus. A pure batter/bowler only ever sees perks for the skill they use.
const PERKS = [
  { key: "concreteBlocker", icon: "🧱", name: "Concrete Blocker", category: "BAT",
    desc: "Extra effective batting rating whenever you play Cautious — technique holds up under sustained pressure.",
    levels: [{ price: 30000, value: 2 }, { price: 70000, value: 4 }, { price: 130000, value: 6 }] },
  { key: "sixMachine", icon: "💥", name: "Six Machine", category: "BAT",
    desc: "Extra effective batting rating whenever you play Aggressive — loads up for the boundary without losing shape.",
    levels: [{ price: 35000, value: 2 }, { price: 80000, value: 4 }, { price: 150000, value: 6 }] },
  { key: "bigMatchPlayer", icon: "🎯", name: "Big Match Player", category: "BAT",
    desc: "Extra effective batting rating in every approach — a general step up in composure when the stakes are highest.",
    levels: [{ price: 50000, value: 1 }, { price: 100000, value: 2 }, { price: 180000, value: 3 }] },
  { key: "lockdown", icon: "🔒", name: "Lockdown", category: "BOWL",
    desc: "Extra effective bowling rating whenever you play Contain — relentless discipline, barely a bad ball in the over.",
    levels: [{ price: 30000, value: 2 }, { price: 70000, value: 4 }, { price: 130000, value: 6 }] },
  { key: "wicketHunter", icon: "🏹", name: "Wicket Hunter", category: "BOWL",
    desc: "Extra effective bowling rating whenever you play Attack — always searching for the breakthrough.",
    levels: [{ price: 35000, value: 2 }, { price: 80000, value: 4 }, { price: 150000, value: 6 }] },
  { key: "iceNerve", icon: "❄️", name: "Ice Nerve", category: "BOWL",
    desc: "Extra effective bowling rating in every approach — never rattled, whatever the moment.",
    levels: [{ price: 50000, value: 1 }, { price: 100000, value: 2 }, { price: 180000, value: 3 }] },
  { key: "mediaSavvy", icon: "📣", name: "Media Savvy", category: "MENTAL",
    desc: "Extra reputation gained from every good performance — you know how to work a headline.",
    levels: [{ price: 60000, value: 0.1 }, { price: 130000, value: 0.2 }, { price: 220000, value: 0.3 }] },
  { key: "ironResolve", icon: "🛡️", name: "Iron Resolve", category: "MENTAL",
    desc: "Less reputation lost from bad days and defeats — setbacks register less and less.",
    levels: [{ price: 60000, value: 0.25 }, { price: 130000, value: 0.5 }, { price: 220000, value: 0.75 }] },
];
const PERK_CATEGORIES = [
  { key: "BAT", label: "Batting" },
  { key: "BOWL", label: "Bowling" },
  { key: "MENTAL", label: "Mental edge" },
];

// a pure batter never sees bowling perks (and vice versa) — only an all-rounder practises both
function perksForRole(role) {
  if (role === "Bowler") return PERKS.filter(pk => pk.category !== "BAT");
  if (role === "Batsman" || role === "Wicketkeeper-Batsman") return PERKS.filter(pk => pk.category !== "BOWL");
  return PERKS;
}

function perkLevel(key) { return (state && state.perks && state.perks[key]) || 0; }
function perkValue(key) {
  const perk = PERKS.find(pk => pk.key === key);
  const lvl = perkLevel(key);
  return (perk && lvl > 0) ? perk.levels[lvl - 1].value : 0;
}

// true when there's at least one not-maxed perk (for this role) the player can currently afford
function hasAffordablePerk(p) {
  const bank = p.bankBalance || 0;
  return perksForRole(p.role).some(perk => {
    const lvl = perkLevel(perk.key);
    return lvl < perk.levels.length && bank >= perk.levels[lvl].price;
  });
}

function perkBatBonus(approach) {
  let bonus = perkValue("bigMatchPlayer");
  if (approach === "Cautious") bonus += perkValue("concreteBlocker");
  if (approach === "Aggressive") bonus += perkValue("sixMachine");
  return bonus;
}
function perkBowlBonus(approach) {
  let bonus = perkValue("iceNerve");
  if (approach === "Contain") bonus += perkValue("lockdown");
  if (approach === "Attack") bonus += perkValue("wicketHunter");
  return bonus;
}

// Tests/first-class matches give a batter up to two real innings — this rolls one
function simulateBattingInnings(rating, oppStrength, fmt, approach) {
  const cfg = BATTING_MEAN[fmt] || BATTING_MEAN.T20;
  const app = BATTING_APPROACHES[approach] || BATTING_APPROACHES.Balanced;
  const longFmt = fmt === "TEST" || fmt === "FC";
  const form = randInt(-8, 8);
  const effective = clamp(rating + form - (oppStrength - 50) / 4, 1, 99);
  const mean = clamp((cfg.base + effective * cfg.slope) * app.meanMult, 3, 85);
  // the cap just stops truly absurd outliers — with means this low it must stay generous or big scores become impossible outright
  const runs = clamp(Math.round(-Math.log(Math.random()) * mean), 0, Math.round(mean * 6));
  const outBase = longFmt ? 0.84 : fmt === "ODI" ? 0.77 : 0.8;
  // skill matters a lot here — a weak batter is dismissed far more often than a genuinely good one
  const outChance = clamp(outBase - effective / 150 + app.outAdj, 0.08, 0.95);
  const out = Math.random() < outChance;
  const sr = cfg.sr * app.srMult * rand(0.78, 1.22);
  const balls = Math.max(1, Math.round((runs / sr) * 100));
  const fours = clamp(Math.round((runs * rand(0.12, 0.28)) / 4), 0, 20);
  const sixes = clamp(Math.round((runs * rand(0.02, 0.12)) / 6), 0, 10);
  return { runs, balls: Math.max(balls, fours * 4 + sixes * 6), fours, sixes, out };
}

// most Tests/FC matches see a batter come out twice — but not always (innings defeat, rain, a declaration)
const SECOND_INNINGS_CHANCE = 0.65;

function simulateBatting(rating, oppStrength, fmt, approach) {
  const longFmt = fmt === "TEST" || fmt === "FC";
  const inn1 = simulateBattingInnings(rating, oppStrength, fmt, approach);
  const result = { batted: true, ...inn1 };
  if (longFmt && Math.random() < SECOND_INNINGS_CHANCE) {
    result.innings2 = simulateBattingInnings(rating, oppStrength, fmt, approach);
  }
  return result;
}

function simulateBowling(rating, oppStrength, fmt, approach) {
  const scale = FORMAT_SCALE[fmt] || FORMAT_SCALE.T20;
  const app = BOWLING_APPROACHES[approach] || BOWLING_APPROACHES.Balanced;
  const longFmt = fmt === "TEST" || fmt === "FC";
  const form = randInt(-10, 10);
  const effective = clamp(rating + form - (oppStrength - 50) / 3, 1, 99);
  const overs = scale.overs;
  const perOverWicketChance = clamp((effective / (longFmt ? 340 : 240)) * app.wicketMult, 0.01, 0.5);
  let wickets = 0;
  for (let i = 0; i < overs; i++) if (Math.random() < perOverWicketChance) wickets++;
  wickets = clamp(wickets, 0, longFmt ? 8 : 5);
  const economyBase = longFmt ? 3.6 : fmt === "ODI" ? 5.6 : 11.5;
  const economy = clamp(economyBase - effective / (longFmt ? 24 : 13) + app.econAdj + rand(-1.4, 1.4), 1.2, 17);
  const runsConceded = Math.max(0, Math.round(economy * overs));
  return { bowled: true, overs, wickets, runsConceded };
}

const LIVE_PHASES = 3;
const BATTING_PHASE_NAMES = {
  TEST: ["Morning Session", "Afternoon Session", "Evening Session"],
  FC: ["Morning Session", "Afternoon Session", "Evening Session"],
  ODI: ["Powerplay", "Middle Overs", "Death Overs"],
  T20: ["Powerplay", "Middle Overs", "Death Overs"],
  FRANCHISE: ["Powerplay", "Middle Overs", "Death Overs"],
};
function battingPhaseName(fmt, index) { return (BATTING_PHASE_NAMES[fmt] || BATTING_PHASE_NAMES.T20)[index] || `Phase ${index + 1}`; }

// assembles the final live-match batting perf, folding in a completed 1st innings if one was stashed
function finalBattingPerf(li) {
  if (!li.doesBat) return {};
  const cur = { batted: true, runs: li.bat.runs, balls: Math.max(li.bat.balls, 1), fours: li.bat.fours, sixes: li.bat.sixes, out: li.bat.out };
  if (li.bat1) {
    return { batted: true, runs: li.bat1.runs, balls: Math.max(li.bat1.balls, 1), fours: li.bat1.fours, sixes: li.bat1.sixes, out: li.bat1.out, innings2: cur };
  }
  return cur;
}

// one third of an innings — used by the live, phase-by-phase play flow
function simulateBattingPhase(effRating, oppStrength, fmt, approach) {
  const app = BATTING_APPROACHES[approach] || BATTING_APPROACHES.Balanced;
  const longFmt = fmt === "TEST" || fmt === "FC";
  const form = randInt(-8, 8);
  const effective = clamp(effRating + form - (oppStrength - 50) / 4, 1, 99);
  const outBase = longFmt ? 0.84 : fmt === "ODI" ? 0.77 : 0.8;
  // same skill sensitivity as the bulk model — a weak batter rarely survives a full innings
  const perPhaseOut = clamp((outBase - effective / 150 + app.outAdj) * 0.68, 0.05, 0.75);
  const out = Math.random() < perPhaseOut;

  // every phase — session or powerplay/middle/death alike — means real time at the crease.
  // balls faced comes first (how long that phase actually lasts for you), runs follow from strike rate.
  // steep on purpose, same as the bulk model — a weak batter should visibly struggle to score, not just get out more
  let balls, srFloor, srSlope, srCap, fourShare, sixShare;
  if (longFmt) {
    balls = randInt(35, 85);
    srFloor = 8; srSlope = 0.44; srCap = 78; fourShare = [0.1, 0.22]; sixShare = [0, 0.04];
  } else if (fmt === "ODI") {
    balls = randInt(15, 35);
    srFloor = 12; srSlope = 0.95; srCap = 140; fourShare = [0.12, 0.26]; sixShare = [0.01, 0.06];
  } else {
    balls = randInt(9, 22);
    srFloor = 13; srSlope = 1.3; srCap = 205; fourShare = [0.14, 0.3]; sixShare = [0.02, 0.1];
  }
  const baseSR = clamp(srFloor + effective * srSlope, 15, srCap) * app.srMult;
  const sr = baseSR * rand(0.75, 1.25);
  const runs = Math.max(0, Math.round((balls * sr) / 100));
  const fours = clamp(Math.round((runs * rand(fourShare[0], fourShare[1])) / 4), 0, 12);
  const sixes = clamp(Math.round((runs * rand(sixShare[0], sixShare[1])) / 6), 0, 8);
  return { runs, balls: Math.max(balls, fours * 4 + sixes * 6), fours, sixes, out };
}

// realistic bowling allocation per format — T20/ODI bowl their exact allowance one over at a time;
// Tests have no fixed allowance, so spells are rolled individually and may or may not continue
function bowlingSpellOvers(fmt) {
  if (fmt === "TEST" || fmt === "FC") return randInt(3, 7);
  return 1;
}
function bowlingOversCap(fmt) {
  if (fmt === "T20" || fmt === "FRANCHISE") return 4;
  if (fmt === "ODI") return 10;
  return 30; // Test/FC — a generous sanity cap across however many spells you're given
}
// chance of getting ANOTHER spell in a Test — shrinks the more you've already bowled that innings
function testSpellContinues(spellsBowled) {
  const chance = [0.68, 0.42, 0.22, 0.1][Math.min(spellsBowled, 3)] || 0;
  return Math.random() < chance;
}

function simulateBowlingSpell(effRating, oppStrength, fmt, approach, overs) {
  const app = BOWLING_APPROACHES[approach] || BOWLING_APPROACHES.Balanced;
  const longFmt = fmt === "TEST" || fmt === "FC";
  const form = randInt(-10, 10);
  const effective = clamp(effRating + form - (oppStrength - 50) / 3, 1, 99);
  const perOverWicketChance = clamp((effective / (longFmt ? 340 : 240)) * app.wicketMult, 0.01, 0.5);
  let wickets = 0;
  for (let i = 0; i < overs; i++) if (Math.random() < perOverWicketChance) wickets++;
  wickets = clamp(wickets, 0, longFmt ? 6 : 3);
  const economyBase = longFmt ? 3.6 : fmt === "ODI" ? 5.6 : 11.5;
  const economy = clamp(economyBase - effective / (longFmt ? 24 : 13) + app.econAdj + rand(-1.4, 1.4), 1.2, 17);
  const runsConceded = Math.max(0, Math.round(economy * overs));
  return { overs, wickets, runsConceded };
}

const PITCH_TYPES = [
  { key: "GREEN", label: "Green Seamer", icon: "🌱", desc: "Grass left on the surface — seam bowlers will fancy this early on.", battingMult: 0.9, paceMult: 1.18, spinMult: 0.9, rightCall: "BOWL" },
  { key: "FLAT", label: "Flat Belter", icon: "🏏", desc: "A belter of a pitch — runs should flow all day.", battingMult: 1.15, paceMult: 0.9, spinMult: 0.9, rightCall: "BAT" },
  { key: "TURNER", label: "Dry Turner", icon: "🏜️", desc: "Dry and cracked — expect sharp turn, especially late on.", battingMult: 0.92, paceMult: 0.9, spinMult: 1.22, rightCall: "BAT" },
  { key: "BALANCED", label: "Balanced Track", icon: "⚖️", desc: "An even contest between bat and ball.", battingMult: 1.0, paceMult: 1.0, spinMult: 1.0, rightCall: null },
];

function matchConditionsFor(p) {
  const toss = window.__matchToss;
  if (!toss) return { battingMult: 1, bowlMult: 1 };
  const pitch = toss.pitch;
  const bowlTypeMult = p.bowlType === "Spin" ? pitch.spinMult : pitch.paceMult;
  let correctness = 1;
  if (toss.wonToss && pitch.rightCall) correctness = toss.decision === pitch.rightCall ? 1.06 : 0.94;
  return { battingMult: pitch.battingMult * correctness, bowlMult: bowlTypeMult * correctness };
}

function tossNoteFor(toss) {
  if (!toss || !toss.wonToss || !toss.pitch.rightCall) return null;
  const correct = toss.decision === toss.pitch.rightCall;
  return correct ? "📖 Good toss call — the conditions suited it." : "📖 Tricky call — the conditions didn't really favour that.";
}

// the toss call is the captain's — you only get a say in it if you actually wear the armband for this side
function isCaptainForKind(kind) {
  const p = state;
  if (kind === "intl") return !!p.isNationalCaptain;
  if (kind === "domestic") return !!p.isDomesticCaptain;
  return false; // franchise / overseas stints — you're a guest, never the captain
}

// a reasonably competent NPC captain reads the pitch correctly more often than not
function autoTossDecision(pitch) {
  if (!pitch.rightCall) return choice(["BAT", "BOWL"]);
  return Math.random() < 0.75 ? pitch.rightCall : (pitch.rightCall === "BAT" ? "BOWL" : "BAT");
}

function simulatePlayerPerformance(p, oppStrength, fmt) {
  const perf = {};
  const doesBat = p.role !== "Bowler" || Math.random() < 0.85;
  const doesBowl = p.role === "Bowler" || p.role === "All-rounder";
  const battingApproach = p.battingApproach || "Balanced";
  const bowlingApproach = p.bowlingApproach || "Balanced";
  const cond = matchConditionsFor(p);
  const batRating = p.bat * cond.battingMult + perkBatBonus(battingApproach);
  const bowlRating = p.bowl * cond.bowlMult + perkBowlBonus(bowlingApproach);
  if (doesBat && p.role !== "Bowler") Object.assign(perf, simulateBatting(batRating, oppStrength, fmt, battingApproach));
  else if (doesBat) Object.assign(perf, simulateBatting(Math.max(batRating, 8), oppStrength, fmt, "Balanced"));
  if (doesBowl) Object.assign(perf, simulateBowling(bowlRating, oppStrength, fmt, bowlingApproach));
  return perf;
}

function teamWinProbability(teamStrength, oppStrength, perf) {
  let contribution = 0;
  if (perf.batted) contribution += perf.runs / 6;
  if (perf.bowled) contribution += perf.wickets * 10;
  const diff = (teamStrength + contribution * 0.25) - oppStrength;
  return clamp(0.5 + diff / 130, 0.15, 0.85);
}

// domestic/franchise sides lean mostly on their fixed baseline, with a modest nudge from how good you currently are
function domesticTeamStrength(p) {
  return clamp(p.teamStrength * 0.72 + ((p.bat + p.bowl) / 2) * 0.28, 15, 99);
}

// international matches lean much more heavily on the nation's own baseline strength than any one player,
// but your own current rating still moves the needle a little
function intlTeamStrength(p) {
  const base = NATION_STRENGTH[p.country] * 0.82 + ((p.bat + p.bowl) / 2) * 0.18;
  return clamp(base + (p.isNationalCaptain ? 4 : 0) + randInt(-4, 4), 20, 99);
}

function milestonesFor(perf) {
  const out = [];
  if (perf.batted) {
    if (perf.runs >= 100) out.push(`💯 Century! ${perf.runs}(${perf.balls})`);
    else if (perf.runs >= 50) out.push(`🔥 Half-century — ${perf.runs}(${perf.balls})`);
  }
  if (perf.innings2) {
    if (perf.innings2.runs >= 100) out.push(`💯 Century! ${perf.innings2.runs}(${perf.innings2.balls}) — 2nd innings`);
    else if (perf.innings2.runs >= 50) out.push(`🔥 Half-century — ${perf.innings2.runs}(${perf.innings2.balls}) — 2nd innings`);
  }
  if (perf.bowled && perf.wickets >= 5) out.push(`🎯 Five-wicket haul! ${perf.wickets}/${perf.runsConceded}`);
  else if (perf.bowled && perf.wickets >= 3) out.push(`👏 ${perf.wickets}-wicket spell`);
  return out;
}

function matchMarginText(won, fmt) {
  const longFmt = fmt === "TEST" || fmt === "FC";
  if (Math.random() < 0.5) {
    const wkts = longFmt ? randInt(3, 10) : randInt(1, 9);
    return `${won ? "Won" : "Lost"} by ${wkts} wicket${wkts === 1 ? "" : "s"}`;
  }
  if (longFmt && Math.random() < 0.22) {
    const runs = randInt(20, 220);
    return `${won ? "Won" : "Lost"} by an innings and ${runs} run${runs === 1 ? "" : "s"}`;
  }
  const runs = longFmt ? randInt(15, 220) : randInt(2, 90);
  return `${won ? "Won" : "Lost"} by ${runs} run${runs === 1 ? "" : "s"}`;
}

/* ================= archetypes ("played like") ================= */

function computeArchetype(p) {
  const d = combineStats(p.stats.domestic, p.stats.intl, p.stats.franchise, p.stats.overseas);
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
    fixtures.push({ opponent: choice(pool.length ? pool : poolCountryTeams), oppStrength: randInt(35, 70), played: false, fmt: domesticFmtTag(state), ground: groundFor(state.country) });
  }
  return fixtures;
}

function startSeason() {
  const p = state;
  const pool = teamPoolFor(p.country, p.domesticKind);
  p.fixtures = buildFixtures(domesticMatchCountFor(p), null, pool, p.team);
  p.matchIndex = 0;
  p.seasonDomStats = emptyStatBlock();
  p.seasonIntlStats = emptyStatBlock();
  p.seasonFranchiseStats = emptyStatBlock();
  p.seasonOverseasStats = emptyStatBlock();
  p.seasonEarnings = 0;
  const salaryThisSeason = (p.contract ? p.contract.salary : 0) + (p.franchiseContract ? p.franchiseContract.salary : 0);
  addEarnings(salaryThisSeason);
  p.domesticDone = false; p.intlDone = false; p.franchiseDone = p.format !== "ALL_ROUND";
  p.overseasPending = false; p.overseasDone = true; p.overseasOffer = null;
  p.overseasFixtures = []; p.overseasIndex = 0;
  p.selectedThisSeason = false;
  p.intlFixtures = []; p.intlIndex = 0;
  p.intlCallup = null; p.worldCupHost = null; p.worldCupSemifinalists = null; p.worldCupOtherSemiPair = null; p.worldCupStage = null;
  p.knockoutIntroShownFor = null;
  p.franchiseFixtures = []; p.franchiseIndex = 0;
  p.lastMatchResult = null; p.lastLeagueFinish = null; p.lastSeasonSummary = null;
  p.lastIntlSummary = null; p.lastFranchiseSummary = null; p.lastOverseasSummary = null;
  p.bigEvent = bigEventInfo(p);
  p.tournamentTable = null;
  p.wheelResult = null;
  p.introShownThisWindow = false;
  p.debutPending = null;
  p.hubTab = "Overview";
  save();
}

function playDomesticMatch(precomputedPerf, precomputedTossNote) {
  const p = state;
  const fx = p.fixtures[p.matchIndex];
  const tossNote = precomputedPerf ? precomputedTossNote : tossNoteFor(window.__matchToss);
  const perf = precomputedPerf || simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
  if (!precomputedPerf) window.__matchToss = null;
  const won = Math.random() < teamWinProbability(domesticTeamStrength(p), fx.oppStrength, perf);
  fx.played = true; fx.won = won;
  addStat(p.seasonDomStats, perf); addStat(p.stats.domestic, perf);
  p.caps.domestic += 1;
  p.lastMatchResult = { kind: "domestic", fmt: fx.fmt, opponent: fx.opponent, ground: fx.ground, won, margin: matchMarginText(won, fx.fmt), perf, milestones: milestonesFor(perf), tossNote };
  p.matchIndex += 1;
  gainReputation(perf, won);
  awardMatchEarnings("domestic", fx.fmt, perf, won);
  if (p.matchIndex >= p.fixtures.length) finishDomesticSeason();
  save();
}

function simRestOfDomesticSeason() {
  const p = state;
  while (p.matchIndex < p.fixtures.length) {
    const fx = p.fixtures[p.matchIndex];
    const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
    const won = Math.random() < teamWinProbability(domesticTeamStrength(p), fx.oppStrength, perf);
    fx.played = true; fx.won = won;
    addStat(p.seasonDomStats, perf); addStat(p.stats.domestic, perf);
    p.caps.domestic += 1;
    gainReputation(perf, won);
    awardMatchEarnings("domestic", fx.fmt, perf, won);
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
    addEarnings(TROPHY_BONUS.domestic);
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
  else { p.franchiseDone = true; setupOverseasPhase(); }
  save();
}

const OVERSEAS_LEAGUE_NAME = {
  "India": "IPL", "Australia": "BBL", "England": "The Hundred", "Pakistan": "PSL",
  "South Africa": "SA20", "West Indies": "CPL", "New Zealand": "Super Smash",
  "Sri Lanka": "LPL", "Bangladesh": "BPL", "Afghanistan": "Shpageeza League",
};

// established franchise players get scouted by other T20 leagues around the world — a fun, lower-stakes side stint
function setupOverseasPhase() {
  const p = state;
  const eligible = (p.format === "SHORT" || p.format === "ALL_ROUND") && p.reputation >= 45;
  const triggered = eligible && Math.random() < 0.55;
  if (triggered) {
    const leagueCountry = choice(COUNTRIES.map(c => c.name).filter(n => n !== p.country && T20_FRANCHISES[n]));
    const team = choice(T20_FRANCHISES[leagueCountry]);
    p.overseasOffer = { team, country: leagueCountry, league: OVERSEAS_LEAGUE_NAME[leagueCountry] || `${leagueCountry} League`, fee: overseasFeeFor(p.reputation) };
    p.overseasPending = true;
    p.overseasDone = false;
    save();
  } else {
    p.overseasOffer = null;
    p.overseasPending = false;
    p.overseasDone = true;
    decideInternationalSelection();
  }
}

function startOverseasStint() {
  const p = state;
  const offer = p.overseasOffer;
  addEarnings(offer.fee);
  const pool = T20_FRANCHISES[offer.country].filter(t => t !== offer.team);
  p.overseasFixtures = pickN(pool, Math.min(4, pool.length)).map(opp => ({ opponent: opp, oppStrength: randInt(45, 78), played: false, fmt: "FRANCHISE", ground: groundFor(offer.country) }));
  p.overseasIndex = 0;
  p.overseasPending = false;
}

function playOverseasMatch(precomputedPerf, precomputedTossNote) {
  const p = state;
  const fx = p.overseasFixtures[p.overseasIndex];
  const tossNote = precomputedPerf ? precomputedTossNote : tossNoteFor(window.__matchToss);
  const perf = precomputedPerf || simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
  if (!precomputedPerf) window.__matchToss = null;
  const won = Math.random() < teamWinProbability(domesticTeamStrength(p) + 2, fx.oppStrength, perf);
  fx.played = true; fx.won = won;
  addStat(p.seasonOverseasStats, perf); addStat(p.stats.overseas, perf);
  p.caps.overseas = (p.caps.overseas || 0) + 1;
  p.lastMatchResult = { kind: "overseas", fmt: fx.fmt, opponent: fx.opponent, ground: fx.ground, won, margin: matchMarginText(won, fx.fmt), perf, milestones: milestonesFor(perf), tossNote, tag: p.overseasOffer.league };
  p.overseasIndex += 1;
  gainReputation(perf, won);
  awardMatchEarnings("overseas", fx.fmt, perf, won);
  if (p.overseasIndex >= p.overseasFixtures.length) finishOverseasStint();
  save();
}

function simRestOfOverseas() {
  const p = state;
  while (p.overseasIndex < p.overseasFixtures.length) {
    const fx = p.overseasFixtures[p.overseasIndex];
    const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
    const won = Math.random() < teamWinProbability(domesticTeamStrength(p) + 2, fx.oppStrength, perf);
    fx.played = true; fx.won = won;
    addStat(p.seasonOverseasStats, perf); addStat(p.stats.overseas, perf);
    p.caps.overseas = (p.caps.overseas || 0) + 1;
    gainReputation(perf, won);
    awardMatchEarnings("overseas", fx.fmt, perf, won);
    p.overseasIndex += 1;
  }
  p.lastMatchResult = null;
  finishOverseasStint();
  save();
}

function finishOverseasStint() {
  const p = state;
  const offer = p.overseasOffer;
  p.overseasDone = true;
  p.lastOverseasSummary = { stats: { ...p.seasonOverseasStats }, team: offer.team, league: offer.league, country: offer.country };
  p.franchiseHistory.push({ season: p.season, team: offer.team, country: offer.country, league: offer.league });
  decideInternationalSelection();
}

function proceedAfterOverseas() {
  if (state.selectedThisSeason && !state.intlDone) return App.enterInternationalPhase();
  renderSeasonSummary();
}

function startFranchiseStint() {
  const p = state;
  const pool = teamPoolFor(p.country, "FRANCHISE");
  const games = franchiseMatchCountFor(p);
  p.franchiseFixtures = pickN(pool.filter(t => t !== p.franchiseTeam), games).map(opp => ({ opponent: opp, oppStrength: randInt(40, 72), played: false, fmt: "FRANCHISE", ground: groundFor(p.country) }));
  p.franchiseIndex = 0;
  p.franchiseDone = false;
}

function playFranchiseMatch(precomputedPerf, precomputedTossNote) {
  const p = state;
  const fx = p.franchiseFixtures[p.franchiseIndex];
  const tossNote = precomputedPerf ? precomputedTossNote : tossNoteFor(window.__matchToss);
  const perf = precomputedPerf || simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
  if (!precomputedPerf) window.__matchToss = null;
  const won = Math.random() < teamWinProbability(franchiseTeamStrength(p) + 4, fx.oppStrength, perf);
  fx.played = true; fx.won = won;
  addStat(p.seasonFranchiseStats, perf); addStat(p.stats.franchise, perf);
  p.caps.franchise += 1;
  p.lastMatchResult = { kind: "franchise", fmt: "FRANCHISE", opponent: fx.opponent, ground: fx.ground, won, margin: matchMarginText(won, fx.fmt), perf, milestones: milestonesFor(perf), tossNote };
  p.franchiseIndex += 1;
  gainReputation(perf, won);
  awardMatchEarnings("franchise", "FRANCHISE", perf, won);
  if (p.franchiseIndex >= p.franchiseFixtures.length) finishFranchiseStint();
  save();
}

function simRestOfFranchise() {
  const p = state;
  while (p.franchiseIndex < p.franchiseFixtures.length) {
    const fx = p.franchiseFixtures[p.franchiseIndex];
    const perf = simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
    const won = Math.random() < teamWinProbability(franchiseTeamStrength(p) + 4, fx.oppStrength, perf);
    fx.played = true; fx.won = won;
    addStat(p.seasonFranchiseStats, perf); addStat(p.stats.franchise, perf);
    p.caps.franchise += 1;
    gainReputation(perf, won);
    awardMatchEarnings("franchise", "FRANCHISE", perf, won);
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
  setupOverseasPhase();
}

// real bilateral rivalries carry a named Test trophy — everything else just gets a plain series tag
const RIVALRY_SERIES = {
  "Australia|England": "The Ashes",
  "Australia|India": "Border-Gavaskar Trophy",
  "England|India": "Anderson-Tendulkar Trophy",
  "Australia|New Zealand": "Trans-Tasman Trophy",
  "Australia|West Indies": "Frank Worrell Trophy",
  "England|West Indies": "Wisden Trophy",
  "England|South Africa": "Basil D'Oliveira Trophy",
  "India|South Africa": "Freedom Trophy",
};
const FMT_SERIES_WORD = { TEST: "Test", ODI: "ODI", T20: "T20I" };
function seriesNameFor(countryA, countryB, fmt) {
  if (fmt === "TEST") {
    const key = [countryA, countryB].sort().join("|");
    if (RIVALRY_SERIES[key]) return RIVALRY_SERIES[key];
  }
  return `${countryB} ${FMT_SERIES_WORD[fmt] || "International"} Series`;
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
  p.tournamentTable = null;
  p.intlCallup = null;
  if (p.selectedThisSeason) {
    if (p.bigEvent.active) {
      // you can't headline a World Cup or a Final in a format you've never actually played before
      const priorCaps = p.formatCaps[p.bigEvent.fmt] || 0;
      const minNeeded = p.bigEvent.kind === "FINAL" ? 4 : 1;
      if (priorCaps < minNeeded) p.bigEvent = { active: false };
    }
    // reaching a Final at all is also gated by the nation's own standing — a weak side rarely gets there
    if (p.bigEvent.active && p.bigEvent.kind === "FINAL") {
      const qualifyChance = clamp((NATION_STRENGTH[p.country] - 38) / 62, 0.04, 0.92);
      if (Math.random() >= qualifyChance) p.bigEvent = { active: false };
    }
    const fmt = p.bigEvent.active ? p.bigEvent.fmt : intlFmtTag(p);
    if (p.bigEvent.active) {
      p.intlCallup = { isBigEvent: true, fmt, name: p.bigEvent.name, kind: p.bigEvent.kind };
    } else {
      const opp = choice(OPPONENT_NATIONS_POOL.filter(n => n !== p.country));
      p.intlCallup = { isBigEvent: false, fmt, opponent: opp, name: seriesNameFor(p.country, opp, fmt) };
    }
  } else {
    p.intlDone = true;
  }
  save();
}

// only called once the player accepts the call-up — builds the actual fixtures for the window
function buildIntlFixturesFromCallup() {
  const p = state;
  const c = p.intlCallup;
  const fmt = c.fmt;
  if (c.isBigEvent && c.kind === "FINAL") {
    p.intlFixtures = [{
      opponent: choice(OPPONENT_NATIONS_POOL.filter(n => n !== p.country)),
      oppStrength: randInt(55, 85), played: false, fmt, tag: c.name, ground: WTC_FINAL_GROUND,
    }];
  } else if (c.isBigEvent) {
    // a World Cup is hosted in one nation for the whole tournament, played across that country's grounds
    const host = Math.random() < 0.3 ? p.country : choice(OPPONENT_NATIONS_POOL);
    p.worldCupHost = host;
    const oppPool = OPPONENT_NATIONS_POOL.filter(n => n !== p.country);
    const groupOpponents = pickN(oppPool, 5);
    p.intlFixtures = groupOpponents.map(opp => ({
      opponent: opp, oppStrength: randInt(45, 80), played: false, fmt, tag: c.name, stage: "GROUP", ground: groundFor(host),
    }));
    const extraPool = oppPool.filter(n => !groupOpponents.includes(n));
    const extras = pickN(extraPool, Math.min(2, extraPool.length));
    p.tournamentTable = [p.country, ...groupOpponents, ...extras].map(n => ({ nation: n, played: 0, won: 0, lost: 0, pts: 0 }));
  } else {
    // a bilateral series — one opponent, hosted by one side, played across a few of their grounds
    const games = fmt === "TEST" ? randInt(2, 5) : randInt(3, 5);
    const host = Math.random() < 0.5 ? p.country : c.opponent;
    const seriesStrength = randInt(45, 80);
    p.intlFixtures = Array.from({ length: games }, () => ({
      opponent: c.opponent, oppStrength: clamp(seriesStrength + randInt(-6, 6), 30, 95),
      played: false, fmt, tag: c.name, ground: groundFor(host),
    }));
  }
  p.intlIndex = 0;
  save();
}

// group stage done — check qualification and, if you're through, add the semi-final fixture
function progressAfterGroupStage() {
  const p = state;
  const sorted = p.tournamentTable.slice().sort((a, b) => b.pts - a.pts || (b.won - a.won));
  const top4 = sorted.slice(0, 4).map(r => r.nation);
  p.worldCupSemifinalists = top4;
  if (!top4.includes(p.country)) {
    p.worldCupStage = "GROUP_EXIT";
    return finishInternationalWindow();
  }
  const others = top4.filter(n => n !== p.country);
  const semiOpp = choice(others);
  p.worldCupOtherSemiPair = others.filter(n => n !== semiOpp);
  p.intlFixtures.push({
    opponent: semiOpp, oppStrength: randInt(55, 85), played: false,
    fmt: p.bigEvent.fmt, tag: `${p.bigEvent.name} — Semi-Final`, stage: "SEMI",
    ground: groundFor(p.worldCupHost),
  });
  save();
}

// the other semi-final isn't played by you — resolve it on nation strength to find your final opponent
function progressToFinal() {
  const p = state;
  const pair = p.worldCupOtherSemiPair || [];
  let finalOpp;
  if (pair.length === 2) {
    const [a, b] = pair;
    finalOpp = (NATION_STRENGTH[a] + rand(-10, 10)) > (NATION_STRENGTH[b] + rand(-10, 10)) ? a : b;
  } else {
    finalOpp = pair[0] || choice(OPPONENT_NATIONS_POOL.filter(n => n !== p.country));
  }
  p.intlFixtures.push({
    opponent: finalOpp, oppStrength: randInt(60, 90), played: false,
    fmt: p.bigEvent.fmt, tag: `${p.bigEvent.name} — Final`, stage: "FINAL",
    ground: groundFor(p.worldCupHost),
  });
  save();
}

// dispatched whenever the current fixture list is exhausted — either the window is over,
// or (for a World Cup group stage) the next knockout fixture needs to be added
function advanceIntlWindow() {
  const p = state;
  if (p.bigEvent.active && p.bigEvent.kind === "GROUP") {
    const lastFx = p.intlFixtures[p.intlFixtures.length - 1];
    const stage = lastFx.stage || "GROUP";
    if (stage === "GROUP") return progressAfterGroupStage();
    if (stage === "SEMI") {
      if (!lastFx.won) { p.worldCupStage = "SEMI_LOSS"; return finishInternationalWindow(); }
      return progressToFinal();
    }
    if (stage === "FINAL") {
      p.worldCupStage = lastFx.won ? "CHAMPION" : "FINAL_LOSS";
      return finishInternationalWindow();
    }
  }
  finishInternationalWindow();
}

function updateTournamentTable(opponentName, playerWon) {
  const p = state;
  if (!p.tournamentTable) return;
  const meRow = p.tournamentTable.find(r => r.nation === p.country);
  const oppRow = p.tournamentTable.find(r => r.nation === opponentName);
  if (meRow) { meRow.played++; if (playerWon) { meRow.won++; meRow.pts += 2; } else meRow.lost++; }
  if (oppRow) { oppRow.played++; if (!playerWon) { oppRow.won++; oppRow.pts += 2; } else oppRow.lost++; }
  const others = p.tournamentTable.filter(r => r.nation !== p.country && r.nation !== opponentName);
  if (others.length >= 2) {
    const [a, b] = pickN(others, 2);
    const aWins = (NATION_STRENGTH[a.nation] + rand(-8, 8)) > (NATION_STRENGTH[b.nation] + rand(-8, 8));
    a.played++; b.played++;
    if (aWins) { a.won++; a.pts += 2; b.lost++; } else { b.won++; b.pts += 2; a.lost++; }
  }
}

// a knockout match pays and matters more than any group game, win or lose — the occasion itself is the reward
function applyKnockoutStakes(fx, won) {
  if (fx.stage !== "SEMI" && fx.stage !== "FINAL") return;
  const isFinal = fx.stage === "FINAL";
  addEarnings(isFinal ? 80000 : 40000);
  const p = state;
  p.reputation = clamp(p.reputation + (isFinal ? 4 : 2) + (won ? (isFinal ? 4 : 2) : 0), 0, 100);
}

function playIntlMatch(precomputedPerf, precomputedTossNote) {
  const p = state;
  const fx = p.intlFixtures[p.intlIndex];
  const tossNote = precomputedPerf ? precomputedTossNote : tossNoteFor(window.__matchToss);
  const perf = precomputedPerf || simulatePlayerPerformance(p, fx.oppStrength, fx.fmt);
  if (!precomputedPerf) window.__matchToss = null;
  const won = Math.random() < teamWinProbability(intlTeamStrength(p), fx.oppStrength, perf);
  fx.played = true; fx.won = won;
  addStat(p.seasonIntlStats, perf); addStat(p.stats.intl, perf);
  p.caps.intl += 1;
  p.formatCaps[fx.fmt] = (p.formatCaps[fx.fmt] || 0) + 1;
  p.lastMatchResult = { kind: "intl", fmt: fx.fmt, opponent: fx.opponent, ground: fx.ground, won, margin: matchMarginText(won, fx.fmt), perf, milestones: milestonesFor(perf), tag: fx.tag, tossNote, stage: fx.stage || null };
  p.intlIndex += 1;
  gainReputation(perf, won);
  awardMatchEarnings("intl", fx.fmt, perf, won);
  applyKnockoutStakes(fx, won);
  if (!fx.stage || fx.stage === "GROUP") updateTournamentTable(fx.opponent, won);
  if (p.intlIndex >= p.intlFixtures.length) advanceIntlWindow();
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
    p.formatCaps[fx.fmt] = (p.formatCaps[fx.fmt] || 0) + 1;
    gainReputation(perf, won);
    awardMatchEarnings("intl", fx.fmt, perf, won);
    applyKnockoutStakes(fx, won);
    if (!fx.stage || fx.stage === "GROUP") updateTournamentTable(fx.opponent, won);
    p.intlIndex += 1;
    if (p.intlIndex >= p.intlFixtures.length) advanceIntlWindow();
  }
  p.lastMatchResult = null;
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
      // the group table decided qualification, and any semi-final/final were real matches you actually played —
      // the finish tag just reports what already happened, no extra dice roll needed
      if (p.worldCupStage === "CHAMPION") finishTag = "Champions";
      else if (p.worldCupStage === "FINAL_LOSS") finishTag = "Runners-up";
      else if (p.worldCupStage === "SEMI_LOSS") finishTag = "Semi-finalists";
      else finishTag = "Group stage exit";
      if (finishTag === "Champions") trophy = { season: p.season, name: `${p.bigEvent.name} — Champions (${p.country})${captainNote}`, icon: "🏆" };
    }
    if (trophy) {
      p.trophies.push(trophy);
      addEarnings(TROPHY_BONUS.major);
    }
    p.lastIntlSummary = { stats: { ...s }, wins, bigEvent: true, eventName: p.bigEvent.name, finishTag, trophy, finalTable: p.tournamentTable, host: p.worldCupHost };
  } else {
    const firstFx = p.intlFixtures[0];
    p.lastIntlSummary = { stats: { ...s }, wins, bigEvent: false, seriesName: p.intlCallup ? p.intlCallup.name : (firstFx ? firstFx.tag : null), opponent: firstFx ? firstFx.opponent : null };
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
  const innScores = [];
  if (perf.batted) innScores.push(perf.runs);
  if (perf.innings2) innScores.push(perf.innings2.runs);
  innScores.forEach(r => { if (r >= 100) delta += 4; else if (r >= 50) delta += 1.5; });
  if (perf.bowled && perf.wickets >= 5) delta += 4;
  else if (perf.bowled && perf.wickets >= 3) delta += 1.2;
  if (delta > 0) delta *= 1 + perkValue("mediaSavvy");
  if (delta < 0) delta *= 1 - perkValue("ironResolve");
  p.reputation = clamp(p.reputation + delta, 0, 100);
}

/* ================= career events: sponsorship & captaincy ================= */

function checkForCareerEvents() {
  const p = state;
  p.pendingEvents = [];
  const sponsorDue = p.season === 2 || (p.season > 2 && (p.season - 2) % 4 === 0);
  if (sponsorDue) p.pendingEvents.push({ type: "sponsor" });
  const transferDue = p.season >= 3 && p.season % 3 === 0 && p.age < 34;
  if (transferDue) p.pendingEvents.push({ type: "transfer" });
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
      addEarnings(40000);
      return "A bumper endorsement deal lands — your profile is bigger than ever, and $40k richer.";
    case "fan_favourite":
      p.reputation = clamp(p.reputation + 8, 0, 100); p.teamStrength = clamp(p.teamStrength + 3, 1, 99);
      return "The fans are firmly behind you heading into the new season.";
    case "extra_yards": {
      if (p.role === "All-rounder") { p.bat = clamp(p.bat + 4, 1, 99); p.bowl = clamp(p.bowl + 4, 1, 99); }
      else if (p.role === "Bowler") p.bowl = clamp(p.bowl + 6, 1, 99);
      else p.bat = clamp(p.bat + 6, 1, 99);
      return "Extra hours put in over the off-season pay off — your main skill sharpens noticeably.";
    }
    case "media_circus":
      p.reputation = clamp(p.reputation + 12, 0, 100);
      p.bat = clamp(p.bat - 3, 1, 99); p.bowl = clamp(p.bowl - 3, 1, 99);
      return "Endless interviews and appearances raise your profile — but eat into your training time.";
    case "niggle":
      p.bat = clamp(p.bat - 3, 1, 99); p.bowl = clamp(p.bowl - 3, 1, 99);
      return "A niggling injury in the off-season blunts your sharpness a little.";
    case "lost_form": {
      if (p.role === "All-rounder") { p.bat = clamp(p.bat - 5, 1, 99); p.bowl = clamp(p.bowl - 5, 1, 99); }
      else if (p.role === "Bowler") p.bowl = clamp(p.bowl - 8, 1, 99);
      else p.bat = clamp(p.bat - 8, 1, 99);
      return "You just can't find rhythm in the nets this off-season — a real dip in form.";
    }
    case "injury_scare":
      p.bat = clamp(p.bat - 6, 1, 99); p.bowl = clamp(p.bowl - 6, 1, 99);
      p.reputation = clamp(p.reputation - 5, 0, 100);
      return "A scary injury setback wipes out weeks of preparation — a real blow heading into the new season.";
    default:
      return "";
  }
}

/* ================= aging / retirement ================= */

function ageAndProgress() {
  const p = state;
  const growthAge = 27, declineAge = 32;
  const before = { bat: p.bat, bowl: p.bowl };
  // a skill you don't actually practise doesn't mature just from getting older —
  // only the discipline(s) your role calls for grow with age; an unpractised skill can only rust
  const practises = {
    bat: p.role !== "Bowler",
    bowl: p.role === "Bowler" || p.role === "All-rounder",
  };
  ["bat", "bowl"].forEach(k => {
    if (p[k] <= 3) return;
    if (p.age < growthAge) {
      if (practises[k]) {
        const gap = p.potential - p[k];
        p[k] += Math.max(0, Math.round(gap * rand(0.06, 0.2)));
      }
    } else if (p.age <= declineAge) {
      if (practises[k]) p[k] += randInt(-1, 2);
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
    season: p.season, age: p.age, team: p.team,
    dom: { ...p.seasonDomStats }, intl: { ...p.seasonIntlStats }, franchise: { ...p.seasonFranchiseStats }, overseas: { ...p.seasonOverseasStats },
    champion: p.lastLeagueFinish ? p.lastLeagueFinish.champion : false,
  });

  p.forcedRetireOffer = (p.age >= RETIRE_AGE_SOFT && (p.bat < 32 && p.bowl < 32)) || p.age >= RETIRE_AGE_HARD - 1;
  save();
}

function battingFormScore(p) {
  const recent = p.seasonLog.slice(-2);
  if (!recent.length) return 0;
  const combined = recent.map(s => combineStats(s.dom, s.intl, s.franchise, s.overseas));
  const runs = combined.reduce((a, s) => a + s.runs, 0);
  const matches = combined.reduce((a, s) => a + s.matches, 0);
  return matches ? runs / matches : 0;
}
function bowlingFormScore(p) {
  const recent = p.seasonLog.slice(-2);
  if (!recent.length) return 0;
  const combined = recent.map(s => combineStats(s.dom, s.intl, s.franchise, s.overseas));
  const wkts = combined.reduce((a, s) => a + s.wickets, 0);
  const matches = combined.reduce((a, s) => a + s.matches, 0);
  return matches ? (wkts / matches) * 20 : 0;
}

function updateRankings() {
  const p = state;
  // world rankings are an international thing — nothing to rank until you've actually debuted
  if (p.caps.intl <= 0) { p.rankBat = null; p.rankBowl = null; return; }
  const i = p.stats.intl;
  // you can only be ranked in a discipline you've actually done on the international stage —
  // a specialist batter with a decent hidden bowling attribute but zero overs bowled is not a "ranked bowler"
  if (i.innings > 0) {
    const batPoints = clamp(p.bat * 0.55 + battingFormScore(p) * 1.3 + p.reputation * 0.1, 0, 220);
    p.rankBat = clamp(101 - Math.round(batPoints / 2.1), 1, 100);
  } else {
    p.rankBat = null;
  }
  if (i.overs > 0) {
    const bowlPoints = clamp(p.bowl * 0.55 + bowlingFormScore(p) * 1.3 + p.reputation * 0.1, 0, 220);
    p.rankBowl = clamp(101 - Math.round(bowlPoints / 2.1), 1, 100);
  } else {
    p.rankBowl = null;
  }
}

// established, well-regarded internationals get rested/rotated domestically — fewer state games as your caps and standing grow
// how strong a club is FOR ITS OWN COUNTRY — nation baseline varies a lot, so an absolute
// strength number isn't comparable across countries; this reconstructs the relative "mod" instead
function clubRelativeStrength(p, strength) {
  return strength - (NATION_STRENGTH[p.country] || 70) * 0.55;
}

function domesticMatchCountFor(p) {
  const caps = p.caps.intl;
  const established = p.reputation >= 55;
  if (established && caps >= 30) return 4;
  if (established && caps >= 18) return 6;
  if (established && caps >= 8) return 8;
  // breaking into a stacked side as a nobody is genuinely hard — you'll ride the bench more often
  if (!established) {
    const rel = clubRelativeStrength(p, p.teamStrength);
    if (rel >= 6) return MATCHES_PER_SEASON - 5;
    if (rel >= 2) return MATCHES_PER_SEASON - 2;
  }
  return MATCHES_PER_SEASON;
}

function franchiseMatchCountFor(p) {
  const strength = p.franchiseTeamStrength != null ? p.franchiseTeamStrength : p.teamStrength;
  const established = p.reputation >= 55;
  if (!established) {
    const rel = clubRelativeStrength(p, strength);
    if (rel >= 6) return 2;
    if (rel >= 2) return 3;
  }
  return 4;
}

function franchiseTeamStrength(p) {
  const base = p.franchiseTeamStrength != null ? p.franchiseTeamStrength : p.teamStrength;
  return clamp(base * 0.72 + ((p.bat + p.bowl) / 2) * 0.28, 15, 99);
}

function advanceToNextSeason() {
  const p = state;
  if (p.age >= RETIRE_AGE_HARD || p.season >= MAX_SEASONS) { retirePlayer(); return; }
  p.season += 1; p.age += 1;
  startSeason();
}

function retirePlayer() { state.retired = true; save(); }

function legacyTier(p) {
  const all = combineStats(p.stats.domestic, p.stats.intl, p.stats.franchise, p.stats.overseas);
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

const HOW_TO_PLAY_STEPS = [
  { icon: "📅", title: "Pick a format", body: "Long Format is first-class cricket leading to Test caps. Short Format signs you to a T20 franchise leading to T20I caps. All-Round does both, plus a mix of Test/ODI/T20I call-ups." },
  { icon: "🏏", title: "Create your player", body: "Choose a country, role (Batsman, Bowler, All-rounder, Wicketkeeper-Batsman), batting hand, and bowling style. Stronger cricket nations start with tougher competition but a better shot at team trophies." },
  { icon: "📆", title: "Play your season", body: "Work through your domestic (or franchise) fixtures one at a time, or sim the rest of the season in one go. Good form and reputation earn international call-ups." },
  { icon: "✈️", title: "Represent your country", body: "Once selected, play your international window. Big events like World Cups and Test Championship Finals only open up once you've actually debuted in that format." },
  { icon: "🎡", title: "Off-season", body: "Spin the wheel for a boost or setback, weigh up sponsorship offers and captaincy opportunities, then age into the next season." },
  { icon: "🏆", title: "Build a legacy", body: "Play up to 20 seasons, chase trophies, caps and world rankings, then see your career tier and \"Played Like\" archetype when you retire." },
];

const FAQ_ITEMS = [
  { q: "What's the difference between Long, Short, and All-Round formats?", a: "Long Format is first-class cricket leading to Test caps. Short Format signs you to a T20 franchise leading to T20I caps. All-Round does both, plus a mix of Test, ODI and T20I call-ups." },
  { q: "How do I get picked for my national team?", a: "Selection chance is driven by your domestic/franchise form, your current rating, and your reputation. The better and more consistent you are, the more often you'll get picked." },
  { q: "Why wasn't I picked for the World Cup or Test Championship Final?", a: "Big events require you to have already debuted internationally in that specific format — you can't headline a World Cup in a format you've never played. Reaching a Test Championship Final is also gated by your nation's overall strength, so weaker sides qualify less often." },
  { q: "How do I become captain?", a: "Domestic captaincy is offered once you're experienced enough and your reputation is high enough. National captaincy follows once you're an established domestic captain with enough international caps and reputation." },
  { q: "How do sponsorships work?", a: "You start out with rookie brands. Once your reputation and experience grow, established brands become available, and only once you're a genuinely proven star (top-10 world ranking, a trophy or award, high reputation) do elite brands come calling." },
  { q: "Why is it so hard for a weaker cricket nation to win a World Cup?", a: "Team success leans heavily on your nation's overall rating, not just your personal stats. You can still shine individually, but dragging a weaker side to a title is realistically difficult — though upsets do occasionally happen." },
  { q: "What does \"Played Like\" mean?", a: "It's a fun comparison of your career stats against common player archetypes (e.g. \"The Finisher\", \"The Metronome\") based on your average, strike rate, and role." },
  { q: "Where are my saves stored?", a: "Locally in your browser, tied to the name you sign in with. Saves don't sync between devices or browsers, so use the same browser and name to pick up where you left off." },
  { q: "Can I run more than one career at once?", a: "Yes — start as many dynasties as you like from the \"Your Dynasties\" screen, and switch between them any time." },
  { q: "The wheel gave me a setback — is that unfair?", a: "Three of the four wheel outcomes are boosts, so it's usually in your favour, but the odd niggle or injury setback keeps every off-season interesting." },
];

const BUYMEACOFFEE_URL = "https://buymeacoffee.com/cricdynasty";
const FEEDBACK_EMAIL = "aj.vijayarajan@icloud.com";
const FEEDBACK_FORM_ACTION = `https://formsubmit.co/${FEEDBACK_EMAIL}`;
const SITE_URL = "https://cricdynasty-au.github.io/cricdynasty/";
const FEEDBACK_REDIRECT_URL = `${SITE_URL}?feedback=sent`;

function helpLinksRow() {
  return `
    <div class="help-links">
      <button class="secondary" onclick="App.goHowToPlay()">📖 How to Play</button>
      <button class="secondary" onclick="App.goFaq()">❓ FAQ</button>
      <button class="secondary" onclick="App.goFeedback()">💬 Feedback &amp; Bugs</button>
      <a class="secondary coffee-link" href="${BUYMEACOFFEE_URL}" target="_blank" rel="noopener noreferrer">☕ Buy me a coffee</a>
    </div>
  `;
}

function helpBackTarget() { return currentUser ? "App.goSaveList()" : "App.goLogin()"; }

function renderFeedback() {
  applyTheme("default");
  screen(`
    ${masthead(`<button class="link-btn" onclick="App.returnFromFeedback()">‹ Back</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Get in touch</div>
      <h1>Feedback &amp; Bugs</h1>
      <p>Found a bug, or got an idea for the game? Send it through — it goes straight to the person building this.</p>
    </div>
    <form class="card stack" action="${FEEDBACK_FORM_ACTION}" method="POST">
      <input type="hidden" name="_subject" value="CricDynasty feedback">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_next" value="${FEEDBACK_REDIRECT_URL}">
      <label class="field">Your name (optional)
        <input type="text" name="name" autocomplete="off" placeholder="Your name">
      </label>
      <label class="field">Your email (optional, if you'd like a reply)
        <input type="email" name="email" autocomplete="off" placeholder="you@example.com">
      </label>
      <label class="field">Type
        <select name="type">
          <option value="Feedback">General feedback</option>
          <option value="Bug report">Bug report</option>
        </select>
      </label>
      <label class="field">Message
        <textarea name="message" required rows="5" placeholder="What's on your mind?"></textarea>
      </label>
      <button class="primary" type="submit">Send</button>
    </form>
  `);
}

function renderFeedbackThanks() {
  applyTheme("default");
  screen(`
    ${masthead()}
    <div class="big-event-screen">
      <div class="big-event-trophy">✅</div>
      <div class="mode-tag">Feedback sent</div>
      <div class="big-event-title" style="font-size:28px;">Thanks!</div>
      <p style="color:var(--text-dim);max-width:380px;">Your message is on its way — I read every one and appreciate you taking the time.</p>
      <button class="primary" style="max-width:280px;" onclick="App.continueAfterFeedback()">Continue</button>
    </div>
  `);
}

function renderHowToPlay() {
  applyTheme("default");
  screen(`
    ${masthead(`<button class="link-btn" onclick="${helpBackTarget()}">‹ Back</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Guide</div>
      <h1>How to Play</h1>
      <p>The career loop, start to finish.</p>
    </div>
    <div class="card">
      <div class="howto-list">
        ${HOW_TO_PLAY_STEPS.map((s, i) => `
          <div class="howto-step">
            <div class="howto-icon">${s.icon}</div>
            <div>
              <div class="howto-title">${i + 1}. ${s.title}</div>
              <div class="howto-body">${s.body}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
    <button class="secondary" onclick="App.goFaq()">❓ Read the FAQ instead</button>
  `);
}

function renderFaq() {
  applyTheme("default");
  screen(`
    ${masthead(`<button class="link-btn" onclick="${helpBackTarget()}">‹ Back</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Support</div>
      <h1>FAQ</h1>
      <p>Common questions about how the career sim works.</p>
    </div>
    <div class="card">
      <div class="faq-list">
        ${FAQ_ITEMS.map(f => `
          <details class="faq-item">
            <summary>${f.q}</summary>
            <p>${f.a}</p>
          </details>
        `).join("")}
      </div>
    </div>
    <button class="secondary" onclick="App.goHowToPlay()">📖 Read How to Play instead</button>
  `);
}

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
    ${helpLinksRow()}
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
      ${saves.map(s => {
        const outdated = s.version !== SAVE_VERSION;
        return `
        <div class="format-card" onclick="App.openSave('${s.id}')">
          <div class="format-icon">${flagFor(s.country)}</div>
          <div style="flex:1;">
            <div class="format-title">${s.name} · Season ${s.season}/${MAX_SEASONS}${s.retired ? " · Retired" : ""}${outdated ? ` <span class="badge" style="color:var(--accent-3);">Outdated</span>` : ""}</div>
            <div class="format-desc">${outdated ? "Saved with an older version of the game — tap to see options." : `Currently playing for ${s.team}${s.franchiseTeam && s.format === "ALL_ROUND" ? ` / ${s.franchiseTeam}` : ""}`}</div>
          </div>
          <button class="link-btn" onclick="event.stopPropagation(); App.deleteSaveConfirm('${s.id}')" style="color:var(--accent-3);">Delete</button>
        </div>
      `;
      }).join("")}
    </div>
    <button class="primary" onclick="App.goFormatSelect()">+ Start New Dynasty</button>
    ${helpLinksRow()}
  `);
}

function renderSaveIncompatible(rec) {
  applyTheme("default");
  screen(`
    ${masthead(`<button class="link-btn" onclick="App.goSaveList()">‹ Back</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Save incompatible</div>
      <h1>${rec.name}'s dynasty can't continue</h1>
      <p>This career was saved with an older version of CricDynasty (v${rec.version}, this build needs v${SAVE_VERSION}). Recent updates changed how careers are stored under the hood — new fields this save doesn't have — so it can't be safely resumed. Sorry about that; you'll need to start a fresh dynasty to keep playing.</p>
    </div>
    <div class="stack">
      <button class="secondary" onclick="App.deleteSaveConfirm('${rec.id}')">Delete this save</button>
      <button class="primary" onclick="App.goSaveList()">‹ Back to dynasties</button>
    </div>
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

/* ================= club offers (creation + transfer window) ================= */

function clubTagAndDesc(mod, forCreation) {
  if (mod >= 6) return { tag: "Title Contenders", desc: forCreation
    ? "A stacked squad with real expectations. Breaking into the XI as a nobody is genuinely hard — expect fewer starts early on — but the trophies and reputation are bigger if you force your way in. A real risk to take."
    : "A stacked squad with real expectations — harder to force your way in, bigger trophies if you do." };
  if (mod <= -6) return { tag: "Rebuilding Project", desc: forCreation
    ? "A young side short on depth — they need bodies, so you'll play every match from day one. Regular cricket straight away, but titles will take longer to come."
    : "A young side short on depth — an easier path to a regular starting spot and captaincy, but titles will take longer." };
  return { tag: "Established Mid-Table Side", desc: forCreation
    ? "A steady, competitive outfit with no fixed pecking order — a fair chance of regular cricket without the pressure of a title-chasing squad."
    : "A steady, competitive outfit with no fixed pecking order." };
}

// used for the transfer window — a handful of clubs make an offer, and a proven player's prestige pays off
function generateClubOffers(country, kind, excludeTeam, n, reputation) {
  const pool = teamPoolFor(country, kind).filter(t => t !== excludeTeam);
  const picks = pickN(pool, Math.min(n || 3, pool.length));
  return picks.map(team => {
    const mod = randInt(-10, 10);
    const { tag, desc } = clubTagAndDesc(mod, false);
    const salary = contractSalaryFor(kind, mod, reputation, true);
    return { team, mod, tag, desc, salary };
  });
}

// used at career creation — every club in the country is on the table, all paying the same standard
// rookie wage, and choosing a stronger side is a genuine playing-time gamble rather than a free upgrade
function allClubOffersFor(country, kind, excludeTeam, reputation) {
  const pool = teamPoolFor(country, kind).filter(t => t !== excludeTeam);
  const nationBaseline = NATION_STRENGTH[country] || 70;
  return pool.map(team => {
    const mod = randInt(-10, 10);
    const strength = clamp(Math.round(nationBaseline * 0.55) + mod, 15, 99);
    const { tag, desc } = clubTagAndDesc(mod, true);
    const salary = contractSalaryFor(kind, mod, reputation, false);
    return { team, mod, strength, tag, desc, salary };
  }).sort((a, b) => b.strength - a.strength);
}

function renderClubChoice() {
  applyTheme(draft.country);
  const kind = draft.format === "SHORT" ? "FRANCHISE" : "FC";
  const label = kind === "FRANCHISE" ? "franchise" : "domestic side";
  const offers = window.__clubOffers;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Sign your first contract</div>
      <h1>Choose your ${label}</h1>
      <p>Every club in ${draft.country} is open to a rookie on the same standard deal — ${formatMoney(offers[0].salary)}/season. The only thing that changes is how hard it'll be to get a game.</p>
    </div>
    <div class="stack">
      ${offers.map((o, idx) => `
        <div class="perk-item" style="cursor:pointer;" onclick="App.pickClub(${idx})">
          <div class="perk-head">
            <span class="perk-icon">🏟️</span>
            <div class="perk-name">${o.team}</div>
            <span class="perk-price">⭐ ${o.strength}</span>
          </div>
          <div class="perk-desc"><strong style="color:var(--text);">${o.tag}</strong> — ${o.desc}</div>
        </div>
      `).join("")}
    </div>
  `);
}

function renderFranchiseChoice() {
  applyTheme(draft.country);
  const offers = window.__franchiseOffers;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">And on the side...</div>
      <h1>Choose your T20 franchise</h1>
      <p>You'll turn out here during the franchise window each season, alongside your first-class cricket. Same deal — every franchise pays the same ${formatMoney(offers[0].salary)}/season; the strength of the squad decides how easily you'll get a game.</p>
    </div>
    <div class="stack">
      ${offers.map((o, idx) => `
        <div class="perk-item" style="cursor:pointer;" onclick="App.pickFranchise(${idx})">
          <div class="perk-head">
            <span class="perk-icon">⚡</span>
            <div class="perk-name">${o.team}</div>
            <span class="perk-price">⭐ ${o.strength}</span>
          </div>
          <div class="perk-desc"><strong style="color:var(--text);">${o.tag}</strong> — ${o.desc}</div>
        </div>
        </div>
      `).join("")}
    </div>
  `);
}

function renderTransferWindow() {
  const p = state;
  applyTheme(p.country);
  const offers = window.__transferOffers;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Transfer window</div>
      <h1>Stay or move on?</h1>
      <p>Your contract at ${p.team} is up for review, and a couple of rivals have come calling.</p>
    </div>
    <div class="stack">
      <div class="format-card" onclick="App.stayAtClub()">
        <div class="format-icon">🏠</div>
        <div>
          <div class="format-title">Stay at ${p.team}${p.isDomesticCaptain ? " — keep the captaincy" : ""}</div>
          <div class="format-desc">Familiar surroundings, no disruption to your role.</div>
          <div class="empty-note" style="padding-top:4px;">💰 ${formatMoney(p.contract ? p.contract.salary : 0)}/season</div>
        </div>
      </div>
      ${offers.map((o, idx) => `
        <div class="format-card" onclick="App.acceptTransfer(${idx})">
          <div class="format-icon">🏟️</div>
          <div>
            <div class="format-title">Join ${o.team} <span class="badge" style="margin-left:6px;">${o.tag}</span></div>
            <div class="format-desc">${o.desc}${p.isDomesticCaptain ? " You'd give up the captaincy and have to earn it again." : ""}</div>
            <div class="empty-note" style="padding-top:4px;">💰 ${formatMoney(o.salary)}/season</div>
          </div>
        </div>
      `).join("")}
    </div>
  `);
}

/* ================= screens: match setup ================= */

function currentFixtureFor(kind) {
  const p = state;
  if (kind === "domestic") return p.fixtures[p.matchIndex];
  if (kind === "franchise") return p.franchiseFixtures[p.franchiseIndex];
  if (kind === "overseas") return p.overseasFixtures[p.overseasIndex];
  return p.intlFixtures[p.intlIndex];
}

function renderMatchSetup(kind) {
  const p = state;
  applyCurrentTheme(p);
  const fx = currentFixtureFor(kind);
  if (!fx) return renderHub();
  const heading = kind === "intl" ? (fx.tag || "International")
    : kind === "franchise" ? `Franchise · ${fmtLabel(fx.fmt)}`
    : kind === "overseas" ? `${p.overseasOffer.league} · ${p.overseasOffer.team}`
    : `Domestic · ${fmtLabel(fx.fmt)}`;
  const toss = window.__matchToss;
  const tossReady = !toss || !toss.wonToss || !!toss.decision;
  screen(`
    ${masthead()}
    <div class="card">
      <div class="section-title" style="text-align:center;">${heading} vs ${fx.opponent}</div>
      ${fx.ground ? `<div class="empty-note" style="padding:2px 0 0;">📍 ${fx.ground}</div>` : ""}
    </div>
    ${toss ? `
      <div class="card">
        <div class="section-title">Pitch report</div>
        <div class="empty-note" style="padding:6px 0 0;text-align:left;">${toss.pitch.icon} <strong style="color:var(--text);">${toss.pitch.label}</strong> — ${toss.pitch.desc}</div>
      </div>
      <div class="card">
        <div class="section-title">Toss</div>
        ${toss.wonToss && toss.isCaptainChoice ? `
          <div class="empty-note" style="padding:6px 0 8px;text-align:left;">You won the toss — as captain, what's the call?</div>
          <div class="option-grid">
            <div class="pill-btn ${toss.decision === "BAT" ? "selected" : ""}" onclick="App.setTossDecision('BAT')">🏏 Bat first</div>
            <div class="pill-btn ${toss.decision === "BOWL" ? "selected" : ""}" onclick="App.setTossDecision('BOWL')">🎯 Bowl first</div>
          </div>
        ` : toss.wonToss ? `
          <div class="empty-note" style="padding:6px 0;text-align:left;">You won the toss — the captain's called it, and you're ${toss.decision === "BAT" ? "batting" : "bowling"} first.</div>
        ` : `
          <div class="empty-note" style="padding:6px 0;text-align:left;">${fx.opponent} won the toss and chose to ${toss.oppDecision === "BAT" ? "bat" : "bowl"} first.</div>
        `}
      </div>
    ` : ""}
    <div class="card stack">
      <button class="primary" ${tossReady ? "" : "disabled"} onclick="App.confirmPlayMatch('${kind}')">🏏 Walk out to play</button>
      <button class="secondary" onclick="App.goHub()">‹ Back</button>
    </div>
  `);
}

/* ================= screens: live innings ================= */

function renderLiveBatting() {
  const li = window.__live;
  const p = state;
  applyCurrentTheme(p);
  const inningsTag = li.battingInningsNum === 2 ? "2nd Innings · " : "";
  if (li.revealing) {
    const seg = li.lastBatSeg;
    const doneName = battingPhaseName(li.fx.fmt, li.battingPhase - 1);
    screen(`
      ${masthead()}
      <div class="card">
        <div class="section-title" style="text-align:center;">Batting — ${inningsTag}${doneName}</div>
        <div class="result-figures">
          <div class="big">${seg.out ? `${seg.runs}(${seg.balls})` : `+${seg.runs}(${seg.balls})`}</div>
          <div class="sub">${seg.out ? "OUT!" : `${seg.fours}x4, ${seg.sixes}x6`}</div>
        </div>
        ${li.pendingSecondInnings
          ? `<div class="badge" style="display:block;text-align:center;width:fit-content;margin:6px auto 0;background:rgba(95,217,122,0.15);color:var(--accent);">🔁 1st innings done — you'll bat again</div>`
          : seg.out ? `<div class="badge" style="display:block;text-align:center;width:fit-content;margin:6px auto 0;background:rgba(232,93,117,0.15);color:var(--accent-3);">Innings over</div>` : ""}
      </div>
      <div class="card">
        <div class="section-title">Innings so far</div>
        <div class="stat-grid" style="margin-top:8px;">
          ${ratingBar("Runs", li.bat.runs)}
          ${ratingBar("Balls", li.bat.balls)}
          ${ratingBar("Boundaries", `${li.bat.fours}×4 ${li.bat.sixes}×6`)}
        </div>
      </div>
      <button class="primary" onclick="App.continueLiveInnings()">Continue</button>
    `);
    return;
  }
  const upName = battingPhaseName(li.fx.fmt, li.battingPhase);
  screen(`
    ${masthead()}
    <div class="card">
      <div class="section-title" style="text-align:center;">Batting — ${inningsTag}${upName} vs ${li.fx.opponent}</div>
      <div class="empty-note" style="padding:4px 0 0;">${li.battingPhase === 0 ? (li.battingInningsNum === 2 ? "You're at the crease again for the 2nd innings." : "You're at the crease.") : `${li.bat.runs} off ${li.bat.balls} so far.`}</div>
    </div>
    <div class="card">
      <div class="section-title">How do you play the ${upName.toLowerCase()}?</div>
      <div class="stack" style="margin-top:8px;">
        ${Object.keys(BATTING_APPROACHES).map(k => `
          <button class="secondary" onclick="App.chooseBattingPhase('${k}')">${k === "Cautious" ? "🛡️" : k === "Aggressive" ? "💥" : "🔄"} ${k} — ${BATTING_APPROACHES[k].desc}</button>
        `).join("")}
      </div>
    </div>
    <button class="secondary" onclick="App.quickSimLiveInnings()">⏩ Simulate rest of match</button>
  `);
}

function renderLiveBowling() {
  const li = window.__live;
  const p = state;
  applyCurrentTheme(p);
  const fmt = li.fx.fmt;
  const longFmt = fmt === "TEST" || fmt === "FC";
  const cap = bowlingOversCap(fmt);
  if (li.revealing) {
    const seg = li.lastBowlSeg;
    const label = longFmt ? `Spell ${li.bowlingSpellIndex}` : `Over ${li.bowl.overs}/${cap}`;
    screen(`
      ${masthead()}
      <div class="card">
        <div class="section-title" style="text-align:center;">Bowling — ${label}</div>
        <div class="result-figures">
          <div class="big">${seg.wickets}/${seg.runsConceded}</div>
          <div class="sub">${seg.overs} over${seg.overs === 1 ? "" : "s"}</div>
        </div>
      </div>
      <div class="card">
        <div class="section-title">Figures so far</div>
        <div class="stat-grid" style="margin-top:8px;">
          ${ratingBar("Overs", li.bowl.overs)}
          ${ratingBar("Wickets", li.bowl.wickets)}
          ${ratingBar("Runs", li.bowl.runsConceded)}
        </div>
      </div>
      <button class="primary" onclick="App.continueLiveInnings()">Continue</button>
    `);
    return;
  }
  const upLabel = longFmt ? `Spell ${li.bowlingSpellIndex + 1}` : `Over ${li.bowl.overs + 1}/${cap}`;
  screen(`
    ${masthead()}
    <div class="card">
      <div class="section-title" style="text-align:center;">Bowling — ${upLabel} vs ${li.fx.opponent}</div>
      <div class="empty-note" style="padding:4px 0 0;">${li.bowlingSpellIndex === 0 ? "You've got the ball." : `${li.bowl.wickets}/${li.bowl.runsConceded} from ${li.bowl.overs} so far.`}</div>
    </div>
    <div class="card">
      <div class="section-title">How do you bowl ${longFmt ? "this spell" : "this over"}?</div>
      <div class="stack" style="margin-top:8px;">
        ${Object.keys(BOWLING_APPROACHES).map(k => `
          <button class="secondary" onclick="App.chooseBowlingPhase('${k}')">${k === "Contain" ? "🔒" : k === "Attack" ? "🎯" : "🔁"} ${k} — ${BOWLING_APPROACHES[k].desc}</button>
        `).join("")}
      </div>
    </div>
    <button class="secondary" onclick="App.quickSimLiveInnings()">⏩ Simulate rest of match</button>
  `);
}

/* ================= screens: hub ================= */

function renderHub() {
  const p = state;
  applyCurrentTheme(p);
  const tabs = ["Overview", "Career", "Shop"];
  const mainBody = p.hubTab === "Career" ? renderHubCareer() : p.hubTab === "Shop" ? renderHubShop() : renderHubOverview();

  screen(`
    ${masthead(`<button class="link-btn" onclick="App.goFeedback()">💬 Feedback</button>`)}
    <div class="card player-card">
      <div class="player-avatar">${flagFor(p.country)}</div>
      <div>
        <div class="player-name">${p.name} ${p.isNationalCaptain ? "©️" : ""}</div>
        <div class="player-sub">${p.role} · Age ${p.age} · ${p.team}${p.isDomesticCaptain ? " (c)" : ""}</div>
      </div>
    </div>
    <div class="hub-layout">
      <div class="hub-main">
        <div class="tab-bar">
          ${tabs.map(t => `<div class="tab-btn ${p.hubTab === t ? "active" : ""}" onclick="App.setHubTab('${t}')">${t}${t === "Shop" && hasAffordablePerk(p) ? `<span class="tab-dot"></span>` : ""}</div>`).join("")}
        </div>
        ${mainBody}
      </div>
      <div class="hub-side">
        ${renderHubSidebar()}
      </div>
    </div>
  `);
}

function nextUpGround(p) {
  if (!p.domesticDone && p.fixtures[p.matchIndex]) return p.fixtures[p.matchIndex].ground;
  if (p.format === "ALL_ROUND" && !p.franchiseDone && p.franchiseFixtures[p.franchiseIndex]) return p.franchiseFixtures[p.franchiseIndex].ground;
  if (!p.overseasDone && !p.overseasPending && p.overseasFixtures[p.overseasIndex]) return p.overseasFixtures[p.overseasIndex].ground;
  if (p.selectedThisSeason && !p.intlDone && p.intlFixtures[p.intlIndex]) return p.intlFixtures[p.intlIndex].ground;
  return null;
}

function renderHubOverview() {
  const p = state;
  let phase, actionButtons;
  if (!p.domesticDone) {
    const label = p.domesticKind === "FRANCHISE" ? "Franchise league" : "First-class match";
    phase = `Season ${p.season}/${MAX_SEASONS} · ${calendarWindowFor(p)} · ${label} ${p.matchIndex + 1}/${p.fixtures.length}`;
    actionButtons = `
      <button class="primary" onclick="App.goMatchSetup('domestic')">🏏 Play next match</button>
      <button class="secondary" onclick="App.simRestSeason()">⏩ Sim rest of season</button>
    `;
  } else if (!p.franchiseDone) {
    phase = `Season ${p.season}/${MAX_SEASONS} · Franchise stint (${p.franchiseTeam}) ${p.franchiseIndex + 1}/${p.franchiseFixtures.length}`;
    actionButtons = `
      <button class="primary" onclick="App.goMatchSetup('franchise')">⚡ Play next match</button>
      <button class="secondary" onclick="App.simRestFranchise()">⏩ Sim rest of stint</button>
    `;
  } else if (!p.overseasDone && !p.overseasPending) {
    phase = `Season ${p.season}/${MAX_SEASONS} · ${p.overseasOffer.league} stint (${p.overseasOffer.team}) ${p.overseasIndex + 1}/${p.overseasFixtures.length}`;
    actionButtons = `
      <button class="primary" onclick="App.goMatchSetup('overseas')">🌍 Play next match</button>
      <button class="secondary" onclick="App.simRestOverseas()">⏩ Sim rest of stint</button>
    `;
  } else if (p.selectedThisSeason && !p.intlDone) {
    const curFx = p.intlFixtures[p.intlIndex];
    const tag = curFx ? curFx.tag : "Series";
    phase = `Season ${p.season}/${MAX_SEASONS} · ${tag} ${p.intlIndex + 1}/${p.intlFixtures.length}`;
    actionButtons = `
      <button class="primary" onclick="App.goMatchSetup('intl')">✈️ Play next match</button>
      <button class="secondary" onclick="App.simRestIntl()">⏩ Sim rest of window</button>
    `;
  } else {
    phase = `Season ${p.season}/${MAX_SEASONS} complete`;
    actionButtons = `<button class="primary" onclick="App.goSeasonSummary()">📋 View season summary</button>`;
  }

  const ground = nextUpGround(p);
  const played = p.fixtures.filter(f => f.played).slice(-5).reverse();

  return `
    <div class="card">
      <div class="section-title">${phase}</div>
      ${ground ? `<div class="empty-note" style="padding:2px 0 0;text-align:left;">📍 Next up at ${ground}</div>` : ""}
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
    <div class="match-line fixture-row">
      <div class="opp">
        <div>vs ${f.opponent}<span class="season-tag" style="margin-left:8px;">${competitionLabel}</span></div>
        ${f.ground ? `<div class="ground-tag">📍 ${f.ground}</div>` : ""}
      </div>
      <span class="res pending">UPCOMING</span>
    </div>
  `;
}

function renderHubSidebar() {
  const p = state;
  const domUpcoming = p.domesticDone ? [] : p.fixtures.slice(p.matchIndex, p.matchIndex + 5);
  const franchiseUpcoming = (p.format !== "ALL_ROUND" || p.franchiseDone) ? [] : p.franchiseFixtures.slice(p.franchiseIndex);
  const overseasUpcoming = (p.overseasDone || p.overseasPending) ? [] : (p.overseasFixtures || []).slice(p.overseasIndex);
  const intlUpcoming = (!p.selectedThisSeason || p.intlDone) ? [] : p.intlFixtures.slice(p.intlIndex);
  const domLabel = p.domesticKind === "FRANCHISE" ? "League" : "First-Class";
  const anyUpcoming = domUpcoming.length || franchiseUpcoming.length || overseasUpcoming.length || intlUpcoming.length;
  const tableLive = p.tournamentTable && p.bigEvent && p.bigEvent.active && p.selectedThisSeason && !p.intlDone;

  return `
    ${tableLive ? renderTournamentTableCard(p.tournamentTable, p.bigEvent.name) : ""}
    <div class="card">
      <div class="section-title">Upcoming fixtures</div>
      <div style="margin-top:6px;">
        ${!anyUpcoming ? `<div class="empty-note">Nothing scheduled right now.</div>` : ""}
        ${intlUpcoming.map(f => fixtureRow(f, f.tag || "International")).join("")}
        ${overseasUpcoming.map(f => fixtureRow(f, p.overseasOffer.league)).join("")}
        ${franchiseUpcoming.map(f => fixtureRow(f, "Franchise")).join("")}
        ${domUpcoming.map(f => fixtureRow(f, domLabel)).join("")}
      </div>
    </div>
    <div class="card">
      <div class="section-title">World rankings</div>
      ${p.caps.intl > 0 ? `
        <div class="stat-grid two" style="margin-top:10px;">
          ${ratingBar("Batting", p.rankBat != null ? "#" + p.rankBat : "Unranked")}
          ${ratingBar("Bowling", p.rankBowl != null ? "#" + p.rankBowl : "Unranked")}
        </div>
      ` : `
        <div class="empty-note" style="padding:10px 0 0;">Unranked — world rankings only kick in once you've debuted internationally.</div>
      `}
      <div class="rating-bar-wrap" style="margin-top:12px;">
        <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${p.reputation}%;"></div></div>
        <div class="rating-num">${Math.round(p.reputation)}</div>
      </div>
      <div class="empty-note" style="padding:6px 0 0;">Reputation</div>
    </div>
    <div class="card">
      <div class="section-title">Career earnings</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Career", formatMoney(p.earnings))}
        ${ratingBar("This season", formatMoney(p.seasonEarnings))}
      </div>
    </div>
  `;
}

function renderTournamentTableCard(table, eventName) {
  const p = state;
  const sorted = table.slice().sort((a, b) => b.pts - a.pts || b.won - a.won);
  return `
    <div class="card">
      <div class="section-title">${eventName} table</div>
      <div class="table-wrap" style="margin-top:8px;">
        <table class="mini-table">
          <thead><tr><th>Nation</th><th>P</th><th>W</th><th>L</th><th>Pts</th></tr></thead>
          <tbody>
            ${sorted.map(r => `
              <tr class="${r.nation === p.country ? "me-row" : ""}">
                <td>${flagFor(r.nation)} ${r.nation}</td>
                <td>${r.played}</td><td>${r.won}</td><td>${r.lost}</td><td><strong>${r.pts}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderHubCareer() {
  const p = state;
  const d = p.stats.domestic, i = p.stats.intl, fr = p.stats.franchise;
  const arche = computeArchetype(p);
  return `
    <div class="card">
      <div class="section-title">${p.country} national team</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Team rating", NATION_STRENGTH[p.country])}
        ${ratingBar("Your caps", p.caps.intl)}
      </div>
      <div class="empty-note" style="padding:8px 0 0;">Team trophies lean heavily on this rating — brilliance from you still matters, but a weaker side makes titles much harder to reach.</div>
    </div>
    <div class="card">
      <div class="section-title">Leadership${p.sponsor ? " & sponsor" : ""}</div>
      <div class="empty-note" style="padding:6px 0;">
        ${p.isNationalCaptain ? `©️ National team captain` : p.isDomesticCaptain ? `©️ ${p.team} captain` : "No captaincy yet — keep performing and it'll come."}
      </div>
      ${p.sponsor ? `<div class="trophy-item" style="margin-top:4px;"><span class="icon">🏷️</span>${p.sponsor.name}</div>` : ""}
    </div>
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
    ${p.franchiseHistory.length ? `
      <div class="card">
        <div class="section-title">Global franchise circuit</div>
        <div class="stat-grid" style="margin-top:10px;">
          ${ratingBar("Matches", p.stats.overseas.matches)}
          ${ratingBar("Runs", p.stats.overseas.runs)}
          ${ratingBar("SR", strikeRate(p.stats.overseas))}
          ${ratingBar("Wickets", p.stats.overseas.wickets)}
          ${ratingBar("Econ", economyRate(p.stats.overseas))}
          ${ratingBar("100s", p.stats.overseas.hundreds)}
        </div>
        <div class="trophy-list" style="margin-top:10px;">
          ${p.franchiseHistory.slice().reverse().map(f => `<div class="trophy-item"><span class="icon">🌍</span>${f.team} — ${f.league}<span class="season-tag">S${f.season}</span></div>`).join("")}
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

function renderHubShop() {
  const p = state;
  const roster = perksForRole(p.role);
  return `
    <div class="card">
      <div class="section-title">Bank balance</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Spendable", formatMoney(p.bankBalance || 0))}
        ${ratingBar("Career earned", formatMoney(p.earnings || 0))}
      </div>
      <div class="empty-note" style="padding-top:8px;">Spend what you've earned on permanent perks — a second way to get better besides just grinding out reputation. ${p.role === "Bowler" ? "As a bowler, only bowling and mental perks are open to you." : (p.role === "Batsman" || p.role === "Wicketkeeper-Batsman") ? "As a batter, only batting and mental perks are open to you." : ""}</div>
    </div>
    ${PERK_CATEGORIES.map(cat => {
      const perksInCat = roster.filter(perk => perk.category === cat.key);
      if (!perksInCat.length) return "";
      return `
      <div class="card">
        <div class="section-title">${cat.label}</div>
        <div class="stack" style="margin-top:10px;">
          ${perksInCat.map(perk => {
            const lvl = perkLevel(perk.key);
            const maxLvl = perk.levels.length;
            const atMax = lvl >= maxLvl;
            const next = perk.levels[lvl];
            const canAfford = !atMax && (p.bankBalance || 0) >= next.price;
            const levelTag = lvl === 0 ? "Not owned" : `Level ${lvl}/${maxLvl}`;
            return `
              <div class="perk-item ${lvl > 0 ? "owned" : ""}" title="${perk.desc}">
                <div class="perk-head">
                  <span class="perk-icon">${perk.icon}</span>
                  <div class="perk-name">${perk.name}</div>
                  <span class="${lvl > 0 ? "perk-owned-tag" : "perk-price"}">${levelTag}</span>
                </div>
                <div class="perk-desc">${perk.desc}</div>
                ${lvl > 0 ? `<div class="perk-desc" style="margin-top:4px;color:var(--accent);">Current bonus: ${perk.category === "MENTAL" ? formatPercent(perk.levels[lvl - 1].value) : "+" + perk.levels[lvl - 1].value}</div>` : ""}
                ${atMax
                  ? `<div class="perk-desc" style="margin-top:6px;">✅ Maxed out.</div>`
                  : `<button class="secondary perk-buy-btn" ${canAfford ? "" : "disabled"} onclick="App.buyPerk('${perk.key}')">${lvl === 0 ? "Buy" : "Upgrade"} — ${formatMoney(next.price)} for ${perk.category === "MENTAL" ? formatPercent(next.value) : "+" + next.value}</button>`}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
    }).join("")}
  `;
}

/* ================= screens: call-up / big event ================= */

function renderCallUp() {
  const p = state;
  applyCurrentTheme(p);
  const c = p.intlCallup;
  const fmtWord = FMT_SERIES_WORD[c.fmt] || "International";
  screen(`
    ${masthead()}
    <div class="big-event-screen">
      <div class="big-event-trophy">✈️</div>
      <div class="mode-tag">International call-up</div>
      <div class="big-event-title" style="font-size:32px;">${flagFor(p.country)} ${p.country}</div>
      <p style="color:var(--text-dim);max-width:380px;">You've been picked for the national side — the <strong style="color:var(--text);">${c.name}</strong> vs ${flagFor(c.opponent)} ${c.opponent} (${fmtWord}). This is your shot on the big stage.</p>
      <div class="stack" style="max-width:320px;margin:0 auto;">
        <button class="primary" onclick="App.acceptCallup()">Accept the call-up</button>
        <button class="secondary" onclick="App.declineCallup()">Stay with your club this window</button>
      </div>
    </div>
  `);
}

function renderBigEventIntro() {
  const p = state;
  applyCurrentTheme(p);
  const c = p.intlCallup;
  screen(`
    ${masthead()}
    <div class="big-event-screen">
      <div class="big-event-trophy">🏆</div>
      <div class="mode-tag">You've been called up for</div>
      <div class="big-event-title">${c.name}</div>
      <p style="color:var(--text-dim);max-width:380px;">Representing ${flagFor(p.country)} ${p.country}. Every performance from here counts double.</p>
      <div class="stack" style="max-width:320px;margin:0 auto;">
        <button class="primary" onclick="App.acceptCallup()">Take the field</button>
        <button class="secondary" onclick="App.declineCallup()">Withdraw from the squad</button>
      </div>
    </div>
  `);
}

function renderKnockoutIntro(fx) {
  const p = state;
  applyCurrentTheme(p);
  const isFinal = fx.stage === "FINAL";
  screen(`
    ${masthead()}
    <div class="big-event-screen">
      <div class="big-event-trophy">${isFinal ? "🏆" : "🔥"}</div>
      <div class="mode-tag">${p.bigEvent.name}</div>
      <div class="big-event-title" style="font-size:${isFinal ? 36 : 30}px;">${isFinal ? "THE FINAL" : "SEMI-FINAL"}</div>
      <p style="color:var(--text-dim);max-width:380px;">
        ${isFinal
          ? `This is it. Beat ${fx.opponent} today and ${flagFor(p.country)} ${p.country} are ${p.bigEvent.name} champions. Every run and every wicket from here is history.`
          : `Beat ${fx.opponent} and you're one match away from lifting the ${p.bigEvent.name}. Lose, and the whole campaign ends today. Everything comes down to this.`}
      </p>
      <button class="primary" style="max-width:280px;" onclick="App.dismissKnockoutIntro()">Take the field</button>
    </div>
  `);
}

function renderDebut(fmt) {
  const p = state;
  applyCurrentTheme(p);
  const isFirstEver = p.caps.intl === 0;
  const label = fmt === "TEST" ? "Test" : fmt === "ODI" ? "ODI" : "T20I";
  screen(`
    ${masthead()}
    <div class="big-event-screen">
      <div class="big-event-trophy">🎖️</div>
      <div class="mode-tag">${isFirstEver ? "International debut" : `${label} debut`}</div>
      <div class="big-event-title" style="font-size:30px;">${isFirstEver ? `${flagFor(p.country)} ${p.country} — Cap #1` : `${label} Cap #1`}</div>
      <p style="color:var(--text-dim);max-width:380px;">${isFirstEver
        ? `You're stepping out for ${p.country} for the very first time. A career milestone starts right here.`
        : `Your first appearance in ${label} colours for ${p.country}.`}</p>
      <button class="primary" style="max-width:280px;" onclick="App.confirmDebutAndPlay()">Take the field</button>
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
  const battingFigure = perf.innings2
    ? `${perf.runs}${perf.out ? "" : "*"} & ${perf.innings2.runs}${perf.innings2.out ? "" : "*"}`
    : `${perf.runs}${perf.out ? "" : "*"}`;
  if (perf.batted && perf.bowled) {
    figureBig = `${battingFigure} &nbsp;/&nbsp; ${perf.wickets}-${perf.runsConceded}`;
    figureSub = `Batting & bowling figures`;
  } else if (perf.batted) {
    figureBig = battingFigure;
    figureSub = perf.innings2
      ? `Two innings · ${perf.balls + perf.innings2.balls} balls · ${perf.fours + perf.innings2.fours}x4, ${perf.sixes + perf.innings2.sixes}x6`
      : `off ${perf.balls} balls · ${perf.fours}x4, ${perf.sixes}x6`;
  } else if (perf.bowled) {
    figureBig = `${perf.wickets}/${perf.runsConceded}`;
    figureSub = `${perf.overs} overs`;
  } else {
    figureBig = "DNB"; figureSub = "Did not feature much this match";
  }
  const heading = r.kind === "intl" ? (r.tag || "International")
    : r.kind === "overseas" ? (r.tag || "Overseas")
    : r.kind === "franchise" ? `Franchise · ${fmtLabel(r.fmt)}`
    : `Domestic · ${fmtLabel(r.fmt)}`;

  screen(`
    ${masthead()}
    <div class="card">
      <div class="section-title" style="text-align:center;">${heading} vs ${r.opponent}</div>
      ${r.ground ? `<div class="empty-note" style="padding:2px 0 0;">📍 ${r.ground}</div>` : ""}
      <div class="result-figures">
        <div class="big">${figureBig}</div>
        <div class="sub">${figureSub}</div>
      </div>
      <div class="badge" style="display:block;text-align:center;width:fit-content;margin:6px auto 0;background:${r.won ? "rgba(95,217,122,0.15)" : "rgba(232,93,117,0.15)"};color:${r.won ? "var(--accent)" : "var(--accent-3)"};">
        ${r.margin || (r.won ? "Won" : "Lost")}
      </div>
    </div>
    ${r.stage === "FINAL" && p.worldCupStage === "CHAMPION" ? `<div class="milestone-banner" style="font-size:16px;">🏆🎉 CHAMPIONS! ${p.bigEvent.name} glory for ${p.country}!</div>` : ""}
    ${r.stage === "FINAL" && p.worldCupStage === "FINAL_LOSS" ? `<div class="milestone-banner">😔 So close — runners-up in the ${p.bigEvent.name}.</div>` : ""}
    ${r.stage === "SEMI" && p.worldCupStage !== "SEMI_LOSS" ? `<div class="milestone-banner" style="font-size:16px;">🔥 THROUGH TO THE FINAL!</div>` : ""}
    ${r.stage === "SEMI" && p.worldCupStage === "SEMI_LOSS" ? `<div class="milestone-banner">The campaign ends here — semi-final exit.</div>` : ""}
    ${r.milestones.length ? `<div class="stack">${r.milestones.map(m => `<div class="milestone-banner">${m}</div>`).join("")}</div>` : ""}
    ${r.tossNote ? `<div class="empty-note">${r.tossNote}</div>` : ""}
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
    <div class="card">
      <div class="section-title">Money</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Earned this season", formatMoney(p.seasonEarnings))}
        ${ratingBar("Career total", formatMoney(p.earnings))}
      </div>
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

function renderOverseasOffer() {
  const p = state;
  applyTheme(p.country);
  const o = p.overseasOffer;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Overseas interest</div>
      <h1>${o.league} call-up</h1>
      <p>${o.team} have offered you a short-term contract in the ${o.league}. A chance to test yourself in a different franchise league before you head back into the international window.</p>
    </div>
    <div class="format-card" style="cursor:default;">
      <div class="format-icon">🌍</div>
      <div>
        <div class="format-title">${o.team}</div>
        <div class="format-desc">${o.league} · ${o.country}</div>
        <div class="empty-note" style="padding-top:4px;">💰 ${formatMoney(o.fee)} contract fee</div>
      </div>
    </div>
    <div class="stack">
      <button class="primary" onclick="App.acceptOverseas()">Sign the contract</button>
      <button class="secondary" onclick="App.declineOverseas()">Stay focused at home</button>
    </div>
  `);
}

function renderOverseasSummary() {
  const p = state;
  applyTheme(p.country);
  const sum = p.lastOverseasSummary;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">${sum.league} stint</div>
      <h1>${sum.team}</h1>
      <p>${flagFor(sum.country)} ${sum.country}</p>
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
    <button class="primary" onclick="App.continueFromOverseasSummary()">Continue</button>
  `);
}

function renderIntlSummary() {
  const p = state;
  applyCurrentTheme(p);
  const sum = p.lastIntlSummary;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">${sum.bigEvent ? sum.eventName : (sum.seriesName || "International window")}</div>
      <h1>${flagFor(p.country)} ${p.country}</h1>
      <p>${sum.bigEvent && sum.host ? `Hosted in ${flagFor(sum.host)} ${sum.host} · ` : sum.opponent ? `vs ${flagFor(sum.opponent)} ${sum.opponent} · ` : ""}${sum.wins} win${sum.wins === 1 ? "" : "s"} in this window${sum.bigEvent ? ` · ${sum.finishTag}` : ""}</p>
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
    ${sum.finalTable ? renderTournamentTableCard(sum.finalTable, sum.eventName) : ""}
    <button class="primary" onclick="App.continueFromIntlSummary()">Continue</button>
  `);
}

function renderSponsorOffer() {
  const p = state;
  applyTheme(p.country);
  const tier = sponsorTierFor(p);
  const brands = pickN(SPONSOR_TIERS[tier], Math.min(3, SPONSOR_TIERS[tier].length));
  const perks = pickN(SPONSOR_PERKS, brands.length);
  const value = SPONSOR_TIER_VALUE[tier];
  const options = brands.map((name, idx) => ({ name, value, ...perks[idx % perks.length] }));
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
            <div class="empty-note" style="padding-top:4px;">💰 ${formatMoney(s.value)} signing bonus</div>
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
  const n = WHEEL_SEGMENTS.length;
  const segAngle = 360 / n;
  const gradientStops = WHEEL_SEGMENTS.map((s, i) => `${s.color} ${i * segAngle}deg ${(i + 1) * segAngle}deg`).join(", ");
  const radius = 90;
  screen(`
    ${masthead()}
    <div class="hero" style="padding-top:6px;">
      <div class="mode-tag">Off-season</div>
      <h1>Spin for your off-season</h1>
      <p>4 boosts, a mixed blessing, and 3 real setbacks — one of them a genuine blow. Give it a spin.</p>
    </div>
    <div class="wheel-wrap">
      <div class="wheel-pointer">▼</div>
      <div class="wheel" id="wheelEl" style="background: conic-gradient(${gradientStops});">
        ${WHEEL_SEGMENTS.map((s, i) => {
          const center = i * segAngle + segAngle / 2;
          const rad = (center * Math.PI) / 180;
          const dx = radius * Math.sin(rad);
          const dy = -radius * Math.cos(rad);
          return `<span class="wheel-icon" style="left:calc(50% + ${dx.toFixed(1)}px - 15px); top:calc(50% + ${dy.toFixed(1)}px - 15px);">${s.icon}</span>`;
        }).join("")}
      </div>
    </div>
    <div id="wheelResultBox"></div>
    <button class="primary" id="spinBtn" onclick="App.spinWheel()">🎡 Spin</button>
  `);
}

function renderOffSeason() {
  const p = state;
  applyTheme(p.country);
  const willForceRetire = p.age >= RETIRE_AGE_HARD || p.season >= MAX_SEASONS;
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
  const d = p.stats.domestic, i = p.stats.intl, fr = p.stats.franchise, ov = p.stats.overseas;
  const all = combineStats(d, i, fr, ov);
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
        ${ratingBar("Earnings", formatMoney(p.earnings))}
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
    <button class="primary" onclick="App.goFullRecap()">📊 View full career recap</button>
    <button class="secondary" onclick="App.newDynasty()">Start a new dynasty</button>
  `);
}

function bestCareerFigures(p) {
  const buckets = [p.stats.domestic, p.stats.intl, p.stats.franchise, p.stats.overseas];
  const highScore = Math.max(...buckets.map(b => b.highScore));
  let bestBowling = "0/0";
  buckets.forEach(b => {
    const [bw, br] = b.bestBowling.split("/").map(Number);
    const [cw, cr] = bestBowling.split("/").map(Number);
    if (bw > cw || (bw === cw && br < cr)) bestBowling = b.bestBowling;
  });
  return { highScore, bestBowling };
}

function renderFullRecap() {
  const p = state;
  applyTheme(p.country);
  const tier = legacyTier(p);
  const arche = computeArchetype(p);
  const d = p.stats.domestic, i = p.stats.intl, fr = p.stats.franchise, ov = p.stats.overseas;
  const all = combineStats(d, i, fr, ov);
  const best = bestCareerFigures(p);
  screen(`
    ${masthead(`<button class="link-btn" onclick="App.goRetirement()">‹ Back</button>`)}
    <div class="hero" style="padding-top:8px;">
      <div class="mode-tag">Full Career Recap</div>
      <h1>${p.name}</h1>
      <p>${flagFor(p.country)} ${p.country} · ${p.role} · ${p.season} seasons · Retired at ${p.age}</p>
    </div>
    <div class="card legacy-tier">
      <div class="tier-name">${tier.name}</div>
      <div class="tier-sub">${tier.sub}</div>
      <div class="empty-note" style="padding-top:8px;">Played like: <strong style="color:var(--accent);">${arche.name}</strong> — ${arche.desc}</div>
    </div>
    <div class="card">
      <div class="section-title">Career-best figures</div>
      <div class="stat-grid two" style="margin-top:10px;">
        ${ratingBar("Highest score", best.highScore)}
        ${ratingBar("Best bowling", best.bestBowling)}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Domestic (${p.team})</div>
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
        <div class="section-title">Franchise (${p.franchiseTeam})</div>
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
    ${p.franchiseHistory.length ? `
      <div class="card">
        <div class="section-title">Global franchise circuit</div>
        <div class="stat-grid" style="margin-top:10px;">
          ${ratingBar("Matches", ov.matches)}
          ${ratingBar("Runs", ov.runs)}
          ${ratingBar("SR", strikeRate(ov))}
          ${ratingBar("Wickets", ov.wickets)}
          ${ratingBar("Econ", economyRate(ov))}
          ${ratingBar("100s", ov.hundreds)}
        </div>
        <div class="trophy-list" style="margin-top:10px;">
          ${p.franchiseHistory.map(f => `<div class="trophy-item"><span class="icon">🌍</span>${f.team} — ${f.league}<span class="season-tag">S${f.season}</span></div>`).join("")}
        </div>
      </div>
    ` : ""}
    <div class="card">
      <div class="section-title">International (${p.caps.intl} caps)</div>
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
      <div class="section-title">Career totals</div>
      <div class="stat-grid" style="margin-top:10px;">
        ${ratingBar("Runs", all.runs)}
        ${ratingBar("Wickets", all.wickets)}
        ${ratingBar("100s", all.hundreds)}
        ${ratingBar("5W hauls", all.fiveWickets)}
        ${ratingBar("Trophies", p.trophies.length)}
        ${ratingBar("Awards", p.awards.length)}
        ${ratingBar("Earnings", formatMoney(p.earnings))}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Season by season</div>
      <div style="margin-top:6px;">
        ${p.seasonLog.map(s => {
          const combined = combineStats(s.dom, s.intl, s.franchise, s.overseas || emptyStatBlock());
          const seasonTrophies = p.trophies.filter(t => t.season === s.season);
          const seasonAwards = p.awards.filter(a => a.season === s.season);
          return `
            <div class="match-line">
              <span class="opp">
                Season ${s.season} · ${BASE_YEAR + s.season} · Age ${s.age}${s.team ? ` · ${s.team}` : ""}
                ${seasonTrophies.map(() => `<span class="season-tag">🏆</span>`).join("")}${seasonAwards.map(() => `<span class="season-tag">🌟</span>`).join("")}
              </span>
              <span class="res pending">${combined.runs} runs, ${combined.wickets} wkts</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Trophy cabinet</div>
      <div class="trophy-list" style="margin-top:8px;">
        ${p.trophies.length ? p.trophies.map(t => `<div class="trophy-item"><span class="icon">${t.icon}</span>${t.name}<span class="season-tag">S${t.season}</span></div>`).join("")
          : `<div class="empty-note">No trophies this career.</div>`}
      </div>
    </div>
    <div class="card">
      <div class="section-title">Awards</div>
      <div class="trophy-list" style="margin-top:8px;">
        ${p.awards.length ? p.awards.map(a => `<div class="trophy-item"><span class="icon">${a.icon}</span>${a.name}<span class="season-tag">S${a.season}</span></div>`).join("")
          : `<div class="empty-note">No individual awards yet.</div>`}
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
  goLogin() { renderLogin(); },
  goHowToPlay() { renderHowToPlay(); },
  goFeedback() {
    window.__feedbackFrom = (state && !state.retired) ? "hub" : (currentUser ? "saveList" : "login");
    renderFeedback();
  },
  returnFromFeedback() {
    if (window.__feedbackFrom === "hub" && state && !state.retired) return renderHub();
    if (currentUser) return renderSaveList();
    renderLogin();
  },
  continueAfterFeedback() { bootToStart(); },
  goFaq() { renderFaq(); },
  openSave(id) {
    const rec = savesForUser(currentUser).find(s => s.id === id);
    if (!rec) return renderSaveList();
    if (rec.version !== SAVE_VERSION) return renderSaveIncompatible(rec);
    state = rec; currentSaveId = id;
    if (state.retired) renderRetirement();
    else if (state.lastMatchResult) renderMatchResult();
    else if (state.debutPending) renderDebut(state.debutPending);
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
    const kind = draft.format === "SHORT" ? "FRANCHISE" : "FC";
    window.__clubOffers = allClubOffersFor(draft.country, kind, null, 20);
    renderClubChoice();
  },
  pickClub(idx) {
    window.__chosenClub = window.__clubOffers[idx];
    window.__clubOffers = null;
    if (draft.format === "ALL_ROUND") {
      window.__franchiseOffers = allClubOffersFor(draft.country, "FRANCHISE", window.__chosenClub.team, 20);
      return renderFranchiseChoice();
    }
    App.finalizeCreate();
  },
  pickFranchise(idx) {
    window.__chosenFranchise = window.__franchiseOffers[idx];
    window.__franchiseOffers = null;
    App.finalizeCreate();
  },
  finalizeCreate() {
    state = freshPlayer({ ...draft, name: draft.name.trim() });
    state.team = window.__chosenClub.team;
    state.teamStrength = window.__chosenClub.strength;
    state.contract = { team: window.__chosenClub.team, salary: window.__chosenClub.salary };
    if (state.format === "ALL_ROUND") {
      state.franchiseTeam = window.__chosenFranchise.team;
      state.franchiseTeamStrength = window.__chosenFranchise.strength;
      state.franchiseContract = { team: window.__chosenFranchise.team, salary: window.__chosenFranchise.salary };
    } else if (state.format === "SHORT") {
      state.franchiseTeam = state.team;
      state.franchiseTeamStrength = state.teamStrength;
    }
    window.__chosenClub = null; window.__chosenFranchise = null;
    currentSaveId = "save_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
    startSeason();
    renderHub();
  },

  setHubTab(t) { state.hubTab = t; save(); renderHub(); },

  buyPerk(key) {
    const p = state;
    const perk = perksForRole(p.role).find(pk => pk.key === key);
    if (!perk) return;
    const lvl = perkLevel(key);
    if (lvl >= perk.levels.length) return;
    const next = perk.levels[lvl];
    if ((p.bankBalance || 0) < next.price) return;
    p.bankBalance -= next.price;
    p.perks[key] = lvl + 1;
    save();
    renderHub();
  },

  goSeasonSummary() {
    if (!state.domesticDone) return renderHub();
    if (!state.franchiseDone) return renderFranchiseSummary();
    if (state.selectedThisSeason && !state.intlDone) return renderHub();
    renderSeasonSummary();
  },

  goHub() { renderHub(); },

  goMatchSetup(kind) {
    window.__matchSetupKind = kind;
    if (kind === "intl") {
      const p = state;
      const fx = p.intlFixtures[p.intlIndex];
      if (fx && (fx.stage === "SEMI" || fx.stage === "FINAL") && p.knockoutIntroShownFor !== p.intlIndex) {
        p.knockoutIntroShownFor = p.intlIndex;
        save();
        return renderKnockoutIntro(fx);
      }
    }
    if (!window.__matchToss) {
      const pitch = choice(PITCH_TYPES);
      const wonToss = Math.random() < 0.5;
      const isCaptainChoice = wonToss && isCaptainForKind(kind);
      window.__matchToss = {
        pitch, wonToss, isCaptainChoice,
        decision: wonToss && !isCaptainChoice ? autoTossDecision(pitch) : null,
        oppDecision: wonToss ? null : choice(["BAT", "BOWL"]),
      };
    }
    renderMatchSetup(kind);
  },
  dismissKnockoutIntro() { App.goMatchSetup("intl"); },
  setTossDecision(d) { window.__matchToss.decision = d; renderMatchSetup(window.__matchSetupKind); },
  confirmPlayMatch(kind) {
    const toss = window.__matchToss;
    if (toss && toss.wonToss && !toss.decision) return;
    if (kind === "intl") {
      const p = state;
      const fx = p.intlFixtures[p.intlIndex];
      if (fx && (p.formatCaps[fx.fmt] || 0) === 0 && !p.debutPending) {
        p.debutPending = fx.fmt;
        save();
        return renderDebut(fx.fmt);
      }
    }
    App.startLiveInnings(kind);
  },

  startLiveInnings(kind) {
    const p = state;
    const fx = currentFixtureFor(kind);
    if (!fx) return renderHub();
    const doesBat = p.role !== "Bowler" || Math.random() < 0.85;
    const doesBowl = p.role === "Bowler" || p.role === "All-rounder";
    const longFmt = fx.fmt === "TEST" || fx.fmt === "FC";
    // Tests have no guaranteed bowling allocation — sometimes the captain barely turns to you
    const skippedTestBowling = doesBowl && longFmt && Math.random() < 0.12;
    window.__live = {
      kind, fx, cond: matchConditionsFor(p),
      doesBat, doesBowl, skippedTestBowling,
      battingPhase: 0, bowlingSpellIndex: 0,
      battingInningsNum: 1, bat1: null, pendingSecondInnings: false,
      battingDone: !doesBat, bowlingDone: !doesBowl || skippedTestBowling,
      bat: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
      bowl: { overs: 0, wickets: 0, runsConceded: 0 },
      tossNote: tossNoteFor(window.__matchToss),
      revealing: false,
    };
    window.__matchToss = null;
    App.advanceLiveInnings();
  },
  advanceLiveInnings() {
    const li = window.__live;
    if (!li.battingDone) return renderLiveBatting();
    if (!li.bowlingDone) return renderLiveBowling();
    App.finalizeLiveInnings();
  },
  continueLiveInnings() {
    const li = window.__live;
    li.revealing = false;
    if (li.pendingSecondInnings) {
      li.pendingSecondInnings = false;
      li.bat1 = { ...li.bat };
      li.bat = { runs: 0, balls: 0, fours: 0, sixes: 0, out: false };
      li.battingPhase = 0;
      li.battingDone = false;
      li.battingInningsNum = 2;
    }
    App.advanceLiveInnings();
  },
  chooseBattingPhase(k) {
    const p = state;
    const li = window.__live;
    const effRating = (p.role !== "Bowler" ? p.bat : Math.max(p.bat, 8)) * li.cond.battingMult + perkBatBonus(k);
    const seg = simulateBattingPhase(effRating, li.fx.oppStrength, li.fx.fmt, k);
    li.bat.runs += seg.runs; li.bat.balls += seg.balls; li.bat.fours += seg.fours; li.bat.sixes += seg.sixes;
    li.battingPhase++;
    li.lastBatSeg = seg;
    if (seg.out || li.battingPhase >= LIVE_PHASES) {
      li.bat.out = seg.out;
      li.battingDone = true;
      const longFmt = li.fx.fmt === "TEST" || li.fx.fmt === "FC";
      if (longFmt && !li.bat1 && li.battingInningsNum === 1) {
        li.pendingSecondInnings = Math.random() < SECOND_INNINGS_CHANCE;
      }
    }
    li.revealing = true;
    state.battingApproach = k; save();
    renderLiveBatting();
  },
  chooseBowlingPhase(k) {
    const p = state;
    const li = window.__live;
    const fmt = li.fx.fmt;
    const longFmt = fmt === "TEST" || fmt === "FC";
    const cap = bowlingOversCap(fmt);
    const overs = Math.max(1, Math.min(bowlingSpellOvers(fmt), cap - li.bowl.overs));
    const effRating = p.bowl * li.cond.bowlMult + perkBowlBonus(k);
    const seg = simulateBowlingSpell(effRating, li.fx.oppStrength, fmt, k, overs);
    li.bowl.overs += seg.overs; li.bowl.wickets += seg.wickets; li.bowl.runsConceded += seg.runsConceded;
    li.bowlingSpellIndex++;
    li.lastBowlSeg = seg;
    if (longFmt) {
      if (li.bowl.overs >= cap || !testSpellContinues(li.bowlingSpellIndex - 1)) li.bowlingDone = true;
    } else if (li.bowl.overs >= cap) {
      li.bowlingDone = true;
    }
    li.revealing = true;
    state.bowlingApproach = k; save();
    renderLiveBowling();
  },
  quickSimLiveInnings() {
    const li = window.__live;
    const p = state;
    const perf = {};
    const battingApproach = p.battingApproach || "Balanced";
    const bowlingApproach = p.bowlingApproach || "Balanced";
    const liveBatRating = (p.role !== "Bowler" ? p.bat : Math.max(p.bat, 8)) * li.cond.battingMult + perkBatBonus(battingApproach);
    if (li.doesBat && !li.bat.out && li.battingPhase === 0 && !li.bat1) {
      Object.assign(perf, simulateBatting(liveBatRating, li.fx.oppStrength, li.fx.fmt, battingApproach));
    } else if (li.doesBat && li.bat1 && li.battingPhase === 0 && !li.bat.out && li.bat.balls === 0) {
      // 1st innings already fully played, 2nd innings not yet started live — simulate it in full
      const inn2 = simulateBattingInnings(liveBatRating, li.fx.oppStrength, li.fx.fmt, battingApproach);
      Object.assign(perf, { batted: true, runs: li.bat1.runs, balls: Math.max(li.bat1.balls, 1), fours: li.bat1.fours, sixes: li.bat1.sixes, out: li.bat1.out, innings2: inn2 });
    } else if (li.doesBat) {
      Object.assign(perf, finalBattingPerf(li));
    }
    if (li.doesBowl && !li.skippedTestBowling && li.bowlingSpellIndex === 0) {
      Object.assign(perf, simulateBowling(p.bowl * li.cond.bowlMult + perkBowlBonus(bowlingApproach), li.fx.oppStrength, li.fx.fmt, bowlingApproach));
    } else if (li.doesBowl) {
      perf.bowled = true; perf.overs = li.bowl.overs; perf.wickets = li.bowl.wickets; perf.runsConceded = li.bowl.runsConceded;
    }
    App.resolveLiveInnings(perf);
  },
  finalizeLiveInnings() {
    const li = window.__live;
    const perf = {};
    if (li.doesBat) Object.assign(perf, finalBattingPerf(li));
    if (li.doesBowl) Object.assign(perf, { bowled: true, overs: li.bowl.overs, wickets: li.bowl.wickets, runsConceded: li.bowl.runsConceded });
    App.resolveLiveInnings(perf);
  },
  resolveLiveInnings(perf) {
    const li = window.__live;
    const bowlNote = li.skippedTestBowling ? "🎽 The captain barely turned to you today — a quiet one with the ball." : null;
    const note = [li.tossNote, bowlNote].filter(Boolean).join(" ") || null;
    if (li.kind === "domestic") playDomesticMatch(perf, note);
    else if (li.kind === "franchise") playFranchiseMatch(perf, note);
    else if (li.kind === "overseas") playOverseasMatch(perf, note);
    else playIntlMatch(perf, note);
    window.__live = null;
    renderMatchResult();
  },

  stayAtClub() { window.__transferOffers = null; App.advanceEventQueue(); },
  acceptTransfer(idx) {
    const p = state;
    const o = window.__transferOffers[idx];
    const nationBaseline = NATION_STRENGTH[p.country] || 70;
    p.team = o.team;
    p.teamStrength = clamp(Math.round(nationBaseline * 0.55) + o.mod, 15, 99);
    p.contract = { team: o.team, salary: o.salary };
    if (p.format === "SHORT") { p.franchiseTeam = o.team; p.franchiseTeamStrength = p.teamStrength; }
    if (p.isDomesticCaptain) p.isDomesticCaptain = false;
    window.__transferOffers = null;
    save();
    App.advanceEventQueue();
  },

  simRestSeason() { simRestOfDomesticSeason(); App.afterDomesticDone(); },
  afterDomesticDone() {
    const p = state;
    // franchise stint fixtures are only generated once the domestic season ends — play those before summarizing them
    if (p.format === "ALL_ROUND") {
      if (!p.franchiseDone) return renderHub();
      return renderFranchiseSummary();
    }
    if (!p.overseasDone) return App.enterOverseasPhase();
    if (p.selectedThisSeason) return App.enterInternationalPhase();
    renderSeasonSummary();
  },

  simRestFranchise() { simRestOfFranchise(); renderFranchiseSummary(); },

  enterOverseasPhase() {
    const p = state;
    if (p.overseasPending && !p.overseasDone) return renderOverseasOffer();
    return renderHub();
  },
  acceptOverseas() {
    startOverseasStint();
    save();
    renderHub();
  },
  simRestOverseas() { simRestOfOverseas(); renderOverseasSummary(); },
  declineOverseas() {
    const p = state;
    p.overseasPending = false; p.overseasDone = true;
    decideInternationalSelection();
    proceedAfterOverseas();
  },
  continueFromOverseasSummary() { proceedAfterOverseas(); },

  confirmDebutAndPlay() {
    state.debutPending = null;
    App.startLiveInnings("intl");
  },
  simRestIntl() { simRestOfIntl(); renderIntlSummary(); },

  enterInternationalPhase() {
    const p = state;
    if (p.introShownThisWindow) return renderHub();
    p.introShownThisWindow = true;
    save();
    if (p.bigEvent.active) renderBigEventIntro();
    else renderCallUp();
  },
  acceptCallup() {
    buildIntlFixturesFromCallup();
    renderHub();
  },
  declineCallup() {
    const p = state;
    p.intlDone = true;
    p.intlCallup = null;
    p.reputation = clamp(p.reputation - 5, 0, 100);
    save();
    renderSeasonSummary();
  },

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
    if (kind === "overseas") {
      if (!p.overseasDone) return renderHub();
      return renderOverseasSummary();
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
    if (!p.overseasDone) return App.enterOverseasPhase();
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
    if (ev.type === "transfer") {
      window.__transferOffers = generateClubOffers(state.country, state.domesticKind, state.team, 2, state.reputation);
      return renderTransferWindow();
    }
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
    addEarnings(s.value);
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
    const n = WHEEL_SEGMENTS.length;
    const segAngle = 360 / n;
    const idx = randInt(0, n - 1);
    const segment = WHEEL_SEGMENTS[idx];
    const centerAngle = idx * segAngle + segAngle / 2;
    const finalAngle = 360 * 5 + ((360 - centerAngle) % 360);
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
    if (p.age >= RETIRE_AGE_HARD || p.season >= MAX_SEASONS) { retirePlayer(); renderRetirement(); return; }
    advanceToNextSeason();
    if (state.retired) return renderRetirement();
    renderHub();
  },

  goFullRecap() {
    renderFullRecap();
  },

  goRetirement() {
    renderRetirement();
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
  // a 90+ potential is a genuine outlier — most careers cap out well short of 99
  const potential = Math.round(clamp(rand(55, 85) + (Math.random() < 0.05 ? rand(8, 18) : 0), 50, 99));
  let bat = 0, bowl = 0, field = 30;
  if (d.role === "Batsman") { bat = randInt(55, 68); bowl = randInt(3, 10); field = randInt(35, 48); }
  else if (d.role === "Bowler") { bat = randInt(3, 12); bowl = randInt(55, 68); field = randInt(35, 48); }
  else if (d.role === "All-rounder") { bat = randInt(42, 55); bowl = randInt(42, 55); field = randInt(38, 50); }
  else { bat = randInt(52, 64); bowl = randInt(2, 6); field = randInt(48, 62); }

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
    franchiseTeamStrength: null,
    isDomesticCaptain: false, isNationalCaptain: false,
    battingApproach: "Balanced", bowlingApproach: "Balanced",
    sponsor: null, sponsorHistory: [],
    earnings: 0, seasonEarnings: 0, bankBalance: 0, perks: {}, contract: null, franchiseContract: null,
    rankBat: null, rankBowl: null,
    season: 1,
    matchIndex: 0, fixtures: [],
    seasonDomStats: emptyStatBlock(), seasonIntlStats: emptyStatBlock(), seasonFranchiseStats: emptyStatBlock(), seasonOverseasStats: emptyStatBlock(),
    selectedThisSeason: false,
    intlFixtures: [], intlIndex: 0,
    intlCallup: null, worldCupHost: null, worldCupSemifinalists: null, worldCupOtherSemiPair: null, worldCupStage: null,
    knockoutIntroShownFor: null,
    franchiseFixtures: [], franchiseIndex: 0,
    domesticDone: false, intlDone: false, franchiseDone: false,
    overseasPending: false, overseasDone: true, overseasOffer: null, franchiseHistory: [],
    overseasFixtures: [], overseasIndex: 0,
    retired: false, forcedRetireOffer: false,
    caps: { domestic: 0, intl: 0, franchise: 0, overseas: 0 },
    formatCaps: { TEST: 0, ODI: 0, T20: 0 },
    debutPending: null,
    stats: { domestic: emptyStatBlock(), intl: emptyStatBlock(), franchise: emptyStatBlock(), overseas: emptyStatBlock() },
    trophies: [], awards: [], seasonLog: [],
    pendingEvents: [], activeEvent: null,
    wheelResult: null, wheelSpinning: false, introShownThisWindow: false,
    lastMatchResult: null, lastLeagueFinish: null, lastSeasonSummary: null,
    lastIntlSummary: null, lastFranchiseSummary: null, lastOverseasSummary: null,
    lastRatingDelta: { bat: 0, bowl: 0 },
    bigEvent: null,
    tournamentTable: null,
    hubTab: "Overview",
  };
}

function bootToStart() {
  let lastUser = null;
  try { lastUser = localStorage.getItem(LAST_USER_KEY); } catch (e) {}
  if (lastUser) { currentUser = lastUser; renderSaveList(); }
  else renderLogin();
}

(function boot() {
  const params = new URLSearchParams(location.search);
  if (params.get("feedback") === "sent") {
    try { history.replaceState({}, "", location.pathname); } catch (e) {}
    renderFeedbackThanks();
  } else {
    bootToStart();
  }
})();
