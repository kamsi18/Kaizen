const STORAGE_KEY = "kaizen.app.v1";
const plans = {
  productivity: {
    description: "A balanced rhythm built around your focus and energy.",
    scripture: null,
    sleep: { windDown:"9:30 PM", bedtime:"10:00 PM", wake:"6:30 AM", note:"Aim for a consistent 8.5-hour sleep window. Adjust the times to suit your needs." },
    items: [
      ["9:00 AM", "Work", "Protected focus block", "45 min", "focus"],
      ["10:30 AM", "Hydration", "Water break and reset", "2 min", "water"],
      ["12:30 PM", "Exercise", "Walk outside and move", "20 min", "move"],
      ["3:00 PM", "Reading", "Read without distractions", "15 min", "read"],
      ["9:30 PM", "Sleep", "Begin your wind-down", "30 min", "rest"]
    ]
  },
  sleep: {
    description: "A gentler rhythm for better rest and brighter mornings.",
    scripture: null,
    sleep: { windDown:"8:30 PM", bedtime:"9:30 PM", wake:"6:00 AM", note:"Keep wake-up time steady where possible; move bedtime gradually if you need to shift it." },
    items: [
      ["8:00 AM", "Exercise", "Get daylight and move gently", "20 min", "move"],
      ["10:30 AM", "Work", "Focused work, one thing at a time", "45 min", "focus"],
      ["12:30 PM", "Hydration", "Water break and reset", "2 min", "water"],
      ["8:30 PM", "Reading", "A quiet, screen-free chapter", "20 min", "read"],
      ["9:30 PM", "Sleep", "Start your wind-down routine", "30 min", "rest"]
    ]
  },
  health: {
    description: "Daily movement, steady hydration, and space to recharge.",
    scripture: null,
    sleep: { windDown:"9:00 PM", bedtime:"10:00 PM", wake:"6:30 AM", note:"A regular bedtime and wake time can support a more consistent sleep routine." },
    items: [
      ["8:30 AM", "Exercise", "Brisk walk or light movement", "25 min", "move"],
      ["10:30 AM", "Hydration", "Drink a glass of water", "2 min", "water"],
      ["12:30 PM", "Work", "Take a short movement break", "5 min", "focus"],
      ["4:00 PM", "Exercise", "Strength or mobility session", "20 min", "move"],
      ["9:30 PM", "Sleep", "Begin your wind-down", "30 min", "rest"]
    ]
  },
  faith: {
    description: "Make room for reflection, scripture, and intentional rest.",
    scripture: { passage:"Psalm 23:1–3", text:"The psalm pictures God as a shepherd who provides, restores, and guides.", lesson:"Make time to restore your attention and care for others with patience. Reflection is an invitation, not a measure of your worth." },
    sleep: { windDown:"9:00 PM", bedtime:"10:00 PM", wake:"6:30 AM", note:"Try a quiet prayer or reflection before bed, then keep your wake time consistent." },
    items: [
      ["8:00 AM", "Meditation / prayer", "Read Psalm 23; reflect on finding peace and guidance", "10 min", "faith"],
      ["10:30 AM", "Work", "Give your attention to one meaningful task", "45 min", "focus"],
      ["12:30 PM", "Hydration", "Pause, give thanks, and drink water", "2 min", "water"],
      ["6:00 PM", "Reading", "Reflect: patience grows through small acts of care", "15 min", "read"],
      ["9:30 PM", "Sleep", "Set aside the day and rest", "30 min", "rest"]
    ]
  },
  all: {
    description: "A small, sustainable step for your mind, body, and spirit.",
    scripture: { passage:"Proverbs 16:3", text:"The verse encourages committing your work and plans to God.", lesson:"Do the next good thing with care, and be willing to adjust your plans with humility and patience." },
    sleep: { windDown:"9:00 PM", bedtime:"10:00 PM", wake:"6:30 AM", note:"Protect a regular wind-down and give yourself enough time for rest." },
    items: [
      ["8:30 AM", "Meditation / prayer", "Read Proverbs 16:3; commit your plans with care", "10 min", "faith"],
      ["10:00 AM", "Work", "One focused block on what matters", "35 min", "focus"],
      ["12:30 PM", "Hydration", "Drink a glass of water", "2 min", "water"],
      ["4:00 PM", "Exercise", "Walk, stretch, or move your way", "20 min", "move"],
      ["8:30 PM", "Reading", "Read a few pages away from screens", "15 min", "read"],
      ["9:30 PM", "Sleep", "A calm wind-down for tomorrow", "30 min", "rest"]
    ]
  }
};
const goalLabels = {
  productivity:["Increase productivity","Focus, flow and meaningful work.","goal-focus"],
  sleep:["Better sleep","Rest well and wake up ready.","goal-moon"],
  health:["Overall better health","Move, hydrate and feel good.","goal-health"],
  faith:["Closer to God","Make room for faith and reflection.","goal-faith"],
  all:["All of the above","A little progress in every area.","goal-all"]
};
const exercisePlans = {
  beginner:{
    title:"Beginner: gentle bodyweight foundations",
    steps:["Warm up with a comfortable walk or march in place for 3 minutes.","Do 2 easy rounds: 6 bodyweight squats, 6 wall push-ups, 8 glute bridges, and a 15-second standing march.","Rest between movements. Keep the range comfortable and stop if you feel pain, dizziness, or unusual shortness of breath."]
  },
  intermediate:{
    title:"Intermediate: steady full-body circuit",
    steps:["Warm up with 4 minutes of brisk walking in place and arm circles.","Complete 3 rounds: 10 bodyweight squats, 8 incline or knee push-ups, 10 reverse lunges (5 each side), and a 20-second forearm plank.","Rest 45–60 seconds between rounds. Use controlled movement and stop if anything hurts."]
  },
  pro:{
    title:"Pro: advanced no-equipment circuit",
    steps:["Warm up with 5 minutes of brisk marching, hip hinges, and shoulder circles.","Complete 4 rounds at a controlled pace: 12 squats, 10 push-ups (use knees if needed), 10 reverse lunges per side, 12 single-leg glute bridges (6 each side), and a 30-second plank.","Rest 60–90 seconds as needed. Keep good form, scale down when fatigued, and stop for pain or dizziness."]
  }
};
const mealPlans = {
  slim:{
    title:"Balanced meals for a gradual weight-loss goal",
    meals:["Breakfast: plain yogurt with oats, berries, and a few nuts.","Lunch: beans or grilled chicken with vegetables and brown rice.","Dinner: lentil soup or fish, vegetables, and a modest serving of potatoes.","Snack if hungry: fruit with yogurt or a small handful of nuts."],
    note:"Aim for satisfying, regular meals with protein, fiber-rich plants, and enough fluids. Avoid crash diets or skipping meals."
  },
  gain:{
    title:"Nourishing meals to support gradual weight gain",
    meals:["Breakfast: oats made with milk, banana, and nut butter.","Lunch: rice or potatoes with beans, eggs, chicken, or tofu and vegetables.","Dinner: pasta with lentils or meat sauce, vegetables, and olive oil.","Snack: yogurt with granola, a cheese sandwich, or a smoothie with milk and fruit."],
    note:"Add nourishing portions or snacks gradually alongside strength activity. If weight changes are unintentional or you have health concerns, consult a clinician or dietitian."
  }
};
const state = loadState();
let timerSeconds = 25 * 60;
let remainingSeconds = timerSeconds;
let timerInterval = null;
let timerRunning = false;
let timerActivity = "Focus session";
let authMode = "signin";
let toastTimeout;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      goal: plans[saved.goal] ? saved.goal : "productivity",
      user: saved.user || null,
      account: saved.account || null,
      exerciseLevel: ["beginner","intermediate","pro"].includes(saved.exerciseLevel) ? saved.exerciseLevel : "beginner",
      dietGoal: saved.dietGoal === "gain" ? "gain" : "slim",
      streak: Number.isFinite(saved.streak) ? saved.streak : 0,
      bestStreak: Number.isFinite(saved.bestStreak) ? saved.bestStreak : Number.isFinite(saved.streak) ? saved.streak : 0,
      lastVisit: saved.lastVisit || null,
      widget: Boolean(saved.widget),
      completed: saved.completed || {},
      customItems: Array.isArray(saved.customItems) ? saved.customItems : [],
      focusMinutes: Number.isFinite(saved.focusMinutes) && saved.focusMinutes !== 80 ? saved.focusMinutes : 0,
      screenMinutes: saved.usageDate === dateKey() && saved.usageTotalManual && Number.isFinite(saved.screenMinutes) ? saved.screenMinutes : 0,
      usageTotalManual: saved.usageDate === dateKey() && Boolean(saved.usageTotalManual),
      usageDate: saved.usageDate || dateKey(),
      appUsage: saved.usageDate === dateKey() && Array.isArray(saved.appUsage) ? saved.appUsage : [],
      usageHistory: saved.usageHistory && typeof saved.usageHistory === "object" && !Array.isArray(saved.usageHistory) ? saved.usageHistory : {},
      reminders: Boolean(saved.reminders)
    };
  } catch (error) {
    console.error("Unable to load Kaizen preferences.", error);
    return { goal:"productivity", user:null, account:null, exerciseLevel:"beginner", dietGoal:"slim", streak:0, bestStreak:0, lastVisit:null, widget:false, completed:{}, customItems:[], focusMinutes:0, screenMinutes:0, usageTotalManual:false, usageDate:dateKey(), appUsage:[], usageHistory:{}, reminders:false };
  }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { console.error("Unable to save Kaizen preferences.", error); showToast("Your browser could not save this change."); }
}
function dateKey(date = new Date()) { return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; }
function dayNumber(key) {
  const [year,month,day] = key.split("-").map(Number);
  return Date.UTC(year,month-1,day) / 86400000;
}
function refreshStreak() {
  const today = dateKey();
  if (state.lastVisit && state.lastVisit !== today) {
    const daysAway = dayNumber(today) - dayNumber(state.lastVisit);
    if (daysAway > 5) state.streak = 0;
    else if (daysAway !== 1) state.streak = 0;
  }
  if (state.lastVisit !== today) {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak,state.streak);
    state.lastVisit = today;
    saveState();
  }
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3000);
}
function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours ? `${hours}h ${mins}m` : `${mins}m`;
}
function friendlyDate() {
  return new Intl.DateTimeFormat(undefined, { weekday:"long", month:"long", day:"numeric" }).format(new Date());
}
function renderProfile() {
  const name = state.user?.name || "Guest";
  document.getElementById("profile-name").textContent = name;
  document.getElementById("profile-status").textContent = state.user ? "Building better, daily" : "Your journey starts here";
  document.getElementById("avatar-initial").textContent = name.slice(0,1).toUpperCase();
  document.getElementById("greeting-title").innerHTML = state.user ? `Good to see you, <span>${escapeHTML(name.split(" ")[0])}.</span>` : "Make today <span>count.</span>";
  document.getElementById("sign-in-button").textContent = state.user ? "Sign out" : "Sign in";
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[character]);
}
function renderStats() {
  document.getElementById("streak-count").textContent = state.streak;
  document.querySelector(".streak-badge").textContent = `BEST ${state.bestStreak}`;
  document.getElementById("screen-total").textContent = formatDuration(state.screenMinutes);
  document.getElementById("screen-total-large").textContent = formatDuration(state.screenMinutes);
  document.getElementById("focus-total").textContent = formatDuration(state.focusMinutes);
  document.getElementById("focus-progress").style.width = `${Math.min(100,Math.round(state.focusMinutes/120*100))}%`;
  document.getElementById("focus-goal-caption").textContent = `of your 2h daily goal`;
  const completed = Object.entries(state.completed).filter(([key,value]) => key.startsWith(`${state.goal}-`) && value).length;
  const total = plans[state.goal].items.length + state.customItems.length;
  document.getElementById("habits-done").textContent = completed;
  document.getElementById("habits-progress").style.width = `${Math.min(100, Math.round(completed / total * 100))}%`;
  document.querySelector(".stat-card:nth-child(4) .muted-value").textContent = ` / ${total}`;
  document.getElementById("habits-caption").textContent = `${completed} of ${total} habits complete today`;
  document.getElementById("habits-status").textContent = completed === total ? "COMPLETE" : completed > 0 ? "IN PROGRESS" : "GETTING STARTED";
  document.getElementById("widget-state").textContent = state.widget ? "On" : "Off";
  const days = Array.from({length:7},(_,index) => {
    const offset = 6-index;
    const date = new Date();
    date.setDate(date.getDate()-offset);
    const label = new Intl.DateTimeFormat(undefined,{weekday:"narrow"}).format(date);
    const active = offset < state.streak;
    return `<i class="${active ? "done " : ""}${offset === 0 ? "today" : ""}">${label}</i>`;
  });
  document.querySelector(".streak-days").innerHTML = days.join("");
}
function renderPlan() {
  const [goalTitle,goalDescription,goalSymbol] = goalLabels[state.goal];
  document.getElementById("selected-goal-title").textContent = goalTitle;
  document.getElementById("selected-goal-description").textContent = goalDescription;
  document.getElementById("selected-goal-symbol").className = `goal-symbol ${goalSymbol}`;
  document.getElementById("plan-description").textContent = plans[state.goal].description;
  const items = [...plans[state.goal].items, ...state.customItems.map(item => [item.time,item.activity,item.description,`${item.duration} min`,item.type])];
  document.getElementById("schedule-list").innerHTML = items.map((item,index) => {
    const key = `${state.goal}-${index}-${item[1]}`;
    const complete = Boolean(state.completed[key]);
    const minutes = parseInt(item[3],10) || 1;
    return `<div class="schedule-item"><span class="schedule-time">${escapeHTML(item[0])}</span><span class="schedule-dot" aria-hidden="true">${activityMark(item[4])}</span><span class="schedule-copy"><strong>${escapeHTML(item[1])}</strong><small>${escapeHTML(item[2])}</small></span><button class="schedule-start" data-start="${escapeHTML(item[1])}" data-minutes="${minutes}" type="button" aria-label="Start ${minutes} minute ${escapeHTML(item[1])} timer">Start</button><button class="schedule-check${complete ? " complete" : ""}" data-complete="${escapeHTML(key)}" aria-label="${complete ? "Mark incomplete" : "Mark complete"}: ${escapeHTML(item[1])}" type="button"></button></div>`;
  }).join("");
  const plan = plans[state.goal];
  const scripture = plan.scripture ? `<article class="plan-detail-card scripture-card"><p class="eyebrow">SCRIPTURE &amp; REFLECTION</p><h3>${escapeHTML(plan.scripture.passage)}</h3><p>${escapeHTML(plan.scripture.text)}</p><strong>Moral lesson</strong><p>${escapeHTML(plan.scripture.lesson)}</p></article>` : "";
  const exercise = exercisePlans[state.exerciseLevel];
  const meal = mealPlans[state.dietGoal];
  document.getElementById("plan-details").innerHTML = `<article class="plan-detail-card exercise-card"><div class="detail-card-heading"><div><p class="eyebrow">TODAY'S NO-EQUIPMENT MOVEMENT</p><h3>${escapeHTML(exercise.title)}</h3></div><label class="inline-select-label" for="exercise-level">Level<select class="inline-select" id="exercise-level"><option value="beginner"${state.exerciseLevel === "beginner" ? " selected" : ""}>Beginner</option><option value="intermediate"${state.exerciseLevel === "intermediate" ? " selected" : ""}>Intermediate</option><option value="pro"${state.exerciseLevel === "pro" ? " selected" : ""}>Pro</option></select></label></div><ol>${exercise.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol><p class="safety-note">No equipment needed. Work at your own pace and stop if you feel pain or unwell.</p></article>${scripture}<article class="plan-detail-card diet-card"><div class="detail-card-heading"><div><p class="eyebrow">TODAY'S MEAL IDEAS</p><h3>${escapeHTML(meal.title)}</h3></div><label class="inline-select-label" for="diet-goal">Nutrition<select class="inline-select" id="diet-goal"><option value="slim"${state.dietGoal === "slim" ? " selected" : ""}>Slim down</option><option value="gain"${state.dietGoal === "gain" ? " selected" : ""}>Build weight</option></select></label></div><ul>${meal.meals.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul><p class="safety-note">${escapeHTML(meal.note)}</p></article><article class="plan-detail-card sleep-card"><p class="eyebrow">TONIGHT'S SLEEP SCHEDULE</p><div class="sleep-times"><span><small>Wind down</small><strong>${escapeHTML(plan.sleep.windDown)}</strong></span><span><small>Bedtime</small><strong>${escapeHTML(plan.sleep.bedtime)}</strong></span><span><small>Wake up</small><strong>${escapeHTML(plan.sleep.wake)}</strong></span></div><p>${escapeHTML(plan.sleep.note)}</p></article>`;
}
function activityMark(type) { return ({focus:"F",water:"W",move:"M",read:"R",rest:"S",faith:"P"})[type] || "•"; }
function renderUsage() {
  const weekView = document.getElementById("screen-period").value === "week";
  const days = Array.from({length:weekView ? 7 : 1},(_,index) => {
    const date = new Date();
    date.setDate(date.getDate() - (weekView ? 6-index : 0));
    const key = dateKey(date);
    const saved = state.usageHistory[key] || {};
    return {
      total:key === dateKey() && state.usageDate === key && state.usageTotalManual ? state.screenMinutes : Number(saved.screenMinutes) || 0,
      apps:key === dateKey() && state.usageDate === key ? state.appUsage : (Array.isArray(saved.appUsage) ? saved.appUsage : [])
    };
  });
  const total = days.reduce((sum,day) => sum + day.total,0);
  const appTotals = new Map();
  days.forEach(day => day.apps.forEach(app => {
    const key = app.name.toLowerCase();
    const previous = appTotals.get(key);
    appTotals.set(key,{name:app.name,minutes:(previous?.minutes || 0) + app.minutes});
  }));
  const usage = [...appTotals.values()];
  document.getElementById("screen-total-large").textContent = formatDuration(total);
  document.getElementById("screen-total-caption").textContent = weekView ? "phone use logged over 7 days" : "phone use logged today";
  const max = Math.max(1,...usage.map(app => app.minutes));
  document.getElementById("app-usage-list").innerHTML = usage.length ? usage.map((app,index) => {
    const color = ["#a98bff","#75aaff","#65d0ad","#e99bcc","#ffbd79"][index%5];
    return `<div class="app-row"><span class="app-mark" style="background:${color}20;color:${color}">${escapeHTML(app.name.slice(0,1).toUpperCase())}</span><strong>${escapeHTML(app.name)}</strong><span class="app-meter"><i style="width:${Math.round(app.minutes/max*100)}%;--meter:${color}"></i></span><time>${formatDuration(app.minutes)}</time><button class="remove-app-usage" data-remove-app="${escapeHTML(app.name)}" type="button" aria-label="Remove ${escapeHTML(app.name)} usage">×</button></div>`;
  }).join("") : `<p class="empty-usage">No per-app entries yet. Use “Log app time” to add your own device usage.</p>`;
}
function updateTimeDisplay() {
  const minutes = Math.floor(remainingSeconds/60);
  const seconds = remainingSeconds%60;
  document.getElementById("timer-display").textContent = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}
function setTimer(minutes,activity = "Focus session") {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = minutes * 60;
  remainingSeconds = timerSeconds;
  document.getElementById("timer-start").textContent = activity === "Focus session" || activity === "Work / focus" ? "Start focus" : "Start session";
  document.getElementById("timer-label").textContent = "READY WHEN YOU ARE";
  timerActivity = activity;
  document.getElementById("timer-session").textContent = timerActivity;
  document.getElementById("timer-ring").style.background = "conic-gradient(#9c84ff 0deg,#526bd0 290deg,#292e44 290deg 360deg)";
  document.querySelectorAll(".preset").forEach(button => button.classList.toggle("active", Number(button.dataset.minutes) === minutes));
  updateTimeDisplay();
}
function startTimer() {
  if (remainingSeconds <= 0) remainingSeconds = timerSeconds;
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById("timer-start").textContent = "Resume focus";
    document.getElementById("timer-label").textContent = "PAUSED";
    return;
  }
  timerRunning = true;
  document.getElementById("timer-start").textContent = "Pause session";
  document.getElementById("timer-label").textContent = "YOU’RE IN THE FLOW";
  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    updateTimeDisplay();
    const progress = (timerSeconds - remainingSeconds)/timerSeconds;
    const deg = Math.round(progress*360);
    document.getElementById("timer-ring").style.background = `conic-gradient(#9c84ff ${deg}deg,#292e44 ${deg}deg 360deg)`;
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      if (timerActivity === "Focus session" || timerActivity === "Work / focus") state.focusMinutes += Math.round(timerSeconds/60);
      saveState(); renderStats();
      document.getElementById("timer-label").textContent = "SESSION COMPLETE";
      document.getElementById("timer-start").textContent = "Start again";
      showToast(`${timerActivity} complete. Take a short break.`);
    }
  },1000);
}
function openAuth(mode = "signin") {
  authMode = mode;
  document.getElementById("auth-title").textContent = mode === "signup" ? "Start your journey." : "Welcome back.";
  document.getElementById("auth-subtitle").textContent = mode === "signup" ? "Create an account to keep your progress on this device." : "Sign in to pick up where you left off.";
  document.getElementById("name-field").hidden = mode !== "signup";
  document.getElementById("auth-name").required = mode === "signup";
  document.getElementById("signup-preferences").hidden = mode !== "signup";
  document.getElementById("signup-goal").value = state.goal;
  document.getElementById("signup-exercise-level").value = state.exerciseLevel;
  document.getElementById("signup-diet-goal").value = state.dietGoal;
  document.getElementById("auth-password").autocomplete = mode === "signup" ? "new-password" : "current-password";
  document.getElementById("auth-submit").textContent = mode === "signup" ? "Create account" : "Sign in";
  document.getElementById("auth-switch-copy").textContent = mode === "signup" ? "Already have an account?" : "New to Kaizen?";
  document.getElementById("auth-switch").textContent = mode === "signup" ? "Sign in" : "Create an account";
  document.getElementById("auth-error").textContent = "";
  document.getElementById("auth-dialog").showModal();
}
function enableReminders() {
  if (!("Notification" in window)) {
    showToast("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then(permission => {
    if (permission !== "granted") {
      showToast("Notifications are off. You can enable them in browser settings.");
      return;
    }
    state.reminders = true; saveState(); scheduleReminders();
    showToast("Reminders enabled for 9 am, 6 pm, and 9 pm.");
  }).catch(error => {
    console.error("Unable to request notification permission.", error);
    showToast("Could not enable reminders in this browser.");
  });
}
function scheduleReminders() {
  if (!state.reminders || !("Notification" in window) || Notification.permission !== "granted") return;
  const now = new Date();
  const nextReminder = [[9,0],[18,0],[21,0]].map(([hour,minute]) => {
    const at = new Date(now);
    at.setHours(hour,minute,0,0);
    if (at <= now) at.setDate(at.getDate()+1);
    return {at,hour};
  }).sort((first,second) => first.at - second.at)[0];
  setTimeout(() => {
    if (state.lastVisit !== dateKey()) {
      new Notification("A small step for today", { body:"Open Kaizen to check in and keep your streak going.", tag:`kaizen-${nextReminder.hour}` });
    }
    scheduleReminders();
  },nextReminder.at.getTime()-now.getTime());
}
function addCustomPlan(activity,duration) {
  const now = new Date();
  const hour = now.getHours();
  const time = `${String(hour%12||12).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")} ${hour<12?"AM":"PM"}`;
  const item = {activity,duration,time,description:activity === "Meditation" ? "Take a moment for quiet reflection or prayer" : `${activity} session, planned by you`,type:({Work:"focus",Sleep:"rest",Hydration:"water",Exercise:"move",Reading:"read",Meditation:"faith"})[activity]};
  state.customItems.push(item); saveState(); renderPlan(); renderStats();
}

document.getElementById("today-label").textContent = friendlyDate();
refreshStreak();
renderProfile(); renderStats(); renderPlan(); renderUsage(); updateTimeDisplay(); scheduleReminders();
document.getElementById("schedule-list").addEventListener("click",event => {
  const startButton = event.target.closest("[data-start]");
  if (startButton) {
    setTimer(Number(startButton.dataset.minutes),startButton.dataset.start);
    startTimer();
    document.getElementById("focus-timer").scrollIntoView({behavior:"smooth",block:"center"});
    return;
  }
  const button = event.target.closest("[data-complete]");
  if (!button) return;
  const key = button.dataset.complete;
  state.completed[key] = !state.completed[key];
  saveState(); renderPlan(); renderStats();
});
document.getElementById("timer-start").addEventListener("click",startTimer);
document.getElementById("timer-reset").addEventListener("click",() => setTimer(timerSeconds/60,timerActivity));
document.querySelectorAll(".preset[data-minutes]").forEach(button => button.addEventListener("click",() => setTimer(Number(button.dataset.minutes))));
document.getElementById("custom-timer-button").addEventListener("click",() => {
  const select = document.getElementById("timer-duration");
  select.value = "custom";
  document.getElementById("custom-duration").value = "30";
  document.getElementById("custom-duration-field").hidden = false;
  document.getElementById("timer-activity").value = timerActivity;
  document.getElementById("timer-dialog").showModal();
});
document.getElementById("timer-settings").addEventListener("click",() => {
  const duration = document.getElementById("timer-duration");
  const activity = document.getElementById("timer-activity");
  if (!Array.from(activity.options).some(option => option.value === timerActivity)) {
    activity.add(new Option(timerActivity,timerActivity,true,true));
  }
  const hasDurationOption = Array.from(duration.options).some(option => option.value === String(timerSeconds/60));
  duration.value = hasDurationOption ? String(timerSeconds/60) : "custom";
  document.getElementById("custom-duration").value = String(timerSeconds/60);
  document.getElementById("custom-duration-field").hidden = hasDurationOption;
  activity.value = timerActivity;
  document.getElementById("timer-dialog").showModal();
});
document.getElementById("timer-duration").addEventListener("change",event => {
  document.getElementById("custom-duration-field").hidden = event.target.value !== "custom";
});
document.getElementById("timer-form").addEventListener("submit",event => {
  event.preventDefault();
  const duration = document.getElementById("timer-duration").value;
  const minutes = duration === "custom" ? Number(document.getElementById("custom-duration").value) : Number(duration);
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 720) {
    showToast("Choose a whole number of minutes from 1 to 720.");
    return;
  }
  setTimer(minutes,document.getElementById("timer-activity").value);
  document.getElementById("timer-dialog").close();
  showToast(`${timerActivity} timer set.`);
});
document.getElementById("refresh-plan").addEventListener("click",() => document.getElementById("plan-dialog").showModal());
document.getElementById("plan-button").addEventListener("click",() => document.getElementById("plan-dialog").showModal());
document.getElementById("plan-form").addEventListener("submit",event => {
  event.preventDefault();
  addCustomPlan(document.getElementById("plan-activity").value,Number(document.getElementById("plan-duration").value));
  document.getElementById("plan-dialog").close(); showToast("Added to your daily plan.");
});
document.getElementById("settings-button").addEventListener("click",() => {
  document.getElementById("settings-goal").value = state.goal;
  document.getElementById("settings-exercise-level").value = state.exerciseLevel;
  document.getElementById("settings-diet-goal").value = state.dietGoal;
  document.getElementById("settings-dialog").showModal();
});
document.getElementById("change-goal").addEventListener("click",() => document.getElementById("settings-button").click());
document.getElementById("settings-form").addEventListener("submit",event => {
  event.preventDefault();
  state.goal = document.getElementById("settings-goal").value;
  state.exerciseLevel = document.getElementById("settings-exercise-level").value;
  state.dietGoal = document.getElementById("settings-diet-goal").value;
  if (state.account) {
    state.account.goal = state.goal;
    state.account.exerciseLevel = state.exerciseLevel;
    state.account.dietGoal = state.dietGoal;
  }
  saveState(); renderPlan(); renderStats(); renderUsage();
  document.getElementById("settings-dialog").close();
  showToast("Your goal, movement level, and meal ideas have been updated.");
});
document.getElementById("plan-details").addEventListener("change",event => {
  if (event.target.id === "exercise-level") state.exerciseLevel = event.target.value;
  else if (event.target.id === "diet-goal") state.dietGoal = event.target.value;
  else return;
  if (state.account) {
    state.account.exerciseLevel = state.exerciseLevel;
    state.account.dietGoal = state.dietGoal;
  }
  saveState(); renderPlan();
});
document.getElementById("sign-in-button").addEventListener("click",() => {
  if (state.user) { state.user = null; saveState(); renderProfile(); showToast("You have signed out."); }
  else openAuth("signin");
});
document.getElementById("profile-button").addEventListener("click",() => state.user ? showToast("Your progress is saved on this device.") : openAuth("signup"));
document.getElementById("auth-switch").addEventListener("click",() => openAuth(authMode === "signin" ? "signup" : "signin"));
function derivePasswordHash(password,salt) {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey("raw",encoder.encode(password),"PBKDF2",false,["deriveBits"])
    .then(key => crypto.subtle.deriveBits({name:"PBKDF2",salt:encoder.encode(salt),iterations:210000,hash:"SHA-256"},key,256))
    .then(bits => Array.from(new Uint8Array(bits),byte => byte.toString(16).padStart(2,"0")).join(""));
}
document.getElementById("auth-form").addEventListener("submit",async event => {
  event.preventDefault();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const password = document.getElementById("auth-password").value;
  if (password.length < 8) { document.getElementById("auth-error").textContent = "Password must be at least 8 characters."; return; }
  const submit = document.getElementById("auth-submit");
  submit.disabled = true;
  submit.textContent = "Please wait...";
  try {
    if (authMode === "signup") {
      const name = document.getElementById("auth-name").value.trim();
      if (!name) { document.getElementById("auth-error").textContent = "Please enter your name."; return; }
      if (state.account?.email === email) { document.getElementById("auth-error").textContent = "An account with this email already exists on this device. Sign in instead."; return; }
      const salt = Array.from(crypto.getRandomValues(new Uint8Array(16)),byte => byte.toString(16).padStart(2,"0")).join("");
      const passwordHash = await derivePasswordHash(password,salt);
      state.goal = document.getElementById("signup-goal").value;
      state.exerciseLevel = document.getElementById("signup-exercise-level").value;
      state.dietGoal = document.getElementById("signup-diet-goal").value;
      state.account = {name,email,salt,passwordHash,goal:state.goal,exerciseLevel:state.exerciseLevel,dietGoal:state.dietGoal};
      state.user = {name,email};
      document.getElementById("auth-dialog").close(); saveState(); renderProfile(); renderPlan(); renderStats(); showToast("Welcome to Kaizen, " + name.split(" ")[0] + ".");
    } else if (state.account?.email === email) {
      const passwordHash = await derivePasswordHash(password,state.account.salt);
      if (passwordHash !== state.account.passwordHash) {
        document.getElementById("auth-error").textContent = "That password does not match this account.";
        return;
      }
      state.user = {name:state.account.name,email:state.account.email};
      state.goal = plans[state.account.goal] ? state.account.goal : state.goal;
      state.exerciseLevel = ["beginner","intermediate","pro"].includes(state.account.exerciseLevel) ? state.account.exerciseLevel : state.exerciseLevel;
      state.dietGoal = state.account.dietGoal === "gain" ? "gain" : state.dietGoal;
      document.getElementById("auth-dialog").close(); saveState(); renderProfile(); renderPlan(); renderStats(); showToast("Welcome back.");
    } else {
      document.getElementById("auth-error").textContent = "No account found on this device. Create an account to get started.";
    }
  } catch (error) {
    console.error("Unable to complete local authentication.", error);
    document.getElementById("auth-error").textContent = "Password protection needs a secure browser context (HTTPS or localhost).";
  } finally {
    submit.disabled = false;
    submit.textContent = authMode === "signup" ? "Create account" : "Sign in";
  }
});
document.getElementById("notification-button").addEventListener("click",enableReminders);
document.getElementById("streak-widget-button").addEventListener("click",() => {
  state.widget = !state.widget; saveState(); renderStats();
  showToast(state.widget ? "Streak widget enabled in this preview." : "Streak widget turned off.");
});
document.getElementById("edit-usage").addEventListener("click",() => {
  document.getElementById("usage-total-minutes").value = String(state.screenMinutes);
  document.getElementById("usage-total-dialog").showModal();
});
document.getElementById("usage-total-form").addEventListener("submit",event => {
  event.preventDefault();
  const minutes = Number(document.getElementById("usage-total-minutes").value);
  if (!Number.isInteger(minutes) || minutes < 0 || minutes > 1440) { showToast("Enter a whole number from 0 to 1440 minutes."); return; }
  state.screenMinutes = minutes; state.usageTotalManual = true;
  saveCurrentUsage(); renderStats(); renderUsage();
  document.getElementById("usage-total-dialog").close(); showToast("Phone screen time saved.");
});
document.getElementById("log-app-usage").addEventListener("click",() => document.getElementById("app-usage-dialog").showModal());
document.getElementById("app-usage-form").addEventListener("submit",event => {
  event.preventDefault();
  const name = document.getElementById("usage-app-name").value.trim();
  const minutes = Number(document.getElementById("usage-app-minutes").value);
  if (!name || !Number.isInteger(minutes) || minutes < 1 || minutes > 1440) { showToast("Enter an app name and whole minutes between 1 and 1440."); return; }
  const existing = state.appUsage.find(app => app.name.toLowerCase() === name.toLowerCase());
  if (existing) existing.minutes = minutes;
  else state.appUsage.push({name,minutes});
  saveCurrentUsage(); renderUsage(); document.getElementById("app-usage-form").reset();
  document.getElementById("app-usage-dialog").close(); showToast("App time saved.");
});
document.getElementById("app-usage-list").addEventListener("click",event => {
  const removeButton = event.target.closest("[data-remove-app]");
  if (!removeButton) return;
  state.appUsage = state.appUsage.filter(app => app.name !== removeButton.dataset.removeApp);
  saveCurrentUsage(); renderUsage(); showToast("App entry removed.");
});
document.getElementById("screen-period").addEventListener("change",renderUsage);
document.getElementById("device-access").addEventListener("click",() => document.getElementById("device-access-dialog").showModal());
document.getElementById("permission-guide-done").addEventListener("click",() => document.getElementById("device-access-dialog").close());
function saveCurrentUsage() {
  state.usageDate = dateKey();
  state.usageHistory[state.usageDate] = {
    screenMinutes:state.usageTotalManual ? state.screenMinutes : null,
    appUsage:state.appUsage.map(app => ({name:app.name,minutes:app.minutes}))
  };
  saveState();
}
window.addEventListener("storage",event => {
  if (event.key === STORAGE_KEY) location.reload();
});
